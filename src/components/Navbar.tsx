"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface SubMenuItem {
  name: string;
  url: string;
}

interface MenuItem {
  name: string;
  url: string;
  submenu?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
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
      { name: "Rates", url: "/rates" }
    ]
  },
  {
    name: "Results",
    url: "/results",
    submenu: [
      { name: "Client Transformations", url: "/results#transformations" },
      { name: "Testimonials", url: "/results#testimonials" }
    ]
  },
  {
    name: "Contact Us",
    url: "/contact",
    submenu: [
      { name: "Book a Trial Session", url: "/contact#trial" },
      {
        name: "WhatsApp Enquiry",
        url: "https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Personal%20Training.%20Can%20you%20advise%20on%20availability%20and%20Trial%20Session%3F"
      }
    ]
  }
];

interface NavbarProps {
  activePage?: string;
}

export default function Navbar({ activePage = "home" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="relative z-50 bg-black border-b border-white/10 px-4 md:px-8 py-3.5 transition-all duration-300 overflow-visible">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left: Brand Logo & Title */}
          <Link href="/" className="flex items-center group shrink-0" id="site-logo">
            <div className="brand-logo-wrapper group-hover:scale-105 transition-transform duration-300">
              <img
                src="/logopt.png"
                alt="PersonalTrainer.sg Shield"
              />
            </div>
            <div className="brand-text-container">
              <span className="brand-text-title">PERSONALTRAINER.SG</span>
              <span className="brand-text-subtitle">TRUSTED IN SINGAPORE SINCE 2002</span>
            </div>
          </Link>

          {/* Center: Navigation Menu */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {menuItems.map((item) => {
              const itemSlug = item.name.toLowerCase().replace(/[^a-z]/g, "");
              const currentSlug = activePage.toLowerCase().replace(/[^a-z]/g, "");
              const isActive = currentSlug === itemSlug;

              return (
                <div key={item.name} className="relative group py-2">
                  <Link
                    href={item.url}
                    className={`text-xs xl:text-sm font-oswald uppercase tracking-widest font-bold transition-colors duration-300 relative flex flex-col items-start ${
                      isActive ? "text-[#C5A059]" : "text-white hover:text-[#C5A059]"
                    }`}
                  >
                    <span>{item.name}</span>
                    <span
                      className={`h-[2.5px] bg-[#C5A059] transition-all duration-300 mt-1 rounded-full ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>

                  {/* Submenu Dropdown */}
                  {item.submenu && (
                    <div className="nav-dropdown">
                      {item.submenu.map((sub) => {
                        const isExternal = sub.url.startsWith("http");
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
              );
            })}
          </div>

          {/* Right: CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/#trial"
              className="bg-[#800020] hover:bg-[#9E1026] text-white font-oswald font-bold text-xs xl:text-sm uppercase tracking-wider px-6 py-3 transition-colors duration-300 inline-flex items-center gap-2"
            >
              <span>TRIAL SESSION</span>
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden w-10 h-10 border border-white/10 flex items-center justify-center text-white hover:bg-[#800020] transition-colors duration-300 shrink-0 ml-auto"
            aria-label="Toggle menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer flex flex-col justify-between p-6 sm:p-8 animate-fadeIn">
          <div className="w-full">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center group">
                <div className="brand-logo-wrapper">
                  <img src="/logopt.png" alt="PersonalTrainer.sg Shield" />
                </div>
                <div className="brand-text-container">
                  <span className="brand-text-title">PERSONALTRAINER.SG</span>
                  <span className="brand-text-subtitle">TRUSTED IN SINGAPORE SINCE 2002</span>
                </div>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-[#800020] transition-colors duration-300"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <div key={item.name} className="border-b border-white/5 pb-3">
                  <Link
                    href={item.url}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-oswald uppercase tracking-wider font-bold text-white hover:text-[#C5A059] block mb-2"
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4 flex flex-col space-y-2 border-l border-white/10 ml-1">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.url}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-xs text-gray-400 hover:text-[#C5A059] transition-colors font-sans"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <Link
              href="/#trial"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#800020] hover:bg-[#9E1026] text-white font-oswald font-bold text-center text-sm uppercase tracking-wider py-3.5 px-6 w-full flex items-center justify-center gap-2"
            >
              <span>TRIAL SESSION</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
