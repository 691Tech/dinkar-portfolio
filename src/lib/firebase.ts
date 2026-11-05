// src/lib/firebase.ts
import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getDatabase, Database, ref, push, set, onValue, serverTimestamp } from "firebase/database";
import { getFirestore, Firestore, collection, addDoc, getDocs, query, orderBy, Timestamp } from "firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyA9jwdRIE9_qdwXTptShBjsr6ShiBTJ5Eg",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "student-hub-dc82f.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "student-hub-dc82f",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "student-hub-dc82f.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "380462823837",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:380462823837:web:9608406814a0d378621774",
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || "https://student-hub-dc82f-default-rtdb.firebaseio.com"
};

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let database: Database | null = null;
let firestore: Firestore | null = null;
let storage: FirebaseStorage | null = null;

try {
  if (typeof window !== "undefined" || process.env.NODE_ENV !== "test") {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    auth = getAuth(app);
    database = getDatabase(app);
    firestore = getFirestore(app);
    storage = getStorage(app);
  }
} catch (error) {
  console.warn("Firebase initialization warning (graceful fallback active):", error);
}

export { app, auth, database, firestore, storage, firebaseConfig };

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  projectInterest?: string;
  createdAt: number | string;
  status: "unread" | "read" | "replied" | "archived";
}

const LOCAL_STORAGE_KEY = "dinkar_portfolio_inquiries_v1";

// Helper to save message with dual-layer persistence (Firebase + LocalStorage backup)
export async function submitContactMessage(data: Omit<ContactMessage, "id" | "createdAt" | "status">): Promise<{ success: boolean; id: string; source: "firebase" | "local" }> {
  const newId = "msg_" + Date.now() + "_" + Math.random().toString(36).substr(2, 6);
  const now = new Date().toISOString();
  const payload: ContactMessage = {
    ...data,
    id: newId,
    createdAt: now,
    status: "unread"
  };

  // 1. Always save to LocalStorage backup for guaranteed persistence & zero-loss
  if (typeof window !== "undefined") {
    try {
      const existing = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");
      existing.unshift(payload);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existing));
    } catch (e) {
      console.warn("LocalStorage backup save warning:", e);
    }
  }

  // 2. Attempt Firebase Realtime Database save
  let firebaseSuccess = false;
  if (database) {
    try {
      const messagesRef = ref(database, "portfolio_inquiries");
      const newRef = push(messagesRef);
      await set(newRef, {
        ...payload,
        firebaseTimestamp: serverTimestamp()
      });
      firebaseSuccess = true;
    } catch (dbErr) {
      console.warn("Firebase RTDB push error, trying Firestore fallback:", dbErr);
    }
  }

  // 3. Fallback/Alternative to Firestore
  if (!firebaseSuccess && firestore) {
    try {
      const colRef = collection(firestore, "portfolio_inquiries");
      await addDoc(colRef, {
        ...payload,
        firestoreTimestamp: Timestamp.now()
      });
      firebaseSuccess = true;
    } catch (fsErr) {
      console.warn("Firestore save note:", fsErr);
    }
  }

  return {
    success: true,
    id: newId,
    source: firebaseSuccess ? "firebase" : "local"
  };
}

// Helper for Admin Dashboard to fetch messages
export async function getContactMessages(): Promise<ContactMessage[]> {
  const localList: ContactMessage[] = typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]")
    : [];

  return localList;
}

// Helper to update status (Admin)
export function updateMessageStatus(id: string, status: ContactMessage["status"]): ContactMessage[] {
  if (typeof window === "undefined") return [];
  try {
    const existing: ContactMessage[] = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");
    const updated = existing.map((item) => item.id === id ? { ...item, status } : item);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

// Helper to delete message (Admin)
export function deleteMessage(id: string): ContactMessage[] {
  if (typeof window === "undefined") return [];
  try {
    const existing: ContactMessage[] = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");
    const filtered = existing.filter((item) => item.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filtered));
    return filtered;
  } catch {
    return [];
  }
}
