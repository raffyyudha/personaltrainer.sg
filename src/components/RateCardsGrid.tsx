"use client";

import React from "react";
import styles from "./RateCardsGrid.module.css";
import { Star, GraduationCap, Check, Clock3, Crown, ArrowRight, UserRound, UsersRound, ClipboardList, ChartNoAxesCombined, Dumbbell, Target, Handshake } from "lucide-react";

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

const packageCards = [
  {
    number: "12",
    title: "Foundation",
    singleRate: "$136",
    coupleRate: "$204",
    badge: null,
    benefitsHeading: "FOUNDATION BENEFITS",
    features: [
      "7 Day Personalised Meal Plan",
      "Initial InBody Analysis",
      "Personalised Training Programme",
      "Nutrition & Dietary Guidance"
    ],
    description: "Best for clients who want a structured and professional start with personalised training, InBody analysis and a 7 Day Personalised Meal Plan."
  },
  {
    number: "24",
    title: "Progress",
    singleRate: "$126",
    coupleRate: "$189",
    badge: null,
    benefitsHeading: "Includes the full Foundation experience, Plus:",
    features: [
      "14 Day Personalised Meal Plan",
      "InBody Progress Review",
      "Personalised Programme Adjustment",
      "Progress Monitoring and Review"
    ],
    description: "Ideal for clients who want more time to build consistency, track measurable progress and refine both training and nutrition."
  },
  {
    number: "36",
    title: "Transformation",
    singleRate: "$116",
    coupleRate: "$174",
    badge: "MOST POPULAR",
    benefitsHeading: "Includes the full Progress experience, Plus:",
    features: [
      "21 Day Personalised Meal Plan",
      "Scheduled Programme Reassessment",
      "Body Composition Progress Tracking",
      "Progressive Training Programme Development",
      "Structured Transformation Review"
    ],
    description: "Designed for clients who want a more complete transformation journey with structured reassessment, body composition tracking and a 21 Day Personalised Meal Plan."
  },
  {
    number: "48",
    title: "Advanced",
    singleRate: "$106",
    coupleRate: "$159",
    badge: null,
    benefitsHeading: "Includes the full Transformation experience, Plus:",
    features: [
      "28 Day Personalised Meal Plan",
      "Regular InBody Progress Reviews",
      "Advanced Programme Recalibration",
      "Enhanced Accountability Support",
      "Extended Progress Monitoring"
    ],
    description: "Built for clients who want deeper progression, regular reviews, advanced programme adjustments and extended accountability support."
  },
  {
    number: "60",
    title: "Signature",
    singleRate: "$96",
    coupleRate: "$144",
    badge: "BEST VALUE",
    benefitsHeading: "Includes the full Advanced experience, Plus:",
    features: [
      "Ongoing Personalised Meal Plan Support",
      "Regular Meal Plan Review and Refinement",
      "Ongoing InBody Progress Monitoring",
      "Regular Programme Recalibration",
      "Priority Scheduling",
      "Comprehensive Accountability Support",
      "Full Transformation Progress Review"
    ],
    description: "Our most comprehensive package for clients committed to long term results, with ongoing nutrition support, continuous programme refinement, priority scheduling and full transformation monitoring."
  }
];

