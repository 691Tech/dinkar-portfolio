"use client";

import React, { useState, useEffect } from "react";
import { 
  X, ExternalLink, Check, ShoppingBag, Send, Plus, Trash2, ArrowRight, 
  Terminal, Cpu, Play, AlertTriangle, Activity, Wifi, Shield, RefreshCw,
  BarChart3, Layers, BookOpen, Sparkles, CheckCircle2
} from "lucide-react";
import { Project } from "@/data/portfolio";
import { GithubIcon } from "@/components/Icons";
import confetti from "canvas-confetti";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // View state: 'sandbox' | 'architecture'
  const [viewMode, setViewMode] = useState<"sandbox" | "architecture">("sandbox");

  // 1. E-COMMERCE SIMULATOR STATE
  const [cart, setCart] = useState<{ id: number; name: string; price: number; qty: number }[]>([
    { id: 1, name: "Mechanical Gaming Keyboard", price: 79, qty: 1 }
  ]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const demoProducts = [
    { id: 1, name: "Mechanical Keyboard", price: 79, tag: "Cherry MX" },
    { id: 2, name: "Wireless Studio Headphones", price: 129, tag: "ANC Active" },
    { id: 3, name: "Precision Mouse", price: 49, tag: "16K DPI" },
    { id: 4, name: "High-Speed Hub", price: 35, tag: "USB-C 10Gbps" }
  ];
  const addToCart = (product: { id: number; name: string; price: number }) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  const handleCheckout = () => {
    if (cart.length === 0) return;
    setOrderPlaced(true);
    try {
      confetti({ particleCount: 45, spread: 60, origin: { y: 0.7 } });
    } catch {}
  };
  const cartTotal = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

  // 2. CHAT SIMULATOR STATE
  const [currentUser, setCurrentUser] = useState<"Recruiter" | "Dinkar">("Recruiter");
  const [messages, setMessages] = useState<{ sender: string; text: string; time: string }[]>([
    { sender: "Dinkar", text: "Welcome! This simulator mirrors my Socket.io WebSocket architecture.", time: "12:00" },
    { sender: "Recruiter", text: "Impressive work Dinkar! How is persistent chat history handled?", time: "12:01" },
    { sender: "Dinkar", text: "Messages stream sub-50ms via Socket.io and are atomically written to MongoDB collections.", time: "12:01" }
  ]);
  const [inputMsg, setInputMsg] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const sendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputMsg.trim()) return;
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const newMsg = { sender: currentUser, text: inputMsg.trim(), time };
    setMessages((prev) => [...prev, newMsg]);
    setInputMsg("");
    if (currentUser === "Recruiter") {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            sender: "Dinkar",
            text: "Thanks for testing! Check out the complete source code on GitHub @691Tech.",
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
          }
        ]);
      }, 1000);
    }
  };

  // 3. AI FRAUD ANOMALY STATE
  const [fraudTxns, setFraudTxns] = useState([
    { id: "TXN-882", desc: "Local Campus Grocery", amount: "$24.50", mse: 0.006, flag: "NORMAL" },
    { id: "TXN-883", desc: "Vadodara Bookstore", amount: "$38.00", mse: 0.009, flag: "NORMAL" },
    { id: "TXN-884", desc: "Offshore Crypto Exchange", amount: "$3,120.00", mse: 0.168, flag: "FRAUD BLOCKED" }
  ]);
  const [simulatingTxn, setSimulatingTxn] = useState(false);
  const addTransaction = (isFraud: boolean) => {
    setSimulatingTxn(true);
    setTimeout(() => {
      setSimulatingTxn(false);
      const newTx = {
        id: "TXN-" + Math.floor(100 + Math.random() * 900),
        desc: isFraud ? "High-Velocity Overseas IP Node" : "Tech Accessories Store",
        amount: isFraud ? `$${(1500 + Math.random() * 2500).toFixed(2)}` : `$${(20 + Math.random() * 70).toFixed(2)}`,
        mse: isFraud ? Number((0.09 + Math.random() * 0.11).toFixed(3)) : Number((0.003 + Math.random() * 0.015).toFixed(3)),
        flag: isFraud ? "FRAUD BLOCKED" : "NORMAL"
      };
      setFraudTxns((prev) => [newTx, ...prev.slice(0, 3)]);
    }, 300);
  };

  // 4. PACKET SNIFFER STATE
  const [packets, setPackets] = useState([
    { proto: "TCP", src: "192.168.1.42:5173", dst: "104.21.48.91:443", size: "1,420 B", status: "ACK" },
    { proto: "UDP", src: "192.168.1.42:53", dst: "1.1.1.1:53", size: "64 B", status: "DNS_QUERY" },
    { proto: "TCP", src: "192.168.1.42:48912", dst: "142.250.190.46:443", size: "840 B", status: "TLS_DATA" }
  ]);
  const [capturing, setCapturing] = useState(true);
  const captureOnePacket = () => {
    const protocols = ["TCP", "UDP", "TLS", "HTTP/2"];
    const chosen = protocols[Math.floor(Math.random() * protocols.length)];
    const newPacket = {
      proto: chosen,
      src: `192.168.1.${Math.floor(10 + Math.random() * 80)}:${Math.floor(3000 + Math.random() * 50000)}`,
      dst: `172.217.${Math.floor(1 + Math.random() * 200)}.${Math.floor(1 + Math.random() * 200)}:443`,
      size: `${Math.floor(64 + Math.random() * 1400)} B`,
      status: chosen === "UDP" ? "DNS_RESOLVE" : "INSPECTED"
    };
    setPackets((prev) => [newPacket, ...prev.slice(0, 3)]);
  };

  // 5. CAMPUS PORTAL GPA SIMULATOR STATE
  const [courses, setCourses] = useState([
    { name: "Artificial Intelligence Foundations", credits: 4, grade: 10 },
    { name: "Data Structures & Algorithms in Java", credits: 4, grade: 10 },
    { name: "Full-Stack Web Engineering", credits: 3, grade: 9 },
    { name: "Database Management Systems", credits: 3, grade: 9 }
  ]);
  const updateGrade = (idx: number, newGrade: number) => {
    setCourses((prev) => prev.map((c, i) => i === idx ? { ...c, grade: newGrade } : c));
  };
  const totalCredits = courses.reduce((a, b) => a + b.credits, 0);
  const currentGPA = (courses.reduce((a, b) => a + b.credits * b.grade, 0) / totalCredits).toFixed(2);

  // 6. DSA SORTING ENGINE SIMULATOR STATE
  const [arrayBars, setArrayBars] = useState([45, 80, 25, 95, 60, 35, 70, 15, 90, 50]);
  const [sortingStep, setSortingStep] = useState(0);
  const shuffleBars = () => {
    setArrayBars([...arrayBars].sort(() => Math.random() - 0.5));
    setSortingStep(0);
  };
  const stepSort = () => {
    setArrayBars((prev) => {
      const arr = [...prev];
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          setSortingStep((s) => s + 1);
          return arr;
        }
      }
      return arr;
    });
  };

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 md:p-8 animate-fadeIn"
      onClick={onClose}
    >
      {/* Creative Compact Slate - Seamless, No heavy clunky box */}
      <div
        className="bg-[#FAF8F5] rounded-3xl sm:rounded-[2.25rem] max-w-4xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[92dvh] relative border border-[#E6DFD5]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sleek Floating Header */}
        <div className="px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between border-b border-[#EAE3D8] bg-white/70 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <span 
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ backgroundColor: project.colorScheme.accent }}
            ></span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading-sans font-extrabold text-base sm:text-xl text-[#1C1613] tracking-tight">
                  {project.title}
                </h3>
                <span className="text-[10px] font-code-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#F4EFEA] text-[#7A6A5E] hidden sm:inline">
                  {project.categoryLabel}
                </span>
              </div>
              <p className="text-xs text-[#7A6A5E] font-medium hidden sm:block">
                {project.subtitle} &bull; <span className="text-[#1C1613]">{project.role}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Pill Switch */}
            <div className="inline-flex p-1 rounded-full bg-[#F0EBE3] text-xs font-heading-sans font-semibold">
              <button
                onClick={() => setViewMode("sandbox")}
                className={`px-3 py-1 rounded-full transition-all text-[11px] sm:text-xs flex items-center gap-1.5 ${
                  viewMode === "sandbox"
                    ? "bg-[#1C1613] text-white shadow-xs"
                    : "text-[#7A6A5E] hover:text-[#1C1613]"
                }`}
              >
                <Cpu className="w-3 h-3" />
                <span>Live Simulator</span>
              </button>
              <button
                onClick={() => setViewMode("architecture")}
                className={`px-3 py-1 rounded-full transition-all text-[11px] sm:text-xs flex items-center gap-1.5 ${
                  viewMode === "architecture"
                    ? "bg-[#1C1613] text-white shadow-xs"
                    : "text-[#7A6A5E] hover:text-[#1C1613]"
                }`}
              >
                <Terminal className="w-3 h-3" />
                <span>Architecture</span>
              </button>
            </div>

            {/* Quick GitHub Link */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white hover:bg-[#FAF8F5] text-[#1C1613] border border-[#E6DFD5] transition-colors"
              title="Open GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white hover:bg-[#1C1613] hover:text-white text-[#574B42] border border-[#E6DFD5] transition-all"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Compact Content Area */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-7 space-y-6">
          
          {/* VIEW MODE 1: INTERACTIVE CREATIVE SIMULATORS */}
          {viewMode === "sandbox" && (
            <div className="space-y-6">

              {/* 1. E-COMMERCE SIMULATOR */}
              {project.demoType === "ecommerce" && (
                <div className="space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#EAE3D8]">
                    <div>
                      <span className="font-heading-sans font-bold text-sm text-[#1C1613] flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4 text-[#E06A26]" />
                        Full-Stack Commerce State Pipeline
                      </span>
                      <p className="text-xs text-[#7A6A5E] mt-0.5">
                        Test optimistic state synchronization, shopping cart recalculation, and simulated order dispatch.
                      </p>
                    </div>
                    <span className="text-[11px] font-code-mono px-2.5 py-1 rounded-full bg-[#FFF3EB] text-[#E06A26] font-semibold self-start sm:self-auto">
                      REST: Node/Express
                    </span>
                  </div>

                  {orderPlaced ? (
                    <div className="py-8 px-6 text-center rounded-2xl bg-white border border-[#E6DFD5] space-y-3">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                        <Check className="w-6 h-6" />
                      </div>
                      <h4 className="font-heading-sans font-bold text-lg text-[#1C1613]">
                        Simulated Order Dispatched!
                      </h4>
                      <p className="text-xs text-[#7A6A5E] max-w-sm mx-auto">
                        Order <span className="font-code-mono font-bold text-[#1C1613]">#ORD-98214</span> was verified. Total charged: <strong className="text-[#E06A26]">${cartTotal}</strong>.
                      </p>
                      <button
                        onClick={() => {
                          setOrderPlaced(false);
                          setCart([{ id: 1, name: "Mechanical Gaming Keyboard", price: 79, qty: 1 }]);
                        }}
                        className="btn-primary-warm text-xs py-2 px-5 mx-auto"
                      >
                        Reset Store Demo
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
                      {/* Catalog Items (7 cols) */}
                      <div className="md:col-span-7 space-y-2.5">
                        <span className="text-xs font-heading-sans font-bold text-[#8A7B70] uppercase tracking-wider block">
                          Catalog Products (Click + to Add)
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {demoProducts.map((p) => (
                            <div 
                              key={p.id}
                              className="p-3 rounded-2xl bg-white border border-[#EAE3D8] hover:border-[#D6CBC0] transition-colors flex items-center justify-between"
                            >
                              <div className="truncate pr-2">
                                <span className="text-[10px] font-code-mono text-[#E06A26] bg-[#FFF3EB] px-1.5 py-0.5 rounded">
                                  {p.tag}
                                </span>
                                <h5 className="font-heading-sans font-bold text-xs text-[#1C1613] mt-1 truncate">
                                  {p.name}
                                </h5>
                                <span className="font-code-mono text-xs font-semibold text-[#574B42]">${p.price}</span>
                              </div>
                              <button
                                onClick={() => addToCart(p)}
                                className="w-8 h-8 rounded-full bg-[#FAF8F5] hover:bg-[#E06A26] hover:text-white text-[#1C1613] border border-[#E0D7CC] flex items-center justify-center transition-colors shrink-0"
                                title="Add to cart"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Active Cart Drawer (5 cols) */}
                      <div className="md:col-span-5 p-4 rounded-2xl bg-white border border-[#EAE3D8] space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-[#F4EFEA]">
                          <span className="text-xs font-heading-sans font-bold text-[#1C1613] flex items-center gap-1.5">
                            <ShoppingBag className="w-3.5 h-3.5 text-[#E06A26]" />
                            <span>Cart ({cart.reduce((a, b) => a + b.qty, 0)})</span>
                          </span>
                          <span className="font-code-mono text-xs font-bold text-[#E06A26]">${cartTotal}</span>
                        </div>

                        <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                          {cart.length === 0 ? (
                            <p className="text-xs text-[#8A7B70] py-3 text-center">Cart is empty.</p>
                          ) : (
                            cart.map((item) => (
                              <div key={item.id} className="flex items-center justify-between text-xs py-1">
                                <span className="text-[#1C1613] font-medium truncate pr-2">{item.name} &times; {item.qty}</span>
                                <div className="flex items-center gap-2 shrink-0">
                                  <span className="font-code-mono font-bold">${item.price * item.qty}</span>
                                  <button onClick={() => removeFromCart(item.id)} className="text-[#8A7B70] hover:text-red-500">
                                    <Trash2 className="w-3 h-3" />
                                  </button>
                                </div>
                              </div>
                            ))
                          )}
                        </div>

                        <button
                          onClick={handleCheckout}
                          disabled={cart.length === 0}
                          className="w-full btn-primary-warm text-xs py-2 justify-center disabled:opacity-50"
                        >
                          <span>Checkout (${cartTotal})</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 2. CHAT SIMULATOR */}
              {project.demoType === "chat" && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#EAE3D8]">
                    <div>
                      <span className="font-heading-sans font-bold text-sm text-[#1C1613] flex items-center gap-2">
                        <Wifi className="w-4 h-4 text-emerald-600" />
                        WebSocket Real-Time Broadcast Stream
                      </span>
                      <p className="text-xs text-[#7A6A5E] mt-0.5">
                        Two-way duplex streaming simulating Socket.io client-server message propagation.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      <span className="text-[11px] text-[#7A6A5E] font-medium">Active:</span>
                      <button
                        onClick={() => setCurrentUser(currentUser === "Recruiter" ? "Dinkar" : "Recruiter")}
                        className="px-2.5 py-1 rounded-full bg-[#1C1613] text-[#FAF8F5] text-[11px] font-heading-sans font-semibold flex items-center gap-1"
                      >
                        <span>{currentUser}</span>
                        <RefreshCw className="w-2.5 h-2.5" />
                      </button>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white border border-[#EAE3D8] overflow-hidden flex flex-col h-[320px]">
                    <div className="p-3 bg-[#FAF8F5] border-b border-[#EAE3D8] flex items-center justify-between text-xs">
                      <span className="font-code-mono text-[#574B42] text-[11px] flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                        #channel: dev-interview-room
                      </span>
                      <span className="font-code-mono text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                        Latency: 38ms
                      </span>
                    </div>

                    <div className="p-4 flex-1 overflow-y-auto space-y-2">
                      {messages.map((m, i) => {
                        const isMe = m.sender === currentUser;
                        return (
                          <div key={i} className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}>
                            <span className="text-[10px] font-code-mono text-[#8A7B70] mb-0.5">
                              {m.sender} &bull; {m.time}
                            </span>
                            <div className={`px-3 py-2 rounded-2xl max-w-sm text-xs leading-relaxed ${
                              isMe ? "bg-[#1C1613] text-white rounded-tr-xs" : "bg-[#F4EFEA] text-[#1C1613] rounded-tl-xs"
                            }`}>
                              {m.text}
                            </div>
                          </div>
                        );
                      })}
                      {isTyping && (
                        <div className="text-[10px] font-code-mono text-[#8A7B70] italic">
                          Dinkar is typing...
                        </div>
                      )}
                    </div>

                    <form onSubmit={sendMessage} className="p-2.5 bg-[#FAF8F5] border-t border-[#EAE3D8] flex gap-2">
                      <input
                        type="text"
                        value={inputMsg}
                        onChange={(e) => setInputMsg(e.target.value)}
                        placeholder={`Message as ${currentUser}...`}
                        className="flex-1 px-3 py-2 text-xs bg-white border border-[#E6DFD5] rounded-full focus:outline-hidden focus:border-[#E06A26]"
                      />
                      <button type="submit" className="px-4 py-2 rounded-full bg-[#1C1613] hover:bg-[#E06A26] text-white text-xs font-semibold transition-colors flex items-center gap-1">
                        <span>Send</span>
                        <Send className="w-3 h-3" />
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {/* 3. AI FRAUD ANOMALY SIMULATOR */}
              {project.demoType === "fraud" && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#EAE3D8]">
                    <div>
                      <span className="font-heading-sans font-bold text-sm text-[#1C1613] flex items-center gap-2">
                        <Activity className="w-4 h-4 text-red-600" />
                        Deep Autoencoder Anomaly Classification
                      </span>
                      <p className="text-xs text-[#7A6A5E] mt-0.5">
                        Test transaction reconstruction loss (MSE) against the 0.042 threshold.
                      </p>
                    </div>
                    <div className="flex gap-2 self-start sm:self-auto">
                      <button
                        onClick={() => addTransaction(false)}
                        disabled={simulatingTxn}
                        className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-[11px] font-semibold hover:bg-emerald-100 transition-colors"
                      >
                        + Normal Txn
                      </button>
                      <button
                        onClick={() => addTransaction(true)}
                        disabled={simulatingTxn}
                        className="px-3 py-1 rounded-full bg-red-50 border border-red-300 text-red-800 text-[11px] font-semibold hover:bg-red-100 transition-colors flex items-center gap-1"
                      >
                        <AlertTriangle className="w-3 h-3" />
                        <span>+ Fraud Txn</span>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {fraudTxns.map((tx) => (
                      <div
                        key={tx.id}
                        className={`p-3 rounded-2xl border flex items-center justify-between text-xs transition-colors ${
                          tx.flag.includes("FRAUD")
                            ? "bg-red-50/60 border-red-200"
                            : "bg-white border-[#EAE3D8]"
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-code-mono font-bold text-[#1C1613]">{tx.id}</span>
                            <span className="font-bold text-[#1C1613]">{tx.amount}</span>
                          </div>
                          <span className="text-[11px] text-[#7A6A5E]">{tx.desc}</span>
                        </div>
                        <div className="text-right">
                          <span className={`font-code-mono text-[11px] font-bold block ${
                            tx.flag.includes("FRAUD") ? "text-red-700" : "text-emerald-700"
                          }`}>
                            MSE Loss: {tx.mse}
                          </span>
                          <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-bold ${
                            tx.flag.includes("FRAUD") ? "bg-red-600 text-white" : "bg-emerald-600 text-white"
                          }`}>
                            {tx.flag}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. PACKET SNIFFER SIMULATOR */}
              {project.demoType === "sniffer" && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#EAE3D8]">
                    <div>
                      <span className="font-heading-sans font-bold text-sm text-[#1C1613] flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-[#244372]" />
                        Low-Level Raw Socket Packet Sniffer
                      </span>
                      <p className="text-xs text-[#7A6A5E] mt-0.5">
                        Real-time kernel network buffer inspection with header decoding.
                      </p>
                    </div>
                    <button
                      onClick={captureOnePacket}
                      className="btn-primary-warm text-xs py-1.5 px-3 self-start sm:self-auto"
                    >
                      <span>Capture Packet</span>
                    </button>
                  </div>

                  <div className="space-y-2">
                    {packets.map((p, idx) => (
                      <div key={idx} className="p-3 rounded-2xl bg-white border border-[#EAE3D8] flex items-center justify-between text-xs">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded font-code-mono text-[10px] font-bold bg-[#FAF8F5] border border-[#E0D7CC] text-[#1C1613]">
                              {p.proto}
                            </span>
                            <span className="font-code-mono text-[11px] text-[#574B42]">{p.src} &rarr; {p.dst}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-code-mono text-[11px] text-[#8A7B70] block">{p.size}</span>
                          <span className="text-[10px] font-code-mono text-emerald-700 font-bold">{p.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 5. CAMPUS PORTAL GPA SIMULATOR */}
              {project.demoType === "campus" && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#EAE3D8]">
                    <div>
                      <span className="font-heading-sans font-bold text-sm text-[#1C1613] flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#E06A26]" />
                        Academic ERP &amp; CGPA Engine
                      </span>
                      <p className="text-xs text-[#7A6A5E] mt-0.5">
                        Interactive credit calculation: Adjust grade points to see real-time GPA update.
                      </p>
                    </div>
                    <div className="p-2 rounded-xl bg-[#FFF3EB] border border-[#FAD8C3] text-right self-start sm:self-auto">
                      <span className="text-[10px] font-code-mono text-[#8A7B70] uppercase block">Cumulative GPA</span>
                      <span className="font-heading-sans font-extrabold text-base text-[#E06A26]">{currentGPA} / 10.0</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {courses.map((c, i) => (
                      <div key={i} className="p-3 rounded-2xl bg-white border border-[#EAE3D8] flex items-center justify-between text-xs">
                        <div>
                          <span className="font-heading-sans font-bold text-[#1C1613] block">{c.name}</span>
                          <span className="text-[11px] text-[#8A7B70]">{c.credits} Course Credits</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-code-mono text-[11px] text-[#7A6A5E]">Grade Point:</span>
                          <select
                            value={c.grade}
                            onChange={(e) => updateGrade(i, Number(e.target.value))}
                            className="bg-[#FAF8F5] border border-[#E0D7CC] rounded-lg px-2 py-1 font-code-mono font-bold text-xs"
                          >
                            <option value={10}>10 (O / Outstanding)</option>
                            <option value={9}>9 (A+ / Excellent)</option>
                            <option value={8}>8 (A / Very Good)</option>
                            <option value={7}>7 (B+ / Good)</option>
                          </select>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 6. DSA SORTING ENGINE SIMULATOR */}
              {project.demoType === "dsa" && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#EAE3D8]">
                    <div>
                      <span className="font-heading-sans font-bold text-sm text-[#1C1613] flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-[#2E7D5B]" />
                        Algorithmic Array Sorting Engine
                      </span>
                      <p className="text-xs text-[#7A6A5E] mt-0.5">
                        Interactive array step visualizer: Step through comparisons and swaps.
                      </p>
                    </div>
                    <div className="flex gap-2 self-start sm:self-auto">
                      <button onClick={shuffleBars} className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E0D7CC] text-xs font-semibold hover:bg-white transition-colors">
                        Shuffle
                      </button>
                      <button onClick={stepSort} className="btn-primary-warm text-xs py-1 px-3">
                        <span>Step Sort ({sortingStep})</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-white border border-[#EAE3D8] flex items-end justify-center gap-2 h-44">
                    {arrayBars.map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                        <span className="text-[10px] font-code-mono text-[#8A7B70]">{val}</span>
                        <div 
                          className="w-full rounded-t-lg bg-gradient-to-t from-[#1C1613] to-[#E06A26] transition-all duration-200"
                          style={{ height: `${val * 1.2}px` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Generic fallback for any other project */}
              {project.demoType === "generic" && (
                <div className="p-8 text-center rounded-2xl bg-white border border-[#EAE3D8] space-y-3">
                  <Terminal className="w-8 h-8 text-[#E06A26] mx-auto" />
                  <h4 className="font-heading-sans font-bold text-base text-[#1C1613]">
                    Explore Complete Open-Source Repository
                  </h4>
                  <p className="text-xs text-[#7A6A5E] max-w-md mx-auto">
                    Full code implementation, commits, and unit tests are hosted on GitHub.
                  </p>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary-warm text-xs py-2 px-5 inline-flex items-center gap-1.5"
                  >
                    <span>View Repository on GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

            </div>
          )}

          {/* VIEW MODE 2: ARCHITECTURE & BLUEPRINT */}
          {viewMode === "architecture" && (
            <div className="space-y-6">
              {/* Architecture Highlights */}
              <div className="p-5 rounded-2xl bg-white border border-[#EAE3D8] space-y-3">
                <span className="text-xs font-heading-sans font-bold text-[#8A7B70] uppercase tracking-wider block">
                  Core Engineering Decisions
                </span>
                <div className="space-y-2">
                  {project.architectureHighlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#574B42]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* API Route Contracts & Schemas */}
              <div className="bg-[#1C1613] text-[#FAF8F5] p-5 rounded-2xl font-code-mono text-xs space-y-3">
                <div className="text-[#8A7B70] border-b border-[#2D241E] pb-2 flex justify-between">
                  <span>API Route Contracts</span>
                  <span className="text-emerald-400">REST &amp; Socket Payloads</span>
                </div>
                {project.demoType === "ecommerce" ? (
                  <div className="space-y-1.5 text-[11px]">
                    <div><span className="text-emerald-400 font-bold">POST</span> /api/auth/login <span className="text-[#8A7B70]">// JWT token issuance</span></div>
                    <div><span className="text-emerald-400 font-bold">POST</span> /api/cart/sync <span className="text-[#8A7B70]">// Optimistic cart persistence</span></div>
                    <div><span className="text-sky-400 font-bold">GET</span>  /api/products <span className="text-[#8A7B70]">// Pagination &amp; filter queries</span></div>
                    <div><span className="text-emerald-400 font-bold">POST</span> /api/orders <span className="text-[#8A7B70]">// Atomic stock lock &amp; invoice</span></div>
                  </div>
                ) : project.demoType === "fraud" ? (
                  <div className="space-y-1.5 text-[11px]">
                    <div><span className="text-emerald-400 font-bold">POST</span> /api/predict <span className="text-[#8A7B70]">// Ingests 29 PCA features &rarr; returns MSE</span></div>
                    <div><span className="text-sky-400 font-bold">GET</span>  /api/metrics <span className="text-[#8A7B70]">// ROC-AUC curve &amp; confusion matrix</span></div>
                    <div><span className="text-amber-400 font-bold">WS</span>   /stream/txns <span className="text-[#8A7B70]">// Live anomaly broadcast stream</span></div>
                  </div>
                ) : (
                  <div className="space-y-1.5 text-[11px]">
                    <div><span className="text-amber-400 font-bold">EVENT</span> connection <span className="text-[#8A7B70]">// Handshake token verification</span></div>
                    <div><span className="text-amber-400 font-bold">EVENT</span> join_room <span className="text-[#8A7B70]">// Client room joining</span></div>
                    <div><span className="text-emerald-400 font-bold">EVENT</span> send_message <span className="text-[#8A7B70]">// Broadcasts &amp; writes to Mongo</span></div>
                  </div>
                )}
              </div>

              {/* Technologies */}
              <div>
                <span className="text-xs font-heading-sans font-bold text-[#8A7B70] uppercase tracking-wider mb-2 block">
                  Technologies &amp; Libraries
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-white border border-[#E0D7CC] text-xs font-code-mono text-[#574B42]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Compact Bottom Action Bar */}
          <div className="pt-4 border-t border-[#EAE3D8] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-[#7A6A5E]">
              <span className="font-heading-sans font-bold text-[#1C1613]">Dinkar Kumar</span>
              <span>&bull;</span>
              <span>Parul University &apos;29</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary-warm text-xs py-2 px-4 flex items-center gap-1.5 justify-center w-full sm:w-auto"
              >
                <span>View Full Source Code on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
