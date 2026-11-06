"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FileText, Shield, Menu, X, ArrowUpRight, Terminal, Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_DETAILS } from "@/data/portfolio";

interface NavbarProps {
  onOpenAdmin: () => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
  onOpenProfileModal?: () => void;
}

export default function Navbar({ onOpenAdmin, onOpenResume, onOpenContact, onOpenProfileModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

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
        {/* Brand Monogram & Name + Profile Trigger */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenProfileModal || (() => window.scrollTo({ top: 0, behavior: "smooth" }))}
            className="flex items-center gap-2.5 text-left group focus:outline-hidden"
            title="Click to open Dinkar's 3D Bitmoji &amp; Digital Identity"
          >
            {/* Real Photo Avatar with Pulse Ring */}
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border-2 border-[#E06A26] shadow-xs group-hover:scale-105 transition-transform bg-[#1C1613]">
              <img
                src="/images/dinkar-profile.jpg"
                alt="Dinkar Kumar"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center font-heading-sans font-bold text-xs text-[#FAF8F5] -z-10 bg-[#1C1613]">
                DK
              </div>
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-white"></div>
            </div>

            <div className="flex flex-col">
              <span className="font-heading-sans font-bold text-sm tracking-tight text-[#1C1613] flex items-center gap-1.5 group-hover:text-[#E06A26] transition-colors">
                <span>Dinkar Kumar</span>
                <span className="hidden sm:inline-block text-[9px] font-code-mono px-1.5 py-0.2 rounded-sm bg-[#F4EFEA] border border-[#E6DFD5] text-[#574B42]">
                  CSE-AI &apos;29
                </span>
              </span>
              <span className="text-[11px] text-[#8A7B70] font-sans flex items-center gap-1">
                <span>AI Engineer</span>
                <span className="text-[#E06A26] font-medium hidden sm:inline">&bull; 3D Pass</span>
              </span>
            </div>
          </button>

          {/* 3D Bitmoji Pill Button */}
          {onOpenProfileModal && (
            <button
              onClick={onOpenProfileModal}
              className="hidden md:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFF3EB] border border-[#FAD8C3] text-[10px] font-heading-sans font-bold text-[#E06A26] hover:bg-[#FFE8D6] transition-colors shadow-2xs"
              title="Open Interactive 3D Avatar Pass"
            >
              <Sparkles className="w-3 h-3 text-[#E06A26]" />
              <span>3D Card</span>
            </button>
          )}
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#F4EFEA]/80 p-1.5 rounded-full border border-[#E6DFD5]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
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

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Resume PDF Button */}
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-heading-sans font-semibold rounded-full bg-[#FFFFFF] border border-[#D6CBC0] text-[#1C1613] hover:border-[#E06A26] hover:text-[#E06A26] transition-colors shadow-2xs"
            title="View & Download Dinkar Kumar's Official Resume PDF"
          >
            <FileText className="w-3.5 h-3.5 text-[#E06A26]" />
            <span>Resume PDF</span>
          </button>

          {/* Contact Button */}
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-heading-sans font-semibold rounded-full bg-[#1C1613] text-[#FAF8F5] hover:bg-[#E06A26] transition-all shadow-xs"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Admin Shield Button */}
          <button
            onClick={onOpenAdmin}
            className="p-2 text-[#8A7B70] hover:text-[#1C1613] hover:bg-[#F4EFEA] rounded-full transition-colors border border-transparent hover:border-[#E6DFD5]"
            title="Administrator Portal (Firebase & Inquiries)"
            aria-label="Admin Portal"
          >
            <Shield className="w-4 h-4" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
          {/* Mobile Profile Card Banner */}
          <div className="mb-4 p-3 rounded-2xl bg-white border border-[#E6DFD5] flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#E06A26] bg-[#1C1613] shrink-0">
                <img
                  src="/images/dinkar-profile.jpg"
                  alt="Dinkar Kumar"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <div>
                <h4 className="font-heading-sans font-bold text-sm text-[#1C1613]">Dinkar Kumar</h4>
                <p className="text-[11px] text-[#E06A26] font-medium">B.Tech CSE-AI &apos;29 &bull; Parul Univ</p>
              </div>
            </div>
            {onOpenProfileModal && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProfileModal();
                }}
                className="py-1.5 px-3 rounded-xl bg-[#FFF3EB] border border-[#FAD8C3] text-[11px] font-heading-sans font-bold text-[#E06A26] flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3 text-[#E06A26]" />
                <span>3D Card</span>
              </button>
            )}
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
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
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white border border-[#D6CBC0] text-xs font-heading-sans font-semibold text-[#1C1613]"
            >
              <FileText className="w-4 h-4 text-[#E06A26]" />
              <span>View & Download Official Resume PDF</span>
            </button>
            <div className="flex items-center justify-between text-xs text-[#8A7B70] pt-2 px-1">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Vadodara, Gujarat (IST)
              </span>
              <a
                href="https://github.com/691Tech"
                target="_blank"
                rel="noreferrer"
                className="text-[#E06A26] font-code-mono font-medium hover:underline"
              >
                github.com/691Tech
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
