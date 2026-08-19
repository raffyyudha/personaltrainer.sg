"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import TikTokIcon from "@/components/TikTokIcon";
import {
  Facebook,
  Instagram,
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
  ShieldCheck,
  ClipboardCheck,
  Crown,
  Target,
  Star,
  Sparkles
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
const AnimatedCounter = ({ end, duration = 2000, formatComma = false }: { end: number; duration?: number; formatComma?: boolean }) => {
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

  return <span ref={ref}>{formatComma ? count.toLocaleString() : count}</span>;
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

export default function Home() {
  // States for interactive elements
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  
  // Newsletter Form state
  const testimonials = [
    {
      name: "Al Bennati, 44",
      role: "Real Estate",
      avatar: "/donn-coaching-latpulldown.avif",
      headline: "Lost 23 lbs, 5½ inches off waist & no more back medication in 5 months!",
      quote: "Dear Don S Adam, I turned 40 in June and I have 2 little boys that are 2 and 5 years old. It is important for me to be there for them as they get older. I want to actively participate in their growth and development. When I joined Body Construction I had no idea what I was in for. I've lost 23 pounds, 5 ½ inches off my waist, 50 points off my cholesterol level, no more daily back medication, and all of this in 5 months. That's what I call \"Body Construction! My workout partner is my 70 year old father and his results have been incredible too. We've been pushed harder than I would have thought possible. Every day we both reach new highs in strength and endurance. Don knows your body better than you do. Listen, learn, and results will come."
    },
    {
      name: "Ken Folkman",
      role: "Executive Trainee",
      avatar: "/donn-coaching-barbell.avif",
      headline: "Turned the clock back 20 years with effective 45-minute workouts!",
      quote: "Thank you so much for having such a positive impact on my life over the last 4 months. Your innovative training techniques along with balanced nutritional plan have allowed me to set goals and achieve results that I didn't know possible at this point in my life. These results affect a person not only in how they look, but in how you carry yourself and what activities you think are now possible. An example : The Hindu squats made my legs stronger for activities like snow skiing and hiking. This exercise was so much more effective then a whole day doing leg presses and curls. From the beginning of the year, your new workout plan of 30,000 push ups, 30,000 Hindu Squats, and 10,000 pull ups during the year has achieved better results in a 45 minute work out then years of 2 hours at the gym with weights. Combined with your unique nutritional plans, I truly feel at the top of my game and have effectively turned the clock back 20 years. And although all of your training and nutritional guidance is the best that I have ever seen from a professional trainer, nothing is more meaning full then your positive attitude each day and strive for happiness. For all that you have done for my physically, more importantly your outlook on life has helped me realize what are the most important values in life in achieving everyday happiness. I appreciate all that you have done for me. You're an excellent and professional trainer, a good friend, and a positive person for whoever crosses your path."
    },
    {
      name: "Arthur S",
      role: "President, IDEA Corp",
      avatar: "/donn-flexing.avif",
      headline: "Transformed from an out-of-shape smoker into a strong, resilient achiever!",
      quote: "\"I can't believe I've become one of your testimonials, thanks for all you've done for me!\" Over the past several months, you have seen me go from an out of shape, overweight, smoking, blob, to a guy who has overcome self-doubt, lung-bursting cardio training, muscle fatigue, near cardiac arrest and exhaustion to find the person I knew I could be. The funny thing is, I've enjoyed every minute of it. When I came into the gym for the first time, you opened my eyes to nutrition, fitness and a healthy lifestyle, something I thought I did pretty well on my own, but boy was I wrong! As I reflect on this new person I have become, I realize that you have done more than just \"get me into shape.\" You have pressed me beyond my self-inflicted, imaginary limits to see that with the right mindset and a little perseverance, you can achieve anything. This is a lesson that goes far beyond my workouts at Body Construction and has permeated all of the things in my life. My path of apparent, but subconscious self-destruction has been rerouted to a path of fitness, health and greater happiness. I owe a lot of that success to you and your ability to inspire, push, joke, command, drill and ultimately transform the old me into the new me. It is a commitment, and it's not easy, but the good things in life seldom are. For those people thinking about \"finding the inner you,\" turn your life over to Roy, let him help you find this new path, be mentally tough and you will find great rewards at the end of the rainbow. I know when your prospective clients read this it will sound like either you wrote it, or a bunch of BS. If anyone is considering working out at Body Construction and would like to hear it straight from me, I'd be glad to tell them face-to-face. Thanks for all you've done for me!"
    },
    {
      name: "Michael Oats, 39",
      role: "Engineer, David & Associates",
      avatar: "/donn-coaching-elliptical.avif",
      headline: "Gained 49 lbs of muscle, cured bursitis & ran a 5-minute mile treadmill sprint!",
      quote: "\"My mental state of mind is incredible, I look good, feel good and I'm never going back. I owe him my life because that's what he's given back to me. Thanks Don!\" Dear Don, I was 35 years old, 6 feet tall and 155 pounds...the same weight I was the day I left high school, only in much worse physical condition. I felt terrible and lied to myself for years about how insecure I was about my physical condition. I had bursitis and I've had stomach problems and dehydration episodes, both of which have repeatedly landed me in the hospital, and no doctor could solve any of my problems. I had worked with many trainers before and they weren't trainers, they were salesman. So I was skeptical if Don was different, but he was and I could tell from day one. The game plan was serious and straightforward, no magic, just consistent workouts, eating the right foods, plenty of water and sleep. My bursitis was gone in two weeks and the workouts were short, intense and focused. In 9 months my weight was up 49 pounds, my chest and quads were up 5 inches each and the nutritional changes that he had recommended had solved all my stomach and dehydration problems. I haven't run for 7 years, but two weeks ago ran a 5 minute mile on the treadmill. A few days later I decided to do The Turkey Trot (6.2 miles). After 6 miles I wasn't even sweating, so I decided to sprint the last 0.2 mile...it was amazing. My mental state of mind is incredible, I look good, feel good and I'm never going back. I owe him my life because that's what he's given back to me. Thanks Don!"
    },
    {
      name: "Eric T. Castillo",
      role: "Account Manager - Aerospace",
      avatar: "/trainwith.avif",
      headline: "Instills accountability, passion and drive for lasting health empowerment!",
      quote: "\"You hold your clients accountable and instill the desire that is so crucial for results.\" Over ten years ago I made a decision that has changed my life. I wasn't aware of it at the time but when I decided to engage your services and get serious about getting into shape I was changed forever. I have learned the fundamentals of strength training, nutrition, aerobics, goal setting and attainment etc... It's not only about learning, I am now empowered to live a fit and healthy life. Thank you! I am convinced that it goes beyond the fundamentals; I think your success can be attributed to many excellent characteristics. Your passion and drive for results are incredible. You hold your clients accountable and instill the desire that is so crucial for results. You have an excellent approach of pushing hard and encouragement at the same time. You are also open to new ideas and innovated approaches. There is no lack of creativity and new techniques in your programs. You embrace advancements in nutrition, exercises and equipment and I consider you an expert in these areas. Finally, I want to thank you for our friendship. You have been a steadfast friend and companion. You have lifted me up on countless times and helped me and encouraged me. You are a man of utmost integrity and dedication. I am beholden of our friendship. Thank you. Sincerely,"
    },
    {
      name: "Anna, 36",
      role: "DBS Bank",
      avatar: "/aboutus.avif",
      headline: "Shed 30 lbs, stopped anxiety medication & reclaimed life with confidence!",
      quote: "\"I have never had anyone believe in me or stand behind me the way you have.\" Dear Md Salaudin Adam aka Don: I sit here writing this with tears running down my face. Words cannot describe all that you have done for me. When I met you, I was an overweight and very unhappy woman. However, what you saw was different. You looked at me and saw all my potential and all my success. I have never had anyone believe in me or stand behind me the way you have. I know that you will say that the success was mine, that you were just my \"Trainer\". But, you will never be a \"just anything\". To me, you are everything. You pushed me to get my life back and claim it as mine again. Not only did you help me shed 30 pounds, you also helped me to get off the anxiety medication (Effexor) that I really wanted to quit taking. You believed in me, when I didn't believe in myself. You drove me crazy at times and I know that there were times that the feeling was mutual. But, you knew exactly what you had to do to get me to respond in the most effective way. And for that you will forever be in my heart. You have the same compassion and energy for everyone you meet. You truly have passion in your life and in your work. Your clients, family and friends are blessed to have you in their lives. I know that is how I feel about you. Don, I want to thank you with all that I am and all that I am becoming. You came into my life when I needed you the most and I know that it was meant to be. If there is ever anything I can do to help you in your endeavors, please let me know. I am living with passion \"You didn't just change my body... you changed my life.\""
    },
    {
      name: "Monika, 41",
      role: "Spa Manager",
      avatar: "/heroimage.avif",
      headline: "Lost 19 lbs, built self-discipline & physical strength with warrior workouts!",
      quote: "\"It's been quite challenging stuff, these workouts, the stuff warriors are made of.\" Dear Don: Save the Drama? Not this time, not for this. On April 7th, 2009, I walked through what I considered a heavy door to a Gym. My emotions and fears are still fresh in my mind as I write these words, and the following are but a few: Fear; \"I'm too weak for this; People will laugh at me; I look like a wet Chihuahua when I sweat; I'm afraid to work out with Don — very very afraid; I have degenerative disc disease in my cervical spine, not to mention spurring, and I'm old and fat\". Yikes! Well, no one laughed at me, only with me. Don is a gem of a man, a silly genius family man. And, I won't lie to you. It's been quite challenging stuff, these workouts, the stuff warriors are made of. With Don's vast knowledge and education regarding the body and its mechanics, his passion for excellence and compassion, I have come to realize that he has our best interests at heart. Thanks to him, I'm stronger physically, I've lost nineteen pounds, and the results have been amazing. In four short months, my mind is sharper, and I have more self-confidence. I'm delighted with my new self-discipline, not to mention the fact that I'VE GOT GUNS! Now, when I walk through that very light-weight door, I'm in genuine awe. DON S ADAM is, without a doubt, truly gifted, not only as a fitness expert, but as a lovely and patient friend and mentor. In my mind, he saved my health. \"Get real, Drama Queen\"; right? No. This is real. In the past year, I have undergone two major surgeries, and with the nourishing atmosphere of Body Construction and all of its staff, along with the assistance and kindness of my workout partner, Adriana Sanchez, I'm here to tell you: DON-ism: There Is No Substitute. No excuses. Give it your all and a little extra. No more Fat Food restaurants. Eat healthy, and live every day as if it's your last. And, beware of your friend-enemies. They mean well, but they will tell you, \"Oooh, no, you don't need to lose weight; you're just fine the way you are; don't over-do it\". Rise above it, and join me on what I consider a journey, not a destination. Thank you, my brother, DON. With Every Good Wish,"
    }
  ];

  const faqs = [
    {
      q: "What should I prepare for my first session?",
      a: "Please wear comfortable workout clothes and proper training shoes. Bring a water bottle, towel and any relevant health, injury or medical information that may affect your training. The first session is also used to understand your current fitness level, body condition, goals and training suitability."
    },
    {
      q: "Do I need a condo gym or private gym access?",
      a: "No, not always. Training can be arranged at suitable locations across Singapore, including condo gyms, selected ActiveSG gyms, suitable private gym spaces, outdoor training areas, multi storey car park training areas and other approved training environments. Location suitability can be discussed during enquiry."
    },
    {
      q: "How do I book a trial session?",
      a: "You can contact PersonalTrainer.sg through WhatsApp at +65 9108 1781 or submit the website enquiry form. We will first understand your goals, current condition, preferred location, schedule and training needs before confirming the trial session."
    },
    {
      q: "Who will be my personal trainer?",
      a: "Training may be conducted by Md Salaudin Adam (DONN), Founder and Fitness Director of PersonalTrainer.sg, or by a suitable trainer from the PersonalTrainer.sg team, depending on client needs, location, schedule and availability."
    },
    {
      q: "What training styles do you specialise in?",
      a: "PersonalTrainer.sg provides Personal Training, Weight Loss Training, Strength Training, Senior Fitness Training, Couple Training, Kickboxing Fitness, Home and Condo Gym Training, Corporate Wellness, Gym Management and structured lifestyle transformation coaching."
    },
    {
      q: "Can beginners start personal training?",
      a: "Yes. Training can be adjusted for beginners, clients returning after a long break, busy professionals, seniors, couples and clients with low fitness levels. The programme will be based on your current ability, body condition and goals."
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
      
      {/* Main Navigation */}
      <Navbar activePage="home" />

      {/* Hero Section */}
      <section id="home" className="relative px-6 md:px-12 pt-20 pb-16 lg:pt-28 xl:pt-32 lg:pb-28 overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear_gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />
        <div className="absolute right-[-10%] top-[10%] w-[500px] h-[500px] bg-[#800020] rounded-full blur-[180px] opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 xl:gap-14 items-start relative z-10">
          {/* Left Column: Heading + Buttons */}
          <div className="flex flex-col items-start pt-1.5 lg:pt-1">
            <ScrollReveal className="reveal-left-hidden">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.1rem] xl:text-[3.6rem] font-black tracking-tight leading-[1.15] uppercase mb-8 font-oswald text-white drop-shadow-md">
                TRANSFORM YOUR BODY. <br />
                IMPROVE YOUR HEALTH. <br />
                BUILD REAL CONFIDENCE.
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                  href="https://wa.me/6591081781"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group text-center px-8 py-4.5 text-base sm:text-lg font-extrabold tracking-wider shadow-lg shadow-[#800020]/40"
                >
                  <span>WHATSAPP PERSONALTRAINER.SG</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300 shrink-0" />
                </a>
                <a
                  href="#trial"
                  className="btn-outline group text-center px-8 py-4.5 text-base sm:text-lg font-extrabold tracking-wider border-2"
                >
                  <span>START YOUR TRANSFORMATION</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Premium Authority Intro Panel */}
          <div className="flex flex-col items-start lg:items-start w-full">
            <ScrollReveal className="reveal-right-hidden w-full">
              <div className="relative w-full rounded-2xl bg-[#0c0c0c]/90 border border-white/10 p-7 md:p-9 shadow-2xl backdrop-blur-sm overflow-hidden">
                {/* Subtle top gold-maroon gradient bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#800020] via-[#C5A059] to-[#800020]" />

                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
                  <span className="text-xs uppercase tracking-[0.2em] font-oswald text-[#C5A059] font-bold">
                    SINGAPORE PERSONAL TRAINING
                  </span>
                </div>

                <h2 className="font-syne text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4 leading-tight">
                  PREMIUM PERSONAL TRAINING IN SINGAPORE
                </h2>
                
                <p className="text-[15.5px] lg:text-[17.5px] text-gray-200 leading-[1.65] font-sans mb-5 font-normal">
                  PersonalTrainer.sg provides structured coaching for Weight Loss Training, Strength Training, Senior Fitness Training, Couple Training, Kickboxing Fitness and Lifestyle Transformation.
                </p>

                <div className="bg-[#800020]/15 border-l-2 border-[#C5A059] p-4 rounded-r-lg">
                  <p className="text-[15.5px] lg:text-[16.5px] text-[#C5A059] font-sans font-medium leading-[1.65]">
                    Led by Md Salaudin Adam (DONN), Founder and Fitness Director, Trusted in Singapore Since 2002 with 24 Years of Coaching Experience.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Separate Service Programs Badges Section below Hero Grid */}
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 relative z-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              "Personal Training",
              "Weight Loss Training",
              "Strength Training",
              "Senior Fitness Training",
              "Couple Training",
              "Kickboxing Fitness"
            ].map((service) => (
              <div
                key={service}
                className="inline-flex items-center gap-2.5 bg-[#161616] border border-white/15 hover:border-[#C5A059]/60 hover:bg-[#1f1619] px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider font-oswald text-white transition-all duration-300 shadow-md"
              >
                <CheckCircle size={15} className="text-[#C5A059] shrink-0" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Width Hero Image Banner */}
      <section className="w-full overflow-hidden">
        <ScrollReveal className="reveal-hidden">
          <div className="w-full">
            <img
              src="/heroimage.avif"
              alt="Gym workout action shot"
              className="w-full h-auto block hover:scale-105 transition-transform duration-700 origin-center"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Stats Section - Centered with Vertical Dividers */}
      <section className="bg-[#0a0a0a] py-16 sm:py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 text-center items-center">
            <ScrollReveal className="reveal-hidden" delay={0}>
              <div className="py-6 lg:py-8 lg:border-r lg:border-white/10 lg:px-6 border-b border-white/10 sm:border-b-0">
                <span className="text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl font-black font-oswald text-white tracking-tighter block leading-none">
                  <AnimatedCounter end={24} />+
                </span>
                <h4 className="font-oswald text-xs sm:text-sm tracking-[0.2em] font-bold text-[#C5A059] uppercase mt-4">Years of Coaching Experience</h4>
              </div>
            </ScrollReveal>
            <ScrollReveal className="reveal-hidden" delay={150}>
              <div className="py-6 lg:py-8 lg:border-r lg:border-white/10 lg:px-6 border-b border-white/10 sm:border-b-0">
                <span className="text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl font-black font-oswald text-white tracking-tighter block leading-none">
                  <AnimatedCounter end={2002} />
                </span>
                <h4 className="font-oswald text-xs sm:text-sm tracking-[0.2em] font-bold text-[#C5A059] uppercase mt-4">Trusted in Singapore Since 2002</h4>
              </div>
            </ScrollReveal>
            <ScrollReveal className="reveal-hidden" delay={300}>
              <div className="py-6 lg:py-8 lg:border-r lg:border-white/10 lg:px-6 border-b border-white/10 sm:border-b-0">
                <span className="text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl font-black font-oswald text-white tracking-tighter block leading-none">
                  <AnimatedCounter end={2000} formatComma={true} />+
                </span>
                <h4 className="font-oswald text-xs sm:text-sm tracking-[0.2em] font-bold text-[#C5A059] uppercase mt-4">Clients Trained Since 2002</h4>
              </div>
            </ScrollReveal>
            <ScrollReveal className="reveal-hidden" delay={450}>
              <div className="py-6 lg:py-8 lg:px-6 flex flex-col items-center justify-center">
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-black font-oswald text-white tracking-tight uppercase leading-tight block">
                  Results Driven
                </span>
                <h4 className="font-oswald text-xs sm:text-sm tracking-[0.2em] font-bold text-[#C5A059] uppercase mt-4">Personalised Coaching</h4>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Moving Red Strip Section - Infinite Scrolling Banner */}
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

      {/* About Us Section */}
      <section id="about" className="bg-[#050505] py-12 md:py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto border-2 border-[#C5A059]/40 rounded-2xl bg-[#090909] shadow-2xl overflow-hidden grid lg:grid-cols-12 gap-0 items-stretch">
          
          {/* About Left Side - Brand Showcase & Large Logo Display */}
          <div className="lg:col-span-5 relative bg-[#0c0c0c] p-6 sm:p-8 lg:p-10 flex flex-col justify-between overflow-hidden group border-b lg:border-b-0 lg:border-r-2 border-[#C5A059]/30">
            {/* Ambient Glow & Grid Effects */}
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#800020] rounded-full blur-[120px] opacity-30 pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#C5A059] rounded-full blur-[140px] opacity-20 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] bg-[size:16px_16px] opacity-30 pointer-events-none" />

            <ScrollReveal className="reveal-left-hidden flex flex-col justify-between h-full relative z-10 space-y-6">
              
              {/* Top Header Bar */}
              <div className="w-full flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-[#C5A059] font-oswald text-xs sm:text-sm font-bold uppercase tracking-widest">
                  <Crown size={16} className="shrink-0" />
                  <span>OFFICIAL BRAND CREST</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-[#C5A059] fill-[#C5A059]" />
                  ))}
                </div>
              </div>

              {/* Center Logo Showcase */}
              <div className="flex flex-col items-center text-center my-auto w-full">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-[#C5A059]/25 rounded-full blur-3xl transform scale-125 pointer-events-none" />
                  <img
                    src="/logopt.png"
                    alt="PersonalTrainer.sg Official Crest"
                    className="w-48 sm:w-56 md:w-64 h-auto object-contain relative z-10 drop-shadow-[0_0_35px_rgba(197,160,89,0.55)] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <span className="text-[#C5A059] font-oswald text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] px-4 py-1.5 bg-white/5 border border-[#C5A059]/30 inline-block mb-3 rounded whitespace-nowrap">
                  Trusted in Singapore Since 2002
                </span>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-oswald uppercase tracking-tight text-white mb-2 whitespace-nowrap">
                  PERSONAL<span className="text-[#C5A059]">TRAINER.SG</span>
                </h3>

                <p className="text-gray-300 text-xs sm:text-sm font-sans max-w-sm leading-relaxed mb-4 font-normal">
                  Singapore&apos;s Premier 1-on-1 Personal Training &amp; Body Transformation Specialist. Led by Md Salaudin Adam (DONN), Fitness Director &amp; Founder.
                </p>

                {/* Integrated Training Preview Image Frame */}
                <div className="w-full relative overflow-hidden border border-white/10 rounded-xl shadow-2xl my-2 group-hover:border-[#C5A059]/50 transition-colors duration-500">
                  <img
                    src="/aboutus.avif"
                    alt="Personal Training in Action"
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* 4 Large Feature Highlight Cards (Full height coverage) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mt-4">
                  <div className="bg-[#121212] border border-white/10 p-3.5 sm:p-4 rounded-xl text-left flex items-start gap-3 hover:border-[#C5A059]/50 transition-all duration-300 h-full overflow-hidden shadow-md">
                    <Award className="text-[#C5A059] shrink-0 mt-0.5" size={20} />
                    <div className="flex-1 min-w-0">
                      <span className="text-[#C5A059] font-oswald text-[12px] sm:text-[13px] font-bold block uppercase tracking-wider leading-snug">
                        24 Years Coaching Experience
                      </span>
                      <span className="text-gray-300 text-[11px] sm:text-xs font-sans block leading-relaxed mt-1 font-normal">
                        Proven transformation results
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#121212] border border-white/10 p-3.5 sm:p-4 rounded-xl text-left flex items-start gap-3 hover:border-[#C5A059]/50 transition-all duration-300 h-full overflow-hidden shadow-md">
                    <Target className="text-[#C5A059] shrink-0 mt-0.5" size={20} />
                    <div className="flex-1 min-w-0">
                      <span className="text-[#C5A059] font-oswald text-[12px] sm:text-[13px] font-bold block uppercase tracking-wider leading-snug">
                        100% Personalised Plan
                      </span>
                      <span className="text-gray-300 text-[11px] sm:text-xs font-sans block leading-relaxed mt-1 font-normal">
                        Customized for your body &amp; goals
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#121212] border border-white/10 p-3.5 sm:p-4 rounded-xl text-left flex items-start gap-3 hover:border-[#C5A059]/50 transition-all duration-300 h-full overflow-hidden shadow-md">
                    <ShieldCheck className="text-[#C5A059] shrink-0 mt-0.5" size={20} />
                    <div className="flex-1 min-w-0">
                      <span className="text-[#C5A059] font-oswald text-[10px] sm:text-[11px] md:text-[12px] font-bold block uppercase tracking-tight leading-snug break-words">
                        NASM | SOE | TRX | FMT | CPR | AED
                      </span>
                      <span className="text-gray-300 text-[11px] sm:text-xs font-sans block leading-relaxed mt-1 font-normal">
                        Certified Specialist
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#121212] border border-white/10 p-3.5 sm:p-4 rounded-xl text-left flex items-start gap-3 hover:border-[#C5A059]/50 transition-all duration-300 h-full overflow-hidden shadow-md">
                    <Sparkles className="text-[#C5A059] shrink-0 mt-0.5" size={20} />
                    <div className="flex-1 min-w-0">
                      <span className="text-[#C5A059] font-oswald text-[11px] sm:text-[12px] font-bold block uppercase tracking-wider leading-snug">
                        DONN Elite Performance System (DEPS)
                      </span>
                      <span className="text-gray-300 text-[11px] sm:text-xs font-sans block leading-relaxed mt-1 font-normal">
                        Signature training methodology
                      </span>
                    </div>
                  </div>
                </div>

                {/* Golden Trophy & Trust Banner Box at Bottom */}
                <div className="w-full mt-4 bg-gradient-to-r from-[#800020]/20 via-[#161616] to-[#C5A059]/20 border border-[#C5A059]/40 p-4 rounded-xl text-center shadow-lg">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Crown size={18} className="text-[#C5A059]" />
                    <span className="text-white font-oswald text-xs sm:text-sm font-bold uppercase tracking-wider">
                      SINGAPORE PREMIER 1-ON-1 COACHING
                    </span>
                  </div>
                  <p className="text-[#C5A059] font-sans text-xs sm:text-sm italic font-medium">
                    &quot;If Results Matter, So Does Experience.&quot;
                  </p>
                  <div className="mt-2 text-[10px] text-gray-300 font-oswald uppercase tracking-widest flex items-center justify-center gap-2">
                    <span>★ 100% DEDICATED</span>
                    <span>•</span>
                    <span>PROVEN RESULTS</span>
                  </div>
                </div>

              </div>

              {/* Bottom Footer Accent Bar */}
              <div className="w-full pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#C5A059] font-oswald font-extrabold uppercase tracking-widest">
                <span>IF RESULTS MATTERS</span>
                <span className="text-white/30">•</span>
                <span>EST. 2002 SINGAPORE</span>
              </div>

            </ScrollReveal>
          </div>

          {/* About Content - Right Side */}
          <div className="lg:col-span-7 bg-[#111111] p-6 sm:p-10 lg:p-16 flex flex-col justify-between">
            <ScrollReveal className="reveal-right-hidden space-y-8">
              <div>
                <span className="section-label">
                  <Users size={18} className="text-[#C5A059]" /> INTRODUCTION
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6 font-syne text-white tracking-tight">
                  Personal Training Built for Real Results
                </h2>
                <div className="text-gray-100 text-base sm:text-lg lg:text-xl leading-relaxed space-y-5 font-sans font-normal">
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
              </div>

              <div className="pt-2">
                <a href="#trial" className="btn-primary group inline-flex text-base sm:text-lg px-8 py-4">
                  <span>Book Trial Session</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>

              {/* Vision Block */}
              <div className="bg-[#181818] border-2 border-white/10 p-6 sm:p-8 rounded-xl shadow-xl">
                <h3 className="text-xl sm:text-2xl font-black font-syne text-[#C5A059] mb-3 uppercase tracking-wide">
                  Not Just Workouts
                </h3>
                <p className="text-gray-200 text-sm sm:text-base lg:text-lg font-sans leading-relaxed font-normal">
                  A proper transformation does not happen from exercise alone. It happens when training, discipline, consistency, nutrition awareness, accountability and lifestyle habits work together. At PersonalTrainer.sg, every programme is designed to help you train better, move better, feel better and build confidence through structured coaching.
                </p>
              </div>

              {/* Mission Block */}
              <div className="bg-[#181818] border-2 border-white/10 p-6 sm:p-8 rounded-xl shadow-xl">
                <h3 className="text-xl sm:text-2xl font-black font-syne text-[#C5A059] mb-3 uppercase tracking-wide">
                  A Complete Coaching System
                </h3>
                <p className="text-gray-200 text-sm sm:text-base lg:text-lg font-sans leading-relaxed font-normal">
                  The goal is not just to make you sweat. The goal is to help you improve your body, health, strength, fitness and lifestyle in a way that can be maintained.
                </p>
              </div>

              {/* Asset Block 1: 4 Transformation Key Stats Grid */}
              <div className="grid grid-cols-2 gap-3.5 pt-2">
                <div className="bg-[#161616] border border-[#C5A059]/30 p-4 rounded-xl text-center">
                  <span className="text-[#C5A059] font-oswald text-2xl sm:text-3xl font-black block">24+ YEARS</span>
                  <span className="text-gray-300 text-xs font-sans uppercase font-bold block mt-1">Coaching Leadership</span>
                </div>
                <div className="bg-[#161616] border border-[#C5A059]/30 p-4 rounded-xl text-center">
                  <span className="text-[#C5A059] font-oswald text-2xl sm:text-3xl font-black block">100%</span>
                  <span className="text-gray-300 text-xs font-sans uppercase font-bold block mt-1">Tailored Programmes</span>
                </div>
                <div className="bg-[#161616] border border-[#C5A059]/30 p-4 rounded-xl text-center flex flex-col justify-center">
                  <span className="text-[#C5A059] font-oswald text-sm sm:text-base font-black tracking-wider block uppercase">NASM | SOE | TRX | FMT | CPR | AED</span>
                  <span className="text-gray-300 text-xs font-sans uppercase font-bold block mt-1">Certified Specialist</span>
                </div>
                <div className="bg-[#161616] border border-[#C5A059]/30 p-4 rounded-xl text-center">
                  <span className="text-[#C5A059] font-oswald text-2xl sm:text-3xl font-black block">SINCE 2002</span>
                  <span className="text-gray-300 text-xs font-sans uppercase font-bold block mt-1">Trusted in Singapore</span>
                </div>
              </div>

              {/* Asset Block 2: 3 Core Pillars Checklist */}
              <div className="bg-[#141414] border border-white/10 p-5 rounded-xl space-y-3">
                <span className="text-[#C5A059] font-oswald text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-2">
                  OUR CORE GUARANTEE TO EVERY CLIENT
                </span>
                {[
                  "Dedicated 1-on-1 Personal Attention at Every Session",
                  "Structured Movement & Posture Correction System (DEPS)",
                  "Sustainable Lifestyle, Nutrition & Accountability Support"
                ].map((pillar, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-200 text-xs sm:text-sm font-sans font-medium">
                    <CheckCircle size={18} className="text-[#C5A059] shrink-0" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>

              {/* Asset Block 3: Gold & Maroon Quick Action WhatsApp Bar */}
              <div className="bg-gradient-to-r from-[#800020] via-[#1a050a] to-[#0d0d0d] border-2 border-[#C5A059]/50 p-5 sm:p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
                <div>
                  <span className="text-white font-syne text-base sm:text-lg font-black uppercase block">
                    Ready to Start Your Transformation?
                  </span>
                  <span className="text-gray-300 text-xs sm:text-sm font-sans block mt-1 font-normal">
                    WhatsApp Md Salaudin Adam (DONN) directly for availability &amp; trial sessions.
                  </span>
                </div>
                <a
                  href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Personal%20Training."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#C5A059] hover:bg-white text-black font-oswald font-extrabold uppercase tracking-wider text-xs sm:text-sm px-6 py-3 rounded-lg transition-all duration-300 shrink-0 shadow-lg flex items-center gap-2 whitespace-nowrap"
                >
                  <span>WhatsApp Now</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="bg-[#1a1a1a] p-6 sm:p-10 lg:p-12 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-white/5">
          <div>
            <span className="section-label">
              <Activity size={16} className="text-[#C5A059]" /> SERVICES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-3 font-syne leading-tight text-white">
              Personal Training Services
            </h2>
            <p className="text-white text-base leading-relaxed max-w-3xl">
              Structured coaching for different goals, ages and fitness levels. Every programme is designed to help you train better, move better, feel better and build confidence.
            </p>
          </div>
          <a href="#trial" className="btn-primary group inline-flex shrink-0 self-start md:self-center">
            <span>Book Trial Session</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* 4x2 Grid for All 8 Services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              num: "01.",
              title: "Personal Training",
              desc: "One to one coaching for individuals who want proper guidance, structure, accountability and results. Suitable for beginners, busy professionals, returning trainees and clients who want a serious fitness plan.",
              img: "/onepersonaltraining.avif"
            },
            {
              num: "02.",
              title: "Weight Loss Training",
              desc: "A structured programme for clients who want to reduce body fat, improve stamina, increase strength and build better lifestyle habits. The focus is on sustainable progress, not extreme shortcuts.",
              img: "/weightlosstraining.avif"
            },
            {
              num: "03.",
              title: "Strength Training and Body Toning",
              desc: "Progressive resistance training to help you build strength, improve muscle tone, shape your body and increase confidence. Suitable for men and women who want to look stronger, feel stronger and move better.",
              img: "/donn-coaching-barbell.avif"
            },
            {
              num: "04.",
              title: "Senior Fitness Training",
              desc: "Safe and structured training for older adults who want to improve strength, balance, mobility, stability and daily movement confidence. The training is adjusted according to ability, condition and comfort level.",
              img: "/senior-fitness.avif"
            },
            {
              num: "05.",
              title: "Couple Training",
              desc: "Train together with your spouse, partner, friend or family member while working towards better fitness, health and motivation. A practical and enjoyable way to stay consistent together.",
              img: "/coupletraining.avif"
            },
            {
              num: "06.",
              title: "Kickboxing Fitness",
              desc: "High energy Kickboxing Fitness training to improve stamina, coordination, fat burning, movement confidence and overall fitness. Suitable for clients who want a more dynamic and challenging workout style.",
              img: "/donn-kickboxing.avif"
            },
            {
              num: "07.",
              title: "Corporate Wellness",
              desc: "Fitness and wellness support for companies, teams and professionals who want to improve energy, health, performance and lifestyle habits.",
              img: "/corporate-wellness.avif"
            },
            {
              num: "08.",
              title: "Online Coaching",
              desc: "Remote Fitness Coaching for clients who need structure, guidance and accountability but prefer flexible training support.",
              img: "/onlinecoaching.avif"
            }
          ].map((srv) => (
            <div key={srv.num} className="group relative h-80 sm:h-84 md:h-88 lg:h-96 overflow-hidden border border-white/5 hover:border-[#C5A059]/30 transition-all duration-500 rounded-sm bg-black">
              <img
                src={srv.img}
                alt={srv.title}
                className={`w-full h-full transition-all duration-700 ${
                  srv.img.includes('senior-fitness') || srv.img.includes('corporate-wellness') || srv.img.includes('weightlosstraining')
                    ? "object-contain bg-black p-1 scale-100 group-hover:scale-105"
                    : "object-cover object-top scale-100 group-hover:scale-105"
                }`}
              />
              <div className={`absolute inset-0 transition-all duration-300 pointer-events-none ${
                srv.img.includes('senior-fitness') || srv.img.includes('corporate-wellness') || srv.img.includes('weightlosstraining')
                  ? "bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover:bg-black/40"
                  : "bg-gradient-to-t from-black via-black/40 to-transparent group-hover:bg-black/75"
              }`} />
              
              {/* Gold Arrow Button at Top Right */}
              <div className="absolute top-6 right-6 z-20">
                <div className="w-12 h-12 bg-[#C5A059] text-black flex items-center justify-center transition-all duration-300 group-hover:bg-white">
                  <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <span className="text-4xl font-extrabold font-oswald text-[#C5A059] block mb-2">{srv.num}</span>
                <h3 className="text-xl md:text-2xl font-bold font-oswald uppercase text-white group-hover:text-[#C5A059] transition-colors duration-300">
                  {srv.title}
                </h3>
                <p className="text-white text-xs overflow-hidden max-h-0 group-hover:max-h-32 transition-all duration-500 ease-in-out leading-relaxed mt-2">
                  {srv.desc}
                </p>
              </div>
            </div>
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
          <div className="space-y-12">
            {[
              {
                title: "Weight Loss & Stamina",
                trainer: "Md Salaudin Adam (DONN)",
                img: "/weightlosstraining.avif",
                desc: "Structured training designed to support fat loss, improve stamina, build consistency and develop better lifestyle habits through progressive exercise, coaching accountability and realistic training guidance.",
                focusArea: "Fat loss, stamina, energy and training consistency",
                benefit: "Improves cardiovascular fitness, movement confidence, strength endurance and overall body conditioning",
                suitableFor: "Clients who want to lose weight, improve fitness, restart their training journey or build healthier habits",
                outcome: "A stronger, fitter and more disciplined body with better long term lifestyle control",
                buttonText: "WhatsApp PersonalTrainer.sg",
                buttonUrl: "https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Weight%20Loss%20%26%20Stamina%20Training.",
                isPrimaryButton: true
              },
              {
                title: "Strength & Body Toning",
                trainer: "Md Salaudin Adam (DONN)",
                img: "/donn-coaching-barbell.avif",
                desc: "Focused resistance training to build physical strength, improve muscle definition, enhance posture and develop better body control through proper technique, safe progression and structured coaching.",
                focusArea: "Strength, posture, muscle tone and exercise technique",
                benefit: "Builds lean strength, improves body shape, supports safer movement and increases confidence during training",
                suitableFor: "Clients who want to get stronger, tone their body, improve posture and train with proper form",
                outcome: "A stronger, firmer and more confident body with better movement quality",
                buttonText: "Book a Trial Session",
                buttonUrl: "#trial",
                isPrimaryButton: false
              },
              {
                title: "Lifestyle Transformations",
                trainer: "Md Salaudin Adam (DONN)",
                img: "/donn-flexing.avif",
                desc: "A structured coaching approach designed to help clients rebuild healthier habits, improve daily energy, stay consistent and create sustainable long term lifestyle change through training, accountability and nutrition awareness.",
                focusArea: "Healthy habits, discipline, accountability and long term consistency",
                benefit: "Improves daily energy, confidence, fitness routine, lifestyle awareness and personal discipline",
                suitableFor: "Busy professionals, beginners, returning clients and anyone who needs structure to restart their fitness journey",
                outcome: "A healthier, more active and more confident lifestyle that can be maintained long term",
                buttonText: "WhatsApp PersonalTrainer.sg",
                buttonUrl: "https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Lifestyle%20Transformations.",
                isPrimaryButton: true
              }
            ].map((cls) => (
              <div key={cls.title} className="grid lg:grid-cols-12 overflow-hidden group rounded-2xl border-2 border-white/10 bg-[#0d0d0d] shadow-2xl">
                {/* Left Column: Image Thumbnail */}
                <div className="lg:col-span-5 min-h-[280px] sm:min-h-[340px] lg:min-h-[460px] xl:min-h-[540px] overflow-hidden relative border-b lg:border-b-0 lg:border-r-2 border-white/10 flex items-center justify-center bg-black">
                  <img
                    src={cls.img}
                    alt={cls.title}
                    className={`w-full h-full scale-100 group-hover:scale-105 transition-transform duration-700 ${
                      cls.img.includes('weightlosstraining')
                        ? "object-contain bg-black p-2"
                        : "object-cover object-top"
                    }`}
                  />
                </div>
                
                {/* Right Column: Details & Highlight Grid */}
                <div className="lg:col-span-7 bg-[#121212] p-6 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-oswald text-[#C5A059] uppercase tracking-wide mb-5">
                      {cls.title}
                    </h3>
                    
                    <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed font-sans font-medium mb-8">
                      {cls.desc}
                    </p>

                    {/* 4 Premium Highlight Points Grid - Extra Large Fonts */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 mb-8 pt-6 border-t-2 border-white/15">
                      <div className="bg-[#1c1c1c] border-2 border-white/10 p-5 sm:p-6 rounded-xl hover:border-[#C5A059] transition-all duration-300 shadow-lg">
                        <div className="text-sm sm:text-base md:text-lg uppercase tracking-widest font-oswald text-[#C5A059] font-black mb-2">
                          Focus Area
                        </div>
                        <div className="text-base sm:text-lg md:text-xl text-white font-sans leading-relaxed font-semibold">
                          {cls.focusArea}
                        </div>
                      </div>

                      <div className="bg-[#1c1c1c] border-2 border-white/10 p-5 sm:p-6 rounded-xl hover:border-[#C5A059] transition-all duration-300 shadow-lg">
                        <div className="text-sm sm:text-base md:text-lg uppercase tracking-widest font-oswald text-[#C5A059] font-black mb-2">
                          Training Benefit
                        </div>
                        <div className="text-base sm:text-lg md:text-xl text-white font-sans leading-relaxed font-semibold">
                          {cls.benefit}
                        </div>
                      </div>

                      <div className="bg-[#1c1c1c] border-2 border-white/10 p-5 sm:p-6 rounded-xl hover:border-[#C5A059] transition-all duration-300 shadow-lg">
                        <div className="text-sm sm:text-base md:text-lg uppercase tracking-widest font-oswald text-[#C5A059] font-black mb-2">
                          Suitable For
                        </div>
                        <div className="text-base sm:text-lg md:text-xl text-white font-sans leading-relaxed font-semibold">
                          {cls.suitableFor}
                        </div>
                      </div>

                      <div className="bg-[#1c1c1c] border-2 border-white/10 p-5 sm:p-6 rounded-xl hover:border-[#C5A059] transition-all duration-300 shadow-lg">
                        <div className="text-sm sm:text-base md:text-lg uppercase tracking-widest font-oswald text-[#C5A059] font-black mb-2">
                          Coaching Outcome
                        </div>
                        <div className="text-base sm:text-lg md:text-xl text-white font-sans leading-relaxed font-semibold">
                          {cls.outcome}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer CTA & Trainer Badge */}
                  <div className="pt-6 border-t-2 border-white/15 flex flex-wrap items-center justify-between gap-5 mt-auto">
                    <div className="flex items-center gap-3 text-base sm:text-lg md:text-xl text-white font-sans font-bold">
                      <User size={22} className="text-[#C5A059] shrink-0" />
                      <span className="text-white">{cls.trainer}</span>
                    </div>

                    <a
                      href={cls.buttonUrl}
                      target={cls.buttonUrl.startsWith("http") ? "_blank" : undefined}
                      rel={cls.buttonUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={cls.isPrimaryButton
                        ? "btn-primary py-4 px-8 text-base sm:text-lg tracking-wider font-black uppercase inline-flex items-center gap-2 rounded-xl shadow-xl"
                        : "btn-outline py-4 px-8 text-base sm:text-lg tracking-wider font-black uppercase border-2 inline-flex items-center gap-2 rounded-xl shadow-xl"}
                    >
                      <span>{cls.buttonText}</span>
                      {cls.buttonUrl.startsWith("http") && <ArrowRight size={18} className="shrink-0" />}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <ScrollReveal className="reveal-left-hidden">
              <span className="section-label mb-3">
                <Dumbbell size={16} className="text-[#C5A059]" /> WHY CHOOSE US
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-black mb-5 font-oswald leading-tight text-white uppercase tracking-tight">
                WHY CHOOSE <br className="hidden sm:block" />
                <span className="text-[#C5A059]">PERSONALTRAINER.SG</span>
              </h2>
              <p className="text-[#C5A059] font-oswald text-base sm:text-lg font-bold uppercase tracking-wider mb-4 leading-snug">
                Professional Coaching. Real Structure. Serious Results.
              </p>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-8 font-sans font-normal">
                At PersonalTrainer.sg, the focus is on proper coaching, safe training progression, discipline, accountability and real long term improvement.
              </p>
              <a href="#trial" className="btn-primary group inline-flex">
                <span>Book a Trial Session</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </ScrollReveal>
          </div>

          {/* Right Column: 3x2 Grid for 6 why choose sections */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {[
              {
                title: (
                  <>
                    24 Years of <br />
                    Coaching Experience
                  </>
                ),
                desc: "Coaching since 2002 with structured personal training experience across different ages, goals and fitness levels.",
                icon: <Award className="w-7 h-7 text-[#C5A059]" />
              },
              {
                title: (
                  <>
                    Trusted in Singapore <br />
                    Since 2002
                  </>
                ),
                desc: "Over two decades of helping clients across Singapore improve their fitness, strength, health and confidence.",
                icon: <ShieldCheck className="w-7 h-7 text-[#C5A059]" />
              },
              {
                title: (
                  <>
                    Personalised Training <br />
                    Programmes
                  </>
                ),
                desc: "Training plans are adjusted based on the client’s body, fitness level, goal, schedule and lifestyle.",
                icon: <ClipboardCheck className="w-7 h-7 text-[#C5A059]" />
              },
              {
                title: (
                  <>
                    Proper Technique & <br />
                    Safe Training
                  </>
                ),
                desc: "Every session focuses on correct form, safe movement, posture, control and progressive improvement.",
                icon: <Activity className="w-7 h-7 text-[#C5A059]" />
              },
              {
                title: (
                  <>
                    Accountability & <br />
                    Progress Tracking
                  </>
                ),
                desc: "Clients are guided with structure, discipline, consistency and regular coaching adjustments.",
                icon: <Target className="w-7 h-7 text-[#C5A059]" />
              },
              {
                title: (
                  <>
                    Premium Coaching <br />
                    Standard
                  </>
                ),
                desc: "A professional coaching approach built on experience, results, trust and long term transformation.",
                icon: <Crown className="w-7 h-7 text-[#C5A059]" />
              }
            ].map((fac, idx) => (
              <ScrollReveal key={idx} className="reveal-hidden" delay={idx * 100}>
                <div className="bg-[#0e0e0e] border border-white/10 hover:border-[#800020]/60 hover:shadow-[0_0_25px_rgba(128,0,32,0.35)] transition-all duration-300 rounded-xl p-6 lg:p-7 flex flex-col justify-between h-full group">
                  <div>
                    {/* Gold Icon Container */}
                    <div className="w-14 h-14 border-2 border-[#C5A059] bg-[#161616] rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#C5A059]/15 group-hover:border-[#C5A059] transition-all duration-300 shrink-0 shadow-md">
                      {fac.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-oswald mb-2.5 text-white group-hover:text-[#C5A059] transition-colors duration-300 uppercase tracking-wide min-h-[3.25rem] flex items-center">
                      {fac.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm font-sans leading-relaxed mt-2 font-normal">
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
            backgroundImage: "url('/donn-coaching-latpulldown.avif')",
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
      <section id="credentials" className="bg-[#0c0c0c] py-16 md:py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="reveal-hidden">
            <div className="text-center mb-12">
              <span className="section-label justify-center mb-3">
                CREDENTIALS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-5 font-oswald text-white tracking-tight">
                Professional Credentials
              </h2>
              <p className="text-[15.5px] lg:text-[18px] text-gray-200 leading-[1.65] max-w-3xl mx-auto font-sans font-normal">
                With more than two decades of coaching experience in Singapore’s fitness industry, Md Salaudin Adam (DONN) brings discipline, structure and practical coaching to help clients train safely, stay consistent and work towards real results.
              </p>
            </div>
          </ScrollReveal>

          {/* 4 Credential Image Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                title: "Founder & Fitness Director",
                subtitle: "Md Salaudin Adam (DONN)",
                img: "/donn-coaching-latpulldown.avif"
              },
              {
                title: "24 Years of Coaching Experience",
                subtitle: "Trusted in Singapore Since 2002",
                img: "/donn-coaching-elliptical.avif"
              },
              {
                title: "Certified Personal Trainer",
                subtitle: "NASM | SOE | TRX | FMT | CPR | AED",
                img: "/donn-coaching-barbell.avif"
              },
              {
                title: "Performance & Transformation Specialist",
                subtitle: "MANHUNT Finalist 2001",
                img: "/donn-flexing.avif"
              }
            ].map((trn, idx) => (
              <ScrollReveal key={idx} className="reveal-hidden" delay={idx * 150}>
                <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0e0e0e] shadow-xl hover:border-[#C5A059]/50 transition-all duration-300 flex flex-col h-full group">
                  <div className="w-full aspect-[2/3] relative overflow-hidden bg-black border-b border-white/10">
                    <img
                      src={trn.img}
                      alt={trn.title}
                      className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <div className="p-5 text-center flex-1 flex flex-col justify-center bg-[#121212] min-h-[6rem]">
                    <h3 className="font-oswald text-base sm:text-lg font-bold uppercase text-white group-hover:text-[#C5A059] transition-colors leading-snug">
                      {trn.title}
                    </h3>
                    <p className="text-xs sm:text-sm uppercase tracking-wider text-[#C5A059] font-bold mt-1.5 font-sans">
                      {trn.subtitle}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* 4 Standardised Credential Summary Boxes (Text-only clean boxes) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-12 sm:pb-16 lg:pb-20">
            <div className="bg-[#121212] border border-white/10 p-5 rounded-xl text-center flex flex-col justify-center hover:border-[#C5A059]/40 transition-all duration-300 shadow-md min-h-[6rem]">
              <div className="text-base sm:text-lg font-bold font-oswald text-[#C5A059] uppercase tracking-wide mb-1">
                Md Salaudin Adam (DONN)
              </div>
              <div className="text-xs sm:text-sm text-gray-200 font-sans font-medium">
                Founder and Fitness Director
              </div>
            </div>

            <div className="bg-[#121212] border border-white/10 p-5 rounded-xl text-center flex flex-col justify-center hover:border-[#C5A059]/40 transition-all duration-300 shadow-md min-h-[6rem]">
              <div className="text-base sm:text-lg font-bold font-oswald text-[#C5A059] uppercase tracking-wide mb-1">
                Trusted Since 2002
              </div>
              <div className="text-xs sm:text-sm text-gray-200 font-sans font-medium">
                24 Years of Coaching Experience
              </div>
            </div>

            <div className="bg-[#121212] border border-white/10 p-5 rounded-xl text-center flex flex-col justify-center hover:border-[#C5A059]/40 transition-all duration-300 shadow-md min-h-[6rem]">
              <div className="text-base sm:text-lg font-bold font-oswald text-[#C5A059] uppercase tracking-wide mb-1">
                Professional Certifications
              </div>
              <div className="text-xs sm:text-sm text-gray-200 font-sans font-medium">
                NASM | SOE | TRX | FMT | CPR | AED
              </div>
            </div>

            <div className="bg-[#121212] border border-white/10 p-5 rounded-xl text-center flex flex-col justify-center hover:border-[#C5A059]/40 transition-all duration-300 shadow-md min-h-[6rem]">
              <div className="text-base sm:text-lg font-bold font-oswald text-[#C5A059] uppercase tracking-wide mb-1">
                Premium Coaching Standard
              </div>
              <div className="text-xs sm:text-sm text-gray-200 font-sans font-medium">
                Performance and Transformation Specialist
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trial Session Section */}
      <section id="trial" className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5 scroll-mt-28 lg:scroll-mt-36">
        <div className="text-center mb-8 sm:mb-10">
          <span className="section-label justify-center mb-2">
            <Dumbbell size={16} className="text-[#C5A059]" /> TRIAL SESSION
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-3 font-oswald text-white tracking-tight">
            Start With a Trial Session
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto font-sans font-normal mb-6">
            The trial session is designed to understand your current fitness level, body condition, goals, lifestyle and training suitability. Experience our structured coaching style and professional approach.
          </p>

          {/* Trial Session Terms Box */}
          <div className="bg-[#121212] border border-[#C5A059]/40 rounded-xl p-4 sm:p-5 max-w-3xl mx-auto text-left space-y-2.5 font-sans shadow-xl">
            <div className="flex items-center gap-2 text-[#C5A059] font-oswald font-bold uppercase tracking-wider text-sm sm:text-base">
              <CheckCircle size={18} className="shrink-0 text-[#C5A059]" />
              <span>Trial Session Details & Terms</span>
            </div>
            <ul className="text-xs sm:text-sm text-gray-200 space-y-1.5 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#C5A059] font-bold">•</span>
                <span>The trial session is approximately 90 minutes (30m assessment + 60m training).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C5A059] font-bold">•</span>
                <span>FREE if you sign up for a minimum 12-session package immediately after the trial session.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C5A059] font-bold">•</span>
                <span>Trial session fee is $144 if you decide not to continue after the trial.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {[
            {
              name: "01. Fitness Assessment",
              desc: "Understand your current fitness level, body condition, movement quality and suitability for training.",
              featured: false,
              focusBullets: [
                "Body condition check",
                "Fitness level assessment",
                "Goal and lifestyle analysis",
                "Schedule suitability"
              ],
              waUrl: "https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20a%20Trial%20Session%20(Fitness%20Assessment)."
            },
            {
              name: "02. Coaching Experience",
              desc: "Experience the structured and disciplined coaching approach used by PersonalTrainer.sg.",
              featured: true,
              focusBullets: [
                "Proper form coaching",
                "Exercise control and technique",
                "Safe training progression",
                "Breathing and posture guidance"
              ],
              waUrl: "https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20a%20Trial%20Session%20(Coaching%20Experience)."
            },
            {
              name: "03. Custom Roadmap",
              desc: "Identify the training direction, coaching approach and programme structure suitable for your goal.",
              featured: false,
              focusBullets: [
                "Personalised programme outline",
                "Progression planning",
                "Practical schedule setup",
                "Nutrition awareness guidance"
              ],
              waUrl: "https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20a%20Trial%20Session%20(Custom%20Roadmap)."
            }
          ].map((plan) => (
            <div
              key={plan.name}
              className={`bg-[#0d0d0d] border rounded-xl p-6 flex flex-col justify-between h-full transition-all duration-300 relative shadow-2xl ${
                plan.featured
                  ? "border-[#C5A059] shadow-lg shadow-[#C5A059]/10"
                  : "border-white/10 hover:border-[#800020]/50"
              }`}
            >
              {plan.featured && (
                <span className="absolute top-4 right-4 bg-[#C5A059] text-black text-[11px] font-bold uppercase tracking-widest px-2.5 py-0.5 font-oswald rounded">
                  RECOMMENDED
                </span>
              )}
              
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-oswald text-white mb-2.5 uppercase tracking-tight">
                  {plan.name}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm font-sans leading-relaxed mb-4">
                  {plan.desc}
                </p>
                
                <div className="border-t border-white/10 pt-3.5 mb-3.5">
                  <span className="text-xs uppercase tracking-wider text-[#C5A059] font-bold font-oswald block mb-2.5">
                    Trial Session Focus:
                  </span>

                  <ul className="space-y-2 font-sans">
                    {plan.focusBullets.map((bullet, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
                        <CheckCircle size={14} className="text-[#C5A059] shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href={plan.waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-4 py-3.5 text-center font-bold tracking-wider font-oswald uppercase text-xs sm:text-sm transition-all duration-300 btn-gold rounded-lg inline-flex items-center justify-center gap-2"
              >
                <span>Enquire About Trial Session</span>
                <ArrowRight size={14} className="shrink-0" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-black py-12 md:py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Heading + Interactive Cards Slider */}
          <div className="w-full flex flex-col justify-center">
            <ScrollReveal className="reveal-left-hidden">
              {/* Header Title */}
              <div className="mb-6">
                <span className="section-label">
                  TESTIMONIALS
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase font-syne mb-2 leading-tight text-white break-words">
                  What Clients Say
                </h2>
                <p className="text-[#C5A059] font-oswald text-base md:text-lg uppercase tracking-wider">
                  Real feedback from clients who value structure, discipline and proper coaching.
                </p>
              </div>

              {/* TOP SLIDER NAVIGATION CONTROL BAR */}
              <div className="bg-[#111] border border-[#C5A059]/40 p-3 sm:p-4 rounded-xl flex flex-wrap items-center justify-between gap-3 mb-6 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-oswald uppercase tracking-widest text-[#C5A059] font-bold bg-[#1a1a1a] px-3 py-1.5 border border-white/10 rounded">
                    SLIDE {testimonialIndex + 1} OF {testimonials.length}
                  </span>
                </div>

                {/* Arrow Buttons & Slide Navigation */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                    className="flex items-center gap-1.5 px-4 py-2 bg-[#800020] text-white font-oswald text-xs font-bold uppercase tracking-wider hover:bg-[#9E1026] transition-colors rounded border border-[#800020]"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft size={18} />
                    <span>PREV</span>
                  </button>

                  <button
                    onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
                    className="flex items-center gap-1.5 px-4 py-2 bg-[#C5A059] text-black font-oswald text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] transition-colors rounded border border-[#C5A059]"
                    aria-label="Next Testimonial"
                  >
                    <span>NEXT</span>
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* Side-by-Side Testimonial Cards Slider */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {[
                  testimonials[testimonialIndex],
                  testimonials[(testimonialIndex + 1) % testimonials.length]
                ].map((item, idx) => (
                  <div
                    key={`${item.name}-${idx}`}
                    className="bg-[#0d0d0d] border border-white/15 text-white p-6 md:p-8 flex flex-col justify-between h-[420px] md:h-[450px] relative rounded-xl hover:border-[#C5A059]/50 transition-all duration-300 shadow-2xl"
                  >
                    <div className="flex-1 flex flex-col overflow-hidden">
                      {item.headline && (
                        <h4 className="text-[#C5A059] font-oswald text-sm md:text-base font-bold uppercase tracking-wide mb-3 leading-snug shrink-0">
                          "{item.headline}"
                        </h4>
                      )}
                      
                      {/* Scrollable Pure White Quote Container */}
                      <div className="overflow-y-auto pr-2 max-h-[250px] md:max-h-[280px] custom-scrollbar my-auto">
                        <p className="text-white text-sm md:text-base leading-relaxed font-sans font-normal text-slate-100">
                          "{item.quote}"
                        </p>
                      </div>
                    </div>

                    {/* Card Footer Author Details */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10 shrink-0">
                      <div>
                        <h5 className="font-oswald text-base font-bold text-white uppercase tracking-wider">
                          {item.name}
                        </h5>
                        <p className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold">
                          {item.role}
                        </p>
                      </div>
                      <span className="text-3xl font-serif text-[#C5A059]/40 font-bold">”</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* BOTTOM NAVIGATION CONTROL BAR (PAGINATION DOTS & NUMBERED BUTTONS) */}
              <div className="bg-[#111] border border-white/10 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Dot Indicators */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setTestimonialIndex(dotIdx)}
                      className={`h-3 transition-all duration-300 rounded-full ${
                        testimonialIndex === dotIdx
                          ? "w-8 bg-[#C5A059]"
                          : "w-3 bg-white/20 hover:bg-white/50"
                      }`}
                      aria-label={`Go to testimonial ${dotIdx + 1}`}
                    />
                  ))}
                </div>

                {/* Numbered Page Buttons [1] [2] [3] [4] [5] [6] [7] */}
                <div className="flex items-center gap-1.5 flex-wrap justify-center">
                  <span className="text-xs font-oswald text-gray-400 mr-1 uppercase">SLIDE:</span>
                  {testimonials.map((_, pageIdx) => (
                    <button
                      key={pageIdx}
                      onClick={() => setTestimonialIndex(pageIdx)}
                      className={`w-8 h-8 rounded text-xs font-bold font-oswald transition-all duration-200 border ${
                        testimonialIndex === pageIdx
                          ? "bg-[#C5A059] text-black border-[#C5A059] scale-110"
                          : "bg-[#1a1a1a] text-white border-white/10 hover:border-[#C5A059] hover:text-[#C5A059]"
                      }`}
                    >
                      {pageIdx + 1}
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <ScrollReveal className="reveal-left-hidden">
              <span className="section-label mb-3">
                FAQS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-5xl font-black uppercase font-oswald mb-5 leading-tight text-white tracking-tight">
                EVERYTHING YOU <br className="hidden sm:block" />
                <span className="text-[#C5A059]">NEED TO KNOW</span>
              </h2>
              <p className="text-[15.5px] lg:text-[17.5px] text-gray-200 leading-[1.65] mb-8 font-sans font-normal">
                Clear answers about personal training, rates, locations, trial sessions and coaching suitability.
              </p>
              <a href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20have%20a%20question%20about%20Personal%20Training." target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex items-center gap-2 group py-3.5 px-6 font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-lg">
                <span>WHATSAPP PERSONALTRAINER.SG</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300 shrink-0" />
              </a>
            </ScrollReveal>
          </div>

          {/* Interactive Accordion List */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} className="reveal-right-hidden" delay={i * 100}>
                <div className="border border-white/10 rounded-xl overflow-hidden transition-all duration-300 bg-[#0e0e0e] shadow-xl">
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className={`w-full flex justify-between items-center p-5 sm:p-6 text-left transition-colors duration-300 focus:outline-none ${
                      activeFaq === i
                        ? "bg-[#181818] text-[#C5A059] font-bold font-oswald text-base sm:text-lg uppercase border-b border-[#C5A059]/30"
                        : "bg-[#0e0e0e] text-white hover:text-[#C5A059] font-bold font-oswald text-base sm:text-lg uppercase"
                    }`}
                  >
                    <span className="pr-4 leading-snug">{faq.q}</span>
                    <div className="transition-transform duration-300 shrink-0">
                      <ChevronDown size={20} className={`text-[#C5A059] transition-transform duration-300 ${activeFaq === i ? "rotate-180" : ""}`} />
                    </div>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden bg-[#070707] ${
                      activeFaq === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 text-sm sm:text-base text-gray-200 leading-relaxed font-sans font-normal border-t border-white/5">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="bg-[#050505] py-16 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10 pb-12 mb-12">
            
            {/* Footer Logo and About */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/logopt.png"
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
                <a href="https://www.facebook.com/personaltrainer.sg/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 bg-[#C5A059] text-black flex items-center justify-center rounded hover:bg-white transition-colors duration-300">
                  <Facebook size={16} />
                </a>
                <a href="https://www.instagram.com/personaltrainer.sg/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 bg-[#C5A059] text-black flex items-center justify-center rounded hover:bg-white transition-colors duration-300">
                  <Instagram size={16} />
                </a>
                <a href="https://www.tiktok.com/@personaltrainer.sg" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-10 h-10 bg-[#C5A059] text-black flex items-center justify-center rounded hover:bg-white transition-colors duration-300">
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
                  { name: "Results", url: "/results" },
                  { name: "Contact Us", url: "/contact" }
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.url} className="text-gray-300 hover:text-[#C5A059] transition-colors duration-300 uppercase tracking-widest text-xs">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Open Hours */}
            <div>
              <h4 className="font-oswald text-lg font-bold text-white mb-6 uppercase tracking-wider">Open Hours</h4>
              <p className="text-gray-300 text-xs sm:text-sm tracking-wider font-oswald uppercase">
                By Appointment Only
              </p>
            </div>

            {/* Get in touch */}
            <div>
              <h4 className="font-oswald text-lg font-bold text-white mb-6 uppercase tracking-wider">Get in Touch</h4>
              <ul className="space-y-4 text-xs sm:text-sm text-gray-300 font-sans">
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
                  <span>Training locations arranged across Singapore</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyrights and Terms */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4 font-sans">
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


