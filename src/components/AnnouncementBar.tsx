"use client";

import React, { useState } from "react";
import { Sparkles, MapPin, ArrowRight, X } from "lucide-react";

export default function AnnouncementBar({ onOpenContact }: { onOpenContact?: () => void }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-[#1C1613] text-[#FAF8F5] text-xs py-2 px-4 transition-all relative border-b border-[#2D241E] z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-heading-sans font-semibold text-[#F7EDE2] tracking-wide text-[11px] sm:text-xs">
            Open for Engineering Internships & Projects
          </span>
          <span className="hidden md:inline-block text-[#8A7B70]">•</span>
          <span className="hidden md:flex items-center gap-1 text-[#D4C7BA] text-[11px]">
            <MapPin className="w-3 h-3 text-[#E06A26]" />
            Parul University, Vadodara (2025–2029)
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center gap-1 text-[11px] font-heading-sans font-medium text-[#E06A26] hover:text-[#F28C38] transition-colors"
          >
            <span>Let&apos;s build together</span>
            <ArrowRight className="w-3 h-3" />
          </button>
          <button
            onClick={() => setVisible(false)}
            aria-label="Close banner"
            className="text-[#8A7B70] hover:text-white transition-colors p-0.5 rounded"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
