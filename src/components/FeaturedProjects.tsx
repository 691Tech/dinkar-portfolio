"use client";

import React, { useState, useMemo } from "react";
import { ArrowUpRight, CheckCircle2, Play, Search, Code2, Sparkles, Filter, ExternalLink, ChevronRight } from "lucide-react";
import { PROJECTS_DATA, CATALOG_PROJECTS, Project, CatalogProject } from "@/data/portfolio";
import { GithubIcon } from "@/components/Icons";
import DomainFilter from "./DomainFilter";
import ProjectModal from "./ProjectModal";

export default function FeaturedProjects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [catalogCategory, setCatalogCategory] = useState<string>("All");

  const counts: Record<string, number> = useMemo(() => ({
    all: PROJECTS_DATA.length,
    fullstack: PROJECTS_DATA.filter((p) => p.category === "fullstack").length,
    realtime: PROJECTS_DATA.filter((p) => p.category === "realtime").length,
    ai_ml: PROJECTS_DATA.filter((p) => p.category === "ai_ml").length,
    java_core: PROJECTS_DATA.filter((p) => p.category === "java_core").length,
    dsa_cpp: PROJECTS_DATA.filter((p) => p.category === "dsa_cpp").length,
  }), []);

  const filteredFeatured = useMemo(() => {
    return PROJECTS_DATA.filter((p) => {
      const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const filteredCatalog = useMemo(() => {
    return CATALOG_PROJECTS.filter((p) => {
      const matchesCat = catalogCategory === "All" || p.category === catalogCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [catalogCategory, searchQuery]);

  const catalogCategories = ["All", "Full Stack", "React", "Data Science", "Machine Learning", "JAVA", "C++"];

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-28 bg-[#FAF8F5] border-b border-[#E6DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="eyebrow-badge text-[#E06A26] mb-3 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E06A26]"></span>
            <span>FEATURED PROJECTS &amp; CODE CRAFT</span>
          </div>
          <h2 className="font-heading-sans text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#1C1613] tracking-tight leading-[1.18] mb-3 sm:mb-4">
            Production-grade{" "}
            <span className="font-display-serif italic font-normal text-[#E06A26]">
              applications
            </span>{" "}
            built from the ground up.
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-[#574B42] leading-relaxed">
            Every project showcases deliberate architectural choices: robust full-stack REST APIs, 
            low-latency WebSockets, machine learning autoencoders, and optimized data structures.
          </p>
        </div>

        {/* Live Search & Filter Bar */}
        <div className="max-w-md mx-auto mb-6 px-1">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-[#8A7B70] absolute left-3.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech or keyword (e.g. React, Python, Java, Socket, AI)..."
              className="w-full pl-9 pr-8 py-2.5 text-xs bg-white border border-[#E6DFD5] rounded-full focus:outline-hidden focus:border-[#E06A26] shadow-2xs transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 text-xs text-[#8A7B70] hover:text-[#1C1613]"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Domain Filter Tabs */}
        <DomainFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          counts={counts}
        />

        {/* Flagship Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch mb-16 sm:mb-24">
          {filteredFeatured.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="tactile-card rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 bg-white border border-[#E6DFD5] flex flex-col justify-between relative group hover:border-[#D6CBC0] cursor-pointer"
            >
              <div>
                {/* Top Meta Bar */}
                <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-[#F4EFEA]">
                  <span
                    className="text-[10px] sm:text-xs font-code-mono font-bold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: project.colorScheme.badgeBg, color: project.colorScheme.badgeText }}
                  >
                    {project.timeline}
                  </span>
                  <span className="text-[10px] sm:text-xs font-code-mono text-[#8A7B70] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Visual Project Preview Mockup */}
                {project.imageUrl && (
                  <div
                    className="mb-4 sm:mb-5 rounded-xl sm:rounded-2xl overflow-hidden border border-[#EAE3D8] bg-[#FAF8F5] group/img relative shadow-2xs transition-all"
                    title={`Click to open ${project.title} interactive simulation`}
                  >
                    <div className="relative aspect-16/10 w-full overflow-hidden bg-[#FAF8F5]">
                      <img
                        src={project.imageUrl}
                        alt={`${project.title} Preview`}
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-end p-3 sm:p-4">
                        <span className="text-white text-[10px] sm:text-[11px] font-heading-sans font-semibold flex items-center gap-1.5 bg-[#1C1613]/90 px-3 py-1 rounded-full backdrop-blur-xs">
                          <Play className="w-3 h-3 fill-current text-[#E06A26]" />
                          Launch Live Simulator &amp; Specs
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Project Title & Subtitle */}
                <h3 className="font-heading-sans font-extrabold text-xl sm:text-2xl text-[#1C1613] mb-1 group-hover:text-[#E06A26] transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-[11px] sm:text-xs font-heading-sans font-medium text-[#7A6A5E] mb-3 sm:mb-4">
                  {project.subtitle} &bull; <span className="text-[#1C1613] font-semibold">{project.role}</span>
                </p>

                {/* Project Description */}
                <p className="text-xs sm:text-sm text-[#574B42] leading-relaxed mb-4 sm:mb-5">
                  {project.description}
                </p>

                {/* Metrics / Architecture Strip - Clean & Non-boxy */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 py-2.5 border-y border-[#F4EFEA] mb-4">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-1.5 text-xs">
                      <span className="text-[10px] font-code-mono text-[#8A7B70] uppercase">{m.label}:</span>
                      <span className="font-heading-sans font-bold text-[#1C1613]">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Highlights List */}
                <div className="space-y-1.5 mb-4 sm:mb-6">
                  {project.architectureHighlights.slice(0, 2).map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[#574B42]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-5 sm:mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-full bg-[#FAF8F5] border border-[#E6DFD5] text-[10px] sm:text-[11px] font-code-mono text-[#574B42]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Interactive Triggers */}
              <div className="pt-3 sm:pt-4 border-t border-[#F4EFEA] flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveModalProject(project);
                  }}
                  className="btn-primary-warm text-xs py-2 px-3.5 sm:px-4 flex-1 justify-center"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Launch Live Simulator &amp; Specs</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 sm:p-2.5 text-[#574B42] hover:text-[#1C1613] hover:bg-[#F4EFEA] rounded-full transition-colors border border-[#E6DFD5] shrink-0"
                  title="View repository on GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Curated Open-Source Systems Catalog Section */}
        <div className="border-t border-[#E6DFD5] pt-12 sm:pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="eyebrow-badge text-[#244372] mb-2">
                <Code2 className="w-3.5 h-3.5" />
                <span>EXTENDED OPEN-SOURCE CATALOG &bull; PRODUCTION CODEBASES</span>
              </div>
              <h3 className="font-heading-sans font-extrabold text-xl sm:text-2xl md:text-3xl text-[#1C1613]">
                Full repository catalog &amp; system implementations
              </h3>
            </div>
            <span className="text-xs font-code-mono text-[#8A7B70]">
              Showing {filteredCatalog.length} Repositories
            </span>
          </div>

          {/* Catalog Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-3 mb-6">
            {catalogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCatalogCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-heading-sans font-semibold shrink-0 transition-colors ${
                  catalogCategory === cat
                    ? "bg-[#1C1613] text-[#FAF8F5]"
                    : "bg-white text-[#574B42] border border-[#E6DFD5] hover:bg-[#F4EFEA]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Catalog Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredCatalog.map((item, idx) => (
              <div
                key={idx}
                className="tactile-card rounded-2xl p-5 bg-white border border-[#E6DFD5] flex flex-col justify-between hover:border-[#D6CBC0] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-code-mono font-bold px-2 py-0.5 rounded-full bg-[#FAF8F5] border border-[#E6DFD5] text-[#E06A26]">
                      {item.category}
                    </span>
                    {item.highlight && (
                      <span className="text-[9px] font-code-mono font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                        Featured
                      </span>
                    )}
                  </div>

                  <h4 className="font-heading-sans font-bold text-sm sm:text-base text-[#1C1613] mb-2 leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-xs text-[#574B42] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.technologies.map((t) => (
                      <span key={t} className="text-[10px] font-code-mono px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#EFE9E1] text-[#7A6A5E]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F4EFEA] flex items-center justify-between">
                  <a
                    href={item.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-heading-sans font-semibold text-[#E06A26] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <span className="text-[10px] font-code-mono text-[#8A7B70]">
                    Verified Open Source
                  </span>
                </div>
              </div>
            ))}
          </div>
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
