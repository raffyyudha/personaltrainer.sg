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

const blueprints = [
  {
    id: 1,
    anchor: "#personal-training",
    title: "Personal Training",
    subtitle: "One to one coaching for structure, accountability and results.",
    desc: "Personal Training is suitable for clients who want proper guidance, professional coaching and a clear training plan. Whether you are a beginner, returning to fitness after a long break, or already training but not seeing the results you want, Personal Training helps you train with better structure, better technique and better focus. Every session is planned according to your fitness level, body condition, goal and lifestyle. You will be guided on proper exercise technique, safe movement, training intensity, progression and consistency.",
    img: "https://ext.same-assets.com/3485311241/2419563727.jpeg",
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
    img: "https://ext.same-assets.com/3485311241/2060538637.jpeg",
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
    img: "https://ext.same-assets.com/3485311241/2886895772.jpeg",
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
    img: "https://ext.same-assets.com/3485311241/979645386.jpeg",
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
    img: "https://ext.same-assets.com/3485311241/1906150620.jpeg",
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
    img: "/donn-coaching-elliptical.avif",
    suitableFor: [
      "Busy professionals who want to save travel time",
      "Clients who prefer private, one-on-one training",
      "Condo residents with gym access",
      "Homeowners with space for functional training",
      "Beginners who feel self-conscious in public gyms",
      "Clients who want a customized home workouts plan"
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
    img: "/donn-coaching-barbell.avif",
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
    img: "https://ext.same-assets.com/3485311241/3174217156.jpeg",
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
    img: "https://ext.same-assets.com/3485311241/2657269775.jpeg",
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
                  item.name === "Services" ? "text-[#C5A059]" : "text-white"
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-[2px] bg-[#C5A059] transition-all duration-300 group-hover:w-full ${
                  item.name === "Services" ? "w-full bg-[#C5A059]" : ""
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
                      item.name === "Services" ? "text-[#C5A059]" : "text-white"
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


<section className="relative py-24 bg-[#0d0d0d] border-b border-white/5 flex flex-col items-center justify-center text-center overflow-hidden"><div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35 pointer-events-none"></div><div className="absolute left-[-10%] top-[10%] w-[350px] h-[350px] bg-[#800020] rounded-full blur-[150px] opacity-10 pointer-events-none"></div><div className="relative z-10 max-w-5xl mx-auto px-6"><ScrollReveal className="reveal-hidden"><h1 className="text-3xl md:text-6xl font-black font-syne uppercase tracking-tight mb-4 leading-tight">Structured Personal Training <br/><span className="text-[#800020]">for Real Results</span></h1><div className="text-gray-350 text-sm md:text-base max-w-3xl mx-auto mb-8 leading-relaxed font-sans font-normal text-center space-y-3"><p>Professional Personal Training in Singapore for Weight Loss Training, Strength Training, Senior Fitness Training, Couple Training, Kickboxing Fitness, Corporate Wellness and Lifestyle Transformation.</p><p className="text-xs text-white border-l border-r border-[#C5A059] px-4 inline-block">Led by Md Salaudin Adam (DONN), Founder and Fitness Director of PersonalTrainer.sg, Trusted in Singapore Since 2002 with 24 Years of Coaching Experience.</p></div><div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-4xl mx-auto mb-10 text-left"><div className="bg-white/5 border border-white/10 p-3 rounded flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-[10px] sm:text-xs text-white font-bold uppercase tracking-wider font-oswald">Founder and Fitness Director of PersonalTrainer.sg</span></div><div className="bg-white/5 border border-white/10 p-3 rounded flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-[10px] sm:text-xs text-white font-bold uppercase tracking-wider font-oswald">Trusted in Singapore Since 2002</span></div><div className="bg-white/5 border border-white/10 p-3 rounded flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-[10px] sm:text-xs text-white font-bold uppercase tracking-wider font-oswald">24 Years of Coaching Experience</span></div><div className="bg-white/5 border border-white/10 p-3 rounded flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-[10px] sm:text-xs text-white font-bold uppercase tracking-wider font-oswald">Transformation Specialist</span></div><div className="bg-white/5 border border-white/10 p-3 rounded flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-[10px] sm:text-xs text-white font-bold uppercase tracking-wider font-oswald">NASM Certified Personal Trainer</span></div><div className="bg-white/5 border border-white/10 p-3 rounded flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-[10px] sm:text-xs text-white font-bold uppercase tracking-wider font-oswald">TRX Certified Personal Trainer</span></div><div className="bg-white/5 border border-white/10 p-3 rounded flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-[10px] sm:text-xs text-white font-bold uppercase tracking-wider font-oswald">SOE Certified Personal Trainer</span></div><div className="bg-white/5 border border-white/10 p-3 rounded flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-[10px] sm:text-xs text-white font-bold uppercase tracking-wider font-oswald">FMT Fit Muay Trainer</span></div><div className="bg-white/5 border border-white/10 p-3 rounded flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big text-[#C5A059] shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-[10px] sm:text-xs text-white font-bold uppercase tracking-wider font-oswald">CPR and AED Certified</span></div></div><div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto mb-8"><a href="https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Personal%20Training.%20My%20goal%20is%20to%20improve%20my%20fitness%20and%20I%20would%20like%20to%20know%20more%20about%20the%20training%20options%2C%20availability%20and%20Trial%20Session." target="_blank" rel="noopener noreferrer" className="btn-primary group text-center"><span>WhatsApp PersonalTrainer.sg</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a><a className="btn-outline group text-center" href="/contact#enquiry"><span>Enquire About Training</span></a></div><p className="text-sm uppercase tracking-[0.2em] text-gray-500 font-bold"><a className="hover:text-[#C5A059] transition-colors" href="/">Home</a><span className="mx-3 text-white/20">/</span><span className="text-[#C5A059]">Services</span></p></ScrollReveal></div></section><div className="w-full bg-[#800020] py-6 overflow-hidden border-t border-b border-[#C5A059]/20 whitespace-nowrap flex select-none relative z-20"><div className="animate-marquee flex gap-12 text-3xl md:text-5xl font-black font-syne uppercase tracking-wider text-white"><span>STRENGTH &amp; CONDITIONING</span><span className="text-[#C5A059]">•</span><span className="text-stroke">ATHLETIC PERFORMANCE</span><span className="text-[#C5A059]">•</span><span>HYPERTROPHY FOCUS</span><span className="text-[#C5A059]">•</span><span className="text-stroke">FUNCTIONAL POWER</span><span className="text-[#C5A059]">•</span><span>STRENGTH &amp; CONDITIONING</span><span className="text-[#C5A059]">•</span><span className="text-stroke">ATHLETIC PERFORMANCE</span><span className="text-[#C5A059]">•</span><span>HYPERTROPHY FOCUS</span><span className="text-[#C5A059]">•</span><span className="text-stroke">FUNCTIONAL POWER</span></div></div><section className="bg-[#050505] py-12 md:py-20 px-6 md:px-12 relative overflow-hidden"><div className="max-w-4xl mx-auto text-center"><ScrollReveal className="reveal-hidden"><span className="section-label justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity text-[#C5A059]"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> PHILOSOPHY</span><h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-6 font-syne">Training Programmes Designed Around You</h2><div className="text-white text-sm md:text-base leading-relaxed space-y-4 max-w-3xl mx-auto font-sans"><p>At PersonalTrainer.sg, every training programme is built around your body, your goal, your fitness level and your lifestyle. There is no single programme that works for everyone.</p><p>Some clients want Weight Loss Training. Some clients want Strength Training. Some clients want Body Toning. Some clients want Senior Fitness Training. Some clients want to train together through Couple Training. Some clients want Kickboxing Fitness for stamina, confidence and fat burning. Others need proper structure, discipline and accountability to stay consistent.</p><p className="text-[#C5A059] font-oswald text-lg uppercase tracking-wider">That is why every programme is planned with purpose, adjusted according to ability and guided with proper coaching.</p><p>With Md Salaudin Adam (DONN), you are not just following exercises. You are being coached through a structured fitness system designed to help you train safely, improve progressively and work towards real results.</p></div></ScrollReveal></div></section>
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
                      <p className="text-white text-sm font-sans mt-1">
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
                        className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="lg:col-span-8 space-y-6">
                      <p className="text-white text-sm leading-relaxed font-sans">
                        {item.desc}
                      </p>
                      
                      {item.note && (
                        <div className="bg-[#800020]/10 border border-[#800020]/30 p-4 rounded text-xs text-white italic font-sans flex items-start gap-2">
                          <CheckCircle size={14} className="text-[#C5A059] shrink-0 mt-0.5" />
                          <span>{item.note}</span>
                        </div>
                      )}

                      <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                        <div>
                          <h4 className="font-oswald text-sm font-bold uppercase tracking-wider text-[#C5A059] mb-4">
                            Who This Is Suitable For
                          </h4>
                          <ul className="space-y-3 text-xs text-white font-sans">
                            {item.suitableFor.map((itemStr, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check size={12} className="text-[#800020] shrink-0 mt-0.5" />
                                <span>{itemStr}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-oswald text-sm font-bold uppercase tracking-wider text-[#C5A059] mb-4">
                            Main Focus
                          </h4>
                          <ul className="space-y-3 text-xs text-white font-sans">
                            {item.mainFocus.map((itemStr, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle size={12} className="text-[#C5A059] shrink-0 mt-0.5" />
                                <span>{itemStr}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-12 bg-[#0c0c0c] border border-white/5 p-6 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-6">
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold font-sans">
                          Training CTA
                        </p>
                        <p className="text-white text-xs font-bold font-sans mt-1">
                          Start your {item.title} journey with proper guidance.
                        </p>
                      </div>
                      <a 
                        href={item.ctaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary py-3 px-6 text-xs font-bold uppercase tracking-wider whitespace-nowrap self-end md:self-auto"
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
<section className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5"><ScrollReveal className="reveal-hidden"><div className="text-center mb-16"><span className="section-label justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity text-[#C5A059]"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> WORKFLOW</span><h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-4 font-syne">How the Training Process Works</h2><p className="text-[#C5A059] font-oswald text-lg uppercase tracking-wider">Starting your fitness journey should be clear, simple and properly guided.</p><p className="text-white max-w-2xl mx-auto text-sm font-sans mt-4">At PersonalTrainer.sg, the process is designed to understand your goal first before recommending the right training direction.</p></div></ScrollReveal><div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6"><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-lg hover:border-[#800020]/30 transition-all duration-300 h-full flex flex-col justify-between"><div><span className="text-3xl font-extrabold font-oswald text-[#C5A059] block mb-3">01</span><h3 className="font-oswald text-sm font-bold uppercase text-white mb-2 tracking-wide">Initial Enquiry</h3></div><p className="text-gray-450 text-[11px] leading-relaxed font-sans mt-2">Send a WhatsApp message or enquiry form with your goal, current fitness level, location and preferred training schedule.</p></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-lg hover:border-[#800020]/30 transition-all duration-300 h-full flex flex-col justify-between"><div><span className="text-3xl font-extrabold font-oswald text-[#C5A059] block mb-3">02</span><h3 className="font-oswald text-sm font-bold uppercase text-white mb-2 tracking-wide">Fitness Discussion</h3></div><p className="text-gray-450 text-[11px] leading-relaxed font-sans mt-2">We will discuss your current condition, training background, lifestyle, schedule and main fitness objectives.</p></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-lg hover:border-[#800020]/30 transition-all duration-300 h-full flex flex-col justify-between"><div><span className="text-3xl font-extrabold font-oswald text-[#C5A059] block mb-3">03</span><h3 className="font-oswald text-sm font-bold uppercase text-white mb-2 tracking-wide">Trial Session</h3></div><p className="text-gray-450 text-[11px] leading-relaxed font-sans mt-2">The Trial Session helps assess your fitness level, movement, training suitability and programme direction.</p></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-lg hover:border-[#800020]/30 transition-all duration-300 h-full flex flex-col justify-between"><div><span className="text-3xl font-extrabold font-oswald text-[#C5A059] block mb-3">04</span><h3 className="font-oswald text-sm font-bold uppercase text-white mb-2 tracking-wide">Programme Planning</h3></div><p className="text-gray-450 text-[11px] leading-relaxed font-sans mt-2">Your programme will be planned based on your goal, body condition, ability and training frequency.</p></div></ScrollReveal><ScrollReveal className="reveal-hidden"><div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-lg hover:border-[#800020]/30 transition-all duration-300 h-full flex flex-col justify-between"><div><span className="text-3xl font-extrabold font-oswald text-[#C5A059] block mb-3">05</span><h3 className="font-oswald text-sm font-bold uppercase text-white mb-2 tracking-wide">Structured Coaching</h3></div><p className="text-gray-450 text-[11px] leading-relaxed font-sans mt-2">You will start training with proper guidance, progression, accountability and clear direction.</p></div></ScrollReveal></div></section><section className="py-12 md:py-20 px-6 md:px-12 bg-[#0c0c0c] border-t border-b border-white/5 relative overflow-hidden"><div className="max-w-4xl mx-auto text-center relative z-10"><ScrollReveal className="reveal-hidden"><span className="section-label justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-[#C5A059]"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> LOCATIONS</span><h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-6 font-syne">Training Locations in Singapore</h2><p className="text-gray-455 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-sans">Training can be arranged at suitable locations in Singapore depending on availability, suitability and your programme needs. Possible training locations include condo gyms, selected ActiveSG gyms, suitable private gym spaces, suitable outdoor or functional training areas and other approved training environments. Location arrangements can be discussed during enquiry.</p></ScrollReveal></div><div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div></section><section className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto"><div className="grid md:grid-cols-2 gap-12 items-center"><ScrollReveal className="reveal-left-hidden"><span className="section-label"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart text-[#C5A059]"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg> CHOOSING</span><h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-6 font-syne">Not Sure Which Programme <br/><span className="text-[#800020]">Is Right for You?</span></h2></ScrollReveal><ScrollReveal className="reveal-right-hidden"><div className="text-white text-sm leading-relaxed space-y-4 font-sans border-l-2 border-[#800020] pl-6"><p>You do not need to know exactly which service to choose before contacting PersonalTrainer.sg.</p><p>Many clients start with a general goal such as losing weight, getting stronger, improving fitness, reducing body fat or becoming more confident.</p><p>From there, the right training direction can be recommended based on your current fitness level, lifestyle, schedule and body condition.</p><p className="text-white font-bold">The most important step is to start with a proper discussion.</p></div></ScrollReveal></div></section><section className="bg-[#050505] py-12 md:py-20 px-6 md:px-12 relative overflow-hidden border-t border-white/5"><div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center"><div className="lg:col-span-5"><ScrollReveal className="reveal-left-hidden"><span className="section-label"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square text-[#C5A059]"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> TESTIMONIAL</span><h2 className="text-4xl md:text-5xl font-black uppercase font-syne mb-6 leading-tight">Trusted by Our <br/><span className="text-[#800020]">Community</span></h2><p className="text-white text-base leading-relaxed mb-8 font-sans">Discover the actual training experiences shared by our community members who committed to the FitCore routine.</p><div className="flex gap-4"><button onClick={prevTestimonial} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#800020] hover:border-[#800020] hover:text-white transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"></path></svg></button><button onClick={nextTestimonial} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#800020] hover:border-[#800020] hover:text-white transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"></path></svg></button></div></ScrollReveal></div><div className="lg:col-span-7"><ScrollReveal className="reveal-right-hidden"><div className="relative bg-[#0d0d0d] border border-white/5 p-6 sm:p-8 md:p-12 rounded-lg"><div className="absolute right-8 top-8 text-white/5 pointer-events-none"><span className="text-8xl font-serif text-[#C5A059]/20">"</span></div><div className="min-h-[160px] flex flex-col justify-between">
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


