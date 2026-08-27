import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import RateCardsGrid from "@/components/RateCardsGrid";
import TikTokIcon from "@/components/TikTokIcon";
import {
  getPseoPageBySlug,
  getPseoSlugsChunk,
  getPseoTotalCount
} from "@/data/pseo/matrix";
import { PseoService } from "@/data/pseo/services";
import { PseoDemographic } from "@/data/pseo/demographics";

interface VariantProps {
  h1: string;
  service: PseoService;
  locationName: string;
  locationType: "Planning Area" | "MRT Station" | "Condominium";
  district: string;
  region: string;
  landmarks: string[];
  heroImage: string;
  galleryImages: string[];
  introParagraph: string;
  whatsappUrl: string;
  demographic?: PseoDemographic;
  intentModifier?: string;
}
import {
  Check,
  CheckCircle,
  MapPin,
  Dumbbell,
  ShieldCheck,
  Award,
  ArrowRight,
  Star,
  Users,
  Calendar,
  Phone,
  Mail,
  Facebook,
  Instagram,
  HelpCircle,
  ChevronRight,
  Sparkles,
  Zap,
  Activity,
  Heart,
  Target,
  Clock
} from "lucide-react";

export const dynamicParams = true;

// Pre-render top 1,000 pages during build, while remaining 18,000+ render on-demand (ISR)
export async function generateStaticParams() {
  const topSlugs = getPseoSlugsChunk(0, 1000);
  return topSlugs.map(slug => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pageData = getPseoPageBySlug(slug);

  if (!pageData) {
    return {
      title: "Page Not Found | PersonalTrainer.sg"
    };
  }

  const canonicalUrl = `https://personaltrainer.sg/singapore/${pageData.slug}`;

  return {
    title: pageData.metaTitle,
    description: pageData.metaDesc,
    keywords: [
      pageData.keyword,
      `${pageData.service.name} Singapore`,
      `personal trainer ${pageData.locationName}`,
      `fitness coach ${pageData.district}`,
      `condo gym trainer ${pageData.locationName}`,
      "DONN personal trainer singapore"
    ],
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: pageData.metaTitle,
      description: pageData.metaDesc,
      url: canonicalUrl,
      siteName: "PersonalTrainer.sg",
      images: [
        {
          url: pageData.heroImage,
          width: 1200,
          height: 630,
          alt: pageData.keyword
        }
      ],
      locale: "en_SG",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: pageData.metaTitle,
      description: pageData.metaDesc,
      images: [pageData.heroImage]
    }
  };
}

