"use client";

import React from "react";
import { GraduationCap, Award, MapPin, Calendar, CheckCircle2, BookOpen } from "lucide-react";
import { EDUCATION_DATA } from "@/data/portfolio";

export default function EducationTimeline() {
  return (
    <section id="education" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#E6DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="eyebrow-badge text-[#E06A26] mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>ACADEMIC FOUNDATION &amp; MILESTONES</span>
            </div>
            <h2 className="font-heading-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1613] tracking-tight leading-[1.18]">
              Structured learning,{" "}
              <span className="font-display-serif italic font-normal text-[#E06A26]">
                academic excellence,
              </span>{" "}
              and specialized focus.
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-sans text-[#7A6A5E] max-w-sm">
            Formal undergraduate training in Artificial Intelligence at Parul University coupled with a strong secondary track record.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {EDUCATION_DATA.map((item, idx) => (
            <div
              key={idx}
              className="tactile-card rounded-3xl p-6 sm:p-10 bg-white border border-[#E6DFD5] relative overflow-hidden"
            >
              {/* Corner Watermark Number */}
              <div className="absolute top-4 right-6 font-display-serif italic text-6xl text-[#F4EFEA] pointer-events-none -z-0">
                0{idx + 1}
              </div>

              <div className="relative z-10">
                {/* Meta Badge Bar */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#1C1613] text-[#FAF8F5] text-xs font-code-mono font-bold">
                    {item.period}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FFF3EB] text-[#E06A26] border border-[#FAD8C3] text-xs font-heading-sans font-semibold">
                    {item.badge}
                  </span>
                  <span className="text-xs font-heading-sans font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    {item.status}
                  </span>
                </div>

                {/* Degree & Institution */}
                <h3 className="font-heading-sans font-extrabold text-2xl sm:text-3xl text-[#1C1613] mb-1">
                  {item.degree}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-[#7A6A5E] mb-6">
                  <span className="text-[#1C1613] font-semibold">{item.institution}</span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#E06A26]" />
                    {item.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#574B42] leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Scores Grid (if present) */}
                {item.scores && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-[#FAF8F5] border border-[#EFE9E1]">
                    {item.scores.map((score, sIdx) => (
                      <div
                        key={sIdx}
                        className={`p-3 rounded-xl flex items-center justify-between ${
                          score.highlight
                            ? "bg-white border-2 border-[#E06A26] shadow-xs"
                            : "bg-white border border-[#E6DFD5]"
                        }`}
                      >
                        <span className="text-xs font-heading-sans font-medium text-[#574B42]">
                          {score.label}
                        </span>
                        <span
                          className={`font-heading-sans font-extrabold text-base ${
                            score.highlight ? "text-[#E06A26]" : "text-[#1C1613]"
                          }`}
                        >
                          {score.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Highlights List */}
                <div className="space-y-2.5 pt-4 border-t border-[#F4EFEA]">
                  <span className="text-xs font-code-mono text-[#8A7B70] uppercase tracking-wider block">
                    Curriculum Highlights &amp; Accomplishments
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#574B42]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E06A26] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
