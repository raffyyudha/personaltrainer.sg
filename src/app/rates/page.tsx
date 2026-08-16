"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import TikTokIcon from "@/components/TikTokIcon";
import {
  Facebook,
  Instagram,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
  Menu,
  X,
  ChevronDown,
  User,
  Shield,
  Award,
  Clock,
  MapPin,
  Check,
  Dumbbell,
  HelpCircle
} from "lucide-react";

const ScrollReveal = ({
  children,
  className = "reveal-hidden",
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <div className={className} data-delay={delay > 0 ? delay : undefined}>
      {children}
    </div>
  );
};

const menuItems = [
  {
    name: "Home",
    url: "/"
  },
  {
    name: "About Us",
    url: "/about",
    submenu: [
      { name: "DONN’s Elite Performance System (DEPS)", url: "/about#system" },
      { name: "FAQ", url: "/about#faq" }
    ]
  },
  {
    name: "Services",
    url: "/services",
    submenu: [
      { name: "Personal Training", url: "/services#personal-training" },
      { name: "Couple Training", url: "/services#couple-training" },
      { name: "Weight Loss Training", url: "/services#weight-loss" },
      { name: "Strength Training", url: "/services#strength-training" },
      { name: "Kickboxing Fitness", url: "/services#kickboxing" },
      { name: "Home and Condo Gym Training", url: "/services#home-condo-training" },
      { name: "Gym Management", url: "/services#gym-management" },
      { name: "Senior Fitness Training", url: "/services#senior-fitness" },
      { name: "Corporate Wellness", url: "/services#corporate-wellness" },
      { name: "Fitness Calculator", url: "/services#fitness-calculator" },
      { name: "Rates", url: "/rates" }
    ]
  },
  {
    name: "Results",
    url: "/results",
    submenu: [
      { name: "Client Transformations", url: "/results#transformations" },
      { name: "Testimonials", url: "/results#testimonials" },
      { name: "Gallery", url: "/results#gallery" }
    ]
  },
  {
    name: "Contact Us",
    url: "/contact",
    submenu: [
      { name: "Book a Trial Session", url: "/contact#trial" },
      { name: "WhatsApp Enquiry", url: "https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Personal%20Training.%20Can%20you%20advise%20on%20availability%20and%20Trial%20Session%3F" }
    ]
  }
];

