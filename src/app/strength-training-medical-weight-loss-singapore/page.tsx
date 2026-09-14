import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import TikTokIcon from "@/components/TikTokIcon";
import {
  ShieldAlert,
  Dumbbell,
  HeartPulse,
  Activity,
  Award,
  Shield,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Flame,
  CheckCircle2,
  Calendar,
  Phone,
  Mail,
  Facebook,
  Instagram,
  UserCheck,
  Scale,
  BrainCircuit,
  Zap,
  ChevronRight,
  Calculator,
  Compass
} from "lucide-react";

// Authentic WhatsApp icon
const WhatsAppIcon = ({ className = "w-6 h-6", style }: { className?: string; style?: React.CSSProperties }) => (
  <svg width="24" height="24" className={className} style={{ width: "24px", height: "24px", minWidth: "24px", minHeight: "24px", ...style }} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.333 4.988l-1.417 5.176 5.297-1.39c1.46.797 3.107 1.217 4.773 1.218h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.038-5.177-2.925-7.064s-4.395-2.927-7.064-2.927zm5.72 14.184c-.244.688-1.427 1.314-1.966 1.396-.51.077-1.168.109-1.89-.124-.442-.143-1.011-.328-1.742-.647-3.072-1.332-5.077-4.437-5.231-4.644-.153-.207-1.252-1.666-1.252-3.18 0-1.514.789-2.259 1.069-2.564.281-.305.612-.382.816-.382.204 0 .408.003.586.012.189.01.442-.072.692.529.255.613.867 2.115.943 2.268.077.153.128.331.026.535-.102.204-.153.331-.306.51-.153.178-.321.375-.459.504-.153.144-.313.301-.135.607.178.306.792 1.307 1.7 2.116 1.168 1.042 2.153 1.365 2.46 1.518.306.153.484.128.663-.077.179-.204.765-.893.969-1.2.204-.306.408-.255.689-.153.281.102 1.785.842 2.091.995.306.153.51.229.586.357.077.127.077.739-.167 1.427z" />
  </svg>
);

