"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/portfolio";
import { Code, Server, Database, Brain, Sparkles, Check, ChevronDown, Terminal, Cpu } from "lucide-react";
import { sounds } from "@/lib/sound";

export default function SkillsSection() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [selectedSkillName, setSelectedSkillName] = useState<string | null>("React.js");

  const icons = [Code, Server, Database, Brain];

  const skillDeepDives: Record<string, { pattern: string; benchmark: string; stack: string }> = {
    "React.js": {
      pattern: "Custom Hooks, useOptimistic, Component Compound Patterns & Tailwind v4 Integration",
      benchmark: "Virtual DOM reconciliation < 16ms per frame render",
      stack: "React 19, TypeScript, Next.js App Router"
    },
    "JavaScript (ES6+)": {
      pattern: "Async/Await concurrency, Closures, Event Loop mechanics, Prototypes, Strict Mode",
      benchmark: "Zero-dependency vanilla utilities with microsecond execution",
      stack: "V8 Engine, ES2024 standards"
    },
    "HTML5 & CSS3": {
      pattern: "Semantic accessibility (WCAG AA), CSS Grid & Flexbox, hardware-accelerated animations",
      benchmark: "100% Lighthouse Accessibility & SEO scoring",
      stack: "Modern CSS, CSS Custom Properties"
    },
    "Tailwind CSS": {
      pattern: "Utility-first design tokens, responsive typography clamps, dark/light themes",
      benchmark: "Zero-runtime overhead via PostCSS/Turbopack compilation",
      stack: "Tailwind CSS v4, CSS Variables"
    },
    "Node.js": {
      pattern: "Event-driven asynchronous I/O, cluster workers, stream processing, middleware pipelines",
      benchmark: "Handles 10,000+ concurrent requests on Node runtime",
      stack: "Node.js v22+, Libuv threadpool"
    },
    "Express.js": {
      pattern: "RESTful resource routing, JWT bearer authentication middleware, error handlers",
      benchmark: "Sub-25ms JSON serialization and route dispatching",
      stack: "Express 4/5, Cors, Helmet"
    },
    "Socket.io": {
      pattern: "Bidirectional WebSocket pub/sub, room broadcasting, heartbeat reconnection",
      benchmark: "Sub-42ms real-time event delivery over TCP",
      stack: "WebSocket Engine, Engine.io"
    },
    "RESTful APIs": {
      pattern: "Idempotent HTTP methods, pagination parameters, HTTP status code semantic purity",
      benchmark: "100% Swagger/OpenAPI contract compliance",
      stack: "JSON API, RFC 7231"
    },
    "MongoDB": {
      pattern: "BSON document schemas, aggregation pipelines, indexed compound searches",
      benchmark: "O(1) indexed lookups with replica sets",
      stack: "MongoDB Atlas 7.0"
    },
    "Mongoose": {
      pattern: "Schema validation, pre/post middleware hooks, virtual population, atomic mutations",
      benchmark: "Type-safe database hydration with schema constraints",
      stack: "Mongoose ODM"
    },
    "Firebase": {
      pattern: "Realtime Database subscriptions, Firestore collections, Cloud Storage bucket upload",
      benchmark: "Real-time sync to client in < 50ms",
      stack: "Firebase Client SDK v10, Hosting"
    },
    "Java": {
      pattern: "Object-Oriented Design patterns, Generics, Collections Framework, Multithreading",
      benchmark: "Compiled to efficient bytecode on Java 21 LTS JVM",
      stack: "Java 21, Maven, JUnit 5"
    },
    "Data Structures": {
      pattern: "Binary Search Trees, Heaps, AVL Trees, Hash Tables, Graphs (Adjacency Lists)",
      benchmark: "250+ solved algorithmic problems with optimal O(N log N) / O(1) bounds",
      stack: "LeetCode, CodeChef, Academic Algorithms"
    },
    "Algorithms": {
      pattern: "Dijkstra, BFS/DFS graph traversals, Dynamic Programming memoization, Divide & Conquer",
      benchmark: "Optimal asymptotic space and time bounds",
      stack: "Core CS Fundamentals"
    },
    "Python": {
      pattern: "NumPy matrix operations, Pandas dataframes, Scikit-Learn pipelines, Keras modeling",
      benchmark: "Deep Autoencoder inference in 12ms",
      stack: "Python 3.11+, Scikit-Learn, PyTorch"
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#E6DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="eyebrow-badge text-[#E06A26] mb-3 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E06A26]"></span>
            <span>TECHNICAL CAPABILITIES &amp; BENCHMARKS</span>
          </div>
          <h2 className="font-heading-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1613] tracking-tight leading-[1.18] mb-4">
            Mastery grounded in{" "}
            <span className="font-display-serif italic font-normal text-[#E06A26]">
              first principles
            </span>{" "}
            and production practice.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#574B42] leading-relaxed">
            Click on any skill card below to inspect its production pattern, runtime benchmark, and architectural usage.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {SKILL_CATEGORIES.map((category, idx) => {
            const Icon = icons[idx] || Sparkles;
            const isActive = activeCategoryIndex === idx;

            return (
              <button
                key={category.title}
                onClick={() => {
                  sounds.playClick();
                  setActiveCategoryIndex(idx);
                }}
                className={`px-4 py-2.5 rounded-full text-xs font-heading-sans font-semibold transition-all flex items-center gap-2 ${
                  isActive
                    ? "bg-[#1C1613] text-[#FAF8F5] shadow-xs"
                    : "bg-white text-[#574B42] border border-[#E6DFD5] hover:bg-[#F4EFEA] hover:text-[#1C1613]"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#E06A26]" : "text-[#8A7B70]"}`} />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="tactile-card rounded-3xl p-6 sm:p-10 bg-white border border-[#E6DFD5] max-w-5xl mx-auto shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#F4EFEA] gap-2">
            <div>
              <span className="eyebrow-badge text-[#E06A26] mb-1">
                CATEGORY 0{activeCategoryIndex + 1}
              </span>
              <h3 className="font-heading-sans font-extrabold text-2xl text-[#1C1613]">
                {SKILL_CATEGORIES[activeCategoryIndex].title}
              </h3>
            </div>
            <p className="text-xs font-heading-sans font-medium text-[#7A6A5E] max-w-sm sm:text-right">
              {SKILL_CATEGORIES[activeCategoryIndex].tagline}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SKILL_CATEGORIES[activeCategoryIndex].skills.map((skill, sIdx) => {
              const isSelected = selectedSkillName === skill.name;
              const deepDive = skillDeepDives[skill.name];

              return (
                <div
                  key={sIdx}
                  onClick={() => {
                    sounds.playClick();
                    setSelectedSkillName(isSelected ? null : skill.name);
                  }}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#FFF9F5] border-[#FAD8C3] shadow-xs"
                      : "bg-[#FAF8F5] border-[#EFE9E1] hover:border-[#D6CBC0]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-heading-sans font-bold text-base text-[#1C1613] flex items-center gap-2">
                      {skill.name}
                      {skill.highlight && (
                        <span className="text-[10px] font-code-mono font-bold px-2 py-0.5 rounded-full bg-[#FFF3EB] text-[#E06A26] border border-[#FAD8C3]">
                          Core
                        </span>
                      )}
                    </h4>
                    <span className="text-xs font-code-mono text-[#8A7B70]">
                      {skill.percentage}%
                    </span>
                  </div>

                  {/* Visual Progress Bar */}
                  <div className="w-full h-1.5 bg-[#E6DFD5] rounded-full overflow-hidden mb-3">
                    <div
                      className="h-full bg-[#E06A26] rounded-full transition-all duration-500"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>

                  <p className="text-xs text-[#574B42] leading-relaxed mb-3">
                    {skill.description}
                  </p>

                  {/* Expanded Architectural Inspector */}
                  {isSelected && deepDive && (
                    <div className="mt-3 pt-3 border-t border-[#FAD8C3] space-y-2 text-xs animate-fadeIn">
                      <div className="flex items-start gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-[#E06A26] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-code-mono text-[10px] text-[#8A7B70] uppercase block">Design Pattern</span>
                          <span className="text-[#1C1613] font-medium">{deepDive.pattern}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-code-mono text-[10px] text-[#8A7B70] uppercase block">Benchmark</span>
                          <span className="text-emerald-800 font-code-mono font-medium">{deepDive.benchmark}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-3 pt-2.5 border-t border-[#EFE9E1] flex items-center justify-between text-[11px] text-[#8A7B70]">
                    <span>{isSelected ? "Click to collapse" : "Click to inspect benchmark"}</span>
                    <span className="font-code-mono font-medium text-[#1C1613]">{skill.level}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Engineering Philosophy Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 max-w-5xl mx-auto">
          <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E6DFD5] text-xs">
            <span className="font-code-mono text-[10px] text-[#E06A26] font-bold block uppercase mb-1">Principle 01</span>
            <strong className="block text-[#1C1613] font-heading-sans mb-1">Separation of Concerns</strong>
            <p className="text-[#7A6A5E] text-[11px]">Strict MVC architectural boundaries across controllers, services, and schemas.</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E6DFD5] text-xs">
            <span className="font-code-mono text-[10px] text-[#2E7D5B] font-bold block uppercase mb-1">Principle 02</span>
            <strong className="block text-[#1C1613] font-heading-sans mb-1">Non-Blocking I/O</strong>
            <p className="text-[#7A6A5E] text-[11px]">Event loops, WebSockets, and asynchronous pipelines that scale under concurrent load.</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E6DFD5] text-xs">
            <span className="font-code-mono text-[10px] text-[#244372] font-bold block uppercase mb-1">Principle 03</span>
            <strong className="block text-[#1C1613] font-heading-sans mb-1">Algorithmic Efficiency</strong>
            <p className="text-[#7A6A5E] text-[11px]">Optimized time &amp; space asymptotic complexity for critical paths.</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E6DFD5] text-xs">
            <span className="font-code-mono text-[10px] text-[#784212] font-bold block uppercase mb-1">Principle 04</span>
            <strong className="block text-[#1C1613] font-heading-sans mb-1">State Predictability</strong>
            <p className="text-[#7A6A5E] text-[11px]">Clean client state machines and database atomic operations.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
