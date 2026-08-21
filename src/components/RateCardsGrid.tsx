"use client";

import React from "react";
import { Star, GraduationCap, Check, Calendar } from "lucide-react";

// Calendar icon with a small down arrow inside for Trial Session
const CalendarDownIcon = ({ className = "w-7 h-7", style }: { className?: string; style?: React.CSSProperties }) => (
  <div className="relative inline-flex items-center justify-center">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="M12 13v5m-2.5-2.5L12 18l2.5-2.5" />
    </svg>
  </div>
);

// Shield Badge Component for the 5 package cards (Gold outline shield with number)
const PackageShieldIcon = ({ number }: { number: string | number }) => (
  <div className="relative shrink-0 flex items-center justify-center" style={{ width: "38px", height: "46px", minWidth: "38px", minHeight: "46px" }}>
    <svg viewBox="0 0 40 48" style={{ width: "38px", height: "46px" }} className="drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 2L4 9V22C4 32.5 20 44 20 44C20 44 36 32.5 36 22V9L20 2Z"
        fill="#3A060D"
        stroke="#C5A059"
        strokeWidth="2.5"
      />
      <path
        d="M20 5.5L7.5 11V21.5C7.5 29.8 20 39 20 39C20 39 32.5 29.8 32.5 21.5V11L20 5.5Z"
        fill="#1f0206"
        stroke="#C5A059"
        strokeWidth="1"
        strokeOpacity="0.6"
      />
    </svg>
    <span className="absolute inset-0 flex items-center justify-center font-oswald font-black text-xs sm:text-sm text-[#C5A059] tracking-tight">
      {number}
    </span>
  </div>
);

const packageCards = [
  {
    number: "12",
    sessions: "12 SESSIONS",
    title: "FOUNDATION",
    singleRate: "$136",
    coupleRate: "$204",
    features: [
      "Initial InBody Analysis",
      "Personalised Training Programme",
      "Nutrition & Dietary Guidance"
    ]
  },
  {
    number: "24",
    sessions: "24 SESSIONS",
    title: "PROGRESS",
    singleRate: "$126",
    coupleRate: "$189",
    features: [
      "InBody Analysis Progress Report",
      "Personalised Training Programme",
      "Nutrition & Dietary Guidance"
    ]
  },
  {
    number: "36",
    sessions: "36 SESSIONS",
    title: "TRANSFORMATION",
    singleRate: "$116",
    coupleRate: "$174",
    features: [
      "InBody Analysis Progress Report",
      "Advanced Training Programme",
      "Nutrition & Dietary Guidance"
    ]
  },
  {
    number: "48",
    sessions: "48 SESSIONS",
    title: "ADVANCED",
    singleRate: "$106",
    coupleRate: "$159",
    features: [
      "Advanced Training Programme",
      "Nutrition & Dietary Guidance",
      "Progress Tracking & Support"
    ]
  },
  {
    number: "60",
    sessions: "60 SESSIONS",
    title: "SIGNATURE",
    singleRate: "$96",
    coupleRate: "$144",
    features: [
      "Comprehensive Training Programme",
      "Nutrition & Dietary Guidance",
      "Ongoing Progress Tracking"
    ]
  }
];

