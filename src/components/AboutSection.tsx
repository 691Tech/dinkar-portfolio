"use client";

import React from "react";
import { User, MapPin, GraduationCap, Sparkles, BookOpen, Heart, ShieldCheck, ArrowUpRight } from "lucide-react";
import { PERSONAL_DETAILS } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#E6DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Inspired by Ref 1 Editorial Rhythm */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="eyebrow-badge text-[#E06A26] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E06A26]"></span>
              <span>ABOUT DINKAR KUMAR</span>
            </div>
            <h2 className="font-heading-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1613] tracking-tight leading-[1.18]">
              Crafting systems with{" "}
              <span className="font-display-serif italic font-normal text-[#E06A26]">
                purpose, clarity,
              </span>{" "}
              and technical rigor.
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end text-xs font-code-mono text-[#8A7B70]">
            <span>LOCATION: VADODARA, GUJARAT</span>
            <span>UNIVERSITY: PARUL UNIVERSITY (CSE-AI)</span>
            <span>BATCH: 2025 – 2029</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Visual Profile Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="tactile-card rounded-3xl p-6 sm:p-8 bg-white border border-[#E6DFD5] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFF3EB] rounded-full blur-2xl -z-10"></div>
              
              {/* Profile Monogram & Badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#1C1613] text-[#FAF8F5] flex items-center justify-center font-heading-sans font-extrabold text-2xl shadow-md border-2 border-[#E6DFD5]">
                  DK
                </div>
                <div>
                  <h3 className="font-heading-sans font-bold text-lg text-[#1C1613]">
                    Dinkar Kumar
                  </h3>
                  <p className="text-xs font-heading-sans font-medium text-[#E06A26]">
                    AI Engineer &amp; Full Stack Developer
                  </p>
                  <p className="text-[11px] text-[#8A7B70] mt-0.5 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#E06A26]" />
                    Vadodara, Gujarat, India
                  </p>
                </div>
              </div>

              {/* Bio summary */}
              <div className="space-y-4 text-xs sm:text-sm text-[#574B42] leading-relaxed border-t border-[#F4EFEA] pt-5">
                <p>
                  I am a <span className="font-semibold text-[#1C1613]">Computer Science Engineering</span> student 
                  specializing in <span className="font-semibold text-[#1C1613]">Artificial Intelligence</span> at 
                  Parul University, Vadodara, Gujarat (2025–2029).
                </p>
                <p>
                  Experienced in building robust academic and personal applications using 
                  <span className="font-semibold text-[#1C1613]"> JavaScript, React, Node.js, Express, MongoDB, and Socket.io</span>. 
                  Currently actively strengthening Data Structures &amp; Algorithms and scalable software engineering practices.
                </p>
              </div>

              {/* Quick Contact & Verified Highlights */}
              <div className="mt-6 pt-5 border-t border-[#F4EFEA] space-y-2 text-xs">
                <div className="flex items-center justify-between py-1">
                  <span className="text-[#8A7B70]">Email:</span>
                  <a href="mailto:dinkarkr691@gmail.com" className="font-medium text-[#1C1613] hover:text-[#E06A26] transition-colors">
                    dinkarkr691@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-[#8A7B70]">Phone:</span>
                  <a href="tel:+919204267569" className="font-medium text-[#1C1613] hover:text-[#E06A26] transition-colors">
                    +91 9204267569
                  </a>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-[#8A7B70]">GitHub:</span>
                  <a href="https://github.com/691Tech" target="_blank" rel="noreferrer" className="font-code-mono font-medium text-[#E06A26] hover:underline flex items-center gap-1">
                    <span>@691Tech</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-[#8A7B70]">Status:</span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Available for Internships
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Core Pillars & Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="tactile-card rounded-3xl p-6 sm:p-8 bg-white border border-[#E6DFD5]">
              <span className="eyebrow-badge text-[#2E7D5B] mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>MY ENGINEERING PHILOSOPHY</span>
              </span>
              
              <h3 className="font-heading-sans font-extrabold text-2xl text-[#1C1613] mb-4">
                Not just writing code — engineering intentional solutions.
              </h3>
              
              <p className="text-sm text-[#574B42] leading-relaxed mb-6">
                I believe high-quality software is born from clear separation of concerns, thoughtful data design, 
                and obsessive attention to the user experience. Whether developing an e-commerce platform with 
                optimistic cart calculations or building a sub-50ms WebSocket chat server, I avoid quick hacks in 
                favor of solid engineering principles.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#F4EFEA]">
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EFE9E1]">
                  <div className="w-8 h-8 rounded-lg bg-[#FFF3EB] text-[#E06A26] flex items-center justify-center mb-3">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading-sans font-bold text-sm text-[#1C1613] mb-1">
                    Architectural Integrity
                  </h4>
                  <p className="text-xs text-[#7A6A5E] leading-relaxed">
                    Clean MVC structure, well-defined REST endpoints, and resilient error handlers.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EFE9E1]">
                  <div className="w-8 h-8 rounded-lg bg-[#EDF6F1] text-[#2E7D5B] flex items-center justify-center mb-3">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading-sans font-bold text-sm text-[#1C1613] mb-1">
                    AI Specialization
                  </h4>
                  <p className="text-xs text-[#7A6A5E] leading-relaxed">
                    Formal training at Parul University in machine intelligence and modern AI tools.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EFE9E1]">
                  <div className="w-8 h-8 rounded-lg bg-[#EEF3FA] text-[#244372] flex items-center justify-center mb-3">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading-sans font-bold text-sm text-[#1C1613] mb-1">
                    Algorithmic Rigor
                  </h4>
                  <p className="text-xs text-[#7A6A5E] leading-relaxed">
                    Deep focus on Java Data Structures &amp; Algorithms with optimal asymptotic bounds.
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Highlights Banner */}
            <div className="p-6 rounded-3xl bg-[#F7F3EE] border border-[#E6DFD5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="font-code-mono text-xs text-[#8A7B70] uppercase tracking-wider block">
                  ACADEMIC FOUNDATION
                </span>
                <span className="font-heading-sans font-bold text-base text-[#1C1613] mt-0.5 block">
                  Parul University CSE (AI) &bull; Notre Dame &amp; Awadhooth Academy
                </span>
                <span className="text-xs text-[#574B42]">
                  Class XI CBSE Board Examination: <strong className="text-[#E06A26]">94% Score</strong>
                </span>
              </div>
              <a
                href="#education"
                className="btn-secondary-warm text-xs py-2 px-4 shrink-0"
              >
                <span>View Full Education</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
