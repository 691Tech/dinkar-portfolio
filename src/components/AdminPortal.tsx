"use client";

import React, { useState, useEffect } from "react";
import { X, Lock, ShieldCheck, Mail, Trash2, CheckCircle, Clock, Download, RefreshCw, KeyRound, Sparkles, Terminal } from "lucide-react";
import { getContactMessages, updateMessageStatus, deleteMessage, ContactMessage, firebaseConfig } from "@/lib/firebase";
import { PERSONAL_DETAILS } from "@/data/portfolio";

interface AdminPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminPortal({ isOpen, onClose }: AdminPortalProps) {
  const [pin, setPin] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [activeTab, setActiveTab] = useState<"inquiries" | "telemetry" | "status">("inquiries");
  const [portfolioStatus, setPortfolioStatus] = useState("Open for Engineering Internships & Projects");

  const correctPin = PERSONAL_DETAILS.adminPin || "6910";

  useEffect(() => {
    if (isOpen && isAuthenticated) {
      loadMessages();
    }
  }, [isOpen, isAuthenticated]);

  const loadMessages = async () => {
    const list = await getContactMessages();
    setMessages(list);
  };

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin.trim() === correctPin) {
      setIsAuthenticated(true);
      setAuthError("");
      loadMessages();
    } else {
      setAuthError("Invalid Administrator PIN. Access denied.");
    }
  };

  const handleStatusUpdate = (id: string, status: ContactMessage["status"]) => {
    const updated = updateMessageStatus(id, status);
    setMessages(updated);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this message record?")) {
      const updated = deleteMessage(id);
      setMessages(updated);
    }
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(messages, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `dinkar_portfolio_inquiries_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div
        className="bg-[#FAF8F5] rounded-3xl max-w-4xl w-full border border-[#E6DFD5] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-white px-6 py-4 border-b border-[#E6DFD5] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#1C1613] text-[#FAF8F5] flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-[#E06A26]" />
            </div>
            <div>
              <h3 className="font-heading-sans font-bold text-base text-[#1C1613]">
                Dinkar Kumar &bull; Administrator Console
              </h3>
              <p className="text-[11px] text-[#7A6A5E]">
                Firebase Realtime DB &bull; Message Management &bull; System Status
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#574B42] hover:text-[#1C1613] hover:bg-[#F4EFEA] rounded-full transition-colors border border-[#E6DFD5]"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Lock Screen if not authenticated */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 text-center max-w-md mx-auto space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-[#FFF3EB] text-[#E06A26] flex items-center justify-center mx-auto border border-[#FAD8C3]">
              <Lock className="w-7 h-7" />
            </div>

            <div>
              <h4 className="font-heading-sans font-bold text-xl text-[#1C1613] mb-1">
                Security Verification
              </h4>
              <p className="text-xs text-[#7A6A5E] leading-relaxed">
                Enter your Administrator PIN to access the Firebase messaging database and management controls.
              </p>
            </div>

            <form onSubmit={handleAuth} className="space-y-4">
              <div className="relative">
                <input
                  type="password"
                  maxLength={8}
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="Enter 4-digit PIN (default: 6910)"
                  className="w-full px-4 py-3 text-center text-sm font-code-mono tracking-widest bg-white border border-[#E6DFD5] rounded-xl focus:outline-hidden focus:border-[#E06A26]"
                  autoFocus
                />
              </div>

              {authError && (
                <p className="text-xs text-red-600 font-medium">{authError}</p>
              )}

              <button
                type="submit"
                className="w-full btn-primary-warm text-xs py-2.5 justify-center"
              >
                <KeyRound className="w-3.5 h-3.5" />
                <span>Authenticate Administrator</span>
              </button>

              <div className="text-[11px] text-[#8A7B70] pt-2">
                Protected by client PIN verification &bull; Default PIN: <strong className="font-code-mono">6910</strong>
              </div>
            </form>
          </div>
        ) : (
          /* Authenticated Dashboard View */
          <div className="flex flex-col flex-1 overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-[#E6DFD5] bg-[#F7F3EE] px-6 text-xs font-heading-sans font-semibold">
              <button
                onClick={() => setActiveTab("inquiries")}
                className={`py-3 px-4 border-b-2 transition-colors flex items-center gap-2 ${
                  activeTab === "inquiries"
                    ? "border-[#E06A26] text-[#E06A26] bg-white rounded-t-lg"
                    : "border-transparent text-[#7A6A5E] hover:text-[#1C1613]"
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Inquiries Inbox ({messages.length})</span>
              </button>
              <button
                onClick={() => setActiveTab("telemetry")}
                className={`py-3 px-4 border-b-2 transition-colors flex items-center gap-2 ${
                  activeTab === "telemetry"
                    ? "border-[#E06A26] text-[#E06A26] bg-white rounded-t-lg"
                    : "border-transparent text-[#7A6A5E] hover:text-[#1C1613]"
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Firebase Telemetry</span>
              </button>
            </div>

            {/* Tab Contents */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              {activeTab === "inquiries" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E6DFD5]">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-heading-sans font-bold text-[#1C1613]">
                        Received Inquiries
                      </span>
                      <button
                        onClick={loadMessages}
                        className="p-1 text-[#8A7B70] hover:text-[#1C1613] rounded transition-colors"
                        title="Refresh messages"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleExportJSON}
                        disabled={messages.length === 0}
                        className="text-xs font-heading-sans font-medium px-3 py-1.5 rounded-lg bg-white border border-[#E6DFD5] hover:border-[#E06A26] text-[#1C1613] flex items-center gap-1.5 disabled:opacity-50"
                      >
                        <Download className="w-3.5 h-3.5 text-[#E06A26]" />
                        <span>Export JSON</span>
                      </button>
                    </div>
                  </div>

                  {messages.length === 0 ? (
                    <div className="p-10 text-center bg-white rounded-2xl border border-[#E6DFD5] space-y-2">
                      <Mail className="w-8 h-8 text-[#8A7B70] mx-auto opacity-50" />
                      <p className="font-heading-sans font-bold text-sm text-[#1C1613]">
                        No Inquiries Logged Yet
                      </p>
                      <p className="text-xs text-[#7A6A5E] max-w-xs mx-auto">
                        Messages submitted via the portfolio contact form will appear here in real-time.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className="p-4 rounded-2xl bg-white border border-[#E6DFD5] space-y-2"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#F4EFEA]">
                            <div className="flex items-center gap-2">
                              <span className="font-heading-sans font-bold text-sm text-[#1C1613]">
                                {msg.name}
                              </span>
                              <span className="text-xs font-code-mono text-[#E06A26]">
                                &lt;{msg.email}&gt;
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span
                                className={`text-[10px] font-code-mono font-bold px-2 py-0.5 rounded-full uppercase ${
                                  msg.status === "unread"
                                    ? "bg-amber-100 text-amber-800"
                                    : msg.status === "replied"
                                    ? "bg-emerald-100 text-emerald-800"
                                    : "bg-gray-100 text-gray-700"
                                }`}
                              >
                                {msg.status}
                              </span>
                              <span className="text-[11px] text-[#8A7B70]">
                                {new Date(msg.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                          </div>

                          <div className="text-xs font-medium text-[#7A6A5E]">
                            <span className="text-[#1C1613] font-semibold">Topic:</span> {msg.subject}
                            {msg.projectInterest && (
                              <span className="ml-3 text-[11px] bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#E6DFD5]">
                                {msg.projectInterest}
                              </span>
                            )}
                          </div>

                          <p className="text-xs text-[#574B42] bg-[#FAF8F5] p-3 rounded-xl border border-[#EFE9E1] leading-relaxed whitespace-pre-line">
                            {msg.message}
                          </p>

                          <div className="flex items-center justify-between pt-2 text-xs">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => handleStatusUpdate(msg.id, "read")}
                                className="text-[11px] font-medium text-[#7A6A5E] hover:text-[#1C1613] hover:underline"
                              >
                                Mark Read
                              </button>
                              <span className="text-[#E6DFD5]">&bull;</span>
                              <button
                                onClick={() => handleStatusUpdate(msg.id, "replied")}
                                className="text-[11px] font-medium text-emerald-700 hover:underline"
                              >
                                Mark Replied
                              </button>
                              <span className="text-[#E6DFD5]">&bull;</span>
                              <a
                                href={`mailto:${msg.email}?subject=Re: ${encodeURIComponent(msg.subject)}`}
                                className="text-[11px] font-medium text-[#E06A26] hover:underline flex items-center gap-1"
                              >
                                Reply via Email
                              </a>
                            </div>

                            <button
                              onClick={() => handleDelete(msg.id)}
                              className="text-[#8A7B70] hover:text-red-600 transition-colors"
                              title="Delete inquiry"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activeTab === "telemetry" && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white border border-[#E6DFD5] space-y-3">
                    <h4 className="font-heading-sans font-bold text-sm text-[#1C1613] flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#E06A26]" />
                      <span>Firebase Deployment Coordinates</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-code-mono">
                      <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFE9E1]">
                        <span className="text-[10px] text-[#8A7B70] block">PROJECT ID</span>
                        <span className="text-[#1C1613] font-bold">{firebaseConfig.projectId}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFE9E1]">
                        <span className="text-[10px] text-[#8A7B70] block">AUTH DOMAIN</span>
                        <span className="text-[#1C1613] font-bold">{firebaseConfig.authDomain}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFE9E1]">
                        <span className="text-[10px] text-[#8A7B70] block">STORAGE BUCKET</span>
                        <span className="text-[#1C1613] font-bold">{firebaseConfig.storageBucket}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFE9E1]">
                        <span className="text-[10px] text-[#8A7B70] block">REALTIME DATABASE</span>
                        <span className="text-[#1C1613] font-bold">student-hub-dc82f-default-rtdb</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        <span>Dual-layer persistence adapter active (Cloud + Local fallback).</span>
                      </div>
                      <span className="font-code-mono font-bold text-[10px]">READY</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-white px-6 py-3 border-t border-[#E6DFD5] flex items-center justify-between text-xs">
              <span className="text-[#8A7B70] font-code-mono text-[11px]">
                Session Verified &bull; Dinkar Kumar Admin
              </span>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="text-xs font-heading-sans font-medium text-red-600 hover:underline"
              >
                Lock Session
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
