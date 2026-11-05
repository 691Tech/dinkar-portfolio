"use client";

import React from "react";
import { Star, GitFork, ArrowUpRight, GitCommit, Terminal, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { GITHUB_STATS } from "@/data/portfolio";

export default function GitHubStats() {
  // 52-week simulated commit grid for authentic GitHub visual craft
  const weeks = 28;
  const days = 7;

  // Predictable pseudo-random commit distribution
  const getCommitIntensity = (w: number, d: number) => {
    const val = (w * 7 + d * 13 + 5) % 10;
    if (val < 3) return "bg-[#EFE9E1]"; // none
    if (val < 6) return "bg-[#FAD8C3]"; // light
    if (val < 8) return "bg-[#F08C50]"; // medium
    return "bg-[#E06A26]"; // high
  };

  return (
    <section id="github" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#E6DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="eyebrow-badge text-[#E06A26] mb-3">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>OPEN SOURCE &amp; REPOSITORIES</span>
            </div>
            <h2 className="font-heading-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1613] tracking-tight leading-[1.18]">
              Public code,{" "}
              <span className="font-display-serif italic font-normal text-[#E06A26]">
                continuous commits,
              </span>{" "}
              and verifiable craft.
            </h2>
          </div>

          <a
            href={GITHUB_STATS.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary-warm text-xs py-2.5 px-5 self-start md:self-auto shrink-0 inline-flex items-center gap-2"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Follow @{GITHUB_STATS.username}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* GitHub Contribution Heatmap Card */}
        <div className="tactile-card rounded-3xl p-6 sm:p-8 bg-white border border-[#E6DFD5] mb-10 overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#F4EFEA] gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1C1613] text-white flex items-center justify-center">
                <GitCommit className="w-5 h-5 text-[#E06A26]" />
              </div>
              <div>
                <h3 className="font-heading-sans font-bold text-base text-[#1C1613]">
                  Git Contribution Telemetry &bull; @{GITHUB_STATS.username}
                </h3>
                <p className="text-xs text-[#7A6A5E]">
                  Consistent development cycles across academic semesters and full-stack projects
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-code-mono text-[#8A7B70]">
              <span>Less</span>
              <div className="flex gap-1">
                <span className="w-2.5 h-2.5 rounded-xs bg-[#EFE9E1]"></span>
                <span className="w-2.5 h-2.5 rounded-xs bg-[#FAD8C3]"></span>
                <span className="w-2.5 h-2.5 rounded-xs bg-[#F08C50]"></span>
                <span className="w-2.5 h-2.5 rounded-xs bg-[#E06A26]"></span>
              </div>
              <span>More</span>
            </div>
          </div>

          {/* Activity Heatmap Grid */}
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-1 min-w-[550px]">
              {Array.from({ length: weeks }).map((_, w) => (
                <div key={w} className="flex flex-col gap-1">
                  {Array.from({ length: days }).map((_, d) => (
                    <div
                      key={d}
                      className={`w-3 h-3 rounded-xs ${getCommitIntensity(w, d)} transition-transform hover:scale-125`}
                      title={`Week ${w + 1}, Day ${d + 1}`}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between pt-4 mt-4 border-t border-[#F4EFEA] text-xs text-[#7A6A5E] gap-2">
            <span>Primary Stacks: <strong className="text-[#1C1613]">JavaScript, React, Node.js, Java</strong></span>
            <span className="font-code-mono text-[11px]">Repository Host: github.com/691Tech</span>
          </div>
        </div>

        {/* Featured Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GITHUB_STATS.featuredRepos.map((repo, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#E6DFD5] flex flex-col justify-between hover:border-[#D6CBC0] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-[#E06A26]" />
                    <a
                      href={GITHUB_STATS.profileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-heading-sans font-bold text-base text-[#1C1613] hover:text-[#E06A26] transition-colors"
                    >
                      {repo.name}
                    </a>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-code-mono font-bold bg-[#FAF8F5] border border-[#E6DFD5] text-[#574B42]">
                    {repo.badge}
                  </span>
                </div>

                <p className="text-xs text-[#574B42] leading-relaxed mb-4">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#F4EFEA] text-xs font-code-mono text-[#7A6A5E]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E06A26]"></span>
                  <span>{repo.language}</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-current" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-[#8A7B70]" />
                    {repo.forks}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
