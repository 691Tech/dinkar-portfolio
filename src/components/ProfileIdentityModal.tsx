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
  RotateCw, 
  Copy, 
  Check, 
  Share2,
  Box,
  Eye
} from "lucide-react";
import { PERSONAL_DETAILS } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./Icons";
import Interactive3DModel from "./Interactive3DModel";

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
  const [avatarMode, setAvatarMode] = useState<"3d" | "cartoon" | "real">("3d");
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
    if (!cardRef.current || avatarMode === "3d") return;
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
              3D Digital Identity Pass
            </span>
            <span className="text-[10px] font-code-mono px-2 py-0.5 rounded-full bg-[#FAF8F5] border border-[#E6DFD5] text-[#8A7B70]">
              Tripo 3D &bull; PBR
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="p-1.5 text-[#574B42] hover:text-[#1C1613] hover:bg-[#FAF8F5] rounded-full transition-colors border border-[#E6DFD5]"
              title="Flip Card"
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

        {/* Triple View Mode Switcher: 3D Model | 3D Cartoon Render | Studio Photo */}
        <div className="px-4 pt-3 pb-1 flex items-center justify-between bg-[#FAF8F5] gap-2">
          <span className="text-[10px] font-code-mono text-[#8A7B70] uppercase tracking-wider hidden sm:inline">
            Mode
          </span>
          <div className="inline-flex p-1 rounded-full bg-[#EAE4DC] border border-[#DDD4C7] gap-1 w-full sm:w-auto justify-center">
            <button
              onClick={() => { setAvatarMode("3d"); setIsFlipped(false); }}
              className={`px-3 py-1 rounded-full text-[11px] font-heading-sans font-semibold transition-all flex items-center gap-1 ${
                avatarMode === "3d"
                  ? "bg-[#E06A26] text-[#FAF8F5] shadow-xs"
                  : "text-[#574B42] hover:text-[#1C1613]"
              }`}
            >
              <Box className="w-3 h-3" />
              <span>3D Model</span>
            </button>
            <button
              onClick={() => { setAvatarMode("cartoon"); setIsFlipped(false); }}
              className={`px-3 py-1 rounded-full text-[11px] font-heading-sans font-semibold transition-all flex items-center gap-1 ${
                avatarMode === "cartoon"
                  ? "bg-[#1C1613] text-[#FAF8F5] shadow-xs"
                  : "text-[#574B42] hover:text-[#1C1613]"
              }`}
            >
              <Sparkles className="w-3 h-3 text-[#FFD54F]" />
              <span>3D Cartoon</span>
            </button>
            <button
              onClick={() => { setAvatarMode("real"); setIsFlipped(false); }}
              className={`px-3 py-1 rounded-full text-[11px] font-heading-sans font-semibold transition-all flex items-center gap-1 ${
                avatarMode === "real"
                  ? "bg-[#1C1613] text-[#FAF8F5] shadow-xs"
                  : "text-[#574B42] hover:text-[#1C1613]"
              }`}
            >
              <span>📸 Portrait</span>
            </button>
          </div>
        </div>

        {/* 3D Interactive Showcase Area */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1 flex flex-col items-center">
          
          {/* VIEW MODE 1: FULL INTERACTIVE 3D WEBGL MODEL (Tripo 3D) */}
          {avatarMode === "3d" ? (
            <div className="w-full flex flex-col items-center">
              <Interactive3DModel className="w-full h-72 sm:h-80" autoRotate={true} />
              
              {/* Identity Under 3D Viewer */}
              <div className="text-center mt-3">
                <h3 className="font-heading-sans font-extrabold text-lg text-[#1C1613] tracking-tight">
                  {PERSONAL_DETAILS.name}
                </h3>
                <p className="text-xs font-heading-sans text-[#E06A26] font-semibold flex items-center justify-center gap-1.5 mt-0.5">
                  <span>AI Engineer</span>
                  <span className="text-[#8A7B70]">&bull;</span>
                  <span>Parul University &apos;29</span>
                </p>
                <p className="text-[11px] text-[#7A6A5E] mt-0.5 flex items-center justify-center gap-1">
                  <MapPin className="w-3 h-3 text-[#E06A26]" />
                  <span>Vadodara, Gujarat, India</span>
                </p>
              </div>
            </div>
          ) : (
            /* VIEW MODE 2 & 3: 3D Tilt Card with Cartoon or Real Photo */
            <div 
              className="w-full perspective-1000 py-1 flex justify-center"
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

                {/* Corner Snapcode Accents */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#FFD54F]/70 rounded-tl-sm"></div>
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#FFD54F]/70 rounded-tr-sm"></div>
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#FFD54F]/70 rounded-bl-sm"></div>
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#FFD54F]/70 rounded-br-sm"></div>

                {/* Top Card Badge */}
                <div className="flex items-center justify-between mb-3 relative z-10">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] font-heading-sans font-semibold text-[#FFD54F]">
                    <Sparkles className="w-3 h-3" />
                    <span>PARUL CSE-AI &apos;29</span>
                  </div>
                  <div className="inline-flex items-center gap-1 text-[10px] font-code-mono text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>VERIFIED ID</span>
                  </div>
                </div>

                {/* Card Center */}
                <div className="relative flex flex-col items-center justify-center my-2 z-10">
                  {avatarMode === "cartoon" ? (
                    /* Tripo 3D Cartoon Model Render (Light Skin Tone) */
                    <div className="relative">
                      <div className="w-36 h-40 sm:w-40 sm:h-44 rounded-2xl bg-gradient-to-tr from-[#FFD54F]/10 via-[#E06A26]/20 to-transparent border-2 border-[#FFD54F]/80 shadow-2xl p-2 flex items-center justify-center relative overflow-hidden group-hover:scale-103 transition-transform">
                        <img
                          src="/images/tripo-avatar.webp"
                          alt="Dinkar Kumar 3D Model Character"
                          className="w-full h-full object-contain drop-shadow-2xl"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/images/dinkar-profile.jpg";
                          }}
                        />
                      </div>
                      <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#1C1613] border border-[#FFD54F] text-[10px] font-heading-sans font-bold text-[#FFD54F] shadow-lg flex items-center gap-1 whitespace-nowrap">
                        <Flame className="w-3 h-3 text-[#FFD54F]" />
                        <span>3D CARTOON MODEL</span>
                      </div>
                    </div>
                  ) : (
                    /* Studio Real Portrait */
                    <div className="relative">
                      <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-[#E06A26] shadow-xl relative group-hover:scale-103 transition-transform">
                        <img
                          src="/images/dinkar-profile.jpg"
                          alt="Dinkar Kumar AI Engineer"
                          className="w-full h-full object-cover object-center"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/images/about-workspace.svg";
                          }}
                        />
                      </div>
                      <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#1C1613] border border-[#E06A26] text-[10px] font-heading-sans font-bold text-[#E06A26] shadow-lg flex items-center gap-1 whitespace-nowrap">
                        <CheckCircle2 className="w-3 h-3 text-[#E06A26]" />
                        <span>AI ENGINEER</span>
                      </div>
                    </div>
                  )}

                  {/* Name & Tagline */}
                  <h3 className="font-heading-sans font-extrabold text-xl text-[#FAF8F5] mt-4 mb-0.5 tracking-tight">
                    {PERSONAL_DETAILS.name}
                  </h3>
                  <p className="text-xs font-heading-sans text-[#E06A26] font-semibold flex items-center gap-1.5">
                    <span>AI Engineer</span>
                    <span className="text-[#6B5A4E]">&bull;</span>
                    <span>Full Stack Dev</span>
                  </p>
                  <p className="text-[11px] text-[#A8988B] mt-1 flex items-center gap-1 font-sans">
                    <MapPin className="w-3 h-3 text-[#E06A26]" />
                    <span>Vadodara, Gujarat, India</span>
                  </p>
                </div>

                {/* Metrics Strip */}
                <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-white/10 relative z-10 text-center">
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
              </div>
            </div>
          )}

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
              <span>{copiedLink ? "Portfolio Link Copied to Clipboard!" : "Share Dinkar's Verified 3D Digital Card"}</span>
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
