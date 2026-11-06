"use client";

import React, { useState, useRef, useEffect } from "react";
import { 
  X, 
  Sparkles, 
  MapPin, 
  Mail, 
  Phone, 
  ExternalLink, 
  CheckCircle2, 
  Flame, 
  GraduationCap, 
  Layers, 
  RotateCw, 
  Copy, 
  Check, 
  Share2
} from "lucide-react";
import { PERSONAL_DETAILS } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./Icons";

interface ProfileIdentityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume?: () => void;
  onOpenContact?: () => void;
}

export default function ProfileIdentityModal({
  isOpen,
  onClose,
  onOpenResume,
  onOpenContact
}: ProfileIdentityModalProps) {
  const [avatarMode, setAvatarMode] = useState<"real" | "cartoon">("real");
  const [isFlipped, setIsFlipped] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, shineX: 50, shineY: 50 });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    const shineX = (x / rect.width) * 100;
    const shineY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY, shineX, shineY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, shineX: 50, shineY: 50 });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DETAILS.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleShareProfile = () => {
    navigator.clipboard.writeText("https://dinkarkumar-portfolio.web.app");
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-md bg-[#FAF8F5] rounded-3xl border border-[#E6DFD5] shadow-2xl overflow-hidden flex flex-col max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-5 py-4 border-b border-[#E6DFD5] bg-[#F7F3EE] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#E06A26] animate-pulse"></div>
            <span className="font-heading-sans font-bold text-xs tracking-wider uppercase text-[#1C1613]">
              Digital Identity Pass
            </span>
            <span className="text-[10px] font-code-mono px-2 py-0.5 rounded-full bg-[#FAF8F5] border border-[#E6DFD5] text-[#8A7B70]">
              v2.5
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="p-1.5 text-[#574B42] hover:text-[#1C1613] hover:bg-[#FAF8F5] rounded-full transition-colors border border-[#E6DFD5]"
              title="Flip Card (3D Orbit)"
            >
              <RotateCw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#574B42] hover:text-[#1C1613] hover:bg-[#FAF8F5] rounded-full transition-colors border border-[#E6DFD5]"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* View Switcher: Real Photo vs 3D Cartoon Bitmoji */}
        <div className="px-5 pt-3 pb-1 flex items-center justify-between bg-[#FAF8F5]">
          <span className="text-[11px] font-code-mono text-[#8A7B70] uppercase tracking-wider">
            Display Mode
          </span>
          <div className="inline-flex p-1 rounded-full bg-[#EAE4DC] border border-[#DDD4C7] gap-1">
            <button
              onClick={() => { setAvatarMode("real"); setIsFlipped(false); }}
              className={`px-3 py-1 rounded-full text-[11px] font-heading-sans font-semibold transition-all ${
                avatarMode === "real"
                  ? "bg-[#1C1613] text-[#FAF8F5] shadow-xs"
                  : "text-[#574B42] hover:text-[#1C1613]"
              }`}
            >
              📸 Studio Portrait
            </button>
            <button
              onClick={() => { setAvatarMode("cartoon"); setIsFlipped(false); }}
              className={`px-3 py-1 rounded-full text-[11px] font-heading-sans font-semibold transition-all ${
                avatarMode === "cartoon"
                  ? "bg-[#E06A26] text-[#FAF8F5] shadow-xs"
                  : "text-[#574B42] hover:text-[#1C1613]"
              }`}
            >
              ✨ 3D Bitmoji Avatar
            </button>
          </div>
        </div>

        {/* 3D Interactive Card Showcase Area */}
        <div className="p-5 overflow-y-auto space-y-5 flex-1 flex flex-col items-center">
          
          {/* The 3D Tilt Container */}
          <div 
            className="w-full perspective-1000 py-2 flex justify-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              ref={cardRef}
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.01)`,
                transition: "transform 0.15s ease-out"
              }}
              className="relative w-full max-w-[340px] rounded-3xl p-5 bg-gradient-to-b from-[#1C1613] via-[#241E1A] to-[#120E0C] text-[#FAF8F5] shadow-2xl border-2 border-[#D4A373]/30 overflow-hidden select-none cursor-pointer group"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              {/* Dynamic Holographic Shine Layer */}
              <div
                className="absolute inset-0 pointer-events-none opacity-25 group-hover:opacity-40 transition-opacity"
                style={{
                  background: `radial-gradient(circle at ${tilt.shineX}% ${tilt.shineY}%, rgba(255,255,255,0.4) 0%, rgba(224,106,38,0.2) 40%, transparent 80%)`
                }}
              />

              {/* Snapchat-Style Corner Snapcode Accents */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#FFD54F]/70 rounded-tl-sm"></div>
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#FFD54F]/70 rounded-tr-sm"></div>
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#FFD54F]/70 rounded-bl-sm"></div>
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#FFD54F]/70 rounded-br-sm"></div>

              {/* Top Card Badge */}
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] font-heading-sans font-semibold text-[#FFD54F]">
                  <Sparkles className="w-3 h-3" />
                  <span>PARUL CSE-AI &apos;29</span>
                </div>
                <div className="inline-flex items-center gap-1 text-[10px] font-code-mono text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>VERIFIED ID</span>
                </div>
              </div>

              {/* Card Center: Avatar / Portrait */}
              <div className="relative flex flex-col items-center justify-center my-3 z-10">
                {avatarMode === "real" ? (
                  /* High Fidelity Real Portrait */
                  <div className="relative">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-[#E06A26] shadow-xl relative group-hover:scale-103 transition-transform">
                      <img
                        src="/images/dinkar-profile.jpg"
                        alt="Dinkar Kumar AI Engineer"
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                          // Graceful fallback if image doesn't load
                          (e.target as HTMLImageElement).src = "/images/about-workspace.svg";
                        }}
                      />
                    </div>
                    {/* Live Aura Badge */}
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#1C1613] border border-[#E06A26] text-[10px] font-heading-sans font-bold text-[#E06A26] shadow-lg flex items-center gap-1 whitespace-nowrap">
                      <CheckCircle2 className="w-3 h-3 text-[#E06A26]" />
                      <span>AI ENGINEER</span>
                    </div>
                  </div>
                ) : (
                  /* 3D Snapchat Bitmoji / Cartoon Avatar */
                  <div className="relative">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-tr from-[#FFD54F]/20 via-[#E06A26]/30 to-[#8A4FFF]/20 border-2 border-[#FFD54F] shadow-xl p-2 flex items-center justify-center relative overflow-hidden group-hover:scale-103 transition-transform">
                      {/* Stylized 3D Avatar Vector Illustration */}
                      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
                        <defs>
                          <radialGradient id="avatarGlow" cx="50%" cy="40%" r="50%">
                            <stop offset="0%" stopColor="#FFE082" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#1C1613" stopOpacity="0" />
                          </radialGradient>
                          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#C68642" />
                            <stop offset="100%" stopColor="#A0652C" />
                          </linearGradient>
                          <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1A110D" />
                            <stop offset="100%" stopColor="#0D0806" />
                          </linearGradient>
                          <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#2A2421" />
                            <stop offset="100%" stopColor="#14100E" />
                          </linearGradient>
                        </defs>

                        {/* Background Aura */}
                        <circle cx="100" cy="100" r="90" fill="url(#avatarGlow)" />

                        {/* Developer Body / Black Shirt */}
                        <path d="M 40 185 Q 55 130 100 130 Q 145 130 160 185 Z" fill="url(#shirtGrad)" stroke="#3D322B" strokeWidth="2" />
                        
                        {/* Shirt Collar & Buttons */}
                        <path d="M 85 130 L 100 155 L 115 130" fill="none" stroke="#52443B" strokeWidth="2.5" />
                        <circle cx="100" cy="165" r="2.5" fill="#C4B5A5" />
                        <circle cx="100" cy="178" r="2.5" fill="#C4B5A5" />

                        {/* Neck */}
                        <rect x="88" y="108" width="24" height="26" rx="4" fill="#A0652C" />

                        {/* Head & Face */}
                        <ellipse cx="100" cy="80" rx="36" ry="42" fill="url(#skinGrad)" />

                        {/* Modern Styled Hair */}
                        <path d="M 62 70 C 60 40 75 25 100 24 C 125 25 140 40 138 70 C 132 50 115 45 100 48 C 85 45 68 50 62 70 Z" fill="url(#hairGrad)" />
                        {/* Hair Texture Spikes */}
                        <path d="M 85 24 Q 95 18 105 24" stroke="#3D2B1F" strokeWidth="3" fill="none" />
                        <path d="M 98 22 Q 108 16 118 23" stroke="#3D2B1F" strokeWidth="3" fill="none" />

                        {/* Ears */}
                        <ellipse cx="62" cy="82" rx="6" ry="10" fill="#A0652C" />
                        <ellipse cx="138" cy="82" rx="6" ry="10" fill="#A0652C" />

                        {/* Eyebrows */}
                        <path d="M 76 68 Q 85 64 92 67" stroke="#1A110D" strokeWidth="3" strokeLinecap="round" fill="none" />
                        <path d="M 108 67 Q 115 64 124 68" stroke="#1A110D" strokeWidth="3" strokeLinecap="round" fill="none" />

                        {/* Eyes */}
                        <ellipse cx="84" cy="76" rx="4.5" ry="5.5" fill="#FFFFFF" />
                        <circle cx="85" cy="76" r="3" fill="#1A110D" />
                        <circle cx="86" cy="75" r="1" fill="#FFFFFF" />

                        {/* Right Eye */}
                        <ellipse cx="116" cy="76" rx="4.5" ry="5.5" fill="#FFFFFF" />
                        <circle cx="115" cy="76" r="3" fill="#1A110D" />
                        <circle cx="116" cy="75" r="1" fill="#FFFFFF" />

                        {/* Nose */}
                        <path d="M 100 75 L 97 86 L 103 86" stroke="#874D1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />

                        {/* Confident Smile */}
                        <path d="M 88 94 Q 100 102 112 94" stroke="#4A2508" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                        
                        {/* Trimmed Beard & Mustache */}
                        <path d="M 92 90 Q 100 93 108 90" stroke="#1A110D" strokeWidth="2" strokeLinecap="round" fill="none" />
                        <path d="M 96 101 Q 100 103 104 101" stroke="#1A110D" strokeWidth="2" strokeLinecap="round" fill="none" />

                        {/* Laptop Glow Reflections */}
                        <polygon points="60,195 140,195 125,178 75,178" fill="#E06A26" opacity="0.4" />
                        <line x1="70" y1="186" x2="130" y2="186" stroke="#FAF8F5" strokeWidth="1.5" opacity="0.8" />
                      </svg>
                    </div>
                    {/* 3D Bitmoji Pill */}
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#1C1613] border border-[#FFD54F] text-[10px] font-heading-sans font-bold text-[#FFD54F] shadow-lg flex items-center gap-1 whitespace-nowrap">
                      <Flame className="w-3 h-3 text-[#FFD54F]" />
                      <span>3D SNAP BITMOJI</span>
                    </div>
                  </div>
                )}

                {/* Identity Name & Tagline */}
                <h3 className="font-heading-sans font-extrabold text-xl text-[#FAF8F5] mt-4 mb-0.5 tracking-tight">
                  {PERSONAL_DETAILS.name}
                </h3>
                <p className="text-xs font-heading-sans text-[#E06A26] font-semibold flex items-center gap-1.5">
                  <span>AI Engineer</span>
                  <span className="text-[#6B5A4E]">•</span>
                  <span>Full Stack Dev</span>
                </p>
                <p className="text-[11px] text-[#A8988B] mt-1 flex items-center gap-1 font-sans">
                  <MapPin className="w-3 h-3 text-[#E06A26]" />
                  <span>Vadodara, Gujarat, India</span>
                </p>
              </div>

              {/* Snapchat-Style Streak & Metrics Strip */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/10 relative z-10 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-code-mono text-[#A8988B] uppercase">Streak</span>
                  <span className="text-xs font-bold text-[#FFD54F] flex items-center gap-0.5 mt-0.5">
                    <Flame className="w-3 h-3 text-[#FFD54F]" />
                    365d
                  </span>
                </div>
                <div className="flex flex-col items-center border-x border-white/10">
                  <span className="text-[10px] font-code-mono text-[#A8988B] uppercase">Academics</span>
                  <span className="text-xs font-bold text-emerald-400 mt-0.5">
                    94% XI
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-code-mono text-[#A8988B] uppercase">GitHub</span>
                  <span className="text-xs font-bold text-[#E06A26] mt-0.5 font-code-mono">
                    @691Tech
                  </span>
                </div>
              </div>

              {/* Flip Hint */}
              <div className="mt-3 text-center text-[10px] font-code-mono text-[#7A6A5E] flex items-center justify-center gap-1">
                <span>Click card to inspect credentials</span>
                <RotateCw className="w-2.5 h-2.5" />
              </div>
            </div>
          </div>

          {/* Quick Contact & Action Buttons */}
          <div className="w-full space-y-2.5 pt-1">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleCopyEmail}
                className="py-2.5 px-3 rounded-xl bg-white border border-[#E6DFD5] text-xs font-heading-sans font-semibold text-[#1C1613] hover:border-[#E06A26] hover:bg-[#FFF3EB] transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 text-[#E06A26]" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={`tel:${PERSONAL_DETAILS.phone}`}
                className="py-2.5 px-3 rounded-xl bg-white border border-[#E6DFD5] text-xs font-heading-sans font-semibold text-[#1C1613] hover:border-[#E06A26] hover:bg-[#FFF3EB] transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#2E7D5B]" />
                <span>Direct Call</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={PERSONAL_DETAILS.github}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-3 rounded-xl bg-[#1C1613] text-[#FAF8F5] text-xs font-heading-sans font-semibold hover:bg-[#2D241E] transition-colors flex items-center justify-center gap-1.5 shadow-xs"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repos</span>
              </a>

              <a
                href={PERSONAL_DETAILS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-3 rounded-xl bg-[#0A66C2] text-white text-xs font-heading-sans font-semibold hover:bg-[#084e96] transition-colors flex items-center justify-center gap-1.5 shadow-xs"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>

            <button
              onClick={handleShareProfile}
              className="w-full py-2 px-3 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] text-[11px] font-heading-sans font-medium text-[#7A6A5E] hover:text-[#1C1613] transition-colors flex items-center justify-center gap-1.5"
            >
              <Share2 className="w-3 h-3 text-[#E06A26]" />
              <span>{copiedLink ? "Portfolio Link Copied to Clipboard!" : "Share Dinkar's Verified Digital Card"}</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-[#E6DFD5] bg-[#F7F3EE] flex items-center justify-between text-[11px]">
          <span className="font-code-mono text-[#8A7B70]">
            Parul University &bull; Vadodara
          </span>
          {onOpenResume && (
            <button
              onClick={() => {
                onClose();
                onOpenResume();
              }}
              className="text-[#E06A26] font-heading-sans font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>View Full Resume</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
