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
  Award,
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

const blueprints = [
  {
    id: 1,
    anchor: "#personal-training",
    title: "Personal Training",
    subtitle: "One to one coaching for structure, accountability and results.",
    desc: "Personal Training is suitable for clients who want proper guidance, professional coaching and a clear training plan. Whether you are a beginner, returning to fitness after a long break, or already training but not seeing the results you want, Personal Training helps you train with better structure, better technique and better focus. Every session is planned according to your fitness level, body condition, goal and lifestyle. You will be guided on proper exercise technique, safe movement, training intensity, progression and consistency.",
    img: "/donn-coaching-latpulldown.avif",
    suitableFor: [
      "Beginners who need proper guidance",
      "Busy professionals who need structure",
      "Clients who want accountability",
      "Clients who want better form and technique",
      "Clients who want serious Body Transformation",
      "Clients who want a personalised training plan"
    ],
    mainFocus: [
      "Proper exercise coaching",
      "Strength improvement",
      "Fat reduction",
      "Fitness improvement",
      "Better movement",
      "Accountability",
      "Long term consistency"
    ],
    ctaText: "Enquire About Personal Training",
    ctaUrl: "https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Personal%20Training.%20Please%20advise%20on%20the%20details%20and%20availability."
  },
  {
    id: 2,
    anchor: "#couple-training",
    title: "Couple Training",
    subtitle: "Train together, stay motivated and work towards better fitness as a team.",
    desc: "Couple Training is designed for two clients (partners, friends, or family members) who want to train together. Training with a partner is a great way to stay motivated, enjoy the process, and share the commitment. The sessions are planned to accommodate both individuals' fitness levels and objectives, ensuring that both participants get a structured and safe workout. It is an excellent option for couples who want to build healthy lifestyle habits together, stay consistent, and motivate each other through every workout.",
    img: "/coupletraining.avif",
    suitableFor: [
      "Partners, friends or family members",
      "Clients who want training motivation",
      "Clients who want to train together",
      "Clients who want shared consistency",
      "Beginners and intermediates alike",
      "Clients who enjoy a collaborative workout"
    ],
    mainFocus: [
      "Shared accountability",
      "Motivation & support",
      "Joint fitness goals",
      "Proper form coaching",
      "Custom progression for both",
      "Teamwork conditioning",
      "Consistency building"
    ],
    ctaText: "Enquire About Couple Training",
    ctaUrl: "https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Couple%20Training.%20Please%20advise%20on%20the%20details%20and%20availability."
  },
  {
    id: 3,
    anchor: "#weight-loss",
    title: "Weight Loss Training",
    subtitle: "Structured coaching to help you reduce body fat and build healthier habits.",
    desc: "Weight Loss Training is designed for clients who want to reduce body fat, improve fitness, increase energy and build a stronger, healthier lifestyle. The goal is not extreme dieting or short term weight loss. The goal is sustainable progress through proper training, consistency, nutrition awareness and accountability. Your programme will include a combination of resistance training, conditioning, movement work and lifestyle guidance according to your current fitness level. This approach helps you burn calories, build strength, improve stamina and develop habits that support long term progress.",
    img: "/donn-coaching-elliptical.avif",
    suitableFor: [
      "Clients who want Weight Loss",
      "Clients who want Fat Reduction",
      "Clients who feel unfit or low in energy",
      "Clients who need structure and discipline",
      "Clients who have tried many times but lost consistency",
      "Clients who want a realistic and practical approach"
    ],
    mainFocus: [
      "Fat reduction",
      "Improved stamina",
      "Strength improvement",
      "Better energy",
      "Lifestyle discipline",
      "Training consistency",
      "Confidence building"
    ],
    ctaText: "Enquire About Weight Loss Training",
    ctaUrl: "https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Weight%20Loss%20Training.%20Please%20advise%20on%20the%20details%20and%20availability."
  },
  {
    id: 4,
    anchor: "#strength-training",
    title: "Strength Training",
    subtitle: "Build strength, improve body shape and move with more confidence.",
    desc: "Strength Training is important for both men and women. It helps improve muscle tone, strength, posture, body shape, confidence and overall physical performance. At PersonalTrainer.sg, Strength Training is planned progressively and safely according to your ability. The focus is on proper form, controlled movement, correct exercise selection and steady improvement over time. This is suitable for clients who want to look stronger, feel stronger and improve their overall body composition.",
    img: "/donn-coaching-barbell.avif",
    suitableFor: [
      "Men and women who want to build strength",
      "Clients who want Body Toning",
      "Clients who want better muscle shape",
      "Clients who want better posture",
      "Clients who want to improve gym confidence",
      "Clients who want to train with proper technique"
    ],
    mainFocus: [
      "Strength improvement",
      "Muscle toning",
      "Resistance training",
      "Better posture",
      "Improved body shape",
      "Exercise control",
      "Training progression"
    ],
    ctaText: "Enquire About Strength Training",
    ctaUrl: "https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Strength%20Training.%20Please%20advise%20on%20the%20details%20and%20availability."
  },
  {
    id: 5,
    anchor: "#kickboxing",
    title: "Kickboxing Fitness",
    subtitle: "Dynamic kickboxing workouts for cardio, stamina and fat burning.",
    desc: "Kickboxing Fitness is a dynamic training option for clients who want a more energetic and challenging workout style. This programme uses kickboxing inspired movements to improve stamina, coordination, movement confidence, conditioning and calorie burning. It is suitable for clients who want to enjoy training while still working hard towards fitness and body transformation goals. Kickboxing Fitness can be combined with Personal Training, Weight Loss Training or Strength Training depending on your programme.",
    img: "/donn-kickboxing.avif",
    suitableFor: [
      "Clients who enjoy high energy workouts",
      "Clients who want Fat Burning",
      "Clients who want better stamina",
      "Clients who want better coordination",
      "Clients who want a more exciting training style",
      "Clients who want to build confidence through movement"
    ],
    mainFocus: [
      "Stamina improvement",
      "Fitness conditioning",
      "Fat burning",
      "Coordination",
      "Movement confidence",
      "Cardio fitness",
      "Training variety"
    ],
    ctaText: "Enquire About Kickboxing Fitness",
    ctaUrl: "https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Kickboxing%20Fitness.%20Please%20advise%20on%20the%20details%20and%20availability."
  },
  {
    id: 6,
    anchor: "#home-condo-training",
    title: "Home and Condo Gym Training",
    subtitle: "Convenient personal training in the comfort of your own home or condo gym.",
    desc: "Home and Condo Gym Training is designed for clients who value convenience, privacy, and time efficiency. If you have a condo gym or space in your home, Md Salaudin Adam (DONN) will bring structured personal training directly to you. There is no need to travel to a commercial gym or purchase expensive equipment. Your training will be planned based on the specific facilities and equipment available at your location, ensuring you get a highly effective, safe, and professional workout right at your doorstep. This service is ideal for busy parents, executives, or anyone who prefers a private training environment.",
    img: "/heroimage.avif",
    suitableFor: [
      "Busy professionals who want to save travel time",
      "Clients who prefer private, one-on-one training",
      "Condo residents with gym access",
      "Homeowners with space for functional training",
      "Beginners who feel self-conscious in public gyms",
      "Clients who want a customised home workout plan"
    ],
    mainFocus: [
      "Maximum convenience",
      "Time-saving workouts",
      "Optimizing home/condo equipment",
      "Private coaching attention",
      "Safe movement guidance",
      "Custom functional planning",
      "Consistency building"
    ],
    ctaText: "Enquire About Home & Condo Gym Training",
    ctaUrl: "https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Home%20and%20Condo%20Gym%20Training.%20Please%20advise%20on%20the%20details%20and%20availability."
  },
  {
    id: 7,
    anchor: "#gym-management",
    title: "Gym Management",
    subtitle: "Professional consultation, gym layout planning and facility management.",
    desc: "Gym Management services are designed for condo developers, corporate offices, management committees, or private gym owners who want to set up, upgrade, or manage a high-quality fitness facility. With over two decades of industry experience in Singapore, Md Salaudin Adam (DONN) provides expert consulting on gym layouts, space optimization, safety protocols, equipment sourcing, and ongoing maintenance guidance. A well-designed and properly managed gym enhances the value of your property or office and ensures a premium, safe, and professional experience for all users.",
    img: "/donn-facility.avif",
    suitableFor: [
      "Condo management committees (MCST)",
      "Corporate offices setting up wellness spaces",
      "Private fitness facility owners",
      "Developers planning residential gyms",
      "Organizations upgrading gym equipment",
      "Businesses looking for gym safety audits"
    ],
    mainFocus: [
      "Gym layout and design",
      "Space optimization",
      "Safety and compliance audits",
      "Equipment consulting",
      "Maintenance checklists",
      "Premium facility branding",
      "Member usage optimization"
    ],
    ctaText: "Enquire About Gym Management",
    ctaUrl: "https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Gym%20Management.%20Please%20advise%20on%20the%20details%20and%20availability."
  },
  {
    id: 8,
    anchor: "#senior-fitness",
    title: "Senior Fitness Training",
    subtitle: "Safe, structured and practical training for older adults.",
    desc: "Senior Fitness Training is designed for older adults who want to improve strength, balance, mobility, stability and daily movement confidence. The programme is adjusted according to the client’s ability, comfort level, medical background and current fitness condition. The focus is not on pushing aggressively. The focus is on safe movement, better control, stronger muscles, improved balance and confidence in daily activities. Training can help seniors maintain independence, move better and feel more capable in everyday life.",
    img: "/aboutus.avif",
    note: "For clients with medical conditions, doctor’s clearance may be required before starting training.",
    suitableFor: [
      "Older adults who want safe training",
      "Seniors who want better strength",
      "Seniors who want better balance",
      "Seniors who want better mobility",
      "Seniors returning to exercise",
      "Seniors who need careful and structured coaching"
    ],
    mainFocus: [
      "Safe exercise selection",
      "Strength maintenance",
      "Balance improvement",
      "Mobility work",
      "Posture support",
      "Daily movement confidence",
      "Progress at a comfortable pace"
    ],
    ctaText: "Enquire About Senior Fitness Training",
    ctaUrl: "https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Senior%20Fitness%20Training.%20Please%20advise%20on%20the%20details%20and%20availability."
  },
  {
    id: 9,
    anchor: "#corporate-wellness",
    title: "Corporate Wellness",
    subtitle: "Fitness and wellness support for companies, teams and professionals.",
    desc: "Corporate Wellness is designed for companies, teams and working professionals who want to improve health, energy, fitness and workplace performance. A healthier team can be more energetic, more confident and more productive. Corporate Wellness sessions can be customised based on the company’s goals, available space, group size and schedule. Programmes may include fitness sessions, group workouts, lifestyle coaching, weight management support and practical wellness education.",
    img: "/donn-facility.avif",
    suitableFor: [
      "Companies",
      "Corporate teams",
      "Office professionals",
      "Employee wellness programmes",
      "Group fitness sessions",
      "Workplace health initiatives"
    ],
    mainFocus: [
      "Fitness improvement",
      "Energy improvement",
      "Team motivation",
      "Lifestyle awareness",
      "Weight management support",
      "Group accountability",
      "Workplace wellness"
    ],
    ctaText: "Enquire About Corporate Wellness",
    ctaUrl: "https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Corporate%20Wellness.%20Please%20advise%20on%20the%20details%20and%20availability."
  }
];

