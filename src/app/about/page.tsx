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
  ShieldCheck,
  Target,
  TrendingUp,
  Clock,
  Crown,
  Sparkles,
  Shield,
  Medal
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

export default function AboutPage() {
  // States for interactive elements
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [activeVisionTab, setActiveVisionTab] = useState<"vision" | "mission">("vision");

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
      q: "What is the cost of your personal training?",
      a: "The Personal Trainer cost is a function of which package is purchased. In order for me to suggest which Personal Training package suits you most, I have found it most effective to start with a free consultation where we meet in order to get more background information from you, to see you in person, and to see how well the Personal Training program will fit your interests and goals. I also give you more detailed information about the Personal Training, how the Personal Training programs are done. For a concise description of Personal Trainer Cost, to learn more about Personal Training with PersonalTrainer.sg or want more information on Personal Fitness Training, do feel free to drop me a line at donn@personaltrainer.sg or WhatsApp +65 9108 1781 and I’ll get back to your queries immediately."
    },
    {
      q: "Where do you offer your personal training?",
      a: "I offer my Personal Training services at your Doorsteps across Singapore, fully equipped. Training can be conducted at your condo gym, suitable home space, selected ActiveSG gyms, approved private gym spaces, outdoor training areas, or other suitable locations."
    },
    {
      q: "What kinds of people do you often suggest to have your personal training with?",
      a: "My Personal Training is for anyone who wants to optimize their time & effort in the gym and to accomplish their fitness goals the most effective way possible. Even though some of my Personal Training clients have been professional athletes, Olympic athletes, and local stars, many of my Personal Training clients are people who want to lose weight, tone their muscles, to look good and feel good. Even though most of my Personal Training is focused on body sculpting, weight loss, and muscle toning, it’s also for body balancing, injury recovery and injury prevention."
    },
    {
      q: "What kind of a fitness training can I expect?",
      a: "Your Personal Training program you can expect is a function of where you are right now/ your initial level of fitness, where you want to be / your fitness goal, what you have been doing up to now / your fitness history, your diet / nutrition, and your genetics. Most of my Personal Training programs don’t require as high intensity workouts, as many people think, and in fact, may not be as effective as other workouts. My Personal Training is fun, and it should be to make it more of a lifestyle change, so it becomes a regular part of your life after Personal Training with a Personal Trainer, so you will continue with the benefits regular exercise and healthy eating. You can expect the best, most effective workout and diet nutrition program for your unique body and individual goals. My Personal Training will make you achieve your goals faster, safer, and more efficiently. My Personal Training will give you the most effective workouts, to optimize your time to maximize your results. You will get what you paid for!"
    },
    {
      q: "How are you different from other personal trainers?",
      a: "My Personal Training is all about attitude. Health and fitness is a way of life and on how you look at things. And it’s also about body balance, exercising for your muscles to be balanced, and eating balanced and correctly for your fitness goals, having the physically active body requires to be healthy, to feel and be your best."
    },
    {
      q: "How long will it take for me to see results with a personal trainer?",
      a: "The length of time you will see results depends on your initial level of fitness, diet nutrition, genetics, and your commitment. If you are committed, I can promise you to see your fitness results in a shorter amount of time you are realistically expecting. Most people want results instantly or don’t think they can look a certain way because of bone structure or how they always have looked. If I have a client who is committed to achieving their fitness results, I have transformed their bodies better than they had thought was possible."
    },
    {
      q: "What kind of fitness results can I expect to see from personal training?",
      a: "You will see and feel results the first day you start Personal Training on my Personal Training program. You will be shown proper exercise form and correct exercise technique, which optimizes the efficiency of the exercise movement. Ninety eight percent of my Personal Training clients, from professional athletes, bodybuilders, to doctors, chiropractors say they never felt many of the exercises the correct way before. If it feels natural, it’s usually not the most effective exercise technique since the body has many defenses from pain, from utilizing mostly joints, which are stronger than muscles and protect the muscles from tearing off the bones, to exercise momentum. The body doesn’t like pain and will do what it can to not have it, but there is a distinct difference between good pain, 'feeling the burn', to bad pain, which stems from injury. Focusing on correct exercise form and technique incorporates more muscle throughout the exercise workouts which results in increased lean muscle, muscle toning, muscle strength, metabolism, and weight loss. Using correct exercise form and technique also increases muscle balance, which increases injury recovery and injury prevention. Your body will also feel more balanced and therefore, you will become much stronger."
    },
    {
      q: "Do I need a personal trainer?",
      a: "If you want to lose more body fat and tone your muscles more than what you’ve been,\nIf you want to improve your diet and nutrition,\nIf you want to get as much out of your workouts as you possibly can and not just go through the motions,\nIf you want more motivation and be more consistent in your workouts,\nIf you want to have more energy, endurance, and enthusiasm,\nIf you want to look and feel better,\nIf you want to be more knowledgeable in your fitness knowledge,\n\nThen YOU definitely need a Personal Trainer, without any doubt."
    },
    {
      q: "Why work with a personal trainer?",
      a: "1) Motivation: Many people find that the hardest thing about exercising is finding the motivation within themselves to stick with a program. Getting a personal trainer is the perfect solution to this problem. A trainer is there to provide you with encouragement when you need that extra push.\n\n2) Proper Exercise Technique: Many people fail to realize the importance of exercise technique. Aside from possibly injuring yourself, you may be cutting yourself short simply because you are not performing the exercises correctly. Small adjustments in technique can make a world of difference.\n\n3) Program Design & Progression: If you want specific results you have to have a specific program. Wandering around the gym performing random exercises will not get you very far. A program must be designed that is specific to your individual needs and goals, and must carefully consider each program variable (ie. specific exercises, exercise order, time under tension, rest intervals, frequency, etc.). A qualified trainer knows how to manipulate these variables and progress a program to achieve a specific result.\n\n4) Health Benefits: Exercise alone is responsible for an array of health benefits, including reduced risk for disease (cardiovascular, diabetes, etc.), weight loss, increased energy, improved mental outlook, and many more. While you can achieve some of these by just being more active, working with a trainer will help you achieve a level of fitness beyond what you thought possible.\n\n5) Diet & Nutrition: The most important part of your weight loss program or being healthy is Meal planning, Recommendations for supplementation if needed, Nutritional strategies, Monitoring of your progress and fine-tuning of your diet & Healthy recipe sharing."
    },
    {
      q: "What are the benefits of having a personal trainer?",
      a: "Whether you are a true beginner or a super-fit gym maniac, there are many reasons to consider personal training services:\n\n• Tailor-made training sessions\n• Personal attention\n• Goal-setting assistance\n• Monitor progress\n• Focused approach to achieve both long and short term goals\n• Proper techniques\n• Injury prevention guidance\n• Helpful tips and suggestions provided, enabling you to train more effectively\n• Accountability component to enhance self-discipline\n• Strategies for those who tend to over-train\n• Ongoing motivation and support\n• Nutritional tips provided\n• Answers to your training questions"
    },
    {
      q: "How do I book a trial session?",
      a: "You can contact PersonalTrainer.sg through WhatsApp at +65 9108 1781 or submit the enquiry form. We will first understand your goals, current condition, preferred location, schedule and training needs before confirming the trial session."
    },
    {
      q: "Is the trial session free?",
      a: "The trial session is free only if the client signs up for a minimum 12-session package immediately after the trial session. If the client decides not to continue after the trial, the trial session fee is $144."
    },
    {
      q: "How long is the trial session?",
      a: "The trial session is approximately 90 minutes. It includes around 30 minutes of assessment and consultation, followed by around 60 minutes of training."
    },
    {
      q: "What are your opening hours?",
      a: "PersonalTrainer.sg operates by appointment only. Training sessions are arranged based on trainer availability, client schedule, location suitability and confirmed booking."
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
      <Navbar activePage="aboutus" />

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

      {/* About Description Section */}
      <section className="bg-[#050505] py-12 md:py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          
          {/* About Image Collage */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <ScrollReveal className="reveal-left-hidden w-full max-w-[480px]">
              <div className="relative">
                <div className="absolute right-[-15px] top-[-15px] w-full h-full border border-[#800020]/40 -z-10" />
                <img
                  src="/aboutus.avif"
                  alt="Fitness Training"
                  className="w-full h-auto object-contain border-[8px] border-white/5 transition-all duration-700"
                />
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

      {/* DONN’s Elite Performance System (DEPS) Section */}
      <section id="system" className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5 scroll-mt-28 lg:scroll-mt-36">
        <ScrollReveal className="reveal-hidden">
          
          {/* DEPS Main Heading */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <span className="section-label justify-center mb-3">
              <Crown size={16} className="text-[#C5A059]" /> SIGNATURE COACHING SYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase mb-6 font-syne text-white tracking-tight">
              DONN’s Elite Performance System <span className="text-[#C5A059]">(DEPS)</span>
            </h2>
            <p className="text-[#C5A059] font-oswald text-lg sm:text-xl font-bold uppercase tracking-wider mb-4">
              Proper Coaching. Real Structure. Long Term Results.
            </p>
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed font-sans font-normal">
              DONN’s Elite Performance System (DEPS) is built on clear coaching principles developed through 24 Years of Coaching Experience and Trusted in Singapore Since 2002.
            </p>
          </div>

        </ScrollReveal>

        {/* SECTION 1: FOUNDER DIRECTIVES */}
        <div className="mb-20">
          <ScrollReveal className="reveal-hidden">
            <div className="border-l-4 border-[#C5A059] pl-6 mb-10">
              <h3 className="text-2xl sm:text-3xl font-black uppercase font-oswald text-white tracking-wide">
                Founder Directives
              </h3>
              <p className="text-gray-300 text-sm sm:text-base font-sans mt-2 leading-relaxed max-w-3xl font-normal">
                This system is not based on random workouts, guesswork or temporary motivation. It is based on structure, discipline, safe progression, accountability and long term transformation.
              </p>
            </div>
          </ScrollReveal>

          {/* 10 Founder Directives Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "Train with Purpose",
                desc: "Every session must have a clear direction based on the client’s goal, fitness level, body condition and training suitability.",
                icon: <Target className="w-6 h-6 text-[#C5A059]" />
              },
              {
                num: "02",
                title: "Prioritise Proper Technique",
                desc: "Correct form, posture, breathing, control and safe movement must always come before heavier weights or harder exercises.",
                icon: <CheckCircle className="w-6 h-6 text-[#C5A059]" />
              },
              {
                num: "03",
                title: "Build Progress Step by Step",
                desc: "Fitness results should be developed through structured progression, not rushed training or careless exercise selection.",
                icon: <TrendingUp className="w-6 h-6 text-[#C5A059]" />
              },
              {
                num: "04",
                title: "Focus on Safety and Sustainability",
                desc: "Training must be challenging but suitable for the client’s body, age, ability, limitations and lifestyle.",
                icon: <ShieldCheck className="w-6 h-6 text-[#C5A059]" />
              },
              {
                num: "05",
                title: "Create Real Accountability",
                desc: "Clients need guidance, structure, discipline and regular support to stay consistent and committed.",
                icon: <Clock className="w-6 h-6 text-[#C5A059]" />
              },
              {
                num: "06",
                title: "Coach the Individual, Not the Template",
                desc: "Every client is different. DEPS is adjusted based on the client’s goal, fitness level, schedule, lifestyle, training history and physical condition.",
                icon: <Users className="w-6 h-6 text-[#C5A059]" />
              },
              {
                num: "07",
                title: "Combine Strength, Stamina and Movement Quality",
                desc: "A proper programme should improve strength, stamina, mobility, posture, balance, body control and daily movement confidence.",
                icon: <Activity className="w-6 h-6 text-[#C5A059]" />
              },
              {
                num: "08",
                title: "Support Lifestyle Change",
                desc: "Long term results require better habits, nutrition awareness, consistency, discipline and realistic lifestyle improvement.",
                icon: <Sparkles className="w-6 h-6 text-[#C5A059]" />
              },
              {
                num: "09",
                title: "Keep Coaching Professional",
                desc: "Every client must be coached with respect, focus, attention to detail and a high professional standard.",
                icon: <Award className="w-6 h-6 text-[#C5A059]" />
              },
              {
                num: "10",
                title: "Build Long Term Transformation",
                desc: "The goal is not just to complete workouts. The goal is to help clients become stronger, healthier, more confident and more consistent over time.",
                icon: <Crown className="w-6 h-6 text-[#C5A059]" />
              }
            ].map((directive, idx) => (
              <ScrollReveal key={directive.num} className="reveal-hidden" delay={idx * 80}>
                <div className="bg-[#0e0e0e] border border-white/10 p-6 sm:p-7 rounded-xl hover:border-[#C5A059]/60 hover:shadow-[0_0_20px_rgba(197,160,89,0.15)] transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 border border-[#C5A059]/40 bg-[#161616] rounded-lg flex items-center justify-center group-hover:bg-[#C5A059]/10 group-hover:border-[#C5A059] transition-all duration-300 shrink-0">
                        {directive.icon}
                      </div>
                      <span className="font-oswald text-2xl font-black text-[#C5A059]/40 group-hover:text-[#C5A059] transition-colors">
                        {directive.num}
                      </span>
                    </div>
                    <h4 className="font-oswald text-lg sm:text-xl font-bold uppercase text-white mb-2.5 group-hover:text-[#C5A059] transition-colors leading-snug">
                      {directive.title}
                    </h4>
                    <p className="text-gray-300 text-xs sm:text-sm font-sans leading-relaxed font-normal">
                      {directive.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* SECTION 2: FOUNDER CREDENTIALS */}
        <div>
          <ScrollReveal className="reveal-hidden">
            <div className="border-l-4 border-[#C5A059] pl-6 mb-8">
              <h3 className="text-2xl sm:text-3xl font-black uppercase font-oswald text-white tracking-wide">
                Founder Credentials
              </h3>
              <p className="text-gray-300 text-sm sm:text-base font-sans mt-2 leading-relaxed max-w-4xl font-normal">
                Md Salaudin Adam (DONN), Founder and Fitness Director of PersonalTrainer.sg, brings over two decades of coaching experience, professional certifications and real world training expertise to DONN’s Elite Performance System (DEPS).
              </p>
            </div>

            {/* Certifications Banner Badge */}
            <div className="bg-[#121212] border-2 border-[#C5A059]/50 rounded-xl p-5 mb-10 text-center shadow-xl">
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-oswald font-bold block mb-1">
                Professional Fitness Certifications
              </span>
              <div className="text-lg sm:text-2xl font-black font-oswald text-white uppercase tracking-wider">
                NASM | SOE | TRX | FMT | CPR | AED
              </div>
            </div>
          </ScrollReveal>

          {/* 12 Founder Credentials Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Founder of PersonalTrainer.sg",
                desc: "Founder and Fitness Director of PersonalTrainer.sg, providing structured personal training services across Singapore.",
                icon: <Crown className="w-6 h-6 text-[#C5A059]" />
              },
              {
                title: "Trusted in Singapore Since 2002",
                desc: "A long standing personal training brand built on trust, coaching experience and client results.",
                icon: <ShieldCheck className="w-6 h-6 text-[#C5A059]" />
              },
              {
                title: "24 Years of Coaching Experience",
                desc: "Over two decades of hands on coaching experience with clients of different ages, goals, fitness levels and lifestyles.",
                icon: <Award className="w-6 h-6 text-[#C5A059]" />
              },
              {
                title: "Professional Personal Trainer",
                desc: "Experienced in personal training, weight loss training, strength training, senior fitness, couple training, kickboxing fitness and lifestyle transformation coaching.",
                icon: <Dumbbell className="w-6 h-6 text-[#C5A059]" />
              },
              {
                title: "Fitness Lifestyle Consultant",
                desc: "Guiding clients beyond exercise with structure, accountability, nutrition awareness and sustainable lifestyle habits.",
                icon: <Users className="w-6 h-6 text-[#C5A059]" />
              },
              {
                title: "Premium Performance & Transformation Specialist",
                desc: "Focused on helping clients improve strength, confidence, body composition, stamina, movement quality and long term fitness.",
                icon: <Sparkles className="w-6 h-6 text-[#C5A059]" />
              },
              {
                title: "NASM Certified",
                desc: "Professional certification foundation for structured personal training and safe coaching practice.",
                icon: <CheckCircle className="w-6 h-6 text-[#C5A059]" />
              },
              {
                title: "SOE Certified",
                desc: "Additional professional training credential supporting coaching knowledge and fitness instruction.",
                icon: <CheckCircle className="w-6 h-6 text-[#C5A059]" />
              },
              {
                title: "TRX Certified",
                desc: "Qualified in suspension training for strength, core control, stability and functional movement.",
                icon: <CheckCircle className="w-6 h-6 text-[#C5A059]" />
              },
              {
                title: "FMT Certified",
                desc: "Certified in Functional Movement Training to support movement quality, mobility, posture and exercise correction.",
                icon: <CheckCircle className="w-6 h-6 text-[#C5A059]" />
              },
              {
                title: "CPR and AED Certified",
                desc: "Certified in emergency response support for safer training environments.",
                icon: <CheckCircle className="w-6 h-6 text-[#C5A059]" />
              },
              {
                title: "MANHUNT Finalist 2001",
                desc: "Fitness and physique background that supports my long standing involvement in performance, discipline and body transformation.",
                icon: <Medal className="w-6 h-6 text-[#C5A059]" />
              }
            ].map((cred, idx) => (
              <ScrollReveal key={cred.title} className="reveal-hidden" delay={idx * 80}>
                <div className="bg-[#0e0e0e] border border-white/10 p-6 rounded-xl hover:border-[#C5A059]/60 hover:shadow-[0_0_20px_rgba(197,160,89,0.15)] transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    <div className="w-11 h-11 border border-[#C5A059]/40 bg-[#161616] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#C5A059]/10 group-hover:border-[#C5A059] transition-all duration-300 shrink-0">
                      {cred.icon}
                    </div>
                    <h4 className="font-oswald text-base sm:text-lg font-bold uppercase text-white mb-2 group-hover:text-[#C5A059] transition-colors leading-snug">
                      {cred.title}
                    </h4>
                    <p className="text-gray-300 text-xs sm:text-sm font-sans leading-relaxed font-normal">
                      {cred.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
              <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed mb-6 font-sans font-normal">
                PersonalTrainer.sg works with clients who want to improve their health, fitness, body shape, strength and confidence.
              </p>
              <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed mb-8 font-sans font-normal">
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
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-sans">{item.desc}</p>
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
              <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed mb-4 font-sans font-normal">
                PersonalTrainer.sg is built on experience, discipline, structure and results. The focus is not on trends, gimmicks or temporary motivation. 
              </p>
              <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed mb-6 font-sans font-normal">
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase font-syne mb-6 leading-tight">
                Trusted by Our <br />
                <span className="text-[#800020] whitespace-nowrap">Community</span>
              </h2>
              <p className="text-white text-base leading-relaxed mb-8">
                Discover the actual training experiences shared by clients who committed to structured personal training with PersonalTrainer.sg.
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
      <section id="faq" className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 border-t border-white/5">
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
              Have questions about personal training packages, rates or locations? Contact PersonalTrainer.sg directly on WhatsApp or submit an enquiry.
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
              <a href="https://www.facebook.com/personaltrainer.sg/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#800020] hover:text-white transition-colors duration-300">
                <Facebook size={14} />
              </a>
              <a href="https://www.instagram.com/personaltrainer.sg/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#800020] hover:text-white transition-colors duration-300">
                <Instagram size={14} />
              </a>
              <a href="https://www.tiktok.com/@personaltrainer.sg" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#800020] hover:text-white transition-colors duration-300">
                <TikTokIcon size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-oswald text-lg font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white">
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
                <span>Training locations arranged across Singapore</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyrights and Terms */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© 2026 PersonalTrainer.sg. All Rights Reserved. Led by Md Salaudin Adam (DONN).</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}


