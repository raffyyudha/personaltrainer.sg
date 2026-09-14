import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Trainer Cost Singapore 2026 | Rates & Packages | PersonalTrainer.sg",
  description: "Complete guide to personal trainer cost in Singapore 2026. Explore trial session fees ($144 single / $216 couple, fully waivable), starter rates from $80/hr, and packages led by Md Salaudin Adam (DONN) with 24 years coaching experience.",
  keywords: [
    "personal trainer cost singapore",
    "personal trainer cost singapore 2026",
    "personal training rates singapore",
    "personal trainer price singapore",
    "personal training packages singapore",
    "trial session personal trainer singapore",
    "cheap personal trainer singapore",
    "private gym trainer singapore",
    "condo personal trainer cost singapore",
    "Md Salaudin Adam DONN"
  ],
  alternates: {
    canonical: "https://personaltrainer.sg/personal-trainer-cost-singapore"
  },
  openGraph: {
    title: "Personal Trainer Cost Singapore 2026 | PersonalTrainer.sg",
    description: "Understand personal training rates, trial session fees and package options with PersonalTrainer.sg, Trusted in Singapore Since 2002. 24 Years of Coaching Experience.",
    url: "https://personaltrainer.sg/personal-trainer-cost-singapore",
    siteName: "PersonalTrainer.sg",
    images: [
      {
        url: "https://personaltrainer.sg/onepersonaltraining.avif",
        width: 1200,
        height: 630,
        alt: "Personal Trainer Cost in Singapore 2026 - PersonalTrainer.sg"
      }
    ],
    locale: "en_SG",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Trainer Cost Singapore 2026 | PersonalTrainer.sg",
    description: "Understand personal training rates, trial session fees and package options with PersonalTrainer.sg, Trusted in Singapore Since 2002.",
    images: ["https://personaltrainer.sg/onepersonaltraining.avif"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function PersonalTrainerCostLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