export default function RateCardsGrid({ referenceLayout = false }: { referenceLayout?: boolean }) {
  const specialOffers = (
      <div className={referenceLayout ? styles.extraGrid : "grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-stretch"}>

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
            <div className="flex items-center justify-center gap-2 mb-1.5 text-center">
              <CalendarDownIcon className="w-5 h-5 text-[#C5A059] shrink-0" />
              <h3 className="font-oswald text-lg sm:text-xl font-black uppercase tracking-wider text-[#C5A059]">
                TRIAL SESSION &ndash; 90 MINUTES
              </h3>
            </div>

            {/* Exact Required Title */}
            <p className="text-center font-oswald text-xs sm:text-sm font-bold uppercase text-white tracking-wide mb-2">
              90 Minute Professional Fitness Assessment and Personal Training Session
            </p>

            {/* Rates Columns */}
            <div className="grid grid-cols-2 gap-2 text-center py-2 bg-white/5 rounded-lg border border-white/10 mb-3">
              <div>
                <span className="block text-[11px] font-oswald uppercase text-gray-300 font-bold tracking-wider mb-0.5">
                  SINGLE TRIAL SESSION
                </span>
                <span className="text-3xl sm:text-4xl font-black font-oswald text-white tracking-tight">
                  $144
                </span>
              </div>
              <div className="border-l border-white/20 pl-2">
                <span className="block text-[11px] font-oswald uppercase text-gray-300 font-bold tracking-wider mb-0.5">
                  COUPLE TRIAL SESSION
                </span>
                <span className="text-3xl sm:text-4xl font-black font-oswald text-white tracking-tight">
                  $216
                </span>
              </div>
            </div>

            {/* Inclusions */}
            <p className="text-[11px] sm:text-xs text-gray-300 leading-relaxed font-sans text-center mb-3">
              Includes a professional consultation, goal analysis, InBody analysis, movement and fitness assessment, personalised exercise guidance and one to one personal training.
            </p>
          </div>

          {/* Details / Condition Below */}
          <div className="border-t border-white/15 pt-3 mt-1 text-center">
            <p className="text-xs text-[#C5A059] leading-snug font-sans font-medium">
              The trial session fee is fully waived if a minimum 12 session package is purchased immediately after the trial.
            </p>
          </div>
        </div>

        {!referenceLayout && <>
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

        </>}
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
              <span>Minimum 12 sessions</span>
            </div>
          </div>
        </div>

      </div>

  );
  return (
    <div className="w-full max-w-[1500px] mx-auto space-y-6 sm:space-y-8 font-sans">
      {specialOffers}
      <section className={styles.poster} data-rates-poster>
      {referenceLayout && <>
        <div className={styles.posterHeader}>
          <div className={styles.brand}>
            <img src="/logopt.avif" alt="PT" />
            <div><strong>PERSONALTRAINER.SG</strong><span>SINCE 2002</span></div>
          </div>
          <div className={styles.headline}>
            <h1>PERSONAL TRAINING <span>PACKAGES</span></h1>
            <p><span>STRUCTURED</span><i /><span>PERSONALISED</span><i /><span>RESULTS DRIVEN</span></p>
          </div>
        </div>
        <div className={styles.starter}>
          <div className={styles.starterTitle}>STARTER PROMOTIONAL RATE<small>60 MINUTES</small><small>(NEW CLIENTS &ndash; ONE TIME ONLY)</small></div>
          <div className={styles.starterPrice}><UserRound aria-hidden="true" /><strong>SINGLE</strong><div><b>$96 <small>/ SESSION</small></b><span>(MINIMUM 12 SESSIONS)</span></div></div>
          <div className={styles.starterPrice}><UsersRound aria-hidden="true" /><strong>COUPLE <small>(2 PAX)</small></strong><div><b>$144 <small>/ SESSION</small></b><span>(MINIMUM 12 SESSIONS)</span></div></div>
        </div>
      </>}
      {/* Session packages */}

      <div data-package-grid className={styles.grid}>
        {packageCards.map((pkg) => (
          <article
            key={pkg.number}
            data-package={pkg.number}
            className={`${styles.card} ${pkg.badge ? styles.featured : ""}`}
          >
            <div className={styles.header}>
              {pkg.badge && (
                <span className={styles.badge}>
                  <Crown size={15} aria-hidden="true" />{pkg.badge}
                </span>
              )}
              <h3 className={styles.title}>
                <span className={styles.sessions}>{pkg.number} Sessions</span>
                <span className={styles.name}>
                  <span className={styles.separator}> &ndash; </span>{pkg.title}
                </span>
              </h3>

            </div>

            <div className={styles.body}>
              <p className={styles.duration}><Clock3 aria-hidden="true" />60 Minutes</p>
              <dl className={styles.prices}>
                {[["Single", pkg.singleRate], ["Couple", pkg.coupleRate]].map(([label, rate]) => (
                  <div key={label} className={styles.priceRow}>
                    <dt className={styles.priceLabel}>{label}</dt>
                    <dd className={styles.priceValue}>
                      <span className={styles.amount}>{rate}</span>{" / session"}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className={styles.benefitsHeading}>
                {pkg.benefitsHeading}
              </p>
              <ul className={styles.benefits}>
                {pkg.features.map((feature) => (
                  <li key={feature} className={feature === pkg.features[0] ? styles.mealPlan : styles.benefit}>
                    <Check aria-hidden="true" size={14} className={styles.check} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.closing}>
                {!referenceLayout && <p className={styles.description}>{pkg.description}</p>}
                <a
                  href={`https://wa.me/6591081781?text=${encodeURIComponent(`Hi PersonalTrainer.sg, I am interested in the ${pkg.number} Sessions ${pkg.title} package.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  ENQUIRE NOW <ArrowRight aria-hidden="true" size={18} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      {referenceLayout && <div className={styles.posterFooter}>
        <div><ClipboardList /><span>PERSONALISED<br />MEAL PLAN</span></div>
        <div><ChartNoAxesCombined /><span>INBODY<br />ANALYSIS &amp; TRACKING</span></div>
        <div><Dumbbell /><span>STRUCTURED<br />TRAINING PROGRAMME</span></div>
        <div><Target /><span>PROGRESS<br />MONITORING</span></div>
        <div><Handshake /><span>ACCOUNTABILITY<br />&amp; FULL SUPPORT</span></div>
        <strong>IF RESULTS MATTERS</strong>
      </div>}
      </section>
    </div>
  );
}
