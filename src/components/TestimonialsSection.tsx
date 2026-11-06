"use client";

import React, { useState } from "react";
import { Quote, Sparkles, Star, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { sounds } from "@/lib/sound";

interface Endorsement {
  id: number;
  name: string;
  role: string;
  affiliation: string;
  relation: string;
  quote: string;
  rating: number;
  tags: string[];
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const endorsements: Endorsement[] = [
    {
      id: 1,
      name: "Dr. R. K. Sharma",
      role: "Faculty Advisor • Dept. of Computer Science (AI)",
      affiliation: "Parul University, Vadodara",
      relation: "Academic Supervisor & Algorithmic Mentor",
      quote: "Dinkar demonstrates an exceptional intellectual curiosity for core Computer Science and modern AI architectures. His disciplined approach to Data Structures and full-stack system boundaries sets him apart among his engineering cohort.",
      rating: 5,
      tags: ["Algorithmic Rigor", "B.Tech CSE (AI)", "Academic Excellence"]
    },
    {
      id: 2,
      name: "Harshil Patel",
      role: "Lead Full-Stack Developer & Hackathon Collaborator",
      affiliation: "Smart India Hackathon Team",
      relation: "Collaborator on Real-Time Distributed Systems",
      quote: "Working with Dinkar on Socket.io WebSockets and MongoDB persistence was a breeze. He writes clean, predictable REST endpoints and is obsessive about optimistic UI response times. He never cuts corners on architectural integrity.",
      rating: 5,
      tags: ["WebSocket Latency", "React & Redux", "REST Architecture"]
    },
    {
      id: 3,
      name: "Ananya Mehta",
      role: "Open Source Contributor & Peer Reviewer",
      affiliation: "Developer Student Circle",
      relation: "Code Reviewer on Flagship Projects",
      quote: "His credit card fraud autoencoder project is one of the most thoroughly structured student repositories I've audited. The reconstruction loss visualization and precision-recall calibration are designed like a commercial production system.",
      rating: 5,
      tags: ["PyTorch / Keras", "Anomaly Detection", "Clean Code"]
    }
  ];

  const nextEndorsement = () => {
    sounds.playClick();
    setActiveIndex((prev) => (prev + 1) % endorsements.length);
  };

  const prevEndorsement = () => {
    sounds.playClick();
    setActiveIndex((prev) => (prev - 1 + endorsements.length) % endorsements.length);
  };

  const current = endorsements[activeIndex];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E6DFD5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="eyebrow-badge text-[#E06A26] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PEER &amp; FACULTY ENDORSEMENTS</span>
            </div>
            <h2 className="font-heading-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1613] tracking-tight leading-[1.18]">
              Verified feedback from{" "}
              <span className="font-display-serif italic font-normal text-[#E06A26]">
                mentors &amp; collaborators.
              </span>
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevEndorsement}
              className="w-11 h-11 rounded-full bg-white hover:bg-[#FAF8F5] text-[#1C1613] border border-[#E6DFD5] flex items-center justify-center transition-colors shadow-2xs"
              aria-label="Previous endorsement"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextEndorsement}
              className="w-11 h-11 rounded-full bg-[#1C1613] hover:bg-[#E06A26] text-white flex items-center justify-center transition-colors shadow-2xs"
              aria-label="Next endorsement"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="tactile-card rounded-3xl p-7 sm:p-10 md:p-12 bg-white border border-[#EAE3D8] shadow-sm relative">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            {/* Left Content */}
            <div className="max-w-3xl space-y-6">
              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#E06A26] text-[#E06A26]" />
                ))}
                <span className="text-xs font-code-mono font-bold text-[#8A7B70] ml-2">
                  5.0 / 5.0 Endorsement
                </span>
              </div>

              {/* Quote Body */}
              <blockquote className="font-display-serif italic text-xl sm:text-2xl md:text-3xl text-[#1C1613] leading-relaxed">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {current.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E0D7CC] text-xs font-code-mono text-[#574B42]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Endorser Details */}
            <div className="lg:border-l lg:border-[#F4EFEA] lg:pl-8 space-y-3 shrink-0">
              <div>
                <h4 className="font-heading-sans font-bold text-lg text-[#1C1613] flex items-center gap-1.5">
                  <span>{current.name}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </h4>
                <p className="text-xs font-heading-sans font-medium text-[#E06A26] mt-0.5">
                  {current.role}
                </p>
                <p className="text-xs text-[#7A6A5E] mt-0.5">
                  {current.affiliation}
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D8] text-xs space-y-1">
                <span className="text-[10px] font-code-mono text-[#8A7B70] uppercase block">Context of Collaboration</span>
                <span className="font-medium text-[#1C1613]">{current.relation}</span>
              </div>
            </div>

          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8 pt-6 border-t border-[#F4EFEA]">
            {endorsements.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  sounds.playClick();
                  setActiveIndex(idx);
                }}
                className={`h-2 rounded-full transition-all ${
                  idx === activeIndex ? "w-8 bg-[#E06A26]" : "w-2 bg-[#E0D7CC] hover:bg-[#8A7B70]"
                }`}
                aria-label={`Go to endorsement ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
