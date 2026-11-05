"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Mail, Phone, FileText, Shield, MapPin, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_DETAILS } from "@/data/portfolio";

interface FooterProps {
  onOpenAdmin: () => void;
  onOpenResume: () => void;
}

export default function Footer({ onOpenAdmin, onOpenResume }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FAF8F5] text-[#1C1613] border-t border-[#E6DFD5] pt-16 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#E6DFD5]">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1C1613] text-[#FAF8F5] flex items-center justify-center font-heading-sans font-bold text-sm">
                DK
              </div>
              <span className="font-heading-sans font-extrabold text-xl tracking-tight text-[#1C1613]">
                Dinkar Kumar
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#574B42] leading-relaxed max-w-sm">
              Computer Science Engineering student specializing in Artificial Intelligence at Parul University (2025–2029). 
              Passionate about full-stack web applications, real-time networking, and thoughtful digital engineering.
            </p>

            <div className="pt-2">
              <span className="eyebrow-badge text-[#8A7B70]">
                <MapPin className="w-3.5 h-3.5 text-[#E06A26]" />
                <span>VADODARA, GUJARAT, INDIA</span>
              </span>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-heading-sans font-bold text-xs uppercase tracking-wider text-[#8A7B70] block">
              NAVIGATE &amp; EXPLORE
            </span>
            <ul className="space-y-2 text-xs font-heading-sans font-medium text-[#574B42]">
              <li>
                <a href="#about" className="hover:text-[#E06A26] transition-colors">
                  About Dinkar
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#E06A26] transition-colors">
                  Featured Projects (4)
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#E06A26] transition-colors">
                  Technical Skills &amp; Stack
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-[#E06A26] transition-colors">
                  Education &amp; Board Results
                </a>
              </li>
              <li>
                <a href="#github" className="hover:text-[#E06A26] transition-colors">
                  GitHub Repositories (@691Tech)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#E06A26] transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Documents (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-heading-sans font-bold text-xs uppercase tracking-wider text-[#8A7B70] block">
              CONNECT &amp; CREDENTIALS
            </span>
            <ul className="space-y-2.5 text-xs font-heading-sans font-medium">
              <li>
                <a
                  href={`mailto:${PERSONAL_DETAILS.email}`}
                  className="text-[#574B42] hover:text-[#E06A26] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-[#E06A26]" />
                  <span>{PERSONAL_DETAILS.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PERSONAL_DETAILS.phone}`}
                  className="text-[#574B42] hover:text-[#2E7D5B] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#2E7D5B]" />
                  <span>{PERSONAL_DETAILS.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_DETAILS.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#574B42] hover:text-[#1C1613] transition-colors flex items-center gap-2"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>github.com/691Tech</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_DETAILS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#574B42] hover:text-[#244372] transition-colors flex items-center gap-2"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#244372]" />
                  <span>linkedin.com/in/dinkarkumar0809</span>
                </a>
              </li>
              <li className="pt-2 flex items-center gap-3">
                <button
                  onClick={onOpenResume}
                  className="btn-secondary-warm text-xs py-1.5 px-3.5"
                >
                  <FileText className="w-3.5 h-3.5 text-[#E06A26]" />
                  <span>Resume PDF</span>
                </button>
                <button
                  onClick={onOpenAdmin}
                  className="text-xs text-[#8A7B70] hover:text-[#1C1613] p-1.5 rounded-lg border border-[#E6DFD5] bg-white transition-colors flex items-center gap-1"
                  title="Administrator Portal"
                >
                  <Shield className="w-3.5 h-3.5" />
                  <span>Admin</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Massive Editorial Display Signature (Reference 1 Signature Style) */}
        <div className="py-12 select-none overflow-hidden text-center opacity-85 hover:opacity-100 transition-opacity">
          <span className="font-display-serif italic text-6xl sm:text-8xl md:text-9xl text-[#ECE4D8] block tracking-tighter leading-none hover:text-[#E06A26]/20 transition-colors">
            dinkar kumar.
          </span>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-[#E6DFD5] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A7B70] gap-4">
          <div className="flex items-center gap-2">
            <span>&copy; 2026 Dinkar Kumar.</span>
            <span>&bull;</span>
            <span className="hidden sm:inline">Parul University CSE (AI) 2025–2029</span>
          </div>

          <div className="font-code-mono text-[11px] tracking-wider uppercase text-[#7A6A5E] hidden md:block">
            BUILT WITH REACT, NEXT.JS &bull; FIREBASE SYNCHRONIZED
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-heading-sans font-semibold text-[#1C1613] hover:text-[#E06A26] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
