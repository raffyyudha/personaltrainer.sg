"use client";

import React from "react";

interface PremiumShieldLogoProps {
  className?: string;
  imageClassName?: string;
  showSparkles?: boolean;
}

export default function PremiumShieldLogo({
  className = "",
  imageClassName = "w-52 sm:w-60 md:w-68 lg:w-76 h-auto",
  showSparkles = true,
}: PremiumShieldLogoProps) {
  // 6 Subtle micro gold sparkles around outer emblem tips
  const sparkles = [
    { top: "4%", left: "14%", size: "w-3.5 h-3.5", delay: "0s" },
    { top: "8%", right: "12%", size: "w-4 h-4", delay: "0.8s" },
    { top: "44%", left: "0%", size: "w-3 h-3", delay: "1.6s" },
    { top: "40%", right: "1%", size: "w-4 h-4", delay: "2.4s" },
    { bottom: "10%", left: "16%", size: "w-3 h-3", delay: "1.1s" },
    { bottom: "8%", right: "14%", size: "w-3.5 h-3.5", delay: "1.9s" },
  ];

  return (
    <div className={`relative inline-flex items-center justify-center group ${className}`}>
      
      {/* 1. VIBRANT WARM GOLD & MAROON AMBIENT BACKLIGHT AURA (Behind Logo) */}
      <div className="absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.35)_0%,rgba(197,160,89,0.3)_35%,rgba(128,0,32,0.25)_65%,transparent_80%)] rounded-full blur-3xl opacity-85 animate-ambient-backpulse pointer-events-none transform scale-125" />

      {/* 2. CORE CONCENTRIC GOLD LIGHT REFLECTION BEHIND SHIELD */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FFE5A3_0%,#C5A059_40%,transparent_70%)] rounded-full blur-2xl opacity-60 pointer-events-none transform scale-110" />

      {/* 3. FLOATING DIAMOND GOLD SPARKLE STARS */}
      {showSparkles &&
        sparkles.map((sparkle, idx) => (
          <div
            key={idx}
            className="absolute pointer-events-none z-30 animate-glitter-sparkle text-[#FFE5A3]"
            style={{
              top: sparkle.top,
              left: sparkle.left,
              right: sparkle.right,
              bottom: sparkle.bottom,
              animationDelay: sparkle.delay,
            }}
          >
            <svg
              className={`${sparkle.size} filter drop-shadow-[0_0_8px_rgba(255,229,163,0.95)]`}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>
        ))}

      {/* 4. CRYSTAL CLEAR, BRILLIANT GOLD PT SHIELD EMBLEM (No Overlays / No Fog) */}
      <div className="relative z-10 p-2">
        <img
          src="/logopt.avif"
          alt="PersonalTrainer.sg Official Crest"
          className={`object-contain relative z-10 transition-all duration-500 hover:scale-105 ${imageClassName}`}
          style={{
            imageRendering: "-webkit-optimize-contrast",
            filter:
              "contrast(1.16) brightness(1.14) saturate(1.08) drop-shadow(0 0 20px rgba(255, 215, 0, 0.65)) drop-shadow(0 0 40px rgba(197, 160, 89, 0.45)) drop-shadow(0 15px 30px rgba(0,0,0,0.95))",
          }}
        />
      </div>
    </div>
  );
}
