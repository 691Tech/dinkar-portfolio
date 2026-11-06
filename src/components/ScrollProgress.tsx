"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { sounds } from "@/lib/sound";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const current = window.scrollY;
          const progress = totalHeight > 0 ? (current / totalHeight) * 100 : 0;
          setScrollProgress(progress);
          setVisible(current > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed bottom-6 left-6 z-40 animate-fadeIn">
      <button
        onClick={scrollToTop}
        className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-[#E6DFD5] shadow-lg flex items-center justify-center text-[#1C1613] hover:text-[#E06A26] hover:scale-105 active:scale-95 transition-all group relative"
        title="Scroll back to top"
      >
        <svg className="w-12 h-12 -rotate-90 absolute inset-0 pointer-events-none">
          <circle
            cx="24"
            cy="24"
            r={radius}
            stroke="#EAE3D8"
            strokeWidth="2.5"
            fill="none"
          />
          <circle
            cx="24"
            cy="24"
            r={radius}
            stroke="#E06A26"
            strokeWidth="2.5"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-150"
          />
        </svg>
        <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </div>
  );
}
