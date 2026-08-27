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
  title: "Personal Trainer Singapore | PersonalTrainer.sg | Md Salaudin Adam (DONN)",
  description: "PersonalTrainer.sg provides premium Personal Training in Singapore for Weight Loss, Strength Training, Senior Fitness, Couple Training, Kickboxing Fitness and Lifestyle Transformation. Led by Md Salaudin Adam (DONN), Founder and Fitness Director, Trusted in Singapore Since 2002 with 24 Years of Coaching Experience.",
  verification: {
    google: "google9ff6ae450a261cc5"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
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