export default function RatesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#800020] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Top Utility Bar */}
      <div className="bg-[#050505] border-b border-white/10 py-2 px-6 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs text-white">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-[#C5A059]" />
              <a href="https://wa.me/6591081781" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">
                +65 9108 1781
              </a>
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} className="text-[#C5A059]" />
              <a href="mailto:info@personaltrainer.sg" className="hover:text-[#C5A059] transition-colors">
                info@personaltrainer.sg
              </a>
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-oswald uppercase tracking-wider text-[#C5A059]">
            <span>Trusted in Singapore Since 2002</span>
            <span>•</span>
            <span>24 Years Coaching Experience</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <Navbar activePage="services" />

      {/* Hero Banner Section */}
      <section className="relative py-20 bg-[#0d0d0d] border-b border-white/5 text-center overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <ScrollReveal className="reveal-hidden">
            <span className="section-label justify-center">
              <Award size={16} className="text-[#C5A059]" /> PRICING & INVESTMENT
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black font-syne uppercase tracking-tight mb-6 leading-tight">
              Personal Training Rates <br />
              <span className="text-[#800020]">in Singapore</span>
            </h1>
            <p className="text-white text-base md:text-lg max-w-3xl mx-auto mb-8 leading-relaxed font-sans font-normal">
              Invest in your health, strength, body transformation and long-term confidence with structured 1-on-1 coaching led by Md Salaudin Adam (DONN), Founder & Fitness Director with 24 Years of Coaching Experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20would%20like%20to%20enquire%20about%20Personal%20Training%20rates%20and%20packages."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                <span>WhatsApp PersonalTrainer.sg</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <Link href="/contact#trial" className="btn-outline">
                <span>Book a Trial Session</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Moving Red Strip Section */}
      <div className="w-full bg-[#800020] py-4 sm:py-5 overflow-hidden border-t border-b border-[#C5A059]/30 whitespace-nowrap flex select-none relative z-20 shadow-md">
        <div className="animate-marquee flex items-center shrink-0">
          {[1, 2].map((groupKey) => (
            <div key={groupKey} className="flex items-center shrink-0 font-oswald font-extrabold uppercase tracking-wider text-white text-base sm:text-lg md:text-xl">
              <span className="mx-3 sm:mx-5">IF RESULTS MATTERS</span>
              <span className="text-[#C5A059] font-black">•</span>
              <span className="mx-3 sm:mx-5">TRUSTED IN SINGAPORE SINCE 2002</span>
              <span className="text-[#C5A059] font-black">•</span>
              <span className="mx-3 sm:mx-5">24 YEARS OF COACHING EXPERIENCE</span>
              <span className="text-[#C5A059] font-black">•</span>
              <span className="mx-3 sm:mx-5">PREMIUM PERSONAL TRAINING</span>
              <span className="text-[#C5A059] font-black">•</span>
              <span className="mx-3 sm:mx-5">WEIGHT LOSS TRAINING</span>
              <span className="text-[#C5A059] font-black">•</span>
              <span className="mx-3 sm:mx-5">STRENGTH TRAINING</span>
              <span className="text-[#C5A059] font-black">•</span>
              <span className="mx-3 sm:mx-5">SENIOR FITNESS TRAINING</span>
              <span className="text-[#C5A059] font-black">•</span>
              <span className="mx-3 sm:mx-5">COUPLE TRAINING</span>
              <span className="text-[#C5A059] font-black">•</span>
              <span className="mx-3 sm:mx-5">DISCIPLINE</span>
              <span className="text-[#C5A059] font-black">•</span>
              <span className="mx-3 sm:mx-5">STRUCTURE</span>
              <span className="text-[#C5A059] font-black">•</span>
              <span className="mx-3 sm:mx-5">ACCOUNTABILITY</span>
              <span className="text-[#C5A059] font-black">•</span>
              <span className="mx-3 sm:mx-5">REAL RESULTS</span>
              <span className="text-[#C5A059] font-black">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Trial Session Card Feature */}
      <section className="py-16 px-6 md:px-12 max-w-5xl mx-auto">
        <ScrollReveal className="reveal-hidden">
          <div className="bg-[#0d0d0d] border-2 border-[#C5A059]/60 p-8 sm:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#800020] text-white text-xs font-oswald font-extrabold uppercase px-6 py-2 rounded-bl-xl tracking-widest">
              TRIAL SESSION DETAILS
            </div>
            <h2 className="font-oswald text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-white mb-6">
              Start With a 90-Minute Trial Session
            </h2>
            <div className="space-y-4 text-white text-base sm:text-lg leading-relaxed font-sans font-normal">
              <p>
                The trial session is approximately 90 minutes.
              </p>
              <p>
                It includes around 30 minutes of assessment and consultation, followed by around 60 minutes of training.
              </p>
              <div className="bg-black/80 border-l-4 border-[#C5A059] p-6 rounded-r-xl space-y-3 mt-4">
                <p className="text-[#C5A059] font-oswald font-bold uppercase tracking-wider text-lg">
                  Trial Session Terms & Conditions:
                </p>
                <p className="text-white text-base">
                  The trial session is free only if the client signs up for a minimum 12 session package immediately after the trial session.
                </p>
                <p className="text-gray-300 text-sm font-semibold">
                  If the client decides not to continue after the trial, the trial session fee is $144.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20would%20like%20to%20book%20a%2090-minute%20Trial%20Session."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center group"
              >
                <span>WhatsApp PersonalTrainer.sg</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <Link href="/contact#trial" className="btn-outline text-center">
                <span>Book a Trial Session</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Factors Affecting Rates & Package Value */}
      <section className="py-16 px-6 md:px-12 bg-[#050505] border-t border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="reveal-hidden">
            <div className="text-center mb-16">
              <span className="section-label justify-center">
                <Shield size={16} className="text-[#C5A059]" /> TRANSPARENT APPROACH
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-4 font-syne">
                What Determines Personal Training Cost?
              </h2>
              <p className="text-gray-200 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed font-normal">
                Rather than generic, mass-market gym memberships, PersonalTrainer.sg offers dedicated, 1-on-1 structured coaching tailored around your body, schedule and training location.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal className="reveal-hidden">
              <div className="bg-[#0d0d0d] border border-white/10 p-8 rounded-xl h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#800020]/20 border border-[#800020] flex items-center justify-center mb-6">
                    <MapPin className="text-[#C5A059]" size={24} />
                  </div>
                  <h3 className="font-oswald text-xl font-bold uppercase text-white mb-3">Location & Setup</h3>
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-sans font-normal">
                    Training arranged at your condo gym, selected ActiveSG gyms, approved private gym spaces or doorstep home training across Singapore with equipment provided.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="reveal-hidden" delay={150}>
              <div className="bg-[#0d0d0d] border border-white/10 p-8 rounded-xl h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#800020]/20 border border-[#800020] flex items-center justify-center mb-6">
                    <Clock className="text-[#C5A059]" size={24} />
                  </div>
                  <h3 className="font-oswald text-xl font-bold uppercase text-white mb-3">Structure & Accountability</h3>
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-sans font-normal">
                    Packages are customized according to your training frequency per week (1x, 2x, or 3x) and target objectives (Weight Loss, Strength, Senior Fitness, Couple Training).
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="reveal-hidden" delay={300}>
              <div className="bg-[#0d0d0d] border border-white/10 p-8 rounded-xl h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#800020]/20 border border-[#800020] flex items-center justify-center mb-6">
                    <Award className="text-[#C5A059]" size={24} />
                  </div>
                  <h3 className="font-oswald text-xl font-bold uppercase text-white mb-3">Coaching Expertise</h3>
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-sans font-normal">
                    Direct coaching from Founder Md Salaudin Adam (DONN), NASM & TRX Certified Transformation Specialist with 24 Years of Coaching Experience in Singapore.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Official Personal Training Rate Schedule Table */}
      <section id="official-rates" className="py-16 px-6 md:px-12 max-w-5xl mx-auto">
        <ScrollReveal className="reveal-hidden">
          <div className="text-center mb-10">
            <span className="section-label justify-center mb-3">
              <Award size={16} className="text-[#C5A059]" /> OFFICIAL RATE CARD
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-4 font-syne text-white">
              Official Personal Training Rates
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-sans font-normal">
              Structured 1-on-1 and Couple Personal Training session rates in Singapore.
            </p>
          </div>

          {/* Rate Table Container matching Official Graphic */}
          <div className="bg-[#0e0e0e] border-2 border-[#C5A059]/60 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden relative">
            
            {/* Header Badge */}
            <div className="text-center mb-6 pb-6 border-b border-white/10">
              <h3 className="font-oswald text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-wider flex items-center justify-center gap-2">
                <span>PERSONALTRAINER<span className="text-[#C5A059]">.SG</span></span>
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#C5A059] font-oswald font-bold mt-1">
                IF RESULTS MATTERS
              </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-white font-oswald text-base sm:text-lg uppercase tracking-wider">
                    <th className="py-3 px-4 font-black">Package</th>
                    <th className="py-3 px-4 text-center font-black">Single</th>
                    <th className="py-3 px-4 text-center font-black">Couple</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 font-sans text-sm sm:text-base">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white font-oswald text-base sm:text-lg">Trial</td>
                    <td className="py-3.5 px-4 text-center font-bold text-white font-oswald text-base sm:text-lg">$144</td>
                    <td className="py-3.5 px-4 text-center font-bold text-white font-oswald text-base sm:text-lg">$216</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white font-oswald text-base sm:text-lg">Starter</td>
                    <td className="py-3.5 px-4 text-center font-bold text-white font-oswald text-base sm:text-lg">$96</td>
                    <td className="py-3.5 px-4 text-center font-bold text-white font-oswald text-base sm:text-lg">$144</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white font-oswald text-base sm:text-lg">12 Sessions</td>
                    <td className="py-3.5 px-4 text-center font-bold text-white font-oswald text-base sm:text-lg">$136 <span className="text-xs text-gray-400 block font-sans font-normal">/ sess ($1,632 total)</span></td>
                    <td className="py-3.5 px-4 text-center font-bold text-white font-oswald text-base sm:text-lg">$204 <span className="text-xs text-gray-400 block font-sans font-normal">/ sess ($2,448 total)</span></td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white font-oswald text-base sm:text-lg">24 Sessions</td>
                    <td className="py-3.5 px-4 text-center font-bold text-white font-oswald text-base sm:text-lg">$126 <span className="text-xs text-gray-400 block font-sans font-normal">/ sess ($3,024 total)</span></td>
                    <td className="py-3.5 px-4 text-center font-bold text-white font-oswald text-base sm:text-lg">$189 <span className="text-xs text-gray-400 block font-sans font-normal">/ sess ($4,536 total)</span></td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white font-oswald text-base sm:text-lg">36 Sessions</td>
                    <td className="py-3.5 px-4 text-center font-bold text-white font-oswald text-base sm:text-lg">$116 <span className="text-xs text-gray-400 block font-sans font-normal">/ sess ($4,176 total)</span></td>
                    <td className="py-3.5 px-4 text-center font-bold text-white font-oswald text-base sm:text-lg">$174 <span className="text-xs text-gray-400 block font-sans font-normal">/ sess ($6,264 total)</span></td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white font-oswald text-base sm:text-lg">48 Sessions</td>
                    <td className="py-3.5 px-4 text-center font-bold text-white font-oswald text-base sm:text-lg">$106 <span className="text-xs text-gray-400 block font-sans font-normal">/ sess ($5,088 total)</span></td>
                    <td className="py-3.5 px-4 text-center font-bold text-white font-oswald text-base sm:text-lg">$159 <span className="text-xs text-gray-400 block font-sans font-normal">/ sess ($7,632 total)</span></td>
                  </tr>
                  <tr className="bg-emerald-950/40 border-2 border-emerald-500/50 hover:bg-emerald-900/30 transition-colors">
                    <td className="py-4 px-4 font-black text-emerald-400 font-oswald text-lg sm:text-xl flex items-center gap-2">
                      <span>60 Sessions</span>
                      <span className="bg-emerald-500 text-black text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider font-sans">Best Rate</span>
                    </td>
                    <td className="py-4 px-4 text-center font-black text-emerald-400 font-oswald text-xl sm:text-2xl">$96 <span className="text-xs text-emerald-300/80 block font-sans font-normal">/ sess ($5,760 total)</span></td>
                    <td className="py-4 px-4 text-center font-black text-emerald-400 font-oswald text-xl sm:text-2xl">$144 <span className="text-xs text-emerald-300/80 block font-sans font-normal">/ sess ($8,640 total)</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Footer Date Revision Notice */}
            <div className="mt-6 pt-4 border-t border-white/10 text-center">
              <p className="text-xs sm:text-sm text-gray-300 font-oswald uppercase tracking-wider">
                Price revised from <strong className="text-white font-bold">27 DEC 2025</strong>
              </p>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* Package Options Breakdown */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <ScrollReveal className="reveal-hidden">
          <div className="text-center mb-16">
            <span className="section-label justify-center">
              <Dumbbell size={16} className="text-[#C5A059]" /> TAILORED PACKAGES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-4 font-syne">
              Personalised Coaching Packages
            </h2>
            <p className="text-gray-200 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed font-normal">
              We recommend discussing your goals during an initial free consultation or trial session so we can suggest the most effective package for your needs.
            </p>
          </div>
        </ScrollReveal>

        {/* All Packages Grid */}
        <div className="space-y-12">
          
          {/* Row 1: 12 Sessions & 24 Sessions */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            
            {/* Package 1: 12 Sessions */}
            <ScrollReveal className="reveal-hidden">
              <div className="bg-[#0d0d0d] border border-white/10 p-8 rounded-xl flex flex-col justify-between hover:border-[#C5A059]/40 transition-all duration-300 h-full">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-2 font-oswald">12 Sessions Package</span>
                  <h3 className="font-oswald text-2xl sm:text-3xl font-bold uppercase text-white mb-2">12 Sessions Foundation</h3>
                  <div className="my-4 border-y border-white/10 py-4 grid grid-cols-2 gap-4 text-center">
                    <div>
                      <span className="text-xs text-gray-400 font-oswald uppercase block">Single Rate</span>
                      <span className="text-3xl font-extrabold font-oswald text-white">$136 <span className="text-xs text-gray-400 font-sans font-normal">/sess</span></span>
                      <span className="text-xs text-[#C5A059] block font-oswald mt-0.5">$1,632 total</span>
                    </div>
                    <div className="border-l border-white/10 pl-4">
                      <span className="text-xs text-gray-400 font-oswald uppercase block">Couple Rate</span>
                      <span className="text-3xl font-extrabold font-oswald text-white">$204 <span className="text-xs text-gray-400 font-sans font-normal">/sess</span></span>
                      <span className="text-xs text-[#C5A059] block font-oswald mt-0.5">$2,448 total</span>
                    </div>
                  </div>
                  <p className="text-gray-200 text-xs leading-relaxed font-sans mb-3 font-semibold">
                    Includes initial InBody Analysis Screening Report:
                  </p>
                  <ul className="space-y-2 text-xs text-gray-300 font-sans mb-6">
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Present, Appropriate & Target Weight</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Overall Body Fat %, Body Age & RMR</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Goal Setting & Nutrition Plan</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Once In 3 Weeks InBody Tracking</li>
                  </ul>
                </div>
                <a
                  href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20would%20like%20to%20enquire%20about%20the%2012-Session%20Package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center block text-xs"
                >
                  Enquire 12-Session Package
                </a>
              </div>
            </ScrollReveal>

            {/* Package 2: 24 Sessions */}
            <ScrollReveal className="reveal-hidden" delay={150}>
              <div className="bg-[#0d0d0d] border border-white/10 p-8 rounded-xl flex flex-col justify-between hover:border-[#C5A059]/40 transition-all duration-300 h-full">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-2 font-oswald">24 Sessions Package</span>
                  <h3 className="font-oswald text-2xl sm:text-3xl font-bold uppercase text-white mb-2">24 Sessions Progress</h3>
                  <div className="my-4 border-y border-white/10 py-4 grid grid-cols-2 gap-4 text-center">
                    <div>
                      <span className="text-xs text-gray-400 font-oswald uppercase block">Single Rate</span>
                      <span className="text-3xl font-extrabold font-oswald text-white">$126 <span className="text-xs text-gray-400 font-sans font-normal">/sess</span></span>
                      <span className="text-xs text-[#C5A059] block font-oswald mt-0.5">$3,024 total</span>
                    </div>
                    <div className="border-l border-white/10 pl-4">
                      <span className="text-xs text-gray-400 font-oswald uppercase block">Couple Rate</span>
                      <span className="text-3xl font-extrabold font-oswald text-white">$189 <span className="text-xs text-gray-400 font-sans font-normal">/sess</span></span>
                      <span className="text-xs text-[#C5A059] block font-oswald mt-0.5">$4,536 total</span>
                    </div>
                  </div>
                  <p className="text-gray-200 text-xs leading-relaxed font-sans mb-3 font-semibold">
                    Includes initial InBody Analysis Screening Report:
                  </p>
                  <ul className="space-y-2 text-xs text-gray-300 font-sans mb-6">
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Full Body Fat % & Muscle Mass Report</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Customised Nutrition & Dietary Plan</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Weight Loss & Resistance Guidance</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Once In 3 Weeks InBody Tracking</li>
                  </ul>
                </div>
                <a
                  href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20would%20like%20to%20enquire%20about%20the%2024-Session%20Package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center block text-xs"
                >
                  Enquire 24-Session Package
                </a>
              </div>
            </ScrollReveal>

          </div>

          {/* Row 2: 36, 48, and 60 Sessions */}
          <div className="grid md:grid-cols-3 gap-8 items-stretch pt-6 border-t border-white/10">
            
            {/* Package 3: 36 Sessions */}
            <ScrollReveal className="reveal-hidden">
              <div className="bg-[#0d0d0d] border border-white/10 p-8 rounded-xl flex flex-col justify-between hover:border-[#C5A059]/40 transition-all duration-300 h-full">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-2 font-oswald">36 Sessions Package</span>
                  <h3 className="font-oswald text-2xl font-bold uppercase text-white mb-2">36 Sessions Transformation</h3>
                  <div className="my-4 border-y border-white/10 py-3 text-center">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-400 font-oswald uppercase">Single:</span>
                      <span className="text-xl font-bold font-oswald text-white">$116 <span className="text-xs text-gray-400 font-normal">/sess ($4,176)</span></span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400 font-oswald uppercase">Couple:</span>
                      <span className="text-xl font-bold font-oswald text-white">$174 <span className="text-xs text-gray-400 font-normal">/sess ($6,264)</span></span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-xs text-gray-300 font-sans mb-6">
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Initial InBody Analysis Screening Report</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Personalised Training Program & Goal Setting</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Nutrition & Dietary Plan + Weight Loss Advice</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Before & After Professional Photographs</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Fortnightly InBody Analysis Tracking</li>
                  </ul>
                </div>
                <a
                  href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20would%20like%20to%20enquire%20about%20the%2036-Session%20Package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center block text-xs"
                >
                  Enquire 36-Session Package
                </a>
              </div>
            </ScrollReveal>

            {/* Package 4: 48 Sessions */}
            <ScrollReveal className="reveal-hidden" delay={150}>
              <div className="bg-[#0d0d0d] border border-white/10 p-8 rounded-xl flex flex-col justify-between hover:border-[#C5A059]/40 transition-all duration-300 h-full">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-2 font-oswald">48 Sessions Package</span>
                  <h3 className="font-oswald text-2xl font-bold uppercase text-white mb-2">48 Sessions Turbo Charge</h3>
                  <div className="my-4 border-y border-white/10 py-3 text-center">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-400 font-oswald uppercase">Single:</span>
                      <span className="text-xl font-bold font-oswald text-white">$106 <span className="text-xs text-gray-400 font-normal">/sess ($5,088)</span></span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400 font-oswald uppercase">Couple:</span>
                      <span className="text-xl font-bold font-oswald text-white">$159 <span className="text-xs text-gray-400 font-normal">/sess ($7,632)</span></span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-xs text-gray-300 font-sans mb-6">
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Initial InBody Analysis Screening Report</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Personalised Training Program & Goal Setting</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Nutrition & Dietary Plan + Weight Loss Advice</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Before & After Professional Photographs</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Fortnightly InBody Analysis Tracking</li>
                  </ul>
                </div>
                <a
                  href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20would%20like%20to%20enquire%20about%20the%2048-Session%20Package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center block text-xs"
                >
                  Enquire 48-Session Package
                </a>
              </div>
            </ScrollReveal>

            {/* Package 5: 60 Sessions (BEST RATE) */}
            <ScrollReveal className="reveal-hidden" delay={300}>
              <div className="bg-[#0d0d0d] border-2 border-emerald-500/60 p-8 rounded-xl flex flex-col justify-between shadow-2xl relative h-full">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-black text-[10px] font-oswald font-extrabold uppercase px-4 py-1 rounded-full tracking-widest shadow-md">
                  BEST VALUE • $96 / SESS
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold block mb-2 font-oswald">60 Sessions Package</span>
                  <h3 className="font-oswald text-2xl font-bold uppercase text-white mb-2">60 Sessions Signature</h3>
                  <div className="my-4 border-y border-emerald-500/20 py-3 text-center bg-emerald-950/20 rounded px-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-emerald-300 font-oswald uppercase font-bold">Single:</span>
                      <span className="text-xl font-bold font-oswald text-emerald-400">$96 <span className="text-xs text-emerald-300/80 font-normal">/sess ($5,760)</span></span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-emerald-300 font-oswald uppercase font-bold">Couple:</span>
                      <span className="text-xl font-bold font-oswald text-emerald-400">$144 <span className="text-xs text-emerald-300/80 font-normal">/sess ($8,640)</span></span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-xs text-gray-200 font-sans mb-6">
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-400" /> Complete InBody Screening & Body Age Report</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-400" /> Full Personalised Training Program & Goal Setting</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-400" /> Advanced Nutrition & Dietary Guidance</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-400" /> Before & After Transformation Photo Suite</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-400" /> Weekly InBody Analysis Tracking</li>
                  </ul>
                </div>
                <a
                  href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20would%20like%20to%20enquire%20about%20the%2060-Session%20Signature%20Package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 text-center font-bold tracking-wider font-oswald uppercase text-xs transition-all duration-300 bg-emerald-500 text-black hover:bg-emerald-400 rounded-lg block"
                >
                  Enquire 60-Session Package
                </a>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* CTA Direct Enquiry Banner */}
      <section className="py-20 px-6 md:px-12 bg-[#0c0c0c] border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="reveal-hidden">
            <h2 className="text-3xl md:text-5xl font-black uppercase font-syne mb-6">
              Ready to Discuss Your Fitness Goals?
            </h2>
            <p className="text-white text-base max-w-2xl mx-auto mb-8 leading-relaxed font-sans">
              Send us a message on WhatsApp with your target goal, location and schedule. We will recommend the best training arrangement for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20ready%20to%20discuss%20my%20fitness%20goals%20and%20rates."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                <span>WhatsApp PersonalTrainer.sg</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <Link href="/contact#trial" className="btn-outline">
                <span>Book a Trial Session</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="bg-[#050505] py-16 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/5 pb-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/logopt.png"
                  alt="PersonalTrainer.sg"
                  className="h-12 w-auto logo-glow"
                />
                <div className="flex flex-col text-left">
                  <span className="text-white uppercase font-oswald font-extrabold text-lg">PERSONALTRAINER.SG</span>
                  <span className="text-[#C5A059] uppercase font-oswald text-xs">Trusted in Singapore Since 2002</span>
                </div>
              </div>
              <p className="text-white text-sm leading-relaxed mb-4">
                Led by Md Salaudin Adam (DONN)
              </p>
              <ul className="text-white text-xs space-y-1.5 mb-6 font-sans">
                <li>• Founder and Fitness Director</li>
                <li>• Transformation Specialist</li>
                <li>• Trusted in Singapore Since 2002</li>
                <li>• 24 Years of Coaching Experience</li>
              </ul>
              <div className="flex gap-2">
                <a href="https://www.facebook.com/personaltrainer.sg/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 bg-[#C5A059] text-black flex items-center justify-center hover:bg-white transition-colors duration-300">
                  <Facebook size={16} />
                </a>
                <a href="https://www.instagram.com/personaltrainer.sg/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 bg-[#C5A059] text-black flex items-center justify-center hover:bg-white transition-colors duration-300">
                  <Instagram size={16} />
                </a>
                <a href="https://www.tiktok.com/@personaltrainer.sg" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-10 h-10 bg-[#C5A059] text-black flex items-center justify-center hover:bg-white transition-colors duration-300">
                  <TikTokIcon size={16} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-oswald text-lg font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-3 text-sm text-white font-oswald">
                {[
                  { name: "Home", url: "/" },
                  { name: "About Us", url: "/about" },
                  { name: "Services", url: "/services" },
                  { name: "Results", url: "/results" },
                  { name: "Contact Us", url: "/contact" }
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.url} className="hover:text-[#C5A059] transition-colors duration-300 uppercase tracking-widest text-xs">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-oswald text-lg font-bold text-white mb-6 uppercase tracking-wider">Open Hours</h4>
              <p className="text-white text-sm tracking-wider font-oswald uppercase leading-relaxed">
                PersonalTrainer.sg operates by appointment only. Training sessions are arranged based on trainer availability, client schedule, location suitability and confirmed booking.
              </p>
            </div>

            <div>
              <h4 className="font-oswald text-lg font-bold text-white mb-6 uppercase tracking-wider">Get In Touch</h4>
              <ul className="space-y-4 text-xs text-white font-sans">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Training locations arranged across Singapore</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-[#C5A059] shrink-0" />
                  <a href="https://wa.me/6591081781" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">
                    +65 9108 1781
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-[#C5A059] shrink-0" />
                  <a href="mailto:donn@personaltrainer.sg" className="hover:text-[#C5A059] transition-colors">
                    donn@personaltrainer.sg
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 font-sans gap-4">
            <p>© 2026 PersonalTrainer.sg. All Rights Reserved. Led by Md Salaudin Adam (DONN).</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-[#C5A059] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#C5A059] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
