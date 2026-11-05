"use client";

import React, { useState } from "react";
import { X, Download, ExternalLink, FileText, Check, Award, GraduationCap, Code } from "lucide-react";
import { PERSONAL_DETAILS } from "@/data/portfolio";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [viewMode, setViewMode] = useState<"preview" | "ocr">("preview");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div
        className="bg-[#FAF8F5] rounded-3xl max-w-4xl w-full border border-[#E6DFD5] shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-white px-6 py-4 border-b border-[#E6DFD5] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#FFF3EB] text-[#E06A26] flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading-sans font-bold text-base text-[#1C1613]">
                Dinkar Kumar &bull; Official Curriculum Vitae
              </h3>
              <p className="text-[11px] text-[#7A6A5E]">
                AI Engineer &bull; Full Stack Developer &bull; Parul University B.Tech CSE (AI)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Dinkar_Kumar_Resume.pdf"
              download="Dinkar_Kumar_Resume.pdf"
              className="btn-primary-warm text-xs py-2 px-3.5 inline-flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 text-[#574B42] hover:text-[#1C1613] hover:bg-[#F4EFEA] rounded-full transition-colors border border-[#E6DFD5]"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex border-b border-[#E6DFD5] bg-[#F7F3EE] px-6 text-xs font-heading-sans font-semibold">
          <button
            onClick={() => setViewMode("preview")}
            className={`py-3 px-4 border-b-2 transition-colors flex items-center gap-2 ${
              viewMode === "preview"
                ? "border-[#E06A26] text-[#E06A26] bg-white rounded-t-lg"
                : "border-transparent text-[#7A6A5E] hover:text-[#1C1613]"
            }`}
          >
            <span>Interactive Clean Document</span>
          </button>
          <button
            onClick={() => setViewMode("ocr")}
            className={`py-3 px-4 border-b-2 transition-colors flex items-center gap-2 ${
              viewMode === "ocr"
                ? "border-[#E06A26] text-[#E06A26] bg-white rounded-t-lg"
                : "border-transparent text-[#7A6A5E] hover:text-[#1C1613]"
            }`}
          >
            <span>PDF Direct Embed</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-white">
          {viewMode === "preview" ? (
            <div className="max-w-2xl mx-auto space-y-6 text-[#1C1613] border border-[#E6DFD5] p-6 sm:p-10 rounded-2xl shadow-xs bg-[#FAF8F5]">
              {/* Resume Header */}
              <div className="text-center pb-6 border-b border-[#E6DFD5]">
                <h2 className="font-heading-sans text-3xl font-extrabold tracking-tight">
                  DINKAR KUMAR
                </h2>
                <div className="font-code-mono text-xs uppercase tracking-widest text-[#E06A26] font-bold mt-1">
                  AI ENGINEER
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-[#574B42] mt-3 pt-3 border-t border-[#F4EFEA]">
                  <span>+91 9204267569</span>
                  <span>&bull;</span>
                  <span>Vadodara, Gujarat, India</span>
                  <span>&bull;</span>
                  <span>dinkarkr691@gmail.com</span>
                </div>
              </div>

              {/* About Me */}
              <div>
                <h4 className="font-heading-sans font-bold text-xs uppercase tracking-wider text-[#8A7B70] mb-2">
                  ABOUT ME
                </h4>
                <p className="text-xs sm:text-sm text-[#574B42] leading-relaxed">
                  B.Tech Computer Science Engineering (Artificial Intelligence) student with an interest in Full Stack 
                  Development, Artificial Intelligence and problem solving. Experienced in building academic and personal 
                  projects using JavaScript, React, Node.js, Express and MongoDB. Currently strengthening Data Structures &amp; 
                  Algorithms and software development skills.
                </p>
              </div>

              {/* Education */}
              <div className="pt-2">
                <h4 className="font-heading-sans font-bold text-xs uppercase tracking-wider text-[#8A7B70] mb-3">
                  EDUCATION
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-start text-xs sm:text-sm">
                    <div>
                      <strong className="block font-heading-sans font-bold text-[#1C1613]">
                        B.Tech – Computer Science Engineering (Artificial Intelligence)
                      </strong>
                      <span className="text-[#574B42]">Parul University, Vadodara</span>
                      <p className="text-xs text-[#7A6A5E] mt-0.5">
                        Currently pursuing B.Tech in CSE with specialization in Artificial Intelligence.
                      </p>
                    </div>
                    <span className="font-code-mono text-xs text-[#8A7B70] shrink-0 font-semibold">
                      2025 – 2029
                    </span>
                  </div>

                  <div className="flex justify-between items-start text-xs sm:text-sm pt-2 border-t border-[#F4EFEA]">
                    <div>
                      <strong className="block font-heading-sans font-bold text-[#1C1613]">
                        Board Exam (CBSE)
                      </strong>
                      <span className="text-[#574B42]">Notre Dame Academy &amp; Awadhooth Academy</span>
                      <div className="flex flex-wrap gap-3 mt-1.5 text-xs">
                        <span className="bg-[#FFF3EB] text-[#E06A26] px-2 py-0.5 rounded font-bold">
                          Class XI: 94%
                        </span>
                        <span className="bg-[#FAF8F5] text-[#574B42] px-2 py-0.5 rounded border border-[#E6DFD5]">
                          Class X: 81%
                        </span>
                        <span className="bg-[#FAF8F5] text-[#574B42] px-2 py-0.5 rounded border border-[#E6DFD5]">
                          Class XII: 70%
                        </span>
                      </div>
                    </div>
                    <span className="font-code-mono text-xs text-[#8A7B70] shrink-0 font-semibold">
                      2022 – 2025
                    </span>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="pt-2">
                <h4 className="font-heading-sans font-bold text-xs uppercase tracking-wider text-[#8A7B70] mb-3">
                  PROJECTS
                </h4>
                <div className="space-y-4">
                  <div className="text-xs sm:text-sm">
                    <div className="flex justify-between items-baseline">
                      <strong className="font-heading-sans font-bold text-[#1C1613]">
                        E-Commerce Web Application
                      </strong>
                      <span className="font-code-mono text-xs text-[#8A7B70]">2026 – NOW</span>
                    </div>
                    <div className="text-[11px] font-code-mono text-[#E06A26] mb-1">
                      React.js &bull; Node.js &bull; Express.js &bull; MongoDB
                    </div>
                    <p className="text-xs text-[#574B42] leading-relaxed">
                      Developed a full-stack e-commerce platform with user authentication, product browsing, 
                      cart management, order processing and REST APIs.
                    </p>
                  </div>

                  <div className="text-xs sm:text-sm pt-2 border-t border-[#F4EFEA]">
                    <div className="flex justify-between items-baseline">
                      <strong className="font-heading-sans font-bold text-[#1C1613]">
                        Real-Time Chat Application
                      </strong>
                      <span className="font-code-mono text-xs text-[#8A7B70]">2025 – 2026</span>
                    </div>
                    <div className="text-[11px] font-code-mono text-[#E06A26] mb-1">
                      React.js &bull; Node.js &bull; Socket.io &bull; MongoDB
                    </div>
                    <p className="text-xs text-[#574B42] leading-relaxed">
                      Developed a real-time messaging application with user authentication, instant messaging, 
                      online status and persistent chat history.
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="pt-2">
                <h4 className="font-heading-sans font-bold text-xs uppercase tracking-wider text-[#8A7B70] mb-2">
                  SKILLS
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="p-2 rounded bg-white border border-[#E6DFD5] text-center font-medium">Java</div>
                  <div className="p-2 rounded bg-white border border-[#E6DFD5] text-center font-medium">JavaScript</div>
                  <div className="p-2 rounded bg-white border border-[#E6DFD5] text-center font-medium">React.js</div>
                  <div className="p-2 rounded bg-white border border-[#E6DFD5] text-center font-medium">Node.js</div>
                  <div className="p-2 rounded bg-white border border-[#E6DFD5] text-center font-medium">Express.js</div>
                  <div className="p-2 rounded bg-white border border-[#E6DFD5] text-center font-medium">MongoDB</div>
                  <div className="p-2 rounded bg-white border border-[#E6DFD5] text-center font-medium">DSA</div>
                  <div className="p-2 rounded bg-white border border-[#E6DFD5] text-center font-medium">Git &amp; GitHub</div>
                </div>
              </div>

              {/* References Strip */}
              <div className="pt-4 border-t border-[#E6DFD5] text-[11px] text-[#7A6A5E] flex flex-wrap justify-between gap-2">
                <div>
                  <strong>Dinkar Kumar</strong> &bull; AI Engineer
                </div>
                <div>
                  Frontend | Backend | Database | Deploy
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-[#E6DFD5] bg-[#FAF8F5]">
              <iframe
                src="/Dinkar_Kumar_Resume.pdf#view=FitH"
                className="w-full h-full border-none"
                title="Dinkar Kumar Resume PDF"
              ></iframe>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#FAF8F5] px-6 py-3.5 border-t border-[#E6DFD5] flex items-center justify-between text-xs">
          <span className="text-[#8A7B70] font-code-mono text-[11px]">
            File: Dinkar_Kumar_Resume.pdf (Verified)
          </span>
          <a
            href="/Dinkar_Kumar_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-heading-sans font-semibold text-[#E06A26] hover:underline flex items-center gap-1"
          >
            <span>Open Raw PDF in New Tab</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
