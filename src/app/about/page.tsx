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


export default function AboutPage() {
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
                item.name === "About Us" ? "text-[#C5A059]" : "text-white"
              }`}
            >
              {item.name}
              <span className={`absolute bottom-0 left-0 w-0 h-[2px] bg-[#800020] transition-all duration-300 group-hover:w-full ${
                item.name === "About Us" ? "w-full bg-[#C5A059]" : ""
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

      {/* Breadcrumb Header Banner */}
      <section className="relative py-20 bg-[#0d0d0d] border-b border-white/5 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35 pointer-events-none" />
        <div className="absolute left-[-10%] top-[10%] w-[350px] h-[350px] bg-[#800020] rounded-full blur-[150px] opacity-10 pointer-events-none" />
        
        <div className="relative z-10">
          <ScrollReveal className="reveal-hidden">
            <h1 className="text-3xl md:text-5xl font-black font-syne uppercase tracking-tight mb-4 max-w-4xl mx-auto leading-tight">
              Trusted in Singapore Since 2002. <br />
              <span className="text-[#800020]">Built on 24 Years of Coaching Experience.</span>
            </h1>
            <p className="text-white text-sm max-w-2xl mx-auto mb-6 leading-relaxed font-sans normal-case tracking-normal font-normal">
              Md Salaudin Adam (DONN) is the Founder and Fitness Director of PersonalTrainer.sg, providing professional Personal Training in Singapore for clients who want serious results, proper coaching, better health, stronger bodies and long term lifestyle transformation.
            </p>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 font-bold">
              <Link href="/" className="hover:text-[#C5A059] transition-colors">Home</Link> 
              <span className="mx-3 text-white/20">/</span> 
              <span className="text-[#C5A059]">About Us</span>
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

      {/* About Description Section */}
      <section className="bg-[#050505] py-12 md:py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          
          {/* About Image Collage */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <ScrollReveal className="reveal-left-hidden w-full max-w-[480px]">
              <div className="relative">
                <div className="absolute right-[-15px] top-[-15px] w-full h-full border border-[#800020]/40 -z-10" />
                <img
                  src="/about us.avif"
                  alt="Fitness Training"
                  className="w-full h-auto object-contain border-[8px] border-white/5 transition-all duration-700"
                />
                <div className="absolute left-[-30px] bottom-[-30px] w-[180px] h-[180px] border-[6px] border-white/10 hidden sm:block">
                  <img
                    src="/donn-coaching-latpulldown.avif"
                    alt="Trainer close up"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* About Content */}
          <div className="lg:col-span-6">
            <ScrollReveal className="reveal-right-hidden">
              <span className="section-label">
                <Users size={16} className="text-[#C5A059]" /> INTRODUCTION
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.2rem] xl:text-[2.6rem] font-black leading-tight uppercase mb-6 font-syne">
                Meet Md Salaudin Adam (DONN)
              </h2>
              <div className="text-white text-base md:text-lg leading-relaxed mb-8 space-y-4 font-sans">
                <p>
                  Md Salaudin Adam (DONN) is a professional Personal Trainer, Transformation Specialist, and the Founder of PersonalTrainer.sg. Since 2002, he has helped clients across Singapore lose weight, gain strength, improve movement, and build lasting healthy habits.
                </p>
                <p>
                  His coaching is built on 24 years of experience, structured planning, correct form, and personal accountability. Rather than generic templates, every program is customized to fit your unique body type, goals, and busy schedule.
                </p>
              </div>

              {/* Vision & Mission Toggle Panels */}
              <div className="border border-white/10 rounded-lg p-6 bg-[#0d0d0d] mb-8">
                <div className="flex border-b border-white/10 pb-4 mb-4 gap-6">
                  <button
                    onClick={() => setActiveVisionTab("vision")}
                    className={`font-oswald text-lg font-bold uppercase tracking-widest pb-1 transition-all duration-300 ${
                      activeVisionTab === "vision" ? "text-[#800020] border-b-2 border-[#800020]" : "text-gray-500 hover:text-white"
                    }`}
                  >
                    Founder Directives
                  </button>
                  <button
                    onClick={() => setActiveVisionTab("mission")}
                    className={`font-oswald text-lg font-bold uppercase tracking-widest pb-1 transition-all duration-300 ${
                      activeVisionTab === "mission" ? "text-[#800020] border-b-2 border-[#800020]" : "text-gray-500 hover:text-white"
                    }`}
                  >
                    Credentials
                  </button>
                </div>
                <div className="text-white text-sm leading-relaxed min-h-[140px] font-sans">
                  {activeVisionTab === "vision" ? (
                    <ul className="space-y-2 animate-fadeIn">
                      <li className="flex items-center gap-2"><Check size={14} className="text-[#C5A059] shrink-0" /> Founder and Fitness Director</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-[#C5A059] shrink-0" /> Trusted in Singapore Since 2002</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-[#C5A059] shrink-0" /> 24 Years of Coaching Experience</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-[#C5A059] shrink-0" /> Transformation Specialist</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-[#C5A059] shrink-0" /> CPR and AED Certified</li>
                    </ul>
                  ) : (
                    <ul className="space-y-2 animate-fadeIn">
                      <li className="flex items-center gap-2"><Check size={14} className="text-[#C5A059] shrink-0" /> NASM Certified Personal Trainer</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-[#C5A059] shrink-0" /> TRX Certified Personal Trainer</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-[#C5A059] shrink-0" /> SOE Certified Personal Trainer</li>
                      <li className="flex items-center gap-2"><Check size={14} className="text-[#C5A059] shrink-0" /> FMT Fit Muay Trainer</li>
                    </ul>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a href="https://wa.me/6591081781" target="_blank" rel="noopener noreferrer" className="btn-primary group text-center">
                  <span>WhatsApp Me Now</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <Link href="/#trial" className="btn-outline group text-center">
                  <span>Start Your Transformation</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <ScrollReveal className="reveal-hidden">
          <div className="text-center mb-16">
            <span className="section-label justify-center">
              <Dumbbell size={16} className="text-[#C5A059]" /> TRAINING PHILOSOPHY
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-4 font-syne">
              Proper Coaching. Real Structure. Long Term Results.
            </h2>
            <p className="text-white max-w-2xl mx-auto text-sm md:text-base">
              PersonalTrainer.sg has been serving clients in Singapore since 2002. We build results that last.
            </p>
          </div>
        </ScrollReveal>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              title: "More Than a Personal Trainer",
              icon: "https://templates.sparklethings.com/fitcore/wp-content/uploads/sites/103/2025/09/Cardio-white-group.png",
              desc: (
                <>
                  <strong className="text-[#C5A059] block mb-2 font-oswald text-xs uppercase tracking-wider">A structured coaching approach built from real experience.</strong>
                  Personal Training is not only about counting repetitions or making a client sweat. A serious trainer must know how to assess, guide, correct, motivate and adjust the programme according to the client’s body, ability, goal and lifestyle. Md Salaudin Adam (DONN) brings a strong combination of practical experience, professional certifications, discipline and real world coaching knowledge. His training approach is suitable for beginners, busy professionals, seniors, couples, clients with low fitness levels and individuals who want a complete Body Transformation. The goal is always clear: Train safely, train properly, stay consistent, improve progressively, and build results that last.
                </>
              )
            },
            {
              title: "Training Philosophy",
              icon: "https://templates.sparklethings.com/fitcore/wp-content/uploads/sites/103/2025/09/Cardio-white-dumble_1.png",
              desc: (
                <>
                  <strong className="text-[#C5A059] block mb-2 font-oswald text-xs uppercase tracking-wider">Proper Coaching. Real Structure. Long Term Results.</strong>
                  The training philosophy at PersonalTrainer.sg is simple but powerful. Fitness must be practical. Training must be safe. Progress must be structured. Results must be realistic. Every client starts from a different point. Some are new to exercise. Some have trained before but lost consistency. Some want to lose weight. Some want to get stronger. Some want to improve mobility, posture, stamina or confidence. That is why there is no single standard programme for everyone. The right programme must match the client’s current condition, goal, schedule, body type and lifestyle. Md Salaudin Adam (DONN) focuses on helping clients understand how to train properly, move better, build strength, improve confidence and create a fitness routine that can become part of their life. The objective is to build a stronger, healthier and more confident version of yourself.
                </>
              )
            },
            {
              title: "24 Years of Coaching Experience",
              icon: "https://templates.sparklethings.com/fitcore/wp-content/uploads/sites/103/2025/09/Cardio-white-exercise.png",
              desc: (
                <>
                  Experience matters in Personal Training. A trainer with real experience understands that every client responds differently. Some clients need more structure. Some need more confidence. Some need more discipline. Some need safer exercise selection. Some need better movement correction. Some need stronger accountability. Some need a complete lifestyle reset. With 24 Years of Coaching Experience, Md Salaudin Adam (DONN) is able to adjust training based on age, ability, fitness level, body condition and goal. His coaching style combines discipline, encouragement, proper technique and realistic progression. Every session is planned with purpose. Every exercise must have a reason. Every programme must move the client closer to the goal.
                </>
              )
            },
            {
              title: "Trusted in Singapore Since 2002",
              icon: "https://templates.sparklethings.com/fitcore/wp-content/uploads/sites/103/2025/09/Cardio-white-locker_1.png",
              desc: (
                <>
                  PersonalTrainer.sg has been serving clients in Singapore since 2002. Over the years, Md Salaudin Adam (DONN) has coached many different types of clients with different needs, goals, fitness levels and challenges. Some clients come for Weight Loss. Some come for Strength Training. Some come for Senior Fitness. Some come for Couple Training. Some come for Kickboxing Fitness. Some come because they have lost discipline and need accountability. Some come because they want to rebuild confidence and take control of their health again. With more than two decades in the fitness industry, Md Salaudin Adam (DONN) understands that successful transformation requires structure, patience, consistency, education, discipline and the right coaching relationship.
                </>
              )
            },
            {
              title: "Why Experience Matters",
              icon: "https://templates.sparklethings.com/fitcore/wp-content/uploads/sites/103/2025/09/Cardio-white-group.png",
              desc: (
                <>
                  A good Personal Trainer must do more than demonstrate exercises. A good Personal Trainer must be able to read the client, understand limitations, adjust training, correct form, manage intensity and guide progress properly. This is where experience becomes important. With 24 Years of Coaching Experience, Md Salaudin Adam (DONN) understands how to work with different bodies, different personalities, different goals and different levels of fitness. His approach is firm, professional and practical. The aim is to help clients train better, think better, move better and live better.
                </>
              )
            }
          ].map((fac, idx) => (
            <ScrollReveal key={fac.title} className="reveal-hidden" delay={idx * 150}>
              <div className="bg-[#0d0d0d] border border-white/5 p-8 rounded-lg hover:border-[#C5A059]/30 transition-all duration-300 flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-[#161616] flex items-center justify-center mb-6 group-hover:bg-[#800020] transition-all duration-300">
                  <img
                    src={fac.icon}
                    alt={fac.title}
                    className="w-10 h-10 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold font-oswald mb-3 text-white group-hover:text-[#C5A059] transition-colors duration-300 uppercase">
                  {fac.title}
                </h3>
                <div className="text-white text-sm leading-relaxed">
                  {fac.desc}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Who I Help Section */}
      <section className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Text */}
          <div className="lg:col-span-5">
            <ScrollReveal className="reveal-left-hidden">
              <span className="section-label">
                <Users size={16} className="text-[#C5A059]" /> WHO I HELP
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-4 font-syne leading-tight">
                Who I Help
              </h2>
              <p className="text-[#C5A059] font-oswald text-lg uppercase tracking-wider mb-6">
                Personal Training for real people, real lifestyles and real goals.
              </p>
              <p className="text-white text-sm leading-relaxed mb-6 font-sans">
                PersonalTrainer.sg works with clients who want to improve their health, fitness, body shape, strength and confidence.
              </p>
              <p className="text-white text-sm leading-relaxed mb-8 font-sans">
                Whether you are starting from zero, returning after a long break, or trying to take your fitness to the next level, the programme will be adjusted according to your current condition and personal goal.
              </p>
              <Link href="/#trial" className="btn-primary group inline-flex">
                <span>Book a Trial Session</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </ScrollReveal>
          </div>

          {/* Right Column: Grid list */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {[
              { num: "01", title: "Busy Professionals", desc: "Busy professionals who need structure and accountability" },
              { num: "02", title: "Weight Loss & Fat Reduction", desc: "Clients who want Weight Loss and Fat Reduction" },
              { num: "03", title: "Beginners Guidance", desc: "Beginners who need proper guidance from the start" },
              { num: "04", title: "Strength & Body Toning", desc: "Men and women who want Strength and Body Toning" },
              { num: "05", title: "Senior Fitness", desc: "Seniors who want safe and structured Senior Fitness Training" },
              { num: "06", title: "Couple Training", desc: "Couples who want to train together" },
              { num: "07", title: "Kickboxing Fitness", desc: "Clients who want Kickboxing Fitness" },
              { num: "08", title: "Stamina & Movement", desc: "Clients who want better stamina, movement and confidence" },
              { num: "09", title: "Lifestyle Transformation", desc: "Clients who want a complete Lifestyle Transformation" }
            ].map((item, idx) => (
              <ScrollReveal key={item.num} className="reveal-hidden" delay={idx * 100}>
                <div className="bg-[#0d0d0d] border border-white/5 p-5 rounded-lg hover:border-[#800020]/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl font-extrabold font-oswald text-[#C5A059]">{item.num}</span>
                    <h3 className="font-oswald text-md font-bold uppercase text-white tracking-wide">{item.title}</h3>
                  </div>
                  <p className="text-white text-xs leading-relaxed font-sans">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The PersonalTrainer.sg Difference Section */}
      <section className="bg-[#0c0c0c] py-12 md:py-20 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading */}
          <div className="lg:col-span-6">
            <ScrollReveal className="reveal-left-hidden">
              <span className="section-label">
                <Activity size={16} className="text-[#C5A059]" /> THE DIFFERENCE
              </span>
              <h2 className="text-xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-black uppercase mb-4 font-syne leading-tight break-words">
                The <br /> PersonalTrainer.sg <br />
                <span className="text-[#800020]">Difference</span>
              </h2>
              <p className="text-[#C5A059] font-oswald text-lg uppercase tracking-wider mb-6">
                Not random workouts. Not shortcuts. Proper coaching with purpose.
              </p>
              <p className="text-white text-sm leading-relaxed mb-4 font-sans">
                PersonalTrainer.sg is built on experience, discipline, structure and results. The focus is not on trends, gimmicks or temporary motivation. 
              </p>
              <p className="text-white text-sm leading-relaxed mb-6 font-sans">
                The focus is on coaching that helps clients understand their body, improve their movement, build strength, reduce body fat, increase confidence and stay consistent.
              </p>
              <div className="text-xs uppercase tracking-[0.15em] font-bold text-[#C5A059] space-y-1.5 font-oswald mt-4">
                <div>• Every session is designed with intention.</div>
                <div>• Every client is guided with attention.</div>
                <div>• Every transformation starts with one clear decision.</div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Key Difference Points */}
          <div className="lg:col-span-6 bg-[#0d0d0d] border border-white/5 p-8 rounded-lg">
            <ScrollReveal className="reveal-right-hidden">
              <h3 className="font-oswald text-lg font-bold uppercase tracking-wider text-white mb-6">
                Coaching with Purpose
              </h3>
              <ul className="space-y-3 text-sm text-white font-sans">
                {[
                  "Personalised training plan",
                  "Proper exercise coaching",
                  "Clear progress structure",
                  "Safe and effective training methods",
                  "Support for different ages and fitness levels",
                  "Practical lifestyle guidance",
                  "Strong focus on consistency",
                  "Realistic approach to long term fitness",
                  "Professional coaching backed by experience"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check size={14} className="text-[#C5A059] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="bg-[#0c0c0c] py-12 md:py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="reveal-hidden">
            <div className="text-center mb-16">
              <span className="section-label justify-center">
                <Users size={16} className="text-[#C5A059]" /> CREDENTIALS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-4 font-syne">
                Professional Credentials
              </h2>
              <p className="text-white max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                With more than two decades of experience in Singapore’s fitness industry, Md Salaudin Adam (DONN) brings professional coaching, structured programming, discipline and practical guidance to help clients train safely, stay consistent and work towards real results.
              </p>
            </div>
          </ScrollReveal>

          {/* Trainers Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Md Salaudin Adam (DONN)",
                role: "Founder & Fitness Director",
                img: "/donn-coaching-latpulldown.avif"
              },
              {
                name: "24 Years Coaching Experience",
                role: "Trusted in Singapore Since 2002",
                img: "/donn-coaching-elliptical.avif"
              },
              {
                name: "NASM / TRX / SOE",
                role: "Certified Personal Trainer",
                img: "/donn-coaching-barbell.avif"
              },
              {
                name: "FMT Fit Muay / CPR & AED",
                role: "MANHUNT Finalist 2001",
                img: "/donn-flexing.avif"
              }
            ].map((trn, idx) => (
              <ScrollReveal key={trn.name} className="reveal-hidden" delay={idx * 150}>
                <div className="group relative aspect-[3/4] overflow-hidden border border-white/5 bg-[#0d0d0d]">
                  {/* Trainer Image */}
                  <img
                    src={trn.img}
                    alt={trn.name}
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-700 object-top"
                  />
                  
                  {/* Bottom Text Panel */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/90 p-5 text-center z-20 border-t border-white/5 group-hover:border-[#C5A059]/30 transition-colors duration-300">
                    <h3 className="font-oswald text-lg font-bold tracking-wide uppercase text-white group-hover:text-[#C5A059] transition-colors duration-300">
                      {trn.name}
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-[#C5A059] font-bold mt-1">
                      {trn.role}
                    </p>
                  </div>
                  
                  {/* Hover Social Overlay Panel in Maroon */}
                  <div className="absolute inset-0 bg-[#800020]/80 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <a href="https://wa.me/6591081781" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#C5A059] text-black flex items-center justify-center hover:bg-white transition-colors duration-300">
                      <Phone size={16} />
                    </a>
                    <a href="mailto:donn@personaltrainer.sg" className="w-10 h-10 rounded-full bg-[#C5A059] text-black flex items-center justify-center hover:bg-white transition-colors duration-300">
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Banner */}
      <section className="relative py-24 px-6 md:px-12 bg-black overflow-hidden">
        {/* Background Image with darken overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
          style={{
            backgroundImage: "url('https://ext.same-assets.com/3485311241/2686555212.jpeg')",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal className="reveal-left-hidden">
            <span className="section-label">
              <Activity size={16} className="text-[#C5A059]" /> FINAL BRAND LINE
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase font-syne mb-6 leading-tight max-w-2xl">
              Train With <br />
              <span className="text-[#800020]">Md Salaudin Adam (DONN)</span>
            </h2>
            <div className="text-white text-base md:text-lg max-w-xl mb-8 leading-relaxed font-sans space-y-4">
              <p>
                Start your transformation journey with structured personal training, professional form correction, and a clear roadmap.
              </p>
              <p>
                Your journey doesn't have to be perfect from day one—it just needs to start with the right guidance.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="https://wa.me/6591081781" target="_blank" rel="noopener noreferrer" className="btn-primary group text-center">
                <span>WhatsApp PersonalTrainer.sg</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <Link href="/#trial" className="btn-outline group text-center">
                <span>Book a Trial Session</span>
              </Link>
            </div>
          </ScrollReveal>
          
          <ScrollReveal className="reveal-right-hidden relative z-10 hidden lg:block">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#800020]/20 to-[#C5A059]/20 rounded-full blur-3xl" />
              <img 
                src="/trainwith.avif" 
                alt="Trainer" 
                className="relative z-10 w-full h-full object-cover rounded-xl border border-white/10 shadow-2xl"
              />
            </div>
          </ScrollReveal>
        </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#050505] py-12 md:py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5">
            <ScrollReveal className="reveal-left-hidden">
              <span className="section-label">
                <MessageSquare size={16} className="text-[#C5A059]" /> TESTIMONIAL
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase font-syne mb-6 leading-tight">
                Trusted by Our <br />
                <span className="text-[#800020]">Community</span>
              </h2>
              <p className="text-white text-base leading-relaxed mb-8">
                Discover the actual training experiences shared by our community members who committed to the FitCore routine.
              </p>
              
              {/* Slider Arrows */}
              <div className="flex gap-4">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#800020] hover:border-[#800020] hover:text-white transition-all duration-300"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#800020] hover:border-[#800020] hover:text-white transition-all duration-300"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <ScrollReveal className="reveal-right-hidden">
              <div className="relative bg-[#0d0d0d] border border-white/5 p-6 sm:p-8 md:p-12 rounded-lg">
                
                {/* Quote Icon watermark */}
                <div className="absolute right-8 top-8 text-white/5 pointer-events-none">
                  <span className="text-8xl font-serif text-[#C5A059]/20">"</span>
                </div>
                
                {/* Sliding Card Content */}
                <div className="min-h-[160px] flex flex-col justify-between">
                  <p className="text-white text-lg md:text-xl italic leading-relaxed mb-6 font-syne">
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
                </div>

                {/* Slider Dots */}
                <div className="flex justify-start gap-2 mt-8">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setTestimonialIndex(i)}
                      className={`h-[4px] rounded-full transition-all duration-300 ${
                        i === testimonialIndex ? "w-8 bg-[#800020]" : "w-2 bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 border-t border-white/5">
        <div className="lg:col-span-5">
          <ScrollReveal className="reveal-left-hidden">
            <span className="section-label">
              <MessageSquare size={16} className="text-[#C5A059]" /> FAQS
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase font-syne mb-6 leading-tight">
              Clear answers to <br />
              <span className="text-[#800020]">common inquiries.</span>
            </h2>
            <p className="text-white text-sm leading-relaxed mb-8">
              Cannot find the specific details you need? Please connect with our active desk consultants or call our hotline.
            </p>
            <Link href="/#contact" className="btn-outline inline-flex">
              <span>GET IN TOUCH</span>
            </Link>
          </ScrollReveal>
        </div>

        {/* Interactive Accordion List */}
        <div className="lg:col-span-7 space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} className="reveal-right-hidden">
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
                  <div className="p-6 text-sm text-white leading-relaxed bg-[#050505]">
                    {faq.a}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Footer Section */}
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


