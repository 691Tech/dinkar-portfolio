"use client";

import React, { useState, useEffect } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import CodePlayground from "@/components/CodePlayground";
import SkillsSection from "@/components/SkillsSection";
import EducationTimeline from "@/components/EducationTimeline";
import GitHubStats from "@/components/GitHubStats";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import TerminalConsole from "@/components/TerminalConsole";
import Footer from "@/components/Footer";
import AdminPortal from "@/components/AdminPortal";
import ResumeModal from "@/components/ResumeModal";
import CommandPalette from "@/components/CommandPalette";
import ShareModal from "@/components/ShareModal";
import ScrollProgress from "@/components/ScrollProgress";
import MouseSpotlight from "@/components/MouseSpotlight";
import { ToastProvider } from "@/components/Toast";
import { sounds } from "@/lib/sound";

export default function Home() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    setSoundEnabled(sounds.isEnabled());
  }, []);

  const handleToggleSound = () => {
    const updated = sounds.toggle();
    setSoundEnabled(updated);
  };

  const handleOpenContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ToastProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1613] relative selection:bg-[#E06A26] selection:text-white">
        {/* Smooth Mouse Pointer Spotlight */}
        <MouseSpotlight />

        {/* Circular Scroll Progress Ring & Back to Top */}
        <ScrollProgress />

        {/* Top Announcement Bar */}
        <AnnouncementBar onOpenContact={handleOpenContact} />

        {/* Sticky Header Navigation with Live IST Vadodara Clock */}
        <Navbar
          onOpenAdmin={() => setIsAdminOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={handleOpenContact}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
          onOpenShareModal={() => setIsShareModalOpen(true)}
          soundEnabled={soundEnabled}
          onToggleSound={handleToggleSound}
        />

        {/* Main Page Flow */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenContact={handleOpenContact}
          />

          {/* About Dinkar Kumar */}
          <AboutSection />

          {/* Featured Projects with Interactive Simulator & Fixed SVGs */}
          <FeaturedProjects />

          {/* NEW FEATURE 1: Interactive Live Code Playground & Snippet Runner */}
          <CodePlayground />

          {/* Technical Capabilities & Benchmarks Matrix */}
          <SkillsSection />

          {/* Education & Academic Credentials */}
          <EducationTimeline />

          {/* GitHub Activity & Open Source Presence */}
          <GitHubStats />

          {/* NEW FEATURE 2: Verified Peer & Faculty Recommendations */}
          <TestimonialsSection />

          {/* Working Firebase Contact Experience */}
          <ContactSection />

          {/* Frequently Asked Questions */}
          <FaqSection onOpenContact={handleOpenContact} />

          {/* NEW FEATURE 3: Interactive Developer Terminal / CLI Easter Egg */}
          <TerminalConsole />
        </main>

        {/* Premium Editorial Footer */}
        <Footer
          onOpenAdmin={() => setIsAdminOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Global Modals */}
        <AdminPortal
          isOpen={isAdminOpen}
          onClose={() => setIsAdminOpen(false)}
        />

        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />

        {/* NEW FEATURE 4: Command Palette (Ctrl+K / Cmd+K) */}
        <CommandPalette
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={handleOpenContact}
          onOpenAdmin={() => setIsAdminOpen(true)}
          soundEnabled={soundEnabled}
          onToggleSound={handleToggleSound}
        />

        {/* NEW FEATURE 5: Share Portfolio & QR Code Modal */}
        <ShareModal
          isOpen={isShareModalOpen}
          onClose={() => setIsShareModalOpen(false)}
        />
      </div>
    </ToastProvider>
  );
}
