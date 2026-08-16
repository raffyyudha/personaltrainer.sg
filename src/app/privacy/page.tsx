"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#C5A059] selection:text-black">
      <Navbar />

      <main className="pt-40 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-black font-oswald uppercase tracking-tight mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-8 font-oswald">
          Last Updated: 2026 | PersonalTrainer.sg
        </p>

        <div className="space-y-6 text-gray-200 font-sans text-sm sm:text-base leading-relaxed border-t border-white/10 pt-8">
          <section>
            <h2 className="text-lg font-bold font-oswald text-[#C5A059] uppercase tracking-wide mb-2">
              1. Information Collection
            </h2>
            <p>
              PersonalTrainer.sg collects personal information provided directly by clients during enquiries, trial session bookings, and coaching consultations (such as name, phone number, email address, fitness objectives, and health information relevant to exercise safety).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold font-oswald text-[#C5A059] uppercase tracking-wide mb-2">
              2. Use of Information
            </h2>
            <p>
              The information collected is strictly used to design personalised fitness programmes, evaluate training suitability, schedule sessions, provide progress tracking, and communicate training updates.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold font-oswald text-[#C5A059] uppercase tracking-wide mb-2">
              3. Data Security & Confidentiality
            </h2>
            <p>
              PersonalTrainer.sg is committed to preserving client confidentiality. Your personal and health data will never be sold, rented, or distributed to third-party marketers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold font-oswald text-[#C5A059] uppercase tracking-wide mb-2">
              4. Contact Us
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy, please contact us at{" "}
              <a href="mailto:donn@personaltrainer.sg" className="text-[#C5A059] underline">
                donn@personaltrainer.sg
              </a>{" "}
              or via WhatsApp at +65 9108 1781.
            </p>
          </section>
        </div>
      </main>

      <footer className="bg-[#050505] py-12 px-6 md:px-12 border-t border-white/10 text-center text-xs text-gray-500 font-sans">
        <p>© 2026 PersonalTrainer.sg. All Rights Reserved. Led by Md Salaudin Adam (DONN).</p>
      </footer>
    </div>
  );
}
