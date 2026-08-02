"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
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
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/85 border-b border-white/5 py-2 md:py-2.5 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
        <div className="flex items-center">
          <Link href="/" className="flex items-center group" id="site-logo">
            <div className="brand-logo-wrapper group-hover:scale-105 transition-transform duration-300">
              <img
                src="/logopt.png"
                alt="PersonalTrainer.sg Shield"
              />
            </div>
            <div className="brand-text-container">
              <span className="brand-text-title">PERSONALTRAINER.SG</span>
              <span className="brand-text-subtitle">Trusted in Singapore Since 2002</span>
            </div>
          </Link>
        </div>

        {/* Desktop Menu with Hover Dropdowns */}
        <div className="hidden lg:flex items-center gap-10">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group py-2">
              <Link
                href={item.url}
                className="text-xs uppercase tracking-widest font-semibold text-white hover:text-[#C5A059] transition-colors duration-300 pb-1 relative block"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
              </Link>
              {item.submenu && (
                <div className="nav-dropdown">
                  {item.submenu.map((sub) => {
                    const isExternal = sub.url.startsWith('http');
                    return (
                      <Link
                        key={sub.name}
                        href={sub.url}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="nav-dropdown-item"
                      >
                        {sub.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Personal%20Training%20rates%20and%20packages."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group text-sm"
          >
            <span>WHATSAPP US</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-[#800020] hover:text-white transition-colors duration-300 shrink-0 ml-auto z-30"
        >
          <Menu size={20} />
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer flex flex-col justify-between p-6 sm:p-8 animate-fadeIn">
          <div className="w-full">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center group">
                <div className="brand-logo-wrapper">
                  <img src="/logopt.png" alt="PersonalTrainer.sg Shield" />
                </div>
                <div className="brand-text-container">
                  <span className="brand-text-title">PERSONALTRAINER.SG</span>
                  <span className="brand-text-subtitle">Trusted in Singapore Since 2002</span>
                </div>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-[#800020] hover:text-white transition-colors duration-300 shrink-0 ml-2"
              >
                <X size={22} />
              </button>
            </div>
            
            <div className="flex flex-col gap-5 text-lg font-oswald py-2 pr-2">
              {menuItems.map((item) => (
                <div key={item.name} className="flex flex-col gap-2">
                  <Link
                    href={item.url}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#C5A059] transition-colors duration-300 uppercase tracking-widest font-bold text-xl text-white"
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="flex flex-col gap-2 pl-4 border-l-2 border-[#C5A059]/40 mt-1">
                      {item.submenu.map((sub) => {
                        const isExternal = sub.url.startsWith('http');
                        return (
                          <Link
                            key={sub.name}
                            href={sub.url}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-xs uppercase tracking-wider text-gray-300 hover:text-[#C5A059] transition-colors duration-300 py-1 font-sans font-medium"
                          >
                            <span className="text-[#C5A059] mr-2">›</span>
                            {sub.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 mt-8 mb-6">
            <a
              href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Personal%20Training%20rates."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full text-center py-4 text-base font-bold block"
            >
              <span>WHATSAPP PERSONALTRAINER.SG</span>
            </a>
          </div>
        </div>
      )}

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

      {/* Package Options Breakdown */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <ScrollReveal className="reveal-hidden">
          <div className="text-center mb-16">
            <span className="section-label justify-center">
              <Dumbbell size={16} className="text-[#C5A059]" /> TAILORED PACKAGES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-4 font-syne">
              Personalised Coaching Packages
            </h2>
            <p className="text-gray-200 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed font-normal">
              We recommend discussing your goals during an initial free consultation or enquiry so we can suggest the most effective package for your needs.
            </p>
          </div>
        </ScrollReveal>

        {/* All 7 Packages Grid */}
        <div className="space-y-12">
          
          {/* Row 1: Student, Beginner, Starter, Getting There */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            
            {/* Package 1: Student */}
            <ScrollReveal className="reveal-hidden">
              <div className="bg-[#0d0d0d] border border-white/10 p-6 rounded-xl flex flex-col justify-between hover:border-[#C5A059]/40 transition-all duration-300 h-full">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-2 font-oswald">Special Student Rate</span>
                  <h3 className="font-oswald text-2xl font-bold uppercase text-white mb-2">Student's Package</h3>
                  <div className="my-4 border-y border-white/10 py-3">
                    <span className="text-4xl font-extrabold font-oswald text-emerald-400">$70</span>
                    <span className="text-xs text-gray-300 uppercase tracking-wider block mt-1 font-oswald">For Any Number Of Sessions! (Min. 12 Sessions)</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed font-sans mb-4">
                    Tailored for full-time students looking for structured personal training, proper exercise form, strength foundation and fitness guidance.
                  </p>
                </div>
                <a
                  href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20would%20like%20to%20enquire%20about%20the%20Student%27s%20Package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center block text-xs"
                >
                  Enquire Student Package
                </a>
              </div>
            </ScrollReveal>

            {/* Package 2: Beginner */}
            <ScrollReveal className="reveal-hidden" delay={100}>
              <div className="bg-[#0d0d0d] border border-white/10 p-6 rounded-xl flex flex-col justify-between hover:border-[#C5A059]/40 transition-all duration-300 h-full">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-2 font-oswald">Entry Level</span>
                  <h3 className="font-oswald text-2xl font-bold uppercase text-white mb-2">Beginner's Package</h3>
                  <div className="my-4 border-y border-white/10 py-3">
                    <span className="text-4xl font-extrabold font-oswald text-emerald-400">$86</span>
                    <span className="text-xs text-gray-300 uppercase tracking-wider block mt-1 font-oswald">For Any Number Of Sessions! (Min. 12 Sessions)</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed font-sans mb-4">
                    Designed for individuals starting their fitness journey, learning correct movement mechanics, mobility and safe weight loss foundation.
                  </p>
                </div>
                <a
                  href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20would%20like%20to%20enquire%20about%20the%20Beginner%27s%20Package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center block text-xs"
                >
                  Enquire Beginner Package
                </a>
              </div>
            </ScrollReveal>

            {/* Package 3: Starter */}
            <ScrollReveal className="reveal-hidden" delay={200}>
              <div className="bg-[#0d0d0d] border border-white/10 p-6 rounded-xl flex flex-col justify-between hover:border-[#C5A059]/40 transition-all duration-300 h-full">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-2 font-oswald">12 Sessions</span>
                  <h3 className="font-oswald text-2xl font-bold uppercase text-white mb-2">Starter Package</h3>
                  <div className="my-4 border-y border-white/10 py-3">
                    <span className="text-4xl font-extrabold font-oswald text-emerald-400">$1,440</span>
                    <span className="text-xs text-[#C5A059] uppercase tracking-wider block mt-1 font-oswald">12 Sessions @ $120 Per Session</span>
                  </div>
                  <p className="text-gray-200 text-xs leading-relaxed font-sans mb-2 font-semibold">
                    Includes initial InBody Analysis Screening Report:
                  </p>
                  <ul className="space-y-1.5 text-xs text-gray-300 font-sans mb-4">
                    <li className="flex items-center gap-1.5"><CheckCircle size={12} className="text-[#C5A059]" /> Present, Appropriate & Target Weight</li>
                    <li className="flex items-center gap-1.5"><CheckCircle size={12} className="text-[#C5A059]" /> Overall Body Fat %, Body Age & RMR</li>
                    <li className="flex items-center gap-1.5"><CheckCircle size={12} className="text-[#C5A059]" /> Goal Setting & Nutrition Plan</li>
                    <li className="flex items-center gap-1.5"><CheckCircle size={12} className="text-[#C5A059]" /> Once In 3 Weeks InBody Tracking</li>
                  </ul>
                </div>
                <a
                  href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20would%20like%20to%20enquire%20about%20the%2012-Session%20Starter%20Package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center block text-xs"
                >
                  Enquire Starter Package
                </a>
              </div>
            </ScrollReveal>

            {/* Package 4: Getting There */}
            <ScrollReveal className="reveal-hidden" delay={300}>
              <div className="bg-[#0d0d0d] border border-white/10 p-6 rounded-xl flex flex-col justify-between hover:border-[#C5A059]/40 transition-all duration-300 h-full">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-2 font-oswald">24 Sessions</span>
                  <h3 className="font-oswald text-2xl font-bold uppercase text-white mb-2">Getting There Package</h3>
                  <div className="my-4 border-y border-white/10 py-3">
                    <span className="text-4xl font-extrabold font-oswald text-emerald-400">$2,640</span>
                    <span className="text-xs text-[#C5A059] uppercase tracking-wider block mt-1 font-oswald">24 Sessions @ $110 Per Session</span>
                  </div>
                  <p className="text-gray-200 text-xs leading-relaxed font-sans mb-2 font-semibold">
                    Includes initial InBody Analysis Screening Report:
                  </p>
                  <ul className="space-y-1.5 text-xs text-gray-300 font-sans mb-4">
                    <li className="flex items-center gap-1.5"><CheckCircle size={12} className="text-[#C5A059]" /> Full Body Fat % & Muscle Mass Report</li>
                    <li className="flex items-center gap-1.5"><CheckCircle size={12} className="text-[#C5A059]" /> Customised Nutrition & Dietary Plan</li>
                    <li className="flex items-center gap-1.5"><CheckCircle size={12} className="text-[#C5A059]" /> Weight Loss & Resistance Guidance</li>
                    <li className="flex items-center gap-1.5"><CheckCircle size={12} className="text-[#C5A059]" /> Once In 3 Weeks InBody Tracking</li>
                  </ul>
                </div>
                <a
                  href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20would%20like%20to%20enquire%20about%20the%2024-Session%20Getting%20There%20Package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center block text-xs"
                >
                  Enquire Getting There Package
                </a>
              </div>
            </ScrollReveal>

          </div>

          {/* Row 2: Transformation, Turbo Charge, Signature */}
          <div className="grid md:grid-cols-3 gap-8 items-stretch pt-6 border-t border-white/10">
            
            {/* Package 5: Transformation Package */}
            <ScrollReveal className="reveal-hidden">
              <div className="bg-[#0d0d0d] border border-white/10 p-8 rounded-xl flex flex-col justify-between hover:border-[#C5A059]/40 transition-all duration-300 h-full">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-2 font-oswald">36 Sessions</span>
                  <h3 className="font-oswald text-2xl font-bold uppercase text-white mb-2">Transformation Package</h3>
                  <div className="my-4 border-y border-white/10 py-3">
                    <span className="text-4xl font-extrabold font-oswald text-emerald-400">$3,600</span>
                    <span className="text-xs text-[#C5A059] uppercase tracking-wider block mt-1 font-oswald">36 Sessions @ $100 Per Session</span>
                  </div>
                  <ul className="space-y-2 text-xs text-gray-300 font-sans mb-6">
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Initial InBody Analysis Screening Report</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Personalised Training Program & Goal Setting</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Nutrition & Dietary Plan + Weight Loss Advice</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Before & After Professional Photographs</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Fortnightly InBody Analysis Tracking</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Weekly Progress Updates & Support</li>
                  </ul>
                </div>
                <a
                  href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20would%20like%20to%20enquire%20about%20the%2036-Session%20Transformation%20Package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center block text-xs"
                >
                  Enquire Transformation Package
                </a>
              </div>
            </ScrollReveal>

            {/* Package 6: Turbo Charge Package */}
            <ScrollReveal className="reveal-hidden" delay={150}>
              <div className="bg-[#0d0d0d] border border-white/10 p-8 rounded-xl flex flex-col justify-between hover:border-[#C5A059]/40 transition-all duration-300 h-full">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-2 font-oswald">48 Sessions</span>
                  <h3 className="font-oswald text-2xl font-bold uppercase text-white mb-2">Turbo Charge Package</h3>
                  <div className="my-4 border-y border-white/10 py-3">
                    <span className="text-4xl font-extrabold font-oswald text-emerald-400">$4,320</span>
                    <span className="text-xs text-[#C5A059] uppercase tracking-wider block mt-1 font-oswald">48 Sessions @ $90 Per Session</span>
                  </div>
                  <ul className="space-y-2 text-xs text-gray-300 font-sans mb-6">
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Initial InBody Analysis Screening Report</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Personalised Training Program & Goal Setting</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Nutrition & Dietary Plan + Weight Loss Advice</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Before & After Professional Photographs</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Fortnightly InBody Analysis Tracking</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Weekly Progress Updates & Advice</li>
                  </ul>
                </div>
                <a
                  href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20would%20like%20to%20enquire%20about%20the%2048-Session%20Turbo%20Charge%20Package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center block text-xs"
                >
                  Enquire Turbo Charge Package
                </a>
              </div>
            </ScrollReveal>

            {/* Package 7: Signature Package (BEST VALUE) */}
            <ScrollReveal className="reveal-hidden" delay={300}>
              <div className="bg-[#0d0d0d] border-2 border-[#C5A059] p-8 rounded-xl flex flex-col justify-between shadow-2xl relative h-full">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C5A059] text-black text-[10px] font-oswald font-extrabold uppercase px-4 py-1 rounded-full tracking-widest shadow-md">
                  BEST VALUE • SIGNATURE
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-2 font-oswald">60 Sessions</span>
                  <h3 className="font-oswald text-2xl font-bold uppercase text-white mb-2">Signature Package</h3>
                  <div className="my-4 border-y border-white/10 py-3">
                    <span className="text-4xl font-extrabold font-oswald text-emerald-400">$4,800</span>
                    <span className="text-xs text-[#C5A059] uppercase tracking-wider block mt-1 font-oswald">60 Sessions @ $80 Per Session</span>
                  </div>
                  <ul className="space-y-2 text-xs text-gray-200 font-sans mb-6">
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Complete InBody Screening & Body Age Report</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Full Personalised Training Program & Goal Setting</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Advanced Nutrition & Dietary Guidance</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Before & After Transformation Photo Suite</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Weekly InBody Analysis Tracking</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#C5A059]" /> Continual Coaching Support & Progress Reviews</li>
                  </ul>
                </div>
                <a
                  href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20would%20like%20to%20enquire%20about%20the%2060-Session%20Signature%20Package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-center block text-xs"
                >
                  Enquire Signature Package
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
                <a href="#" className="w-10 h-10 bg-[#C5A059] text-black flex items-center justify-center hover:bg-white transition-colors duration-300">
                  <Facebook size={16} />
                </a>
                <a href="#" className="w-10 h-10 bg-[#C5A059] text-black flex items-center justify-center hover:bg-white transition-colors duration-300">
                  <Instagram size={16} />
                </a>
                <a href="#" className="w-10 h-10 bg-[#C5A059] text-black flex items-center justify-center hover:bg-white transition-colors duration-300">
                  <Youtube size={16} />
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
                  <span>Condo gyms, selected ActiveSG gyms and suitable training locations across Singapore</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-[#C5A059] shrink-0" />
                  <a href="https://wa.me/6591081781" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">
                    +65 9108 1781
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-[#C5A059] shrink-0" />
                  <a href="mailto:info@personaltrainer.sg" className="hover:text-[#C5A059] transition-colors">
                    info@personaltrainer.sg
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-white font-sans gap-4">
            <p>© {new Date().getFullYear()} PersonalTrainer.sg. All Rights Reserved.</p>
            <p className="text-gray-400">Led by Md Salaudin Adam (DONN) • Founder & Fitness Director</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
