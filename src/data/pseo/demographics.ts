export interface PseoDemographic {
  slug: string;
  title: string;
  targetAudience: string;
  focusArea: string;
  painPoints: string[];
  customBenefits: string[];
}

export const PSEO_DEMOGRAPHICS: Record<string, PseoDemographic> = {
  "executives": {
    slug: "executives",
    title: "Busy Executives & Corporate Professionals",
    targetAudience: "C-suite leaders, investment bankers, lawyers, tech leads, and busy managers in Singapore",
    focusArea: "High-efficiency stress reduction, metabolic fat loss, posture alignment, and peak cognitive vitality",
    painPoints: [
      "Extremely tight calendar schedules and unpredictability",
      "High work stress, elevated cortisol, and sluggish afternoon energy",
      "Stiffness from sitting in long board meetings and desk work"
    ],
    customBenefits: [
      "Early morning (6:30am) or late evening sessions accommodating busy calendars",
      "45-minute high-output training protocols for maximum calorie burn per minute",
      "Express bodyweight & band home workouts prescribed for business travel"
    ]
  },
  "seniors": {
    slug: "seniors",
    title: "Seniors & Active Adults (50+, 60+, 70+)",
    targetAudience: "Mature adults in Singapore aiming to maintain vitality, independence, and strong joints",
    focusArea: "Low-impact balance restoration, joint lubrication, bone density maintenance, and mobility",
    painPoints: [
      "Fear of joint injury or falling",
      "Knee, hip, or lower back stiffness during daily walking and stairs",
      "Gradual loss of muscle mass (sarcopenia) with age"
    ],
    customBenefits: [
      "Gentle, patient, low-impact exercise progression monitored continuously",
      "Fall prevention balance drills and osteoporosis defense routines",
      "Flexibility restoration allowing painless mobility"
    ]
  },
  "women": {
    slug: "women",
    title: "Women's Fitness & Toning",
    targetAudience: "Women looking for tight curves, fat reduction, lean muscle definition, and body confidence",
    focusArea: "Glute shaping, core tightening, arm toning, metabolic fat loss, and posture alignment",
    painPoints: [
      "Fear of getting bulky or looking over-muscled",
      "Stubborn fat deposits on thighs, waist, and arms",
      "Low gym confidence around heavy weight sections"
    ],
    customBenefits: [
      "Non-bulky sculpting protocols customized for female body proportions",
      "Targeted waist slimming and glute-hip activation workouts",
      "Safe, private, and empowering coaching environment"
    ]
  },
  "beginners": {
    slug: "beginners",
    title: "Beginners & First-Time Gym Goers",
    targetAudience: "Individuals starting their fitness journey from zero baseline with no prior workout experience",
    focusArea: "Gym confidence, movement safety, habit consistency, and foundational strength",
    painPoints: [
      "Feeling self-conscious or intimidated inside commercial gyms",
      "Confusion over how to use complex gym equipment",
      "Fear of performing exercises incorrectly and causing injury"
    ],
    customBenefits: [
      "Patient, step-by-step guidance starting from simple comfortable movements",
      "Clear explanation of proper biomechanics and machine settings",
      "Zero judgment, encouraging coaching structure"
    ]
  },
  "couples": {
    slug: "couples",
    title: "Couples & Fitness Partners",
    targetAudience: "Spouses, partners, or best friends seeking a shared fitness journey in Singapore",
    focusArea: "Partner accountability, mutual motivation, interactive circuits, and cost savings",
    painPoints: [
      "Struggling to find activities to enjoy healthily together",
      "Differing individual fitness baselines making joint workouts hard",
      "Staying consistent without mutual encouragement"
    ],
    customBenefits: [
      "Independent intensity adjustments during shared workout sessions",
      "Fun partner-based resistance drills and healthy camaraderie",
      "Shared personal training investment"
    ]
  },
  "postpartum": {
    slug: "postpartum",
    title: "Postpartum Mothers & Pre/Post Natal",
    targetAudience: "Mothers regaining core stability, rebuilding pelvic floor, and dropping pregnancy weight safely",
    focusArea: "Diastasis recti healing, pelvic floor re-strengthening, core wall restoration, and safe fat loss",
    painPoints: [
      "Abdominal separation (diastasis recti) post delivery",
      "Lower back aches from nursing and carrying newborns",
      "Finding time for fitness while caring for a baby"
    ],
    customBenefits: [
      "OBGYN-approved rehabilitation exercises for safe recovery",
      "Core wall tightening and lower back support routines",
      "In-home or condo training allowing mother to stay near baby"
    ]
  },
  "expats": {
    slug: "expats",
    title: "Expats & International Residents",
    targetAudience: "Expatriates living in Singapore adjusting to tropical climate and local condo/gym facilities",
    focusArea: "Tropical heat acclimatization, condo gym training, body composition, and English coaching",
    painPoints: [
      "Adjusting to intense Singapore humidity and climate",
      "Finding high-caliber fluent English speaking certified trainers",
      "Maximizing condo gym facilities without buying commercial memberships"
    ],
    customBenefits: [
      "Fluent English communication with international coaching standards",
      "Seamless door-to-door coaching inside your private condo",
      "Flexible international travel scheduling adjustments"
    ]
  }
};
