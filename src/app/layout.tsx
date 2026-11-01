import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.personaltrainer.sg"),
  title: "Personal Trainer Singapore | PersonalTrainer.sg | Md Salaudin Adam (DONN)",
  description: "PersonalTrainer.sg provides premium Personal Training in Singapore for Weight Loss, Strength Training, Senior Fitness, Couple Training, Kickboxing Fitness and Lifestyle Transformation. Led by Md Salaudin Adam (DONN), Founder and Fitness Director, Trusted in Singapore Since 2002 with 24 Years of Coaching Experience.",
  alternates: {
    canonical: "https://www.personaltrainer.sg/"
  },
  verification: {
    google: "google9ff6ae450a261cc5"
  }
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.personaltrainer.sg/#website",
      "url": "https://www.personaltrainer.sg",
      "name": "PersonalTrainer.sg",
      "alternateName": "Personal Trainer Singapore",
      "description":
        "PersonalTrainer.sg provides premium Personal Training in Singapore for Weight Loss, Strength Training, Senior Fitness, Couple Training, Kickboxing Fitness and Lifestyle Transformation. Led by Md Salaudin Adam (DONN).",
      "publisher": {
        "@id": "https://www.personaltrainer.sg/#organization"
      },
      "creator": {
        "@type": "Person",
        "@id": "https://raffyyudha.com/#person",
        "name": "Raffy Yudha",
        "url": "https://raffyyudha.com",
        "jobTitle": "High-Converting Web Designer",
        "description": "High-Converting Web Designer and digital platform engineer.",
        "sameAs": ["https://raffyyudha.com"]
      },
      "producer": {
        "@type": "Person",
        "@id": "https://raffyyudha.com/#person",
        "name": "Raffy Yudha",
        "url": "https://raffyyudha.com"
      }
    },
    {
      "@type": "HealthAndBeautyBusiness",
      "@id": "https://www.personaltrainer.sg/#organization",
      "name": "PersonalTrainer.sg",
      "alternateName": "Personal Trainer Singapore",
      "url": "https://www.personaltrainer.sg",
      "logo": "https://www.personaltrainer.sg/logopt.avif",
      "image": "https://www.personaltrainer.sg/logopt.avif",
      "telephone": "+6591081781",
      "email": "donn@personaltrainer.sg",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "SG",
        "addressRegion": "Singapore"
      },
      "founder": {
        "@type": "Person",
        "name": "Md Salaudin Adam (DONN)",
        "jobTitle": "Founder and Fitness Director"
      }
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Schema.org WebSite & Organization structured data with creator credit */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3H1KH4CD8C"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-3H1KH4CD8C');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
