"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Search, FileText, ArrowRight, Code, User, Briefcase, Mail, 
  Sparkles, ExternalLink, Volume2, VolumeX, Shield, Terminal, X, CornerDownLeft
} from "lucide-react";
import { sounds } from "@/lib/sound";
import { useToast } from "@/components/Toast";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
  onOpenAdmin: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onOpenResume,
  onOpenContact,
  onOpenAdmin,
  soundEnabled,
  onToggleSound,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { showToast } = useToast();

  const commands = [
    {
      id: "projects",
      category: "Navigation",
      title: "Explore Flagship Projects",
      subtitle: "Full-Stack, Real-Time WebSockets, AI Fraud Detection & DSA",
      icon: Briefcase,
      action: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      }
    },
    {
      id: "resume",
      category: "Document",
      title: "View Official Resume (PDF)",
      subtitle: "Curriculum Vitae & Verified Academic Transcript",
      icon: FileText,
      action: () => {
        onClose();
        onOpenResume();
      }
    },
    {
      id: "skills",
      category: "Navigation",
      title: "Inspect Technical Capabilities",
      subtitle: "React.js, Node.js, Express, MongoDB, Java DSA, Python",
      icon: Code,
      action: () => {
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      }
    },
    {
      id: "about",
      category: "Navigation",
      title: "About Dinkar Kumar",
      subtitle: "Parul University B.Tech CSE (AI) • Class XI 94% CBSE",
      icon: User,
      action: () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      }
    },
    {
      id: "contact",
      category: "Action",
      title: "Send Direct Inquiry via Firebase",
      subtitle: "Real-time inbox sync with instant email response guarantee",
      icon: Mail,
      action: () => {
        onClose();
        onOpenContact();
      }
    },
    {
      id: "copy-email",
      category: "Quick Action",
      title: "Copy Email: dinkarkr691@gmail.com",
      subtitle: "Copies primary contact email to clipboard",
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText("dinkarkr691@gmail.com");
        sounds.playClick();
        showToast("Email copied to clipboard: dinkarkr691@gmail.com");
        onClose();
      }
    },
    {
      id: "github",
      category: "External Link",
      title: "Open GitHub Profile (@691Tech)",
      subtitle: "github.com/691Tech • 30+ open source repositories",
      icon: ExternalLink,
      action: () => {
        window.open("https://github.com/691Tech", "_blank");
        onClose();
      }
    },
    {
      id: "toggle-sound",
      category: "Preferences",
      title: soundEnabled ? "Disable Tactile Click Sounds" : "Enable Tactile Click Sounds",
      subtitle: "Synthesized Web Audio API sound effects",
      icon: soundEnabled ? VolumeX : Volume2,
      action: () => {
        onToggleSound();
        showToast(soundEnabled ? "Sound effects muted" : "Tactile sound effects enabled! 🔊");
      }
    },
    {
      id: "admin",
      category: "Administration",
      title: "Access Firebase Admin Portal",
      subtitle: "Inspect incoming recruiter inquiries & telemetry",
      icon: Shield,
      action: () => {
        onClose();
        onOpenAdmin();
      }
    }
  ];

  const filtered = commands.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.subtitle.toLowerCase().includes(query.toLowerCase()) ||
    c.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          sounds.playClick();
          // Open handled by parent or state
        }
      }
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
        sounds.playClick(900);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
        sounds.playClick(900);
      } else if (e.key === "Enter" && filtered[selectedIndex]) {
        e.preventDefault();
        sounds.playSuccess();
        filtered[selectedIndex].action();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, filtered, onClose, onToggleSound]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 px-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-[#FAF8F5] rounded-3xl border border-[#E6DFD5] shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#EAE3D8] bg-white flex items-center gap-3">
          <Search className="w-5 h-5 text-[#8A7B70] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section (e.g. projects, resume, email)..."
            className="w-full text-sm font-heading-sans text-[#1C1613] placeholder-[#8A7B70] bg-transparent focus:outline-hidden"
          />
          {query ? (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-[#8A7B70] hover:text-[#1C1613] rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="px-2 py-0.5 rounded text-[10px] font-code-mono font-semibold bg-[#FAF8F5] border border-[#E0D7CC] text-[#7A6A5E]">
              ESC
            </kbd>
          )}
        </div>

        {/* Command Items List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-10 text-center text-xs text-[#8A7B70]">
              No commands matching &ldquo;{query}&rdquo;
            </div>
          ) : (
            filtered.map((item, index) => {
              const Icon = item.icon;
              const isSelected = index === selectedIndex;

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    sounds.playSuccess();
                    item.action();
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`p-3 rounded-2xl flex items-center justify-between cursor-pointer transition-all ${
                    isSelected
                      ? "bg-[#1C1613] text-[#FAF8F5]"
                      : "text-[#1C1613] hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? "bg-[#2D241E] text-[#E06A26]" : "bg-[#F4EFEA] text-[#E06A26]"
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="flex items-center gap-2">
                        <span className="font-heading-sans font-bold text-xs truncate">
                          {item.title}
                        </span>
                        <span className={`text-[10px] font-code-mono uppercase px-1.5 py-0.2 rounded ${
                          isSelected ? "bg-[#2D241E] text-[#C4B7AA]" : "bg-[#F4EFEA] text-[#8A7B70]"
                        }`}>
                          {item.category}
                        </span>
                      </div>
                      <p className={`text-[11px] truncate mt-0.5 ${
                        isSelected ? "text-[#C4B7AA]" : "text-[#7A6A5E]"
                      }`}>
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {isSelected && (
                    <CornerDownLeft className="w-3.5 h-3.5 text-[#E06A26] shrink-0 ml-2" />
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Keyboard Hints Footer */}
        <div className="px-4 py-2.5 bg-[#F7F3EE] border-t border-[#EAE3D8] flex items-center justify-between text-[11px] text-[#7A6A5E] font-code-mono">
          <div className="flex items-center gap-3">
            <span>&uarr;&darr; Navigate</span>
            <span>&crarr; Execute</span>
            <span>ESC Close</span>
          </div>
          <span>Dinkar Kumar Portfolio</span>
        </div>
      </div>
    </div>
  );
}
