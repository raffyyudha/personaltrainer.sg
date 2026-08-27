import { PSEO_SERVICES, PseoService } from "./services";
import { SINGAPORE_AREAS, SINGAPORE_MRTS, SINGAPORE_CONDOS, PseoArea, PseoMrt, PseoCondo } from "./locations";
import { PSEO_DEMOGRAPHICS, PseoDemographic } from "./demographics";

export interface PseoPageData {
  slug: string;
  keyword: string;
  h1: string;
  metaTitle: string;
  metaDesc: string;
  category: "service-area" | "service-mrt" | "service-condo" | "demographic-area" | "demographic-mrt" | "demographic-condo" | "intent-service-area" | "intent-service-mrt" | "condo-specialist";
  layoutVariant: "variant-a" | "variant-b" | "variant-c" | "variant-d";
  accentColor: string;
  service: PseoService;
  locationName: string;
  locationType: "Planning Area" | "MRT Station" | "Condominium";
  district: string;
  region: string;
  landmarks: string[];
  demographic?: PseoDemographic;
  intentModifier?: string;
  heroImage: string;
  galleryImages: string[];
  introParagraph: string;
  faqs: { question: string; answer: string }[];
  whatsappUrl: string;
}

// 6 Popular High-Intent Search Modifiers in Singapore
const INTENT_MODIFIERS = [
  { prefix: "best", label: "Best", angle: "Top-Rated & Highly Recommended" },
  { prefix: "at-home", label: "At Home & Condo Gym", angle: "Mobile Doorstep Personal Training" },
  { prefix: "private", label: "Private & Confidential", angle: "1-on-1 Dedicated Coaching" },
  { prefix: "affordable", label: "Affordable Rates & Packages", angle: "High-Value Transparent Pricing" },
  { prefix: "female", label: "Female & Specialist", angle: "Tailored Body Sculpting & Comfort" },
  { prefix: "certified", label: "Certified Master", angle: "24+ Years Experienced Trainer" }
];

const PUBLIC_IMAGES = [
  "/onepersonaltraining.avif",
  "/weightlosstraining.avif",
  "/donn-coaching-barbell.avif",
  "/senior-fitness.avif",
  "/coupletraining.avif",
  "/donn-kickboxing.avif",
  "/donn-facility.avif",
  "/donn-coaching-latpulldown.avif",
  "/testimonial2.avif",
  "/donn-coaching-elliptical.avif",
  "/trainwith.avif",
  "/donn-flexing.avif",
  "/corporate-wellness.avif",
  "/heroimage.avif"
];

function getHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

// Cache generated list for performance
let cachedMatrix: PseoPageData[] | null = null;
let cachedMap: Map<string, PseoPageData> | null = null;

