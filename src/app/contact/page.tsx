"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
  Phone,
  Mail,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  CheckCircle,
  Dumbbell,
  Users,
  MessageSquare,
  Activity,
  Calendar,
  MapPin,
  Menu,
  X,
  Plus,
  Minus,
  Twitter,
  Heart,
  Check
} from "lucide-react";

// ScrollReveal Wrapper Component — GSAP in ClientBody.tsx drives all animations
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
      { name: "DONN’s Training System", url: "/about#system" },
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
      { name: "Fitness Calculator", url: "/services#fitness-calculator" }
    ]
  },
  {
    name: "Results",
    url: "/result",
    submenu: [
      { name: "Client Transformations", url: "/result#transformations" },
      { name: "Testimonials", url: "/result#testimonials" },
      { name: "Gallery", url: "/result#gallery" }
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

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Contact Form State
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    fitnessGoal: "",
    trainingLocation: "",
    trainingDaysTime: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const faqs = [
    {
      q: "What should I prepare for my first session?",
      a: "Bring a bottle of water, a sweat towel, and wear comfortable athletic clothing and shoes."
    },
    {
      q: "Do I need a condo gym or private gym access?",
      a: "Training can be arranged at suitable locations in Singapore, including condo gyms, selected ActiveSG gyms, and other suitable training environments."
    },
    {
      q: "How do I book a Trial Session?",
      a: "You can enquire about a trial session via WhatsApp or our contact form to discuss your goals, current condition, and schedule."
    },
    {
      q: "Who will be my personal trainer?",
      a: "You will be coached directly by Md Salaudin Adam (DONN), Founder and Fitness Director of PersonalTrainer.sg, who has 24 years of coaching experience."
    },
    {
      q: "What training styles do you specialize in?",
      a: "We provide structured coaching for Weight Loss, Strength Training, Senior Fitness, Couple Training, Kickboxing Fitness and Lifestyle Transformation."
    },
    {
      q: "How are payments and bookings structured?",
      a: "Bookings are scheduled in advance. You can discuss flexible package options and payment methods during or after your trial session."
    }
  ];
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate API request delay
    setTimeout(() => {
      if (formData.fullName && formData.phone && formData.email && formData.message) {
        setFormStatus("success");
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          city: "",
          fitnessGoal: "",
          trainingLocation: "",
          trainingDaysTime: "",
          message: ""
        });
        setTimeout(() => setFormStatus("idle"), 4000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 4000);
      }
    }, 1500);
  };

  const whatsappMessage = "Hi PersonalTrainer.sg, I am interested in Personal Training. My goal is to improve my fitness and I would like to know more about the training options, availability and Trial Session.";
  const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#800020] selection:text-white font-sans">
      
      {/* Top Info Bar */}
      <div className="hidden lg:flex justify-between items-center bg-[#050505] border-b border-white/10 px-8 py-2 text-sm text-white">
        <div className="flex items-center gap-6">
          <a href="https://wa.me/6591081781" className="flex items-center gap-2 hover:text-[#C5A059] transition-colors duration-300">
            <Phone size={14} className="text-[#C5A059]" />
            <span>WhatsApp: +65 9108 1781</span>
          </a>
          <a href="mailto:donn@personaltrainer.sg" className="flex items-center gap-2 hover:text-[#C5A059] transition-colors duration-300">
            <Mail size={14} className="text-[#C5A059]" />
            <span>donn@personaltrainer.sg</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs uppercase tracking-wider text-gray-500 font-bold">Follow us:</span>
          <div className="flex gap-2">
            <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#800020] hover:border-[#800020] hover:text-white transition-all duration-300">
              <Facebook size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#800020] hover:border-[#800020] hover:text-white transition-all duration-300">
              <Instagram size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#800020] hover:border-[#800020] hover:text-white transition-all duration-300">
              <Youtube size={14} />
            </a>
          </div>
        </div>
      </div>

      
      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/85 border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
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
                className={`text-xs uppercase tracking-widest font-semibold hover:text-[#C5A059] transition-colors duration-300 pb-1 relative block ${
                  item.name === "Contact Us" ? "text-[#C5A059]" : "text-white"
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-[2px] bg-[#C5A059] transition-all duration-300 group-hover:w-full ${
                  item.name === "Contact Us" ? "w-full bg-[#C5A059]" : ""
                }`} />
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
          <Link href="/#trial" className="btn-primary group text-sm">
            <span>TRIAL SESSION</span>
            <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-[#800020] hover:text-white transition-colors duration-300"
        >
          <Menu size={20} />
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-8 animate-fadeIn">
          <div>
            <div className="flex justify-between items-center mb-8">
              {/* Mobile drawer logo */}
              <div className="flex items-center">
                <img
                  src="/logopt.png"
                  alt="PersonalTrainer.sg"
                  className="h-16 w-auto logo-glow"
                />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-[#800020] hover:text-white transition-colors duration-300"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Mobile links scrollable list */}
            <div className="flex flex-col gap-6 text-xl font-oswald overflow-y-auto max-h-[70vh] pr-2">
              {menuItems.map((item) => (
                <div key={item.name} className="flex flex-col gap-2">
                  <Link
                    href={item.url}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`hover:text-[#C5A059] transition-colors duration-300 uppercase tracking-widest font-bold ${
                      item.name === "Contact Us" ? "text-[#C5A059]" : "text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="flex flex-col gap-1.5 pl-4 border-l border-white/5 mt-1">
                      {item.submenu.map((sub) => {
                        const isExternal = sub.url.startsWith('http');
                        return (
                          <Link
                            key={sub.name}
                            href={sub.url}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-xs uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors duration-300 py-1"
                          >
                            <span className="text-white/20 mr-1.5">—</span>
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
          <div className="border-t border-white/10 pt-6">
            <Link
              href="/#trial"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full text-center"
            >
              TRIAL SESSION
            </Link>
          </div>
        </div>
      )}

      {/* Breadcrumb Header Banner / Hero Section */}
      <section className="relative py-24 bg-[#0d0d0d] border-b border-white/5 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35 pointer-events-none" />
        <div className="absolute left-[-10%] top-[10%] w-[350px] h-[350px] bg-[#800020] rounded-full blur-[150px] opacity-10 pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <ScrollReveal className="reveal-hidden">
            <h1 className="text-3xl md:text-6xl font-black font-syne uppercase tracking-tight mb-4 leading-tight">
              Ready to Start Your <br />
              <span className="text-[#800020]">Fitness Journey?</span>
            </h1>
            <p className="text-gray-350 text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed font-sans normal-case tracking-normal font-normal">
              Speak directly with PersonalTrainer.sg and find out the most suitable training direction for your goal, fitness level, lifestyle and schedule.
            </p>
            <p className="text-[#C5A059] font-oswald text-xs uppercase tracking-wider mb-8">
              Professional Personal Training in Singapore led by Md Salaudin Adam (DONN), Founder and Fitness Director of PersonalTrainer.sg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto mb-8">
              <a
                href={`https://wa.me/6591081781?text=${encodedWhatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group text-center"
              >
                <span>WhatsApp PersonalTrainer.sg</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a href="#enquiry" className="btn-outline group text-center">
                <span>Send an Enquiry</span>
              </a>
            </div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 font-bold">
              <Link href="/" className="hover:text-[#C5A059] transition-colors">Home</Link> 
              <span className="mx-3 text-white/20">/</span> 
              <span className="text-[#C5A059]">Contact Us</span>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Infinite Scrolling Marquee */}
      <div className="w-full bg-[#800020] py-6 overflow-hidden border-t border-b border-[#C5A059]/20 whitespace-nowrap flex select-none relative z-20">
        <div className="animate-marquee flex gap-12 text-3xl md:text-5xl font-black font-syne uppercase tracking-wider text-white">
          <span>STRENGTH & CONDITIONING</span>
          <span className="text-[#C5A059]">•</span>
          <span className="text-stroke">ATHLETIC PERFORMANCE</span>
          <span className="text-[#C5A059]">•</span>
          <span>HYPERTROPHY FOCUS</span>
          <span className="text-[#C5A059]">•</span>
          <span className="text-stroke">FUNCTIONAL POWER</span>
          <span className="text-[#C5A059]">•</span>
          <span>STRENGTH & CONDITIONING</span>
          <span className="text-[#C5A059]">•</span>
          <span className="text-stroke">ATHLETIC PERFORMANCE</span>
          <span className="text-[#C5A059]">•</span>
          <span>HYPERTROPHY FOCUS</span>
          <span className="text-[#C5A059]">•</span>
          <span className="text-stroke">FUNCTIONAL POWER</span>
        </div>
      </div>

      {/* Main Form & Information Section */}
      <section id="trial" className="py-16 md:py-24 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">

            {/* LEFT: Form */}
            <div className="lg:col-span-7">
              <ScrollReveal className="reveal-left-hidden">
                <span className="section-label">
                  <Mail size={16} className="text-[#C5A059]" /> ENQUIRY FORM
                </span>
                <h2 className="text-3xl md:text-5xl font-black uppercase mb-3 font-syne">
                  Send an Enquiry
                </h2>
                <p className="text-gray-400 text-sm mb-10 leading-relaxed font-sans">
                  Fill in your details and PersonalTrainer.sg will recommend the most suitable training direction for your goal.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-5">

                  {/* Personal Info Group */}
                  <div className="bg-[#0d0d0d] border border-white/5 rounded-xl p-6 space-y-5">
                    <p className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold border-b border-white/5 pb-3">Personal Information</p>

                    <div>
                      <label className="block text-xs uppercase tracking-widest font-bold text-white mb-2">Full Name <span className="text-[#800020]">*</span></label>
                      <input
                        type="text"
                        placeholder="e.g. John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#C5A059] transition-colors text-sm"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-widest font-bold text-white mb-2">Phone Number <span className="text-[#800020]">*</span></label>
                        <input
                          type="tel"
                          placeholder="+65 9123 4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#C5A059] transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest font-bold text-white mb-2">Email Address <span className="text-[#800020]">*</span></label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#C5A059] transition-colors text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest font-bold text-white mb-2">City / Area in Singapore</label>
                      <input
                        type="text"
                        placeholder="e.g. Jurong, Tampines, Orchard, Bukit Timah..."
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#C5A059] transition-colors text-sm"
                      />
                    </div>
                  </div>

                  {/* Training Preferences Group */}
                  <div className="bg-[#0d0d0d] border border-white/5 rounded-xl p-6 space-y-5">
                    <p className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold border-b border-white/5 pb-3">Training Preferences</p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-widest font-bold text-white mb-2">Main Fitness Goal</label>
                        <select
                          value={formData.fitnessGoal}
                          onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                          className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C5A059] transition-colors text-sm appearance-none"
                        >
                          <option value="" className="text-gray-500">Select a goal...</option>
                          <option value="Weight Loss">Weight Loss</option>
                          <option value="Strength Training">Strength Training</option>
                          <option value="Senior Fitness">Senior Fitness</option>
                          <option value="Couple Training">Couple Training</option>
                          <option value="Kickboxing Fitness">Kickboxing Fitness</option>
                          <option value="Lifestyle Transformation">Lifestyle Transformation</option>
                          <option value="General Fitness">General Fitness</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest font-bold text-white mb-2">Preferred Training Location</label>
                        <select
                          value={formData.trainingLocation}
                          onChange={(e) => setFormData({ ...formData, trainingLocation: e.target.value })}
                          className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C5A059] transition-colors text-sm appearance-none"
                        >
                          <option value="">Select location type...</option>
                          <option value="Condo Gym">Condo Gym</option>
                          <option value="ActiveSG Gym">ActiveSG Gym</option>
                          <option value="Private Gym">Private Gym</option>
                          <option value="Outdoor">Outdoor / Park</option>
                          <option value="Home">Home Training</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest font-bold text-white mb-2">Preferred Days & Time</label>
                      <input
                        type="text"
                        placeholder="e.g. Weekdays Evening, Saturday Morning"
                        value={formData.trainingDaysTime}
                        onChange={(e) => setFormData({ ...formData, trainingDaysTime: e.target.value })}
                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#C5A059] transition-colors text-sm"
                      />
                    </div>
                  </div>

                  {/* Message Group */}
                  <div className="bg-[#0d0d0d] border border-white/5 rounded-xl p-6 space-y-5">
                    <p className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold border-b border-white/5 pb-3">Additional Details</p>
                    <div>
                      <label className="block text-xs uppercase tracking-widest font-bold text-white mb-2">Message <span className="text-[#800020]">*</span></label>
                      <textarea
                        placeholder="Tell us about your current fitness level, health conditions, goals and anything else relevant..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#C5A059] transition-colors text-sm resize-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="btn-primary py-4 px-10 text-sm disabled:opacity-60"
                    >
                      {formStatus === "submitting" ? "SENDING..." : "SUBMIT ENQUIRY"}
                    </button>
                    <p className="text-gray-600 text-xs pt-2 font-sans">Fields marked <span className="text-[#800020]">*</span> are required</p>
                  </div>

                  {formStatus === "success" && (
                    <div className="flex items-center gap-3 text-green-400 text-sm bg-green-400/10 border border-green-400/20 rounded-lg px-4 py-3 animate-fadeIn">
                      <CheckCircle size={16} />
                      <span>Enquiry sent! PersonalTrainer.sg will be in touch with you shortly.</span>
                    </div>
                  )}
                  {formStatus === "error" && (
                    <div className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3 animate-fadeIn">
                      Please fill in all required fields before submitting.
                    </div>
                  )}
                </form>
              </ScrollReveal>
            </div>

            {/* RIGHT: Info Panel */}
            <div className="lg:col-span-5 space-y-6">

              {/* Quick Contact */}
              <ScrollReveal className="reveal-right-hidden">
                <div className="bg-[#0d0d0d] border border-white/5 rounded-xl p-6">
                  <p className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold mb-4">Faster Response</p>
                  <h3 className="font-oswald text-xl font-bold uppercase text-white mb-3">WhatsApp Direct</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 font-sans">
                    For the fastest response, contact PersonalTrainer.sg directly on WhatsApp.
                  </p>
                  <div className="bg-black rounded-lg px-4 py-3 mb-4 border border-white/5">
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-1">WhatsApp</p>
                    <p className="font-oswald text-lg font-bold text-white">+65 9108 1781</p>
                  </div>
                  <a
                    href={`https://wa.me/6591081781?text=${encodedWhatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center text-sm py-3 block"
                  >
                    WhatsApp Now
                  </a>
                </div>
              </ScrollReveal>

              {/* Contact Details */}
              <ScrollReveal className="reveal-right-hidden" delay={100}>
                <div className="bg-[#0d0d0d] border border-white/5 rounded-xl p-6">
                  <p className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold mb-4">Other Channels</p>
                  <div className="space-y-3">
                    <a href="tel:+6591081781" className="flex items-center gap-3 text-white hover:text-[#C5A059] transition-colors group">
                      <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#800020] group-hover:border-[#800020] transition-all">
                        <Phone size={14} />
                      </div>
                      <span className="font-oswald font-bold text-sm">+65 9108 1781</span>
                    </a>
                    <a href="mailto:donn@personaltrainer.sg" className="flex items-center gap-3 text-white hover:text-[#C5A059] transition-colors group">
                      <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#800020] group-hover:border-[#800020] transition-all">
                        <Mail size={14} />
                      </div>
                      <span className="font-oswald font-bold text-sm">donn@personaltrainer.sg</span>
                    </a>
                    <div className="flex items-center gap-3 text-white">
                      <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center">
                        <MapPin size={14} className="text-[#C5A059]" />
                      </div>
                      <span className="text-gray-400 text-sm font-sans">Island-wide, Singapore</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* What to Include */}
              <ScrollReveal className="reveal-right-hidden" delay={200}>
                <div className="bg-[#0d0d0d] border border-white/5 rounded-xl p-6">
                  <p className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold mb-4">What to Include</p>
                  <ul className="space-y-3 text-sm text-gray-300 font-sans">
                    {[
                      "Your main fitness goal",
                      "Your current fitness level & age",
                      "Preferred training location",
                      "Preferred training days & timing",
                      "Any past injuries or health concerns",
                      "If training alone, as a couple or family"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check size={13} className="text-[#C5A059] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

            </div>

          </div>
        </div>
      </section>

      {/* Trial Session Information Section */}
      <section className="py-12 md:py-20 px-6 md:px-12 bg-[#0c0c0c] border-t border-b border-white/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal className="reveal-hidden">
            <span className="section-label justify-center">
              <Dumbbell size={16} className="text-[#C5A059]" /> INTRODUCTORY SESSION
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-6 font-syne">
              Trial Session Enquiry
            </h2>
            <div className="text-white text-sm md:text-base leading-relaxed space-y-4 max-w-3xl mx-auto font-sans mb-8">
              <p>
                The Trial Session is designed to understand your current fitness level, movement, body condition, goals and training suitability.
              </p>
              <p>
                During the Trial Session, you will experience the coaching style, training structure and professional approach used at PersonalTrainer.sg. This helps both trainer and client decide the most suitable programme before starting a proper training package.
              </p>
              <p>
                The Trial Session is suitable for clients who want to understand how PersonalTrainer.sg can help with Weight Loss Training, Strength Training, Senior Fitness Training, Couple Training, Kickboxing Fitness or general fitness improvement.
              </p>
              <p className="text-[#C5A059] font-oswald text-sm uppercase tracking-wider">
                Send a WhatsApp message to check Trial Session availability and the most suitable training arrangement.
              </p>
            </div>
            <a
              href={`https://wa.me/6591081781?text=${encodedWhatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group inline-flex"
            >
              <span>Enquire About Trial Session</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Training Location & Logistics Grid */}
      <section className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <ScrollReveal className="reveal-left-hidden">
            <span className="section-label">
              <MapPin size={16} className="text-[#C5A059]" /> COVERAGE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-6 font-syne">
              Training Locations <br />
              <span className="text-[#800020]">in Singapore</span>
            </h2>
            <div className="text-white text-sm leading-relaxed space-y-4 font-sans">
              <p>
                PersonalTrainer.sg provides training at suitable locations in Singapore depending on availability, access, client needs and programme suitability.
              </p>
              <p>
                Possible training locations include condo gyms, selected ActiveSG gyms, suitable private gym spaces, outdoor training areas and other approved training environments.
              </p>
              <p>
                Location arrangements can be discussed during enquiry. Please share your preferred training area or full location details when contacting PersonalTrainer.sg.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="reveal-right-hidden" delay={150}>
            <div className="bg-[#0d0d0d] border border-white/5 p-8 rounded-xl">
              <h3 className="font-oswald text-xl font-bold uppercase text-white mb-6">
                Take the First Step Properly
              </h3>
              <div className="text-gray-450 text-sm leading-relaxed space-y-4 font-sans mb-6">
                <p>
                  Many people delay training because they are unsure where to start. Some are worried about their fitness level or what programme is suitable. Others have tried before but lost consistency and need proper guidance, structure and accountability.
                </p>
                <p className="text-[#C5A059] font-bold">
                  At PersonalTrainer.sg, you do not need to be fit before you begin. You only need to be ready to take the first step.
                </p>
                <p>
                  The right programme can be planned based on your starting point, goal and lifestyle.
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Map Placeholder Graphic */}
      <section className="h-96 w-full relative opacity-30 hover:opacity-90 transition-opacity duration-500 border-t border-b border-white/5 bg-[#0c0c0c] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="p-8 max-w-md bg-black/90 border border-white/10 rounded-lg relative z-10 mx-6">
            <MapPin size={32} className="mx-auto text-[#C5A059] mb-4" />
            <h3 className="font-oswald text-lg font-bold text-white mb-2 uppercase">VISIT OUR STATIONS</h3>
            <p className="text-white text-xs leading-relaxed mb-4 font-sans">
              Training locations are fully flexible across Singapore, specializing in Condo Gyms and ActiveSG Gyms.
            </p>
            <a
              href={`https://wa.me/6591081781?text=${encodedWhatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline py-2 px-6 text-xs inline-flex"
            >
              Enquire Via WhatsApp
            </a>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 bg-black border-b border-white/5">
        <div className="lg:col-span-5">
          <ScrollReveal className="reveal-left-hidden">
            <span className="section-label">
              <MessageSquare size={16} className="text-[#C5A059]" /> FAQS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase font-syne mb-6 leading-tight">
              Clear answers to <br />
              <span className="text-[#800020]">common inquiries.</span>
            </h2>
            <p className="text-white text-sm leading-relaxed mb-8 font-sans">
              Cannot find the specific details you need? Please connect with our active desk consultants or call our hotline.
            </p>
          </ScrollReveal>
        </div>

        {/* Interactive Accordion List */}
        <div className="lg:col-span-7 space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} className="reveal-right-hidden" delay={i * 150}>
              <div className="bg-[#0d0d0d] border border-white/5 rounded-lg overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-6 text-left hover:text-[#C5A059] transition-colors duration-300 focus:outline-none"
                >
                  <span className="font-oswald text-lg font-bold tracking-wide uppercase text-white">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#C5A059] transition-transform duration-300">
                    {activeFaq === i ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    activeFaq === i ? "max-h-[200px] border-t border-white/5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 text-sm text-white leading-relaxed bg-[#050505] font-sans">
                    {faq.a}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Start Your Transformation Today / Final Call To Action */}
      <section className="relative py-24 px-6 md:px-12 bg-[#0a0a0a] overflow-hidden border-b border-white/5">
        <div className="absolute left-[-5%] top-[10%] w-[400px] h-[400px] bg-[#800020] rounded-full blur-[160px] opacity-10 pointer-events-none" />
        <div className="absolute right-[-5%] bottom-[10%] w-[300px] h-[300px] bg-[#C5A059] rounded-full blur-[140px] opacity-5 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left md:flex md:items-center md:justify-between gap-12">
          <ScrollReveal className="reveal-left-hidden max-w-2xl">
            <span className="section-label justify-center md:justify-start">
              <Activity size={16} className="text-[#C5A059]" /> TRANSFORMATION
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase font-syne mb-6 leading-tight">
              Start Your <br />
              <span className="text-[#800020]">Transformation Today</span>
            </h2>
            <div className="text-white text-sm md:text-base mb-0 leading-relaxed font-sans space-y-4">
              <p>
                If you are serious about improving your body, health, fitness, strength and confidence, contact PersonalTrainer.sg today.
              </p>
              <p>
                Send a WhatsApp message or submit the enquiry form, and let us discuss the most suitable training direction for you.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="reveal-right-hidden shrink-0 mt-8 md:mt-0">
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <a
                href={`https://wa.me/6591081781?text=${encodedWhatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group flex items-center justify-center gap-2"
              >
                <span>WhatsApp PersonalTrainer.sg</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a href="#enquiry" className="btn-outline text-center py-4 px-8 text-xs font-bold uppercase tracking-wider">
                Submit Enquiry Form
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="bg-[#050505] py-16 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/5 pb-12 mb-12">
          
          {/* Footer Logo and About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logopt.png"
                alt="PersonalTrainer.sg"
                className="h-10 w-auto logo-glow"
              />
              <div className="flex flex-col text-left">
                <span className="text-white uppercase">Personal</span>
                <span className="text-[#C5A059] uppercase">Trainer.sg</span>
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
              <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#800020] hover:text-white transition-colors duration-300">
                <Facebook size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#800020] hover:text-white transition-colors duration-300">
                <Instagram size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#800020] hover:text-white transition-colors duration-300">
                <Youtube size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-oswald text-lg font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white font-oswald">
              {[
                { name: "Home", url: "/" },
                { name: "About Us", url: "/about" },
                { name: "Services", url: "/services" },
                { name: "Results", url: "/result" },
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

          {/* Open Hours */}
          <div>
            <h4 className="font-oswald text-lg font-bold text-white mb-6 uppercase tracking-wider">Open Hours</h4>
            <p className="text-white text-sm tracking-wider font-oswald uppercase">
              By Appointment Only
            </p>
          </div>

          {/* Get in touch */}
          <div>
            <h4 className="font-oswald text-lg font-bold text-white mb-6 uppercase tracking-wider">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-white">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#C5A059] shrink-0 mt-0.5" />
                <a href="https://wa.me/6591081781" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors duration-300">WhatsApp: +65 9108 1781</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#C5A059] shrink-0 mt-0.5" />
                <a href="mailto:donn@personaltrainer.sg" className="hover:text-[#C5A059] transition-colors duration-300 font-sans">donn@personaltrainer.sg</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#C5A059] shrink-0 mt-0.5" />
                <span className="font-sans">Condo Gyms & selected ActiveSG Gyms, Singapore</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyrights and Terms */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© 2026 PersonalTrainer.sg. All Rights Reserved. Led by Md Salaudin Adam (DONN).</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors font-sans">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors font-sans">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}