export default async function PseoSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const pageData = getPseoPageBySlug(slug);

  if (!pageData) {
    notFound();
  }

  const {
    keyword,
    h1,
    service,
    locationName,
    locationType,
    district,
    region,
    landmarks,
    demographic,
    intentModifier,
    heroImage,
    galleryImages,
    introParagraph,
    faqs,
    whatsappUrl,
    layoutVariant,
    accentColor
  } = pageData;

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ExerciseGym",
        "@id": `https://personaltrainer.sg/singapore/${slug}#gym`,
        "name": `PersonalTrainer.sg - ${locationName}`,
        "description": pageData.metaDesc,
        "url": `https://personaltrainer.sg/singapore/${slug}`,
        "telephone": "+6591081781",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": locationName,
          "addressRegion": region,
          "addressCountry": "SG"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "1.3521",
          "longitude": "103.8198"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "06:00",
            "closes": "22:00"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": service.name,
        "provider": {
          "@type": "LocalBusiness",
          "name": "PersonalTrainer.sg",
          "telephone": "+6591081781"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": `${locationName}, Singapore`
        },
        "description": introParagraph
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://personaltrainer.sg"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Singapore Locations",
            "item": "https://personaltrainer.sg/singapore"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": h1,
            "item": `https://personaltrainer.sg/singapore/${slug}`
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white selection:bg-[#D4AF37] selection:text-black">
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      {/* BREADCRUMB NAVIGATION */}
      <div className="pt-24 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/5">
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
          <Link href="/singapore" className="hover:text-white transition">Singapore Directory</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
          <span className="text-[#D4AF37] font-medium truncate max-w-[200px] sm:max-w-none">{locationName}</span>
        </nav>
      </div>

      {/* DYNAMIC LAYOUT VARIANT RENDERER */}
      {layoutVariant === "variant-a" && (
        <VariantA
          h1={h1}
          service={service}
          locationName={locationName}
          locationType={locationType}
          district={district}
          region={region}
          landmarks={landmarks}
          heroImage={heroImage}
          galleryImages={galleryImages}
          introParagraph={introParagraph}
          whatsappUrl={whatsappUrl}
          demographic={demographic}
          intentModifier={intentModifier}
        />
      )}

      {layoutVariant === "variant-b" && (
        <VariantB
          h1={h1}
          service={service}
          locationName={locationName}
          locationType={locationType}
          district={district}
          region={region}
          landmarks={landmarks}
          heroImage={heroImage}
          galleryImages={galleryImages}
          introParagraph={introParagraph}
          whatsappUrl={whatsappUrl}
          demographic={demographic}
          intentModifier={intentModifier}
        />
      )}

      {layoutVariant === "variant-c" && (
        <VariantC
          h1={h1}
          service={service}
          locationName={locationName}
          locationType={locationType}
          district={district}
          region={region}
          landmarks={landmarks}
          heroImage={heroImage}
          galleryImages={galleryImages}
          introParagraph={introParagraph}
          whatsappUrl={whatsappUrl}
          demographic={demographic}
          intentModifier={intentModifier}
        />
      )}

      {layoutVariant === "variant-d" && (
        <VariantD
          h1={h1}
          service={service}
          locationName={locationName}
          locationType={locationType}
          district={district}
          region={region}
          landmarks={landmarks}
          heroImage={heroImage}
          galleryImages={galleryImages}
          introParagraph={introParagraph}
          whatsappUrl={whatsappUrl}
          demographic={demographic}
          intentModifier={intentModifier}
        />
      )}

      {/* COMMON RATES SECTION */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0c] via-[#121216] to-[#0a0a0c] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Personal Training Packages for {locationName}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            No hidden gym membership fees or lock-in contracts. Invest in structured coaching with high ROI for your body, health, and energy.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RateCardsGrid />
        </div>
      </section>

      {/* COMMON FAQ SECTION */}
      <section className="py-20 bg-[#0c0c10] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 text-gray-300 border border-white/10 mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" /> Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-bold text-white mb-3">
              Questions About Personal Training in {locationName}
            </h2>
            <p className="text-gray-400 text-sm">
              Everything you need to know before booking your trial session.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37]/40 transition duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-2 flex items-start gap-3">
                  <span className="text-[#D4AF37] font-bold text-sm bg-[#D4AF37]/10 w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    Q
                  </span>
                  {faq.question}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-9">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL WHATSAPP CTA BAR */}
      <section className="py-16 bg-gradient-to-r from-[#181820] via-[#0d0d12] to-[#181820] border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Start Your Transformation in {locationName}?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base">
            Book your initial consultation and physical assessment with Master Trainer DONN. Available for mobile home, condo gym, and private studio sessions in {locationName}.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-green-500/20 hover:scale-105 transition transform duration-300 text-lg"
            >
              <Phone className="w-5 h-5 fill-current" />
              WhatsApp Enquiry for {locationName}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium py-4 px-8 rounded-full transition text-lg"
            >
              Book Online Trial <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-black border-t border-white/10 text-gray-400 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold text-base mb-1">PersonalTrainer.sg</p>
            <p>Singapore&apos;s Elite Personal Training Service &bull; Led by Md Salaudin Adam (DONN)</p>
            <p className="text-gray-500 text-xs mt-1">&copy; {new Date().getFullYear()} PersonalTrainer.sg. All rights reserved. Servicing {locationName} &amp; all districts in Singapore.</p>
          </div>
          <div className="flex items-center space-x-6 text-gray-400">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms &amp; Conditions</Link>
            <Link href="/singapore" className="hover:text-white transition">All Singapore Locations</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==========================================
// LAYOUT VARIANT A (Hero Gradient + Features Grid)
// ==========================================
function VariantA({
  h1,
  service,
  locationName,
  locationType,
  district,
  landmarks,
  heroImage,
  galleryImages,
  introParagraph,
  whatsappUrl,
  demographic,
  intentModifier
}: VariantProps) {
  return (
    <div>
      {/* HERO A */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-[#14141c] via-[#0a0a0c] to-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                <MapPin className="w-3.5 h-3.5" /> {locationType}: {locationName} ({district})
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {h1}
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                {introParagraph}
              </p>
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#c49f27] text-black font-bold py-3.5 px-7 rounded-full shadow-lg shadow-[#D4AF37]/20 transition transform hover:-translate-y-0.5"
                >
                  Book Trial in {locationName} <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-xs text-gray-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> 24+ Years Certified Experience
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <Image
                  src={heroImage}
                  alt={h1}
                  width={600}
                  height={700}
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-wide">Featured Service</p>
                  <p className="text-sm font-semibold text-white">{service.name} in {locationName}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="bg-[#121218] border-y border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-extrabold text-[#D4AF37]">24+</div>
            <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white">100%</div>
            <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Custom Workouts</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-[#D4AF37]">1,500+</div>
            <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Clients Transformed</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white">5.0 ★</div>
            <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Client Reviews</div>
          </div>
        </div>
      </div>

      {/* SERVICE DEEP-DIVE & EXERCISES */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Why Choose {service.name} in {locationName}?
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              {service.fullDesc}
            </p>
            <div className="space-y-3 pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">Key Benefits &amp; Features</p>
              {service.keyBenefits.map((benefit: string, i: number) => (
                <div key={i} className="flex items-start gap-3 text-sm text-gray-200">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#121218] p-8 rounded-2xl border border-white/10 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Dumbbell className="w-5 h-5 text-[#D4AF37]" /> Sample Workout Routine for {locationName}
            </h3>
            <p className="text-xs text-gray-400">
              Exercises are modified according to your personal fitness level, injuries, and available condo/home gym equipment.
            </p>
            <div className="space-y-3">
              {service.sampleExercises.map((ex: string, i: number) => (
                <div key={i} className="bg-white/5 p-3.5 rounded-xl border border-white/5 flex items-center gap-3 text-sm font-medium text-gray-200">
                  <span className="w-6 h-6 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span>{ex}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SHOWCASE */}
      <section className="py-16 bg-[#0c0c10] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white">Training Sessions in Action</h3>
            <p className="text-xs text-gray-400 mt-1">Real clients, real environment around {landmarks[0] || locationName}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((imgUrl: string, idx: number) => (
              <div key={idx} className="relative h-64 rounded-2xl overflow-hidden border border-white/10 shadow-lg group">
                <Image
                  src={imgUrl}
                  alt={`${h1} gallery ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 p-4 flex items-end">
                  <span className="text-xs font-medium text-white">{service.name} Coaching</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ==========================================
// LAYOUT VARIANT B (Split Screen Modern Hero)
// ==========================================
function VariantB({
  h1,
  service,
  locationName,
  locationType,
  district,
  landmarks,
  heroImage,
  galleryImages,
  introParagraph,
  whatsappUrl,
  demographic,
  intentModifier
}: VariantProps) {
  return (
    <div>
      {/* HERO B */}
      <section className="relative pt-12 pb-20 bg-[#0d0d12] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#181824] via-[#12121a] to-[#181824] rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Zap className="w-3.5 h-3.5" /> High-Yield Personal Coaching
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                  {h1}
                </h1>
                <p className="text-gray-300 text-base leading-relaxed">
                  {introParagraph}
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-8 rounded-full shadow-lg transition"
                  >
                    WhatsApp Enquire Now <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-white/15 h-80 sm:h-96">
                  <Image
                    src={heroImage}
                    alt={h1}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-xs font-bold text-[#D4AF37] uppercase">{locationName} &bull; {district}</p>
                    <p className="text-base font-bold text-white">{service.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TARGET CLIENT CHECKLIST */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121218] rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">
            Who is this program suitable for in {locationName}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.suitableFor.map((item: string, i: number) => (
              <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-start gap-3">
                <Check className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COACH SPOTLIGHT */}
      <section className="py-16 bg-[#0a0a0c] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <div className="relative h-96 rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/donn-flexing.avif"
                  alt="MD Salaudin Adam DONN Personal Trainer Singapore"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">Head Coach &amp; Founder</span>
              <h3 className="text-3xl font-extrabold text-white">Md Salaudin Adam (DONN)</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                With 24 years of experience coaching clients across Singapore, DONN specializes in periodized strength training, body transformations, and biomechanical posture optimization. Trusted by executives, seniors, and couples in {locationName}.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-gray-400 pt-2">
                <span className="bg-white/5 px-3 py-1.5 rounded-full border border-white/10">24+ Yrs Singapore Experience</span>
                <span className="bg-white/5 px-3 py-1.5 rounded-full border border-white/10">Certified Master Fitness Director</span>
                <span className="bg-white/5 px-3 py-1.5 rounded-full border border-white/10">DEPS Elite Performance System</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ==========================================
// LAYOUT VARIANT C (Minimalist Dark + Interactive Calculator Accent)
// ==========================================
function VariantC({
  h1,
  service,
  locationName,
  locationType,
  district,
  landmarks,
  heroImage,
  galleryImages,
  introParagraph,
  whatsappUrl,
  demographic,
  intentModifier
}: VariantProps) {
  return (
    <div>
      {/* HERO C */}
      <section className="relative pt-16 pb-24 bg-[#08080a] overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Activity className="w-3.5 h-3.5" /> Direct Doorstep &amp; Condo Coaching
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            {h1}
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            {introParagraph}
          </p>
          <div className="pt-4 flex justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#b8972e] text-black font-extrabold py-4 px-9 rounded-full shadow-xl transition transform hover:scale-105"
            >
              Get Free Consultation in {locationName} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* BLUEPRINT SYSTEM */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#101014] p-8 sm:p-12 rounded-3xl border border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white">DONN’s Elite Performance System (DEPS)</h2>
            <p className="text-gray-400 text-sm mt-2">
              Our 4-step framework tailored for your sessions in {locationName}.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5 space-y-3">
              <span className="text-xs font-bold text-[#D4AF37] uppercase">Step 01</span>
              <h3 className="text-lg font-semibold text-white">Biomechanical Screen</h3>
              <p className="text-xs text-gray-400">Postural assessment, joint mobility check, and baseline strength log.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5 space-y-3">
              <span className="text-xs font-bold text-[#D4AF37] uppercase">Step 02</span>
              <h3 className="text-lg font-semibold text-white">Custom Program</h3>
              <p className="text-xs text-gray-400">Targeted exercise prescription based on your condo/home equipment.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5 space-y-3">
              <span className="text-xs font-bold text-[#D4AF37] uppercase">Step 03</span>
              <h3 className="text-lg font-semibold text-white">Nutritional Target</h3>
              <p className="text-xs text-gray-400">Caloric and macronutrient strategy designed for local SG food choices.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5 space-y-3">
              <span className="text-xs font-bold text-[#D4AF37] uppercase">Step 04</span>
              <h3 className="text-lg font-semibold text-white">Weekly Tracking</h3>
              <p className="text-xs text-gray-400">Progressive overload tracking to guarantee physical changes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ==========================================
// LAYOUT VARIANT D (Showcase Visual Hero + Comparative Chart)
// ==========================================
function VariantD({
  h1,
  service,
  locationName,
  locationType,
  district,
  landmarks,
  heroImage,
  galleryImages,
  introParagraph,
  whatsappUrl,
  demographic,
  intentModifier
}: VariantProps) {
  return (
    <div>
      {/* HERO D */}
      <section className="relative pt-12 pb-20 bg-gradient-to-b from-[#1a1024] via-[#0a0a0c] to-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Target className="w-3.5 h-3.5" /> High Precision Fitness
              </span>
              <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                {h1}
              </h1>
              <p className="text-gray-300 text-base leading-relaxed">
                {introParagraph}
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#c49f27] text-black font-bold py-3.5 px-8 rounded-full shadow-lg"
              >
                Inquire for {locationName} <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10">
                  <Image src={heroImage} alt={h1} fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10">
                  <Image src={galleryImages[1] || heroImage} alt={h1} fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARATIVE MATRIX */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121218] p-8 rounded-3xl border border-white/10">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Why PersonalTrainer.sg vs Commercial Gyms
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-300">
              <thead>
                <tr className="border-b border-white/10 text-xs font-semibold uppercase text-gray-400">
                  <th className="py-3 px-4">Feature</th>
                  <th className="py-3 px-4 text-[#D4AF37]">PersonalTrainer.sg</th>
                  <th className="py-3 px-4">Generic Commercial Gyms</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Location Flexibility</td>
                  <td className="py-3.5 px-4 text-emerald-400 font-medium">Your Home, Condo, or Partner Gym in {locationName}</td>
                  <td className="py-3.5 px-4 text-gray-500">Fixed Crowded Gym Floor Only</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Trainer Experience</td>
                  <td className="py-3.5 px-4 text-emerald-400 font-medium">24+ Years Master Director Coaching</td>
                  <td className="py-3.5 px-4 text-gray-500">Junior Trainers / High Turnover</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Program Personalization</td>
                  <td className="py-3.5 px-4 text-emerald-400 font-medium">100% Customized Biomechanical Plan</td>
                  <td className="py-3.5 px-4 text-gray-500">Generic Cookie-Cutter Routines</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Accountability</td>
                  <td className="py-3.5 px-4 text-emerald-400 font-medium">Direct WhatsApp Support &amp; Bio Tracking</td>
                  <td className="py-3.5 px-4 text-gray-500">No Check-ins Outside Sessions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
