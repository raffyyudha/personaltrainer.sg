import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import TikTokIcon from "@/components/TikTokIcon";
import {
  Calendar,
  Info,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Clock,
  CheckCircle2,
  Shield,
  Award,
  Sparkles,
  Users,
  Target,
  ArrowRight,
  TrendingUp,
  MapPin,
  FileText,
  BadgeCheck,
  GraduationCap,
  Percent,
  Check
} from "lucide-react";

// Clean authentic WhatsApp icon
const WhatsAppIcon = ({ className = "w-6 h-6", style }: { className?: string; style?: React.CSSProperties }) => (
  <svg width="24" height="24" className={className} style={{ width: "24px", height: "24px", minWidth: "24px", minHeight: "24px", ...style }} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.333 4.988l-1.417 5.176 5.297-1.39c1.46.797 3.107 1.217 4.773 1.218h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.038-5.177-2.925-7.064s-4.395-2.927-7.064-2.927zm5.72 14.184c-.244.688-1.427 1.314-1.966 1.396-.51.077-1.168.109-1.89-.124-.442-.143-1.011-.328-1.742-.647-3.072-1.332-5.077-4.437-5.231-4.644-.153-.207-1.252-1.666-1.252-3.18 0-1.514.789-2.259 1.069-2.564.281-.305.612-.382.816-.382.204 0 .408.003.586.012.189.01.442-.072.692.529.255.613.867 2.115.943 2.268.077.153.128.331.026.535-.102.204-.153.331-.306.51-.153.178-.321.375-.459.504-.153.144-.313.301-.135.607.178.306.792 1.307 1.7 2.116 1.168 1.042 2.153 1.365 2.46 1.518.306.153.484.128.663-.077.179-.204.765-.893.969-1.2.204-.306.408-.255.689-.153.281.102 1.785.842 2.091.995.306.153.51.229.586.357.077.127.077.739-.167 1.427z" />
  </svg>
);

// Gold Shield Component for Package Cards
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

