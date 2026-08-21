"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import RateCardsGrid from "@/components/RateCardsGrid";
import TikTokIcon from "@/components/TikTokIcon";
import {
  Calendar,
  Info,
  Phone,
  Mail,
  Facebook,
  Instagram
} from "lucide-react";

// Clean Authentic WhatsApp Icon SVG
const WhatsAppIcon = ({ className = "w-6 h-6", style }: { className?: string; style?: React.CSSProperties }) => (
  <svg width="24" height="24" className={className} style={{ width: "24px", height: "24px", minWidth: "24px", minHeight: "24px", ...style }} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.333 4.988l-1.417 5.176 5.297-1.39c1.46.797 3.107 1.217 4.773 1.218h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.038-5.177-2.925-7.064s-4.395-2.927-7.064-2.927zm5.72 14.184c-.244.688-1.427 1.314-1.966 1.396-.51.077-1.168.109-1.89-.124-.442-.143-1.011-.328-1.742-.647-3.072-1.332-5.077-4.437-5.231-4.644-.153-.207-1.252-1.666-1.252-3.18 0-1.514.789-2.259 1.069-2.564.281-.305.612-.382.816-.382.204 0 .408.003.586.012.189.01.442-.072.692.529.255.613.867 2.115.943 2.268.077.153.128.331.026.535-.102.204-.153.331-.306.51-.153.178-.321.375-.459.504-.153.144-.313.301-.135.607.178.306.792 1.307 1.7 2.116 1.168 1.042 2.153 1.365 2.46 1.518.306.153.484.128.663-.077.179-.204.765-.893.969-1.2.204-.306.408-.255.689-.153.281.102 1.785.842 2.091.995.306.153.51.229.586.357.077.127.077.739-.167 1.427z" />
  </svg>
);

export default function RatesPage() {
  return (
    <div className="min-h-screen text-white selection:bg-[#800020] selection:text-white font-sans antialiased overflow-x-hidden" style={{ backgroundColor: "#050505" }}>
      {/* Main Navigation */}
      <Navbar activePage="services" />

      {/* Main Content Area matching Client Design Graphic */}
      <main className="pt-28 sm:pt-32 pb-24 sm:pb-16 px-3.5 sm:px-8 md:px-12 max-w-[1550px] mx-auto">
        
        {/* Header Title Section with Gold Ornamental Wings */}
        <div className="text-center mb-8 sm:mb-12 mt-2 sm:mt-4">
          <div className="flex items-center justify-center gap-2 sm:gap-8 mb-3">
            <div className="hidden sm:flex items-center gap-2 opacity-80">
              <div className="h-[2px] w-12 sm:w-32 md:w-48" style={{ background: "linear-gradient(to right, transparent, #C5A059)" }} />
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rotate-45 border" style={{ borderColor: "#C5A059", backgroundColor: "#C5A059" }} />
              <div className="h-[2px] w-6 sm:w-16" style={{ backgroundColor: "#C5A059" }} />
            </div>

            <h1 className="text-2xl sm:text-5xl md:text-6xl font-black font-oswald uppercase tracking-widest text-white drop-shadow-xl" style={{ color: "#ffffff" }}>
              PERSONAL TRAINING RATES
            </h1>

            <div className="hidden sm:flex items-center gap-2 opacity-80">
              <div className="h-[2px] w-6 sm:w-16" style={{ backgroundColor: "#C5A059" }} />
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rotate-45 border" style={{ borderColor: "#C5A059", backgroundColor: "#C5A059" }} />
              <div className="h-[2px] w-12 sm:w-32 md:w-48" style={{ background: "linear-gradient(to left, transparent, #C5A059)" }} />
            </div>
          </div>
          <p className="text-gray-200 font-sans text-sm sm:text-lg md:text-2xl tracking-wider font-semibold" style={{ color: "#e5e7eb" }}>
            Premium Training. Proven Results.
          </p>
        </div>

        {/* Rate Cards Grid Matching Reference Design */}
        <RateCardsGrid />

        {/* Center WhatsApp Button - Wide Horizontal Pill Button */}
        <div className="flex justify-center my-8 sm:my-10">
          <a
            href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20would%20like%20to%20enquire%20about%20your%20Personal%20Training%20rates%20and%20packages."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-md py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl font-oswald font-black text-sm sm:text-lg tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:scale-105"
            style={{
              backgroundColor: "#0a0a0a",
              border: "1.5px solid #C5A059",
              color: "#C5A059"
            }}
          >
            <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" style={{ color: "#C5A059" }} />
            <span className="whitespace-nowrap">WHATSAPP TO ENQUIRE</span>
          </a>
        </div>

        {/* Footer Notes & Disclaimer Bar */}
        <div className="max-w-[1500px] mx-auto rounded-xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-sans shadow-xl" style={{ backgroundColor: "#0a0a0a", border: "1.5px solid rgba(197, 160, 89, 0.55)", color: "#e5e7eb" }}>
          <div className="flex items-center gap-3 text-center md:text-left">
            <Calendar size={18} className="shrink-0" style={{ color: "#C5A059" }} />
            <span className="font-oswald text-xs sm:text-sm uppercase tracking-wider font-bold text-gray-100">
              Price revised from 27 Dec 2025
            </span>
          </div>

          <div className="flex items-center gap-3 text-center md:text-left">
            <Info size={18} className="shrink-0" style={{ color: "#C5A059" }} />
            <span className="text-xs sm:text-sm text-gray-200 font-medium">
              Full package amount will be confirmed during enquiry based on the selected arrangement.
            </span>
          </div>
        </div>

      </main>

      {/* Footer Section */}
      <footer id="contact" className="bg-[#030303] py-14 px-6 md:px-12 border-t border-white/10" style={{ backgroundColor: "#030303" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-white/5 pb-10 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/logopt.avif"
                  alt="PersonalTrainer.sg"
                  className="h-10 w-auto"
                />
                <div className="flex flex-col text-left">
                  <span className="text-white uppercase font-oswald font-extrabold text-base">PERSONALTRAINER.SG</span>
                  <span className="uppercase font-oswald text-[10px]" style={{ color: "#C5A059" }}>Trusted in Singapore Since 2002</span>
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
                <a href="https://www.facebook.com/personaltrainer.sg/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 text-black flex items-center justify-center hover:bg-white transition-colors duration-300 rounded" style={{ backgroundColor: "#C5A059" }}>
                  <Facebook size={14} />
                </a>
                <a href="https://www.instagram.com/personaltrainer.sg/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 text-black flex items-center justify-center hover:bg-white transition-colors duration-300 rounded" style={{ backgroundColor: "#C5A059" }}>
                  <Instagram size={14} />
                </a>
                <a href="https://www.tiktok.com/@personaltrainer.sg" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-8 h-8 text-black flex items-center justify-center hover:bg-white transition-colors duration-300 rounded" style={{ backgroundColor: "#C5A059" }}>
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
                  <Phone size={14} className="shrink-0" style={{ color: "#C5A059" }} />
                  <a href="https://wa.me/6591081781" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">
                    +65 9108 1781
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={14} className="shrink-0" style={{ color: "#C5A059" }} />
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

