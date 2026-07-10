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




export default function ServicesPage() {
  // States for interactive elements
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeBlueprint, setActiveBlueprint] = useState<number | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [activeVisionTab, setActiveVisionTab] = useState<"vision" | "mission">("vision");

  // ── Fitness Calculator States ──────────────────────────────────────
  const [calcTab, setCalcTab] = useState<"bmi" | "bmr" | "bodyfat" | "idealweight">("bmi");
  const [calcGender, setCalcGender] = useState<"male" | "female">("male");
  const [calcAge, setCalcAge] = useState("");
  const [calcHeight, setCalcHeight] = useState("");
  const [calcWeight, setCalcWeight] = useState("");
  const [calcNeck, setCalcNeck] = useState("");
  const [calcWaist, setCalcWaist] = useState("");
  const [calcHip, setCalcHip] = useState("");
  const [calcActivity, setCalcActivity] = useState("1.55");
  const [calcResult, setCalcResult] = useState<null | Record<string, string | number>>(null);
  const [calcSubmitted, setCalcSubmitted] = useState(false);

  const getBmiCategory = (bmi: number) => {
    if (bmi < 18.5) return { label: "Underweight", color: "#60a5fa" };
    if (bmi < 23) return { label: "Normal Weight", color: "#4ade80" };
    if (bmi < 27.5) return { label: "Overweight", color: "#facc15" };
    return { label: "Obese", color: "#f87171" };
  };

  const getBodyFatCategory = (bf: number, gender: string) => {
    if (gender === "male") {
      if (bf < 6) return { label: "Essential Fat", color: "#60a5fa" };
      if (bf < 14) return { label: "Athletic", color: "#4ade80" };
      if (bf < 18) return { label: "Fitness", color: "#a3e635" };
      if (bf < 25) return { label: "Acceptable", color: "#facc15" };
      return { label: "Obese", color: "#f87171" };
    } else {
      if (bf < 14) return { label: "Essential Fat", color: "#60a5fa" };
      if (bf < 21) return { label: "Athletic", color: "#4ade80" };
      if (bf < 25) return { label: "Fitness", color: "#a3e635" };
      if (bf < 32) return { label: "Acceptable", color: "#facc15" };
      return { label: "Obese", color: "#f87171" };
    }
  };

  const getRecommendedService = (result: Record<string, string | number>) => {
    const bmi = result.bmi as number;
    const bf = result.bodyFat as number;
    if (!bmi && !bf) return null;
    const val = bmi || bf;
    if (bmi >= 27.5 || (bf && ((calcGender === "male" && bf >= 25) || (calcGender === "female" && bf >= 32))))
      return { name: "Weight Loss Training", msg: "Based on your results, Weight Loss Training is recommended to help you reduce body fat safely and consistently." };
    if (bmi < 18.5)
      return { name: "Strength Training", msg: "Based on your results, Strength Training is recommended to help you build muscle and improve your body composition." };
    return { name: "Personal Training", msg: "Based on your results, a Personalised Training Programme is recommended to help you reach your specific fitness goals." };
  };

  const runCalculator = () => {
    const h = parseFloat(calcHeight);
    const w = parseFloat(calcWeight);
    const a = parseInt(calcAge);
    const neck = parseFloat(calcNeck);
    const waist = parseFloat(calcWaist);
    const hip = parseFloat(calcHip);
    const act = parseFloat(calcActivity);

    if (!h || !w) return;

    const result: Record<string, string | number> = {};

    // BMI
    const bmi = w / ((h / 100) ** 2);
    result.bmi = parseFloat(bmi.toFixed(1));

    // BMR (Mifflin-St Jeor)
    if (a) {
      const bmr = calcGender === "male"
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161;
      result.bmr = Math.round(bmr);
      result.tdee = Math.round(bmr * act);
      result.weightLossCalories = Math.round(bmr * act - 500);
      result.weightGainCalories = Math.round(bmr * act + 300);
    }

    // Ideal Weight (Devine formula)
    if (calcGender === "male") {
      result.idealWeight = parseFloat((50 + 2.3 * ((h / 2.54) - 60)).toFixed(1));
    } else {
      result.idealWeight = parseFloat((45.5 + 2.3 * ((h / 2.54) - 60)).toFixed(1));
    }
    result.idealWeightMin = parseFloat((result.idealWeight as number * 0.9).toFixed(1));
    result.idealWeightMax = parseFloat((result.idealWeight as number * 1.1).toFixed(1));

    // Body Fat % (US Navy method)
    if (neck && waist && (calcGender === "female" ? hip : true)) {
      let bf: number;
      if (calcGender === "male") {
        bf = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(h)) - 450;
      } else {
        bf = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(h)) - 450;
      }
      result.bodyFat = parseFloat(bf.toFixed(1));
      result.leanMass = parseFloat((w * (1 - bf / 100)).toFixed(1));
      result.fatMass = parseFloat((w * (bf / 100)).toFixed(1));
    }

    setCalcResult(result);
    setCalcSubmitted(true);
  };

  
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
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/85 border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
        <div className="flex items-center">
          <Link href="/" className="flex items-center group" id="site-logo">
            <img
              src="/logopt.png"
              alt="PersonalTrainer.sg"
              className="h-14 md:h-20 w-auto logo-glow transition-transform duration-300 group-hover:scale-105"
            />
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
                item.name === "Services" ? "text-[#C5A059]" : "text-white"
              }`}
            >
              {item.name}
              <span className={`absolute bottom-0 left-0 w-0 h-[2px] bg-[#800020] transition-all duration-300 group-hover:w-full ${
                item.name === "Services" ? "w-full bg-[#C5A059]" : ""
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


<section className="relative py-24 bg-[#0d0d0d] border-b border-white/5 flex flex-col items-center justify-center text-center overflow-hidden"><div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35 pointer-events-none"></div><div className="absolute left-[-10%] top-[10%] w-[350px] h-[350px] bg-[#800020] rounded-full blur-[150px] opacity-10 pointer-events-none"></div><div className="relative z-10 max-w-5xl mx-auto px-6"><ScrollReveal className="reveal-hidden"><h1 className="text-3xl md:text-6xl font-black font-syne uppercase tracking-tight mb-4 leading-tight">Structured Personal Training <br/><span className="text-[#800020]">for Real Results</span></h1><div className="text-gray-350 text-sm md:text-base max-w-3xl mx-auto mb-8 leading-relaxed font-sans font-normal text-center space-y-3"><p>Professional Personal Training in Singapore for Weight Loss Training, Strength Training, Senior Fitness Training, Couple Training, Kickboxing Fitness, Corporate Wellness and Lifestyle Transformation.</p><p className="text-xs text-white border-l border-r border-[#C5A059] px-4 inline-block">Led by Md Salaudin Adam (DONN), Founder and Fitness Director of PersonalTrainer.sg, Trusted in Singapore Since 2002 with 24 Years of Coaching Experience.</p></div><div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-4xl mx-auto mb-10 text-left"><div className="bg-white/5 border border-white/10 p-3 rounded flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-[10px] sm:text-xs text-white font-bold uppercase tracking-wider font-oswald">Founder and Fitness Director of PersonalTrainer.sg</span></div><div className="bg-white/5 border border-white/10 p-3 rounded flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-[10px] sm:text-xs text-white font-bold uppercase tracking-wider font-oswald">Trusted in Singapore Since 2002</span></div><div className="bg-white/5 border border-white/10 p-3 rounded flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-[10px] sm:text-xs text-white font-bold uppercase tracking-wider font-oswald">24 Years of Coaching Experience</span></div><div className="bg-white/5 border border-white/10 p-3 rounded flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-[10px] sm:text-xs text-white font-bold uppercase tracking-wider font-oswald">Transformation Specialist</span></div><div className="bg-white/5 border border-white/10 p-3 rounded flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-[10px] sm:text-xs text-white font-bold uppercase tracking-wider font-oswald">NASM Certified Personal Trainer</span></div><div className="bg-white/5 border border-white/10 p-3 rounded flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-[10px] sm:text-xs text-white font-bold uppercase tracking-wider font-oswald">TRX Certified Personal Trainer</span></div><div className="bg-white/5 border border-white/10 p-3 rounded flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-[10px] sm:text-xs text-white font-bold uppercase tracking-wider font-oswald">SOE Certified Personal Trainer</span></div><div className="bg-white/5 border border-white/10 p-3 rounded flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-[10px] sm:text-xs text-white font-bold uppercase tracking-wider font-oswald">FMT Fit Muay Trainer</span></div><div className="bg-white/5 border border-white/10 p-3 rounded flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-[10px] sm:text-xs text-white font-bold uppercase tracking-wider font-oswald">CPR and AED Certified</span></div></div><div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto mb-8"><a href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Personal%20Training.%20My%20goal%20is%20to%20improve%20my%20fitness%20and%20I%20would%20like%20to%20know%20more%20about%20the%20training%20options%2C%20availability%20and%20Trial%20Session." target="_blank" rel="noopener noreferrer" className="btn-primary group text-center"><span>WhatsApp PersonalTrainer.sg</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a><a className="btn-outline group text-center" href="/contact#enquiry"><span>Enquire About Training</span></a></div><p className="text-sm uppercase tracking-[0.2em] text-gray-500 font-bold"><a className="hover:text-[#C5A059] transition-colors" href="/">Home</a><span className="mx-3 text-white/20">/</span><span className="text-[#C5A059]">Services</span></p></ScrollReveal></div></section><div className="w-full bg-[#800020] py-6 overflow-hidden border-t border-b border-[#C5A059]/20 whitespace-nowrap flex select-none relative z-20"><div className="animate-marquee flex gap-12 text-3xl md:text-5xl font-black font-syne uppercase tracking-wider text-white"><span>STRENGTH &amp; CONDITIONING</span><span className="text-[#C5A059]">•</span><span className="text-stroke">ATHLETIC PERFORMANCE</span><span className="text-[#C5A059]">•</span><span>HYPERTROPHY FOCUS</span><span className="text-[#C5A059]">•</span><span className="text-stroke">FUNCTIONAL POWER</span><span className="text-[#C5A059]">•</span><span>STRENGTH &amp; CONDITIONING</span><span className="text-[#C5A059]">•</span><span className="text-stroke">ATHLETIC PERFORMANCE</span><span className="text-[#C5A059]">•</span><span>HYPERTROPHY FOCUS</span><span className="text-[#C5A059]">•</span><span className="text-stroke">FUNCTIONAL POWER</span></div></div><section className="bg-[#050505] py-12 md:py-20 px-6 md:px-12 relative overflow-hidden"><div className="max-w-4xl mx-auto text-center"><ScrollReveal className="reveal-hidden"><span className="section-label justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity text-[#C5A059]"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> PHILOSOPHY</span><h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-6 font-syne">Training Programmes Designed Around You</h2><div className="text-white text-sm md:text-base leading-relaxed space-y-4 max-w-3xl mx-auto font-sans"><p>At PersonalTrainer.sg, every training programme is built around your body, your goal, your fitness level and your lifestyle. There is no single programme that works for everyone.</p><p>Some clients want Weight Loss Training. Some clients want Strength Training. Some clients want Body Toning. Some clients want Senior Fitness Training. Some clients want to train together through Couple Training. Some clients want Kickboxing Fitness for stamina, confidence and fat burning. Others need proper structure, discipline and accountability to stay consistent.</p><p className="text-[#C5A059] font-oswald text-lg uppercase tracking-wider">That is why every programme is planned with purpose, adjusted according to ability and guided with proper coaching.</p><p>With Md Salaudin Adam (DONN), you are not just following exercises. You are being coached through a structured fitness system designed to help you train safely, improve progressively and work towards real results.</p></div></ScrollReveal></div></section><section className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5"><ScrollReveal className="reveal-hidden"><div className="text-center mb-16"><span className="section-label justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dumbbell text-[#C5A059]"><path d="M14.4 14.4 9.6 9.6"></path><path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"></path><path d="m21.5 21.5-1.4-1.4"></path><path d="M3.9 3.9 2.5 2.5"></path><path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"></path></svg> BLUEPRINTS</span><h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-4 font-syne">Personal Training Blueprints</h2><p className="text-white max-w-xl mx-auto text-sm md:text-base font-sans">Click on any fitness category card below to expand and view the full details, suitability criteria, and direct enquiry options.</p></div></ScrollReveal><div className="space-y-6"><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 rounded-xl overflow-hidden transition-all duration-500 hover:border-[#C5A059]/20"><div onClick={() => setActiveBlueprint(activeBlueprint === 1 ? null : 1)} className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer select-none"><div className="flex items-start gap-4"><span className="text-3xl font-extrabold font-oswald text-[#C5A059] mt-1 shrink-0">01.</span><div><h3 className="font-oswald text-2xl font-bold uppercase text-white tracking-wide group-hover:text-[#C5A059] transition-colors duration-300">Personal Training</h3><p className="text-white text-sm font-sans mt-1">One to one coaching for structure, accountability and results.</p></div></div><button className="btn-outline py-2 px-4 text-xs font-bold uppercase flex items-center gap-2 shrink-0 self-end md:self-auto">
                    <span>{activeBlueprint === 1 ? "Collapse Details" : "Expand Details"}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-chevron-down transition-transform duration-300 ${activeBlueprint === 1 ? "rotate-180" : ""}`}><path d="m6 9 6 6 6-6"></path></svg>
                  </button></div><div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeBlueprint === 1 ? "max-h-[1500px] opacity-100 py-2" : "max-h-0 opacity-0"}`}><div className="p-6 md:p-8 bg-[#070707] grid lg:grid-cols-12 gap-8 items-start"><div className="lg:col-span-4 h-64 lg:h-full relative overflow-hidden rounded-lg border border-white/5"><img src="https://ext.same-assets.com/3485311241/2419563727.jpeg" alt="Personal Training" className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700"/></div><div className="lg:col-span-8 space-y-6"><p className="text-white text-sm leading-relaxed font-sans">Personal Training is suitable for clients who want proper guidance, professional coaching and a clear training plan. Whether you are a beginner, returning to fitness after a long break, or already training but not seeing the results you want, Personal Training helps you train with better structure, better technique and better focus. Every session is planned according to your fitness level, body condition, goal and lifestyle. You will be guided on proper exercise technique, safe movement, training intensity, progression and consistency.</p><div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-white/5"><div><h4 className="font-oswald text-sm font-bold uppercase tracking-wider text-[#C5A059] mb-4">Who This Is Suitable For</h4><ul className="space-y-3 text-xs text-white font-sans"><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Beginners who need proper guidance</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Busy professionals who need structure</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Clients who want accountability</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Clients who want better form and technique</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Clients who want serious Body Transformation</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Clients who want a personalised training plan</span></li></ul></div><div><h4 className="font-oswald text-sm font-bold uppercase tracking-wider text-[#C5A059] mb-4">Main Focus</h4><ul className="space-y-3 text-xs text-white font-sans"><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Proper exercise coaching</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Strength improvement</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Fat reduction</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Fitness improvement</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Better movement</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Accountability</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Long term consistency</span></li></ul></div></div><div className="bg-[#0c0c0c] border border-white/5 p-6 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-6"><div><p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold font-sans">Training CTA</p><p className="text-white text-xs font-bold font-sans mt-1">Start your Personal Training journey with proper guidance.</p></div><a href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Personal%20Training.%20Please%20advise%20on%20the%20details%20and%20availability." target="_blank" rel="noopener noreferrer" className="btn-primary py-3 px-6 text-xs font-bold uppercase tracking-wider whitespace-nowrap self-end md:self-auto">Enquire About Personal Training</a></div></div></div></div></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 rounded-xl overflow-hidden transition-all duration-500 hover:border-[#C5A059]/20"><div onClick={() => setActiveBlueprint(activeBlueprint === 2 ? null : 2)} className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer select-none"><div className="flex items-start gap-4"><span className="text-3xl font-extrabold font-oswald text-[#C5A059] mt-1 shrink-0">02.</span><div><h3 className="font-oswald text-2xl font-bold uppercase text-white tracking-wide group-hover:text-[#C5A059] transition-colors duration-300">Weight Loss Training</h3><p className="text-white text-sm font-sans mt-1">Structured coaching to help you reduce body fat and build healthier habits.</p></div></div><button className="btn-outline py-2 px-4 text-xs font-bold uppercase flex items-center gap-2 shrink-0 self-end md:self-auto">
                    <span>{activeBlueprint === 2 ? "Collapse Details" : "Expand Details"}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-chevron-down transition-transform duration-300 ${activeBlueprint === 2 ? "rotate-180" : ""}`}><path d="m6 9 6 6 6-6"></path></svg>
                  </button></div><div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeBlueprint === 2 ? "max-h-[1500px] opacity-100 py-2" : "max-h-0 opacity-0"}`}><div className="p-6 md:p-8 bg-[#070707] grid lg:grid-cols-12 gap-8 items-start"><div className="lg:col-span-4 h-64 lg:h-full relative overflow-hidden rounded-lg border border-white/5"><img src="https://ext.same-assets.com/3485311241/2886895772.jpeg" alt="Weight Loss Training" className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700"/></div><div className="lg:col-span-8 space-y-6"><p className="text-white text-sm leading-relaxed font-sans">Weight Loss Training is designed for clients who want to reduce body fat, improve fitness, increase energy and build a stronger, healthier lifestyle. The goal is not extreme dieting or short term weight loss. The goal is sustainable progress through proper training, consistency, nutrition awareness and accountability. Your programme will include a combination of resistance training, conditioning, movement work and lifestyle guidance according to your current fitness level. This approach helps you burn calories, build strength, improve stamina and develop habits that support long term progress.</p><div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-white/5"><div><h4 className="font-oswald text-sm font-bold uppercase tracking-wider text-[#C5A059] mb-4">Who This Is Suitable For</h4><ul className="space-y-3 text-xs text-white font-sans"><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Clients who want Weight Loss</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Clients who want Fat Reduction</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Clients who feel unfit or low in energy</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Clients who need structure and discipline</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Clients who have tried many times but lost consistency</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Clients who want a realistic and practical approach</span></li></ul></div><div><h4 className="font-oswald text-sm font-bold uppercase tracking-wider text-[#C5A059] mb-4">Main Focus</h4><ul className="space-y-3 text-xs text-white font-sans"><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Fat reduction</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Improved stamina</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Strength improvement</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Better energy</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Lifestyle discipline</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Training consistency</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Confidence building</span></li></ul></div></div><div className="bg-[#0c0c0c] border border-white/5 p-6 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-6"><div><p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold font-sans">Training CTA</p><p className="text-white text-xs font-bold font-sans mt-1">Take the first step towards a healthier and stronger body.</p></div><a href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Weight%20Loss%20Training.%20Please%20advise%20on%20the%20details%20and%20availability." target="_blank" rel="noopener noreferrer" className="btn-primary py-3 px-6 text-xs font-bold uppercase tracking-wider whitespace-nowrap self-end md:self-auto">Enquire About Weight Loss Training</a></div></div></div></div></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 rounded-xl overflow-hidden transition-all duration-500 hover:border-[#C5A059]/20"><div onClick={() => setActiveBlueprint(activeBlueprint === 3 ? null : 3)} className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer select-none"><div className="flex items-start gap-4"><span className="text-3xl font-extrabold font-oswald text-[#C5A059] mt-1 shrink-0">03.</span><div><h3 className="font-oswald text-2xl font-bold uppercase text-white tracking-wide group-hover:text-[#C5A059] transition-colors duration-300">Strength Training and Body Toning</h3><p className="text-white text-sm font-sans mt-1">Build strength, improve body shape and move with more confidence.</p></div></div><button className="btn-outline py-2 px-4 text-xs font-bold uppercase flex items-center gap-2 shrink-0 self-end md:self-auto">
                    <span>{activeBlueprint === 3 ? "Collapse Details" : "Expand Details"}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-chevron-down transition-transform duration-300 ${activeBlueprint === 3 ? "rotate-180" : ""}`}><path d="m6 9 6 6 6-6"></path></svg>
                  </button></div><div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeBlueprint === 3 ? "max-h-[1500px] opacity-100 py-2" : "max-h-0 opacity-0"}`}><div className="p-6 md:p-8 bg-[#070707] grid lg:grid-cols-12 gap-8 items-start"><div className="lg:col-span-4 h-64 lg:h-full relative overflow-hidden rounded-lg border border-white/5"><img src="https://ext.same-assets.com/3485311241/979645386.jpeg" alt="Strength Training and Body Toning" className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700"/></div><div className="lg:col-span-8 space-y-6"><p className="text-white text-sm leading-relaxed font-sans">Strength Training is important for both men and women. It helps improve muscle tone, strength, posture, body shape, confidence and overall physical performance. At PersonalTrainer.sg, Strength Training is planned progressively and safely according to your ability. The focus is on proper form, controlled movement, correct exercise selection and steady improvement over time. This is suitable for clients who want to look stronger, feel stronger and improve their overall body composition.</p><div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-white/5"><div><h4 className="font-oswald text-sm font-bold uppercase tracking-wider text-[#C5A059] mb-4">Who This Is Suitable For</h4><ul className="space-y-3 text-xs text-white font-sans"><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Men and women who want to build strength</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Clients who want Body Toning</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Clients who want better muscle shape</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Clients who want better posture</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Clients who want to improve gym confidence</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Clients who want to train with proper technique</span></li></ul></div><div><h4 className="font-oswald text-sm font-bold uppercase tracking-wider text-[#C5A059] mb-4">Main Focus</h4><ul className="space-y-3 text-xs text-white font-sans"><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Strength improvement</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Muscle toning</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Resistance training</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Better posture</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Improved body shape</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Exercise control</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Training progression</span></li></ul></div></div><div className="bg-[#0c0c0c] border border-white/5 p-6 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-6"><div><p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold font-sans">Training CTA</p><p className="text-white text-xs font-bold font-sans mt-1">Train with purpose and build a stronger body.</p></div><a href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Strength%20Training%20and%20Body%20Toning.%20Please%20advise%20on%20the%20details%20and%20availability." target="_blank" rel="noopener noreferrer" className="btn-primary py-3 px-6 text-xs font-bold uppercase tracking-wider whitespace-nowrap self-end md:self-auto">Enquire About Strength Training</a></div></div></div></div></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 rounded-xl overflow-hidden transition-all duration-500 hover:border-[#C5A059]/20"><div onClick={() => setActiveBlueprint(activeBlueprint === 4 ? null : 4)} className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer select-none"><div className="flex items-start gap-4"><span className="text-3xl font-extrabold font-oswald text-[#C5A059] mt-1 shrink-0">04.</span><div><h3 className="font-oswald text-2xl font-bold uppercase text-white tracking-wide group-hover:text-[#C5A059] transition-colors duration-300">Senior Fitness Training</h3><p className="text-white text-sm font-sans mt-1">Safe, structured and practical training for older adults.</p></div></div><button className="btn-outline py-2 px-4 text-xs font-bold uppercase flex items-center gap-2 shrink-0 self-end md:self-auto">
                    <span>{activeBlueprint === 4 ? "Collapse Details" : "Expand Details"}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-chevron-down transition-transform duration-300 ${activeBlueprint === 4 ? "rotate-180" : ""}`}><path d="m6 9 6 6 6-6"></path></svg>
                  </button></div><div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeBlueprint === 4 ? "max-h-[1500px] opacity-100 py-2" : "max-h-0 opacity-0"}`}><div className="p-6 md:p-8 bg-[#070707] grid lg:grid-cols-12 gap-8 items-start"><div className="lg:col-span-4 h-64 lg:h-full relative overflow-hidden rounded-lg border border-white/5"><img src="https://ext.same-assets.com/3485311241/3174217156.jpeg" alt="Senior Fitness Training" className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700"/></div><div className="lg:col-span-8 space-y-6"><p className="text-white text-sm leading-relaxed font-sans">Senior Fitness Training is designed for older adults who want to improve strength, balance, mobility, stability and daily movement confidence. The programme is adjusted according to the client’s ability, comfort level, medical background and current fitness condition. The focus is not on pushing aggressively. The focus is on safe movement, better control, stronger muscles, improved balance and confidence in daily activities. Training can help seniors maintain independence, move better and feel more capable in everyday life.</p><div className="bg-[#800020]/10 border border-[#800020]/30 p-4 rounded text-xs text-white italic font-sans flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>For clients with medical conditions, doctor’s clearance may be required before starting training.</span></div><div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-white/5"><div><h4 className="font-oswald text-sm font-bold uppercase tracking-wider text-[#C5A059] mb-4">Who This Is Suitable For</h4><ul className="space-y-3 text-xs text-white font-sans"><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Older adults who want safe training</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Seniors who want better strength</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Seniors who want better balance</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Seniors who want better mobility</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Seniors returning to exercise</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Seniors who need careful and structured coaching</span></li></ul></div><div><h4 className="font-oswald text-sm font-bold uppercase tracking-wider text-[#C5A059] mb-4">Main Focus</h4><ul className="space-y-3 text-xs text-white font-sans"><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Safe exercise selection</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Strength maintenance</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Balance improvement</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Mobility work</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Posture support</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Daily movement confidence</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Progress at a comfortable pace</span></li></ul></div></div><div className="bg-[#0c0c0c] border border-white/5 p-6 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-6"><div><p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold font-sans">Training CTA</p><p className="text-white text-xs font-bold font-sans mt-1">Improve strength, movement and confidence safely.</p></div><a href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Senior%20Fitness%20Training.%20Please%20advise%20on%20the%20details%20and%20availability." target="_blank" rel="noopener noreferrer" className="btn-primary py-3 px-6 text-xs font-bold uppercase tracking-wider whitespace-nowrap self-end md:self-auto">Enquire About Senior Fitness Training</a></div></div></div></div></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 rounded-xl overflow-hidden transition-all duration-500 hover:border-[#C5A059]/20"><div onClick={() => setActiveBlueprint(activeBlueprint === 5 ? null : 5)} className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer select-none"><div className="flex items-start gap-4"><span className="text-3xl font-extrabold font-oswald text-[#C5A059] mt-1 shrink-0">05.</span><div><h3 className="font-oswald text-2xl font-bold uppercase text-white tracking-wide group-hover:text-[#C5A059] transition-colors duration-300">Couple Training</h3><p className="text-white text-sm font-sans mt-1">Train together, stay motivated and work towards better fitness as a team.</p></div></div><button className="btn-outline py-2 px-4 text-xs font-bold uppercase flex items-center gap-2 shrink-0 self-end md:self-auto">
                    <span>{activeBlueprint === 5 ? "Collapse Details" : "Expand Details"}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-chevron-down transition-transform duration-300 ${activeBlueprint === 5 ? "rotate-180" : ""}`}><path d="m6 9 6 6 6-6"></path></svg>
                  </button></div><div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeBlueprint === 5 ? "max-h-[1500px] opacity-100 py-2" : "max-h-0 opacity-0"}`}><div className="p-6 md:p-8 bg-[#070707] grid lg:grid-cols-12 gap-8 items-start"><div className="lg:col-span-4 h-64 lg:h-full relative overflow-hidden rounded-lg border border-white/5"><img src="https://ext.same-assets.com/3485311241/2060538637.jpeg" alt="Couple Training" className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700"/></div><div className="lg:col-span-8 space-y-6"><p className="text-white text-sm leading-relaxed font-sans">Couple Training is suitable for spouses, partners, friends or family members who want to train together. Training together can make fitness more enjoyable, motivating and consistent. Each session can be adjusted according to both individuals, even if both clients have different fitness levels or different goals. The programme can include Weight Loss Training, Strength Training, Body Toning, Fitness Conditioning and general lifestyle improvement.</p><div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-white/5"><div><h4 className="font-oswald text-sm font-bold uppercase tracking-wider text-[#C5A059] mb-4">Who This Is Suitable For</h4><ul className="space-y-3 text-xs text-white font-sans"><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Husband and wife</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Couples</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Friends</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Family members</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Training partners</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Clients who want motivation and accountability together</span></li></ul></div><div><h4 className="font-oswald text-sm font-bold uppercase tracking-wider text-[#C5A059] mb-4">Main Focus</h4><ul className="space-y-3 text-xs text-white font-sans"><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Shared motivation</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Fitness improvement</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Weight Loss support</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Strength Training</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Body Toning</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Lifestyle consistency</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Accountability together</span></li></ul></div></div><div className="bg-[#0c0c0c] border border-white/5 p-6 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-6"><div><p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold font-sans">Training CTA</p><p className="text-white text-xs font-bold font-sans mt-1">Train together and build a healthier lifestyle together.</p></div><a href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Couple%20Training.%20Please%20advise%20on%20the%20details%20and%20availability." target="_blank" rel="noopener noreferrer" className="btn-primary py-3 px-6 text-xs font-bold uppercase tracking-wider whitespace-nowrap self-end md:self-auto">Enquire About Couple Training</a></div></div></div></div></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 rounded-xl overflow-hidden transition-all duration-500 hover:border-[#C5A059]/20"><div onClick={() => setActiveBlueprint(activeBlueprint === 6 ? null : 6)} className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer select-none"><div className="flex items-start gap-4"><span className="text-3xl font-extrabold font-oswald text-[#C5A059] mt-1 shrink-0">06.</span><div><h3 className="font-oswald text-2xl font-bold uppercase text-white tracking-wide group-hover:text-[#C5A059] transition-colors duration-300">Kickboxing Fitness</h3><p className="text-white text-sm font-sans mt-1">High energy training for stamina, fat burning and confidence.</p></div></div><button className="btn-outline py-2 px-4 text-xs font-bold uppercase flex items-center gap-2 shrink-0 self-end md:self-auto">
                    <span>{activeBlueprint === 6 ? "Collapse Details" : "Expand Details"}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-chevron-down transition-transform duration-300 ${activeBlueprint === 6 ? "rotate-180" : ""}`}><path d="m6 9 6 6 6-6"></path></svg>
                  </button></div><div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeBlueprint === 6 ? "max-h-[1500px] opacity-100 py-2" : "max-h-0 opacity-0"}`}><div className="p-6 md:p-8 bg-[#070707] grid lg:grid-cols-12 gap-8 items-start"><div className="lg:col-span-4 h-64 lg:h-full relative overflow-hidden rounded-lg border border-white/5"><img src="https://ext.same-assets.com/3485311241/1906150620.jpeg" alt="Kickboxing Fitness" className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700"/></div><div className="lg:col-span-8 space-y-6"><p className="text-white text-sm leading-relaxed font-sans">Kickboxing Fitness is a dynamic training option for clients who want a more energetic and challenging workout style. This programme uses kickboxing inspired movements to improve stamina, coordination, movement confidence, conditioning and calorie burning. It is suitable for clients who want to enjoy training while still working hard towards fitness and body transformation goals. Kickboxing Fitness can be combined with Personal Training, Weight Loss Training or Strength Training depending on your programme.</p><div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-white/5"><div><h4 className="font-oswald text-sm font-bold uppercase tracking-wider text-[#C5A059] mb-4">Who This Is Suitable For</h4><ul className="space-y-3 text-xs text-white font-sans"><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Clients who enjoy high energy workouts</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Clients who want Fat Burning</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Clients who want better stamina</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Clients who want better coordination</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Clients who want a more exciting training style</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Clients who want to build confidence through movement</span></li></ul></div><div><h4 className="font-oswald text-sm font-bold uppercase tracking-wider text-[#C5A059] mb-4">Main Focus</h4><ul className="space-y-3 text-xs text-white font-sans"><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Stamina improvement</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Fitness conditioning</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Fat burning</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Coordination</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Movement confidence</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Cardio fitness</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Training variety</span></li></ul></div></div><div className="bg-[#0c0c0c] border border-white/5 p-6 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-6"><div><p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold font-sans">Training CTA</p><p className="text-white text-xs font-bold font-sans mt-1">Make your training more powerful, active and exciting.</p></div><a href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Kickboxing%20Fitness.%20Please%20advise%20on%20the%20details%20and%20availability." target="_blank" rel="noopener noreferrer" className="btn-primary py-3 px-6 text-xs font-bold uppercase tracking-wider whitespace-nowrap self-end md:self-auto">Enquire About Kickboxing Fitness</a></div></div></div></div></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 rounded-xl overflow-hidden transition-all duration-500 hover:border-[#C5A059]/20"><div onClick={() => setActiveBlueprint(activeBlueprint === 7 ? null : 7)} className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer select-none"><div className="flex items-start gap-4"><span className="text-3xl font-extrabold font-oswald text-[#C5A059] mt-1 shrink-0">07.</span><div><h3 className="font-oswald text-2xl font-bold uppercase text-white tracking-wide group-hover:text-[#C5A059] transition-colors duration-300">Corporate Wellness</h3><p className="text-white text-sm font-sans mt-1">Fitness and wellness support for companies, teams and professionals.</p></div></div><button className="btn-outline py-2 px-4 text-xs font-bold uppercase flex items-center gap-2 shrink-0 self-end md:self-auto">
                    <span>{activeBlueprint === 7 ? "Collapse Details" : "Expand Details"}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-chevron-down transition-transform duration-300 ${activeBlueprint === 7 ? "rotate-180" : ""}`}><path d="m6 9 6 6 6-6"></path></svg>
                  </button></div><div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeBlueprint === 7 ? "max-h-[1500px] opacity-100 py-2" : "max-h-0 opacity-0"}`}><div className="p-6 md:p-8 bg-[#070707] grid lg:grid-cols-12 gap-8 items-start"><div className="lg:col-span-4 h-64 lg:h-full relative overflow-hidden rounded-lg border border-white/5"><img src="https://ext.same-assets.com/3485311241/2657269775.jpeg" alt="Corporate Wellness" className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700"/></div><div className="lg:col-span-8 space-y-6"><p className="text-white text-sm leading-relaxed font-sans">Corporate Wellness is designed for companies, teams and working professionals who want to improve health, energy, fitness and workplace performance. A healthier team can be more energetic, more confident and more productive. Corporate Wellness sessions can be customised based on the company’s goals, available space, group size and schedule. Programmes may include fitness sessions, group workouts, lifestyle coaching, weight management support and practical wellness education.</p><div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-white/5"><div><h4 className="font-oswald text-sm font-bold uppercase tracking-wider text-[#C5A059] mb-4">Who This Is Suitable For</h4><ul className="space-y-3 text-xs text-white font-sans"><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Companies</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Corporate teams</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Office professionals</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Employee wellness programmes</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Group fitness sessions</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Workplace health initiatives</span></li></ul></div><div><h4 className="font-oswald text-sm font-bold uppercase tracking-wider text-[#C5A059] mb-4">Main Focus</h4><ul className="space-y-3 text-xs text-white font-sans"><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Fitness improvement</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Energy improvement</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Team motivation</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Lifestyle awareness</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Weight management support</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Group accountability</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Workplace wellness</span></li></ul></div></div><div className="bg-[#0c0c0c] border border-white/5 p-6 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-6"><div><p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold font-sans">Training CTA</p><p className="text-white text-xs font-bold font-sans mt-1">Build a healthier and more active team.</p></div><a href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Corporate%20Wellness.%20Please%20advise%20on%20the%20details%20and%20availability." target="_blank" rel="noopener noreferrer" className="btn-primary py-3 px-6 text-xs font-bold uppercase tracking-wider whitespace-nowrap self-end md:self-auto">Enquire About Corporate Wellness</a></div></div></div></div></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 rounded-xl overflow-hidden transition-all duration-500 hover:border-[#C5A059]/20"><div onClick={() => setActiveBlueprint(activeBlueprint === 8 ? null : 8)} className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer select-none"><div className="flex items-start gap-4"><span className="text-3xl font-extrabold font-oswald text-[#C5A059] mt-1 shrink-0">08.</span><div><h3 className="font-oswald text-2xl font-bold uppercase text-white tracking-wide group-hover:text-[#C5A059] transition-colors duration-300">Online Coaching</h3><p className="text-white text-sm font-sans mt-1">Flexible coaching support for clients who need structure and accountability.</p></div></div><button className="btn-outline py-2 px-4 text-xs font-bold uppercase flex items-center gap-2 shrink-0 self-end md:self-auto">
                    <span>{activeBlueprint === 8 ? "Collapse Details" : "Expand Details"}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-chevron-down transition-transform duration-300 ${activeBlueprint === 8 ? "rotate-180" : ""}`}><path d="m6 9 6 6 6-6"></path></svg>
                  </button></div><div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeBlueprint === 8 ? "max-h-[1500px] opacity-100 py-2" : "max-h-0 opacity-0"}`}><div className="p-6 md:p-8 bg-[#070707] grid lg:grid-cols-12 gap-8 items-start"><div className="lg:col-span-4 h-64 lg:h-full relative overflow-hidden rounded-lg border border-white/5"><img src="https://ext.same-assets.com/3485311241/1335261477.jpeg" alt="Online Coaching" className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700"/></div><div className="lg:col-span-8 space-y-6"><p className="text-white text-sm leading-relaxed font-sans">Online Coaching is suitable for clients who want guidance, structure and accountability but prefer a more flexible training arrangement. This option is useful for clients who travel, have busy schedules, train from home, or already have gym access but need a proper plan. Online Coaching can include workout planning, fitness guidance, accountability support and progress review depending on the client’s needs.</p><div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-white/5"><div><h4 className="font-oswald text-sm font-bold uppercase tracking-wider text-[#C5A059] mb-4">Who This Is Suitable For</h4><ul className="space-y-3 text-xs text-white font-sans"><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Busy professionals</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Clients who travel often</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Clients who train from home</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Clients who already use a gym</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Clients who need structure and accountability</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[#800020] shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg><span>Clients who prefer flexible coaching support</span></li></ul></div><div><h4 className="font-oswald text-sm font-bold uppercase tracking-wider text-[#C5A059] mb-4">Main Focus</h4><ul className="space-y-3 text-xs text-white font-sans"><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Workout structure</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Fitness planning</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Accountability</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Progress tracking</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Lifestyle consistency</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Remote guidance</span></li><li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0 mt-0.5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Flexible training support</span></li></ul></div></div><div className="bg-[#0c0c0c] border border-white/5 p-6 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-6"><div><p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold font-sans">Training CTA</p><p className="text-white text-xs font-bold font-sans mt-1">Stay guided even when you train on your own.</p></div><a href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Online%20Coaching.%20Please%20advise%20on%20the%20details%20and%20availability." target="_blank" rel="noopener noreferrer" className="btn-primary py-3 px-6 text-xs font-bold uppercase tracking-wider whitespace-nowrap self-end md:self-auto">Enquire About Online Coaching</a></div></div></div></div></div></ScrollReveal></div></section><section className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5"><ScrollReveal className="reveal-hidden"><div className="text-center mb-16"><span className="section-label justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity text-[#C5A059]"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> WORKFLOW</span><h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-4 font-syne">How the Training Process Works</h2><p className="text-[#C5A059] font-oswald text-lg uppercase tracking-wider">Starting your fitness journey should be clear, simple and properly guided.</p><p className="text-white max-w-2xl mx-auto text-sm font-sans mt-4">At PersonalTrainer.sg, the process is designed to understand your goal first before recommending the right training direction.</p></div></ScrollReveal><div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6"><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-lg hover:border-[#800020]/30 transition-all duration-300 h-full flex flex-col justify-between"><div><span className="text-3xl font-extrabold font-oswald text-[#C5A059] block mb-3">01</span><h3 className="font-oswald text-sm font-bold uppercase text-white mb-2 tracking-wide">Initial Enquiry</h3></div><p className="text-gray-450 text-[11px] leading-relaxed font-sans mt-2">Send a WhatsApp message or enquiry form with your goal, current fitness level, location and preferred training schedule.</p></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-lg hover:border-[#800020]/30 transition-all duration-300 h-full flex flex-col justify-between"><div><span className="text-3xl font-extrabold font-oswald text-[#C5A059] block mb-3">02</span><h3 className="font-oswald text-sm font-bold uppercase text-white mb-2 tracking-wide">Fitness Discussion</h3></div><p className="text-gray-450 text-[11px] leading-relaxed font-sans mt-2">We will discuss your current condition, training background, lifestyle, schedule and main fitness objectives.</p></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-lg hover:border-[#800020]/30 transition-all duration-300 h-full flex flex-col justify-between"><div><span className="text-3xl font-extrabold font-oswald text-[#C5A059] block mb-3">03</span><h3 className="font-oswald text-sm font-bold uppercase text-white mb-2 tracking-wide">Trial Session</h3></div><p className="text-gray-450 text-[11px] leading-relaxed font-sans mt-2">The Trial Session helps assess your fitness level, movement, training suitability and programme direction.</p></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-lg hover:border-[#800020]/30 transition-all duration-300 h-full flex flex-col justify-between"><div><span className="text-3xl font-extrabold font-oswald text-[#C5A059] block mb-3">04</span><h3 className="font-oswald text-sm font-bold uppercase text-white mb-2 tracking-wide">Programme Planning</h3></div><p className="text-gray-450 text-[11px] leading-relaxed font-sans mt-2">Your programme will be planned based on your goal, body condition, ability and training frequency.</p></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-lg hover:border-[#800020]/30 transition-all duration-300 h-full flex flex-col justify-between"><div><span className="text-3xl font-extrabold font-oswald text-[#C5A059] block mb-3">05</span><h3 className="font-oswald text-sm font-bold uppercase text-white mb-2 tracking-wide">Structured Coaching</h3></div><p className="text-gray-450 text-[11px] leading-relaxed font-sans mt-2">You will start training with proper guidance, progression, accountability and clear direction.</p></div></ScrollReveal></div></section><section className="py-12 md:py-20 px-6 md:px-12 bg-[#0c0c0c] border-t border-b border-white/5 relative overflow-hidden"><div className="max-w-4xl mx-auto text-center relative z-10"><ScrollReveal className="reveal-hidden"><span className="section-label justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-[#C5A059]"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> LOCATIONS</span><h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-6 font-syne">Training Locations in Singapore</h2><p className="text-gray-455 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-sans">Training can be arranged at suitable locations in Singapore depending on availability, suitability and your programme needs. Possible training locations include condo gyms, selected ActiveSG gyms, suitable private gym spaces, suitable outdoor or functional training areas and other approved training environments. Location arrangements can be discussed during enquiry.</p></ScrollReveal></div><div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div></section><section className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto"><div className="grid md:grid-cols-2 gap-12 items-center"><ScrollReveal className="reveal-left-hidden"><span className="section-label"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart text-[#C5A059]"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg> CHOOSING</span><h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-6 font-syne">Not Sure Which Programme <br/><span className="text-[#800020]">Is Right for You?</span></h2></ScrollReveal><ScrollReveal className="reveal-right-hidden"><div className="text-white text-sm leading-relaxed space-y-4 font-sans border-l-2 border-[#800020] pl-6"><p>You do not need to know exactly which service to choose before contacting PersonalTrainer.sg.</p><p>Many clients start with a general goal such as losing weight, getting stronger, improving fitness, reducing body fat or becoming more confident.</p><p>From there, the right training direction can be recommended based on your current fitness level, lifestyle, schedule and body condition.</p><p className="text-white font-bold">The most important step is to start with a proper discussion.</p></div></ScrollReveal></div></section><section className="bg-[#050505] py-12 md:py-20 px-6 md:px-12 relative overflow-hidden border-t border-white/5"><div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center"><div className="lg:col-span-5"><ScrollReveal className="reveal-left-hidden"><span className="section-label"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square text-[#C5A059]"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> TESTIMONIAL</span><h2 className="text-4xl md:text-5xl font-black uppercase font-syne mb-6 leading-tight">Trusted by Our <br/><span className="text-[#800020]">Community</span></h2><p className="text-white text-base leading-relaxed mb-8 font-sans">Discover the actual training experiences shared by our community members who committed to the FitCore routine.</p><div className="flex gap-4"><button onClick={prevTestimonial} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#800020] hover:border-[#800020] hover:text-white transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"></path></svg></button><button onClick={nextTestimonial} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#800020] hover:border-[#800020] hover:text-white transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"></path></svg></button></div></ScrollReveal></div><div className="lg:col-span-7"><ScrollReveal className="reveal-right-hidden"><div className="relative bg-[#0d0d0d] border border-white/5 p-6 sm:p-8 md:p-12 rounded-lg"><div className="absolute right-8 top-8 text-white/5 pointer-events-none"><span className="text-8xl font-serif text-[#C5A059]/20">"</span></div><div className="min-h-[160px] flex flex-col justify-between">
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
                    </div></div></ScrollReveal></div></div></section><section className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 border-t border-white/5"><div className="lg:col-span-5"><ScrollReveal className="reveal-left-hidden"><span className="section-label"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square text-[#C5A059]"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> FAQS</span><h2 className="text-4xl md:text-5xl font-black uppercase font-syne mb-6 leading-tight">Clear answers to <br/><span className="text-[#800020]">common inquiries.</span></h2><p className="text-white text-sm leading-relaxed mb-8 font-sans">Cannot find the specific details you need? Please connect with our active desk consultants or call our hotline.</p><a className="btn-outline inline-flex" href="/contact"><span>GET IN TOUCH</span></a></ScrollReveal></div><div className="lg:col-span-7 space-y-4"><ScrollReveal className="reveal-right-hidden"><div className="bg-[#0d0d0d] border border-white/5 rounded-lg overflow-hidden transition-all duration-300"><button onClick={() => setActiveFaq(activeFaq === 1 ? null : 1)} className="w-full flex justify-between items-center p-6 text-left hover:text-[#C5A059] transition-colors duration-300 focus:outline-none"><span className="font-oswald text-lg font-bold tracking-wide uppercase text-white">What should I prepare for my first session?</span><div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#C5A059] transition-transform duration-300 ${activeFaq === 1 ? "bg-[#800020] border-[#800020] text-white" : ""}`}>
                        {activeFaq === 1 ? <Minus size={16} /> : <Plus size={16} />}
                      </div></button><div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeFaq === 1 ? "max-h-[500px] opacity-100 py-2" : "max-h-0 opacity-0"}`}><div className="p-6 text-sm text-white leading-relaxed bg-[#050505] font-sans">Bring a bottle of water, a sweat towel, and wear comfortable athletic clothing and shoes.</div></div></div></ScrollReveal><ScrollReveal className="reveal-right-hidden"><div className="bg-[#0d0d0d] border border-white/5 rounded-lg overflow-hidden transition-all duration-300"><button onClick={() => setActiveFaq(activeFaq === 2 ? null : 2)} className="w-full flex justify-between items-center p-6 text-left hover:text-[#C5A059] transition-colors duration-300 focus:outline-none"><span className="font-oswald text-lg font-bold tracking-wide uppercase text-white">Do I need a condo gym or private gym access?</span><div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#C5A059] transition-transform duration-300 ${activeFaq === 2 ? "bg-[#800020] border-[#800020] text-white" : ""}`}>
                        {activeFaq === 2 ? <Minus size={16} /> : <Plus size={16} />}
                      </div></button><div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeFaq === 2 ? "max-h-[500px] opacity-100 py-2" : "max-h-0 opacity-0"}`}><div className="p-6 text-sm text-white leading-relaxed bg-[#050505] font-sans">Training can be arranged at suitable locations in Singapore, including condo gyms, selected ActiveSG gyms, and other suitable training environments.</div></div></div></ScrollReveal><ScrollReveal className="reveal-right-hidden"><div className="bg-[#0d0d0d] border border-white/5 rounded-lg overflow-hidden transition-all duration-300"><button onClick={() => setActiveFaq(activeFaq === 3 ? null : 3)} className="w-full flex justify-between items-center p-6 text-left hover:text-[#C5A059] transition-colors duration-300 focus:outline-none"><span className="font-oswald text-lg font-bold tracking-wide uppercase text-white">How do I book a Trial Session?</span><div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#C5A059] transition-transform duration-300 ${activeFaq === 3 ? "bg-[#800020] border-[#800020] text-white" : ""}`}>
                        {activeFaq === 3 ? <Minus size={16} /> : <Plus size={16} />}
                      </div></button><div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeFaq === 3 ? "max-h-[500px] opacity-100 py-2" : "max-h-0 opacity-0"}`}><div className="p-6 text-sm text-white leading-relaxed bg-[#050505] font-sans">You can enquire about a trial session via WhatsApp or our contact form to discuss your goals, current condition, and schedule.</div></div></div></ScrollReveal><ScrollReveal className="reveal-right-hidden"><div className="bg-[#0d0d0d] border border-white/5 rounded-lg overflow-hidden transition-all duration-300"><button onClick={() => setActiveFaq(activeFaq === 4 ? null : 4)} className="w-full flex justify-between items-center p-6 text-left hover:text-[#C5A059] transition-colors duration-300 focus:outline-none"><span className="font-oswald text-lg font-bold tracking-wide uppercase text-white">Who will be my personal trainer?</span><div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#C5A059] transition-transform duration-300 ${activeFaq === 4 ? "bg-[#800020] border-[#800020] text-white" : ""}`}>
                        {activeFaq === 4 ? <Minus size={16} /> : <Plus size={16} />}
                      </div></button><div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeFaq === 4 ? "max-h-[500px] opacity-100 py-2" : "max-h-0 opacity-0"}`}><div className="p-6 text-sm text-white leading-relaxed bg-[#050505] font-sans">You will be coached directly by Md Salaudin Adam (DONN), Founder and Fitness Director of PersonalTrainer.sg, who has 24 years of coaching experience.</div></div></div></ScrollReveal><ScrollReveal className="reveal-right-hidden"><div className="bg-[#0d0d0d] border border-white/5 rounded-lg overflow-hidden transition-all duration-300"><button onClick={() => setActiveFaq(activeFaq === 5 ? null : 5)} className="w-full flex justify-between items-center p-6 text-left hover:text-[#C5A059] transition-colors duration-300 focus:outline-none"><span className="font-oswald text-lg font-bold tracking-wide uppercase text-white">What training styles do you specialize in?</span><div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#C5A059] transition-transform duration-300 ${activeFaq === 5 ? "bg-[#800020] border-[#800020] text-white" : ""}`}>
                        {activeFaq === 5 ? <Minus size={16} /> : <Plus size={16} />}
                      </div></button><div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeFaq === 5 ? "max-h-[500px] opacity-100 py-2" : "max-h-0 opacity-0"}`}><div className="p-6 text-sm text-white leading-relaxed bg-[#050505] font-sans">We provide structured coaching for Weight Loss, Strength Training, Senior Fitness, Couple Training, Kickboxing Fitness and Lifestyle Transformation.</div></div></div></ScrollReveal><ScrollReveal className="reveal-right-hidden"><div className="bg-[#0d0d0d] border border-white/5 rounded-lg overflow-hidden transition-all duration-300"><button onClick={() => setActiveFaq(activeFaq === 6 ? null : 6)} className="w-full flex justify-between items-center p-6 text-left hover:text-[#C5A059] transition-colors duration-300 focus:outline-none"><span className="font-oswald text-lg font-bold tracking-wide uppercase text-white">How are payments and bookings structured?</span><div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#C5A059] transition-transform duration-300 ${activeFaq === 6 ? "bg-[#800020] border-[#800020] text-white" : ""}`}>
                        {activeFaq === 6 ? <Minus size={16} /> : <Plus size={16} />}
                      </div></button><div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeFaq === 6 ? "max-h-[500px] opacity-100 py-2" : "max-h-0 opacity-0"}`}><div className="p-6 text-sm text-white leading-relaxed bg-[#050505] font-sans">Bookings are scheduled in advance. You can discuss flexible package options and payment methods during or after your trial session.</div></div></div></ScrollReveal></div></section><section className="relative py-24 px-6 md:px-12 bg-black overflow-hidden border-t border-b border-white/5"><div className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none" style={{backgroundImage: "url('https://templates.sparklethings.com/fitcore/wp-content/uploads/sites/103/2025/09/image-EESS33W.jpg')", backgroundAttachment: "fixed" as const}}></div><div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div><div className="max-w-7xl mx-auto relative z-10 text-center md:text-left md:flex md:items-center md:justify-between gap-12"><ScrollReveal className="reveal-left-hidden max-w-2xl"><span className="section-label justify-center md:justify-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity text-[#C5A059]"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> BLUEPRINT PLAN</span><h2 className="text-3xl md:text-5xl font-black uppercase font-syne mb-6 leading-tight">Start Your Training <br/><span className="text-[#800020]">With the Right Plan</span></h2><p className="text-white text-sm md:text-base mb-0 leading-relaxed font-sans">If you are serious about improving your body, health, fitness, strength and confidence, PersonalTrainer.sg can help you start with structure and proper coaching. Whether your goal is Weight Loss Training, Strength Training, Senior Fitness Training, Couple Training, Kickboxing Fitness or Lifestyle Transformation, the right programme can be planned for you.</p></ScrollReveal><ScrollReveal className="reveal-right-hidden shrink-0 mt-8 md:mt-0"><div className="flex flex-col sm:flex-row gap-4 w-full justify-center"><a href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Personal%20Training.%20My%20goal%20is%20to%20improve%20my%20fitness%20and%20I%20would%20like%20to%20know%20more%20about%20the%20training%20options%2C%20availability%20and%20Trial%20Session." target="_blank" rel="noopener noreferrer" className="btn-primary group flex items-center justify-center gap-2"><span>WhatsApp PersonalTrainer.sg</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a><a className="btn-outline text-center py-4 px-8 text-xs font-bold uppercase tracking-wider" href="/#trial">Book a Trial Session</a></div></ScrollReveal></div></section>
      {/* ══════════════════════════════════════════════════════════════════
          FITNESS CALCULATOR — LEAD GEN SECTION
      ══════════════════════════════════════════════════════════════════ */}
      <section id="fitness-calculator" className="py-16 md:py-24 px-6 md:px-12 bg-[#070707] border-t border-white/5 relative overflow-hidden">
        {/* BG glow */}
        <div className="absolute left-[-10%] top-[20%] w-[400px] h-[400px] bg-[#800020] rounded-full blur-[200px] opacity-10 pointer-events-none" />
        <div className="absolute right-[-10%] bottom-[10%] w-[300px] h-[300px] bg-[#C5A059] rounded-full blur-[200px] opacity-5 pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal className="reveal-hidden">
            <div className="text-center mb-12">
              <span className="section-label justify-center">
                <Activity size={16} className="text-[#C5A059]" /> FREE FITNESS CALCULATOR
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-4 font-syne">
                Know Your Numbers.
              </h2>
              <p className="text-[#C5A059] font-oswald text-lg uppercase tracking-wider mb-2">
                BMI · BMR · Body Fat % · Ideal Weight · Calories
              </p>
              <p className="text-white/70 max-w-xl mx-auto text-sm font-sans leading-relaxed">
                Use this free tool to understand your body better. Get your personalised results instantly — then discover which training programme fits your goals.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="reveal-hidden">
            <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">

              {/* ─── Tab Bar ─────────────────────────────────────────── */}
              <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/10">
                {([
                  { id: "bmi", label: "BMI" },
                  { id: "bmr", label: "BMR / TDEE" },
                  { id: "bodyfat", label: "Body Fat %" },
                  { id: "idealweight", label: "Ideal Weight" },
                ] as const).map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => { setCalcTab(tab.id); setCalcResult(null); setCalcSubmitted(false); }}
                    className={`py-4 px-3 text-xs font-bold uppercase tracking-widest font-oswald transition-all duration-300 border-b-2 ${
                      calcTab === tab.id
                        ? "border-[#800020] text-white bg-[#800020]/10"
                        : "border-transparent text-white/40 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="p-6 md:p-10">
                <div className="grid lg:grid-cols-2 gap-10 items-start">

                  {/* ─── Left: Inputs ──────────────────────────────── */}
                  <div className="space-y-5">
                    <h3 className="font-oswald text-xl font-bold uppercase text-[#C5A059] tracking-wider mb-6">
                      {calcTab === "bmi" && "Calculate Your BMI"}
                      {calcTab === "bmr" && "Calculate Your BMR & TDEE"}
                      {calcTab === "bodyfat" && "Estimate Your Body Fat %"}
                      {calcTab === "idealweight" && "Find Your Ideal Weight"}
                    </h3>

                    {/* Gender Toggle */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-white/60 mb-2 font-oswald">Gender</label>
                      <div className="flex gap-3">
                        {(["male", "female"] as const).map((g) => (
                          <button
                            key={g}
                            onClick={() => { setCalcGender(g); setCalcResult(null); setCalcSubmitted(false); }}
                            className={`flex-1 py-3 text-sm font-bold uppercase tracking-widest font-oswald border transition-all duration-200 ${
                              calcGender === g
                                ? "bg-[#800020] border-[#800020] text-white"
                                : "border-white/10 text-white/50 hover:border-white/30 hover:text-white"
                            }`}
                          >
                            {g === "male" ? "♂ Male" : "♀ Female"}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Height */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-white/60 mb-2 font-oswald">Height (cm)</label>
                      <input
                        type="number"
                        value={calcHeight}
                        onChange={(e) => { setCalcHeight(e.target.value); setCalcResult(null); setCalcSubmitted(false); }}
                        placeholder="e.g. 170"
                        className="w-full bg-[#111] border border-white/10 text-white px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#C5A059] transition-colors duration-200 rounded-lg"
                      />
                    </div>

                    {/* Weight */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-white/60 mb-2 font-oswald">Weight (kg)</label>
                      <input
                        type="number"
                        value={calcWeight}
                        onChange={(e) => { setCalcWeight(e.target.value); setCalcResult(null); setCalcSubmitted(false); }}
                        placeholder="e.g. 75"
                        className="w-full bg-[#111] border border-white/10 text-white px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#C5A059] transition-colors duration-200 rounded-lg"
                      />
                    </div>

                    {/* Age — shown for BMR & body fat */}
                    {(calcTab === "bmr" || calcTab === "bodyfat") && (
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-white/60 mb-2 font-oswald">Age (years)</label>
                        <input
                          type="number"
                          value={calcAge}
                          onChange={(e) => { setCalcAge(e.target.value); setCalcResult(null); setCalcSubmitted(false); }}
                          placeholder="e.g. 35"
                          className="w-full bg-[#111] border border-white/10 text-white px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#C5A059] transition-colors duration-200 rounded-lg"
                        />
                      </div>
                    )}

                    {/* Activity Level — shown for BMR */}
                    {calcTab === "bmr" && (
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-white/60 mb-2 font-oswald">Activity Level</label>
                        <select
                          value={calcActivity}
                          onChange={(e) => { setCalcActivity(e.target.value); setCalcResult(null); setCalcSubmitted(false); }}
                          className="w-full bg-[#111] border border-white/10 text-white px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#C5A059] transition-colors duration-200 rounded-lg"
                        >
                          <option value="1.2">Sedentary (little or no exercise)</option>
                          <option value="1.375">Lightly Active (1–3 days/week)</option>
                          <option value="1.55">Moderately Active (3–5 days/week)</option>
                          <option value="1.725">Very Active (6–7 days/week)</option>
                          <option value="1.9">Extra Active (hard training daily)</option>
                        </select>
                      </div>
                    )}

                    {/* Body Fat Measurements */}
                    {calcTab === "bodyfat" && (
                      <>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-white/60 mb-2 font-oswald">Neck Circumference (cm)</label>
                          <input type="number" value={calcNeck} onChange={(e) => { setCalcNeck(e.target.value); setCalcResult(null); setCalcSubmitted(false); }} placeholder="e.g. 38" className="w-full bg-[#111] border border-white/10 text-white px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#C5A059] transition-colors duration-200 rounded-lg" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-white/60 mb-2 font-oswald">Waist Circumference (cm)</label>
                          <input type="number" value={calcWaist} onChange={(e) => { setCalcWaist(e.target.value); setCalcResult(null); setCalcSubmitted(false); }} placeholder="e.g. 85" className="w-full bg-[#111] border border-white/10 text-white px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#C5A059] transition-colors duration-200 rounded-lg" />
                        </div>
                        {calcGender === "female" && (
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-white/60 mb-2 font-oswald">Hip Circumference (cm)</label>
                            <input type="number" value={calcHip} onChange={(e) => { setCalcHip(e.target.value); setCalcResult(null); setCalcSubmitted(false); }} placeholder="e.g. 95" className="w-full bg-[#111] border border-white/10 text-white px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#C5A059] transition-colors duration-200 rounded-lg" />
                          </div>
                        )}
                      </>
                    )}

                    <button
                      onClick={runCalculator}
                      className="w-full btn-primary py-4 text-sm tracking-widest mt-2"
                    >
                      Calculate My Results →
                    </button>
                  </div>

                  {/* ─── Right: Results ───────────────────────────── */}
                  <div className="min-h-[300px] flex flex-col justify-start">
                    {!calcSubmitted && (
                      <div className="h-full flex flex-col items-center justify-center text-center py-12 border border-white/5 rounded-xl bg-[#0a0a0a]">
                        <div className="w-16 h-16 rounded-full bg-[#800020]/10 border border-[#800020]/30 flex items-center justify-center mb-4">
                          <Activity size={28} className="text-[#800020]" />
                        </div>
                        <p className="text-white/40 text-sm font-sans max-w-xs leading-relaxed">
                          Fill in your details and click <span className="text-[#C5A059] font-bold">Calculate</span> to see your personalised fitness metrics.
                        </p>
                      </div>
                    )}

                    {calcSubmitted && calcResult && (() => {
                      const bmi = calcResult.bmi as number;
                      const bmiCat = bmi ? getBmiCategory(bmi) : null;
                      const bf = calcResult.bodyFat as number;
                      const bfCat = bf ? getBodyFatCategory(bf, calcGender) : null;
                      const rec = getRecommendedService(calcResult);
                      const waMsg = rec
                        ? `Hi PersonalTrainer.sg, I just used the Fitness Calculator on your website. My results: BMI ${bmi || "N/A"}, Body Fat ${bf || "N/A"}%. Based on this, I am interested in ${rec.name}. Can you advise on availability and Trial Session?`
                        : `Hi PersonalTrainer.sg, I just used the Fitness Calculator. BMI ${bmi || "N/A"}. I would like to know more about Personal Training.`;

                      return (
                        <div className="space-y-4 animate-fadeIn">
                          <h4 className="font-oswald text-lg font-bold uppercase text-white tracking-wider">Your Results</h4>

                          {/* Metric cards */}
                          <div className="grid grid-cols-2 gap-3">
                            {bmi && (
                              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-4 text-center">
                                <p className="text-xs uppercase tracking-widest text-white/40 font-oswald mb-1">BMI</p>
                                <p className="text-3xl font-extrabold font-oswald" style={{ color: bmiCat?.color }}>{bmi}</p>
                                <p className="text-xs font-bold mt-1" style={{ color: bmiCat?.color }}>{bmiCat?.label}</p>
                              </div>
                            )}
                            {calcResult.bmr && (
                              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-4 text-center">
                                <p className="text-xs uppercase tracking-widest text-white/40 font-oswald mb-1">BMR</p>
                                <p className="text-3xl font-extrabold font-oswald text-[#C5A059]">{calcResult.bmr}</p>
                                <p className="text-xs text-white/40 mt-1">kcal / day</p>
                              </div>
                            )}
                            {calcResult.tdee && (
                              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-4 text-center">
                                <p className="text-xs uppercase tracking-widest text-white/40 font-oswald mb-1">TDEE</p>
                                <p className="text-3xl font-extrabold font-oswald text-white">{calcResult.tdee}</p>
                                <p className="text-xs text-white/40 mt-1">kcal / day</p>
                              </div>
                            )}
                            {calcResult.idealWeightMin && (
                              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-4 text-center">
                                <p className="text-xs uppercase tracking-widest text-white/40 font-oswald mb-1">Ideal Weight</p>
                                <p className="text-2xl font-extrabold font-oswald text-[#4ade80]">{calcResult.idealWeightMin}–{calcResult.idealWeightMax}</p>
                                <p className="text-xs text-white/40 mt-1">kg range</p>
                              </div>
                            )}
                            {bf && (
                              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-4 text-center">
                                <p className="text-xs uppercase tracking-widest text-white/40 font-oswald mb-1">Body Fat</p>
                                <p className="text-3xl font-extrabold font-oswald" style={{ color: bfCat?.color }}>{bf}%</p>
                                <p className="text-xs font-bold mt-1" style={{ color: bfCat?.color }}>{bfCat?.label}</p>
                              </div>
                            )}
                            {calcResult.leanMass && (
                              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-4 text-center">
                                <p className="text-xs uppercase tracking-widest text-white/40 font-oswald mb-1">Lean Mass</p>
                                <p className="text-3xl font-extrabold font-oswald text-white">{calcResult.leanMass}</p>
                                <p className="text-xs text-white/40 mt-1">kg</p>
                              </div>
                            )}
                          </div>

                          {/* Calorie targets */}
                          {calcResult.weightLossCalories && (
                            <div className="bg-[#0a0a0a] border border-[#800020]/30 rounded-xl p-4">
                              <p className="text-xs uppercase tracking-widest text-[#800020] font-oswald font-bold mb-2">Calorie Targets</p>
                              <div className="grid grid-cols-2 gap-2 text-xs font-sans">
                                <div className="flex justify-between">
                                  <span className="text-white/50">Weight Loss Goal:</span>
                                  <span className="text-[#f87171] font-bold">{calcResult.weightLossCalories} kcal</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-white/50">Muscle Gain Goal:</span>
                                  <span className="text-[#4ade80] font-bold">{calcResult.weightGainCalories} kcal</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Recommendation + CTA */}
                          {rec && (
                            <div className="bg-gradient-to-br from-[#800020]/20 to-[#C5A059]/10 border border-[#800020]/30 rounded-xl p-5">
                              <p className="text-xs uppercase tracking-widest text-[#C5A059] font-oswald font-bold mb-2">✦ Recommended for You</p>
                              <p className="text-white font-bold font-oswald text-lg uppercase mb-1">{rec.name}</p>
                              <p className="text-white/70 text-xs font-sans leading-relaxed mb-4">{rec.msg}</p>
                              <a
                                href={`https://wa.me/6591081781?text=${encodeURIComponent(waMsg)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary py-3 px-6 text-xs w-full justify-center"
                              >
                                <span>WhatsApp Us — Get Your Free Plan</span>
                                <ArrowRight size={14} />
                              </a>
                            </div>
                          )}

                          <p className="text-white/30 text-[10px] font-sans text-center leading-relaxed">
                            * Results are estimates for educational purposes. Always consult a qualified trainer before starting any fitness programme.
                          </p>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Bottom CTA strip */}
          <ScrollReveal className="reveal-hidden">
            <div className="mt-10 text-center">
              <p className="text-white/40 text-sm font-sans mb-4">Want a professional assessment instead of a calculator?</p>
              <a
                href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20would%20like%20a%20proper%20fitness%20assessment%20and%20Trial%20Session%20to%20understand%20my%20body%20and%20training%20needs."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex gap-2 items-center text-sm"
              >
                <span>Book a Free Fitness Consultation</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <footer id="contact" className="bg-[#050505] py-16 px-6 md:px-12">
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


