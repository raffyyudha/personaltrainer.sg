import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Home, Dumbbell } from "lucide-react";

export const metadata = {
  title: "404 - Page Not Found | PersonalTrainer.sg",
  description: "The page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: false
  }
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#070707] text-white flex flex-col justify-between selection:bg-[#C5A059] selection:text-black">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-6 py-32">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#800020]/20 border border-[#800020]/40 text-[#C5A059] mb-2">
            <Dumbbell className="w-10 h-10" />
          </div>

          <span className="text-xs font-oswald uppercase tracking-widest text-[#C5A059] block font-bold">
            HTTP 404 Error
          </span>

          <h1 className="text-4xl sm:text-6xl font-black font-oswald uppercase tracking-tight text-white">
            Page Not Found
          </h1>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="btn-primary inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider font-oswald font-bold py-3.5 px-8"
            >
              <Home className="w-4 h-4" /> Return to Homepage
            </Link>

            <Link
              href="/singapore"
              className="btn-outline inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider font-oswald font-bold py-3.5 px-8"
            >
              <ArrowLeft className="w-4 h-4" /> Browse Locations
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-8 border-t border-white/5 text-center text-xs text-gray-400">
        <p>&copy; {new Date().getFullYear()} PersonalTrainer.sg. All rights reserved.</p>
      </footer>
    </div>
  );
}