export function generatePseoMatrix(): PseoPageData[] {
  if (cachedMatrix) return cachedMatrix;

  const list: PseoPageData[] = [];
  const servicesList = Object.values(PSEO_SERVICES);
  const demoList = Object.values(PSEO_DEMOGRAPHICS);

  // 1. Service x Planning Area (15 x 55 = 825)
  for (const svc of servicesList) {
    for (const area of SINGAPORE_AREAS) {
      const slug = `${svc.slug}-${area.slug}-singapore`;
      const hash = getHash(slug);
      const layoutVariant = (["variant-a", "variant-b", "variant-c", "variant-d"] as const)[hash % 4];
      const img1 = PUBLIC_IMAGES[hash % PUBLIC_IMAGES.length];
      const img2 = PUBLIC_IMAGES[(hash + 3) % PUBLIC_IMAGES.length];

      list.push({
        slug,
        keyword: `${svc.name} in ${area.name} Singapore`,
        h1: `${svc.name} in ${area.name}, Singapore`,
        metaTitle: `${svc.name} ${area.name} Singapore | PersonalTrainer.sg`,
        metaDesc: `Looking for top ${svc.name} in ${area.name}, Singapore? Customized fitness coaching led by DONN (24+ yrs exp). Mobile home, condo & gym sessions near ${area.landmarks[0]}. Book trial today!`,
        category: "service-area",
        layoutVariant,
        accentColor: ["#D4AF37", "#3B82F6", "#10B981", "#EC4899"][hash % 4],
        service: svc,
        locationName: area.name,
        locationType: "Planning Area",
        district: area.district,
        region: area.region,
        landmarks: area.landmarks,
        heroImage: img1,
        galleryImages: [img1, img2, svc.image],
        introParagraph: `Looking for high-impact ${svc.name.toLowerCase()} in ${area.name}? PersonalTrainer.sg delivers customized coaching right in your neighborhood around ${area.landmarks.join(", ")}. Whether you want fast weight loss, lean strength, or injury rehabilitation in ${area.district}, our certified master trainer MD Salaudin Adam (DONN) provides structured workouts tailored to your body type and schedule.`,
        faqs: [
          ...svc.faqs,
          {
            question: `Where are workouts conducted in ${area.name}?`,
            answer: `Sessions can be conducted in your private condo gym, home residence near ${area.landmarks[0]}, outdoor parks in ${area.name}, or our affiliated private partner gym facilities.`
          }
        ],
        whatsappUrl: `https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20${encodeURIComponent(svc.name)}%20in%20${encodeURIComponent(area.name)}.`
      });
    }
  }

  // 2. Service x MRT Station (15 x 115 = 1,725)
  for (const svc of servicesList) {
    for (const mrt of SINGAPORE_MRTS) {
      const slug = `${svc.slug}-near-${mrt.slug}-singapore`;
      const hash = getHash(slug);
      const layoutVariant = (["variant-a", "variant-b", "variant-c", "variant-d"] as const)[hash % 4];
      const img1 = PUBLIC_IMAGES[hash % PUBLIC_IMAGES.length];
      const img2 = PUBLIC_IMAGES[(hash + 5) % PUBLIC_IMAGES.length];

      list.push({
        slug,
        keyword: `${svc.name} near ${mrt.name}`,
        h1: `${svc.name} Near ${mrt.name}`,
        metaTitle: `${svc.name} Near ${mrt.name} Singapore | PersonalTrainer.sg`,
        metaDesc: `Find certified 1-on-1 ${svc.name.toLowerCase()} within walking distance of ${mrt.name} (${mrt.line}). Fast results, flexible timings, condo/home coaching. Book your trial!`,
        category: "service-mrt",
        layoutVariant,
        accentColor: ["#F59E0B", "#6366F1", "#14B8A6", "#F43F5E"][hash % 4],
        service: svc,
        locationName: mrt.name,
        locationType: "MRT Station",
        district: mrt.area,
        region: "Central",
        landmarks: [mrt.name, `${mrt.area} Hub`, `${mrt.line} Connection`],
        heroImage: img1,
        galleryImages: [img1, img2, svc.image],
        introParagraph: `Convenient, zero-commute ${svc.name.toLowerCase()} accessible near ${mrt.name} on the ${mrt.line}. Ideal for residents and working professionals in the ${mrt.area} vicinity looking for top-tier fitness results without wasting transit time.`,
        faqs: [
          ...svc.faqs,
          {
            question: `How close is the training location to ${mrt.name}?`,
            answer: `We train directly inside condo gyms located right next to ${mrt.name}, or our trainer comes directly to your residence within a few minutes of the station.`
          }
        ],
        whatsappUrl: `https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20${encodeURIComponent(svc.name)}%20near%20${encodeURIComponent(mrt.name)}.`
      });
    }
  }

  // 3. Service x Condo (15 x 50 = 750)
  for (const svc of servicesList) {
    for (const condo of SINGAPORE_CONDOS) {
      const slug = `${svc.slug}-${condo.slug}-singapore`;
      const hash = getHash(slug);
      const layoutVariant = (["variant-a", "variant-b", "variant-c", "variant-d"] as const)[hash % 4];
      const img1 = PUBLIC_IMAGES[hash % PUBLIC_IMAGES.length];
      const img2 = PUBLIC_IMAGES[(hash + 2) % PUBLIC_IMAGES.length];

      list.push({
        slug,
        keyword: `${svc.name} at ${condo.name} Singapore`,
        h1: `${svc.name} Coaching at ${condo.name}`,
        metaTitle: `${svc.name} Trainer at ${condo.name} (${condo.district}) | PersonalTrainer.sg`,
        metaDesc: `Private personal training in your gym at ${condo.name}, ${condo.area}. Customized workouts, form perfection & weight loss by DONN (24+ yrs exp). Inquire today!`,
        category: "service-condo",
        layoutVariant,
        accentColor: ["#D4AF37", "#8B5CF6", "#10B981", "#3B82F6"][hash % 4],
        service: svc,
        locationName: condo.name,
        locationType: "Condominium",
        district: condo.district,
        region: condo.area,
        landmarks: [condo.name, condo.area, condo.district],
        heroImage: img1,
        galleryImages: [img1, img2, svc.image],
        introParagraph: `Maximize your private residence gym at ${condo.name} in ${condo.area} (${condo.district}). PersonalTrainer.sg brings elite 1-on-1 ${svc.name.toLowerCase()} straight to your doorstep, utilizing your condo's fitness facilities for ultimate convenience, privacy, and results.`,
        faqs: [
          ...svc.faqs,
          {
            question: `Does the trainer visit my condo gym at ${condo.name}?`,
            answer: `Yes! Our trainer brings all necessary specialized gear to work seamlessly alongside your condo gym facilities at ${condo.name}.`
          }
        ],
        whatsappUrl: `https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20${encodeURIComponent(svc.name)}%20at%20${encodeURIComponent(condo.name)}.`
      });
    }
  }

  // 4. Demographic x Area (7 x 55 = 385)
  for (const demo of demoList) {
    for (const area of SINGAPORE_AREAS) {
      const slug = `personal-trainer-for-${demo.slug}-${area.slug}-singapore`;
      const hash = getHash(slug);
      const layoutVariant = (["variant-a", "variant-b", "variant-c", "variant-d"] as const)[hash % 4];
      const svc = servicesList[hash % servicesList.length];
      const img1 = PUBLIC_IMAGES[hash % PUBLIC_IMAGES.length];
      const img2 = PUBLIC_IMAGES[(hash + 4) % PUBLIC_IMAGES.length];

      list.push({
        slug,
        keyword: `Personal Trainer for ${demo.title} in ${area.name}`,
        h1: `Personal Training for ${demo.title} in ${area.name}`,
        metaTitle: `Personal Trainer for ${demo.title} ${area.name} | PersonalTrainer.sg`,
        metaDesc: `Specialized personal training program tailored for ${demo.title} in ${area.name}, Singapore. Focus on ${demo.focusArea}. Book your trial session!`,
        category: "demographic-area",
        layoutVariant,
        accentColor: ["#EC4899", "#3B82F6", "#F59E0B", "#10B981"][hash % 4],
        service: svc,
        locationName: area.name,
        locationType: "Planning Area",
        district: area.district,
        region: area.region,
        landmarks: area.landmarks,
        demographic: demo,
        heroImage: img1,
        galleryImages: [img1, img2, svc.image],
        introParagraph: `Tailored fitness coaching designed specifically for ${demo.title} living or working in ${area.name}. We understand your specific needs, focusing on ${demo.focusArea} while fitting into your lifestyle near ${area.landmarks[0]}.`,
        faqs: [
          {
            question: `Why is this program specifically suited for ${demo.title}?`,
            answer: `We address unique challenges faced by ${demo.title}, offering customized progression, scheduling flexibility, and specialized movement coaching.`
          },
          ...svc.faqs
        ],
        whatsappUrl: `https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Personal%20Training%20for%20${encodeURIComponent(demo.title)}%20in%20${encodeURIComponent(area.name)}.`
      });
    }
  }

  // 5. Demographic x MRT (7 x 115 = 805)
  for (const demo of demoList) {
    for (const mrt of SINGAPORE_MRTS) {
      const slug = `personal-trainer-for-${demo.slug}-near-${mrt.slug}-singapore`;
      const hash = getHash(slug);
      const layoutVariant = (["variant-a", "variant-b", "variant-c", "variant-d"] as const)[hash % 4];
      const svc = servicesList[hash % servicesList.length];
      const img1 = PUBLIC_IMAGES[hash % PUBLIC_IMAGES.length];
      const img2 = PUBLIC_IMAGES[(hash + 1) % PUBLIC_IMAGES.length];

      list.push({
        slug,
        keyword: `Personal Trainer for ${demo.title} near ${mrt.name}`,
        h1: `Personal Trainer for ${demo.title} Near ${mrt.name}`,
        metaTitle: `Personal Trainer for ${demo.title} Near ${mrt.name} | PersonalTrainer.sg`,
        metaDesc: `Dedicated personal coaching for ${demo.title} near ${mrt.name} station. Tailored workouts, expert instruction & flexible scheduling. Enquire now!`,
        category: "demographic-mrt",
        layoutVariant,
        accentColor: ["#6366F1", "#10B981", "#D4AF37", "#EC4899"][hash % 4],
        service: svc,
        locationName: mrt.name,
        locationType: "MRT Station",
        district: mrt.area,
        region: "Central",
        landmarks: [mrt.name, mrt.area],
        demographic: demo,
        heroImage: img1,
        galleryImages: [img1, img2, svc.image],
        introParagraph: `Fitness training customized for ${demo.title} convenient to ${mrt.name} on the ${mrt.line}. Enjoy personalized attention focused on ${demo.focusArea} right in your neighborhood.`,
        faqs: [
          {
            question: `Are sessions near ${mrt.name} suitable for ${demo.title}?`,
            answer: `Yes, we adapt every session to your exact schedule and physical baseline near ${mrt.name}.`
          }
        ],
        whatsappUrl: `https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Personal%20Training%20for%20${encodeURIComponent(demo.title)}%20near%20${encodeURIComponent(mrt.name)}.`
      });
    }
  }

  // 6. Service x Intent Modifiers x Planning Area (15 x 6 x 55 = 4,950)
  for (const svc of servicesList) {
    for (const intent of INTENT_MODIFIERS) {
      for (const area of SINGAPORE_AREAS) {
        const slug = `${intent.prefix}-${svc.slug}-${area.slug}-singapore`;
        const hash = getHash(slug);
        const layoutVariant = (["variant-a", "variant-b", "variant-c", "variant-d"] as const)[hash % 4];
        const img1 = PUBLIC_IMAGES[hash % PUBLIC_IMAGES.length];
        const img2 = PUBLIC_IMAGES[(hash + 6) % PUBLIC_IMAGES.length];

        list.push({
          slug,
          keyword: `${intent.label} ${svc.name} in ${area.name} Singapore`,
          h1: `${intent.label} ${svc.name} in ${area.name}`,
          metaTitle: `${intent.label} ${svc.name} ${area.name} | PersonalTrainer.sg`,
          metaDesc: `Find the ${intent.label.toLowerCase()} ${svc.name.toLowerCase()} in ${area.name}, Singapore. ${intent.angle}. Certified 24+ yrs master coach DONN. Book trial session!`,
          category: "intent-service-area",
          layoutVariant,
          accentColor: ["#D4AF37", "#F59E0B", "#10B981", "#3B82F6"][hash % 4],
          service: svc,
          locationName: area.name,
          locationType: "Planning Area",
          district: area.district,
          region: area.region,
          landmarks: area.landmarks,
          intentModifier: intent.label,
          heroImage: img1,
          galleryImages: [img1, img2, svc.image],
          introParagraph: `Searching for the ${intent.label.toLowerCase()} ${svc.name.toLowerCase()} in ${area.name}? We specialize in delivering ${intent.angle.toLowerCase()} around ${area.landmarks[0]} and throughout ${area.district}.`,
          faqs: [
            ...svc.faqs,
            {
              question: `Why choose PersonalTrainer.sg for ${intent.label.toLowerCase()} ${svc.name.toLowerCase()} in ${area.name}?`,
              answer: `We combine 24+ years of master coaching experience, 100% personalized routines, flexible mobile condo/home scheduling, and proven real transformation results.`
            }
          ],
          whatsappUrl: `https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20${encodeURIComponent(intent.label)}%20${encodeURIComponent(svc.name)}%20in%20${encodeURIComponent(area.name)}.`
        });
      }
    }
  }

  // 7. Service x Intent Modifiers x MRT (15 x 6 x 115 = 10,350)
  for (const svc of servicesList) {
    for (const intent of INTENT_MODIFIERS) {
      for (const mrt of SINGAPORE_MRTS) {
        const slug = `${intent.prefix}-${svc.slug}-near-${mrt.slug}-singapore`;
        const hash = getHash(slug);
        const layoutVariant = (["variant-a", "variant-b", "variant-c", "variant-d"] as const)[hash % 4];
        const img1 = PUBLIC_IMAGES[hash % PUBLIC_IMAGES.length];
        const img2 = PUBLIC_IMAGES[(hash + 7) % PUBLIC_IMAGES.length];

        list.push({
          slug,
          keyword: `${intent.label} ${svc.name} near ${mrt.name}`,
          h1: `${intent.label} ${svc.name} Near ${mrt.name}`,
          metaTitle: `${intent.label} ${svc.name} Near ${mrt.name} | PersonalTrainer.sg`,
          metaDesc: `${intent.label} ${svc.name.toLowerCase()} steps from ${mrt.name} (${mrt.line}). Mobile condo/home training, customized workout plans & top reviews. Book today!`,
          category: "intent-service-mrt",
          layoutVariant,
          accentColor: ["#3B82F6", "#EC4899", "#D4AF37", "#10B981"][hash % 4],
          service: svc,
          locationName: mrt.name,
          locationType: "MRT Station",
          district: mrt.area,
          region: "Central",
          landmarks: [mrt.name, mrt.area],
          intentModifier: intent.label,
          heroImage: img1,
          galleryImages: [img1, img2, svc.image],
          introParagraph: `Looking for ${intent.label.toLowerCase()} ${svc.name.toLowerCase()} near ${mrt.name}? Experience elite coaching focusing on ${intent.angle.toLowerCase()} directly in the ${mrt.area} vicinity.`,
          faqs: [
            ...svc.faqs,
            {
              question: `How do I get started near ${mrt.name}?`,
              answer: `Simply send us a WhatsApp message to book your initial consultation and trial session near ${mrt.name}.`
            }
          ],
          whatsappUrl: `https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20${encodeURIComponent(intent.label)}%20${encodeURIComponent(svc.name)}%20near%20${encodeURIComponent(mrt.name)}.`
        });
      }
    }
  }

  // 8. Condo Gym Specialists x Condo x Intent (1 x 50 x 6 = 300)
  const condoSvc = PSEO_SERVICES["home-condo-training"];
  for (const condo of SINGAPORE_CONDOS) {
    for (const intent of INTENT_MODIFIERS) {
      const slug = `${intent.prefix}-condo-personal-trainer-${condo.slug}-singapore`;
      const hash = getHash(slug);
      const layoutVariant = (["variant-a", "variant-b", "variant-c", "variant-d"] as const)[hash % 4];
      const img1 = PUBLIC_IMAGES[hash % PUBLIC_IMAGES.length];
      const img2 = PUBLIC_IMAGES[(hash + 8) % PUBLIC_IMAGES.length];

      list.push({
        slug,
        keyword: `${intent.label} Condo Personal Trainer at ${condo.name}`,
        h1: `${intent.label} Condo Personal Trainer at ${condo.name}`,
        metaTitle: `${intent.label} Condo Trainer at ${condo.name} | PersonalTrainer.sg`,
        metaDesc: `Elite ${intent.label.toLowerCase()} condo personal trainer at ${condo.name}, ${condo.area} (${condo.district}). Premium 1-on-1 coaching brought to your residence. Inquire now!`,
        category: "condo-specialist",
        layoutVariant,
        accentColor: ["#D4AF37", "#10B981", "#F59E0B", "#8B5CF6"][hash % 4],
        service: condoSvc,
        locationName: condo.name,
        locationType: "Condominium",
        district: condo.district,
        region: condo.area,
        landmarks: [condo.name, condo.area, condo.district],
        intentModifier: intent.label,
        heroImage: img1,
        galleryImages: [img1, img2, condoSvc.image],
        introParagraph: `Exclusive ${intent.label.toLowerCase()} personal coaching designed for residents at ${condo.name} in ${condo.area}. We optimize your condo's private fitness facilities to deliver high-yield results right inside your estate.`,
        faqs: [
          ...condoSvc.faqs,
          {
            question: `Do you coach inside ${condo.name}?`,
            answer: `Yes, we conduct private 1-on-1 sessions inside ${condo.name}'s gym or private residence facilities according to condo resident guidelines.`
          }
        ],
        whatsappUrl: `https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20${encodeURIComponent(intent.label)}%20Condo%20Personal%20Trainer%20at%20${encodeURIComponent(condo.name)}.`
      });
    }
  }

  cachedMatrix = list;

  // Build map index for instant O(1) lookup
  cachedMap = new Map<string, PseoPageData>();
  for (const item of list) {
    cachedMap.set(item.slug, item);
  }

  return list;
}

export function getPseoPageBySlug(slug: string): PseoPageData | null {
  if (!cachedMap) {
    generatePseoMatrix();
  }
  return cachedMap?.get(slug) || null;
}

export function getPseoTotalCount(): number {
  return generatePseoMatrix().length;
}

export function getPseoSlugsChunk(chunkIndex: number, chunkSize = 1000): string[] {
  const all = generatePseoMatrix();
  const start = chunkIndex * chunkSize;
  return all.slice(start, start + chunkSize).map(item => item.slug);
}
