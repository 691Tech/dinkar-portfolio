"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { FAQS_DATA } from "@/data/portfolio";

export default function FaqSection({ onOpenContact }: { onOpenContact: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#E6DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="eyebrow-badge text-[#E06A26] mb-3 justify-center">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="font-heading-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1613] tracking-tight leading-[1.18] mb-4">
            Good questions.{" "}
            <span className="font-display-serif italic font-normal text-[#E06A26]">
              Straight answers.
            </span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#574B42] leading-relaxed">
            Everything recruiters, hiring managers, and prospective collaborators commonly ask 
            about my background, skills, and availability.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="tactile-card rounded-2xl bg-white border border-[#E6DFD5] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-hidden"
                >
                  <span className="font-heading-sans font-bold text-sm sm:text-base text-[#1C1613]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#FAF8F5] border border-[#E6DFD5] flex items-center justify-center shrink-0 text-[#574B42] transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#FFF3EB] text-[#E06A26] border-[#FAD8C3]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#574B42] leading-relaxed border-t border-[#F4EFEA] animate-fadeIn">
                    <p className="pt-2">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Unanswered Question Prompt */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#7A6A5E] mb-3">
            Have a question that isn&apos;t covered here?
          </p>
          <button
            onClick={onOpenContact}
            className="btn-secondary-warm text-xs py-2 px-5 inline-flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#E06A26]" />
            <span>Ask Dinkar Directly</span>
          </button>
        </div>

      </div>
    </section>
  );
}
