"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import TikTokIcon from "@/components/TikTokIcon";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <footer id="contact" className="bg-[#050505] py-16 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10 pb-12 mb-12">
          
          {/* Footer Logo and About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logopt.avif"
                alt="PersonalTrainer.sg"
                className="h-10 w-auto logo-glow"
              />
              <div className="flex flex-col text-left">
                <span className="text-white font-extrabold font-oswald tracking-tight text-lg leading-tight uppercase">
                  Personal<span className="text-[#C5A059]">Trainer.sg</span>
                </span>
              </div>
            </div>
            <p className="text-white text-sm font-semibold mb-3 font-sans">
              Led by Md Salaudin Adam (DONN)
            </p>
            <ul className="text-gray-300 text-xs space-y-1.5 mb-6 font-sans">
              <li>• Founder and Fitness Director</li>
              <li>• Premium Performance and Transformation Specialist</li>
              <li>• Trusted in Singapore Since 2002</li>
              <li>• 24 Years of Coaching Experience</li>
            </ul>
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/personaltrainer.sg/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-[#C5A059] text-black flex items-center justify-center rounded hover:bg-white transition-colors duration-300"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/personaltrainer.sg/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-[#C5A059] text-black flex items-center justify-center rounded hover:bg-white transition-colors duration-300"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.tiktok.com/@personaltrainer.sg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 bg-[#C5A059] text-black flex items-center justify-center rounded hover:bg-white transition-colors duration-300"
              >
                <TikTokIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-oswald text-lg font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm font-oswald">
              {[
                { name: "Home", url: "/" },
                { name: "About Us", url: "/about" },
                { name: "Services", url: "/services" },
                { name: "Rates", url: "/rates" },
                { name: "Results", url: "/results" },
                { name: "Contact Us", url: "/contact" },
                { name: "Privacy Policy", url: "/privacy-policy" }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    className="text-gray-300 hover:text-[#C5A059] transition-colors duration-300 uppercase tracking-widest text-xs"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Open Hours */}
          <div>
            <h4 className="font-oswald text-lg font-bold text-white mb-6 uppercase tracking-wider">Open Hours</h4>
            <p className="text-gray-300 text-xs sm:text-sm tracking-wider font-oswald uppercase leading-relaxed">
              By Appointment Only
            </p>
            <p className="text-gray-400 text-xs mt-3 font-sans leading-relaxed">
              Personalized training sessions scheduled at client condominium gyms, private studios, or partner fitness facilities across Singapore.
            </p>
          </div>

          {/* Get in touch */}
          <div>
            <h4 className="font-oswald text-lg font-bold text-white mb-6 uppercase tracking-wider">Get in Touch</h4>
            <ul className="space-y-4 text-xs sm:text-sm text-gray-300 font-sans">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#C5A059] shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/6591081781"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C5A059] transition-colors duration-300"
                >
                  WhatsApp: +65 9108 1781
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#C5A059] shrink-0 mt-0.5" />
                <a
                  href="mailto:donn@personaltrainer.sg"
                  className="hover:text-[#C5A059] transition-colors duration-300 font-sans lowercase"
                >
                  donn@personaltrainer.sg
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#C5A059] shrink-0 mt-0.5" />
                <span>Training locations arranged across Singapore</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyrights and Terms */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4 font-sans">
          <p>
            {isHome ? (
              <>
                © 2026 Personal Trainer Singapore. All rights reserved. | High-Converting Web Design by{" "}
                <a
                  href="https://raffyyudha.com"
                  target="_blank"
                  rel="noopener"
                  className="hover:underline"
                >
                  Raffy Yudha
                </a>
              </>
            ) : (
              <>
                © 2026 Personal Trainer Singapore. All rights reserved. | Web Design by <span>Raffy Yudha</span>
              </>
            )}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-[#C5A059] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#C5A059] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
