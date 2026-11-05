"use client";

import React, { useState } from "react";
import { ArrowUpRight, Sparkles, Terminal, CheckCircle2, Play } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { PROJECTS_DATA, Project } from "@/data/portfolio";
import DomainFilter from "./DomainFilter";
import ProjectModal from "./ProjectModal";

export default function FeaturedProjects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const counts: Record<string, number> = {
    all: PROJECTS_DATA.length,
    fullstack: PROJECTS_DATA.filter((p) => p.category === "fullstack").length,
    realtime: PROJECTS_DATA.filter((p) => p.category === "realtime").length,
    dsa_core: PROJECTS_DATA.filter((p) => p.category === "dsa_core").length
  };

  const filteredProjects = selectedCategory === "all"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#E6DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="eyebrow-badge text-[#E06A26] mb-3 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E06A26]"></span>
            <span>FEATURED PROJECTS &amp; CODE CRAFT</span>
          </div>
          <h2 className="font-heading-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1613] tracking-tight leading-[1.18] mb-4">
            Production-grade{" "}
            <span className="font-display-serif italic font-normal text-[#E06A26]">
              applications
            </span>{" "}
            built from the ground up.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#574B42] leading-relaxed">
            Every project showcases deliberate architectural choices: robust full-stack REST APIs, 
            low-latency WebSockets, and strict database modeling.
          </p>
        </div>

        {/* Domain Filter Tabs */}
        <DomainFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          counts={counts}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="tactile-card rounded-3xl p-6 sm:p-8 bg-white border border-[#E6DFD5] flex flex-col justify-between relative group hover:border-[#D6CBC0]"
            >
              <div>
                {/* Top Meta Bar */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-4 border-b border-[#F4EFEA]">
                  <span
                    className="text-xs font-code-mono font-bold px-2.5 py-1 rounded-md"
                    style={{ backgroundColor: project.colorScheme.badgeBg, color: project.colorScheme.badgeText }}
                  >
                    {project.timeline}
                  </span>
                  <span className="text-xs font-code-mono text-[#8A7B70]">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Visual Project Preview Mockup */}
                {project.imageUrl && (
                  <div
                    onClick={() => setActiveModalProject(project)}
                    className="mb-5 rounded-2xl overflow-hidden border border-[#E6DFD5] bg-[#FAF8F5] cursor-pointer group/img relative shadow-2xs hover:shadow-md transition-all"
                    title={`Click to open ${project.title} interactive simulation`}
                  >
                    <div className="relative aspect-16/10 w-full overflow-hidden bg-[#FAF8F5]">
                      <img
                        src={project.imageUrl}
                        alt={`${project.title} Preview`}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-102"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-3.5">
                        <span className="text-white text-[11px] font-heading-sans font-semibold flex items-center gap-1.5 bg-[#1C1613]/90 px-3 py-1 rounded-full backdrop-blur-xs">
                          <Play className="w-3 h-3 fill-current text-[#E06A26]" />
                          Launch Live Simulator
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Project Title & Subtitle */}
                <h3 className="font-heading-sans font-extrabold text-2xl text-[#1C1613] mb-1 group-hover:text-[#E06A26] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-heading-sans font-medium text-[#7A6A5E] mb-4">
                  {project.subtitle} &bull; <span className="text-[#1C1613] font-semibold">{project.role}</span>
                </p>

                {/* Project Description */}
                <p className="text-xs sm:text-sm text-[#574B42] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Metrics / Architecture Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 p-3 rounded-2xl bg-[#FAF8F5] border border-[#EFE9E1]">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="flex flex-col">
                      <span className="text-[10px] font-code-mono text-[#8A7B70] uppercase">{m.label}</span>
                      <span className="font-heading-sans font-bold text-xs text-[#1C1613]">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  {project.architectureHighlights.slice(0, 2).map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[#574B42]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#E6DFD5] text-[11px] font-code-mono text-[#574B42]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Interactive Triggers */}
              <div className="pt-4 border-t border-[#F4EFEA] flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="btn-primary-warm text-xs py-2 px-4 flex-1 justify-center"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Launch Live Simulation &amp; Specs</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 text-[#574B42] hover:text-[#1C1613] hover:bg-[#F4EFEA] rounded-full transition-colors border border-[#E6DFD5]"
                  title="View repository on GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
