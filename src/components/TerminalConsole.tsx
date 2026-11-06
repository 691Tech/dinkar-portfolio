"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal, Send, Sparkles, CornerDownLeft, Maximize2, Minimize2 } from "lucide-react";
import { sounds } from "@/lib/sound";

export default function TerminalConsole() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ command: string; output: string[] }[]>([
    {
      command: "welcome",
      output: [
        "Welcome to Dinkar Kumar's Interactive Portfolio CLI (v2.4)",
        "Type 'help' to see available commands or 'skills', 'projects', 'contact'."
      ]
    }
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    sounds.playClick(900);
    const cmd = input.trim().toLowerCase();
    let res: string[] = [];

    switch (cmd) {
      case "help":
        res = [
          "Available Commands:",
          "  projects     - List flagship production applications",
          "  skills       - Print verified technical competencies",
          "  education    - View academic milestones at Parul University",
          "  contact      - Print verified email & phone coordinates",
          "  github       - Open GitHub open source catalog",
          "  hire         - Why hire Dinkar? Core engineering values",
          "  clear        - Clear console history",
          "  sudo         - Easter egg privilege escalation"
        ];
        break;
      case "projects":
        res = [
          "1. E-Commerce Web Application (React, Node, Mongo, REST, JWT)",
          "2. Real-Time WebSocket Chat (React, Socket.io, Mongo, Express)",
          "3. AI Credit Card Fraud Anomaly Detector (Python, Keras Autoencoder)",
          "4. High-Throughput Packet Sniffer (Raw Sockets, Header Parser)",
          "5. Smart Campus Management Portal (Academic ERP, CGPA Engine)",
          "6. Core DSA & Algorithmic Problem Engine (Java 21, 250+ Optimal Solns)"
        ];
        break;
      case "skills":
        res = [
          "Full-Stack: React 19, Next.js, Node.js, Express, Tailwind CSS",
          "Databases: MongoDB, Mongoose, Firebase RTDB, Firestore",
          "Real-Time: Socket.io, WebSockets, RESTful API Design",
          "Core CS & AI: Java (DSA, OOP), Python, Keras, C++, Linux Git"
        ];
        break;
      case "education":
        res = [
          "Parul University, Vadodara, Gujarat",
          "B.Tech in Computer Science & Engineering (Artificial Intelligence)",
          "Timeline: 2025 - 2029",
          "Class XI CBSE Board Score: 94%"
        ];
        break;
      case "contact":
        res = [
          "Email:    dinkarkr691@gmail.com",
          "Phone:    +91 9204267569",
          "Location: Vadodara, Gujarat, India (Open to Remote/Internships)",
          "GitHub:   https://github.com/691Tech"
        ];
        break;
      case "github":
        window.open("https://github.com/691Tech", "_blank");
        res = ["Opening https://github.com/691Tech in a new tab..."];
        break;
      case "hire":
        res = [
          "Why hire Dinkar?",
          "- Strong algorithmic foundation (250+ problems solved in Java)",
          "- Passionate about clean architecture, optimistic UI, and low latency",
          "- Fast learner specializing in AI systems and modern full-stack web",
          "- Collaborative team player with academic excellence (94% CBSE)"
        ];
        break;
      case "sudo":
        res = ["Permission denied: User 'visitor' is not in sudoers file. This incident will be reported to Dinkar 😉"];
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        res = [`Command not found: '${cmd}'. Type 'help' for available commands.`];
    }

    setHistory((prev) => [...prev, { command: input, output: res }]);
    setInput("");
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <section className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-[#E6DFD5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="tactile-card rounded-3xl bg-[#1C1613] text-[#FAF8F5] border border-[#2D241E] overflow-hidden shadow-xl">
          {/* Terminal Titlebar */}
          <div className="px-5 py-3.5 bg-[#251E19] border-b border-[#2D241E] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#E57373]"></span>
              <span className="w-3 h-3 rounded-full bg-[#FFD54F]"></span>
              <span className="w-3 h-3 rounded-full bg-[#81C784]"></span>
              <span className="text-xs font-code-mono text-[#D4C7BA] ml-2 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#E06A26]" />
                <span>dinkar-cli v2.4 (interactive)</span>
              </span>
            </div>
            <span className="text-[10px] font-code-mono text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
              SESSION ACTIVE
            </span>
          </div>

          {/* Terminal Output */}
          <div className="p-5 font-code-mono text-xs max-h-72 overflow-y-auto space-y-3">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-amber-300">
                  <span className="text-[#8A7B70]">$</span>
                  <span className="font-bold">{item.command}</span>
                </div>
                {item.output.map((line, lIdx) => (
                  <div key={lIdx} className="text-[#D4C7BA] pl-4 leading-relaxed">
                    {line}
                  </div>
                ))}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Terminal Input Bar */}
          <form onSubmit={handleCommand} className="p-3 bg-[#251E19] border-t border-[#2D241E] flex items-center gap-2">
            <span className="text-[#E06A26] font-code-mono text-xs pl-2 font-bold">&gt;</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type 'help', 'projects', 'skills', 'hire'..."
              className="flex-1 bg-transparent text-xs font-code-mono text-white placeholder-[#8A7B70] focus:outline-hidden"
            />
            <button
              type="submit"
              className="px-3 py-1.5 rounded-xl bg-[#E06A26] hover:bg-[#F28C38] text-white text-xs font-semibold flex items-center gap-1 transition-colors"
            >
              <span>Run</span>
              <CornerDownLeft className="w-3 h-3" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
