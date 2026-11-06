"use client";

import React, { useState, useEffect } from "react";
import { RotateCw, Sparkles, Eye, Maximize2, ShieldCheck } from "lucide-react";

interface Interactive3DModelProps {
  className?: string;
  autoRotate?: boolean;
}

export default function Interactive3DModel({
  className = "w-full h-72 sm:h-80",
  autoRotate = true
}: Interactive3DModelProps) {
  const [isRotating, setIsRotating] = useState(autoRotate);
  const [modelViewerLoaded, setModelViewerLoaded] = useState(false);
  const [interactionActive, setInteractionActive] = useState(false);
  const ModelViewer = "model-viewer" as any;

  useEffect(() => {
    // Check if customElements has registered model-viewer
    if (typeof window !== "undefined" && customElements.get("model-viewer")) {
      setModelViewerLoaded(true);
    } else {
      const interval = setInterval(() => {
        if (typeof window !== "undefined" && customElements.get("model-viewer")) {
          setModelViewerLoaded(true);
          clearInterval(interval);
        }
      }, 300);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#241E1A] via-[#1C1613] to-[#120E0C] border-2 border-[#D4A373]/30 shadow-2xl flex items-center justify-center ${className}`}>
      
      {/* Background Soft Studio Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,213,79,0.15)_0%,_rgba(224,106,38,0.1)_45%,_transparent_75%)] pointer-events-none" />

      {/* Top Floating Badges */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[10px] font-heading-sans font-bold text-[#FFD54F]">
          <Sparkles className="w-3 h-3 text-[#FFD54F]" />
          <span>TRIPO 3D PBR MODEL</span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/70 backdrop-blur-md border border-emerald-500/30 text-[10px] font-code-mono text-emerald-400 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span>INTERACTIVE 360°</span>
        </div>
      </div>

      {/* Interactive 3D Model Viewer */}
      {modelViewerLoaded ? (
        <ModelViewer
          src="/model.glb"
          poster="/images/tripo-avatar.webp"
          alt="Dinkar Kumar 3D Cartoon Avatar"
          auto-rotate={isRotating ? "true" : undefined}
          camera-controls="true"
          shadow-intensity="1.4"
          shadow-softness="0.8"
          exposure="1.08"
          camera-orbit="0deg 75deg 105%"
          style={{ width: "100%", height: "100%", outline: "none" }}
          onMouseDown={() => setInteractionActive(true)}
          onTouchStart={() => setInteractionActive(true)}
        />
      ) : (
        /* Instant Fallback Render */
        <div className="relative w-full h-full flex items-center justify-center p-4">
          <img
            src="/images/tripo-avatar.webp"
            alt="Dinkar Kumar 3D Avatar"
            className="w-full h-full object-contain drop-shadow-2xl animate-pulse"
          />
        </div>
      )}

      {/* Bottom Floating Control Bar */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-20">
        <div className="text-[10px] font-code-mono text-[#D4C7BA] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
          <Eye className="w-3 h-3 text-[#E06A26]" />
          <span>Drag to orbit &bull; Pinch to zoom</span>
        </div>

        <button
          onClick={() => setIsRotating(!isRotating)}
          className={`px-3 py-1 rounded-full text-[10px] font-heading-sans font-bold flex items-center gap-1.5 backdrop-blur-md transition-all border ${
            isRotating
              ? "bg-[#E06A26] text-white border-[#E06A26] shadow-sm"
              : "bg-black/60 text-[#D4C7BA] border-white/15 hover:text-white"
          }`}
          title="Toggle 360° Auto Rotation"
        >
          <RotateCw className={`w-3 h-3 ${isRotating ? "animate-spin" : ""}`} />
          <span>{isRotating ? "Rotating" : "Paused"}</span>
        </button>
      </div>

    </div>
  );
}