export default function ServicesPage() {
  // States for interactive elements
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeBlueprint, setActiveBlueprint] = useState<number | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [activeVisionTab, setActiveVisionTab] = useState<"vision" | "mission">("vision");
  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        const hash = window.location.hash;
        const matched = blueprints.find(bp => bp.anchor === hash);
        if (matched) {
          setActiveBlueprint(matched.id);
          setTimeout(() => {
            const el = document.getElementById(hash.substring(1));
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 100);
        }
      }
    };
    window.addEventListener('hashchange', handleHash);
    // Run on mount
    setTimeout(handleHash, 300);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);


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
      <Navbar activePage="services" />


<section className="relative py-24 bg-[#0d0d0d] border-b border-white/5 flex flex-col items-center justify-center text-center overflow-hidden"><div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35 pointer-events-none"></div><div className="absolute left-[-10%] top-[10%] w-[350px] h-[350px] bg-[#800020] rounded-full blur-[150px] opacity-10 pointer-events-none"></div><div className="relative z-10 max-w-5xl mx-auto px-6"><ScrollReveal className="reveal-hidden"><h1 className="text-3xl md:text-6xl font-black font-syne uppercase tracking-tight mb-4 leading-tight">Structured Personal Training <br/><span className="text-[#800020]">for Real Results</span></h1><div className="text-gray-350 text-sm md:text-base max-w-3xl mx-auto mb-8 leading-relaxed font-sans font-normal text-center space-y-3"><p>Professional Personal Training in Singapore for Weight Loss Training, Strength Training, Senior Fitness Training, Couple Training, Kickboxing Fitness, Corporate Wellness and Lifestyle Transformation.</p><p className="text-xs text-white border-l border-r border-[#C5A059] px-4 inline-block">Led by Md Salaudin Adam (DONN), Founder and Fitness Director of PersonalTrainer.sg, Trusted in Singapore Since 2002 with 24 Years of Coaching Experience.</p></div><div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-4xl mx-auto mb-10 text-left"><div className="bg-white/5 border border-white/10 p-3 rounded flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-[10px] sm:text-xs text-white font-bold uppercase tracking-wider font-oswald">Founder and Fitness Director of PersonalTrainer.sg</span></div><div className="bg-white/5 border border-white/10 p-3 rounded flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-[10px] sm:text-xs text-white font-bold uppercase tracking-wider font-oswald">Trusted in Singapore Since 2002</span></div><div className="bg-white/5 border border-white/10 p-3 rounded flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-[10px] sm:text-xs text-white font-bold uppercase tracking-wider font-oswald">24 Years of Coaching Experience</span></div><div className="bg-white/5 border border-white/10 p-3 rounded flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-[10px] sm:text-xs text-white font-bold uppercase tracking-wider font-oswald">Transformation Specialist</span></div><div className="bg-white/5 border border-white/10 p-3 rounded flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-[10px] sm:text-xs text-white font-bold uppercase tracking-wider font-oswald">NASM Certified Personal Trainer</span></div><div className="bg-white/5 border border-white/10 p-3 rounded flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-[10px] sm:text-xs text-white font-bold uppercase tracking-wider font-oswald">TRX Certified Personal Trainer</span></div><div className="bg-white/5 border border-white/10 p-3 rounded flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-[10px] sm:text-xs text-white font-bold uppercase tracking-wider font-oswald">SOE Certified Personal Trainer</span></div><div className="bg-white/5 border border-white/10 p-3 rounded flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-[10px] sm:text-xs text-white font-bold uppercase tracking-wider font-oswald">FMT Fit Muay Trainer</span></div><div className="bg-white/5 border border-white/10 p-3 rounded flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-[10px] sm:text-xs text-white font-bold uppercase tracking-wider font-oswald">CPR and AED Certified</span></div></div><div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto mb-8">
  <a href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Personal%20Training.%20My%20goal%20is%20to%20improve%20my%20fitness%20and%20I%20would%20like%20to%20know%20more%20about%20the%20training%20options%2C%20availability%20and%20Trial%20Session." target="_blank" rel="noopener noreferrer" className="btn-primary group text-center">
    <span>WhatsApp PersonalTrainer.sg</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
  </a>
  <Link href="/rates" className="btn-gold group text-center">
    <span>View Personal Training Rates</span>
  </Link>
  <a className="btn-outline group text-center" href="/contact#enquiry">
    <span>Enquire About Training</span>
  </a>
</div><p className="text-sm uppercase tracking-[0.2em] text-gray-500 font-bold"><a className="hover:text-[#C5A059] transition-colors" href="/">Home</a><span className="mx-3 text-white/20">/</span><span className="text-[#C5A059]">Services</span></p></ScrollReveal></div></section><div className="w-full bg-[#800020] py-4 sm:py-5 overflow-hidden border-t border-b border-[#C5A059]/30 whitespace-nowrap flex select-none relative z-20 shadow-md"><div className="animate-marquee flex items-center shrink-0">{[1, 2].map((groupKey) => (<div key={groupKey} className="flex items-center shrink-0 font-oswald font-extrabold uppercase tracking-wider text-white text-base sm:text-lg md:text-xl"><span className="mx-3 sm:mx-5">IF RESULTS MATTERS</span><span className="text-[#C5A059] font-black">•</span><span className="mx-3 sm:mx-5">TRUSTED IN SINGAPORE SINCE 2002</span><span className="text-[#C5A059] font-black">•</span><span className="mx-3 sm:mx-5">24 YEARS OF COACHING EXPERIENCE</span><span className="text-[#C5A059] font-black">•</span><span className="mx-3 sm:mx-5">PREMIUM PERSONAL TRAINING</span><span className="text-[#C5A059] font-black">•</span><span className="mx-3 sm:mx-5">WEIGHT LOSS TRAINING</span><span className="text-[#C5A059] font-black">•</span><span className="mx-3 sm:mx-5">STRENGTH TRAINING</span><span className="text-[#C5A059] font-black">•</span><span className="mx-3 sm:mx-5">SENIOR FITNESS TRAINING</span><span className="text-[#C5A059] font-black">•</span><span className="mx-3 sm:mx-5">COUPLE TRAINING</span><span className="text-[#C5A059] font-black">•</span><span className="mx-3 sm:mx-5">DISCIPLINE</span><span className="text-[#C5A059] font-black">•</span><span className="mx-3 sm:mx-5">STRUCTURE</span><span className="text-[#C5A059] font-black">•</span><span className="mx-3 sm:mx-5">ACCOUNTABILITY</span><span className="text-[#C5A059] font-black">•</span><span className="mx-3 sm:mx-5">REAL RESULTS</span><span className="text-[#C5A059] font-black">•</span></div>))}</div></div><section className="bg-[#050505] py-12 md:py-20 px-6 md:px-12 relative overflow-hidden"><div className="max-w-4xl mx-auto text-center"><ScrollReveal className="reveal-hidden"><span className="section-label justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity text-[#C5A059]"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> PHILOSOPHY</span><h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-6 font-syne">Training Programmes Designed Around You</h2><div className="text-white text-sm md:text-base leading-relaxed space-y-4 max-w-3xl mx-auto font-sans"><p>At PersonalTrainer.sg, every training programme is built around your body, your goal, your fitness level and your lifestyle. There is no single programme that works for everyone.</p><p>Some clients want Weight Loss Training. Some clients want Strength Training. Some clients want Body Toning. Some clients want Senior Fitness Training. Some clients want to train together through Couple Training. Some clients want Kickboxing Fitness for stamina, confidence and fat burning. Others need proper structure, discipline and accountability to stay consistent.</p><p className="text-[#C5A059] font-oswald text-lg uppercase tracking-wider">That is why every programme is planned with purpose, adjusted according to ability and guided with proper coaching.</p><p>With Md Salaudin Adam (DONN), you are not just following exercises. You are being coached through a structured fitness system designed to help you train safely, improve progressively and work towards real results.</p></div></ScrollReveal></div></section>
      {/* Blueprints Section */}
      <section id="blueprints-list" className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <ScrollReveal className="reveal-hidden">
          <div className="text-center mb-16">
            <span className="section-label justify-center">
              <Dumbbell size={16} className="text-[#C5A059]" /> BLUEPRINTS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-4 font-syne">
              Personal Training Blueprints
            </h2>
            <p className="text-white max-w-xl mx-auto text-sm md:text-base font-sans">
              Click on any fitness category card below to expand and view the full details, suitability criteria, and direct enquiry options.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {blueprints.map((item) => (
            <ScrollReveal key={item.id} className="reveal-hidden">
              <div 
                id={item.anchor.substring(1)}
                className="bg-[#0d0d0d] border border-white/5 rounded-xl overflow-hidden transition-all duration-500 hover:border-[#C5A059]/20"
              >
                <div 
                  onClick={() => setActiveBlueprint(activeBlueprint === item.id ? null : item.id)} 
                  className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer select-none"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-extrabold font-oswald text-[#C5A059] mt-1 shrink-0">
                      {String(item.id).padStart(2, '0')}.
                    </span>
                    <div>
                      <h3 className="font-oswald text-2xl font-bold uppercase text-white tracking-wide hover:text-[#C5A059] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-base sm:text-lg font-sans mt-1">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <button className="btn-outline py-2 px-4 text-xs font-bold uppercase flex items-center gap-2 shrink-0 self-end md:self-auto">
                    <span>{activeBlueprint === item.id ? "Collapse Details" : "Expand Details"}</span>
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeBlueprint === item.id ? "rotate-180" : ""}`} />
                  </button>
                </div>

                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  activeBlueprint === item.id ? "max-h-[1500px] opacity-100 py-2" : "max-h-0 opacity-0"
                }`}>
                  <div className="p-6 md:p-8 bg-[#070707] grid lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-4 h-64 lg:h-full min-h-[250px] relative overflow-hidden rounded-lg border border-white/5">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-contain bg-[#0c0c0c] p-1 scale-100 hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="lg:col-span-8 space-y-6">
                      <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed font-sans font-normal">
                        {item.desc}
                      </p>
                      
                      {item.note && (
                        <div className="bg-[#800020]/10 border border-[#800020]/30 p-4 rounded text-sm text-white italic font-sans flex items-start gap-2">
                          <CheckCircle size={16} className="text-[#C5A059] shrink-0 mt-0.5" />
                          <span>{item.note}</span>
                        </div>
                      )}

                      <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                        <div>
                          <h4 className="font-oswald text-base font-bold uppercase tracking-wider text-[#C5A059] mb-4">
                            Who This Is Suitable For
                          </h4>
                          <ul className="space-y-3 text-sm sm:text-base text-gray-200 font-sans">
                            {item.suitableFor.map((itemStr, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check size={14} className="text-[#800020] shrink-0 mt-0.5" />
                                <span>{itemStr}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-oswald text-base font-bold uppercase tracking-wider text-[#C5A059] mb-4">
                            Main Focus
                          </h4>
                          <ul className="space-y-3 text-sm sm:text-base text-gray-200 font-sans">
                            {item.mainFocus.map((itemStr, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle size={14} className="text-[#C5A059] shrink-0 mt-0.5" />
                                <span>{itemStr}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-12 bg-[#0c0c0c] border border-white/5 p-6 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-6">
                      <div>
                        <p className="text-white text-xs font-bold font-sans">
                          Start your {item.title} journey with proper guidance.
                        </p>
                      </div>
                      <a 
                        href={item.ctaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary py-3 px-6 text-xs font-bold uppercase tracking-wider whitespace-normal text-center break-words shrink-0 max-w-full"
                      >
                        {item.ctaText}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Workflow Process ── */}
      <section className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <ScrollReveal className="reveal-hidden">
          <div className="text-center mb-16">
            <span className="section-label justify-center">
              <Activity size={16} className="text-[#C5A059]" /> WORKFLOW
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-4 font-syne">How the Training Process Works</h2>
            <p className="text-[#C5A059] font-oswald text-lg uppercase tracking-wider">Starting your fitness journey should be clear, simple and properly guided.</p>
            <p className="text-white max-w-2xl mx-auto text-sm font-sans mt-4">At PersonalTrainer.sg, the process is designed to understand your goal first before recommending the right training direction.</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          <ScrollReveal className="reveal-hidden">
            <div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-lg hover:border-[#800020]/30 transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <span className="text-3xl font-extrabold font-oswald text-[#C5A059] block mb-3">01</span>
                <h3 className="font-oswald text-sm font-bold uppercase text-white mb-2 tracking-wide">Initial Enquiry</h3>
              </div>
              <p className="text-gray-400 text-[11px] leading-relaxed font-sans mt-2">Send a WhatsApp message or enquiry form with your goal, current fitness level, location and preferred training schedule.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="reveal-hidden">
            <div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-lg hover:border-[#800020]/30 transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <span className="text-3xl font-extrabold font-oswald text-[#C5A059] block mb-3">02</span>
                <h3 className="font-oswald text-sm font-bold uppercase text-white mb-2 tracking-wide">Fitness Discussion</h3>
              </div>
              <p className="text-gray-400 text-[11px] leading-relaxed font-sans mt-2">We will discuss your current condition, training background, lifestyle, schedule and main fitness objectives.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="reveal-hidden">
            <div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-lg hover:border-[#800020]/30 transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <span className="text-3xl font-extrabold font-oswald text-[#C5A059] block mb-3">03</span>
                <h3 className="font-oswald text-sm font-bold uppercase text-white mb-2 tracking-wide">Trial Session</h3>
              </div>
              <p className="text-gray-400 text-[11px] leading-relaxed font-sans mt-2">The 90-minute Trial Session helps assess your fitness level, movement, training suitability and programme direction.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="reveal-hidden">
            <div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-lg hover:border-[#800020]/30 transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <span className="text-3xl font-extrabold font-oswald text-[#C5A059] block mb-3">04</span>
                <h3 className="font-oswald text-sm font-bold uppercase text-white mb-2 tracking-wide">Programme Planning</h3>
              </div>
              <p className="text-gray-400 text-[11px] leading-relaxed font-sans mt-2">Your programme will be planned based on your goal, body condition, ability and training frequency.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="reveal-hidden">
            <div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-lg hover:border-[#800020]/30 transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <span className="text-3xl font-extrabold font-oswald text-[#C5A059] block mb-3">05</span>
                <h3 className="font-oswald text-sm font-bold uppercase text-white mb-2 tracking-wide">Structured Coaching</h3>
              </div>
              <p className="text-gray-400 text-[11px] leading-relaxed font-sans mt-2">You will start training with proper guidance, progression, accountability and clear direction.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Training Locations ── */}
      <section className="py-12 md:py-20 px-6 md:px-12 bg-[#0c0c0c] border-t border-b border-white/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal className="reveal-hidden">
            <span className="section-label justify-center">
              <MapPin size={16} className="text-[#C5A059]" /> LOCATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-6 font-syne">Training Locations in Singapore</h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-sans">
              PersonalTrainer.sg provides fitness at your doorstep across Singapore where suitable. Training can be conducted at your condo gym, suitable home space, selected ActiveSG gyms, approved private gym spaces, outdoor training areas, multi-storey car park training areas or other suitable locations. Location arrangements can be discussed during enquiry.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── View Rates & Trial Session CTA ── */}
      <section className="py-16 px-6 md:px-12 bg-[#050505] border-b border-white/5">
        <div className="max-w-5xl mx-auto bg-[#0d0d0d] border border-[#C5A059]/40 p-8 md:p-12 rounded-2xl text-center space-y-6">
          <span className="section-label justify-center">
            <Award size={16} className="text-[#C5A059]" /> RATES & TRIAL SESSION
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase font-syne">
            Personal Training Pricing & Trial Session
          </h2>
          <p className="text-white text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-sans">
            The trial session is approximately 90 minutes. It includes around 30 minutes of assessment and consultation, followed by around 60 minutes of training. The trial session is free only if the client signs up for a minimum 12-session package immediately after the trial session. If the client decides not to continue after the trial, the trial session fee is $144.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <Link href="/rates" className="btn-primary">
              <span>View Personal Training Rates</span>
            </Link>
            <a
              href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20would%20like%20to%20enquire%20about%20rates%20and%20book%20a%20Trial%20Session."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <span>WhatsApp PersonalTrainer.sg</span>
            </a>
          </div>
        </div>
      </section>
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
                <span>Book a Trial Session</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

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
            <p className="text-white text-xs leading-relaxed font-sans">
              PersonalTrainer.sg operates by appointment only. Training sessions are arranged based on trainer availability, client schedule, location suitability and confirmed booking.
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
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4 font-sans">
          <p>© 2026 PersonalTrainer.sg. All Rights Reserved. Led by Md Salaudin Adam (DONN).</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#C5A059] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#C5A059] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}