export default function StrengthTrainingMedicalWeightLossPage() {
  const whatsappUrl = "https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20undergoing%20weight%20loss%20and%20would%20like%20to%20consult%20on%20Strength%20Training%20to%20maintain%20muscle%20and%20body%20shape.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://personaltrainer.sg/strength-training-medical-weight-loss-singapore#article",
        "headline": "Strength Training During Medical Weight Loss in Singapore",
        "description": "Support your weight loss journey with structured strength training, safe progression and professional coaching by PersonalTrainer.sg.",
        "url": "https://personaltrainer.sg/strength-training-medical-weight-loss-singapore",
        "datePublished": "2026-01-01T00:00:00+08:00",
        "dateModified": "2026-02-01T00:00:00+08:00",
        "author": {
          "@type": "Person",
          "name": "Md Salaudin Adam (DONN)",
          "jobTitle": "Founder and Fitness Director",
          "worksFor": {
            "@type": "Organization",
            "name": "PersonalTrainer.sg"
          }
        },
        "publisher": {
          "@type": "Organization",
          "name": "PersonalTrainer.sg",
          "logo": {
            "@type": "ImageObject",
            "url": "https://personaltrainer.sg/logopt.avif"
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://personaltrainer.sg/strength-training-medical-weight-loss-singapore#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why is strength training crucial during medical weight loss?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Medical weight loss significantly cuts caloric consumption and reduces body scale weight quickly. However, without progressive resistance stimulus, a significant proportion of that lost weight comes from skeletal muscle mass. Strength training signals the body to preserve lean muscle, maintain resting metabolism, support proper posture, and avoid a weak or flat appearance."
            }
          },
          {
            "@type": "Question",
            "name": "Does PersonalTrainer.sg provide medical weight loss prescriptions or treatment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. PersonalTrainer.sg does not provide medical advice, prescribe medication, or replace medical treatment. Clients on medical weight loss support should follow their doctor's advice. We provide exercise coaching, strength training, fitness guidance, and lifestyle support based on training suitability."
            }
          },
          {
            "@type": "Question",
            "name": "What training methodology is used for weight loss clients?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Training is guided by the DONN Elite Performance System (DEPS), which combines movement preparation, posture correction, core activation, stabilisation, strength training, metabolic conditioning, and cardiovascular development to help clients progress safely and effectively."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://personaltrainer.sg/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://personaltrainer.sg/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Strength Training During Medical Weight Loss",
            "item": "https://personaltrainer.sg/strength-training-medical-weight-loss-singapore"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen text-white selection:bg-[#800020] selection:text-white font-sans antialiased overflow-x-hidden bg-[#050505]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <Navbar activePage="services" />

      {/* Main Container */}
      <main className="pt-28 sm:pt-32 pb-20 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-gray-400 font-oswald uppercase tracking-wider">
          <Link href="/" className="hover:text-[#C5A059] transition-colors">Home</Link>
          <span className="text-gray-600">/</span>
          <Link href="/services" className="hover:text-[#C5A059] transition-colors">Services</Link>
          <span className="text-gray-600">/</span>
          <span className="text-[#C5A059]">Medical Weight Loss Strength Training</span>
        </nav>

        {/* ── HERO SECTION ── */}
        <header className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#C5A059]/40 mb-4 shadow-lg">
            <HeartPulse size={14} className="text-[#C5A059]" />
            <span className="text-[11px] sm:text-xs font-oswald uppercase tracking-widest text-[#C5A059] font-bold">
              Specialized Fitness Conditioning Singapore
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-6 mb-4">
            <div className="hidden md:flex items-center gap-2 opacity-70">
              <div className="h-[2px] w-16 lg:w-32 bg-gradient-to-r from-transparent to-[#C5A059]" />
              <div className="w-2 h-2 rotate-45 bg-[#C5A059]" />
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-oswald uppercase tracking-tight text-white drop-shadow-xl leading-tight max-w-5xl mx-auto">
              Strength Training During Medical Weight Loss in Singapore
            </h1>

            <div className="hidden md:flex items-center gap-2 opacity-70">
              <div className="w-2 h-2 rotate-45 bg-[#C5A059]" />
              <div className="h-[2px] w-16 lg:w-32 bg-gradient-to-l from-transparent to-[#C5A059]" />
            </div>
          </div>

          <p className="text-gray-200 text-base sm:text-xl lg:text-2xl font-sans max-w-3xl mx-auto leading-relaxed mb-8">
            Support your weight loss journey with structured strength training, safe progression and professional coaching by PersonalTrainer.sg.
          </p>

          {/* Value Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-2 text-left">
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-3.5 sm:p-4 flex items-center gap-3">
              <Dumbbell className="w-6 h-6 sm:w-7 sm:h-7 text-[#C5A059] shrink-0" />
              <div>
                <p className="text-xs uppercase font-oswald text-gray-400 tracking-wider">Muscle</p>
                <p className="text-xs sm:text-sm font-bold text-white font-oswald uppercase">Lean Retention</p>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-3.5 sm:p-4 flex items-center gap-3">
              <Flame className="w-6 h-6 sm:w-7 sm:h-7 text-[#C5A059] shrink-0" />
              <div>
                <p className="text-xs uppercase font-oswald text-gray-400 tracking-wider">Metabolism</p>
                <p className="text-xs sm:text-sm font-bold text-white font-oswald uppercase">BMR Protection</p>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-3.5 sm:p-4 flex items-center gap-3">
              <Scale className="w-6 h-6 sm:w-7 sm:h-7 text-[#C5A059] shrink-0" />
              <div>
                <p className="text-xs uppercase font-oswald text-gray-400 tracking-wider">Tone & Shape</p>
                <p className="text-xs sm:text-sm font-bold text-white font-oswald uppercase">Prevent Flat Look</p>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-3.5 sm:p-4 flex items-center gap-3">
              <Award className="w-6 h-6 sm:w-7 sm:h-7 text-[#C5A059] shrink-0" />
              <div>
                <p className="text-xs uppercase font-oswald text-gray-400 tracking-wider">Coach DONN</p>
                <p className="text-xs sm:text-sm font-bold text-white font-oswald uppercase">24 Yrs Experience</p>
              </div>
            </div>
          </div>
        </header>

        {/* ── SECTION 1: WHY STRENGTH TRAINING MATTERS DURING WEIGHT LOSS ── */}
        <section className="mb-16 sm:mb-20 bg-[#0d0d0d] border border-white/10 rounded-2xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#800020]" />
          
          <div className="mb-6">
            <span className="text-[#C5A059] font-oswald text-xs uppercase tracking-widest font-bold block mb-1">
              Muscle Preservation & Body Composition
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-oswald uppercase tracking-wide text-white">
              Why Strength Training Matters During Weight Loss
            </h2>
          </div>

          <div className="space-y-4 text-gray-200 text-sm sm:text-base leading-relaxed font-sans">
            <p>
              When clients embark on medical weight loss support—whether through physician-supervised clinical programs, calorie-suppressing therapies, or dietary adjustments—the primary metric observed is rapid loss on the weighing scale.
            </p>
            <p>
              However, <strong>medical weight loss may help reduce body weight, but strength training is important to help maintain muscle, improve posture, support metabolism and build a stronger body shape</strong>.
            </p>
            <p>
              Without structured resistance exercise, up to a third or more of the weight lost can come directly from skeletal muscle mass rather than body fat. This unintended lean tissue loss slows resting metabolic rate, promotes poor posture, causes joint vulnerability, and often leaves individuals looking frail or tired rather than vibrant and athletic.
            </p>
            <p>
              <strong>PersonalTrainer.sg provides structured coaching for clients who want to lose weight safely, improve muscle tone, build strength and avoid looking weak, flat or unconditioned during their weight loss journey.</strong> With tailored resistance loading, movement preparation, and progressive workouts, you sculpt a taut, resilient physique while shedding body fat.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
            <div className="p-4 rounded-xl bg-[#070707] border border-white/5">
              <p className="font-oswald uppercase text-[#C5A059] font-bold text-sm mb-1">Protect Metabolic Health</p>
              <p className="text-xs text-gray-300">
                Maintaining skeletal muscle helps keep your daily calorie expenditure elevated, preventing the metabolic slowdown common after rapid weight reduction.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#070707] border border-white/5">
              <p className="font-oswald uppercase text-[#C5A059] font-bold text-sm mb-1">Shape, Definition & Firmness</p>
              <p className="text-xs text-gray-300">
                Resistance exercise contracts muscle fibers, firming thighs, glutes, shoulders, and core so you look sculpted rather than diminished.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#070707] border border-white/5">
              <p className="font-oswald uppercase text-[#C5A059] font-bold text-sm mb-1">Postural Support & Spine Health</p>
              <p className="text-xs text-gray-300">
                Rapid weight loss alters center of gravity. Strengthening core stabilizers and upper-back musculature maintains confident, upright posture.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: IMPORTANT MEDICAL DISCLAIMER ── */}
        <section className="mb-16 sm:mb-20 bg-gradient-to-r from-[#1f0206] via-[#120204] to-[#1f0206] border-2 border-[#800020] rounded-2xl p-6 sm:p-9 shadow-2xl relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#800020] border border-[#C5A059]/40 flex items-center justify-center shrink-0 text-[#C5A059]">
              <ShieldAlert size={26} />
            </div>
            <div>
              <span className="text-xs font-oswald uppercase tracking-widest text-[#C5A059] font-bold block">
                Safety & Health Transparency
              </span>
              <h2 className="text-xl sm:text-3xl font-black font-oswald uppercase tracking-wide text-white">
                Important Medical Disclaimer
              </h2>
            </div>
          </div>

          <div className="bg-[#0a0a0a]/80 border border-white/10 rounded-xl p-5 sm:p-6 space-y-3 font-sans text-xs sm:text-sm text-gray-200 leading-relaxed">
            <p className="font-semibold text-white">
              • PersonalTrainer.sg does not provide medical advice, prescribe medication or replace medical treatment.
            </p>
            <p>
              • Clients who are on medical weight loss support should follow their doctor’s advice.
            </p>
            <p>
              • PersonalTrainer.sg provides exercise coaching, strength training, fitness guidance and lifestyle support based on the client’s training suitability.
            </p>
          </div>
        </section>

        {/* ── SECTION 3: BENEFITS OF STRENGTH TRAINING DURING MEDICAL WEIGHT LOSS ── */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <span className="text-[#C5A059] font-oswald text-xs uppercase tracking-widest font-bold block mb-1">
              Holistic Physical Adaptation
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-oswald uppercase tracking-wide text-white">
              Benefits of Strength Training During Medical Weight Loss
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto mt-2">
              Why structured resistance workouts are an indispensable companion to any medical or calorie-assisted weight reduction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Benefit 1 */}
            <div className="bg-[#090909] border border-white/10 rounded-xl p-5 hover:border-[#C5A059]/40 transition-all flex flex-col justify-between">
              <div>
                <div className="text-[#C5A059] mb-3">
                  <Dumbbell className="w-6 h-6" />
                </div>
                <h3 className="font-oswald font-bold uppercase text-white text-base mb-2">
                  Helps Maintain Lean Muscle While Losing Weight
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Direct resistance stimulus instructs your metabolism to burn stored fat reserves for fuel while protecting active skeletal muscle fibers from atrophy.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-[#090909] border border-white/10 rounded-xl p-5 hover:border-[#C5A059]/40 transition-all flex flex-col justify-between">
              <div>
                <div className="text-[#C5A059] mb-3">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="font-oswald font-bold uppercase text-white text-base mb-2">
                  Supports Better Posture and Movement Quality
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Reinforces posterior chain muscles, spinal erecters, scapular retractors, and pelvic balance so you move smoothly with natural poise.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-[#090909] border border-white/10 rounded-xl p-5 hover:border-[#C5A059]/40 transition-all flex flex-col justify-between">
              <div>
                <div className="text-[#C5A059] mb-3">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-oswald font-bold uppercase text-white text-base mb-2">
                  Improves Strength, Tone and Body Shape
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Shapes arms, shoulders, waistline, and glutes, creating visible firmness and definition as your body fat percentage drops.
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="bg-[#090909] border border-white/10 rounded-xl p-5 hover:border-[#C5A059]/40 transition-all flex flex-col justify-between">
              <div>
                <div className="text-[#C5A059] mb-3">
                  <Scale className="w-6 h-6" />
                </div>
                <h3 className="font-oswald font-bold uppercase text-white text-base mb-2">
                  Helps Reduce the Weak or Flat Look After Weight Loss
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Prevents the sunken, deflated, or “skinny-fat” aesthetic by maintaining fullness in muscle bellies beneath slimming subcutaneous tissue.
                </p>
              </div>
            </div>

            {/* Benefit 5 */}
            <div className="bg-[#090909] border border-white/10 rounded-xl p-5 hover:border-[#C5A059]/40 transition-all flex flex-col justify-between">
              <div>
                <div className="text-[#C5A059] mb-3">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="font-oswald font-bold uppercase text-white text-base mb-2">
                  Supports Long Term Weight Management
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Preserving muscle keeps baseline metabolic rate intact, significantly diminishing the likelihood of rapid rebound weight gain once clinical phases conclude.
                </p>
              </div>
            </div>

            {/* Benefit 6 */}
            <div className="bg-[#090909] border border-white/10 rounded-xl p-5 hover:border-[#C5A059]/40 transition-all flex flex-col justify-between">
              <div>
                <div className="text-[#C5A059] mb-3">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-oswald font-bold uppercase text-white text-base mb-2">
                  Builds Confidence and Functional Fitness
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Enhances everyday vigor—climbing stairs effortlessly, lifting heavy groceries, engaging in sports, and moving with physical assurance.
                </p>
              </div>
            </div>

            {/* Benefit 7 */}
            <div className="bg-[#090909] border border-white/10 rounded-xl p-5 hover:border-[#C5A059]/40 transition-all flex flex-col justify-between md:col-span-2 lg:col-span-3">
              <div className="flex items-start gap-4">
                <div className="text-[#C5A059] mt-1 shrink-0">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-oswald font-bold uppercase text-white text-base mb-1">
                    Improves Training Consistency and Physical Conditioning
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    Builds regular exercise routines that seamlessly become enduring life habits, ensuring the physical vitality achieved during weight loss stays permanent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: PERSONALTRAINER.SG TRAINING APPROACH ── */}
        <section className="mb-16 sm:mb-20 bg-[#090909] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#C5A059] font-oswald text-xs uppercase tracking-widest font-bold block mb-1">
              Methodical Coaching Framework
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-oswald uppercase tracking-wide text-white">
              PersonalTrainer.sg Training Approach
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm mt-2">
              Every training session is systematically calibrated around your current energy, comfort, and physical safety.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Step 1 */}
            <div className="bg-[#0f0f0f] border border-white/5 rounded-xl p-5">
              <span className="text-xs font-oswald font-bold text-[#C5A059] tracking-wider block mb-1">PHASE 01</span>
              <h3 className="font-oswald font-bold uppercase text-white text-sm mb-2">
                Initial Consultation & Fitness Assessment
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Comprehensive discussion exploring your target goals, body composition metrics, medical history, and daily energy rhythms.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#0f0f0f] border border-white/5 rounded-xl p-5">
              <span className="text-xs font-oswald font-bold text-[#C5A059] tracking-wider block mb-1">PHASE 02</span>
              <h3 className="font-oswald font-bold uppercase text-white text-sm mb-2">
                Body Condition & Training Suitability Review
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Screening movement range, joint mobility, past musculoskeletal pain points, and current physical stamina before commencing.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#0f0f0f] border border-white/5 rounded-xl p-5">
              <span className="text-xs font-oswald font-bold text-[#C5A059] tracking-wider block mb-1">PHASE 03</span>
              <h3 className="font-oswald font-bold uppercase text-white text-sm mb-2">
                Safe Strength Training Progression
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Gradual, controlled progressive loading that protects tendons, joints, and ligaments while challenging muscle groups effectively.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-[#0f0f0f] border border-white/5 rounded-xl p-5">
              <span className="text-xs font-oswald font-bold text-[#C5A059] tracking-wider block mb-1">PHASE 04</span>
              <h3 className="font-oswald font-bold uppercase text-white text-sm mb-2">
                Posture, Core & Movement Control
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Targeted activations of deep abdominal wall, transverse abdominis, spinal stabilizers, and glutes for superior balance and posture.
              </p>
            </div>

            {/* Step 5 */}
            <div className="bg-[#0f0f0f] border border-white/5 rounded-xl p-5">
              <span className="text-xs font-oswald font-bold text-[#C5A059] tracking-wider block mb-1">PHASE 05</span>
              <h3 className="font-oswald font-bold uppercase text-white text-sm mb-2">
                Resistance Training Based on Client Ability
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Workouts adapt strictly to your day-to-day capacity—incorporating dumbbells, resistance bands, cable work, or bodyweight exercises.
              </p>
            </div>

            {/* Step 6 */}
            <div className="bg-[#0f0f0f] border border-white/5 rounded-xl p-5">
              <span className="text-xs font-oswald font-bold text-[#C5A059] tracking-wider block mb-1">PHASE 06</span>
              <h3 className="font-oswald font-bold uppercase text-white text-sm mb-2">
                Cardiovascular Conditioning When Suitable
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Appropriately timed aerobic and low-impact cardiovascular work to improve heart-lung capacity without over-exhausting your recovery.
              </p>
            </div>

            {/* Step 7 */}
            <div className="bg-[#0f0f0f] border border-white/5 rounded-xl p-5">
              <span className="text-xs font-oswald font-bold text-[#C5A059] tracking-wider block mb-1">PHASE 07</span>
              <h3 className="font-oswald font-bold uppercase text-white text-sm mb-2">
                Lifestyle & Nutrition Awareness Guidance
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Practical advice on adequate protein intake, hydration, sleep quality, and daily step activity aligned with your personal lifestyle.
              </p>
            </div>

            {/* Step 8 */}
            <div className="bg-[#0f0f0f] border border-white/5 rounded-xl p-5">
              <span className="text-xs font-oswald font-bold text-[#C5A059] tracking-wider block mb-1">PHASE 08</span>
              <h3 className="font-oswald font-bold uppercase text-white text-sm mb-2">
                Regular Progress Tracking
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Ongoing reviews of strength milestones, posture improvements, waist-to-hip ratios, and functional endurance markers.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: GUIDED BY DONN ELITE PERFORMANCE SYSTEM (DEPS) ── */}
        <section className="mb-16 sm:mb-20 bg-gradient-to-b from-[#121212] to-[#080808] border-2 border-[#C5A059]/40 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-52 h-52 bg-[#800020] rounded-full blur-3xl opacity-20 pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-52 h-52 bg-[#C5A059] rounded-full blur-3xl opacity-15 pointer-events-none" />

          <div className="text-center max-w-3xl mx-auto mb-8 relative z-10">
            <span className="inline-block bg-[#800020] text-[#C5A059] text-[11px] font-oswald uppercase font-bold tracking-widest px-3 py-1 rounded-full mb-2">
              Signature Coaching Methodology
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-oswald uppercase tracking-wide text-white mb-2">
              Guided by DONN Elite Performance System
            </h2>
            <p className="text-[#C5A059] font-oswald uppercase tracking-wider font-bold text-sm sm:text-base mb-6">
              Also known as DEPS • Developed by Md Salaudin Adam (DONN)
            </p>

            <div className="bg-[#050505] border border-[#C5A059]/40 rounded-xl p-6 text-gray-200 text-sm sm:text-base leading-relaxed font-sans text-left space-y-4">
              <p>
                <strong>Training is guided by the DONN Elite Performance System, also known as DEPS.</strong>
              </p>
              <p>
                <strong>DEPS is a structured coaching system that combines movement preparation, posture correction, core activation, stabilisation, strength training, metabolic conditioning and cardiovascular development to help clients progress safely and effectively.</strong>
              </p>
              <p className="text-xs sm:text-sm text-gray-300">
                Rather than throwing an unconditioned body into high-impact workouts, DEPS establishes joint alignment, movement literacy, and neuromuscular activation first. This systematic progression protects you from exercise-induced injuries, joint inflammation, and fatigue while maximizing body recomposition results.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-oswald uppercase tracking-wider text-gray-300">
              <span className="px-3 py-1 rounded bg-[#161616] border border-white/10">Movement Prep</span>
              <span className="text-[#C5A059]">→</span>
              <span className="px-3 py-1 rounded bg-[#161616] border border-white/10">Posture Correction</span>
              <span className="text-[#C5A059]">→</span>
              <span className="px-3 py-1 rounded bg-[#161616] border border-white/10">Core Activation</span>
              <span className="text-[#C5A059]">→</span>
              <span className="px-3 py-1 rounded bg-[#161616] border border-white/10">Stabilisation</span>
              <span className="text-[#C5A059]">→</span>
              <span className="px-3 py-1 rounded bg-[#161616] border border-[#C5A059]/40 text-[#C5A059] font-bold">Strength Training</span>
            </div>
          </div>
        </section>

        {/* ── SECTION 6: WHO THIS IS SUITABLE FOR ── */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <span className="text-[#C5A059] font-oswald text-xs uppercase tracking-widest font-bold block mb-1">
              Suitability Criteria
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-oswald uppercase tracking-wide text-white">
              Who This Is Suitable For
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto mt-2">
              If you identify with any of the circumstances below, structured strength training will transform your physical outcome.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Persona 1 */}
            <div className="bg-[#090909] border border-white/10 rounded-xl p-5 flex items-start gap-3 hover:border-white/20 transition-all">
              <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-oswald font-bold uppercase text-white text-sm sm:text-base mb-1">
                  Clients Currently Losing Weight
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Actively on medical weight loss or clinical dietary guidance who want to ensure they drop body fat rather than metabolically active lean muscle.
                </p>
              </div>
            </div>

            {/* Persona 2 */}
            <div className="bg-[#090909] border border-white/10 rounded-xl p-5 flex items-start gap-3 hover:border-white/20 transition-all">
              <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-oswald font-bold uppercase text-white text-sm sm:text-base mb-1">
                  Clients Who Have Lost Weight But Feel Weak
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Individuals whose scales have dropped, but who experience joint ache, back tiredness, lack of physical stamina, or sluggish daily energy.
                </p>
              </div>
            </div>

            {/* Persona 3 */}
            <div className="bg-[#090909] border border-white/10 rounded-xl p-5 flex items-start gap-3 hover:border-white/20 transition-all">
              <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-oswald font-bold uppercase text-white text-sm sm:text-base mb-1">
                  Clients Who Want to Improve Body Shape and Tone
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Those looking to achieve firm contours around arms, thighs, core, and glutes, rather than settling for an unconditioned, loose silhouette.
                </p>
              </div>
            </div>

            {/* Persona 4 */}
            <div className="bg-[#090909] border border-white/10 rounded-xl p-5 flex items-start gap-3 hover:border-white/20 transition-all">
              <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-oswald font-bold uppercase text-white text-sm sm:text-base mb-1">
                  Clients Who Want to Protect Muscle During Weight Loss
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Health-conscious individuals aware that sarcopenia and muscle loss degrade bone density and long-term metabolic health.
                </p>
              </div>
            </div>

            {/* Persona 5 */}
            <div className="bg-[#090909] border border-white/10 rounded-xl p-5 flex items-start gap-3 hover:border-white/20 transition-all">
              <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-oswald font-bold uppercase text-white text-sm sm:text-base mb-1">
                  Clients Who Want Stronger Posture and Better Movement
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Men and women experiencing slouching, forward head tilt, or rounded shoulders as their body shape rapidly changes during weight reduction.
                </p>
              </div>
            </div>

            {/* Persona 6 */}
            <div className="bg-[#090909] border border-white/10 rounded-xl p-5 flex items-start gap-3 hover:border-white/20 transition-all">
              <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-oswald font-bold uppercase text-white text-sm sm:text-base mb-1">
                  Clients Who Want Long Term Fitness Habits After Weight Loss
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  People dedicated to cementing lasting physical routines, ensuring their weight loss transition permanently evolves into lifelong strength and vitality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA SECTION ── */}
        <section className="mb-16 sm:mb-20 bg-gradient-to-r from-[#190508] via-[#0d0d0d] to-[#190508] border-2 border-[#C5A059] rounded-2xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-black font-oswald uppercase tracking-wide text-white mb-3">
              Build Strength While You Lose Weight
            </h2>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-6 font-sans">
              Send a WhatsApp message to discuss your current weight loss journey, fitness condition, training goal and preferred schedule. PersonalTrainer.sg will recommend a suitable strength training arrangement.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-xl font-oswald uppercase tracking-wider font-bold text-base sm:text-lg bg-[#C5A059] text-black hover:bg-[#d4af37] transition-all duration-300 shadow-2xl hover:scale-105"
            >
              <WhatsAppIcon className="w-6 h-6 text-black shrink-0" />
              <span>WhatsApp PersonalTrainer.sg</span>
            </a>
            <p className="text-gray-400 text-xs mt-3">
              Direct consultation with Md Salaudin Adam (DONN), Founder & Fitness Director (+65 9108 1781)
            </p>
          </div>
        </section>

        {/* ── INTERNAL LINKS SECTION ── */}
        <section className="border-t border-white/10 pt-10 pb-4">
          <div className="mb-6 text-center md:text-left">
            <span className="text-xs font-oswald uppercase tracking-widest text-[#C5A059] font-bold block mb-1">
              Explore PersonalTrainer.sg
            </span>
            <h3 className="font-oswald text-xl font-bold uppercase text-white">
              Related Services & Coaching Resources
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs sm:text-sm font-oswald uppercase">
            <Link
              href="/services#weight-loss"
              className="p-3 bg-[#0a0a0a] border border-white/10 rounded-lg text-gray-300 hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-colors flex items-center justify-between"
            >
              <span>Weight Loss Training</span>
              <ArrowRight size={14} className="text-[#C5A059]" />
            </Link>

            <Link
              href="/services#strength-training"
              className="p-3 bg-[#0a0a0a] border border-white/10 rounded-lg text-gray-300 hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-colors flex items-center justify-between"
            >
              <span>Strength Training</span>
              <ArrowRight size={14} className="text-[#C5A059]" />
            </Link>

            <Link
              href="/services#personal-training"
              className="p-3 bg-[#0a0a0a] border border-white/10 rounded-lg text-gray-300 hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-colors flex items-center justify-between"
            >
              <span>Personal Training</span>
              <ArrowRight size={14} className="text-[#C5A059]" />
            </Link>

            <Link
              href="/about#system"
              className="p-3 bg-[#0a0a0a] border border-white/10 rounded-lg text-gray-300 hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-colors flex items-center justify-between"
            >
              <span>DEPS Methodology</span>
              <ArrowRight size={14} className="text-[#C5A059]" />
            </Link>

            <Link
              href="/services#fitness-calculator"
              className="p-3 bg-[#0a0a0a] border border-white/10 rounded-lg text-gray-300 hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-colors flex items-center justify-between"
            >
              <span>Fitness Calculator</span>
              <ArrowRight size={14} className="text-[#C5A059]" />
            </Link>

            <Link
              href="/rates"
              className="p-3 bg-[#0a0a0a] border border-white/10 rounded-lg text-gray-300 hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-colors flex items-center justify-between"
            >
              <span>Rates Page</span>
              <ArrowRight size={14} className="text-[#C5A059]" />
            </Link>

            <Link
              href="/personal-trainer-cost-singapore"
              className="p-3 bg-[#0a0a0a] border border-white/10 rounded-lg text-gray-300 hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-colors flex items-center justify-between"
            >
              <span>Personal Trainer Cost 2026</span>
              <ArrowRight size={14} className="text-[#C5A059]" />
            </Link>

            <Link
              href="/about#faq"
              className="p-3 bg-[#0a0a0a] border border-white/10 rounded-lg text-gray-300 hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-colors flex items-center justify-between"
            >
              <span>FAQ Section</span>
              <ArrowRight size={14} className="text-[#C5A059]" />
            </Link>

            <Link
              href="/contact"
              className="p-3 bg-[#0a0a0a] border border-white/10 rounded-lg text-gray-300 hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-colors flex items-center justify-between col-span-2 sm:col-span-1"
            >
              <span>Contact Page</span>
              <ArrowRight size={14} className="text-[#C5A059]" />
            </Link>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer id="contact" className="bg-[#030303] py-14 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-white/5 pb-10 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/logopt.avif"
                  alt="PersonalTrainer.sg Logo"
                  className="h-10 w-auto"
                />
                <div className="flex flex-col text-left">
                  <span className="text-white uppercase font-oswald font-extrabold text-base">PERSONALTRAINER.SG</span>
                  <span className="uppercase font-oswald text-[10px] text-[#C5A059]">Trusted in Singapore Since 2002</span>
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed mb-3">
                Led by Md Salaudin Adam (DONN)
              </p>
              <ul className="text-gray-400 text-[11px] space-y-1 mb-4 font-sans">
                <li>• Founder and Fitness Director</li>
                <li>• Transformation Specialist</li>
                <li>• Trusted in Singapore Since 2002</li>
                <li>• 24 Years of Coaching Experience</li>
              </ul>
              <div className="flex gap-2">
                <a href="https://www.facebook.com/personaltrainer.sg/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 text-black flex items-center justify-center hover:bg-white transition-colors duration-300 rounded bg-[#C5A059]">
                  <Facebook size={14} />
                </a>
                <a href="https://www.instagram.com/personaltrainer.sg/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 text-black flex items-center justify-center hover:bg-white transition-colors duration-300 rounded bg-[#C5A059]">
                  <Instagram size={14} />
                </a>
                <a href="https://www.tiktok.com/@personaltrainer.sg" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-8 h-8 text-black flex items-center justify-center hover:bg-white transition-colors duration-300 rounded bg-[#C5A059]">
                  <TikTokIcon size={14} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-oswald text-base font-bold text-white mb-4 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2 text-xs text-gray-300 font-oswald">
                {[
                  { name: "Home", url: "/" },
                  { name: "About Us", url: "/about" },
                  { name: "Services", url: "/services" },
                  { name: "Rates", url: "/rates" },
                  { name: "Results", url: "/results" },
                  { name: "Contact Us", url: "/contact" }
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.url} className="hover:text-[#C5A059] transition-colors duration-300 uppercase tracking-widest text-[11px]">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-oswald text-base font-bold text-white mb-4 uppercase tracking-wider">Open Hours</h4>
              <p className="text-gray-400 text-xs tracking-wide font-oswald uppercase leading-relaxed">
                PersonalTrainer.sg operates by appointment only. Training sessions are arranged based on trainer availability, client schedule, location suitability and confirmed booking.
              </p>
            </div>

            <div>
              <h4 className="font-oswald text-base font-bold text-white mb-4 uppercase tracking-wider">Contact Info</h4>
              <ul className="space-y-2.5 text-xs text-gray-300 font-sans">
                <li className="flex items-center gap-2">
                  <Phone size={14} className="shrink-0 text-[#C5A059]" />
                  <a href="https://wa.me/6591081781" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">
                    +65 9108 1781
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={14} className="shrink-0 text-[#C5A059]" />
                  <a href="mailto:donn@personaltrainer.sg" className="hover:text-[#C5A059] transition-colors">
                    donn@personaltrainer.sg
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center text-gray-500 text-[11px] font-sans">
            <p>© {new Date().getFullYear()} PersonalTrainer.sg. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
