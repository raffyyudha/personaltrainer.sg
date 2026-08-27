export interface PseoService {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  heroTagline: string;
  fullDesc: string;
  image: string;
  secondaryImages: string[];
  suitableFor: string[];
  keyBenefits: string[];
  sampleExercises: string[];
  faqs: { question: string; answer: string }[];
  whatsappText: string;
}

export const PSEO_SERVICES: Record<string, PseoService> = {
  "personal-training": {
    id: "pt-1on1",
    slug: "personal-training",
    name: "1-on-1 Personal Training",
    shortDesc: "Customized 1-on-1 fitness coaching tailored to your body type, fitness level, and personal goals.",
    heroTagline: "Achieve Peak Fitness with Dedicated 1-on-1 Personal Coaching in Singapore",
    fullDesc: "Our 1-on-1 Personal Training program is engineered for individuals who demand structure, elite exercise instruction, and real accountability. Led by master trainer Md Salaudin Adam (DONN) with 24 years of experience in Singapore, every program begins with a complete biomechanical and lifestyle assessment to map out your exact path to success.",
    image: "/onepersonaltraining.avif",
    secondaryImages: ["/donn-coaching-barbell.avif", "/donn-coaching-elliptical.avif", "/donn-flexing.avif"],
    suitableFor: [
      "Beginners needing safe form guidance",
      "Busy professionals seeking time-efficient workouts",
      "Clients breaking through weight loss plateaus",
      "Anyone wanting 100% individual attention"
    ],
    keyBenefits: [
      "Custom periodized workout programming",
      "Biomechanical movement optimization",
      "Nutritional guidance & caloric tracking support",
      "Flexible coaching at your home, condo, or partner gym"
    ],
    sampleExercises: [
      "Barbell Squats & Romanian Deadlifts",
      "Dumbbell Chest Press & Incline Rows",
      "Core Stabilization & Cable Pulldowns",
      "Metabolic Conditioning Circuits"
    ],
    faqs: [
      {
        question: "How quickly can I expect to see results with 1-on-1 Personal Training?",
        answer: "Most clients notice improved strength, energy, and postural changes within 3 to 4 weeks, with visible body composition changes in 8 to 12 weeks of consistent sessions."
      },
      {
        question: "Do I need prior gym experience before starting?",
        answer: "No prior experience is necessary. All sessions are adapted strictly to your starting baseline level."
      }
    ],
    whatsappText: "Hi PersonalTrainer.sg, I am interested in 1-on-1 Personal Training."
  },
  "weight-loss": {
    id: "pt-weightloss",
    slug: "weight-loss",
    name: "Weight Loss & Fat Loss Training",
    shortDesc: "Science-backed fat reduction programs combining strength training, metabolic conditioning, and sustainable nutrition guidance.",
    heroTagline: "Burn Body Fat & Transform Your Physique Safely with Singapore's Leading Fitness Experts",
    fullDesc: "Shed stubborn visceral fat and build lean muscle tone without extreme starvation diets. Our Weight Loss program utilizes high-metabolic training, progressive resistance workouts, and daily accountability to transform your body composition sustainably.",
    image: "/weightlosstraining.avif",
    secondaryImages: ["/donn-coaching-elliptical.avif", "/testimonial1.avif", "/testimonial2.avif"],
    suitableFor: [
      "Individuals struggling with visceral fat around abdomen",
      "Clients looking to drop 5kg to 20kg+ healthily",
      "Working adults with sedentary desk jobs",
      "Post-pregnancy fat loss goals"
    ],
    keyBenefits: [
      "Maximum calorie burn during and after workouts (EPOC effect)",
      "Preservation of lean muscle tissue while losing fat",
      "Customized calorie and macronutrient targets",
      "Long-term habit transformation for lasting weight maintenance"
    ],
    sampleExercises: [
      "Kettlebell Swings & Thrusters",
      "Sled Pushes & Battle Rope Intervals",
      "Compound Resistance Supersets",
      "Bodyweight Plyometric Circuits"
    ],
    faqs: [
      {
        question: "Is cardio or weight lifting better for weight loss?",
        answer: "We combine structured resistance training with targeted metabolic conditioning. Strength training builds muscle which boosts your basal metabolic rate, allowing you to burn more calories even at rest."
      },
      {
        question: "Do you provide meal plans?",
        answer: "We provide practical, realistic nutritional coaching based on Singaporean food choices, hawker options, and dining habits so you don't have to eat plain chicken breast every day."
      }
    ],
    whatsappText: "Hi PersonalTrainer.sg, I am interested in Weight Loss & Fat Loss Training."
  },
  "strength-training": {
    id: "pt-strength",
    slug: "strength-training",
    name: "Strength & Muscle Building",
    shortDesc: "Hypertrophy and functional strength programs designed to sculpt muscle, enhance metabolic health, and increase physical resilience.",
    heroTagline: "Build Real Muscle & Superior Strength Under Expert Supervision",
    fullDesc: "Whether your goal is hyper-sculpted lean muscle mass, raw strength, or functional power for daily life, our Strength Training program provides technical precision, progressive overload tracking, and safe movement execution.",
    image: "/donn-coaching-barbell.avif",
    secondaryImages: ["/donn-coaching-latpulldown.avif", "/donn-flexing.avif", "/testimonial3.avif"],
    suitableFor: [
      "Slim individuals aiming to add lean muscle mass (hypertrophy)",
      "Intermediate gym-goers wanting to fix form flaws",
      "Athletes seeking power development",
      "Men & women looking to harden physique and improve bone density"
    ],
    keyBenefits: [
      "Mastery of major compound lifts (Squat, Bench, Deadlift, Overhead Press)",
      "Progressive overload logging for measurable strength gains",
      "Joint integrity and connective tissue reinforcement",
      "Increased bone mineral density and athletic endurance"
    ],
    sampleExercises: [
      "Barbell Deadlifts & Trap Bar Carries",
      "Weighted Dips & Pull-Ups",
      "Bulgarian Split Squats & Leg Presses",
      "Heavy Cable Lat Pulldowns"
    ],
    faqs: [
      {
        question: "Will strength training make women bulky?",
        answer: "No. Women do not have the hormonal profile (testosterone levels) to get bulky naturally. Instead, strength training tones muscle, tightens curves, and burns body fat efficiently."
      }
    ],
    whatsappText: "Hi PersonalTrainer.sg, I am interested in Strength & Muscle Building Training."
  },
  "senior-fitness": {
    id: "pt-senior",
    slug: "senior-fitness",
    name: "Senior Fitness & Active Aging",
    shortDesc: "Gentle, low-impact exercise programs tailored for adults 50+, 60+, and 70+ to boost mobility, joint stability, and vitality.",
    heroTagline: "Maintain Independence, Vitality & Joint Health with Specialized Senior Fitness Coaching",
    fullDesc: "Fitness has no age limit. Our Senior Fitness program focuses on balance restoration, joint flexibility, osteoporosis prevention, and functional strength so mature adults in Singapore can move freely without pain and live life to the fullest.",
    image: "/senior-fitness.avif",
    secondaryImages: ["/donn-facility.avif", "/testimonial4.avif", "/aboutus.avif"],
    suitableFor: [
      "Seniors aged 50, 60, 70 and above",
      "Individuals suffering from knee, hip, or lower back stiffness",
      "Older adults wanting to prevent falls and improve balance",
      "Retirees seeking active lifestyle & muscle retention"
    ],
    keyBenefits: [
      "Enhanced balance, coordination, and fall prevention",
      "Reduced joint pain from arthritis or cartilage wear",
      "Improved cardiovascular stamina and energy levels",
      "Safely monitored by experienced certified trainers"
    ],
    sampleExercises: [
      "Supported Sit-to-Stand Chair Squats",
      "Balance Beam & Tandem Stance Drills",
      "Resistance Band Lat Rows & Bicep Curl",
      "Gentle Core Stabilizing Exercises"
    ],
    faqs: [
      {
        question: "Is personal training safe for seniors with medical conditions like hypertension or osteoarthritis?",
        answer: "Yes, our trainers conduct health screenings and adapt exercises specifically around medical clearance, ensuring zero high-impact stress on vulnerable joints."
      }
    ],
    whatsappText: "Hi PersonalTrainer.sg, I am interested in Senior Fitness & Active Aging Training."
  },
  "couple-training": {
    id: "pt-couple",
    slug: "couple-training",
    name: "Couple & Partner Personal Training",
    shortDesc: "Train together with a spouse, partner, or friend for shared accountability, fun, and mutual motivation.",
    heroTagline: "Achieve Fitness Goals Together with Personalized Partner Workouts",
    fullDesc: "Couple Training is designed for two people—partners, spouses, siblings, or best friends—who want to get fit together. Workouts are customized so that both individuals get an optimal workout suited to their respective fitness levels while enjoying the camaraderie and motivation of training as a team.",
    image: "/coupletraining.avif",
    secondaryImages: ["/heroimage.avif", "/testimonial5.avif", "/trainwith.avif"],
    suitableFor: [
      "Couples wanting to build healthy lifestyle habits together",
      "Friends who want to share coaching costs and stay accountable",
      "Pairs preparing for weddings, vacations, or milestones"
    ],
    keyBenefits: [
      "Cost-effective personal training shared between two people",
      "High motivation & friendly competitive dynamic",
      "Individualized exercise modifications during joint sessions",
      "Flexible schedule coordination for busy couples"
    ],
    sampleExercises: [
      "Partner Resistance Band Press & Row",
      "Synchronized Bodyweight Circuits",
      "Shared Medicine Ball Conditioning",
      "Mutual Mobility & Stretching Routines"
    ],
    faqs: [
      {
        question: "What if my partner and I have completely different fitness levels?",
        answer: "Our coach adjusts the weights, reps, and exercise variations independently for each of you during the same session so both receive an ideal challenge."
      }
    ],
    whatsappText: "Hi PersonalTrainer.sg, I am interested in Couple & Partner Personal Training."
  },
  "kickboxing": {
    id: "pt-kickboxing",
    slug: "kickboxing",
    name: "Kickboxing & Boxing Fitness",
    shortDesc: "High-energy pad work, boxing combinations, and martial-arts inspired conditioning for stress relief and rapid fat loss.",
    heroTagline: "Unleash Energy, Burn Maximum Calories & Master Boxing Technique",
    fullDesc: "Kickboxing Fitness delivers an exhilarating combination of authentic boxing pad work, kick combinations, agility drills, and core conditioning. Perfect for relieving work stress while getting an intensive cardiovascular and full-body workout.",
    image: "/donn-kickboxing.avif",
    secondaryImages: ["/onepersonaltraining.avif", "/donn-flexing.avif", "/testimonial6.avif"],
    suitableFor: [
      "Executives needing high-intensity stress relief",
      "Anyone tired of monotonous treadmill cardio",
      "Clients wanting to build reflex speed, core power, and body agility",
      "All fitness levels (no spar contact, 100% safe pad work)"
    ],
    keyBenefits: [
      "Massive calorie expenditure (600–900 kcal per hour)",
      "Instant mental stress reduction through focus mitt strikes",
      "Full-body engagement (shoulders, core, hips, legs)",
      "Fun, dynamic, and fast-paced training sessions"
    ],
    sampleExercises: [
      "Focus Mitt Boxing Combinations (Jab-Cross-Hook-Upper)",
      "Muay Thai Kick Pad Drills & Knee Strikes",
      "Agility Ladder & Jump Rope Footwork",
      "Core Rotational Punch Conditioning"
    ],
    faqs: [
      {
        question: "Do I need to buy my own boxing gloves or gear?",
        answer: "We provide clean, sanitized pads and gear for trial sessions. You can bring your own gloves or purchase through us if you prefer."
      }
    ],
    whatsappText: "Hi PersonalTrainer.sg, I am interested in Kickboxing & Boxing Fitness."
  },
  "home-condo-training": {
    id: "pt-home-condo",
    slug: "home-condo-training",
    name: "Home & Condo Gym Personal Training",
    shortDesc: "Private personal trainer comes directly to your condo gym or home residence anywhere in Singapore with portable equipment.",
    heroTagline: "Elite Personal Training Brought Right to Your Doorstep or Condo Gym in Singapore",
    fullDesc: "Save commuting time and eliminate gym crowds. Our mobile personal training service brings certified personal trainers straight to your condominium gym, private home residence, or outdoor estate facilities across Singapore equipped with resistance bands, dumbbells, and specialized training gear.",
    image: "/donn-facility.avif",
    secondaryImages: ["/heroimage.avif", "/aboutus.avif", "/donn-coaching-elliptical.avif"],
    suitableFor: [
      "Condo residents with unused or underutilized condo gyms",
      "Busy mothers and parents who need to stay home with family",
      "High-net-worth executives desiring complete privacy",
      "Anyone seeking zero-travel fitness convenience"
    ],
    keyBenefits: [
      "Zero travel time—train in the comfort of your own home/condo",
      "Trainer optimizes your specific condo gym equipment layout",
      "100% private and confidential coaching environment",
      "Custom workout schedules fitted seamlessly around your morning/evening routine"
    ],
    sampleExercises: [
      "Condo Cable Machine & Dumbbell Workouts",
      "TRX Suspension & Bodyweight Progressions",
      "Resistance Band Hypertrophy Circuits",
      "Private Poolside Core & Conditioning"
    ],
    faqs: [
      {
        question: "What if my condo gym has limited equipment or small space?",
        answer: "Our trainers bring portable specialized gear (TRX, bands, kettlebells, mats) and are experts at designing full-body workouts regardless of gym size."
      }
    ],
    whatsappText: "Hi PersonalTrainer.sg, I am interested in Home & Condo Gym Personal Training."
  },
  "posture-rehab": {
    id: "pt-posture-rehab",
    slug: "posture-rehab",
    name: "Posture Correction & Rehab Fitness",
    shortDesc: "Correct rounded shoulders, anterior pelvic tilt, and chronic back/neck pain through targeted biomechanical corrective exercises.",
    heroTagline: "Eliminate Pain, Fix Postural Misalignments & Move Freedom in Singapore",
    fullDesc: "Hours of computer work and smartphone usage create severe postural distortions such as text-neck, rounded shoulders, and lower back pain. Our Posture Correction program restores muscle balance, releases tight fascia, and strengthens weak stabilizer muscles.",
    image: "/donn-coaching-latpulldown.avif",
    secondaryImages: ["/senior-fitness.avif", "/aboutus.avif", "/testimonial1.avif"],
    suitableFor: [
      "Office workers sitting 8+ hours a day",
      "Individuals experiencing lower back, neck, or shoulder discomfort",
      "Post-injury clients cleared by doctors for physical rehab",
      "Anyone wanting to stand taller and move gracefully"
    ],
    keyBenefits: [
      "Relief from chronic neck stiffness and lower back ache",
      "Correction of upper cross syndrome and anterior pelvic tilt",
      "Rebalancing of asymmetric muscle groups",
      "Improved spinal alignment and breathing capacity"
    ],
    sampleExercises: [
      "Face Pulls & Scapular Retractions",
      "Glute Activation & Hip Flexor Deactivation",
      "Thoracic Spine Mobility Rotations",
      "Core Anti-Extension & Deadbug Drills"
    ],
    faqs: [
      {
        question: "Can posture correction help with back pain?",
        answer: "Yes! Most non-structural back pain is caused by muscle imbalances and weak core stabilizers. Corrective strength exercises re-align your spine and eliminate strain."
      }
    ],
    whatsappText: "Hi PersonalTrainer.sg, I am interested in Posture Correction & Rehab Fitness."
  },
  "prenatal-postnatal": {
    id: "pt-prenatal-postnatal",
    slug: "prenatal-postnatal",
    name: "Pre & Post Natal Fitness Coaching",
    shortDesc: "Safe, doctor-aligned exercise programs for mothers during pregnancy and safe postpartum recovery (diastasis recti, pelvic floor).",
    heroTagline: "Empowering Expectant & New Mothers with Safe, Specialized Prenatal & Postnatal Coaching",
    fullDesc: "Designed specifically for expectant mothers and new mums in Singapore. We focus on safe pelvic floor strength, core rehabilitation, pregnancy stamina, and gradual postpartum fat loss under gentle expert guidance.",
    image: "/testimonial2.avif",
    secondaryImages: ["/weightlosstraining.avif", "/coupletraining.avif", "/testimonial3.avif"],
    suitableFor: [
      "Expectant mothers in 1st, 2nd, or 3rd trimester",
      "Postpartum mothers (6+ weeks after delivery)",
      "Moms dealing with diastasis recti (abdominal separation)",
      "New mothers looking to regain pre-pregnancy fitness levels safely"
    ],
    keyBenefits: [
      "Safe exercise adaptation tailored for each trimester",
      "Pelvic floor strengthening to aid labor and post-birth recovery",
      "Targeted rehabilitation for diastasis recti and core wall",
      "Energy boost and relief from pregnancy back tightness"
    ],
    sampleExercises: [
      "Pelvic Tilt & Transverse Abdominis Activation",
      "Supported Squats with Pregnancy Ball",
      "Resistance Band Upper Back Rows",
      "Gentle Hip & Glute Bridges"
    ],
    faqs: [
      {
        question: "When can I start postnatal personal training after giving birth?",
        answer: "Generally, clients can begin 6 weeks after a natural vaginal delivery or 8–10 weeks after a C-section, following clearance from their OBGYN physician."
      }
    ],
    whatsappText: "Hi PersonalTrainer.sg, I am interested in Pre & Post Natal Fitness Coaching."
  },
  "executive-fitness": {
    id: "pt-executive",
    slug: "executive-fitness",
    name: "Executive & Busy Professional Fitness",
    shortDesc: "High-efficiency 45-minute strength & energy programs tailored for time-compressed C-suite executives and professionals.",
    heroTagline: "Maximize Productivity & Physical Stamina with High-Yield Executive Fitness Coaching",
    fullDesc: "Tailored specifically for C-suite leaders, investment bankers, lawyers, and tech executives in Singapore's CBD and tech hubs. We deliver ultra-efficient workouts designed to optimize mental focus, reduce executive stress, and maintain top-tier physical condition on a tight schedule.",
    image: "/donn-coaching-elliptical.avif",
    secondaryImages: ["/donn-flexing.avif", "/corporate-wellness.avif", "/onepersonaltraining.avif"],
    suitableFor: [
      "CEOs, Directors, Finance Executives, Tech Leaders",
      "Professionals traveling frequently across Asia",
      "Individuals working 60+ hour work weeks needing fast results",
      "Anyone wanting peak mental sharpness and energy"
    ],
    keyBenefits: [
      "Flexible early morning (6:30am) or late evening session slots",
      "High-yield 45-minute workouts maximizing metabolic output",
      "Travel-friendly bodyweight & band routine prescriptions",
      "Stress relief and enhanced executive stamina"
    ],
    sampleExercises: [
      "High-Efficiency Compound Supersets",
      "Functional Core & Kettlebell Carries",
      "Rowing Ergometer HIIT Sprints",
      "Postural Decompression Movements"
    ],
    faqs: [
      {
        question: "Can I train early in the morning before market opening or corporate meetings?",
        answer: "Yes, our trainers offer early morning training sessions starting as early as 6:00am or 6:30am across Central Singapore."
      }
    ],
    whatsappText: "Hi PersonalTrainer.sg, I am interested in Executive Fitness Coaching."
  },
  "beginner-fitness": {
    id: "pt-beginner",
    slug: "beginner-fitness",
    name: "Beginner Fitness & Gym Confidence",
    shortDesc: "Patient, step-by-step introduction to exercise fundamentals, building gym confidence, safety, and lifelong habits.",
    heroTagline: "Overcome Gym Intimidation & Build Unshakeable Fitness Confidence",
    fullDesc: "If the gym feels intimidating or confusing, this program is designed for you. We provide a supportive, zero-judgment atmosphere where you will learn how to use equipment correctly, move safely, and gain lifelong fitness independence.",
    image: "/trainwith.avif",
    secondaryImages: ["/onepersonaltraining.avif", "/donn-facility.avif", "/testimonial4.avif"],
    suitableFor: [
      "First-time gym goers of any age",
      "People who feel self-conscious or anxious in public gyms",
      "Individuals starting fitness after years of sedentary routine",
      "Anyone needing encouraging, non-intimidating coaching"
    ],
    keyBenefits: [
      "Zero-judgment, encouraging, patient coaching environment",
      "Complete mastery of gym machines and free weights",
      "Safety guidance preventing beginner gym injuries",
      "Personalized pace tailored to your comfortable progression"
    ],
    sampleExercises: [
      "Machine Chest Press & Lat Pulldown",
      "Goblet Squats & Dumbbell Deadlifts",
      "Bodyweight Step-Ups & Incline Push-Ups",
      "Core Plank & Bird-Dog Fundamentals"
    ],
    faqs: [
      {
        question: "What if I cannot do even one push-up or pull-up?",
        answer: "That is completely normal! We start with gentle regression exercises (incline wall presses, assisted bands) until your baseline strength builds naturally."
      }
    ],
    whatsappText: "Hi PersonalTrainer.sg, I am interested in Beginner Fitness & Gym Confidence Training."
  },
  "body-transformation": {
    id: "pt-body-transformation",
    slug: "body-transformation",
    name: "Body Transformation & Wedding Prep",
    shortDesc: "Intensive 12-week overhaul designed for rapid, dramatic, photo-ready changes in body composition and tone.",
    heroTagline: "Dramatically Transform Your Body Composition in 12 Weeks for Milestones & Weddings",
    fullDesc: "A complete 360-degree lifestyle and physique transformation program. Combines precision strength training, metabolic fat stripping, weekly bio-metric tracking, and strict nutritional coaching to deliver head-turning results for weddings, photoshoots, or personal milestones.",
    image: "/donn-flexing.avif",
    secondaryImages: ["/testimonial1.avif", "/testimonial3.avif", "/testimonial5.avif"],
    suitableFor: [
      "Brides & grooms preparing for upcoming weddings",
      "Clients preparing for beach vacations, photoshoots, or reunions",
      "Individuals wanting a total 12-week body reset",
      "Anyone committed to maximum aesthetic changes"
    ],
    keyBenefits: [
      "12-Week structured progressive transformation roadmap",
      "Weekly body composition, photo progress, and waist tracking",
      "Custom nutrition macros with daily check-ins",
      "Dramatic reduction in body fat + visible muscle definition"
    ],
    sampleExercises: [
      "Hypertrophy Giant Sets & Drop Sets",
      "Compound Resistance & Core Definition Circuits",
      "Targeted Arms, Shoulders, and Abs Sculpting",
      "High-Metabolic Fat Burning Finisher Sprints"
    ],
    faqs: [
      {
        question: "How long before my wedding or event should I start?",
        answer: "We recommend starting 12 to 16 weeks prior to your event date for maximum aesthetic impact and comfortable sustainable progress."
      }
    ],
    whatsappText: "Hi PersonalTrainer.sg, I am interested in Body Transformation & Wedding Prep."
  },
  "corporate-wellness": {
    id: "pt-corporate-wellness",
    slug: "corporate-wellness",
    name: "Corporate Wellness & Group Programs",
    shortDesc: "Custom workplace fitness workshops, group bootcamps, and health seminars for Singapore companies.",
    heroTagline: "Boost Employee Health, Energy & Team Morale with On-Site Corporate Wellness Programs",
    fullDesc: "Transform corporate culture and reduce sick leave. We deliver engaging on-site corporate bootcamps, ergonomics workshops, lunch-and-learn fitness talks, and group exercise classes for companies across Singapore.",
    image: "/corporate-wellness.avif",
    secondaryImages: ["/aboutus.avif", "/heroimage.avif", "/donn-kickboxing.avif"],
    suitableFor: [
      "Singapore SMEs, MNCs, Government Agencies",
      "HR Directors seeking wellness initiatives and employee perks",
      "Teams looking for healthy team-building activities"
    ],
    keyBenefits: [
      "On-site classes at corporate office premises or nearby parks",
      "Tailored for all employee fitness levels",
      "Postural ergonomics seminars relieving desk fatigue",
      "Measurable health ROI and higher workforce morale"
    ],
    sampleExercises: [
      "Corporate Group HIIT & Circuit Training",
      "Office Stretch & Ergonomic Mobility Workshops",
      "Team Building Fitness Challenges",
      "Group Boxing & Kickboxing Stress Busters"
    ],
    faqs: [
      {
        question: "Can classes be conducted directly in our corporate office building?",
        answer: "Yes, we conduct classes in office function rooms, outdoor sky terraces, nearby parks, or partner gym facilities across Singapore."
      }
    ],
    whatsappText: "Hi PersonalTrainer.sg, I am interested in Corporate Wellness Programs."
  },
  "functional-fitness": {
    id: "pt-functional-fitness",
    slug: "functional-fitness",
    name: "Functional Movement & Core Stability",
    shortDesc: "Train movements, not just muscles. Improve agility, rotational power, balance, and real-world movement efficiency.",
    heroTagline: "Build a Bulletproof Core & Real-World Athletic Movement Efficiency",
    fullDesc: "Functional fitness prepares your body for real-life activities—lifting heavy objects, playing sports, sprinting, and moving seamlessly without injury. We focus on multi-planar movements, core rotational stability, and movement flow.",
    image: "/heroimage.avif",
    secondaryImages: ["/donn-coaching-latpulldown.avif", "/onepersonaltraining.avif", "/trainwith.avif"],
    suitableFor: [
      "Recreational athletes (golfers, tennis players, runners)",
      "Anyone wanting better everyday movement power",
      "Individuals recovering from sluggish core strength"
    ],
    keyBenefits: [
      "Enhanced athletic endurance and multi-directional speed",
      "Deep core stabilization preventing spinal strain",
      "Improved joint mobility across hips, shoulders, and ankles",
      "Injury prevention for daily active living"
    ],
    sampleExercises: [
      "Medicine Ball Rotational Slams",
      "Single-Leg Kettlebell Romanian Deadlifts",
      "TRX Suspension Atomic Push-Ups",
      "Suitcase Carries & Paloff Core Presses"
    ],
    faqs: [
      {
        question: "Is functional training suitable if I play sports like golf or tennis?",
        answer: "Absolutely! We customize exercises to replicate rotational patterns, single-leg stability, and explosive power required for your specific sport."
      }
    ],
    whatsappText: "Hi PersonalTrainer.sg, I am interested in Functional Movement & Core Training."
  },
  "hiit-conditioning": {
    id: "pt-hiit",
    slug: "hiit-conditioning",
    name: "HIIT & High Intensity Conditioning",
    shortDesc: "Fast-paced interval training to maximize cardiovascular endurance, burn high calories, and boost metabolic rate.",
    heroTagline: "Push Limits, Skyrocket Endurance & Torment Fat with High Intensity Interval Training",
    fullDesc: "Experience metabolic conditioning at its finest. High Intensity Interval Training (HIIT) alternates intense bursts of exercise with short recovery periods to spike your metabolic rate, increase VO2 max, and melt body fat fast.",
    image: "/donn-coaching-elliptical.avif",
    secondaryImages: ["/donn-kickboxing.avif", "/weightlosstraining.avif", "/testimonial6.avif"],
    suitableFor: [
      "Clients looking for fast, high-sweat workouts",
      "Fitness enthusiasts breaking through cardiovascular plateaus",
      "Anyone short on time wanting maximum workout output"
    ],
    keyBenefits: [
      "Elevated post-workout calorie burn for up to 24 hours",
      "Rapid improvement in lung capacity and stamina",
      "Full body fat loss while maintaining muscle",
      "Varied, fast-moving workout structure"
    ],
    sampleExercises: [
      "Assault Bike Sprints & SkiErg Intervals",
      "Burpee Box Jumps & Kettlebell Snatching",
      "Battle Rope Waves & Slam Balls",
      "Tabata Bodyweight Burners"
    ],
    faqs: [
      {
        question: "Is HIIT safe for people with knee issues?",
        answer: "We modify HIIT workouts using low-impact options (rower, ski erg, Airdyne bike) that deliver high intensity without joint impact."
      }
    ],
    whatsappText: "Hi PersonalTrainer.sg, I am interested in HIIT & High Intensity Conditioning."
  }
};
