"use client";

import React, { useState } from "react";
import { X, ExternalLink, Check, ShoppingBag, Send, Plus, Trash2, ArrowRight, ShieldCheck, Terminal, Cpu } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { Project } from "@/data/portfolio";
import confetti from "canvas-confetti";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<"interactive" | "architecture" | "schema">("interactive");

  // E-Commerce Demo State
  const [cart, setCart] = useState<{ id: number; name: string; price: number; qty: number }[]>([
    { id: 1, name: "Mechanical Gaming Keyboard (Cherry MX)", price: 79, qty: 1 }
  ]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const demoProducts = [
    { id: 1, name: "Mechanical Keyboard (Cherry MX)", price: 79, category: "hardware", badge: "Best Seller" },
    { id: 2, name: "Studio Noise-Canceling Headphones", price: 129, category: "audio", badge: "Trending" },
    { id: 3, name: "Precision Ergonomic Wireless Mouse", price: 49, category: "hardware", badge: "Popular" },
    { id: 4, name: "Type-C High-Speed Multiport Hub", price: 35, category: "accessories", badge: "Essential" }
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
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {}
  };

  // Chat Demo State
  const [currentUser, setCurrentUser] = useState<"Recruiter" | "Dinkar">("Recruiter");
  const [messages, setMessages] = useState<{ sender: string; text: string; time: string }[]>([
    { sender: "Dinkar", text: "Hello! Welcome to my real-time chat architecture demo.", time: "19:20" },
    { sender: "Recruiter", text: "Hi Dinkar, I saw your full-stack projects. How did you implement WebSockets here?", time: "19:21" },
    { sender: "Dinkar", text: "I used Socket.io on Node.js to manage client rooms with atomic MongoDB persistence. Latency is <50ms!", time: "19:21" }
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

    // Simulate Dinkar auto-reply if recruiter typed
    if (currentUser === "Recruiter") {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            sender: "Dinkar",
            text: "Thanks for checking out the project! You can explore the complete codebase on GitHub @691Tech.",
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
          }
        ]);
      }, 1200);
    }
  };

  if (!project) return null;

  const cartTotal = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div
        className="bg-[#FAF8F5] rounded-3xl max-w-4xl w-full border border-[#E6DFD5] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-white px-6 py-4 border-b border-[#E6DFD5] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-code-mono font-bold px-2.5 py-1 rounded-md"
              style={{ backgroundColor: project.colorScheme.badgeBg, color: project.colorScheme.badgeText }}
            >
              {project.timeline}
            </span>
            <div>
              <h3 className="font-heading-sans font-bold text-lg text-[#1C1613]">
                {project.title}
              </h3>
              <p className="text-xs text-[#7A6A5E] hidden sm:block">
                {project.subtitle} &bull; {project.role}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-[#574B42] hover:text-[#1C1613] hover:bg-[#F4EFEA] rounded-full transition-colors border border-[#E6DFD5]"
              title="View on GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 text-[#574B42] hover:text-[#1C1613] hover:bg-[#F4EFEA] rounded-full transition-colors border border-[#E6DFD5]"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Sub-Navigation Tabs */}
        <div className="flex border-b border-[#E6DFD5] bg-[#F7F3EE] px-6 text-xs font-heading-sans font-semibold">
          <button
            onClick={() => setActiveTab("interactive")}
            className={`py-3 px-4 border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === "interactive"
                ? "border-[#E06A26] text-[#E06A26] bg-white rounded-t-lg"
                : "border-transparent text-[#7A6A5E] hover:text-[#1C1613]"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Live Simulation</span>
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`py-3 px-4 border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === "architecture"
                ? "border-[#E06A26] text-[#E06A26] bg-white rounded-t-lg"
                : "border-transparent text-[#7A6A5E] hover:text-[#1C1613]"
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Architecture &amp; Endpoints</span>
          </button>
          <button
            onClick={() => setActiveTab("schema")}
            className={`py-3 px-4 border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === "schema"
                ? "border-[#E06A26] text-[#E06A26] bg-white rounded-t-lg"
                : "border-transparent text-[#7A6A5E] hover:text-[#1C1613]"
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Overview &amp; Features</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* TAB 1: INTERACTIVE SIMULATION */}
          {activeTab === "interactive" && (
            <div>
              {/* E-Commerce Simulation */}
              {project.demoType === "ecommerce" && (
                <div className="space-y-6">
                  <div className="p-4 rounded-2xl bg-[#FFF3EB] border border-[#FAD8C3] text-xs text-[#963A07] flex items-center justify-between">
                    <div>
                      <strong className="block font-heading-sans font-bold">Interactive Full-Stack Commerce Simulator</strong>
                      <span>Experience cart state synchronization, pricing algorithms, and order dispatching.</span>
                    </div>
                    <span className="font-code-mono text-[11px] bg-white px-2.5 py-1 rounded-md border border-[#FAD8C3] shrink-0">
                      REST: Node/Express
                    </span>
                  </div>

                  {orderPlaced ? (
                    <div className="p-8 text-center bg-white rounded-2xl border border-[#E6DFD5] space-y-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                        <Check className="w-6 h-6" />
                      </div>
                      <h4 className="font-heading-sans font-bold text-xl text-[#1C1613]">
                        Order Processed Successfully!
                      </h4>
                      <p className="text-xs text-[#7A6A5E] max-w-md mx-auto">
                        Simulated Order <strong className="font-code-mono text-[#1C1613]">#ORD-98214</strong> was created 
                        with total <strong className="text-[#E06A26]">${cartTotal}</strong>. State was dispatched via Express REST pipeline.
                      </p>
                      <button
                        onClick={() => {
                          setOrderPlaced(false);
                          setCart([{ id: 1, name: "Mechanical Gaming Keyboard (Cherry MX)", price: 79, qty: 1 }]);
                        }}
                        className="btn-primary-warm text-xs py-2 px-5 mx-auto"
                      >
                        Reset Demo Store
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                      {/* Products List (7 cols) */}
                      <div className="md:col-span-7 space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-[#E6DFD5]">
                          <span className="text-xs font-heading-sans font-bold text-[#1C1613]">Catalog Items</span>
                          <span className="text-[11px] text-[#8A7B70]">Mongoose Schema Collection</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {demoProducts.map((p) => (
                            <div key={p.id} className="p-3.5 rounded-xl bg-white border border-[#E6DFD5] flex flex-col justify-between">
                              <div>
                                <span className="text-[10px] font-code-mono text-[#E06A26] bg-[#FFF3EB] px-1.5 py-0.5 rounded">
                                  {p.badge}
                                </span>
                                <h5 className="font-heading-sans font-bold text-xs text-[#1C1613] mt-2 leading-snug">
                                  {p.name}
                                </h5>
                              </div>
                              <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#F4EFEA]">
                                <span className="font-heading-sans font-bold text-sm text-[#1C1613]">${p.price}</span>
                                <button
                                  onClick={() => addToCart(p)}
                                  className="p-1.5 rounded-lg bg-[#FAF8F5] hover:bg-[#E06A26] hover:text-white text-[#1C1613] border border-[#E6DFD5] transition-colors"
                                  title="Add to cart"
                                >
                                  <Plus className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Cart Drawer & Checkout (5 cols) */}
                      <div className="md:col-span-5 bg-white p-4 rounded-2xl border border-[#E6DFD5] flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between pb-2 border-b border-[#F4EFEA] mb-3">
                            <span className="text-xs font-heading-sans font-bold text-[#1C1613] flex items-center gap-1.5">
                              <ShoppingBag className="w-3.5 h-3.5 text-[#E06A26]" />
                              <span>Live Cart ({cart.reduce((a, b) => a + b.qty, 0)})</span>
                            </span>
                            <span className="text-[11px] font-code-mono text-emerald-600 font-semibold">Active State</span>
                          </div>

                          <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                            {cart.length === 0 ? (
                              <p className="text-xs text-[#8A7B70] py-4 text-center">Cart is currently empty.</p>
                            ) : (
                              cart.map((item) => (
                                <div key={item.id} className="flex items-center justify-between text-xs py-1.5 border-b border-[#FAF8F5]">
                                  <div className="truncate pr-2">
                                    <span className="font-medium text-[#1C1613] block truncate">{item.name}</span>
                                    <span className="text-[11px] text-[#8A7B70]">${item.price} &times; {item.qty}</span>
                                  </div>
                                  <div className="flex items-center gap-2 shrink-0">
                                    <span className="font-bold text-[#1C1613]">${item.price * item.qty}</span>
                                    <button
                                      onClick={() => removeFromCart(item.id)}
                                      className="text-[#8A7B70] hover:text-red-500 transition-colors"
                                    >
                                      <Trash2 className="w-3 h-3" />
                                    </button>
                                  </div>
                                </div>
                              ))
                            )}
                          </div>
                        </div>

                        <div className="pt-3 border-t border-[#F4EFEA] mt-3">
                          <div className="flex justify-between text-xs text-[#7A6A5E] mb-1">
                            <span>Subtotal:</span>
                            <span className="font-bold text-[#1C1613]">${cartTotal}</span>
                          </div>
                          <div className="flex justify-between text-xs text-[#7A6A5E] mb-3">
                            <span>Tax &amp; Shipping:</span>
                            <span className="text-emerald-600 font-medium">$0 (Free Demo)</span>
                          </div>
                          <button
                            onClick={handleCheckout}
                            disabled={cart.length === 0}
                            className="w-full btn-primary-warm text-xs py-2.5 justify-center disabled:opacity-50"
                          >
                            <span>Dispatch Order (${cartTotal})</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Chat Simulation */}
              {project.demoType === "chat" && (
                <div className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-[#EDF6F1] border border-[#C5E3D4] text-xs text-[#185038] flex items-center justify-between">
                    <div>
                      <strong className="block font-heading-sans font-bold">Real-Time Socket Channel Simulator</strong>
                      <span>Sub-50ms message delivery between simulated clients over WebSocket channels.</span>
                    </div>
                    <span className="font-code-mono text-[11px] bg-white px-2 py-0.5 rounded border border-[#C5E3D4]">
                      Socket.io v4
                    </span>
                  </div>

                  <div className="bg-white rounded-2xl border border-[#E6DFD5] overflow-hidden flex flex-col h-[340px]">
                    {/* Chat Toolbar */}
                    <div className="p-3 bg-[#FAF8F5] border-b border-[#E6DFD5] flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="font-heading-sans font-bold text-[#1C1613]">
                          #room-engineering-collaboration
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-[#F4EFEA] p-1 rounded-lg">
                        <span className="text-[11px] text-[#7A6A5E] px-1">Active User:</span>
                        <button
                          onClick={() => setCurrentUser(currentUser === "Recruiter" ? "Dinkar" : "Recruiter")}
                          className="px-2 py-0.5 rounded bg-white font-code-mono text-[11px] font-bold text-[#E06A26] border border-[#E6DFD5]"
                        >
                          {currentUser} (Click to switch)
                        </button>
                      </div>
                    </div>

                    {/* Messages Body */}
                    <div className="p-4 flex-1 overflow-y-auto space-y-2.5">
                      {messages.map((m, i) => {
                        const isMe = m.sender === currentUser;
                        return (
                          <div key={i} className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}>
                            <div className="flex items-baseline gap-1 text-[10px] text-[#8A7B70] mb-0.5">
                              <span className="font-bold text-[#1C1613]">{m.sender}</span>
                              <span>&bull; {m.time}</span>
                            </div>
                            <div
                              className={`p-2.5 rounded-2xl max-w-xs sm:max-w-md text-xs leading-relaxed ${
                                isMe
                                  ? "bg-[#1C1613] text-[#FAF8F5] rounded-tr-xs"
                                  : "bg-[#F4EFEA] text-[#1C1613] rounded-tl-xs border border-[#E6DFD5]"
                              }`}
                            >
                              {m.text}
                            </div>
                          </div>
                        );
                      })}
                      {isTyping && (
                        <div className="text-[11px] font-code-mono text-[#8A7B70] italic animate-pulse">
                          Dinkar is typing...
                        </div>
                      )}
                    </div>

                    {/* Chat Form */}
                    <form onSubmit={sendMessage} className="p-2.5 bg-[#FAF8F5] border-t border-[#E6DFD5] flex gap-2">
                      <input
                        type="text"
                        value={inputMsg}
                        onChange={(e) => setInputMsg(e.target.value)}
                        placeholder={`Type a real-time message as ${currentUser}...`}
                        className="flex-1 px-3 py-2 text-xs bg-white border border-[#E6DFD5] rounded-xl focus:outline-hidden focus:border-[#E06A26]"
                      />
                      <button
                        type="submit"
                        className="p-2 rounded-xl bg-[#1C1613] hover:bg-[#E06A26] text-white transition-colors"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {/* Campus / DSA fallback interactive preview */}
              {(project.demoType === "campus" || project.demoType === "dsa") && (
                <div className="p-6 rounded-2xl bg-white border border-[#E6DFD5] space-y-4 text-center">
                  <div className="w-12 h-12 rounded-xl bg-[#F4EFEA] text-[#E06A26] flex items-center justify-center mx-auto">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading-sans font-bold text-base text-[#1C1613]">
                    Source Code &amp; Documentation Repository
                  </h4>
                  <p className="text-xs text-[#7A6A5E] max-w-lg mx-auto">
                    Explore the complete implementation, algorithm complexities, and commit logs directly on GitHub.
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

          {/* TAB 2: ARCHITECTURE & ENDPOINTS */}
          {activeTab === "architecture" && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD5]">
                <h4 className="font-heading-sans font-bold text-sm text-[#1C1613] mb-2 flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-[#E06A26]" />
                  <span>Key Architecture Decisions &amp; Patterns</span>
                </h4>
                <ul className="space-y-2 text-xs text-[#574B42]">
                  {project.architectureHighlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#E06A26] font-bold">&bull;</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#1C1613] text-[#FAF8F5] p-4 rounded-2xl font-code-mono text-xs space-y-2">
                <div className="text-[#8A7B70] border-b border-[#2D241E] pb-1.5 flex justify-between">
                  <span>API Route Contracts (Express.js)</span>
                  <span className="text-emerald-400">REST v1.0</span>
                </div>
                {project.demoType === "ecommerce" ? (
                  <div className="space-y-1 text-[11px] pt-1">
                    <div><span className="text-emerald-400 font-bold">POST</span> /api/auth/login <span className="text-[#8A7B70]">// JWT session authentication</span></div>
                    <div><span className="text-emerald-400 font-bold">POST</span> /api/auth/register <span className="text-[#8A7B70]">// Bcrypt password hashing</span></div>
                    <div><span className="text-sky-400 font-bold">GET</span>  /api/products <span className="text-[#8A7B70]">// Query pagination &amp; price filters</span></div>
                    <div><span className="text-emerald-400 font-bold">POST</span> /api/cart/sync <span className="text-[#8A7B70]">// Optimistic cart persistence</span></div>
                    <div><span className="text-emerald-400 font-bold">POST</span> /api/orders <span className="text-[#8A7B70]">// Atomic order creation &amp; stock decrement</span></div>
                  </div>
                ) : (
                  <div className="space-y-1 text-[11px] pt-1">
                    <div><span className="text-amber-400 font-bold">EVENT</span> connection <span className="text-[#8A7B70]">// Client handshake verification</span></div>
                    <div><span className="text-amber-400 font-bold">EVENT</span> join_room <span className="text-[#8A7B70]">// Socket joins room identifier</span></div>
                    <div><span className="text-emerald-400 font-bold">EVENT</span> send_message <span className="text-[#8A7B70]">// Broadcasts to room &amp; writes to Mongo</span></div>
                    <div><span className="text-sky-400 font-bold">EVENT</span> user_typing <span className="text-[#8A7B70]">// Debounced presence indicator</span></div>
                    <div><span className="text-red-400 font-bold">EVENT</span> disconnect <span className="text-[#8A7B70]">// Updates presence status to offline</span></div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: OVERVIEW & SPECS */}
          {activeTab === "schema" && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white border border-[#E6DFD5] space-y-3">
                <h4 className="font-heading-sans font-bold text-sm text-[#1C1613]">Project Deep-Dive</h4>
                <p className="text-xs text-[#574B42] leading-relaxed whitespace-pre-line">
                  {project.longDescription}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD5]">
                <h5 className="font-heading-sans font-bold text-xs text-[#1C1613] mb-2 uppercase tracking-wider text-[#8A7B70]">
                  Core Feature Breakdown
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {project.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white border border-[#EFE9E1]">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="text-[#1C1613] font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="font-heading-sans font-bold text-xs text-[#1C1613] mb-2 uppercase tracking-wider text-[#8A7B70]">
                  Technologies Used
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-white border border-[#E6DFD5] text-xs font-code-mono text-[#574B42]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="bg-[#FAF8F5] px-6 py-3.5 border-t border-[#E6DFD5] flex items-center justify-between text-xs">
          <span className="text-[#8A7B70] font-code-mono text-[11px]">
            Dinkar Kumar Portfolio &bull; Parul University &apos;29
          </span>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary-warm text-xs py-2 px-4 inline-flex items-center gap-1.5"
          >
            <span>Explore on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
