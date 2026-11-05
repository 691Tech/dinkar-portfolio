"use client";

import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Copy, Check, Sparkles, AlertCircle } from "lucide-react";
import { submitContactMessage } from "@/lib/firebase";
import { PERSONAL_DETAILS } from "@/data/portfolio";
import confetti from "canvas-confetti";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Summer Internship / Job Opportunity",
    projectInterest: "Full Stack Development",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true
        }).format(new Date());
        setLocalTime(timeStr);
      } catch {
        setLocalTime(new Date().toLocaleTimeString());
      }
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in your name, email, and message.");
      return;
    }

    setLoading(true);

    try {
      const res = await submitContactMessage(formData);
      if (res.success) {
        setSubmitted(true);
        try {
          confetti({
            particleCount: 65,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch {}
      } else {
        setErrorMessage("Could not submit message. Please try sending directly to dinkarkr691@gmail.com.");
      }
    } catch (err: any) {
      console.error("Submission error:", err);
      setErrorMessage("An unexpected error occurred. Please reach out via email directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#E6DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="eyebrow-badge text-[#E06A26] mb-3 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E06A26]"></span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="font-heading-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1613] tracking-tight leading-[1.18] mb-4">
            Let&apos;s start a{" "}
            <span className="font-display-serif italic font-normal text-[#E06A26]">
              conversation.
            </span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#574B42] leading-relaxed">
            Whether you have an internship role, an ambitious project, or simply want to connect, 
            my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Direct Channels & Telemetry (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Channel Card */}
            <div className="tactile-card rounded-2xl p-5 bg-white border border-[#E6DFD5] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFF3EB] text-[#E06A26] flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-code-mono uppercase text-[#8A7B70] block">Direct Email</span>
                  <a href={`mailto:${PERSONAL_DETAILS.email}`} className="font-heading-sans font-bold text-sm text-[#1C1613] hover:text-[#E06A26] transition-colors">
                    {PERSONAL_DETAILS.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(PERSONAL_DETAILS.email, "email")}
                className="p-2 rounded-lg bg-[#FAF8F5] hover:bg-[#F4EFEA] border border-[#E6DFD5] text-[#574B42] transition-colors"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Channel Card */}
            <div className="tactile-card rounded-2xl p-5 bg-white border border-[#E6DFD5] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EDF6F1] text-[#2E7D5B] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-code-mono uppercase text-[#8A7B70] block">Phone / WhatsApp</span>
                  <a href={`tel:${PERSONAL_DETAILS.phone}`} className="font-heading-sans font-bold text-sm text-[#1C1613] hover:text-[#2E7D5B] transition-colors">
                    {PERSONAL_DETAILS.phoneFormatted}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(PERSONAL_DETAILS.phone, "phone")}
                className="p-2 rounded-lg bg-[#FAF8F5] hover:bg-[#F4EFEA] border border-[#E6DFD5] text-[#574B42] transition-colors"
                title="Copy phone number to clipboard"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location & Timezone Card */}
            <div className="tactile-card rounded-2xl p-5 bg-white border border-[#E6DFD5] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#E06A26]" />
                  <span className="font-heading-sans font-bold text-sm text-[#1C1613]">
                    {PERSONAL_DETAILS.location}
                  </span>
                </div>
                <span className="text-[11px] font-code-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold">
                  IST (UTC+5:30)
                </span>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#F4EFEA] text-xs text-[#7A6A5E]">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#8A7B70]" />
                  <span>Current Local Time:</span>
                </span>
                <span className="font-code-mono font-bold text-[#1C1613]">{localTime || "19:24:37 IST"}</span>
              </div>
            </div>

            {/* Response Promise Card */}
            <div className="p-4 rounded-2xl bg-[#F7F3EE] border border-[#E6DFD5] text-xs text-[#574B42] leading-relaxed">
              <strong className="font-heading-sans font-bold text-[#1C1613] block mb-1">
                Guaranteed Response Time:
              </strong>
              I check messages multiple times daily. You will typically receive a thoughtful reply within 12 to 24 hours.
            </div>

          </div>

          {/* Right Column: Live Full-Stack Firebase Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="tactile-card rounded-3xl p-6 sm:p-8 bg-white border border-[#E6DFD5]">
              
              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading-sans font-extrabold text-2xl text-[#1C1613]">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#574B42] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#1C1613]">{formData.name}</strong>. Your inquiry has been 
                    logged into my Firebase inbox. I look forward to connecting with you.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        subject: "Summer Internship / Job Opportunity",
                        projectInterest: "Full Stack Development",
                        message: ""
                      });
                    }}
                    className="btn-primary-warm text-xs py-2.5 px-6 mx-auto mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F4EFEA]">
                    <span className="text-xs font-heading-sans font-bold text-[#1C1613] flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#E06A26]" />
                      <span>Send a Direct Message</span>
                    </span>
                    <span className="text-[11px] font-code-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      Firebase Realtime DB Synced
                    </span>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading-sans font-bold text-[#1C1613] mb-1.5">
                        Your Full Name <span className="text-[#E06A26]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jane Doe"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#E6DFD5] rounded-xl focus:outline-hidden focus:border-[#E06A26] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-heading-sans font-bold text-[#1C1613] mb-1.5">
                        Email Address <span className="text-[#E06A26]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#E6DFD5] rounded-xl focus:outline-hidden focus:border-[#E06A26] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading-sans font-bold text-[#1C1613] mb-1.5">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#E6DFD5] rounded-xl focus:outline-hidden focus:border-[#E06A26] focus:bg-white transition-colors"
                      >
                        <option>Summer Internship / Apprenticeship</option>
                        <option>Full-Time or Part-Time Role</option>
                        <option>Freelance / Contract Project</option>
                        <option>Academic or Open-Source Collaboration</option>
                        <option>General Inquiries &amp; Say Hello</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-heading-sans font-bold text-[#1C1613] mb-1.5">
                        Focus Area
                      </label>
                      <select
                        value={formData.projectInterest}
                        onChange={(e) => setFormData({ ...formData, projectInterest: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#E6DFD5] rounded-xl focus:outline-hidden focus:border-[#E06A26] focus:bg-white transition-colors"
                      >
                        <option>Full Stack Development (React + Node)</option>
                        <option>Artificial Intelligence &amp; ML</option>
                        <option>Real-Time Systems (WebSockets)</option>
                        <option>Core Java &amp; DSA Algorithms</option>
                        <option>Other / Advisory</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-heading-sans font-bold text-[#1C1613] mb-1.5">
                      Your Message <span className="text-[#E06A26]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about the role, project, or opportunity..."
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-[#E6DFD5] rounded-xl focus:outline-hidden focus:border-[#E06A26] focus:bg-white transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary-warm text-xs py-3 justify-center disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Transmitting to Firebase...</span>
                    ) : (
                      <>
                        <span>Submit Message to Firebase Inbox</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <div className="text-center pt-2">
                    <span className="text-[11px] text-[#8A7B70]">
                      Encrypted transmission &bull; Dual-layer Firebase and client backup
                    </span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
