"use client";

import React, { useState, useEffect } from "react";
import { 
  ArrowDown, ArrowUpRight, FileText, Code2, Terminal, Sparkles, 
  Cpu, Layers, Database, Activity, CheckCircle2, Copy, Check, Wifi
} from "lucide-react";
import { PERSONAL_DETAILS } from "@/data/portfolio";
import { sounds } from "@/lib/sound";
import { useToast } from "@/components/Toast";

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export default function Hero({ onOpenResume, onOpenContact }: HeroProps) {
  const [activeTab, setActiveTab] = useState<"telemetry" | "stack" | "git">("telemetry");
  const [copiedClone, setCopiedClone] = useState(false);
  const [livePing, setLivePing] = useState(24);
  const { showToast } = useToast();

  // Simulate real-time dynamic WebSocket/Network latency
  useEffect(() => {
    const interval = setInterval(() => {
      const jitter = Math.floor(22 + Math.random() * 14);
      setLivePing(jitter);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleCopyClone = () => {
    sounds.playClick();
    navigator.clipboard.writeText("git clone https://github.com/691Tech/dinkar-portfolio.git");
    setCopiedClone(true);
    showToast("Git clone command copied to clipboard!");
    setTimeout(() => setCopiedClone(false), 2000);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#E6DFD5] bg-warm-dots">
      {/* Decorative Warm Ambient Glows (Subtle, NOT generic blue-purple gradient) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#F7EDE2] to-transparent rounded-full blur-3xl pointer-events-none -z-10 opacity-70"></div>
      <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-[#FFF3EB] rounded-full blur-2xl pointer-events-none -z-10 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Persona (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Architectural Eyebrow Badge & Telemetry */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E0D7CC] text-xs font-heading-sans font-semibold text-[#574B42] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#E06A26] animate-pulse"></span>
                <span className="tracking-wider uppercase text-[11px] text-[#2D241E]">
                  Dinkar Kumar • AI &amp; Software Engineering
                </span>
                <span className="text-[#C4B7AA]">•</span>
                <span className="text-[11px] text-[#7A6A5E] font-medium hidden sm:inline">
                  Parul University &apos;29
                </span>
              </div>

              {/* Live Latency Ping */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-code-mono font-bold text-emerald-800 shadow-2xs">
                <Wifi className="w-3 h-3 text-emerald-600 animate-pulse" />
                <span>{livePing}ms Ping</span>
              </div>
            </div>

            {/* Main Punchy Editorial Headline (Ref 1 Typography + Ref 2 High Impact) */}
            <h1 className="font-heading-sans text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1C1613] leading-[1.14] sm:leading-[1.12] mb-4 sm:mb-5">
              Building thoughtful{" "}
              <span className="font-display-serif italic font-normal text-[#E06A26] px-1">
                digital experiences
              </span>{" "}
              through code.
            </h1>

            {/* Authoritative Supporting Description */}
            <p className="font-sans text-sm sm:text-base md:text-lg text-[#574B42] leading-relaxed max-w-2xl mb-6 sm:mb-8">
              I am <span className="font-semibold text-[#1C1613]">Dinkar Kumar</span>, a Computer Science student 
              and aspiring <span className="text-[#1C1613] font-semibold">AI Engineer</span> passionate about full-stack development, 
              intelligent applications, and solving real-world problems through robust technology.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-6 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={() => sounds.playClick()}
                className="btn-primary-warm w-full sm:w-auto justify-center"
              >
                <span>Explore Featured Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={() => {
                  sounds.playClick();
                  onOpenResume();
                }}
                className="btn-secondary-warm w-full sm:w-auto justify-center"
              >
                <FileText className="w-4 h-4 text-[#E06A26]" />
                <span>View Resume PDF</span>
              </button>

              <button
                onClick={() => {
                  sounds.playClick();
                  onOpenContact();
                }}
                className="px-5 py-3 rounded-full text-xs font-heading-sans font-semibold text-[#574B42] hover:text-[#1C1613] hover:bg-[#F4EFEA] transition-colors w-full sm:w-auto justify-center inline-flex items-center gap-1.5"
              >
                <span>Contact Dinkar</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quick Git Clone Command Pill */}
            <div className="mb-8 w-full max-w-md">
              <button
                onClick={handleCopyClone}
                className="w-full p-2.5 rounded-2xl bg-white border border-[#EAE3D8] hover:border-[#D6CBC0] transition-colors flex items-center justify-between text-xs font-code-mono text-[#574B42] shadow-2xs group"
                title="Click to copy git clone command"
              >
                <div className="flex items-center gap-2 truncate">
                  <Terminal className="w-3.5 h-3.5 text-[#E06A26] shrink-0" />
                  <span className="truncate">git clone https://github.com/691Tech/dinkar-portfolio.git</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#FAF8F5] border border-[#E0D7CC] text-[#1C1613] shrink-0 flex items-center gap-1 group-hover:bg-[#1C1613] group-hover:text-white transition-colors">
                  {copiedClone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedClone ? "Copied" : "Copy"}</span>
                </span>
              </button>
            </div>

            {/* Trust and Academic Indicators Strip (Inspired by Ref 2) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-6 border-t border-[#E6DFD5]">
              <div className="flex flex-col">
                <span className="font-code-mono text-xs text-[#8A7B70] uppercase tracking-wider">Education</span>
                <span className="font-heading-sans font-bold text-sm text-[#1C1613] mt-0.5">Parul Univ &apos;29</span>
                <span className="text-[11px] text-[#7A6A5E]">B.Tech CSE (AI)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-code-mono text-xs text-[#8A7B70] uppercase tracking-wider">Core Focus</span>
                <span className="font-heading-sans font-bold text-sm text-[#1C1613] mt-0.5">Full Stack + AI</span>
                <span className="text-[11px] text-[#7A6A5E]">React &amp; Node.js</span>
              </div>
              <div className="flex flex-col">
                <span className="font-code-mono text-xs text-[#8A7B70] uppercase tracking-wider">Academics</span>
                <span className="font-heading-sans font-bold text-sm text-[#E06A26] mt-0.5">94% Class XI</span>
                <span className="text-[11px] text-[#7A6A5E]">CBSE Board Exam</span>
              </div>
              <div className="flex flex-col">
                <span className="font-code-mono text-xs text-[#8A7B70] uppercase tracking-wider">Location</span>
                <span className="font-heading-sans font-bold text-sm text-[#1C1613] mt-0.5">Vadodara, IN</span>
                <span className="text-[11px] text-[#7A6A5E]">Open to Remote</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Code & Architecture Showcase Widget (5 cols) */}
          <div className="lg:col-span-5">
            <div className="tactile-card rounded-3xl overflow-hidden bg-white border border-[#EAE3D8] shadow-sm">
              
              {/* Terminal Window Header */}
              <div className="bg-[#FAF8F5] border-b border-[#EAE3D8] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E57373]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFD54F]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#81C784]"></span>
                  </div>
                  <span className="text-xs font-code-mono font-medium text-[#574B42] ml-2 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#E06A26]" />
                    <span>dinkar@parul-cse-ai</span>
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span className="text-[10px] font-code-mono text-emerald-700 font-semibold uppercase tracking-wider">
                    ONLINE
                  </span>
                </div>
              </div>

              {/* Sub-Tabs for Interactive Exploration */}
              <div className="flex border-b border-[#EFE9E1] bg-[#FDFBF7] text-xs font-heading-sans font-medium">
                <button
                  onClick={() => {
                    sounds.playClick();
                    setActiveTab("telemetry");
                  }}
                  className={`flex-1 py-2 px-3 text-center border-r border-[#EFE9E1] transition-colors flex items-center justify-center gap-1.5 ${
                    activeTab === "telemetry"
                      ? "bg-white text-[#E06A26] font-semibold border-b-2 border-b-[#E06A26]"
                      : "text-[#7A6A5E] hover:text-[#1C1613]"
                  }`}
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>Telemetry</span>
                </button>
                <button
                  onClick={() => {
                    sounds.playClick();
                    setActiveTab("stack");
                  }}
                  className={`flex-1 py-2 px-3 text-center border-r border-[#EFE9E1] transition-colors flex items-center justify-center gap-1.5 ${
                    activeTab === "stack"
                      ? "bg-white text-[#E06A26] font-semibold border-b-2 border-b-[#E06A26]"
                      : "text-[#7A6A5E] hover:text-[#1C1613]"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Stack Radar</span>
                </button>
                <button
                  onClick={() => {
                    sounds.playClick();
                    setActiveTab("git");
                  }}
                  className={`flex-1 py-2 px-3 text-center transition-colors flex items-center justify-center gap-1.5 ${
                    activeTab === "git"
                      ? "bg-white text-[#E06A26] font-semibold border-b-2 border-b-[#E06A26]"
                      : "text-[#7A6A5E] hover:text-[#1C1613]"
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Git Stream</span>
                </button>
              </div>

              {/* Tab Contents */}
              <div className="p-5 font-code-mono text-xs">
                {activeTab === "telemetry" && (
                  <div className="space-y-3.5 animate-fadeIn">
                    <div className="flex items-center justify-between pb-2 border-b border-[#F4EFEA]">
                      <span className="text-[#7A6A5E] flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-[#E06A26]" />
                        Runtime Engine
                      </span>
                      <span className="font-bold text-[#1C1613] bg-[#F7F3EE] px-2 py-0.5 rounded text-[11px]">
                        Node.js v25 + React 19
                      </span>
                    </div>

                    <div className="flex items-center justify-between pb-2 border-b border-[#F4EFEA]">
                      <span className="text-[#7A6A5E] flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-emerald-600" />
                        WebSocket Latency
                      </span>
                      <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded text-[11px]">
                        &lt; {livePing}ms (Socket.io)
                      </span>
                    </div>

                    <div className="flex items-center justify-between pb-2 border-b border-[#F4EFEA]">
                      <span className="text-[#7A6A5E] flex items-center gap-1.5">
                        <Database className="w-3.5 h-3.5 text-[#244372]" />
                        Database Pool
                      </span>
                      <span className="text-[#244372] font-bold bg-[#EEF3FA] px-2 py-0.5 rounded text-[11px]">
                        MongoDB + Firebase RTDB
                      </span>
                    </div>

                    <div className="flex items-center justify-between pb-2 border-b border-[#F4EFEA]">
                      <span className="text-[#7A6A5E] flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E06A26]" />
                        DSA Progress
                      </span>
                      <span className="text-[#784212] font-bold bg-[#FEF3EB] px-2 py-0.5 rounded text-[11px]">
                        250+ Optimal Solutions
                      </span>
                    </div>

                    <div className="pt-2 text-[11px] text-[#7A6A5E] bg-[#FAF8F5] p-3 rounded-xl border border-[#EFE9E1] leading-relaxed">
                      <span className="text-[#E06A26] font-semibold">&gt; Status: </span>
                      Actively engineering applications with production-grade standards, clean REST architecture, and responsive React interfaces.
                    </div>
                  </div>
                )}

                {activeTab === "stack" && (
                  <div className="space-y-2.5 animate-fadeIn">
                    <p className="text-[11px] text-[#7A6A5E] mb-3">
                      Core technical capabilities extracted directly from production projects:
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EFE9E1]">
                        <span className="font-heading-sans font-bold text-[#1C1613] block">React.js &amp; Redux</span>
                        <span className="text-[#7A6A5E] text-[10px]">Hooks, Context, SPAs</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EFE9E1]">
                        <span className="font-heading-sans font-bold text-[#1C1613] block">Node &amp; Express</span>
                        <span className="text-[#7A6A5E] text-[10px]">REST APIs, Middleware</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EFE9E1]">
                        <span className="font-heading-sans font-bold text-[#1C1613] block">Socket.io Engine</span>
                        <span className="text-[#7A6A5E] text-[10px]">Real-Time Streaming</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EFE9E1]">
                        <span className="font-heading-sans font-bold text-[#1C1613] block">MongoDB &amp; Mongoose</span>
                        <span className="text-[#7A6A5E] text-[10px]">Aggregations, CRUD</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EFE9E1]">
                        <span className="font-heading-sans font-bold text-[#1C1613] block">Java &amp; Core DSA</span>
                        <span className="text-[#7A6A5E] text-[10px]">Algorithms &amp; OOP</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EFE9E1]">
                        <span className="font-heading-sans font-bold text-[#1C1613] block">Firebase Cloud</span>
                        <span className="text-[#7A6A5E] text-[10px]">Auth, RTDB, Storage</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "git" && (
                  <div className="space-y-2.5 animate-fadeIn">
                    <div className="flex items-center justify-between text-[11px] text-[#7A6A5E] mb-2">
                      <span>Repository: 691Tech/ecommerce-web-app</span>
                      <span className="text-emerald-600 font-semibold">main</span>
                    </div>

                    <div className="bg-[#1C1613] text-[#FAF8F5] p-3 rounded-xl space-y-1.5 text-[11px]">
                      <div className="text-[#D4C7BA]">
                        <span className="text-emerald-400">commit 7a9e31d</span> (HEAD -&gt; main)
                      </div>
                      <div className="text-[#8A7B70]">Author: Dinkar Kumar &lt;dinkarkr691@gmail.com&gt;</div>
                      <div className="text-amber-300 font-medium pt-1">
                        feat: implement JWT auth middleware &amp; optimistic cart recalculation
                      </div>
                      <div className="text-[#8A7B70] text-[10px] pt-1">
                        + 4 files changed, 218 insertions(+), 14 deletions(-)
                      </div>
                    </div>

                    <a
                      href="https://github.com/691Tech"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-heading-sans font-semibold text-[#E06A26] hover:underline pt-1"
                    >
                      <span>Explore all commits on github.com/691Tech</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>

              {/* Bottom Card Footer */}
              <div className="bg-[#FAF8F5] border-t border-[#EAE3D8] px-4 py-2.5 flex items-center justify-between text-[11px] text-[#7A6A5E]">
                <span>Vadodara, Gujarat (IST)</span>
                <span className="font-medium text-[#1C1613]">Portfolio Engine v2.4</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
