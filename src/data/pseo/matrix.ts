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

function cleanRepeatedWords(str: string): string {
  if (!str) return str;
  return str
    .replace(/\b1[- ]on[- ]1\s+1[- ]on[- ]1\b/gi, "1 on 1")
    .replace(/\b1[- ]on[- ]1\s+1\s+on\s+1\b/gi, "1 on 1")
    .replace(/\bpersonal training\s+personal training\b/gi, "personal training")
    .replace(/\bpersonal trainer\s+personal trainer\b/gi, "personal trainer")
    .replace(/\b(in|at|near|the|for|and|to|with|on|around|by)\s+\1\b/gi, "$1")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function getServiceForDemographic(demoSlug: string): PseoService {
  switch (demoSlug) {
    case "couples":
      return PSEO_SERVICES["couple-training"];
    case "seniors":
      return PSEO_SERVICES["senior-fitness"];
    case "women":
      return PSEO_SERVICES["weight-loss"];
    case "postpartum":
      return PSEO_SERVICES["prenatal-postnatal"];
    case "youth":
      return PSEO_SERVICES["functional-mobility"];
    case "executives":
      return PSEO_SERVICES["strength-training"];
    case "beginners":
    default:
      return PSEO_SERVICES["personal-training"];
  }
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
      const gallery = [svc.image, ...(svc.secondaryImages?.slice(0, 2) || [img1, img2])];

      list.push({
        slug,
        keyword: cleanRepeatedWords(`${svc.name} in ${area.name} Singapore`),
        h1: cleanRepeatedWords(`${svc.name} in ${area.name}, Singapore`),
        metaTitle: cleanRepeatedWords(`${svc.name} ${area.name} Singapore | PersonalTrainer.sg`),
        metaDesc: cleanRepeatedWords(`Looking for top ${svc.name} in ${area.name}, Singapore? PersonalTrainer.sg provides customised personal training at suitable homes, approved condo gyms, private facilities & outdoor areas around ${area.name}. Book trial today!`),
        category: "service-area",
        layoutVariant,
        accentColor: ["#D4AF37", "#3B82F6", "#10B981", "#EC4899"][hash % 4],
        service: svc,
        locationName: area.name,
        locationType: "Planning Area",
        district: area.district,
        region: area.region,
        landmarks: area.landmarks,
        heroImage: svc.image || img1,
        galleryImages: gallery,
        introParagraph: cleanRepeatedWords(`PersonalTrainer.sg provides customised personal training at suitable homes, approved condominium gyms, private training facilities and outdoor training areas around ${area.name} and surrounding neighbourhoods. Looking for structured ${svc.name.toLowerCase()} in ${area.name}? PersonalTrainer.sg delivers customised coaching led by master trainer Md Salaudin Adam (DONN) with 24+ years of experience, tailored to your physical condition, schedule and personal fitness goals.`),
        faqs: [
          ...svc.faqs,
          {
            question: cleanRepeatedWords(`Where are workouts conducted in ${area.name}?`),
            answer: `Training can be arranged at suitable home spaces, approved condominium gyms, private training facilities, outdoor training areas, multi storey car park training areas and other suitable training environments across Singapore. The most suitable location can be discussed during your enquiry.`
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
      const gallery = [svc.image, ...(svc.secondaryImages?.slice(0, 2) || [img1, img2])];

      list.push({
        slug,
        keyword: cleanRepeatedWords(`${svc.name} near ${mrt.name}`),
        h1: cleanRepeatedWords(`${svc.name} Near ${mrt.name}`),
        metaTitle: cleanRepeatedWords(`${svc.name} Near ${mrt.name} Singapore | PersonalTrainer.sg`),
        metaDesc: cleanRepeatedWords(`Find certified ${svc.slug === "personal-training" ? "" : "1-on-1 "}${svc.name.toLowerCase()} within walking distance of ${mrt.name} (${mrt.line}). Structured workouts, flexible timings, condo/home coaching. Book your trial!`),
        category: "service-mrt",
        layoutVariant,
        accentColor: ["#F59E0B", "#6366F1", "#14B8A6", "#F43F5E"][hash % 4],
        service: svc,
        locationName: mrt.name,
        locationType: "MRT Station",
        district: mrt.area,
        region: "Central",
        landmarks: [mrt.name, `${mrt.area} Hub`, `${mrt.line} Connection`],
        heroImage: svc.image || img1,
        galleryImages: gallery,
        introParagraph: cleanRepeatedWords(`PersonalTrainer.sg provides customised personal training at suitable homes, approved condominium gyms, private training facilities and outdoor training areas around ${mrt.name} and surrounding neighbourhoods. Convenient, zero-commute ${svc.name.toLowerCase()} accessible near ${mrt.name} on the ${mrt.line}, ideal for residents and working professionals in the ${mrt.area} vicinity.`),
        faqs: [
          ...svc.faqs,
          {
            question: cleanRepeatedWords(`Where are workouts conducted near ${mrt.name}?`),
            answer: `Training can be arranged at suitable home spaces, approved condominium gyms, private training facilities, outdoor training areas, multi storey car park training areas and other suitable training environments across Singapore. The most suitable location can be discussed during your enquiry.`
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
      const gallery = [svc.image, ...(svc.secondaryImages?.slice(0, 2) || [img1, img2])];

      list.push({
        slug,
        keyword: cleanRepeatedWords(`${svc.name} at ${condo.name} Singapore`),
        h1: cleanRepeatedWords(`${svc.name} Coaching at ${condo.name}`),
        metaTitle: cleanRepeatedWords(`${svc.name} Trainer at ${condo.name} (${condo.district}) | PersonalTrainer.sg`),
        metaDesc: cleanRepeatedWords(`Private personal training in your gym at ${condo.name}, ${condo.area}. Customized workouts, form perfection & body toning by DONN (24+ yrs exp). Inquire today!`),
        category: "service-condo",
        layoutVariant,
        accentColor: ["#D4AF37", "#8B5CF6", "#10B981", "#3B82F6"][hash % 4],
        service: svc,
        locationName: condo.name,
        locationType: "Condominium",
        district: condo.district,
        region: condo.area,
        landmarks: [condo.name, condo.area, condo.district],
        heroImage: svc.image || img1,
        galleryImages: gallery,
        introParagraph: cleanRepeatedWords(`Maximize your private residence gym at ${condo.name} in ${condo.area} (${condo.district}). PersonalTrainer.sg brings elite ${svc.slug === "personal-training" ? "" : "1-on-1 "}${svc.name.toLowerCase()} straight to your doorstep, utilizing your condo's fitness facilities for ultimate convenience, privacy, and results.`),
        faqs: [
          ...svc.faqs,
          {
            question: cleanRepeatedWords(`Does the trainer visit my condo gym at ${condo.name}?`),
            answer: `Yes! Our trainer brings all necessary specialized gear to conduct sessions safely inside approved condominium gyms at ${condo.name} according to estate guidelines.`
          }
        ],
        whatsappUrl: `https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20${encodeURIComponent(svc.name)}%20at%20${encodeURIComponent(condo.name)}.`
      });
    }
  }

  // 4. Demographic x Area (7 x 55 = 385)
  for (const demo of demoList) {
    const svc = getServiceForDemographic(demo.slug);
    for (const area of SINGAPORE_AREAS) {
      const slug = `personal-trainer-for-${demo.slug}-${area.slug}-singapore`;
      const hash = getHash(slug);
      const layoutVariant = (["variant-a", "variant-b", "variant-c", "variant-d"] as const)[hash % 4];
      const img1 = PUBLIC_IMAGES[hash % PUBLIC_IMAGES.length];
      const img2 = PUBLIC_IMAGES[(hash + 4) % PUBLIC_IMAGES.length];
      const gallery = [svc.image, ...(svc.secondaryImages?.slice(0, 2) || [img1, img2])];

      list.push({
        slug,
        keyword: cleanRepeatedWords(`Personal Trainer for ${demo.title} in ${area.name}`),
        h1: cleanRepeatedWords(`Personal Training for ${demo.title} in ${area.name}`),
        metaTitle: cleanRepeatedWords(`Personal Trainer for ${demo.title} ${area.name} | PersonalTrainer.sg`),
        metaDesc: cleanRepeatedWords(`Specialized personal training program tailored for ${demo.title} in ${area.name}, Singapore. Focus on ${demo.focusArea}. Book your trial session!`),
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
        heroImage: svc.image || img1,
        galleryImages: gallery,
        introParagraph: cleanRepeatedWords(`PersonalTrainer.sg provides customised personal training at suitable homes, approved condominium gyms, private training facilities and outdoor training areas around ${area.name} and surrounding neighbourhoods. Tailored fitness coaching designed specifically for ${demo.title} living or working in ${area.name}, focusing on ${demo.focusArea}.`),
        faqs: [
          {
            question: cleanRepeatedWords(`Why is this program specifically suited for ${demo.title}?`),
            answer: `We address unique challenges faced by ${demo.title}, offering customized progression, scheduling flexibility, and specialized movement coaching adapted to your current condition.`
          },
          {
            question: cleanRepeatedWords(`Where are training sessions held in ${area.name}?`),
            answer: `Training can be arranged at suitable home spaces, approved condominium gyms, private training facilities, outdoor training areas, multi storey car park training areas and other suitable training environments across Singapore. The most suitable location can be discussed during your enquiry.`
          },
          ...svc.faqs
        ],
        whatsappUrl: `https://wa.me/6591081781?text=Hi%20PersonalTrainer.sg%2C%20I%20am%20interested%20in%20Personal%20Training%20for%20${encodeURIComponent(demo.title)}%20in%20${encodeURIComponent(area.name)}.`
      });
    }
  }

  // 5. Demographic x MRT (7 x 115 = 805)
  for (const demo of demoList) {
    const svc = getServiceForDemographic(demo.slug);
    for (const mrt of SINGAPORE_MRTS) {
      const slug = `personal-trainer-for-${demo.slug}-near-${mrt.slug}-singapore`;
      const hash = getHash(slug);
      const layoutVariant = (["variant-a", "variant-b", "variant-c", "variant-d"] as const)[hash % 4];
      const img1 = PUBLIC_IMAGES[hash % PUBLIC_IMAGES.length];
      const img2 = PUBLIC_IMAGES[(hash + 1) % PUBLIC_IMAGES.length];
      const gallery = [svc.image, ...(svc.secondaryImages?.slice(0, 2) || [img1, img2])];

      list.push({
        slug,
        keyword: cleanRepeatedWords(`Personal Trainer for ${demo.title} near ${mrt.name}`),
        h1: cleanRepeatedWords(`Personal Trainer for ${demo.title} Near ${mrt.name}`),
        metaTitle: cleanRepeatedWords(`Personal Trainer for ${demo.title} Near ${mrt.name} | PersonalTrainer.sg`),
        metaDesc: cleanRepeatedWords(`Dedicated personal coaching for ${demo.title} near ${mrt.name} station. Tailored workouts, expert instruction & flexible scheduling. Enquire now!`),
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
        heroImage: svc.image || img1,
        galleryImages: gallery,
        introParagraph: cleanRepeatedWords(`PersonalTrainer.sg provides customised personal training at suitable homes, approved condominium gyms, private training facilities and outdoor training areas around ${mrt.name} and surrounding neighbourhoods. Fitness training customized for ${demo.title} convenient to ${mrt.name} on the ${mrt.line}, focused on ${demo.focusArea}.`),
        faqs: [
          {
            question: cleanRepeatedWords(`Are sessions near ${mrt.name} suitable for ${demo.title}?`),
            answer: `Yes, we adapt every session to your exact schedule and physical baseline near ${mrt.name}.`
          },
          {
            question: cleanRepeatedWords(`Where can we train near ${mrt.name}?`),
            answer: `Training can be arranged at suitable home spaces, approved condominium gyms, private training facilities, outdoor training areas, multi storey car park training areas and other suitable training environments across Singapore. The most suitable location can be discussed during your enquiry.`
          },
          ...svc.faqs
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
        const gallery = [svc.image, ...(svc.secondaryImages?.slice(0, 2) || [img1, img2])];

        list.push({
          slug,
          keyword: cleanRepeatedWords(`${intent.label} ${svc.name} in ${area.name} Singapore`),
          h1: cleanRepeatedWords(`${intent.label} ${svc.name} in ${area.name}`),
          metaTitle: cleanRepeatedWords(`${intent.label} ${svc.name} ${area.name} | PersonalTrainer.sg`),
          metaDesc: cleanRepeatedWords(`Find the ${intent.label.toLowerCase()} ${svc.name.toLowerCase()} in ${area.name}, Singapore. ${intent.angle}. Certified 24+ yrs master coach DONN. Book trial session!`),
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
          heroImage: svc.image || img1,
          galleryImages: gallery,
          introParagraph: cleanRepeatedWords(`PersonalTrainer.sg provides customised personal training at suitable homes, approved condominium gyms, private training facilities and outdoor training areas around ${area.name} and surrounding neighbourhoods. Searching for ${intent.label.toLowerCase()} ${svc.name.toLowerCase()} in ${area.name}? We specialize in delivering ${intent.angle.toLowerCase()} tailored to your body and schedule.`),
          faqs: [
            ...svc.faqs,
            {
              question: cleanRepeatedWords(`Why choose PersonalTrainer.sg for ${intent.label.toLowerCase()} ${svc.name.toLowerCase()} in ${area.name}?`),
              answer: `We combine 24+ years of master coaching experience, 100% personalized routines, flexible mobile condo/home scheduling, and structured progress tracking based on your programme, consistency, lifestyle and individual response.`
            },
            {
              question: cleanRepeatedWords(`Where do you conduct sessions in ${area.name}?`),
              answer: `Training can be arranged at suitable home spaces, approved condominium gyms, private training facilities, outdoor training areas, multi storey car park training areas and other suitable training environments across Singapore. The most suitable location can be discussed during your enquiry.`
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
        const gallery = [svc.image, ...(svc.secondaryImages?.slice(0, 2) || [img1, img2])];

        list.push({
          slug,
          keyword: cleanRepeatedWords(`${intent.label} ${svc.name} near ${mrt.name}`),
          h1: cleanRepeatedWords(`${intent.label} ${svc.name} Near ${mrt.name}`),
          metaTitle: cleanRepeatedWords(`${intent.label} ${svc.name} Near ${mrt.name} | PersonalTrainer.sg`),
          metaDesc: cleanRepeatedWords(`${intent.label} ${svc.name.toLowerCase()} steps from ${mrt.name} (${mrt.line}). Mobile condo/home training, customized workout plans & structured progress. Book today!`),
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
          heroImage: svc.image || img1,
          galleryImages: gallery,
          introParagraph: cleanRepeatedWords(`PersonalTrainer.sg provides customised personal training at suitable homes, approved condominium gyms, private training facilities and outdoor training areas around ${mrt.name} and surrounding neighbourhoods. Looking for ${intent.label.toLowerCase()} ${svc.name.toLowerCase()} near ${mrt.name}? Experience elite coaching focusing on ${intent.angle.toLowerCase()} directly in the ${mrt.area} vicinity.`),
          faqs: [
            ...svc.faqs,
            {
              question: cleanRepeatedWords(`Where do we train near ${mrt.name}?`),
              answer: `Training can be arranged at suitable home spaces, approved condominium gyms, private training facilities, outdoor training areas, multi storey car park training areas and other suitable training environments across Singapore. The most suitable location can be discussed during your enquiry.`
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
      const gallery = [condoSvc.image, ...(condoSvc.secondaryImages?.slice(0, 2) || [img1, img2])];

      list.push({
        slug,
        keyword: cleanRepeatedWords(`${intent.label} Condo Personal Trainer at ${condo.name}`),
        h1: cleanRepeatedWords(`${intent.label} Condo Personal Trainer at ${condo.name}`),
        metaTitle: cleanRepeatedWords(`${intent.label} Condo Trainer at ${condo.name} | PersonalTrainer.sg`),
        metaDesc: cleanRepeatedWords(`Elite ${intent.label.toLowerCase()} condo personal trainer at ${condo.name}, ${condo.area} (${condo.district}). Premium 1-on-1 coaching brought to your residence. Inquire now!`),
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
        heroImage: condoSvc.image || img1,
        galleryImages: gallery,
        introParagraph: cleanRepeatedWords(`Exclusive ${intent.label.toLowerCase()} personal coaching designed for residents at ${condo.name} in ${condo.area}. We optimize your condo's private fitness facilities to deliver high-yield results right inside your estate.`),
        faqs: [
          ...condoSvc.faqs,
          {
            question: cleanRepeatedWords(`Do you coach inside ${condo.name}?`),
            answer: `Yes, we conduct private 1-on-1 sessions inside ${condo.name}'s gym or private residence facilities according to approved condominium resident guidelines.`
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
