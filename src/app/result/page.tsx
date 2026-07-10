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
  Check,
  X,
  ChevronDown,
  User,
  Calendar,
  MapPin,
  Twitter,
  Dumbbell,
  Heart,
  MessageSquare,
  Users,
  Menu,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Plus,
  Minus,
  CheckCircle,
  Play,
  Activity
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


export default function ResultPage() {
  // States for interactive elements
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [activeVisionTab, setActiveVisionTab] = useState<"vision" | "mission">("vision");

  
  // Newsletter Form state
    const testimonials = [
    {
      name: "Anna, 36",
      role: "DBS Bank",
      avatar: "https://templates.sparklethings.com/fitcore/wp-content/uploads/sites/103/2025/09/image-XXQWD4N.jpg",
      quote: "I have never had anyone believe in me or stand behind me the way you have. Not only did you help me shed 30 pounds, you also helped me to get off the anxiety medication. You pushed me to get my life back and claim it as mine again."
    },
    {
      name: "Ann Nelson",
      role: "Stay at Home Mom",
      avatar: "https://templates.sparklethings.com/fitcore/wp-content/uploads/sites/103/2025/09/image-XUF7Y3A.jpg",
      quote: "Over the last few months of training and eating properly, I have begun to see a body I really like. What a powerful feeling I have attained from doing this for myself… it is a great reward. I would recommend this to anyone."
    },
    {
      name: "Monika, 41",
      role: "Spa Manager",
      avatar: "https://templates.sparklethings.com/fitcore/wp-content/uploads/sites/103/2025/09/image-Q83DW5Z.jpg",
      quote: "Thanks to Don, I'm stronger physically, I've lost 19 pounds, and the results have been amazing. In four short months, my mind is sharper, and I have more self-confidence. I'm delighted with my new self-discipline!"
    },
    {
      name: "Al Bennati, 44",
      role: "Real Estate",
      avatar: "https://templates.sparklethings.com/fitcore/wp-content/uploads/sites/103/2025/09/image-GJDLB3J.jpg",
      quote: "I've lost 23 pounds, 5 ½ inches off my waist, 50 points off my cholesterol level, no more daily back medication, and all of this in 5 months. Don knows your body better than you do. Listen, learn, and results will come."
    },
    {
      name: "Ken Folkman",
      role: "Client",
      avatar: "https://templates.sparklethings.com/fitcore/wp-content/uploads/sites/103/2025/09/image-XXQWD4N.jpg",
      quote: "Your innovative training techniques along with balanced nutritional plan have allowed me to set goals and achieve results that I didn't know possible at this point. I truly feel at the top of my game and have effectively turned the clock back 20 years."
    }
  ];

  const faqs = [
    {
      q: "What are your opening hours?",
      a: "We're open Monday to Friday from 7:00 AM to 11:00 PM, and on weekends from 10:00 AM to 8:00 PM."
    },
    {
      q: "Do I need a membership to join classes?",
      a: "Yes, group classes are fully included in both our Standard and Premium subscription plans."
    },
    {
      q: "Is there a trial pass for new members?",
      a: "Absolutely! We offer a free 3-day trial pass for all first-time local visitors to experience everything we offer."
    },
    {
      q: "Do you provide personal trainers?",
      a: "Yes, 1-on-1 personal training sessions are available. They are included in our Premium Plan or can be booked separately."
    },
    {
      q: "What should I bring to the gym?",
      a: "We recommend bringing clean athletic shoes, comfortable workout clothes, a personal gym towel, and a water bottle."
    },
    {
      q: "How to Change my Subscription Plan using PayPal",
      a: "You can easily update your subscription plan or billing details within your PayPal subscription dashboard or directly in your FitCore account settings panel."
    }
  ];

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  ;

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
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/85 border-b border-white/5 py-5 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-3xl font-extrabold font-oswald tracking-tighter whitespace-nowrap inline-block">
              PersonalTrainer<span className="text-[#800020] group-hover:text-[#C5A059] transition-colors duration-300">.sg</span>
            </span>
            <div className="w-6 h-6 rounded-full border border-[#C5A059] flex items-center justify-center text-[10px] font-bold text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black transition-all duration-300">
              PT
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {[
            { name: "Home", url: "/" },
            { name: "About Us", url: "/about" },
            { name: "Services", url: "/services" },
            { name: "Results", url: "/result" },
            { name: "Contact Us", url: "/contact" }
          ].map((item) => (
            <Link
              key={item.name}
              href={item.url}
              className={`text-sm uppercase tracking-widest font-semibold hover:text-[#800020] transition-colors duration-300 relative py-1 group ${
                item.name === "Results" ? "text-[#C5A059]" : "text-white"
              }`}
            >
              {item.name}
              <span className={`absolute bottom-0 left-0 w-0 h-[2px] bg-[#800020] transition-all duration-300 group-hover:w-full ${
                item.name === "Results" ? "w-full bg-[#C5A059]" : ""
              }`} />
            </Link>
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
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-extrabold font-oswald tracking-tighter whitespace-nowrap inline-block">
                PersonalTrainer<span className="text-[#800020] animate-fadeIn">.sg</span>
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-[#800020] hover:text-white transition-colors duration-300"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex flex-col gap-6 text-2xl font-oswald">
              {[
                { name: "Home", url: "/" },
                { name: "About Us", url: "/about" },
                { name: "Services", url: "/services" },
                { name: "Results", url: "/result" },
                { name: "Contact Us", url: "/contact" }
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.url}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#800020] transition-colors duration-300 uppercase tracking-widest"
                >
                  {item.name}
                </Link>
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


<section className="relative py-24 bg-[#0d0d0d] border-b border-white/5 flex flex-col items-center justify-center text-center overflow-hidden"><div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35 pointer-events-none"></div><div className="absolute left-[-10%] top-[10%] w-[350px] h-[350px] bg-[#800020] rounded-full blur-[150px] opacity-10 pointer-events-none"></div><div className="relative z-10 max-w-4xl mx-auto px-6"><ScrollReveal className="reveal-hidden"><h1 className="text-3xl md:text-6xl font-black font-syne uppercase tracking-tight mb-4 leading-tight">Real Clients. Real Progress. <br/><span className="text-[#800020]">Real Results.</span></h1><p className="text-white text-base md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed font-sans normal-case tracking-normal font-normal">Every transformation starts with a decision to change. At PersonalTrainer.sg, clients are guided through structured training, proper coaching, accountability and consistent progress.</p><p className="text-[#C5A059] font-oswald text-xs uppercase tracking-wider mb-8">PersonalTrainer.sg is led by Md Salaudin Adam (DONN), Founder and Fitness Director, Trusted in Singapore Since 2002.</p><div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto mb-8"><a href="https://wa.me/6591081781" target="_blank" rel="noopener noreferrer" className="btn-primary group text-center"><span>WhatsApp PersonalTrainer.sg</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a><a className="btn-outline group text-center" href="/#trial"><span>Start Your Transformation</span></a></div><p className="text-sm uppercase tracking-[0.2em] text-gray-500 font-bold"><a className="hover:text-[#C5A059] transition-colors" href="/">Home</a><span className="mx-3 text-white/20">/</span><span className="text-[#C5A059]">Transformations</span></p></ScrollReveal></div></section><div className="w-full bg-[#800020] py-6 overflow-hidden border-t border-b border-[#C5A059]/20 whitespace-nowrap flex select-none relative z-20"><div className="animate-marquee flex gap-12 text-3xl md:text-5xl font-black font-syne uppercase tracking-wider text-white"><span>STRENGTH &amp; CONDITIONING</span><span className="text-[#C5A059]">•</span><span className="text-stroke">ATHLETIC PERFORMANCE</span><span className="text-[#C5A059]">•</span><span>HYPERTROPHY FOCUS</span><span className="text-[#C5A059]">•</span><span className="text-stroke">FUNCTIONAL POWER</span><span className="text-[#C5A059]">•</span><span>STRENGTH &amp; CONDITIONING</span><span className="text-[#C5A059]">•</span><span className="text-stroke">ATHLETIC PERFORMANCE</span><span className="text-[#C5A059]">•</span><span>HYPERTROPHY FOCUS</span><span className="text-[#C5A059]">•</span><span className="text-stroke">FUNCTIONAL POWER</span></div></div><section className="bg-[#050505] py-12 md:py-20 px-6 md:px-12 relative overflow-hidden"><div className="max-w-4xl mx-auto text-center"><ScrollReveal className="reveal-hidden"><span className="section-label justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity text-[#C5A059]"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> INTRODUCTION</span><h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-6 font-syne">Results Built Through Structure and Consistency</h2><div className="text-white text-base md:text-lg leading-relaxed space-y-4 max-w-3xl mx-auto font-sans"><p>Results do not happen from random workouts.</p><p>They happen when proper training, realistic planning, consistency, nutrition awareness and accountability work together.</p><p>At PersonalTrainer.sg, every client starts from a different point.</p><p>Some clients want to lose weight.</p><p>Some clients want to build strength.</p><p>Some clients want to improve stamina, body shape, mobility or confidence.</p><p>The goal is not only to change how the body looks.</p><p>The goal is to help clients move better, feel stronger, become more confident and build habits that support long term progress.</p></div></ScrollReveal></div></section><section className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5"><ScrollReveal className="reveal-hidden"><div className="text-center mb-16"><span className="section-label justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users text-[#C5A059]"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> TRANSFORMATIONS</span><h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-4 font-syne">Before and After Transformations</h2><p className="text-[#C5A059] font-oswald text-lg uppercase tracking-wider mb-6">Real client progress through structured Personal Training.</p><div className="text-white max-w-2xl mx-auto text-sm leading-relaxed mb-10 font-sans space-y-3"><p>This section showcases real client transformation photos and approved progress images from PersonalTrainer.sg. Each transformation represents effort, commitment, coaching, consistency and discipline.</p><p>The results shown are not shortcuts. They are the outcome of proper training, realistic planning and regular progress over time.</p></div></div></ScrollReveal><div className="grid lg:grid-cols-2 gap-12 items-start"><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-xl hover:border-[#800020]/30 transition-all duration-300"><div className="relative w-full aspect-[4/3] overflow-hidden select-none border border-white/10 rounded-lg group cursor-ew-resize"><img src="https://ext.same-assets.com/3485311241/2358912936.jpeg" alt="After" className="absolute inset-0 w-full h-full object-cover pointer-events-none"/><span className="absolute bottom-4 right-4 bg-[#800020] text-white text-xs font-bold px-3 py-1 uppercase tracking-widest font-oswald z-10">AFTER</span><div className="absolute inset-0 overflow-hidden pointer-events-none" style={{width: "50%"}}><img src="https://ext.same-assets.com/3485311241/1864868083.jpeg" alt="Before" className="absolute inset-0 w-full h-full object-cover max-w-none brightness-75" style={{width: "100%"}}/></div><span className="absolute bottom-4 left-4 bg-black/80 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest font-oswald z-10">BEFORE</span><div className="absolute top-0 bottom-0 w-[2px] bg-[#C5A059] z-20 pointer-events-none" style={{left: "50%"}}><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#C5A059] border border-white/20 flex items-center justify-center shadow-2xl text-black hover:scale-110 transition-transform duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left shrink-0 -mr-1"><path d="m15 18-6-6 6-6"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right shrink-0 -ml-1"><path d="m9 18 6-6-6-6"></path></svg></div></div></div><div className="mt-6"><div className="flex justify-between items-start mb-4"><div><h3 className="font-oswald text-2xl font-bold uppercase text-white hover:text-[#C5A059] transition-colors duration-300">Marcus Tan</h3><p className="text-xs uppercase tracking-widest text-[#800020] font-bold mt-1">Body Transformation Journey{/* */} • {/* */}12 Weeks</p></div><span className="bg-[#800020]/10 border border-[#800020]/30 px-3 py-1 rounded text-xs uppercase tracking-widest text-[#C5A059] font-bold">Age {/* */}32</span></div><p className="text-white text-sm italic leading-relaxed mb-6 border-l-2 border-[#800020] pl-4 font-sans">"{/* */}The personalized macro planning and resistance progression completely changed my metabolism.{/* */}"</p><div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4"><div className="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-[#161616] flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-down text-[#800020]"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline><polyline points="16 17 22 17 22 11"></polyline></svg></div><div><p className="text-[10px] text-gray-500 uppercase tracking-widest">Weight Loss</p><p className="font-oswald text-sm font-bold text-white">-14.5 kg</p></div></div><div className="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-[#161616] flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity text-[#C5A059]"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg></div><div><p className="text-[10px] text-gray-500 uppercase tracking-widest">Fat Percentage</p><p className="font-oswald text-sm font-bold text-white">28% to 14%</p></div></div></div></div></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-xl hover:border-[#800020]/30 transition-all duration-300"><div className="relative w-full aspect-[4/3] overflow-hidden select-none border border-white/10 rounded-lg group cursor-ew-resize"><img src="https://ext.same-assets.com/3485311241/1335261477.jpeg" alt="After" className="absolute inset-0 w-full h-full object-cover pointer-events-none"/><span className="absolute bottom-4 right-4 bg-[#800020] text-white text-xs font-bold px-3 py-1 uppercase tracking-widest font-oswald z-10">AFTER</span><div className="absolute inset-0 overflow-hidden pointer-events-none" style={{width: "50%"}}><img src="https://ext.same-assets.com/3485311241/2536199519.jpeg" alt="Before" className="absolute inset-0 w-full h-full object-cover max-w-none brightness-75" style={{width: "100%"}}/></div><span className="absolute bottom-4 left-4 bg-black/80 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest font-oswald z-10">BEFORE</span><div className="absolute top-0 bottom-0 w-[2px] bg-[#C5A059] z-20 pointer-events-none" style={{left: "50%"}}><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#C5A059] border border-white/20 flex items-center justify-center shadow-2xl text-black hover:scale-110 transition-transform duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left shrink-0 -mr-1"><path d="m15 18-6-6 6-6"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right shrink-0 -ml-1"><path d="m9 18 6-6-6-6"></path></svg></div></div></div><div className="mt-6"><div className="flex justify-between items-start mb-4"><div><h3 className="font-oswald text-2xl font-bold uppercase text-white hover:text-[#C5A059] transition-colors duration-300">Jessica Lim</h3><p className="text-xs uppercase tracking-widest text-[#800020] font-bold mt-1">Lifestyle Transformation{/* */} • {/* */}16 Weeks</p></div><span className="bg-[#800020]/10 border border-[#800020]/30 px-3 py-1 rounded text-xs uppercase tracking-widest text-[#C5A059] font-bold">Age {/* */}27</span></div><p className="text-white text-sm italic leading-relaxed mb-6 border-l-2 border-[#800020] pl-4 font-sans">"{/* */}I wanted to feel strong, not just skinny. Now I can lift more than my body weight easily.{/* */}"</p><div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4"><div className="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-[#161616] flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up text-[#800020]"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg></div><div><p className="text-[10px] text-gray-500 uppercase tracking-widest">Muscle Gained</p><p className="font-oswald text-sm font-bold text-white">+3.8 kg</p></div></div><div className="bg-[#050505] border border-white/5 p-3 rounded flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-[#161616] flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award text-[#C5A059]"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg></div><div><p className="text-[10px] text-gray-500 uppercase tracking-widest">Deadlift Max</p><p className="font-oswald text-sm font-bold text-white">45kg to 105kg</p></div></div></div></div></div></ScrollReveal></div></section><section className="bg-[#0c0c0c] py-12 md:py-20 px-6 md:px-12 relative overflow-hidden border-t border-white/5"><div className="max-w-7xl mx-auto"><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"><ScrollReveal className="reveal-hidden"><div className="p-8 border border-white/5 rounded bg-[#0d0d0d] hover:border-[#800020]/30 transition-all duration-300 group"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dumbbell mx-auto text-[#C5A059] mb-4 group-hover:scale-110 transition-transform duration-300"><path d="M14.4 14.4 9.6 9.6"></path><path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"></path><path d="m21.5 21.5-1.4-1.4"></path><path d="M3.9 3.9 2.5 2.5"></path><path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"></path></svg><h3 className="text-4xl font-extrabold font-oswald text-white mb-2"><span>1,250</span>+ kg</h3><p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Total Fat Melted</p></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="p-8 border border-white/5 rounded bg-[#0d0d0d] hover:border-[#800020]/30 transition-all duration-300 group"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up mx-auto text-[#C5A059] mb-4 group-hover:scale-110 transition-transform duration-300"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg><h3 className="text-4xl font-extrabold font-oswald text-white mb-2"><span>480</span>+ kg</h3><p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Muscle Mass Gained</p></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="p-8 border border-white/5 rounded bg-[#0d0d0d] hover:border-[#800020]/30 transition-all duration-300 group"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users mx-auto text-[#C5A059] mb-4 group-hover:scale-110 transition-transform duration-300"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg><h3 className="text-4xl font-extrabold font-oswald text-white mb-2"><span>320</span>+</h3><p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Active Transformations</p></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="p-8 border border-white/5 rounded bg-[#0d0d0d] hover:border-[#800020]/30 transition-all duration-300 group"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award mx-auto text-[#C5A059] mb-4 group-hover:scale-110 transition-transform duration-300"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg><h3 className="text-4xl font-extrabold font-oswald text-white mb-2"><span>15,000</span>+</h3><p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Hours Coached</p></div></ScrollReveal></div></div></section><section className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5"><ScrollReveal className="reveal-hidden"><div className="text-center mb-16"><span className="section-label justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity text-[#C5A059]"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> GOALS</span><h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-4 font-syne">What Clients Work Towards</h2><p className="text-white max-w-2xl mx-auto text-sm md:text-base mb-6 font-sans">PersonalTrainer.sg helps clients work towards practical, realistic and meaningful fitness results.</p><p className="text-gray-500 max-w-2xl mx-auto text-xs italic font-sans">Every result depends on the client’s starting point, training frequency, lifestyle, nutrition habits and consistency.</p></div></ScrollReveal><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-4 rounded-lg flex items-center gap-3 hover:border-[#800020]/30 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="font-oswald text-sm font-bold uppercase text-white tracking-wide">Weight Loss</span></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-4 rounded-lg flex items-center gap-3 hover:border-[#800020]/30 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="font-oswald text-sm font-bold uppercase text-white tracking-wide">Fat Reduction</span></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-4 rounded-lg flex items-center gap-3 hover:border-[#800020]/30 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="font-oswald text-sm font-bold uppercase text-white tracking-wide">Strength Improvement</span></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-4 rounded-lg flex items-center gap-3 hover:border-[#800020]/30 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="font-oswald text-sm font-bold uppercase text-white tracking-wide">Body Toning</span></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-4 rounded-lg flex items-center gap-3 hover:border-[#800020]/30 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="font-oswald text-sm font-bold uppercase text-white tracking-wide">Better Posture</span></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-4 rounded-lg flex items-center gap-3 hover:border-[#800020]/30 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="font-oswald text-sm font-bold uppercase text-white tracking-wide">Improved Stamina</span></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-4 rounded-lg flex items-center gap-3 hover:border-[#800020]/30 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="font-oswald text-sm font-bold uppercase text-white tracking-wide">Improved Mobility</span></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-4 rounded-lg flex items-center gap-3 hover:border-[#800020]/30 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="font-oswald text-sm font-bold uppercase text-white tracking-wide">Better Balance</span></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-4 rounded-lg flex items-center gap-3 hover:border-[#800020]/30 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="font-oswald text-sm font-bold uppercase text-white tracking-wide">More Confidence</span></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-4 rounded-lg flex items-center gap-3 hover:border-[#800020]/30 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="font-oswald text-sm font-bold uppercase text-white tracking-wide">Better Energy</span></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-4 rounded-lg flex items-center gap-3 hover:border-[#800020]/30 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="font-oswald text-sm font-bold uppercase text-white tracking-wide">Healthier Lifestyle Habits</span></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-4 rounded-lg flex items-center gap-3 hover:border-[#800020]/30 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="font-oswald text-sm font-bold uppercase text-white tracking-wide">Greater Discipline</span></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-4 rounded-lg flex items-center gap-3 hover:border-[#800020]/30 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="font-oswald text-sm font-bold uppercase text-white tracking-wide">Better Training Consistency</span></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-4 rounded-lg flex items-center gap-3 hover:border-[#800020]/30 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="font-oswald text-sm font-bold uppercase text-white tracking-wide">Long Term Fitness Improvement</span></div></ScrollReveal></div></section><section className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5"><div className="grid lg:grid-cols-3 gap-8"><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-8 rounded-xl h-full flex flex-col justify-between hover:border-[#800020]/30 transition-all duration-300"><div><h3 className="font-oswald text-2xl font-bold uppercase text-white mb-6 hover:text-[#C5A059] transition-colors duration-300">Weight Loss &amp; Fat Reduction</h3><div className="text-white text-sm leading-relaxed mb-6 space-y-4 font-sans"><p>Many clients come to PersonalTrainer.sg because they want to lose weight, reduce body fat and feel healthier.</p><p>The approach is not based on crash dieting or unrealistic shortcuts.</p><p>The focus is on structured Personal Training, progressive workouts, strength building, conditioning, nutrition awareness and accountability.</p><p>The aim is to help clients reduce body fat, improve fitness, increase energy and build better habits that can be maintained.</p></div></div><div className="border-t border-white/5 pt-6 mt-6"><p className="text-[#C5A059] font-oswald text-xs uppercase tracking-wider mb-4">Start your Weight Loss journey with a proper plan and professional guidance.</p><a className="btn-primary w-full text-center text-xs block" href="/#contact">Enquire About Weight Loss Training</a></div></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-8 rounded-xl h-full flex flex-col justify-between hover:border-[#800020]/30 transition-all duration-300"><div><h3 className="font-oswald text-2xl font-bold uppercase text-white mb-6 hover:text-[#C5A059] transition-colors duration-300">Strength &amp; Body Toning</h3><div className="text-white text-sm leading-relaxed mb-6 space-y-4 font-sans"><p>Strength Training helps clients build a stronger body, improve muscle tone, develop better posture and feel more confident.</p><p>At PersonalTrainer.sg, training is planned according to the client’s ability and progressed safely over time.</p><p>The focus is on proper technique, controlled movement and steady improvement.</p><p>Strength Training is suitable for men and women who want to look stronger, feel stronger and improve overall body shape.</p></div></div><div className="border-t border-white/5 pt-6 mt-6"><p className="text-[#C5A059] font-oswald text-xs uppercase tracking-wider mb-4">Build strength, improve body shape and train with proper technique.</p><a className="btn-primary w-full text-center text-xs block" href="/#contact">Enquire About Strength Training</a></div></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-8 rounded-xl h-full flex flex-col justify-between hover:border-[#800020]/30 transition-all duration-300"><div><h3 className="font-oswald text-2xl font-bold uppercase text-white mb-6 hover:text-[#C5A059] transition-colors duration-300">Senior Fitness Progress</h3><div className="text-white text-sm leading-relaxed mb-6 space-y-4 font-sans"><p>For senior clients, progress is not only about appearance. Progress can mean standing stronger, walking better, moving with more confidence, improving balance, maintaining independence and feeling safer during daily activities.</p><p>Senior Fitness Training at PersonalTrainer.sg is adjusted according to the client’s ability, comfort level and physical condition.</p><p>The focus is on safe movement, strength, balance, mobility and daily movement confidence.</p><p className="text-xs border-l-2 border-[#800020] pl-3 italic text-gray-500">Important: For clients with medical conditions, doctor’s clearance may be required before starting training.</p></div></div><div className="border-t border-white/5 pt-6 mt-6"><p className="text-[#C5A059] font-oswald text-xs uppercase tracking-wider mb-4">Improve strength, movement and confidence safely.</p><a className="btn-primary w-full text-center text-xs block" href="/#contact">Enquire About Senior Fitness Training</a></div></div></ScrollReveal></div></section><section className="py-12 md:py-20 px-6 md:px-12 bg-[#0c0c0c] border-t border-b border-white/5 relative overflow-hidden"><div className="max-w-4xl mx-auto text-center"><ScrollReveal className="reveal-hidden"><span className="section-label justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart text-[#C5A059]"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg> YOUR JOURNEY</span><h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-6 font-syne">Every Transformation Has a Starting Point</h2><div className="text-white text-sm md:text-base leading-relaxed space-y-4 max-w-3xl mx-auto font-sans mb-8"><p>Many people delay training because they feel they are not ready.</p><p>Some feel too unfit. Some feel too overweight. Some feel too weak. Some feel embarrassed to start. Some have stopped and restarted many times.</p><p className="text-[#C5A059] font-oswald text-lg uppercase tracking-wider">At PersonalTrainer.sg, you do not need to be fit before you begin. You only need to be willing to start.</p><p>The programme will be adjusted according to where you are now, what your body can handle and what you want to achieve.</p></div><a className="btn-primary group inline-flex" href="/#trial"><span>Start Today</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a></ScrollReveal></div></section><section className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto"><ScrollReveal className="reveal-hidden"><div className="text-center mb-16"><span className="section-label justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity text-[#C5A059]"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> THE PROCESS</span><h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-4 font-syne">How Results Are Built</h2><p className="text-[#C5A059] font-oswald text-lg uppercase tracking-wider">Real results come from a proper process.</p></div></ScrollReveal><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-lg hover:border-[#800020]/30 transition-all duration-300 h-full flex flex-col justify-between"><div><span className="text-3xl font-extrabold font-oswald text-[#C5A059] block mb-3">01</span><h3 className="font-oswald text-lg font-bold uppercase text-white mb-2 tracking-wide">Understand Your Starting Point</h3></div><p className="text-white text-xs leading-relaxed font-sans mt-2">Your current fitness level, goal, training history, lifestyle and body condition are reviewed before planning the right direction.</p></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-lg hover:border-[#800020]/30 transition-all duration-300 h-full flex flex-col justify-between"><div><span className="text-3xl font-extrabold font-oswald text-[#C5A059] block mb-3">02</span><h3 className="font-oswald text-lg font-bold uppercase text-white mb-2 tracking-wide">Follow a Structured Programme</h3></div><p className="text-white text-xs leading-relaxed font-sans mt-2">Your training programme is planned according to your goal, ability, schedule and progress level.</p></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-lg hover:border-[#800020]/30 transition-all duration-300 h-full flex flex-col justify-between"><div><span className="text-3xl font-extrabold font-oswald text-[#C5A059] block mb-3">03</span><h3 className="font-oswald text-lg font-bold uppercase text-white mb-2 tracking-wide">Train With Proper Technique</h3></div><p className="text-white text-xs leading-relaxed font-sans mt-2">You are guided on safe movement, correct form, exercise control and proper training execution.</p></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-lg hover:border-[#800020]/30 transition-all duration-300 h-full flex flex-col justify-between"><div><span className="text-3xl font-extrabold font-oswald text-[#C5A059] block mb-3">04</span><h3 className="font-oswald text-lg font-bold uppercase text-white mb-2 tracking-wide">Progress Gradually</h3></div><p className="text-white text-xs leading-relaxed font-sans mt-2">Training intensity and exercise selection are adjusted over time so your body can improve safely and progressively.</p></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-lg hover:border-[#800020]/30 transition-all duration-300 h-full flex flex-col justify-between"><div><span className="text-3xl font-extrabold font-oswald text-[#C5A059] block mb-3">05</span><h3 className="font-oswald text-lg font-bold uppercase text-white mb-2 tracking-wide">Stay Consistent</h3></div><p className="text-white text-xs leading-relaxed font-sans mt-2">Consistency, discipline and accountability are key factors in achieving long term results.</p></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-lg hover:border-[#800020]/30 transition-all duration-300 h-full flex flex-col justify-between"><div><span className="text-3xl font-extrabold font-oswald text-[#C5A059] block mb-3">06</span><h3 className="font-oswald text-lg font-bold uppercase text-white mb-2 tracking-wide">Build Better Habits</h3></div><p className="text-white text-xs leading-relaxed font-sans mt-2">The goal is not only to complete training sessions, but to build a healthier lifestyle that supports lasting progress.</p></div></ScrollReveal></div></section><section className="bg-[#050505] py-12 md:py-20 px-6 md:px-12 relative overflow-hidden border-t border-white/5"><div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center"><div className="lg:col-span-5"><ScrollReveal className="reveal-left-hidden"><span className="section-label"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square text-[#C5A059]"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> CLIENT FEEDBACK</span><h2 className="text-4xl md:text-5xl font-black uppercase font-syne mb-6 leading-tight">Client <span className="text-[#800020]">Feedback</span></h2><p className="text-white text-base leading-relaxed mb-8">Real feedback from clients who value structure, discipline and proper coaching.</p><div className="flex gap-4"><button onClick={prevTestimonial} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#800020] hover:border-[#800020] hover:text-white transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"></path></svg></button><button onClick={nextTestimonial} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#800020] hover:border-[#800020] hover:text-white transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"></path></svg></button></div></ScrollReveal></div><div className="lg:col-span-7"><ScrollReveal className="reveal-right-hidden"><div className="relative bg-[#0d0d0d] border border-white/5 p-6 sm:p-8 md:p-12 rounded-lg"><div className="absolute right-8 top-8 text-white/5 pointer-events-none"><span className="text-8xl font-serif text-[#C5A059]/20">"</span></div><div className="min-h-[160px] flex flex-col justify-between">
                    <p className="text-white text-lg md:text-xl font-bold leading-relaxed mb-6 font-sans">
                      "{testimonials[testimonialIndex].quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div>
                        <h4 className="font-oswald text-lg font-bold text-white uppercase">
                          {testimonials[testimonialIndex].name}
                        </h4>
                        <p className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">
                          {testimonials[testimonialIndex].role}
                        </p>
                      </div>
                    </div>
                  </div><div className="flex justify-start gap-2 mt-8">
                      {testimonials.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setTestimonialIndex(idx)}
                          className={`h-[4px] rounded-full transition-all duration-300 ${
                            idx === testimonialIndex ? "w-8 bg-[#800020]" : "w-2 bg-white/20"
                          }`}
                        />
                      ))}
                    </div></div></ScrollReveal></div></div></section><section className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5"><div className="grid lg:grid-cols-12 gap-12 items-center"><div className="lg:col-span-5"><ScrollReveal className="reveal-left-hidden"><span className="section-label"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity text-[#C5A059]"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> LIFESTYLE</span><h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-6 font-syne leading-tight">More Than <br/><span className="text-[#800020]">Physical Results</span></h2><div className="text-white text-sm leading-relaxed mb-6 font-sans space-y-4"><p>A successful transformation is not only about body weight or appearance. It is also about confidence, energy, movement, discipline and lifestyle.</p><p>Many clients begin with low motivation, poor consistency or lack of direction. Through proper coaching, they start building better habits, better movement and better confidence in themselves.</p><p className="text-xs text-gray-500 italic">The body changes when training, mindset and habits improve together.</p></div></ScrollReveal></div><div className="lg:col-span-7 bg-[#0d0d0d] border border-white/5 p-8 rounded-xl"><ScrollReveal className="reveal-right-hidden"><h3 className="font-oswald text-lg font-bold uppercase tracking-wider text-white mb-6">Personal Training Helps Improve:</h3><ul className="grid sm:grid-cols-2 gap-4 text-sm text-white font-sans"><li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#C5A059] shrink-0"><path d="M20 6 9 17l-5-5"></path></svg><span>Self Confidence</span></li><li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#C5A059] shrink-0"><path d="M20 6 9 17l-5-5"></path></svg><span>Body Awareness</span></li><li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#C5A059] shrink-0"><path d="M20 6 9 17l-5-5"></path></svg><span>Training Discipline</span></li><li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#C5A059] shrink-0"><path d="M20 6 9 17l-5-5"></path></svg><span>Lifestyle Habits</span></li><li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#C5A059] shrink-0"><path d="M20 6 9 17l-5-5"></path></svg><span>Energy Levels</span></li><li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#C5A059] shrink-0"><path d="M20 6 9 17l-5-5"></path></svg><span>Movement Confidence</span></li><li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#C5A059] shrink-0"><path d="M20 6 9 17l-5-5"></path></svg><span>Fitness Consistency</span></li><li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#C5A059] shrink-0"><path d="M20 6 9 17l-5-5"></path></svg><span>Control Over Health and Fitness</span></li></ul></ScrollReveal></div></div></section><section className="py-8 px-6 md:px-12 max-w-4xl mx-auto mb-12"><ScrollReveal className="reveal-hidden"><div className="bg-[#800020]/10 border border-[#800020]/30 p-6 rounded-xl text-center"><h4 className="font-oswald text-lg font-bold text-white uppercase tracking-wider mb-3">Important Results Note</h4><div className="text-white text-xs leading-relaxed font-sans space-y-2"><p>Every client’s result is different. Progress depends on the client’s starting point, training frequency, nutrition habits, lifestyle, health condition and level of commitment.</p><p>PersonalTrainer.sg does not promise overnight results or unrealistic transformations. The focus is on proper coaching, safe training, realistic progress and long term improvement.</p></div></div></ScrollReveal></section><section className="relative py-24 px-6 md:px-12 bg-black overflow-hidden border-t border-b border-white/5"><div className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none" style={{backgroundImage: "url('https://ext.same-assets.com/3485311241/2686555212.jpeg')", backgroundAttachment: "fixed" as const}}></div><div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div><div className="max-w-7xl mx-auto relative z-10"><ScrollReveal className="reveal-left-hidden"><span className="section-label"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity text-[#C5A059]"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> FINAL BRAND LINE</span><h2 className="text-3xl md:text-5xl font-black uppercase font-syne mb-6 leading-tight max-w-2xl">Ready to Start Your <br/><span className="text-[#800020]">Own Transformation?</span></h2><div className="text-white text-sm md:text-base max-w-xl mb-8 leading-relaxed font-sans space-y-4"><p>Your fitness journey does not need to start perfectly. It needs to start properly.</p><p>If you are ready to improve your body, health, fitness, strength and confidence, PersonalTrainer.sg can help you begin with structure, coaching and accountability.</p><p>Send a WhatsApp message today and let us discuss your goal, current condition and the most suitable training direction for you.</p></div><div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"><a href="https://wa.me/6591081781" target="_blank" rel="noopener noreferrer" className="btn-primary group text-center"><span>WhatsApp PersonalTrainer.sg</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a><a className="btn-outline group text-center" href="/#trial"><span>Book a Trial Session</span></a></div></ScrollReveal></div></section>
      <footer id="contact" className="bg-[#050505] py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/5 pb-12 mb-12">
          
          {/* Footer Logo and About */}
          <div>
            <span className="text-2xl font-extrabold font-oswald tracking-tighter mb-4 block whitespace-nowrap">
              PersonalTrainer<span className="text-[#800020]">.sg</span>
            </span>
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
            <ul className="space-y-3 text-sm text-white">
              {[
                { name: "Home", url: "/" },
                { name: "About", url: "/about" },
                { name: "Services", url: "/services" },
                { name: "Result", url: "/result" },
                { name: "Contact", url: "/contact" }
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
                <a href="mailto:donn@personaltrainer.sg" className="hover:text-[#C5A059] transition-colors duration-300">donn@personaltrainer.sg</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#C5A059] shrink-0 mt-0.5" />
                <span>Condo Gyms & selected ActiveSG Gyms, Singapore</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyrights and Terms */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© 2026 PersonalTrainer.sg. All Rights Reserved. Led by Md Salaudin Adam (DONN).</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