export default function PersonalTrainerCostSingaporePage() {
  const whatsappUrl = "https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20would%20like%20to%20enquire%20about%20Personal%20Trainer%20Cost%20in%20Singapore%2C%20trial%20session%20fees%2C%20and%20suitable%20packages.";

  // JSON-LD structured data for rich snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://personaltrainer.sg/personal-trainer-cost-singapore#article",
        "headline": "Personal Trainer Cost in Singapore 2026",
        "description": "Understand personal training rates, trial session fees and package options with PersonalTrainer.sg, Trusted in Singapore Since 2002.",
        "url": "https://personaltrainer.sg/personal-trainer-cost-singapore",
        "datePublished": "2026-01-01T00:00:00+08:00",
        "dateModified": "2026-02-01T00:00:00+08:00",
        "author": {
          "@type": "Person",
          "name": "Md Salaudin Adam (DONN)",
          "jobTitle": "Founder and Fitness Director",
          "worksFor": {
            "@type": "Organization",
            "name": "PersonalTrainer.sg"
          }
        },
        "publisher": {
          "@type": "Organization",
          "name": "PersonalTrainer.sg",
          "logo": {
            "@type": "ImageObject",
            "url": "https://personaltrainer.sg/logopt.avif"
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://personaltrainer.sg/personal-trainer-cost-singapore#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a personal trainer cost in Singapore in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In Singapore, personal training rates generally range from $80 to $200+ per hour depending on coach experience, qualification, package volume, and location. At PersonalTrainer.sg, single rates range from $80 per session (Student promotional rate) to $136 per session (Foundation 12-session tier), while 60-session Signature packages average $96 per session."
            }
          },
          {
            "@type": "Question",
            "name": "What is included in the PersonalTrainer.sg trial session?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The trial session is approximately 90 minutes. It includes around 30 minutes of consultation to review fitness goals and medical suitability, 45 minutes of hands-on coaching to evaluate movement mechanics and experience the training style, and 15 minutes to discuss the recommended training roadmap. Fees are $144 for Single and $216 for Couple, fully waived if a 12+ session package is confirmed immediately."
            }
          },
          {
            "@type": "Question",
            "name": "Are there gym membership fees added on top of personal training?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. PersonalTrainer.sg offers direct condo gym, home, and dedicated private training arrangements without locking you into expensive monthly commercial gym membership subscriptions."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://personaltrainer.sg/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Personal Trainer Cost Singapore 2026",
            "item": "https://personaltrainer.sg/personal-trainer-cost-singapore"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen text-white selection:bg-[#800020] selection:text-white font-sans antialiased overflow-x-hidden bg-[#050505]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <Navbar activePage="services" />

      {/* Main Container */}
      <main className="pt-28 sm:pt-32 pb-20 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-gray-400 font-oswald uppercase tracking-wider">
          <Link href="/" className="hover:text-[#C5A059] transition-colors">Home</Link>
          <span className="text-gray-600">/</span>
          <Link href="/rates" className="hover:text-[#C5A059] transition-colors">Rates</Link>
          <span className="text-gray-600">/</span>
          <span className="text-[#C5A059]">Cost Singapore 2026</span>
        </nav>

        {/* ── HERO SECTION ── */}
        <header className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#C5A059]/40 mb-4 shadow-lg">
            <Sparkles size={14} className="text-[#C5A059]" />
            <span className="text-[11px] sm:text-xs font-oswald uppercase tracking-widest text-[#C5A059] font-bold">
              Singapore Fitness Pricing Guide 2026
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-6 mb-4">
            <div className="hidden md:flex items-center gap-2 opacity-70">
              <div className="h-[2px] w-16 lg:w-32 bg-gradient-to-r from-transparent to-[#C5A059]" />
              <div className="w-2 h-2 rotate-45 bg-[#C5A059]" />
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-oswald uppercase tracking-tight text-white drop-shadow-xl leading-tight">
              Personal Trainer Cost in Singapore 2026
            </h1>

            <div className="hidden md:flex items-center gap-2 opacity-70">
              <div className="w-2 h-2 rotate-45 bg-[#C5A059]" />
              <div className="h-[2px] w-16 lg:w-32 bg-gradient-to-l from-transparent to-[#C5A059]" />
            </div>
          </div>

          <p className="text-gray-200 text-base sm:text-xl lg:text-2xl font-sans max-w-3xl mx-auto leading-relaxed mb-8">
            Understand personal training rates, trial session fees and package options with PersonalTrainer.sg, <span className="text-[#C5A059] font-semibold">Trusted in Singapore Since 2002</span>.
          </p>

          {/* Credibility Key Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-2 text-left">
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-3.5 sm:p-4 flex items-center gap-3">
              <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-[#C5A059] shrink-0" />
              <div>
                <p className="text-xs uppercase font-oswald text-gray-400 tracking-wider">Heritage</p>
                <p className="text-xs sm:text-sm font-bold text-white font-oswald uppercase">Since 2002</p>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-3.5 sm:p-4 flex items-center gap-3">
              <Award className="w-6 h-6 sm:w-7 sm:h-7 text-[#C5A059] shrink-0" />
              <div>
                <p className="text-xs uppercase font-oswald text-gray-400 tracking-wider">Experience</p>
                <p className="text-xs sm:text-sm font-bold text-white font-oswald uppercase">24 Years</p>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-3.5 sm:p-4 flex items-center gap-3">
              <Users className="w-6 h-6 sm:w-7 sm:h-7 text-[#C5A059] shrink-0" />
              <div>
                <p className="text-xs uppercase font-oswald text-gray-400 tracking-wider">Track Record</p>
                <p className="text-xs sm:text-sm font-bold text-white font-oswald uppercase">2,000+ Clients</p>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-3.5 sm:p-4 flex items-center gap-3">
              <Percent className="w-6 h-6 sm:w-7 sm:h-7 text-[#C5A059] shrink-0" />
              <div>
                <p className="text-xs uppercase font-oswald text-gray-400 tracking-wider">Rates From</p>
                <p className="text-xs sm:text-sm font-bold text-white font-oswald uppercase">$80 – $96 / hr</p>
              </div>
            </div>
          </div>
        </header>

        {/* ── SECTION 1: HOW MUCH DOES PERSONAL TRAINING COST IN SINGAPORE? ── */}
        <section className="mb-16 sm:mb-20 bg-[#0d0d0d] border border-white/10 rounded-2xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#800020]" />
          
          <div className="mb-6">
            <span className="text-[#C5A059] font-oswald text-xs uppercase tracking-widest font-bold block mb-1">
              Market Pricing Insights
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-oswald uppercase tracking-wide text-white">
              How Much Does Personal Training Cost in Singapore?
            </h2>
          </div>

          <div className="space-y-4 text-gray-200 text-sm sm:text-base leading-relaxed font-sans">
            <p>
              If you are researching the cost of engaging a personal fitness coach in Singapore in 2026, rates typically fluctuate widely between <strong>$80 and $250+ per hour</strong>. This price disparity is influenced by several critical variables: trainer credentials, location accessibility, whether you train solo or as a pair, session frequency, and overall package size.
            </p>
            <p>
              Many commercial gym chains promote seemingly low introductory session rates, only to require costly monthly gym membership contracts, recurring admin fees, or inexperienced junior staff assigned to rotate through your workouts.
            </p>
            <p>
              At <strong>PersonalTrainer.sg</strong>, coaching is structured, transparent, and led directly by <strong>Md Salaudin Adam (DONN)</strong>, Founder and Fitness Director, with <strong>24 Years of Coaching Experience</strong>. Since 2002, our philosophy has always centered on delivering high-impact, results-driven training without forcing clients into compulsory gym contracts or unnecessary hidden markups.
            </p>
          </div>

          {/* Quick Summary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
            <div className="p-4 rounded-xl bg-[#070707] border border-white/5">
              <h3 className="font-oswald uppercase text-white font-bold text-sm sm:text-base mb-1 text-[#C5A059]">
                Structured Methodology
              </h3>
              <p className="text-xs text-gray-300">
                Guided by the DONN Elite Performance System (DEPS) focusing on joint safety, posture restoration, and sustainable conditioning.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#070707] border border-white/5">
              <h3 className="font-oswald uppercase text-white font-bold text-sm sm:text-base mb-1 text-[#C5A059]">
                Zero Gym Lock-In Fees
              </h3>
              <p className="text-xs text-gray-300">
                Train at your condominium gym, private home space, or approved facility across Singapore without paying separate monthly club dues.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#070707] border border-white/5">
              <h3 className="font-oswald uppercase text-white font-bold text-sm sm:text-base mb-1 text-[#C5A059]">
                Proven Coaching Pedigree
              </h3>
              <p className="text-xs text-gray-300">
                Over 2,000 clients successfully trained since 2002, spanning beginners, busy professionals, couples, and seniors.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: TRIAL SESSION FEE ── */}
        <section className="mb-16 sm:mb-20 bg-gradient-to-b from-[#0a0a0a] to-[#050505] border-2 border-[#C5A059]/40 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block bg-[#800020] text-[#C5A059] text-[11px] font-oswald uppercase font-bold tracking-widest px-3 py-1 rounded-full mb-2">
              Start With Zero Obligation
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-oswald uppercase tracking-wide text-white">
              Trial Session Fee
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm mt-2">
              Experience the coaching chemistry, exercise assessment, and training standards of PersonalTrainer.sg before committing to a package.
            </p>
          </div>

          {/* Trial Duration Breakdown 90 Minutes */}
          <div className="mb-10 bg-[#0e0e0e] border border-white/10 rounded-xl p-5 sm:p-7">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-[#C5A059]" />
              <span className="font-oswald text-base sm:text-lg font-black uppercase tracking-wider text-[#C5A059]">
                The Comprehensive 90-Minute Trial Breakdown
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {/* Step 1 */}
              <div className="flex flex-col bg-[#141414] border border-white/5 p-5 rounded-xl text-center">
                <span className="text-2xl font-black font-oswald text-[#C5A059] mb-1">~30 MINS</span>
                <h3 className="font-oswald font-bold uppercase text-white text-sm mb-2">
                  1. Lifestyle & Fitness Consultation
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  In-depth discussion to understand your fitness goals, body condition, daily lifestyle, medical or injury history, and general training suitability.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col bg-[#141414] border border-[#C5A059]/30 p-5 rounded-xl text-center relative shadow-lg">
                <span className="text-2xl font-black font-oswald text-[#C5A059] mb-1">~45 MINS</span>
                <h3 className="font-oswald font-bold uppercase text-white text-sm mb-2">
                  2. Hands-On Personal Training
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Interactive training session allowing you to experience our coaching style, exercise structure, technique guidance, and professional standard first-hand.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col bg-[#141414] border border-white/5 p-5 rounded-xl text-center">
                <span className="text-2xl font-black font-oswald text-[#C5A059] mb-1">~15 MINS</span>
                <h3 className="font-oswald font-bold uppercase text-white text-sm mb-2">
                  3. Roadmap Discussion
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Dedicated time to discuss realistic training frequency, tailored programme direction, scheduling preferences, and how to move forward effectively.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            {/* Single Trial */}
            <div className="bg-[#080808] border border-white/10 rounded-xl p-6 text-center shadow-xl hover:border-[#C5A059]/40 transition-all">
              <span className="text-xs font-oswald uppercase tracking-widest text-gray-400 font-bold block mb-1">
                Individual Coaching
              </span>
              <h3 className="font-oswald text-xl font-bold uppercase text-white mb-2">
                Single Trial Session
              </h3>
              <div className="text-4xl font-black font-oswald text-[#C5A059] mb-2">$144</div>
              <p className="text-xs text-gray-400">90 minutes complete assessment & coaching</p>
            </div>

            {/* Couple Trial */}
            <div className="bg-[#080808] border border-white/10 rounded-xl p-6 text-center shadow-xl hover:border-[#C5A059]/40 transition-all">
              <span className="text-xs font-oswald uppercase tracking-widest text-gray-400 font-bold block mb-1">
                2 Persons (Partners / Friends)
              </span>
              <h3 className="font-oswald text-xl font-bold uppercase text-white mb-2">
                Couple Trial Session
              </h3>
              <div className="text-4xl font-black font-oswald text-[#C5A059] mb-2">$216</div>
              <p className="text-xs text-gray-400">90 minutes joint assessment & coaching ($108 / pax)</p>
            </div>
          </div>

          {/* Waiver Box */}
          <div className="bg-[#190508] border border-[#800020] rounded-xl p-5 text-center max-w-2xl mx-auto">
            <p className="font-oswald uppercase font-bold text-[#C5A059] text-sm sm:text-base tracking-wide mb-1">
              ★ Full Trial Fee Waiver Available
            </p>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
              The trial session fee will be <strong>fully waived</strong> if a minimum 12-session package is purchased immediately after the trial session. If the client decides to continue later or does not proceed after the trial, the trial session fee applies.
            </p>
          </div>

          {/* Book Trial Button */}
          <div className="flex justify-center mt-8">
            <a
              href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20would%20like%20to%20book%20a%2090-minute%20Trial%20Session."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-oswald uppercase tracking-wider font-bold text-sm sm:text-base bg-[#C5A059] text-black hover:bg-[#d4af37] transition-all shadow-xl hover:scale-105"
            >
              <WhatsAppIcon className="w-5 h-5 text-black" />
              <span>Book Your Trial Session via WhatsApp</span>
            </a>
          </div>
        </section>

        {/* ── SECTION 3: PERSONAL TRAINING RATES ── */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <span className="text-[#C5A059] font-oswald text-xs uppercase tracking-widest font-bold block mb-1">
              Transparent Per-Session Structure
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-oswald uppercase tracking-wide text-white">
              Personal Training Rates
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto mt-2">
              Clear, transparent per-session pricing designed to match your goals, training frequency, and commitment level.
            </p>
          </div>

          {/* Special Rates Row (Promotional & Student) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            
            {/* Starter Promotional Card */}
            <div className="rounded-xl p-6 bg-[#0a0a0a] border border-[#C5A059]/60 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded bg-[#800020] text-white font-oswald uppercase text-xs font-bold tracking-wider">
                    Special Offer
                  </span>
                  <span className="text-xs font-oswald uppercase tracking-wider text-gray-400">60 Minutes</span>
                </div>
                <h3 className="font-oswald text-xl sm:text-2xl font-bold uppercase text-[#C5A059] mb-1">
                  Starter Promotional Rate
                </h3>
                <p className="text-xs text-gray-400 mb-4">Minimum 12 sessions commitment</p>
              </div>

              <div className="grid grid-cols-2 gap-3 py-4 border-t border-b border-white/10 text-center">
                <div className="p-3 bg-[#121212] rounded-lg">
                  <span className="text-xs font-oswald uppercase text-gray-400 block">Single</span>
                  <span className="text-2xl sm:text-3xl font-black font-oswald text-white">$96</span>
                  <span className="text-[11px] text-gray-400 block">/ session</span>
                </div>
                <div className="p-3 bg-[#121212] rounded-lg">
                  <span className="text-xs font-oswald uppercase text-gray-400 block">Couple</span>
                  <span className="text-2xl sm:text-3xl font-black font-oswald text-white">$144</span>
                  <span className="text-[11px] text-gray-400 block">/ session</span>
                </div>
              </div>

              <p className="text-[11px] text-gray-400 mt-3 text-center">
                Ideal for first-time clients seeking to experience structured personal coaching.
              </p>
            </div>

            {/* Student Rate Card */}
            <div className="rounded-xl p-6 bg-[#0a0a0a] border border-white/20 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded bg-[#1f1f1f] text-[#C5A059] font-oswald uppercase text-xs font-bold tracking-wider flex items-center gap-1.5">
                    <GraduationCap size={14} /> Student Concession
                  </span>
                  <span className="text-xs font-oswald uppercase tracking-wider text-gray-400">60 Minutes</span>
                </div>
                <h3 className="font-oswald text-xl sm:text-2xl font-bold uppercase text-white mb-1">
                  Student Rate
                </h3>
                <p className="text-xs text-gray-400 mb-4">Minimum 12 sessions • Flat rate for any package size</p>
              </div>

              <div className="p-4 bg-[#121212] rounded-lg text-center border-t border-b border-white/10">
                <span className="text-xs font-oswald uppercase text-gray-400 block">Single (Flat Rate)</span>
                <span className="text-3xl sm:text-4xl font-black font-oswald text-[#C5A059]">$80</span>
                <span className="text-[11px] text-gray-400 block">/ session</span>
              </div>

              <p className="text-[11px] text-gray-400 mt-3 text-center">
                Subject to valid student verification and approval prior to confirmation.
              </p>
            </div>

          </div>

          {/* Standard Tier Packages (12, 24, 36, 48, 60 Sessions) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            
            {/* 12 Sessions Foundation */}
            <div className="bg-[#080808] border border-white/10 rounded-xl p-5 flex flex-col justify-between hover:border-[#C5A059]/40 transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <PackageShieldIcon number="12" />
                  <span className="text-xs font-oswald uppercase tracking-wider text-gray-400">60 Mins</span>
                </div>
                <h3 className="font-oswald font-black uppercase text-lg text-white">
                  12 Sessions Foundation
                </h3>
                <p className="text-xs text-gray-400 mt-1 mb-4">
                  Build baseline technique, posture alignment, and fundamental strength habits.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 bg-[#121212] p-3 rounded-lg text-center">
                <div>
                  <span className="text-[10px] font-oswald uppercase text-gray-400 block">Single</span>
                  <span className="text-xl font-bold font-oswald text-[#C5A059]">$136</span>
                  <span className="text-[10px] text-gray-400 block">/ session</span>
                </div>
                <div>
                  <span className="text-[10px] font-oswald uppercase text-gray-400 block">Couple</span>
                  <span className="text-xl font-bold font-oswald text-white">$204</span>
                  <span className="text-[10px] text-gray-400 block">/ session</span>
                </div>
              </div>
            </div>

            {/* 24 Sessions Progress */}
            <div className="bg-[#080808] border border-white/10 rounded-xl p-5 flex flex-col justify-between hover:border-[#C5A059]/40 transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <PackageShieldIcon number="24" />
                  <span className="text-xs font-oswald uppercase tracking-wider text-gray-400">60 Mins</span>
                </div>
                <h3 className="font-oswald font-black uppercase text-lg text-white">
                  24 Sessions Progress
                </h3>
                <p className="text-xs text-gray-400 mt-1 mb-4">
                  Progressive overload, muscle tone, core conditioning, and increased stamina.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 bg-[#121212] p-3 rounded-lg text-center">
                <div>
                  <span className="text-[10px] font-oswald uppercase text-gray-400 block">Single</span>
                  <span className="text-xl font-bold font-oswald text-[#C5A059]">$126</span>
                  <span className="text-[10px] text-gray-400 block">/ session</span>
                </div>
                <div>
                  <span className="text-[10px] font-oswald uppercase text-gray-400 block">Couple</span>
                  <span className="text-xl font-bold font-oswald text-white">$189</span>
                  <span className="text-[10px] text-gray-400 block">/ session</span>
                </div>
              </div>
            </div>

            {/* 36 Sessions Transformation */}
            <div className="bg-[#080808] border border-[#800020] rounded-xl p-5 flex flex-col justify-between hover:border-[#C5A059]/60 transition-all relative">
              <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#800020] text-[9px] font-oswald uppercase tracking-widest text-white">
                Popular
              </div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <PackageShieldIcon number="36" />
                  <span className="text-xs font-oswald uppercase tracking-wider text-gray-400">60 Mins</span>
                </div>
                <h3 className="font-oswald font-black uppercase text-lg text-white">
                  36 Sessions Transformation
                </h3>
                <p className="text-xs text-gray-400 mt-1 mb-4">
                  Significant body recomposition, stubborn fat loss, and lasting strength changes.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 bg-[#121212] p-3 rounded-lg text-center">
                <div>
                  <span className="text-[10px] font-oswald uppercase text-gray-400 block">Single</span>
                  <span className="text-xl font-bold font-oswald text-[#C5A059]">$116</span>
                  <span className="text-[10px] text-gray-400 block">/ session</span>
                </div>
                <div>
                  <span className="text-[10px] font-oswald uppercase text-gray-400 block">Couple</span>
                  <span className="text-xl font-bold font-oswald text-white">$174</span>
                  <span className="text-[10px] text-gray-400 block">/ session</span>
                </div>
              </div>
            </div>

            {/* 48 Sessions Momentum */}
            <div className="bg-[#080808] border border-white/10 rounded-xl p-5 flex flex-col justify-between hover:border-[#C5A059]/40 transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <PackageShieldIcon number="48" />
                  <span className="text-xs font-oswald uppercase tracking-wider text-gray-400">60 Mins</span>
                </div>
                <h3 className="font-oswald font-black uppercase text-lg text-white">
                  48 Sessions Momentum
                </h3>
                <p className="text-xs text-gray-400 mt-1 mb-4">
                  Consistent training rhythm, advanced functional strength, and injury resilience.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 bg-[#121212] p-3 rounded-lg text-center">
                <div>
                  <span className="text-[10px] font-oswald uppercase text-gray-400 block">Single</span>
                  <span className="text-xl font-bold font-oswald text-[#C5A059]">$106</span>
                  <span className="text-[10px] text-gray-400 block">/ session</span>
                </div>
                <div>
                  <span className="text-[10px] font-oswald uppercase text-gray-400 block">Couple</span>
                  <span className="text-xl font-bold font-oswald text-white">$159</span>
                  <span className="text-[10px] text-gray-400 block">/ session</span>
                </div>
              </div>
            </div>

            {/* 60 Sessions Signature */}
            <div className="bg-[#080808] border border-[#C5A059]/40 rounded-xl p-5 flex flex-col justify-between hover:border-[#C5A059] transition-all sm:col-span-2 lg:col-span-2">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <PackageShieldIcon number="60" />
                  <span className="text-xs font-oswald uppercase tracking-wider text-gray-400">60 Mins</span>
                </div>
                <h3 className="font-oswald font-black uppercase text-lg text-white">
                  60 Sessions Signature
                </h3>
                <p className="text-xs text-gray-400 mt-1 mb-4">
                  Complete annual fitness lifestyle transformation with our most cost-effective per-session value.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 bg-[#121212] p-3.5 rounded-lg text-center">
                <div>
                  <span className="text-xs font-oswald uppercase text-gray-400 block">Single (Best Value)</span>
                  <span className="text-2xl font-black font-oswald text-[#C5A059]">$96</span>
                  <span className="text-xs text-gray-400 block">/ session</span>
                </div>
                <div>
                  <span className="text-xs font-oswald uppercase text-gray-400 block">Couple (Best Value)</span>
                  <span className="text-2xl font-black font-oswald text-white">$144</span>
                  <span className="text-xs text-gray-400 block">/ session</span>
                </div>
              </div>
            </div>

          </div>

          {/* Pricing Policy Footnote */}
          <div className="bg-[#0d0d0d] border border-white/10 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-300">
            <div className="flex items-center gap-2 text-center md:text-left">
              <Calendar size={16} className="text-[#C5A059] shrink-0" />
              <span className="font-oswald uppercase font-bold text-gray-200">
                Price revised from 27 Dec 2025.
              </span>
            </div>
            <div className="flex items-center gap-2 text-center md:text-left">
              <Info size={16} className="text-[#C5A059] shrink-0" />
              <span>
                Full package amount will be confirmed during enquiry based on the selected package, training arrangement and availability.
              </span>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: WHAT AFFECTS PERSONAL TRAINER COST? ── */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <span className="text-[#C5A059] font-oswald text-xs uppercase tracking-widest font-bold block mb-1">
              Pricing Factors
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-oswald uppercase tracking-wide text-white">
              What Affects Personal Trainer Cost?
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto mt-2">
              Understanding the key variables that influence personal fitness coaching investments across Singapore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Factor 1 */}
            <div className="bg-[#090909] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#800020]/30 border border-[#800020] flex items-center justify-center shrink-0 text-[#C5A059] font-oswald font-bold text-sm">
                  01
                </div>
                <div>
                  <h3 className="font-oswald font-bold uppercase text-white text-base mb-1">
                    Trainer Experience and Professional Background
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    A trainer with 24 years of real coaching practice, clinical corrective exercise knowledge, and international certifications (NASM, FMT, TRX) brings proven safety and faster results compared to recently certified novices.
                  </p>
                </div>
              </div>
            </div>

            {/* Factor 2 */}
            <div className="bg-[#090909] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#800020]/30 border border-[#800020] flex items-center justify-center shrink-0 text-[#C5A059] font-oswald font-bold text-sm">
                  02
                </div>
                <div>
                  <h3 className="font-oswald font-bold uppercase text-white text-base mb-1">
                    Training Goal and Programme Complexity
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    Clients addressing complex needs—such as postural corrections, slip disc management, senior mobility, or medical weight loss—require customized programming and heightened vigilance compared to generic workouts.
                  </p>
                </div>
              </div>
            </div>

            {/* Factor 3 */}
            <div className="bg-[#090909] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#800020]/30 border border-[#800020] flex items-center justify-center shrink-0 text-[#C5A059] font-oswald font-bold text-sm">
                  03
                </div>
                <div>
                  <h3 className="font-oswald font-bold uppercase text-white text-base mb-1">
                    Training Frequency Per Week
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    Whether you train 1, 2, or 3 times per week dictates the total speed of adaptation, schedule reservation, and accountability checkpoints needed for consistent bodily transformations.
                  </p>
                </div>
              </div>
            </div>

            {/* Factor 4 */}
            <div className="bg-[#090909] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#800020]/30 border border-[#800020] flex items-center justify-center shrink-0 text-[#C5A059] font-oswald font-bold text-sm">
                  04
                </div>
                <div>
                  <h3 className="font-oswald font-bold uppercase text-white text-base mb-1">
                    Training Location and Arrangement
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    Training in your own condominium gym or private home saves you commute hours and commercial gym fees. Trainer travel logistics and dedicated scheduling are factored into off-site sessions.
                  </p>
                </div>
              </div>
            </div>

            {/* Factor 5 */}
            <div className="bg-[#090909] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#800020]/30 border border-[#800020] flex items-center justify-center shrink-0 text-[#C5A059] font-oswald font-bold text-sm">
                  05
                </div>
                <div>
                  <h3 className="font-oswald font-bold uppercase text-white text-base mb-1">
                    Single or Couple Training
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    Partner or couple training offers an attractive per-person savings (e.g. $144 vs $96 per person for Starter), providing exceptional value while motivating each other as a workout pair.
                  </p>
                </div>
              </div>
            </div>

            {/* Factor 6 */}
            <div className="bg-[#090909] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#800020]/30 border border-[#800020] flex items-center justify-center shrink-0 text-[#C5A059] font-oswald font-bold text-sm">
                  06
                </div>
                <div>
                  <h3 className="font-oswald font-bold uppercase text-white text-base mb-1">
                    Package Size and Commitment Level
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    Larger packages lower the per-session cost significantly—reducing the single session rate from $136 (Foundation 12) down to $96 (Signature 60). Higher commitment rewards long-term savings.
                  </p>
                </div>
              </div>
            </div>

            {/* Factor 7 */}
            <div className="bg-[#090909] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all md:col-span-2">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#800020]/30 border border-[#800020] flex items-center justify-center shrink-0 text-[#C5A059] font-oswald font-bold text-sm">
                  07
                </div>
                <div>
                  <h3 className="font-oswald font-bold uppercase text-white text-base mb-1">
                    Trial Session and Assessment Needs
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    Comprehensive movement screening, posture assessment, and consultation ensure training begins safely and precisely. At PersonalTrainer.sg, trial session fees are 100% waivable upon immediate package sign-up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: WHY CHOOSE PERSONALTRAINER.SG? ── */}
        <section className="mb-16 sm:mb-20 bg-[#090909] border border-[#C5A059]/30 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#C5A059] font-oswald text-xs uppercase tracking-widest font-bold block mb-1">
              The Gold Standard in Singapore Fitness
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-oswald uppercase tracking-wide text-white">
              Why Choose PersonalTrainer.sg?
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm mt-2">
              Results-focused personal training backed by twenty-four years of dedicated service to Singapore residents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-[#0f0f0f] border border-white/5">
              <div className="text-[#C5A059] mb-3">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="font-oswald font-bold uppercase text-white text-base mb-2">
                Trusted in Singapore Since 2002
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Over two continuous decades guiding clients toward body transformation, cardiovascular stamina, and vitality across Singapore.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0f0f0f] border border-white/5">
              <div className="text-[#C5A059] mb-3">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="font-oswald font-bold uppercase text-white text-base mb-2">
                24 Years of Coaching Experience
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Led by Md Salaudin Adam (DONN), Founder and Fitness Director. You train under seasoned expertise rather than rotating junior staff.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0f0f0f] border border-white/5">
              <div className="text-[#C5A059] mb-3">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="font-oswald font-bold uppercase text-white text-base mb-2">
                2,000+ Clients Trained Since 2002
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Extensive proven track record transforming bodies, relieving chronic muscular imbalances, and rejuvenating active lifestyles.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0f0f0f] border border-white/5">
              <div className="text-[#C5A059] mb-3">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="font-oswald font-bold uppercase text-white text-base mb-2">
                Structured Coaching System
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Guided by the DONN Elite Performance System (DEPS) featuring progressive movement preparation, core activation, and conditioning.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0f0f0f] border border-white/5">
              <div className="text-[#C5A059] mb-3">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="font-oswald font-bold uppercase text-white text-base mb-2">
                Personalised Training Programme
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Zero generic cookie-cutter routines. Workouts are calibrated to your posture, biomechanics, schedule, and recovery profile.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0f0f0f] border border-white/5">
              <div className="text-[#C5A059] mb-3">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-oswald font-bold uppercase text-white text-base mb-2">
                Safe Progression & Multi-Discipline Support
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Specialized in weight loss, strength training, senior fitness, couple training, and long-term lifestyle transformation.
              </p>
            </div>
          </div>

          {/* Credentials Badge Banner */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="font-oswald text-xs uppercase tracking-widest text-gray-400 mb-2">
              Recognised Professional Accreditations
            </p>
            <p className="font-oswald font-bold text-[#C5A059] text-sm sm:text-base tracking-wider uppercase">
              NASM • SOE • TRX • FMT • CPR • AED — IF RESULTS MATTERS
            </p>
          </div>
        </section>

        {/* ── FINAL CTA SECTION ── */}
        <section className="mb-16 sm:mb-20 bg-gradient-to-r from-[#190508] via-[#0d0d0d] to-[#190508] border-2 border-[#C5A059] rounded-2xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-black font-oswald uppercase tracking-wide text-white mb-3">
              Not Sure Which Package Is Suitable?
            </h2>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-6 font-sans">
              Send a WhatsApp message with your goal, preferred location, schedule and current fitness condition. PersonalTrainer.sg will recommend the most suitable training arrangement for you.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-xl font-oswald uppercase tracking-wider font-bold text-base sm:text-lg bg-[#C5A059] text-black hover:bg-[#d4af37] transition-all duration-300 shadow-2xl hover:scale-105"
            >
              <WhatsAppIcon className="w-6 h-6 text-black shrink-0" />
              <span>WhatsApp PersonalTrainer.sg</span>
            </a>
            <p className="text-gray-400 text-xs mt-3">
              Fast response • Direct consultation with Founder DONN (+65 9108 1781)
            </p>
          </div>
        </section>

        {/* ── INTERNAL LINKS SECTION ── */}
        <section className="border-t border-white/10 pt-10 pb-4">
          <div className="mb-6 text-center md:text-left">
            <span className="text-xs font-oswald uppercase tracking-widest text-[#C5A059] font-bold block mb-1">
              Explore PersonalTrainer.sg
            </span>
            <h3 className="font-oswald text-xl font-bold uppercase text-white">
              Related Services & Resources
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs sm:text-sm font-oswald uppercase">
            <Link
              href="/rates"
              className="p-3 bg-[#0a0a0a] border border-white/10 rounded-lg text-gray-300 hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-colors flex items-center justify-between"
            >
              <span>Rates Page</span>
              <ArrowRight size={14} className="text-[#C5A059]" />
            </Link>

            <Link
              href="/services#personal-training"
              className="p-3 bg-[#0a0a0a] border border-white/10 rounded-lg text-gray-300 hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-colors flex items-center justify-between"
            >
              <span>Personal Training</span>
              <ArrowRight size={14} className="text-[#C5A059]" />
            </Link>

            <Link
              href="/services#couple-training"
              className="p-3 bg-[#0a0a0a] border border-white/10 rounded-lg text-gray-300 hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-colors flex items-center justify-between"
            >
              <span>Couple Training</span>
              <ArrowRight size={14} className="text-[#C5A059]" />
            </Link>

            <Link
              href="/services#weight-loss"
              className="p-3 bg-[#0a0a0a] border border-white/10 rounded-lg text-gray-300 hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-colors flex items-center justify-between"
            >
              <span>Weight Loss Training</span>
              <ArrowRight size={14} className="text-[#C5A059]" />
            </Link>

            <Link
              href="/services#strength-training"
              className="p-3 bg-[#0a0a0a] border border-white/10 rounded-lg text-gray-300 hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-colors flex items-center justify-between"
            >
              <span>Strength Training</span>
              <ArrowRight size={14} className="text-[#C5A059]" />
            </Link>

            <Link
              href="/strength-training-medical-weight-loss-singapore"
              className="p-3 bg-[#0a0a0a] border border-white/10 rounded-lg text-gray-300 hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-colors flex items-center justify-between"
            >
              <span>Medical Weight Loss Training</span>
              <ArrowRight size={14} className="text-[#C5A059]" />
            </Link>

            <Link
              href="/about#faq"
              className="p-3 bg-[#0a0a0a] border border-white/10 rounded-lg text-gray-300 hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-colors flex items-center justify-between"
            >
              <span>FAQ Section</span>
              <ArrowRight size={14} className="text-[#C5A059]" />
            </Link>

            <Link
              href="/contact"
              className="p-3 bg-[#0a0a0a] border border-white/10 rounded-lg text-gray-300 hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-colors flex items-center justify-between"
            >
              <span>Contact Page</span>
              <ArrowRight size={14} className="text-[#C5A059]" />
            </Link>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer id="contact" className="bg-[#030303] py-14 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-white/5 pb-10 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/logopt.avif"
                  alt="PersonalTrainer.sg Logo"
                  className="h-10 w-auto"
                />
                <div className="flex flex-col text-left">
                  <span className="text-white uppercase font-oswald font-extrabold text-base">PERSONALTRAINER.SG</span>
                  <span className="uppercase font-oswald text-[10px] text-[#C5A059]">Trusted in Singapore Since 2002</span>
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed mb-3">
                Led by Md Salaudin Adam (DONN)
              </p>
              <ul className="text-gray-400 text-[11px] space-y-1 mb-4 font-sans">
                <li>• Founder and Fitness Director</li>
                <li>• Transformation Specialist</li>
                <li>• Trusted in Singapore Since 2002</li>
                <li>• 24 Years of Coaching Experience</li>
              </ul>
              <div className="flex gap-2">
                <a href="https://www.facebook.com/personaltrainer.sg/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 text-black flex items-center justify-center hover:bg-white transition-colors duration-300 rounded bg-[#C5A059]">
                  <Facebook size={14} />
                </a>
                <a href="https://www.instagram.com/personaltrainer.sg/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 text-black flex items-center justify-center hover:bg-white transition-colors duration-300 rounded bg-[#C5A059]">
                  <Instagram size={14} />
                </a>
                <a href="https://www.tiktok.com/@personaltrainer.sg" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-8 h-8 text-black flex items-center justify-center hover:bg-white transition-colors duration-300 rounded bg-[#C5A059]">
                  <TikTokIcon size={14} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-oswald text-base font-bold text-white mb-4 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2 text-xs text-gray-300 font-oswald">
                {[
                  { name: "Home", url: "/" },
                  { name: "About Us", url: "/about" },
                  { name: "Services", url: "/services" },
                  { name: "Rates", url: "/rates" },
                  { name: "Results", url: "/results" },
                  { name: "Contact Us", url: "/contact" }
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.url} className="hover:text-[#C5A059] transition-colors duration-300 uppercase tracking-widest text-[11px]">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-oswald text-base font-bold text-white mb-4 uppercase tracking-wider">Open Hours</h4>
              <p className="text-gray-400 text-xs tracking-wide font-oswald uppercase leading-relaxed">
                PersonalTrainer.sg operates by appointment only. Training sessions are arranged based on trainer availability, client schedule, location suitability and confirmed booking.
              </p>
            </div>

            <div>
              <h4 className="font-oswald text-base font-bold text-white mb-4 uppercase tracking-wider">Contact Info</h4>
              <ul className="space-y-2.5 text-xs text-gray-300 font-sans">
                <li className="flex items-center gap-2">
                  <Phone size={14} className="shrink-0 text-[#C5A059]" />
                  <a href="https://wa.me/6591081781" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">
                    +65 9108 1781
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={14} className="shrink-0 text-[#C5A059]" />
                  <a href="mailto:donn@personaltrainer.sg" className="hover:text-[#C5A059] transition-colors">
                    donn@personaltrainer.sg
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center text-gray-500 text-[11px] font-sans">
            <p>© {new Date().getFullYear()} PersonalTrainer.sg. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
