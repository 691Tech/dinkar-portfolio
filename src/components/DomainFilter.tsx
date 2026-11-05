"use client";

import React from "react";
import { Sparkles, Layers, MessageSquare, Code, Cpu } from "lucide-react";

interface DomainFilterProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  counts: Record<string, number>;
}

export default function DomainFilter({ selectedCategory, onSelectCategory, counts }: DomainFilterProps) {
  const filters = [
    { id: "all", label: "All Engineering Works", icon: Sparkles },
    { id: "fullstack", label: "Full-Stack Web & APIs", icon: Layers },
    { id: "realtime", label: "Real-Time & WebSockets", icon: MessageSquare },
    { id: "dsa_core", label: "Core Java & DSA", icon: Code }
  ];

  return (
    <div className="flex items-center justify-center mb-12">
      <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-full bg-[#F4EFEA] border border-[#E6DFD5] gap-1 max-w-full">
        {filters.map((f) => {
          const Icon = f.icon;
          const isActive = selectedCategory === f.id;
          const count = counts[f.id] || 0;

          return (
            <button
              key={f.id}
              onClick={() => onSelectCategory(f.id)}
              className={`px-4 py-2 rounded-full text-xs font-heading-sans font-semibold transition-all duration-200 flex items-center gap-2 ${
                isActive
                  ? "bg-[#1C1613] text-[#FAF8F5] shadow-xs"
                  : "text-[#574B42] hover:text-[#1C1613] hover:bg-[#FAF8F5]"
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#E06A26]" : "text-[#8A7B70]"}`} />
              <span>{f.label}</span>
              <span
                className={`text-[10px] font-code-mono px-1.5 py-0.2 rounded-full ${
                  isActive ? "bg-[#2D241E] text-[#FAF8F5]" : "bg-[#EAE4DC] text-[#7A6A5E]"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
