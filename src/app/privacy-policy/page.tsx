"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Lock, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

export default function PrivacyPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.personaltrainer.sg/privacy-policy#webpage",
        "url": "https://www.personaltrainer.sg/privacy-policy",
        "name": "Privacy Policy | PersonalTrainer.sg | Singapore PDPA Compliant",
        "description": "Privacy Policy for PersonalTrainer.sg compliant with the Singapore Personal Data Protection Act (PDPA).",
        "isPartOf": {
          "@id": "https://www.personaltrainer.sg/#website"
        },
        "creator": {
          "@type": "Person",
          "@id": "https://raffyyudha.com/#person",
          "name": "Raffy Yudha",
          "url": "https://raffyyudha.com",
          "jobTitle": "High-Converting Web Designer",
          "sameAs": ["https://raffyyudha.com"]
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#C5A059] selection:text-black">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="pt-36 sm:pt-40 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-10 pb-8 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C5A059]/10 border border-[#C5A059]/30 rounded-full text-[#C5A059] text-xs font-oswald uppercase tracking-widest mb-4">
            <ShieldCheck size={14} />
            <span>Singapore PDPA Compliant</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-oswald uppercase tracking-tight text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider font-oswald">
            Last Updated: 2026 | PersonalTrainer.sg &bull; Led by Md Salaudin Adam (DONN)
          </p>
        </div>

        {/* Content Container */}
        <div className="space-y-8 text-gray-300 font-sans text-sm sm:text-base leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold font-oswald text-[#C5A059] uppercase tracking-wide mb-3 flex items-center gap-2">
              <span>1. Introduction & Commitment to PDPA</span>
            </h2>
            <p className="mb-3">
              PersonalTrainer.sg (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), led by Md Salaudin Adam (DONN), respects your privacy and is dedicated to safeguarding your personal data in accordance with the Singapore Personal Data Protection Act 2012 (&quot;PDPA&quot;).
            </p>
            <p>
              This Privacy Policy explains how we collect, use, disclose, process, and protect personal and health-related data collected from clients and website visitors who interact with our personal training services, trial sessions, and digital consultations across Singapore.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold font-oswald text-[#C5A059] uppercase tracking-wide mb-3">
              2. Personal Data We Collect
            </h2>
            <p className="mb-3">
              Depending on the nature of your interaction with us, we may collect the following categories of personal information:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>
                <strong className="text-white">Identity & Contact Details:</strong> Full name, telephone/WhatsApp number, email address, gender, age or date of birth, and emergency contact information.
              </li>
              <li>
                <strong className="text-white">Health, Medical & Biometric Data:</strong> Physical Activity Readiness Questionnaire (PAR-Q) details, injury history, medical conditions, cardiovascular clearance, InBody scan measurements, body weight, body composition parameters, and ongoing fitness assessment logs necessary for safe personal training.
              </li>
              <li>
                <strong className="text-white">Training & Performance Data:</strong> Workout history, strength benchmarks, nutrition check-ins, and photographic or video progress records (collected only with your prior explicit consent).
              </li>
              <li>
                <strong className="text-white">Billing & Payment Information:</strong> Payment transaction receipts, package records, and preferred billing methods. We do not store sensitive credit card numbers directly on our web servers.
              </li>
              <li>
                <strong className="text-white">Technical & Usage Data:</strong> Internet protocol (IP) address, browser type, device information, and interaction records collected automatically when navigating our platform.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold font-oswald text-[#C5A059] uppercase tracking-wide mb-3">
              3. Purposes of Collection, Use & Disclosure
            </h2>
            <p className="mb-3">
              PersonalTrainer.sg collects and utilizes your personal data strictly for legitimate fitness coaching and operational purposes, including:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              {[
                "Customizing individualized fitness & strength training regimens",
                "Screening physical safety and evaluating medical readiness",
                "Scheduling coaching sessions and trial assessments",
                "Maintaining client communication via WhatsApp, call, or email",
                "Monitoring body composition and physical progress over time",
                "Emergency response coordination if a medical incident occurs",
                "Processing service fees and invoicing for training packages",
                "Complying with Singapore legal and regulatory obligations"
              ].map((purpose, index) => (
                <div key={index} className="flex items-start gap-2.5 p-3 bg-white/5 border border-white/10 rounded">
                  <CheckCircle2 size={16} className="text-[#C5A059] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-gray-200">{purpose}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">
              We do not sell, trade, or rent client personal data to commercial marketers or unrelated third parties.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold font-oswald text-[#C5A059] uppercase tracking-wide mb-3">
              4. Client Consent & Withdrawal of Consent
            </h2>
            <p className="mb-3">
              By submitting an online enquiry, contacting us via WhatsApp, booking a Trial Session, or engaging our personal training services, you consent to the collection and use of your personal data as outlined in this policy.
            </p>
            <p>
              You have the right to withdraw your consent at any time by giving reasonable notice in writing to our Data Protection Officer. Please note that withdrawing consent for vital health or contact data may prevent us from safely delivering one-on-one personal training or assessing physical exercise readiness.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-bold font-oswald text-[#C5A059] uppercase tracking-wide mb-3">
              5. Protection & Security Safeguards
            </h2>
            <p>
              To safeguard your personal data from unauthorized access, collection, use, disclosure, copying, modification, or accidental loss, PersonalTrainer.sg maintains rigorous technical, administrative, and physical security measures. Access to client fitness records and health screening submissions is strictly restricted to authorized coaching personnel with a legitimate need-to-know.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-bold font-oswald text-[#C5A059] uppercase tracking-wide mb-3">
              6. Retention & Disposal of Personal Data
            </h2>
            <p>
              We retain personal data only for as long as is necessary to fulfill the coaching and business purposes for which it was collected, or as required by applicable Singapore laws and accounting standards. When data is no longer necessary, it is securely deleted, purged, or permanently anonymized.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-bold font-oswald text-[#C5A059] uppercase tracking-wide mb-3">
              7. Access and Correction Rights
            </h2>
            <p>
              Under the PDPA, you are entitled to request access to your personal data held by us and request corrections if there are any errors or omissions. To submit an access or correction request, please reach out to our Data Protection Officer via the contact details provided below. We will respond within a reasonable timeframe in compliance with statutory requirements.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-bold font-oswald text-[#C5A059] uppercase tracking-wide mb-3">
              8. Cross-Border Transfers
            </h2>
            <p>
              If any personal data is transferred or hosted outside of Singapore (for example, via encrypted cloud hosting or enterprise communication infrastructure), we take appropriate steps to ensure the recipient provides a standard of protection comparable to the requirements of the Singapore PDPA.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-bold font-oswald text-[#C5A059] uppercase tracking-wide mb-3">
              9. Cookies & Website Analytics
            </h2>
            <p>
              Our website uses performance and analytics cookies to optimize page loading speeds, evaluate site functionality, and understand visitor interactions. You may configure your web browser to decline cookies, although some interactive features of our scheduling platform may function with reduced capability.
            </p>
          </section>

          {/* Section 10 */}
          <section className="bg-white/5 border border-white/10 p-6 rounded-lg">
            <h2 className="text-xl font-bold font-oswald text-[#C5A059] uppercase tracking-wide mb-4 flex items-center gap-2">
              <Lock size={18} />
              <span>10. Data Protection Officer (DPO) Contact</span>
            </h2>
            <p className="text-sm text-gray-300 mb-4">
              If you have questions, feedback, or requests concerning your personal data or our PDPA compliance, please contact our designated Data Protection Officer:
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-gray-200">
              <div className="flex items-center gap-3">
                <span className="font-oswald uppercase tracking-wider text-[#C5A059] min-w-[120px]">
                  Designation:
                </span>
                <span>Data Protection Officer &bull; PersonalTrainer.sg</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-oswald uppercase tracking-wider text-[#C5A059] min-w-[120px]">
                  Fitness Director:
                </span>
                <span>Md Salaudin Adam (DONN)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} className="text-[#C5A059] shrink-0" />
                <a
                  href="mailto:donn@personaltrainer.sg"
                  className="hover:text-[#C5A059] underline transition-colors"
                >
                  donn@personaltrainer.sg
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-[#C5A059] shrink-0" />
                <a
                  href="https://wa.me/6591081781"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C5A059] underline transition-colors"
                >
                  WhatsApp: +65 9108 1781
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={15} className="text-[#C5A059] shrink-0" />
                <span>Singapore &bull; Private training arranged nationwide</span>
              </div>
            </div>
          </section>

          {/* Section: Platform Architecture & Digital Security */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-base sm:text-lg font-bold font-oswald text-[#C5A059] uppercase tracking-wide mb-2">
              Platform Architecture & Digital Security
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-sans">
              To ensure fast load times, encrypted form submissions, and seamless mobile scheduling for fitness clients across Singapore, this digital platform is engineered with{" "}
              <a
                href="https://raffyyudha.com"
                className="underline hover:text-[#C5A059] transition-colors"
              >
                custom website design by Raffy Yudha
              </a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
