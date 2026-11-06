"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  FileText, Shield, Menu, X, ArrowUpRight, Search, Volume2, 
  VolumeX, Share2, Clock, Sparkles
} from "lucide-react";
import { sounds } from "@/lib/sound";

interface NavbarProps {
  onOpenAdmin: () => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
  onOpenCommandPalette: () => void;
  onOpenShareModal: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export default function Navbar({
  onOpenAdmin,
  onOpenResume,
  onOpenContact,
  onOpenCommandPalette,
  onOpenShareModal,
  soundEnabled,
  onToggleSound,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [istTime, setIstTime] = useState("");

  // Live IST Clock (Vadodara Time)
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeStr = now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true
        });
        setIstTime(timeStr);
      } catch {
        setIstTime("IST Active");
      }
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);

          const sections = ["about", "projects", "skills", "education", "github", "faq", "contact"];
          const scrollPos = window.scrollY + 200;
          
          for (const sec of sections) {
            const el = document.getElementById(sec);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPos >= top && scrollPos < top + height) {
                setActiveSection(sec);
                break;
              }
            }
          }
          if (window.scrollY < 200) setActiveSection("hero");
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Education", href: "#education", id: "education" },
    { name: "GitHub", href: "#github", id: "github" },
    { name: "FAQ", href: "#faq", id: "faq" },
    { name: "Contact", href: "#contact", id: "contact" }
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E6DFD5] shadow-xs"
          : "bg-[#FAF8F5] border-b border-[#EFE9E1]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Monogram & Name */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-hidden"
          onClick={() => {
            sounds.playClick();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="w-10 h-10 rounded-xl bg-[#1C1613] text-[#FAF8F5] flex items-center justify-center font-heading-sans font-bold text-sm tracking-tight transition-transform group-hover:scale-105 group-hover:bg-[#E06A26] shadow-xs">
            DK
          </div>
          <div className="flex flex-col">
            <span className="font-heading-sans font-bold text-sm tracking-tight text-[#1C1613] flex items-center gap-1.5">
              Dinkar Kumar
              <span className="text-[10px] font-code-mono px-1.5 py-0.2 rounded-sm bg-[#F4EFEA] border border-[#E6DFD5] text-[#574B42]">
                691Tech
              </span>
            </span>
            <span className="text-[11px] text-[#8A7B70] font-sans flex items-center gap-1">
              <span>AI Engineer</span>
              <span className="text-[#C4B7AA]">&bull;</span>
              <span className="text-emerald-700 font-code-mono text-[10px] hidden sm:inline">
                {istTime} (Vadodara)
              </span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#F4EFEA]/80 p-1.5 rounded-full border border-[#E6DFD5]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => sounds.playClick()}
                className={`relative px-3.5 py-1.5 text-xs font-heading-sans font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[#FFFFFF] text-[#1C1613] shadow-xs font-semibold"
                    : "text-[#574B42] hover:text-[#1C1613] hover:bg-[#FAF8F5]"
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E06A26] animate-pulse"></span>
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action Tools & Buttons */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Quick Command Palette Trigger (Ctrl+K) */}
          <button
            onClick={() => {
              sounds.playClick();
              onOpenCommandPalette();
            }}
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E6DFD5] hover:border-[#D6CBC0] text-xs font-heading-sans text-[#574B42] hover:text-[#1C1613] transition-colors shadow-2xs"
            title="Search & Navigate (Ctrl+K / Cmd+K)"
          >
            <Search className="w-3.5 h-3.5 text-[#E06A26]" />
            <span className="text-[11px] hidden md:inline">Quick Jump</span>
            <kbd className="px-1.5 py-0.2 rounded text-[10px] font-code-mono bg-[#FAF8F5] border border-[#E0D7CC] text-[#7A6A5E]">
              ⌘K
            </kbd>
          </button>

          {/* Sound Toggle Button */}
          <button
            onClick={() => {
              sounds.playClick();
              onToggleSound();
            }}
            className={`p-2 rounded-full border transition-colors ${
              soundEnabled
                ? "bg-[#FFF3EB] border-[#FAD8C3] text-[#E06A26]"
                : "bg-white border-[#E6DFD5] text-[#8A7B70] hover:text-[#1C1613]"
            }`}
            title={soundEnabled ? "Mute tactile sound effects" : "Enable tactile sound effects"}
            aria-label="Toggle Sound Effects"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Share Portfolio Button */}
          <button
            onClick={() => {
              sounds.playClick();
              onOpenShareModal();
            }}
            className="p-2 rounded-full bg-white border border-[#E6DFD5] text-[#574B42] hover:text-[#1C1613] hover:border-[#D6CBC0] transition-colors"
            title="Share Portfolio / QR Code"
            aria-label="Share Portfolio"
          >
            <Share2 className="w-4 h-4" />
          </button>

          {/* Resume PDF Button */}
          <button
            onClick={() => {
              sounds.playClick();
              onOpenResume();
            }}
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-heading-sans font-semibold rounded-full bg-[#FFFFFF] border border-[#D6CBC0] text-[#1C1613] hover:border-[#E06A26] hover:text-[#E06A26] transition-colors shadow-2xs"
            title="View & Download Dinkar Kumar's Official Resume PDF"
          >
            <FileText className="w-3.5 h-3.5 text-[#E06A26]" />
            <span>Resume PDF</span>
          </button>

          {/* Contact Button */}
          <button
            onClick={() => {
              sounds.playClick();
              onOpenContact();
            }}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs font-heading-sans font-semibold rounded-full bg-[#1C1613] text-[#FAF8F5] hover:bg-[#E06A26] transition-all shadow-xs"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Admin Shield Button */}
          <button
            onClick={() => {
              sounds.playClick();
              onOpenAdmin();
            }}
            className="p-2 text-[#8A7B70] hover:text-[#1C1613] hover:bg-[#F4EFEA] rounded-full transition-colors border border-transparent hover:border-[#E6DFD5]"
            title="Administrator Portal"
            aria-label="Admin Portal"
          >
            <Shield className="w-4 h-4" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              sounds.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 text-[#1C1613] hover:bg-[#F4EFEA] rounded-lg transition-colors border border-[#E6DFD5]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E6DFD5] px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  sounds.playClick();
                  setMobileMenuOpen(false);
                }}
                className="px-3 py-2.5 rounded-lg text-sm font-heading-sans font-medium text-[#1C1613] hover:bg-[#F4EFEA] flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-[11px] font-code-mono text-[#8A7B70]">#</span>
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-[#E6DFD5] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-white border border-[#E6DFD5] text-xs font-heading-sans font-semibold text-[#1C1613]"
            >
              <Search className="w-4 h-4 text-[#E06A26]" />
              <span>Open Command Palette (Search)</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-white border border-[#D6CBC0] text-xs font-heading-sans font-semibold text-[#1C1613]"
            >
              <FileText className="w-4 h-4 text-[#E06A26]" />
              <span>Official Resume PDF</span>
            </button>

            <div className="flex items-center justify-between text-xs text-[#8A7B70] pt-2 px-1">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#E06A26]" />
                {istTime} (Vadodara, IN)
              </span>
              <a
                href="https://github.com/691Tech"
                target="_blank"
                rel="noreferrer"
                className="text-[#E06A26] font-code-mono font-medium hover:underline"
              >
                @691Tech
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
