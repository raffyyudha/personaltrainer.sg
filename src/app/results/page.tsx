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

export default function ResultPage() {
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
      <Navbar activePage="results" />


<section className="relative py-24 bg-[#0d0d0d] border-b border-white/5 flex flex-col items-center justify-center text-center overflow-hidden"><div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35 pointer-events-none"></div><div className="absolute left-[-10%] top-[10%] w-[350px] h-[350px] bg-[#800020] rounded-full blur-[150px] opacity-10 pointer-events-none"></div><div className="relative z-10 max-w-4xl mx-auto px-6"><ScrollReveal className="reveal-hidden"><h1 className="text-3xl md:text-6xl font-black font-syne uppercase tracking-tight mb-4 leading-tight">Real Clients. Real Progress. <br/><span className="text-[#800020]">Real Results.</span></h1><p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-6 leading-relaxed font-sans normal-case tracking-normal font-normal">Every transformation starts with a decision to change. At PersonalTrainer.sg, clients are guided through structured training, proper coaching, accountability and consistent progress.</p><p className="text-[#C5A059] font-oswald text-sm md:text-base uppercase tracking-wider mb-8">PersonalTrainer.sg is led by Md Salaudin Adam (DONN), Founder and Fitness Director, Trusted in Singapore Since 2002.</p><div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto mb-8"><a href="https://wa.me/6591081781" target="_blank" rel="noopener noreferrer" className="btn-primary group text-center"><span>WhatsApp PersonalTrainer.sg</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a><a className="btn-outline group text-center" href="/#trial"><span>Start Your Transformation</span></a></div><p className="text-sm uppercase tracking-[0.2em] text-gray-500 font-bold"><a className="hover:text-[#C5A059] transition-colors" href="/">Home</a><span className="mx-3 text-white/20">/</span><span className="text-[#C5A059]">Results</span></p></ScrollReveal></div></section><div className="w-full bg-[#800020] py-4 sm:py-5 overflow-hidden border-t border-b border-[#C5A059]/30 whitespace-nowrap flex select-none relative z-20 shadow-md"><div className="animate-marquee flex items-center shrink-0">{[1, 2].map((groupKey) => (<div key={groupKey} className="flex items-center shrink-0 font-oswald font-extrabold uppercase tracking-wider text-white text-base sm:text-lg md:text-xl"><span className="mx-3 sm:mx-5">IF RESULTS MATTERS</span><span className="text-[#C5A059] font-black">•</span><span className="mx-3 sm:mx-5">TRUSTED IN SINGAPORE SINCE 2002</span><span className="text-[#C5A059] font-black">•</span><span className="mx-3 sm:mx-5">24 YEARS OF COACHING EXPERIENCE</span><span className="text-[#C5A059] font-black">•</span><span className="mx-3 sm:mx-5">PREMIUM PERSONAL TRAINING</span><span className="text-[#C5A059] font-black">•</span><span className="mx-3 sm:mx-5">WEIGHT LOSS TRAINING</span><span className="text-[#C5A059] font-black">•</span><span className="mx-3 sm:mx-5">STRENGTH TRAINING</span><span className="text-[#C5A059] font-black">•</span><span className="mx-3 sm:mx-5">SENIOR FITNESS TRAINING</span><span className="text-[#C5A059] font-black">•</span><span className="mx-3 sm:mx-5">COUPLE TRAINING</span><span className="text-[#C5A059] font-black">•</span><span className="mx-3 sm:mx-5">DISCIPLINE</span><span className="text-[#C5A059] font-black">•</span><span className="mx-3 sm:mx-5">STRUCTURE</span><span className="text-[#C5A059] font-black">•</span><span className="mx-3 sm:mx-5">ACCOUNTABILITY</span><span className="text-[#C5A059] font-black">•</span><span className="mx-3 sm:mx-5">REAL RESULTS</span><span className="text-[#C5A059] font-black">•</span></div>))}</div></div><section className="bg-[#050505] py-12 md:py-20 px-6 md:px-12 relative overflow-hidden"><div className="max-w-4xl mx-auto text-center"><ScrollReveal className="reveal-hidden"><span className="section-label justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity text-[#C5A059]"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> INTRODUCTION</span><h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-6 font-syne">Results Built Through Structure and Consistency</h2><div className="text-gray-200 text-lg md:text-xl leading-relaxed space-y-4 max-w-3xl mx-auto font-sans font-normal"><p>Results do not happen from random workouts.</p><p>They happen when proper training, realistic planning, consistency, nutrition awareness and accountability work together.</p><p>At PersonalTrainer.sg, every client starts from a different point.</p><p>Some clients want to lose weight.</p><p>Some clients want to build strength.</p><p>Some clients want to improve stamina, body shape, mobility or confidence.</p><p>The goal is not only to change how the body looks.</p><p>The goal is to help clients move better, feel stronger, become more confident and build habits that support long term progress.</p></div></ScrollReveal></div></section><section id="transformations" className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <ScrollReveal className="reveal-hidden">
          <div className="text-center mb-16">
            <span className="section-label justify-center">
              <Users size={16} className="text-[#C5A059]" /> TRANSFORMATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-4 font-syne">
              Before and After Transformations
            </h2>
            <p className="text-[#C5A059] font-oswald text-lg uppercase tracking-wider mb-6">
              Real client progress through structured Personal Training.
            </p>
            <div className="text-gray-200 max-w-3xl mx-auto text-base md:text-lg leading-relaxed mb-10 font-sans space-y-3 font-normal">
              <p>
                This section showcases real client transformation photos directly from PersonalTrainer.sg. Each transformation represents effort, commitment, coaching, consistency and discipline.
              </p>
              <p>
                The results shown are not shortcuts. They are the outcome of proper training, realistic planning and regular progress over time.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          
          {/* Transformation 1: beforeafter1.png */}
          <ScrollReveal className="reveal-hidden">
            <div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-xl hover:border-[#800020]/30 transition-all duration-300 h-full flex flex-col justify-between">
              <div className="relative w-full overflow-hidden select-none border border-white/10 rounded-lg group shadow-2xl">
                <img src="/beforeafter1.png" alt="Before & After Transformation 1" className="w-full h-auto block object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="mt-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-oswald text-xl font-bold uppercase text-white hover:text-[#C5A059] transition-colors duration-300">Client Transformation #1</h3>
                    <p className="text-xs uppercase tracking-widest text-[#800020] font-bold mt-0.5">Weight Loss & Body Toning</p>
                  </div>
                  <span className="bg-[#800020]/10 border border-[#800020]/30 px-2.5 py-0.5 rounded text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">1-on-1 Coaching</span>
                </div>
                <p className="text-white text-xs italic leading-relaxed border-l-2 border-[#800020] pl-3 font-sans">
                  Real client transformation achieved through structured personal training and nutritional guidance.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Transformation 2: beforeafter2.png */}
          <ScrollReveal className="reveal-hidden">
            <div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-xl hover:border-[#800020]/30 transition-all duration-300 h-full flex flex-col justify-between">
              <div className="relative w-full overflow-hidden select-none border border-white/10 rounded-lg group shadow-2xl">
                <img src="/beforeafter2.png" alt="Before & After Transformation 2" className="w-full h-auto block object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="mt-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-oswald text-xl font-bold uppercase text-white hover:text-[#C5A059] transition-colors duration-300">Client Transformation #2</h3>
                    <p className="text-xs uppercase tracking-widest text-[#800020] font-bold mt-0.5">Fat Loss & Muscle Building</p>
                  </div>
                  <span className="bg-[#800020]/10 border border-[#800020]/30 px-2.5 py-0.5 rounded text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">1-on-1 Coaching</span>
                </div>
                <p className="text-white text-xs italic leading-relaxed border-l-2 border-[#800020] pl-3 font-sans">
                  Shed body fat, gained core strength and built discipline over dedicated coaching months.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Transformation 3: beforeafter3.png */}
          <ScrollReveal className="reveal-hidden">
            <div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-xl hover:border-[#800020]/30 transition-all duration-300 h-full flex flex-col justify-between">
              <div className="relative w-full overflow-hidden select-none border border-white/10 rounded-lg group shadow-2xl">
                <img src="/beforeafter3.png" alt="Before & After Transformation 3" className="w-full h-auto block object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="mt-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-oswald text-xl font-bold uppercase text-white hover:text-[#C5A059] transition-colors duration-300">Client Transformation #3</h3>
                    <p className="text-xs uppercase tracking-widest text-[#800020] font-bold mt-0.5">Physique & Core Conditioning</p>
                  </div>
                  <span className="bg-[#800020]/10 border border-[#800020]/30 px-2.5 py-0.5 rounded text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">1-on-1 Coaching</span>
                </div>
                <p className="text-white text-xs italic leading-relaxed border-l-2 border-[#800020] pl-3 font-sans">
                  Optimal physical condition and posture improvement through tailored progressive workouts.
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section><section className="bg-[#0c0c0c] py-12 md:py-20 px-6 md:px-12 relative overflow-hidden border-t border-white/5"><div className="max-w-7xl mx-auto"><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"><ScrollReveal className="reveal-hidden"><div className="p-8 border border-white/5 rounded bg-[#0d0d0d] hover:border-[#800020]/30 transition-all duration-300 group"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dumbbell mx-auto text-[#C5A059] mb-4 group-hover:scale-110 transition-transform duration-300"><path d="M14.4 14.4 9.6 9.6"></path><path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"></path><path d="m21.5 21.5-1.4-1.4"></path><path d="M3.9 3.9 2.5 2.5"></path><path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"></path></svg><h3 className="text-xl font-extrabold font-oswald text-white mb-2 uppercase">Real Client Progress</h3><p className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">Personalized Coaching</p></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="p-8 border border-white/5 rounded bg-[#0d0d0d] hover:border-[#800020]/30 transition-all duration-300 group"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up mx-auto text-[#C5A059] mb-4 group-hover:scale-110 transition-transform duration-300"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg><h3 className="text-xl font-extrabold font-oswald text-white mb-2 uppercase">Approved Photos</h3><p className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">Genuine Results</p></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="p-8 border border-white/5 rounded bg-[#0d0d0d] hover:border-[#800020]/30 transition-all duration-300 group"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users mx-auto text-[#C5A059] mb-4 group-hover:scale-110 transition-transform duration-300"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg><h3 className="text-xl font-extrabold font-oswald text-white mb-2 uppercase">Structured Training</h3><p className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">1-on-1 Guidance</p></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="p-8 border border-white/5 rounded bg-[#0d0d0d] hover:border-[#800020]/30 transition-all duration-300 group"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award mx-auto text-[#C5A059] mb-4 group-hover:scale-110 transition-transform duration-300"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg><h3 className="text-xl font-extrabold font-oswald text-white mb-2 uppercase">Trusted Feedback</h3><p className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">24 Years Experience</p></div></ScrollReveal></div></div></section><section className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5"><ScrollReveal className="reveal-hidden"><div className="text-center mb-16"><span className="section-label justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity text-[#C5A059]"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> GOALS</span><h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-4 font-syne">What Clients Work Towards</h2><p className="text-white max-w-2xl mx-auto text-sm md:text-base mb-6 font-sans">PersonalTrainer.sg helps clients work towards practical, realistic and meaningful fitness results.</p><p className="text-gray-500 max-w-2xl mx-auto text-xs italic font-sans">Every result depends on the client’s starting point, training frequency, lifestyle, nutrition habits and consistency.</p></div></ScrollReveal><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-4 rounded-lg flex items-center gap-3 hover:border-[#800020]/30 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="font-oswald text-sm font-bold uppercase text-white tracking-wide">Weight Loss</span></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-4 rounded-lg flex items-center gap-3 hover:border-[#800020]/30 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="font-oswald text-sm font-bold uppercase text-white tracking-wide">Fat Reduction</span></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-4 rounded-lg flex items-center gap-3 hover:border-[#800020]/30 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="font-oswald text-sm font-bold uppercase text-white tracking-wide">Strength Improvement</span></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-4 rounded-lg flex items-center gap-3 hover:border-[#800020]/30 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="font-oswald text-sm font-bold uppercase text-white tracking-wide">Body Toning</span></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-4 rounded-lg flex items-center gap-3 hover:border-[#800020]/30 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="font-oswald text-sm font-bold uppercase text-white tracking-wide">Better Posture</span></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-4 rounded-lg flex items-center gap-3 hover:border-[#800020]/30 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="font-oswald text-sm font-bold uppercase text-white tracking-wide">Improved Stamina</span></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-4 rounded-lg flex items-center gap-3 hover:border-[#800020]/30 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="font-oswald text-sm font-bold uppercase text-white tracking-wide">Improved Mobility</span></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-4 rounded-lg flex items-center gap-3 hover:border-[#800020]/30 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="font-oswald text-sm font-bold uppercase text-white tracking-wide">Better Balance</span></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-4 rounded-lg flex items-center gap-3 hover:border-[#800020]/30 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="font-oswald text-sm font-bold uppercase text-white tracking-wide">More Confidence</span></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-4 rounded-lg flex items-center gap-3 hover:border-[#800020]/30 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="font-oswald text-sm font-bold uppercase text-white tracking-wide">Better Energy</span></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-4 rounded-lg flex items-center gap-3 hover:border-[#800020]/30 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="font-oswald text-sm font-bold uppercase text-white tracking-wide">Healthier Lifestyle Habits</span></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-4 rounded-lg flex items-center gap-3 hover:border-[#800020]/30 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="font-oswald text-sm font-bold uppercase text-white tracking-wide">Greater Discipline</span></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-4 rounded-lg flex items-center gap-3 hover:border-[#800020]/30 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="font-oswald text-sm font-bold uppercase text-white tracking-wide">Better Training Consistency</span></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-4 rounded-lg flex items-center gap-3 hover:border-[#800020]/30 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="font-oswald text-sm font-bold uppercase text-white tracking-wide">Long Term Fitness Improvement</span></div></ScrollReveal></div></section><section className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5"><div className="grid lg:grid-cols-3 gap-8"><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-8 rounded-xl h-full flex flex-col justify-between hover:border-[#800020]/30 transition-all duration-300"><div><h3 className="font-oswald text-2xl font-bold uppercase text-white mb-6 hover:text-[#C5A059] transition-colors duration-300">Weight Loss &amp; Fat Reduction</h3><div className="text-white text-sm leading-relaxed mb-6 space-y-4 font-sans"><p>Many clients come to PersonalTrainer.sg because they want to lose weight, reduce body fat and feel healthier.</p><p>The approach is not based on crash dieting or unrealistic shortcuts.</p><p>The focus is on structured Personal Training, progressive workouts, strength building, conditioning, nutrition awareness and accountability.</p><p>The aim is to help clients reduce body fat, improve fitness, increase energy and build better habits that can be maintained.</p></div></div><div className="border-t border-white/5 pt-6 mt-6"><p className="text-[#C5A059] font-oswald text-xs uppercase tracking-wider mb-4">Start your Weight Loss journey with a proper plan and professional guidance.</p><a className="btn-primary w-full text-center text-xs block" href="/#contact">Enquire About Weight Loss Training</a></div></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-8 rounded-xl h-full flex flex-col justify-between hover:border-[#800020]/30 transition-all duration-300"><div><h3 className="font-oswald text-2xl font-bold uppercase text-white mb-6 hover:text-[#C5A059] transition-colors duration-300">Strength &amp; Body Toning</h3><div className="text-white text-sm leading-relaxed mb-6 space-y-4 font-sans"><p>Strength Training helps clients build a stronger body, improve muscle tone, develop better posture and feel more confident.</p><p>At PersonalTrainer.sg, training is planned according to the client’s ability and progressed safely over time.</p><p>The focus is on proper technique, controlled movement and steady improvement.</p><p>Strength Training is suitable for men and women who want to look stronger, feel stronger and improve overall body shape.</p></div></div><div className="border-t border-white/5 pt-6 mt-6"><p className="text-[#C5A059] font-oswald text-xs uppercase tracking-wider mb-4">Build strength, improve body shape and train with proper technique.</p><a className="btn-primary w-full text-center text-xs block" href="/#contact">Enquire About Strength Training</a></div></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-8 rounded-xl h-full flex flex-col justify-between hover:border-[#800020]/30 transition-all duration-300"><div><h3 className="font-oswald text-2xl font-bold uppercase text-white mb-6 hover:text-[#C5A059] transition-colors duration-300">Senior Fitness Progress</h3><div className="text-white text-sm leading-relaxed mb-6 space-y-4 font-sans"><p>For senior clients, progress is not only about appearance. Progress can mean standing stronger, walking better, moving with more confidence, improving balance, maintaining independence and feeling safer during daily activities.</p><p>Senior Fitness Training at PersonalTrainer.sg is adjusted according to the client’s ability, comfort level and physical condition.</p><p>The focus is on safe movement, strength, balance, mobility and daily movement confidence.</p><p className="text-xs border-l-2 border-[#800020] pl-3 italic text-gray-500">Important: For clients with medical conditions, doctor’s clearance may be required before starting training.</p></div></div><div className="border-t border-white/5 pt-6 mt-6"><p className="text-[#C5A059] font-oswald text-xs uppercase tracking-wider mb-4">Improve strength, movement and confidence safely.</p><a className="btn-primary w-full text-center text-xs block" href="/#contact">Enquire About Senior Fitness Training</a></div></div></ScrollReveal></div></section><section className="py-12 md:py-20 px-6 md:px-12 bg-[#0c0c0c] border-t border-b border-white/5 relative overflow-hidden"><div className="max-w-4xl mx-auto text-center"><ScrollReveal className="reveal-hidden"><span className="section-label justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart text-[#C5A059]"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg> YOUR JOURNEY</span><h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-6 font-syne">Every Transformation Has a Starting Point</h2><div className="text-white text-sm md:text-base leading-relaxed space-y-4 max-w-3xl mx-auto font-sans mb-8"><p>Many people delay training because they feel they are not ready.</p><p>Some feel too unfit. Some feel too overweight. Some feel too weak. Some feel embarrassed to start. Some have stopped and restarted many times.</p><p className="text-[#C5A059] font-oswald text-lg uppercase tracking-wider">At PersonalTrainer.sg, you do not need to be fit before you begin. You only need to be willing to start.</p><p>The programme will be adjusted according to where you are now, what your body can handle and what you want to achieve.</p></div><a className="btn-primary group inline-flex" href="/#trial"><span>Start Today</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a></ScrollReveal></div></section><section id="gallery" className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto"><ScrollReveal className="reveal-hidden"><div className="text-center mb-16"><span className="section-label justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity text-[#C5A059]"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> THE PROCESS</span><h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-4 font-syne">How Results Are Built</h2><p className="text-[#C5A059] font-oswald text-lg uppercase tracking-wider">Real results come from a proper process.</p></div></ScrollReveal><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-lg hover:border-[#800020]/30 transition-all duration-300 h-full flex flex-col justify-between"><div><span className="text-3xl font-extrabold font-oswald text-[#C5A059] block mb-3">01</span><h3 className="font-oswald text-lg font-bold uppercase text-white mb-2 tracking-wide">Understand Your Starting Point</h3></div><p className="text-white text-xs leading-relaxed font-sans mt-2">Your current fitness level, goal, training history, lifestyle and body condition are reviewed before planning the right direction.</p></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-lg hover:border-[#800020]/30 transition-all duration-300 h-full flex flex-col justify-between"><div><span className="text-3xl font-extrabold font-oswald text-[#C5A059] block mb-3">02</span><h3 className="font-oswald text-lg font-bold uppercase text-white mb-2 tracking-wide">Follow a Structured Programme</h3></div><p className="text-white text-xs leading-relaxed font-sans mt-2">Your training programme is planned according to your goal, ability, schedule and progress level.</p></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-lg hover:border-[#800020]/30 transition-all duration-300 h-full flex flex-col justify-between"><div><span className="text-3xl font-extrabold font-oswald text-[#C5A059] block mb-3">03</span><h3 className="font-oswald text-lg font-bold uppercase text-white mb-2 tracking-wide">Train With Proper Technique</h3></div><p className="text-white text-xs leading-relaxed font-sans mt-2">You are guided on safe movement, correct form, exercise control and proper training execution.</p></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-lg hover:border-[#800020]/30 transition-all duration-300 h-full flex flex-col justify-between"><div><span className="text-3xl font-extrabold font-oswald text-[#C5A059] block mb-3">04</span><h3 className="font-oswald text-lg font-bold uppercase text-white mb-2 tracking-wide">Progress Gradually</h3></div><p className="text-white text-xs leading-relaxed font-sans mt-2">Training intensity and exercise selection are adjusted over time so your body can improve safely and progressively.</p></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-lg hover:border-[#800020]/30 transition-all duration-300 h-full flex flex-col justify-between"><div><span className="text-3xl font-extrabold font-oswald text-[#C5A059] block mb-3">05</span><h3 className="font-oswald text-lg font-bold uppercase text-white mb-2 tracking-wide">Stay Consistent</h3></div><p className="text-white text-xs leading-relaxed font-sans mt-2">Consistency, discipline and accountability are key factors in achieving long term results.</p></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-lg hover:border-[#800020]/30 transition-all duration-300 h-full flex flex-col justify-between"><div><span className="text-3xl font-extrabold font-oswald text-[#C5A059] block mb-3">06</span><h3 className="font-oswald text-lg font-bold uppercase text-white mb-2 tracking-wide">Build Better Habits</h3></div><p className="text-white text-xs leading-relaxed font-sans mt-2">The goal is not only to complete training sessions, but to build a healthier lifestyle that supports lasting progress.</p></div></ScrollReveal></div></section><section id="testimonials" className="bg-[#050505] py-12 md:py-20 px-6 md:px-12 relative overflow-hidden border-t border-white/5"><div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center"><div className="lg:col-span-5"><ScrollReveal className="reveal-left-hidden"><span className="section-label"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square text-[#C5A059]"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> CLIENT FEEDBACK</span><h2 className="text-4xl md:text-5xl font-black uppercase font-syne mb-6 leading-tight">Client <span className="text-[#800020]">Feedback</span></h2><p className="text-white text-base leading-relaxed mb-8">Real feedback from clients who value structure, discipline and proper coaching.</p><div className="flex gap-4"><button onClick={prevTestimonial} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#800020] hover:border-[#800020] hover:text-white transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"></path></svg></button><button onClick={nextTestimonial} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#800020] hover:border-[#800020] hover:text-white transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"></path></svg></button></div></ScrollReveal></div><div className="lg:col-span-7"><ScrollReveal className="reveal-right-hidden"><div className="relative bg-[#0d0d0d] border border-white/5 p-6 sm:p-8 md:p-12 rounded-lg"><div className="absolute right-8 top-8 text-white/5 pointer-events-none"><span className="text-8xl font-serif text-[#C5A059]/20">"</span></div><div className="min-h-[160px] flex flex-col justify-between">
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
                <span className="text-white uppercase font-bold font-oswald text-lg">PersonalTrainer.sg</span>
                <span className="text-[#C5A059] uppercase text-xs">Trusted in Singapore Since 2002</span>
              </div>
            </div>
            <p className="text-white text-sm leading-relaxed mb-4 font-sans">
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
            <h4 className="font-oswald text-lg font-bold text-[#C5A059] mb-6 uppercase tracking-wider">Quick Links</h4>
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


