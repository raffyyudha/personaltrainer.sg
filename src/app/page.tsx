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
  Activity,
  Award,
  Shield,
  Target
} from "lucide-react";

// ScrollReveal Wrapper Component — GSAP in ClientBody.tsx drives all animations
// This component is a clean passthrough: it applies the reveal class so GSAP can target it
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

// Animated Stats Counter Component
const AnimatedCounter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(end);
  const ref = useRef<HTMLSpanElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    setCount(0);
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [end, duration]);

  return <span ref={ref}>{count}</span>;
};

export default function Home() {
  // States for interactive elements
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  
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
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-3xl font-extrabold font-oswald tracking-tighter whitespace-nowrap inline-block">
              PersonalTrainer<span className="text-[#800020] group-hover:text-[#C5A059] transition-colors duration-300">.sg</span>
            </span>
            <div className="w-6 h-6 rounded-full border border-[#C5A059] flex items-center justify-center text-[10px] font-bold text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black transition-all duration-300">
              PT
            </div>
          </a>
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
              className="text-sm uppercase tracking-widest font-semibold hover:text-[#800020] transition-colors duration-300 relative py-1 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#800020] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a href="#trial" className="btn-primary group text-sm">
            <span>TRIAL SESSION</span>
            <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
          </a>
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
                PersonalTrainer<span className="text-[#800020]">.sg</span>
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
                  className="hover:text-[#C5A059] transition-colors duration-300 uppercase tracking-widest"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10 pt-6">
            <a
              href="#trial"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full text-center"
            >
              TRIAL SESSION
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative px-6 md:px-12 py-16 lg:py-28 overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear_gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />
        <div className="absolute right-[-10%] top-[10%] w-[500px] h-[500px] bg-[#800020] rounded-full blur-[180px] opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Column: Heading + Buttons */}
          <div className="flex flex-col items-start">
            <ScrollReveal className="reveal-left-hidden">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[2.8rem] xl:text-[3.3rem] font-black tracking-tight leading-[1.1] uppercase mb-8 font-syne">
                Transform Your Body. <br />
                Improve Your Health. <br />
                Build Real Confidence.
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a href="https://wa.me/6591081781" target="_blank" rel="noopener noreferrer" className="btn-primary group text-center">
                  <span>WhatsApp PersonalTrainer.sg</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a href="#trial" className="btn-outline group text-center">
                  <span>Start Your Transformation</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Paragraph + Avatar Pile */}
          <div className="flex flex-col items-start lg:items-start">
            <ScrollReveal className="reveal-right-hidden">
              <div className="text-white text-base md:text-lg max-w-lg mb-8 leading-relaxed space-y-4">
                <p>
                  Premium Personal Training in Singapore for Weight Loss, Strength Training, Fitness, Confidence and Long Term Lifestyle Transformation.
                </p>
                <p>
                  Led by Md Salaudin Adam (DONN), Founder and Fitness Director of PersonalTrainer.sg, Trusted in Singapore Since 2002 with 24 Years of Coaching Experience.
                </p>
              </div>

              {/* Avatar Pile */}
              <div className="flex -space-x-3 mb-4">
                {[
                  "https://templates.sparklethings.com/fitcore/wp-content/uploads/sites/103/2025/09/image-XXQWD4N.jpg",
                  "https://templates.sparklethings.com/fitcore/wp-content/uploads/sites/103/2025/09/image-XUF7Y3A.jpg",
                  "https://templates.sparklethings.com/fitcore/wp-content/uploads/sites/103/2025/09/image-Q83DW5Z.jpg",
                  "https://templates.sparklethings.com/fitcore/wp-content/uploads/sites/103/2025/09/image-GJDLB3J.jpg"
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Avatar"
                    className="w-14 h-14 rounded-full border-[3px] border-[#C5A059] object-cover hover:scale-110 hover:z-10 transition-all duration-300"
                  />
                ))}
              </div>
              <h4 className="font-oswald text-xs tracking-[0.2em] font-bold uppercase text-[#C5A059] mb-4">
                Founder & Fitness Director • Trusted in Singapore Since 2002
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs text-white font-sans mt-2 w-full">
                <span className="flex items-center gap-2"><Check size={14} className="text-[#C5A059] shrink-0" /> 24 Years Coaching Experience</span>
                <span className="flex items-center gap-2"><Check size={14} className="text-[#C5A059] shrink-0" /> Transformation Specialist</span>
                <span className="flex items-center gap-2"><Check size={14} className="text-[#C5A059] shrink-0" /> NASM Certified PT</span>
                <span className="flex items-center gap-2"><Check size={14} className="text-[#C5A059] shrink-0" /> TRX Certified PT</span>
                <span className="flex items-center gap-2"><Check size={14} className="text-[#C5A059] shrink-0" /> SOE Certified PT</span>
                <span className="flex items-center gap-2"><Check size={14} className="text-[#C5A059] shrink-0" /> FMT Fit Muay Trainer</span>
                <span className="flex items-center gap-2"><Check size={14} className="text-[#C5A059] shrink-0" /> CPR and AED Certified</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Full-Width Hero Image Banner */}
      <section className="w-full overflow-hidden">
        <ScrollReveal className="reveal-hidden">
          <div className="w-full aspect-[21/9] overflow-hidden">
            <img
              src="/heroimage.avif"
              alt="Gym workout action shot"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Stats Section - Centered with Vertical Dividers */}
      <section className="bg-[#0a0a0a] py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 text-center">
            <ScrollReveal className="reveal-hidden" delay={0}>
              <div className="py-6 md:border-r md:border-white/10">
                <span className="text-6xl md:text-8xl font-extrabold font-oswald text-white tracking-tighter block">
                  <AnimatedCounter end={24} />+
                </span>
                <h4 className="font-oswald text-sm tracking-[0.2em] font-bold text-[#C5A059] uppercase mt-2">Years of Coaching Experience</h4>
              </div>
            </ScrollReveal>
            <ScrollReveal className="reveal-hidden" delay={150}>
              <div className="py-6 md:border-r md:border-white/10">
                <span className="text-6xl md:text-8xl font-extrabold font-oswald text-white tracking-tighter block">
                  <AnimatedCounter end={2002} />
                </span>
                <h4 className="font-oswald text-sm tracking-[0.2em] font-bold text-[#C5A059] uppercase mt-2">Trusted in Singapore Since 2002</h4>
              </div>
            </ScrollReveal>
            <ScrollReveal className="reveal-hidden" delay={300}>
              <div className="py-6">
                <span className="text-6xl md:text-8xl font-extrabold font-oswald text-white tracking-tighter block">
                  <AnimatedCounter end={100} />%
                </span>
                <h4 className="font-oswald text-sm tracking-[0.2em] font-bold text-[#C5A059] uppercase mt-2">Results Focused Coaching</h4>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-[#1a1a1a] py-12 md:py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-0 items-stretch">
          
          {/* About Image with Decorative Block */}
          <div className="relative">
            <ScrollReveal className="reveal-left-hidden h-full">
              {/* Maroon Decorative Rectangle - behind and to the left/above of image */}
              <div className="absolute left-0 top-0 w-[60%] h-[45%] bg-[#800020] -z-0" />
              <div className="relative z-10 pt-12 pl-12 pr-4 pb-4 lg:pr-0 lg:pb-0">
                <img
                  src="/about us.avif"
                  alt="Fitness Training"
                  className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* About Content - Right Side */}
          <div className="bg-[#2a2a2a] p-6 sm:p-10 lg:p-16 flex flex-col justify-center">
            <ScrollReveal className="reveal-right-hidden">
              <span className="section-label">
                <Users size={16} className="text-[#C5A059]" /> INTRODUCTION
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.2rem] xl:text-[2.6rem] font-black leading-tight mb-6 font-syne">
                Personal Training Built for Real Results
              </h2>
              <div className="text-white text-base md:text-lg leading-relaxed mb-8 space-y-4">
                <p>
                  At PersonalTrainer.sg, Personal Training is not about random workouts, temporary motivation or short term fitness trends. It is about proper coaching, structured programming, safe training, discipline, accountability and real progress.
                </p>
                <p>
                  Whether your goal is Weight Loss, Strength Training, Body Toning, Senior Fitness, Couple Training, Kickboxing Fitness or complete Lifestyle Transformation, your programme will be planned according to your body, fitness level, goals and lifestyle.
                </p>
                <p>
                  Every client is different. Every body is different. Every goal is different. That is why every training plan must be personal, practical and progressive. With Md Salaudin Adam (DONN), you are guided by 24 Years of Coaching Experience, proper technique, realistic planning and a results focused approach.
                </p>
              </div>

              <a href="#trial" className="btn-primary group inline-flex mb-10">
                <span>Book Trial Session</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              {/* Vision Block (Premium Positioning Heading 1) */}
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-black font-syne mb-3">Not Just Workouts</h3>
                <p className="text-white text-base leading-relaxed">
                  A proper transformation does not happen from exercise alone. It happens when training, discipline, consistency, nutrition awareness, accountability and lifestyle habits work together. At PersonalTrainer.sg, every programme is designed to help you train better, move better, feel better and build confidence through structured coaching.
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10 my-4" />

              {/* Mission Block (Premium Positioning Heading 2) */}
              <div>
                <h3 className="text-2xl md:text-3xl font-black font-syne mb-3">A Complete Coaching System</h3>
                <p className="text-white text-base leading-relaxed">
                  The goal is not just to make you sweat. The goal is to help you improve your body, health, strength, fitness and lifestyle in a way that can be maintained.
                </p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Text Card */}
          <ScrollReveal className="reveal-left-hidden">
            <div className="bg-[#1a1a1a] p-6 sm:p-10 lg:p-12 flex flex-col justify-center h-full">
              <span className="section-label">
                <Activity size={16} className="text-[#C5A059]" /> SERVICES
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-6 font-syne leading-tight break-words">
                Personal Training Services
              </h2>
              <p className="text-white text-base leading-relaxed mb-8">
                Structured coaching for different goals, ages and fitness levels. Every programme is designed to help you train better, move better, feel better and build confidence.
              </p>
              <a href="#trial" className="btn-primary group inline-flex self-start">
                <span>Book Trial Session</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </ScrollReveal>

          {/* Service 01 */}
          <ScrollReveal className="reveal-right-hidden">
            <div className="group relative h-96 lg:h-full overflow-hidden border border-white/5 hover:border-[#C5A059]/30 transition-all duration-500">
              <img
                src="https://ext.same-assets.com/3485311241/2419563727.jpeg"
                alt="Personal Training"
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-all duration-300 group-hover:bg-black/75" />
              
              {/* Gold Arrow Button at Top Right */}
              <div className="absolute top-6 right-6 z-20">
                <div className="w-12 h-12 bg-[#C5A059] text-black flex items-center justify-center transition-all duration-300 group-hover:bg-white">
                  <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </div>

              {/* Number and Title and Description */}
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <span className="text-4xl font-extrabold font-oswald text-[#C5A059] block mb-2">01.</span>
                <h3 className="text-2xl md:text-3xl font-bold font-oswald uppercase text-white group-hover:text-[#C5A059] transition-colors duration-300">
                  Personal Training
                </h3>
                <p className="text-white text-xs overflow-hidden max-h-0 group-hover:max-h-32 transition-all duration-500 ease-in-out leading-relaxed mt-2">
                  One to one coaching for individuals who want proper guidance, structure, accountability and results. Suitable for beginners, busy professionals, returning trainees and clients who want a serious fitness plan.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Row 2: 3-column grid for services 2, 3, 4 */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {[
            {
              num: "02.",
              title: "Weight Loss Training",
              desc: "A structured programme for clients who want to reduce body fat, improve stamina, increase strength and build better lifestyle habits. The focus is on sustainable progress, not extreme shortcuts.",
              img: "https://ext.same-assets.com/3485311241/2886895772.jpeg"
            },
            {
              num: "03.",
              title: "Strength Training and Body Toning",
              desc: "Progressive resistance training to help you build strength, improve muscle tone, shape your body and increase confidence. Suitable for men and women who want to look stronger, feel stronger and move better.",
              img: "https://ext.same-assets.com/3485311241/979645386.jpeg"
            },
            {
              num: "04.",
              title: "Senior Fitness Training",
              desc: "Safe and structured training for older adults who want to improve strength, balance, mobility, stability and daily movement confidence. The training is adjusted according to ability, condition and comfort level.",
              img: "https://ext.same-assets.com/3485311241/3174217156.jpeg"
            }
          ].map((srv, idx) => (
            <ScrollReveal key={srv.num} className="reveal-hidden" delay={idx * 150}>
              <div className="group relative h-96 overflow-hidden border border-white/5 hover:border-[#C5A059]/30 transition-all duration-500">
                <img
                  src={srv.img}
                  alt={srv.title}
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-all duration-300 group-hover:bg-black/75" />
                
                {/* Gold Arrow Button at Top Right */}
                <div className="absolute top-6 right-6 z-20">
                  <div className="w-12 h-12 bg-[#C5A059] text-black flex items-center justify-center transition-all duration-300 group-hover:bg-white">
                    <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-8 left-8 right-8 z-10">
                  <span className="text-4xl font-extrabold font-oswald text-[#C5A059] block mb-2">{srv.num}</span>
                  <h3 className="text-2xl font-bold font-oswald uppercase text-white group-hover:text-[#C5A059] transition-colors duration-300">
                    {srv.title}
                  </h3>
                  <p className="text-white text-xs overflow-hidden max-h-0 group-hover:max-h-32 transition-all duration-500 ease-in-out leading-relaxed mt-2">
                    {srv.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Row 3: 4-column grid for services 5, 6, 7, 8 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              num: "05.",
              title: "Couple Training",
              desc: "Train together with your spouse, partner, friend or family member while working towards better fitness, health and motivation. A practical and enjoyable way to stay consistent together.",
              img: "https://ext.same-assets.com/3485311241/2060538637.jpeg"
            },
            {
              num: "06.",
              title: "Kickboxing Fitness",
              desc: "High energy Kickboxing Fitness training to improve stamina, coordination, fat burning, movement confidence and overall fitness. Suitable for clients who want a more dynamic and challenging workout style.",
              img: "https://ext.same-assets.com/3485311241/1906150620.jpeg"
            },
            {
              num: "07.",
              title: "Corporate Wellness",
              desc: "Fitness and wellness support for companies, teams and professionals who want to improve energy, health, performance and lifestyle habits.",
              img: "https://ext.same-assets.com/3485311241/2657269775.jpeg"
            },
            {
              num: "08.",
              title: "Online Coaching",
              desc: "Remote Fitness Coaching for clients who need structure, guidance and accountability but prefer flexible training support.",
              img: "https://ext.same-assets.com/3485311241/1335261477.jpeg"
            }
          ].map((srv, idx) => (
            <ScrollReveal key={srv.num} className="reveal-hidden" delay={idx * 100}>
              <div className="group relative h-96 overflow-hidden border border-white/5 hover:border-[#C5A059]/30 transition-all duration-500">
                <img
                  src={srv.img}
                  alt={srv.title}
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-all duration-300 group-hover:bg-black/75" />
                
                {/* Gold Arrow Button at Top Right */}
                <div className="absolute top-6 right-6 z-20">
                  <div className="w-12 h-12 bg-[#C5A059] text-black flex items-center justify-center transition-all duration-300 group-hover:bg-white">
                    <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-8 left-8 right-8 z-10">
                  <span className="text-4xl font-extrabold font-oswald text-[#C5A059] block mb-2">{srv.num}</span>
                  <h3 className="text-xl font-bold font-oswald uppercase text-white group-hover:text-[#C5A059] transition-colors duration-300">
                    {srv.title}
                  </h3>
                  <p className="text-white text-xs overflow-hidden max-h-0 group-hover:max-h-32 transition-all duration-500 ease-in-out leading-relaxed mt-2">
                    {srv.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="bg-[#0c0c0c] py-12 md:py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="reveal-hidden">
            <div className="grid lg:grid-cols-2 gap-8 mb-12 items-end">
              <div>
                <span className="section-label">
                  <Calendar size={16} className="text-[#C5A059]" /> RESULTS
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[1.8rem] xl:text-[2.2rem] font-black font-syne leading-tight">
                  Real Training. Real Progress. Real Transformations.
                </h2>
              </div>
              <div>
                <p className="text-[#C5A059] font-oswald text-lg uppercase tracking-wider mb-3">
                  Results are built through proper coaching, discipline and consistency.
                </p>
                <div className="text-white text-base leading-relaxed mb-6 space-y-3">
                  <p>
                    PersonalTrainer.sg has helped clients work towards: Weight Loss, Fat Reduction, Strength Improvement, Body Toning, Better Posture, Improved Stamina, Improved Confidence, Better Energy, Healthier Lifestyle Habits, Greater Discipline and Consistency.
                  </p>
                  <p>
                    Your transformation does not start when everything is perfect. It starts when you decide to take action.
                  </p>
                </div>
                <a href="#trial" className="btn-primary group inline-flex">
                  <span>Enquire About Trial Session</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Before and After / Client Progress cards */}
          <div className="space-y-8">
            {[
              {
                title: "Weight Loss & Stamina",
                trainer: "Md Salaudin Adam (DONN)",
                img: "https://ext.same-assets.com/3485311241/2060538637.jpeg",
                desc: "Real client transformations showcasing progressive weight loss and improved physical stamina. Guided step-by-step through customized resistance training, cardiovascular conditioning, and consistent lifestyle changes."
              },
              {
                title: "Strength & Body Toning",
                trainer: "Md Salaudin Adam (DONN)",
                img: "https://ext.same-assets.com/3485311241/2657269775.jpeg",
                desc: "Focused resistance programming to build physical strength, improve muscle definition, and enhance body posture. Every session focuses on correct movement patterns, safety, and progressive loading."
              },
              {
                title: "Lifestyle Transformations",
                trainer: "Md Salaudin Adam (DONN)",
                img: "https://ext.same-assets.com/3485311241/1906150620.jpeg",
                desc: "Helping clients rebuild healthy habits, physical energy, and daily focus. A comprehensive lifestyle transformation combining structured exercise, regular accountability, and sustainable nutritional adjustments."
              }
            ].map((cls, idx) => (
              <ScrollReveal key={cls.title} className="reveal-hidden" delay={idx * 150}>
                <div className="grid lg:grid-cols-2 overflow-hidden group">
                  {/* Class Thumbnail */}
                  <div className="h-64 lg:h-auto overflow-hidden relative">
                    <img
                      src={cls.img}
                      alt={cls.title}
                      className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Class Details */}
                  <div className="bg-[#1a1a1a] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold font-oswald mb-4 group-hover:text-[#C5A059] transition-colors duration-300">
                        {cls.title}
                      </h3>
                      <p className="text-white text-base mb-8 leading-relaxed">
                        {cls.desc}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-6 text-sm text-white">
                        <span className="flex items-center gap-2">
                          <User size={16} className="text-[#C5A059]" />
                          <span>{cls.trainer}</span>
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar size={16} className="text-[#C5A059]" />
                          <span>PersonalTrainer.sg</span>
                        </span>
                      </div>
                      
                      <a href="#trial" className="btn-primary py-3 px-6 text-sm">
                        Start Transformation
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-4">
            <ScrollReveal className="reveal-left-hidden">
              <span className="section-label">
                <Dumbbell size={16} className="text-[#C5A059]" /> WHY CHOOSE US
              </span>
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 font-syne leading-tight text-white break-words">
                Why Choose PersonalTrainer.sg
              </h2>
              <p className="text-[#C5A059] font-oswald text-lg uppercase tracking-wider mb-4">
                Professional coaching. Real structure. Serious results.
              </p>
              <p className="text-white text-base leading-relaxed mb-8">
                At PersonalTrainer.sg, the focus is on proper coaching, safe training progression, discipline, accountability, and real progress.
              </p>
              <a href="#trial" className="btn-primary group inline-flex">
                <span>Start Today</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </ScrollReveal>
          </div>

          {/* Right Column: 3x2 Grid for 6 why choose sections */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "24 Years of Coaching Experience",
                desc: "Coaching since 2002, focusing on custom exercise selection, movement quality, and safe progressive training tailored for you.",
                icon: <Award className="w-8 h-8 text-[#C5A059]" />
              },
              {
                title: "Trusted in Singapore Since 2002",
                desc: "Over two decades of helping individuals, seniors, and busy professionals improve their health and strength in Singapore.",
                icon: <Shield className="w-8 h-8 text-[#C5A059]" />
              },
              {
                title: "Personalised Training Programmes",
                desc: "A customized program built from scratch for your fitness level, goals, schedule, and lifestyle—no generic templates.",
                icon: <Dumbbell className="w-8 h-8 text-[#C5A059]" />
              },
              {
                title: "Proper Technique and Safe Training",
                desc: "Guidance on proper posture, breathing, and form. Learn to train safely, confidently, and effectively.",
                icon: <Activity className="w-8 h-8 text-[#C5A059]" />
              },
              {
                title: "Results Focused Coaching",
                desc: "We align workouts, daily habits, nutrition awareness, and accountability to ensure your long-term success.",
                icon: <Target className="w-8 h-8 text-[#C5A059]" />
              },
              {
                title: "Training That Fits Your Lifestyle",
                desc: "Train at convenient locations in Singapore, including condo gyms, selected public gyms, or private spaces.",
                icon: <MapPin className="w-8 h-8 text-[#C5A059]" />
              }
            ].map((fac, idx) => (
              <ScrollReveal key={fac.title} className="reveal-hidden" delay={idx * 100}>
                <div className="bg-[#1a1a1a] border border-white/5 p-8 hover:border-[#C5A059]/30 transition-all duration-300 group h-full flex flex-col">
                  {/* Square Icon Container with Gold Border */}
                  <div className="w-16 h-16 border-2 border-[#C5A059] flex items-center justify-center mb-6 group-hover:bg-[#C5A059]/10 transition-all duration-300 shrink-0">
                    {fac.icon}
                  </div>
                  <h3 className="text-lg font-bold font-oswald mb-3 text-white group-hover:text-[#C5A059] transition-colors duration-300 uppercase">
                    {fac.title}
                  </h3>
                  <p className="text-white text-xs leading-relaxed mt-auto">
                    {fac.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generation Section Banner */}
      <section className="relative py-28 px-6 md:px-12 bg-black overflow-hidden flex items-center justify-center min-h-[500px]">
        {/* Background Image with darken overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 pointer-events-none"
          style={{
            backgroundImage: "url('https://ext.same-assets.com/3485311241/2686555212.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <ScrollReveal className="reveal-hidden">
            <span className="section-label justify-center">
              READY TO START?
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-black uppercase font-syne mb-6 leading-tight text-white break-words">
              Ready to Take Control of Your Fitness?
            </h2>
            <div className="text-white text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed space-y-4">
              <p>
                If you are serious about improving your fitness, health, strength, body shape and confidence, take the first step today.
              </p>
              <p>
                Send a WhatsApp message now and let us discuss your goal, current condition and the most suitable training plan for you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/6591081781" target="_blank" rel="noopener noreferrer" className="btn-primary group text-center">
                <span>WhatsApp PersonalTrainer.sg</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <Link href="/contact" className="btn-outline group text-center">
                <span>Contact Me Today</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Credentials Section */}
      <section id="credentials" className="bg-[#0c0c0c] py-12 md:py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="reveal-hidden">
            <div className="text-center mb-16">
              <span className="section-label justify-center">
                CREDENTIALS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-4 font-syne leading-tight break-words">
                Professional Credentials
              </h2>
              <p className="text-white max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                With more than two decades of experience in Singapore’s fitness industry, Md Salaudin Adam (DONN) brings discipline, structure and practical coaching to help clients train safely, stay consistent and work towards real results.
              </p>
            </div>
          </ScrollReveal>

          {/* Trainers Cards Grid (repurposed for credentials) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Md Salaudin Adam (DONN)",
                role: "Founder & Fitness Director",
                img: "/donn-coaching-latpulldown.avif"
              },
              {
                name: "24 Years Coaching",
                role: "Trusted in SG Since 2002",
                img: "/donn-coaching-elliptical.avif"
              },
              {
                name: "NASM / TRX / SOE",
                role: "Certified Personal Trainer",
                img: "/donn-coaching-barbell.avif"
              },
              {
                name: "FMT Muay Trainer",
                role: "Manhunt Finalist 2001",
                img: "/donn-flexing.avif"
              }
            ].map((trn, idx) => (
              <ScrollReveal key={trn.name} className="reveal-hidden" delay={idx * 150}>
                <div className="group relative flex flex-col bg-transparent h-full">
                  {/* Trainer Image Cutout */}
                  <div className="w-full aspect-[4/5] overflow-hidden bg-black/40 border border-white/5 border-b-0">
                    <img
                      src={trn.img}
                      alt={trn.name}
                      className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-700 object-top"
                    />
                  </div>

                  {/* Social Icons row overlapping the boundary */}
                  <div className="flex justify-center gap-2 -mt-5 z-20 relative">
                    <a href="https://wa.me/6591081781" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#C5A059] text-black flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
                      <Phone size={16} />
                    </a>
                    <a href="mailto:donn@personaltrainer.sg" className="w-10 h-10 bg-[#C5A059] text-black flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
                      <Mail size={16} />
                    </a>
                  </div>
                  
                  {/* Bottom Text Panel */}
                  <div className="bg-[#111] p-6 text-center border border-white/5 border-t-0 pt-8 z-10 flex-1 flex flex-col justify-center">
                    <h3 className="font-oswald text-xl font-bold tracking-wide uppercase text-white">
                      {trn.name}
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-[#C5A059] font-bold mt-2">
                      {trn.role}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trial Session Section */}
      <section id="trial" className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <ScrollReveal className="reveal-hidden">
          <div className="text-center mb-16">
            <span className="section-label justify-center">
              <Dumbbell size={16} className="text-[#C5A059]" /> TRIAL SESSION
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-4 font-syne text-white break-words">
              Start With a Trial Session
            </h2>
            <div className="text-white max-w-2xl mx-auto text-sm md:text-base leading-relaxed space-y-4">
              <p>
                The Trial Session is designed to understand your current fitness level, body condition, goals, lifestyle and training suitability. During the session, you will experience the coaching style, training structure and professional approach used at PersonalTrainer.sg.
              </p>
              <p className="text-[#C5A059] font-bold uppercase font-oswald tracking-wider">
                Start your fitness journey with proper guidance and a clear plan.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Trial Session Steps Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {[
            {
              name: "01. Fitness Assessment",
              desc: "Understand your current physical capabilities and establish core targets.",
              featured: false,
              features: [
                { name: "Body condition check", active: true },
                { name: "Fitness level assessment", active: true },
                { name: "Goal & lifestyle analysis", active: true },
                { name: "Schedule suitability", active: true }
              ]
            },
            {
              name: "02. Coaching Experience",
              desc: "Experience the structured and highly disciplined coaching style of coach DONN.",
              featured: true,
              features: [
                { name: "Proper form coaching", active: true },
                { name: "Exercise control & technique", active: true },
                { name: "Safe training progression", active: true },
                { name: "Breathing & posture advice", active: true }
              ]
            },
            {
              name: "03. Custom Roadmap",
              desc: "Identify where you are now, where you want to go and what is suitable.",
              featured: false,
              features: [
                { name: "Personalized template outline", active: true },
                { name: "Progression mapping", active: true },
                { name: "Practical schedule setup", active: true },
                { name: "Nutrition awareness blueprint", active: true }
              ]
            }
          ].map((plan, idx) => (
            <ScrollReveal key={plan.name} className="reveal-hidden h-full">
              <div
                className={`bg-[#0d0d0d] border rounded-lg p-8 flex flex-col justify-between h-full transition-all duration-300 relative ${
                  plan.featured
                    ? "border-[#C5A059] shadow-lg shadow-[#C5A059]/5 lg:scale-105 z-10"
                    : "border-white/5 hover:border-[#800020]/30"
                }`}
              >
                {plan.featured && (
                  <span className="absolute top-4 right-4 bg-[#C5A059] text-black text-xs font-bold uppercase tracking-widest px-3 py-1 font-oswald rounded">
                    RECOMMENDED
                  </span>
                )}
                
                <div>
                  <h3 className="text-xl font-bold font-oswald text-white mb-2 uppercase">{plan.name}</h3>
                  <p className="text-white text-xs mb-6 min-h-[40px]">
                    {plan.desc}
                  </p>
                  
                  <div className="border-t border-white/5 py-4">
                    <span className="text-2xl font-extrabold font-oswald text-[#C5A059] tracking-tighter">Trial Session</span>
                    <span className="text-white text-xs block mt-1">First step of transformation</span>
                  </div>

                  <ul className="border-t border-white/5 py-6 space-y-3">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className={`flex items-center gap-3 text-sm ${feat.active ? "text-white" : "text-gray-600 line-through"}`}>
                        {feat.active ? (
                          <Check size={16} className="text-[#C5A059]" />
                        ) : (
                          <X size={16} className="text-gray-600" />
                        )}
                        <span>{feat.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://wa.me/6591081781"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 text-center font-bold tracking-wider font-oswald uppercase transition-all duration-300 btn-gold"
                >
                  Enquire About Trial Session
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-black py-12 md:py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading + Cards */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <ScrollReveal className="reveal-left-hidden">
              <span className="section-label">
                TESTIMONIALS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase font-syne mb-2 leading-tight text-white break-words">
                What Clients Say
              </h2>
              <p className="text-[#C5A059] font-oswald text-lg uppercase tracking-wider mb-6">
                Real feedback from clients who value structure, discipline and proper coaching.
              </p>

              {/* Side-by-Side Testimonial Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
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
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#f5f5f5] text-black p-8 flex flex-col justify-between min-h-[250px] relative">
                    <p className="text-gray-700 text-sm leading-relaxed mb-6 font-syne">
                      "{item.quote}"
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <div>
                          <h4 className="font-oswald text-base font-bold text-black uppercase">
                            {item.name}
                          </h4>
                          <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                            {item.role}
                          </p>
                        </div>
                      </div>
                      {/* Gold Quote Icon */}
                      <span className="text-4xl font-serif text-[#C5A059] font-bold">”</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Giant Fit Man Cutout */}
          <div className="lg:col-span-4 relative self-end hidden lg:block">
            <ScrollReveal className="reveal-right-hidden">
              <img
                src="/trainwith.avif"
                alt="Fit Member cutout"
                className="w-full object-cover max-h-[550px]"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 bg-black">
        <div className="lg:col-span-5">
          <ScrollReveal className="reveal-left-hidden">
            <span className="section-label">
              FAQS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase font-syne mb-6 leading-tight text-white break-words">
              Clear answers to common inquiries.
            </h2>
            <p className="text-white text-base leading-relaxed mb-8 max-w-md">
              If you have questions about the training environments, custom templates, schedules, or session suitability, find direct answers here or reach out via WhatsApp.
            </p>
            <a href="https://wa.me/6591081781" target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex group">
              <span>WhatsApp Chat</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </ScrollReveal>
        </div>

        {/* Interactive Accordion List */}
        <div className="lg:col-span-7 space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} className="reveal-right-hidden">
              <div className="border border-white/5 overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className={`w-full flex justify-between items-center p-6 text-left transition-colors duration-300 focus:outline-none ${
                    activeFaq === i
                      ? "bg-[#C5A059] text-black font-bold font-oswald text-lg uppercase"
                      : "bg-[#1a1a1a] text-white hover:text-[#C5A059] font-bold font-oswald text-lg uppercase"
                  }`}
                >
                  <span>{faq.q}</span>
                  <div className="transition-transform duration-300">
                    {activeFaq === i ? (
                      <span className="text-xl">↑</span>
                    ) : (
                      <span className="text-xl">↓</span>
                    )}
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden bg-black ${
                    activeFaq === i ? "max-h-[200px] border-t border-white/5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 text-sm text-white leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>      {/* Blog Section */}
      <section id="pages" className="bg-[#0c0c0c] py-12 md:py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="reveal-hidden">
            <div className="text-center mb-16">
              <span className="section-label justify-center">
                BLOG POSTS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-4 font-syne text-white break-words">
                Tips, stories, and updates
              </h2>
              <p className="text-white max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                Stay updated with professional fitness advice, training techniques, and client stories from PersonalTrainer.sg.
              </p>
            </div>
          </ScrollReveal>

          {/* Blog Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Benefits of Hiring a Professional Personal Trainer",
                img: "https://templates.sparklethings.com/fitcore/wp-content/uploads/sites/103/2025/09/image-K2DSB8E-1024x683.jpg",
                author: "Md Salaudin Adam (DONN)",
                date: "Sept 4, 2025"
              },
              {
                title: "Ultimate Guide for Starting Your Fitness Journey",
                img: "https://templates.sparklethings.com/fitcore/wp-content/uploads/sites/103/2025/09/image-DZZK6TF-1024x683.jpg",
                author: "Md Salaudin Adam (DONN)",
                date: "Sept 4, 2025"
              },
              {
                title: "Tips to Stay Motivated in Everyday Training",
                img: "https://templates.sparklethings.com/fitcore/wp-content/uploads/sites/103/2025/09/image-32V9VZV-1024x683.jpg",
                author: "Md Salaudin Adam (DONN)",
                date: "Sept 4, 2025"
              }
            ].map((post, idx) => (
              <ScrollReveal key={post.title} className="reveal-hidden">
                <div className="bg-[#0d0d0d] border border-white/5 overflow-hidden group flex flex-col justify-between h-full hover:border-[#C5A059]/20 transition-all duration-300">
                  <div>
                    {/* Blog Thumbnail */}
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img
                        src={post.img}
                        alt={post.title}
                        className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-700"
                      />
                    </div>
                    {/* Blog Meta */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 uppercase tracking-wider">
                        <span className="flex items-center gap-1">
                          <User size={12} className="text-[#C5A059]" />
                          {post.author}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar size={12} className="text-[#C5A059]" />
                          {post.date}
                        </span>
                      </div>
                      <h3 className="font-oswald text-xl font-bold uppercase text-white group-hover:text-[#C5A059] transition-colors duration-300 leading-tight mb-4">
                        {post.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Blog Footer */}
                  <div className="px-6 pb-6 pt-0 flex justify-start">
                    <Link href="/contact" className="btn-gold py-2.5 px-6 text-sm uppercase">
                      Learn More
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="bg-[#050505] py-16 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">{/* Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/5 pb-12 mb-12">
            
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

            {/* Quick Links */}
            <div>
              <h4 className="font-oswald text-lg font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-3 text-sm text-white font-oswald">
                {[
                  { name: "Home", url: "/" },
                  { name: "About", url: "/about" },
                  { name: "Services", url: "/services" },
                  { name: "Results", url: "/result" },
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
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
            <p>© 2026 PersonalTrainer.sg. All Rights Reserved. Led by Md Salaudin Adam (DONN).</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
