"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/portfolio";
import { Code, Server, Database, Brain, Sparkles, Check } from "lucide-react";

export default function SkillsSection() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const icons = [Code, Server, Database, Brain];

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#E6DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="eyebrow-badge text-[#E06A26] mb-3 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E06A26]"></span>
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="font-heading-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1613] tracking-tight leading-[1.18] mb-4">
            Mastery grounded in{" "}
            <span className="font-display-serif italic font-normal text-[#E06A26]">
              first principles
            </span>{" "}
            and production practice.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#574B42] leading-relaxed">
            From modern responsive client interfaces to scalable backend services, WebSocket event conduits, 
            and algorithmic problem solving in Java.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center sm:justify-center overflow-x-auto no-scrollbar gap-2 mb-8 sm:mb-12 py-1 px-1">
          {SKILL_CATEGORIES.map((category, idx) => {
            const Icon = icons[idx] || Sparkles;
            const isActive = activeCategoryIndex === idx;

            return (
              <button
                key={category.title}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`px-4 py-2.5 rounded-full text-xs font-heading-sans font-semibold transition-all flex items-center gap-2 shrink-0 ${
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
        <div className="tactile-card rounded-3xl p-6 sm:p-10 bg-white border border-[#E6DFD5] max-w-5xl mx-auto">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES[activeCategoryIndex].skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EFE9E1] flex flex-col justify-between hover:border-[#D6CBC0] transition-colors"
              >
                <div>
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

                  <p className="text-xs text-[#574B42] leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#EFE9E1] flex items-center justify-between text-[11px] text-[#8A7B70]">
                  <span>Applied In Production</span>
                  <span className="font-code-mono font-medium text-[#1C1613]">{skill.level}</span>
                </div>
              </div>
            ))}
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
