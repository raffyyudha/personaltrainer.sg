"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#C5A059] selection:text-black">
      <Navbar />

      <main className="pt-40 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-black font-oswald uppercase tracking-tight mb-6">
          Terms of Service
        </h1>
        <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-8 font-oswald">
          Last Updated: 2026 | PersonalTrainer.sg
        </p>

        <div className="space-y-6 text-gray-200 font-sans text-sm sm:text-base leading-relaxed border-t border-white/10 pt-8">
          <section>
            <h2 className="text-lg font-bold font-oswald text-[#C5A059] uppercase tracking-wide mb-2">
              1. Personal Training Services
            </h2>
            <p>
              PersonalTrainer.sg provides structured personal training, weight loss coaching, strength training, senior fitness, couple training, kickboxing fitness, and lifestyle transformation services led by Md Salaudin Adam (DONN) and qualified trainers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold font-oswald text-[#C5A059] uppercase tracking-wide mb-2">
              2. Trial Session Policy
            </h2>
            <p>
              Trial sessions are approximately 90 minutes (30 minutes of assessment/consultation and 60 minutes of training). The trial session is complimentary if the client signs up for a minimum 12-session package immediately post-trial. If the client chooses not to sign up, the single trial session fee is $144.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold font-oswald text-[#C5A059] uppercase tracking-wide mb-2">
              3. Scheduling & Cancellations
            </h2>
            <p>
              Training sessions are booked in advance by appointment. Clients must provide adequate notice for session rescheduling as communicated during onboarding.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold font-oswald text-[#C5A059] uppercase tracking-wide mb-2">
              4. Contact Us
            </h2>
            <p>
              For enquiries regarding terms of service, please contact{" "}
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
