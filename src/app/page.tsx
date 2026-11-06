"use client";

import React, { useState } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import SkillsSection from "@/components/SkillsSection";
import EducationTimeline from "@/components/EducationTimeline";
import GitHubStats from "@/components/GitHubStats";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import AdminPortal from "@/components/AdminPortal";
import ResumeModal from "@/components/ResumeModal";
import MouseSpotlight from "@/components/MouseSpotlight";

export default function Home() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1613] relative selection:bg-[#E06A26] selection:text-white">
      {/* Smooth Mouse Pointer Spotlight */}
      <MouseSpotlight />

      {/* Top Announcement Bar */}
      <AnnouncementBar onOpenContact={handleOpenContact} />

      {/* Sticky Header Navigation */}
      <Navbar
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={handleOpenContact}
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

        {/* Featured Projects with Interactive Simulator */}
        <FeaturedProjects />

        {/* Technical Capabilities & Stack Matrix */}
        <SkillsSection />

        {/* Education & Academic Credentials */}
        <EducationTimeline />

        {/* GitHub Activity & Open Source Presence */}
        <GitHubStats />

        {/* Working Firebase Contact Experience */}
        <ContactSection />

        {/* Frequently Asked Questions */}
        <FaqSection onOpenContact={handleOpenContact} />
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
    </div>
  );
}
