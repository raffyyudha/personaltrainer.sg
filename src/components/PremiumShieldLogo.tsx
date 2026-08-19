"use client";

import React from "react";

interface PremiumShieldLogoProps {
  className?: string;
  imageClassName?: string;
  showSparkles?: boolean;
}

export default function PremiumShieldLogo({
  className = "",
  imageClassName = "w-48 sm:w-56 md:w-64 lg:w-72 h-auto",
  showSparkles = true,
}: PremiumShieldLogoProps) {
  // Sparkle coordinates and delays for elegant floating glitter
  const sparkles = [
    { top: "6%", left: "10%", size: "w-3 h-3", delay: "0s" },
    { top: "12%", right: "8%", size: "w-4 h-4", delay: "0.8s" },
    { top: "44%", left: "2%", size: "w-3 h-3", delay: "1.6s" },
    { top: "38%", right: "3%", size: "w-4 h-4", delay: "2.4s" },
    { top: "78%", left: "14%", size: "w-3 h-3", delay: "1.1s" },
    { top: "72%", right: "12%", size: "w-4 h-4", delay: "1.9s" },
    { top: "2%", left: "48%", size: "w-2.5 h-2.5", delay: "0.4s" },
    { bottom: "2%", right: "45%", size: "w-3.5 h-3.5", delay: "2.8s" },
  ];

  return (
    <div className={`relative inline-flex items-center justify-center group ${className}`}>
      {/* 1. BACK LIGHTING LAYER - Outer Ambient Dual Glow (Gold + Burgundy Aura) */}
      <div className="absolute -inset-10 bg-gradient-to-tr from-[#800020]/40 via-[#C5A059]/35 to-[#D4AF37]/30 rounded-full blur-3xl opacity-70 animate-ambient-backpulse pointer-events-none" />
      
      {/* 2. BACK LIGHTING LAYER - Concentrated Golden Core Backlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FFE5A3_0%,#C5A059_45%,transparent_75%)] rounded-full blur-2xl opacity-60 pointer-events-none transform scale-110" />

      {/* 3. ELEGANT GOLDEN HALO RING ACCENT */}
      <div className="absolute -inset-4 rounded-full border border-[#C5A059]/20 bg-gradient-to-b from-[#C5A059]/10 via-transparent to-[#800020]/20 blur-[1px] opacity-80 pointer-events-none group-hover:border-[#C5A059]/40 transition-colors duration-500" />

      {/* 4. FLOATING GLITTER & SHIMMER SPARKLE PARTICLES */}
      {showSparkles &&
        sparkles.map((sparkle, idx) => (
          <div
            key={idx}
            className="absolute pointer-events-none z-20 animate-glitter-sparkle text-[#FFE5A3]"
            style={{
              top: sparkle.top,
              left: sparkle.left,
              right: sparkle.right,
              bottom: sparkle.bottom,
              animationDelay: sparkle.delay,
            }}
          >
            <svg
              className={`${sparkle.size} filter drop-shadow-[0_0_6px_rgba(255,229,163,0.9)]`}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              {/* 4-Point Diamond Sparkle Star */}
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>
        ))}

      {/* 5. LOGO IMAGE CONTAINER WITH LIGHT SWEEP & FRONT LIGHT OVERLAY */}
      <div className="relative z-10 p-2 sm:p-3 overflow-hidden rounded-2xl">
        
        {/* Soft Frontal Lighting Reflection (Spotlight overlay from front-top) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_15%,rgba(255,245,220,0.3)_0%,rgba(197,160,89,0.08)_50%,transparent_80%)] pointer-events-none z-20 mix-blend-overlay" />

        {/* Animated Metallic Gold Shine Pass Sweep */}
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-2xl">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/45 to-transparent -translate-x-full animate-shield-shine mix-blend-overlay" />
        </div>

        {/* Primary Shield Logo Image - Crisp, Sharp, Full PT Crest */}
        <img
          src="/logopt.png"
          alt="PersonalTrainer.sg Official Crest"
          className={`object-contain relative z-10 premium-shield-img animate-shield-float ${imageClassName}`}
        />
      </div>
    </div>
  );
}
