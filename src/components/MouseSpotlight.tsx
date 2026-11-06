"use client";

import React, { useEffect, useState } from "react";

export default function MouseSpotlight() {
  const [mounted, setMounted] = useState(false);
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!mounted || isTouch) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(550px circle at ${pos.x}px ${pos.y}px, rgba(224, 106, 38, 0.04), transparent 80%)`,
      }}
    />
  );
}
