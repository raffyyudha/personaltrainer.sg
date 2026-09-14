import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strength Training During Medical Weight Loss in Singapore | PersonalTrainer.sg",
  description: "Protect lean muscle, improve posture, metabolism, and body shape during medical weight loss in Singapore. Structured strength coaching led by Md Salaudin Adam (DONN).",
  keywords: [
    "strength training medical weight loss singapore",
    "strength training during ozempic wegovy mounjaro singapore",
    "muscle loss medical weight loss singapore",
    "medical weight loss personal trainer singapore",
    "weight loss personal trainer singapore",
    "preserve muscle weight loss singapore",
    "DONN Elite Performance System",
    "DEPS fitness singapore",
    "Md Salaudin Adam DONN"
  ],
  alternates: {
    canonical: "https://personaltrainer.sg/strength-training-medical-weight-loss-singapore"
  },
  openGraph: {
    title: "Strength Training During Medical Weight Loss in Singapore | PersonalTrainer.sg",
    description: "Support your weight loss journey with structured strength training, safe progression and professional coaching by PersonalTrainer.sg. Maintain muscle, posture & tone.",
    url: "https://personaltrainer.sg/strength-training-medical-weight-loss-singapore",
    siteName: "PersonalTrainer.sg",
    images: [
      {
        url: "https://personaltrainer.sg/weightlosstraining.avif",
        width: 1200,
        height: 630,
        alt: "Strength Training During Medical Weight Loss in Singapore - PersonalTrainer.sg"
      }
    ],
    locale: "en_SG",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "Strength Training During Medical Weight Loss in Singapore | PersonalTrainer.sg",
    description: "Support your weight loss journey with structured strength training, safe progression and professional coaching by PersonalTrainer.sg.",
    images: ["https://personaltrainer.sg/weightlosstraining.avif"]
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

export default function MedicalWeightLossStrengthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
