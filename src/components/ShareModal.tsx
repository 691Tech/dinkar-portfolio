"use client";

import React, { useState } from "react";
import { X, Copy, Check, Share2, QrCode, Send, Sparkles } from "lucide-react";
import { sounds } from "@/lib/sound";
import { useToast } from "@/components/Toast";
import { LinkedinIcon } from "@/components/Icons";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShareModal({ isOpen, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();
  const portfolioUrl = "https://dinkarkumar-portfolio.web.app";

  if (!isOpen) return null;

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(portfolioUrl);
    sounds.playClick();
    setCopied(true);
    showToast("Portfolio link copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnLinkedIn = () => {
    const text = encodeURIComponent("Check out Dinkar Kumar's AI Engineering & Full Stack Portfolio: " + portfolioUrl);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(portfolioUrl)}`, "_blank");
  };

  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(`Hi! Take a look at Dinkar Kumar's portfolio (Computer Science & AI Engineer at Parul University): ${portfolioUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#FAF8F5] rounded-3xl border border-[#E6DFD5] shadow-2xl p-6 sm:p-7 space-y-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#FFF3EB] text-[#E06A26] flex items-center justify-center">
              <Share2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading-sans font-bold text-base text-[#1C1613]">
                Share Digital Portfolio
              </h3>
              <p className="text-[11px] text-[#7A6A5E]">
                Scan on mobile or share direct link
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#574B42] hover:text-[#1C1613] rounded-full hover:bg-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* QR Code Specimen */}
        <div className="p-6 rounded-2xl bg-white border border-[#EAE3D8] text-center space-y-3">
          <div className="w-44 h-44 mx-auto p-3 bg-white rounded-xl border border-[#E6DFD5] flex items-center justify-center shadow-xs">
            {/* SVG Vector QR Code targeting the live URL */}
            <svg viewBox="0 0 100 100" className="w-full h-full fill-[#1C1613]">
              {/* Corner position markers */}
              <rect x="5" y="5" width="28" height="28" rx="4" fill="none" stroke="#1C1613" strokeWidth="4" />
              <rect x="11" y="11" width="16" height="16" rx="2" />
              <rect x="67" y="5" width="28" height="28" rx="4" fill="none" stroke="#1C1613" strokeWidth="4" />
              <rect x="73" y="11" width="16" height="16" rx="2" />
              <rect x="5" y="67" width="28" height="28" rx="4" fill="none" stroke="#1C1613" strokeWidth="4" />
              <rect x="11" y="73" width="16" height="16" rx="2" />

              {/* Data matrix dots */}
              <rect x="42" y="8" width="6" height="6" />
              <rect x="52" y="8" width="6" height="6" />
              <rect x="42" y="18" width="6" height="6" />
              <rect x="52" y="24" width="6" height="6" />
              <rect x="8" y="42" width="6" height="6" />
              <rect x="18" y="42" width="6" height="6" />
              <rect x="24" y="52" width="6" height="6" />
              <rect x="42" y="42" width="16" height="16" rx="3" fill="#E06A26" />
              <rect x="67" y="42" width="6" height="6" />
              <rect x="78" y="48" width="6" height="6" />
              <rect x="88" y="42" width="6" height="6" />
              <rect x="42" y="67" width="6" height="6" />
              <rect x="52" y="72" width="6" height="6" />
              <rect x="42" y="82" width="6" height="6" />
              <rect x="67" y="67" width="6" height="6" />
              <rect x="78" y="78" width="6" height="6" />
              <rect x="88" y="88" width="6" height="6" />
            </svg>
          </div>
          <div className="space-y-1">
            <span className="font-heading-sans font-bold text-xs text-[#1C1613] block">
              Instant Mobile Scan
            </span>
            <p className="text-[11px] text-[#7A6A5E]">
              Point phone camera to open live portfolio on iOS or Android.
            </p>
          </div>
        </div>

        {/* Copy Link Input */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white border border-[#EAE3D8]">
          <span className="text-xs font-code-mono text-[#574B42] truncate pl-3 flex-1">
            {portfolioUrl}
          </span>
          <button
            onClick={handleCopyUrl}
            className="btn-primary-warm text-xs py-2 px-3.5 shrink-0"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copied" : "Copy Link"}</span>
          </button>
        </div>

        {/* Social Share Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <button
            onClick={shareOnLinkedIn}
            className="p-3 rounded-2xl bg-white border border-[#EAE3D8] hover:border-[#D6CBC0] text-xs font-heading-sans font-semibold text-[#1C1613] flex items-center justify-center gap-2 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
            <span>LinkedIn Share</span>
          </button>
          <button
            onClick={shareOnWhatsApp}
            className="p-3 rounded-2xl bg-white border border-[#EAE3D8] hover:border-[#D6CBC0] text-xs font-heading-sans font-semibold text-[#1C1613] flex items-center justify-center gap-2 transition-colors"
          >
            <Send className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}