export default function RateCardsGrid() {
  return (
    <div className="w-full max-w-[1500px] mx-auto space-y-6 sm:space-y-8 select-none font-sans">
      
      {/* ── ROW 1: TOP 3 SPECIAL CARDS ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-stretch">

        {/* CARD 1: TRIAL SESSION */}
        <div
          className="rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 relative overflow-hidden"
          style={{
            backgroundColor: "#070707",
            border: "1.5px solid rgba(197, 160, 89, 0.75)"
          }}
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-center gap-2.5 mb-2">
              <CalendarDownIcon className="w-6 h-6 text-[#C5A059]" />
              <h3 className="font-oswald text-xl sm:text-2xl font-black uppercase tracking-wider text-[#C5A059]">
                TRIAL SESSION
              </h3>
            </div>

            {/* Subtitle Divider: 90 MINUTES */}
            <div className="flex items-center gap-3 my-3">
              <div className="h-[1px] bg-white/20 flex-1" />
              <span className="text-[11px] sm:text-xs font-oswald font-extrabold uppercase tracking-widest text-gray-200">
                90 MINUTES
              </span>
              <div className="h-[1px] bg-white/20 flex-1" />
            </div>

            {/* Rates Columns */}
            <div className="grid grid-cols-2 gap-2 text-center py-2">
              <div>
                <span className="block text-xs font-oswald uppercase text-gray-300 font-bold tracking-wider mb-1">
                  SINGLE
                </span>
                <span className="text-3xl sm:text-4xl md:text-5xl font-black font-oswald text-white tracking-tight">
                  $144
                </span>
              </div>
              <div className="border-l border-white/20 pl-2">
                <span className="block text-xs font-oswald uppercase text-gray-300 font-bold tracking-wider mb-1">
                  COUPLE
                </span>
                <span className="text-3xl sm:text-4xl md:text-5xl font-black font-oswald text-white tracking-tight">
                  $216
                </span>
              </div>
            </div>
          </div>

          {/* Details / Inclusions Below */}
          <div className="border-t border-white/15 pt-3.5 mt-3 space-y-2 text-center">
            <p className="text-xs sm:text-[13px] text-gray-200 leading-snug font-sans font-medium">
              Fully waived if a minimum 12-session package is purchased immediately after the trial.
            </p>
            <p className="text-[11px] sm:text-xs text-gray-400 leading-snug font-sans">
              If you decide to continue later or not proceed after the trial, the above trial fee applies.
            </p>
          </div>
        </div>

        {/* CARD 2: STARTER PROMOTIONAL RATE (Deep Red Highlighted Card with Gold Ribbon) */}
        <div
          className="relative rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-2xl overflow-hidden transition-all duration-300"
          style={{
            backgroundColor: "#400810",
            backgroundImage: "linear-gradient(to bottom, #520914, #36050b)",
            border: "2px solid #C5A059"
          }}
        >
          {/* Gold Ribbon Tag in Top-Left Corner */}
          <div
            className="absolute top-0 left-4 sm:left-5 w-8 h-12 sm:w-9 sm:h-14 shadow-lg flex items-center justify-center rounded-b-sm z-10"
            style={{
              backgroundColor: "#C5A059",
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%)"
            }}
          >
            <Star size={16} fill="#3A060D" style={{ color: "#3A060D", marginTop: "-4px" }} />
          </div>

          <div>
            {/* Header */}
            <div className="pl-6 sm:pl-7 text-center mb-2">
              <h3 className="font-oswald text-xl sm:text-2xl font-black uppercase tracking-wider text-[#C5A059] drop-shadow">
                STARTER PROMOTIONAL RATE
              </h3>
            </div>

            {/* Subtitle Divider: 60 MINUTES */}
            <div className="flex items-center gap-3 my-3">
              <div className="h-[1px] bg-[#C5A059]/40 flex-1" />
              <span className="text-[11px] sm:text-xs font-oswald font-extrabold uppercase tracking-widest text-gray-200">
                60 MINUTES
              </span>
              <div className="h-[1px] bg-[#C5A059]/40 flex-1" />
            </div>

            {/* Rates Columns */}
            <div className="grid grid-cols-2 gap-2 text-center py-2">
              <div>
                <span className="block text-xs font-oswald uppercase text-gray-200 font-bold tracking-wider mb-1">
                  SINGLE
                </span>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black font-oswald text-white tracking-tight">
                    $96
                  </span>
                  <span className="text-[11px] text-gray-300 font-sans italic">/ session</span>
                </div>
              </div>
              <div className="border-l border-[#C5A059]/40 pl-2">
                <span className="block text-xs font-oswald uppercase text-gray-200 font-bold tracking-wider mb-1">
                  COUPLE
                </span>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black font-oswald text-white tracking-tight">
                    $144
                  </span>
                  <span className="text-[11px] text-gray-300 font-sans italic">/ session</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Badge/Button: MINIMUM 12 SESSIONS */}
          <div className="pt-4 mt-3 flex justify-center">
            <div
              className="w-full py-2.5 px-4 rounded-lg font-oswald font-extrabold text-xs sm:text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2 border shadow-md"
              style={{
                backgroundColor: "#200307",
                borderColor: "#C5A059",
                color: "#C5A059"
              }}
            >
              <Star size={14} fill="#C5A059" className="shrink-0" />
              <span>MINIMUM 12 SESSIONS</span>
            </div>
          </div>
        </div>

        {/* CARD 3: STUDENT RATE */}
        <div
          className="rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 relative overflow-hidden"
          style={{
            backgroundColor: "#070707",
            border: "1.5px solid rgba(197, 160, 89, 0.75)"
          }}
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-center gap-2.5 mb-2">
              <GraduationCap className="w-6 h-6 text-[#C5A059]" />
              <h3 className="font-oswald text-xl sm:text-2xl font-black uppercase tracking-wider text-[#C5A059]">
                STUDENT RATE
              </h3>
            </div>

            {/* Subtitle Divider: 60 MINUTES */}
            <div className="flex items-center gap-3 my-3">
              <div className="h-[1px] bg-white/20 flex-1" />
              <span className="text-[11px] sm:text-xs font-oswald font-extrabold uppercase tracking-widest text-gray-200">
                60 MINUTES
              </span>
              <div className="h-[1px] bg-white/20 flex-1" />
            </div>

            {/* Rate Column */}
            <div className="text-center py-2">
              <span className="block text-xs font-oswald uppercase text-gray-300 font-bold tracking-wider mb-1">
                SINGLE
              </span>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-3xl sm:text-4xl md:text-5xl font-black font-oswald text-white tracking-tight">
                  $80
                </span>
                <span className="text-[11px] text-gray-300 font-sans italic">/ session</span>
              </div>
            </div>
          </div>

          {/* Checklist */}
          <div className="border-t border-white/15 pt-3.5 mt-3 space-y-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200 font-sans font-medium">
              <span className="w-4 h-4 rounded-full border border-[#C5A059] flex items-center justify-center shrink-0">
                <Check size={10} className="text-[#C5A059]" />
              </span>
              <span>Flat rate for any number of sessions</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200 font-sans font-medium">
              <span className="w-4 h-4 rounded-full border border-[#C5A059] flex items-center justify-center shrink-0">
                <Check size={10} className="text-[#C5A059]" />
              </span>
              <span>Minimum 12 sessions</span>
            </div>
          </div>
        </div>

      </div>

      {/* ── ROW 2: 5 PACKAGES GRID (12, 24, 36, 48, 60 SESSIONS) ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 items-stretch">
        {packageCards.map((pkg) => (
          <div
            key={pkg.number}
            className="rounded-xl p-4 sm:p-5 flex flex-col justify-between shadow-2xl transition-all duration-300 group hover:border-[#C5A059]"
            style={{
              backgroundColor: "#070707",
              border: "1.5px solid rgba(197, 160, 89, 0.75)"
            }}
          >
            <div>
              {/* Header: Shield Icon + Title */}
              <div className="flex items-center gap-3 mb-2">
                <PackageShieldIcon number={pkg.number} />
                <div className="leading-tight">
                  <span className="block font-oswald text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider">
                    {pkg.sessions}
                  </span>
                  <span className="block font-oswald text-sm sm:text-base font-black uppercase tracking-wider text-[#C5A059]">
                    {pkg.title}
                  </span>
                </div>
              </div>

              {/* Subtitle Divider: 60 MINUTES */}
              <div className="flex items-center gap-2 my-2.5">
                <div className="h-[1px] bg-white/20 flex-1" />
                <span className="text-[10px] font-oswald font-extrabold uppercase tracking-widest text-gray-300">
                  60 MINUTES
                </span>
                <div className="h-[1px] bg-white/20 flex-1" />
              </div>

              {/* Pricing Rows: SINGLE & COUPLE */}
              <div className="space-y-1.5 py-1">
                <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                  <span className="font-oswald uppercase text-gray-300 font-bold tracking-wider text-xs">
                    SINGLE
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-oswald font-black text-white text-base sm:text-lg tracking-tight">
                      {pkg.singleRate}
                    </span>
                    <span className="text-[10px] text-gray-400 font-sans italic">/ session</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-0.5">
                  <span className="font-oswald uppercase text-gray-300 font-bold tracking-wider text-xs">
                    COUPLE
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-oswald font-black text-white text-base sm:text-lg tracking-tight">
                      {pkg.coupleRate}
                    </span>
                    <span className="text-[10px] text-gray-400 font-sans italic">/ session</span>
                  </div>
                </div>
              </div>

              {/* Inclusions List */}
              <ul className="space-y-2 mt-3 mb-4 text-xs text-gray-200 font-sans font-medium">
                {pkg.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-3.5 h-3.5 rounded-full border border-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={9} className="text-[#C5A059]" />
                    </span>
                    <span className="leading-tight text-gray-200">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enquire Now Button */}
            <a
              href={`https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20the%20${pkg.sessions}%20${pkg.title}%20package.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 font-oswald text-xs font-black uppercase tracking-widest rounded-lg text-center transition-all duration-300 block shadow-md hover:brightness-125 mt-2"
              style={{
                backgroundColor: "#4A0A13",
                border: "1.5px solid #C5A059",
                color: "#C5A059"
              }}
            >
              ENQUIRE NOW
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}
