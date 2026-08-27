import React from "react";
import Metadata from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import {
  SINGAPORE_AREAS,
  SINGAPORE_MRTS,
  SINGAPORE_CONDOS
} from "@/data/pseo/locations";
import { PSEO_SERVICES } from "@/data/pseo/services";
import { PSEO_DEMOGRAPHICS } from "@/data/pseo/demographics";
import { MapPin, Dumbbell, Train, Building, Users, Sparkles, ArrowRight, ShieldCheck, Search } from "lucide-react";

export const metadata = {
  title: "Personal Training Singapore Directory | All Locations, MRTs & Condos",
  description: "Browse certified personal training services across all 55 Singapore planning areas, 145+ MRT stations, and 300+ condominiums. Mobile doorstep, condo gym & studio coaching.",
  alternates: {
    canonical: "https://personaltrainer.sg/singapore"
  }
};

export default function SingaporeDirectoryPage() {
  const services = Object.values(PSEO_SERVICES);
  const demographics = Object.values(PSEO_DEMOGRAPHICS);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white selection:bg-[#D4AF37] selection:text-black">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#181822] via-[#0d0d12] to-[#0a0a0c] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
            <MapPin className="w-3.5 h-3.5" /> Singapore-Wide Coverage
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Personal Trainer <span className="text-[#D4AF37]">Singapore Directory</span>
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Find certified 1-on-1 personal training, weight loss programs, and condo gym coaching across all districts, planning areas, MRT stations, and private residences in Singapore.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4 text-xs font-medium text-gray-400">
            <span className="flex items-center gap-1.5 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> 55 Planning Areas
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Train className="w-4 h-4 text-blue-400" /> 145+ MRT Stations
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Building className="w-4 h-4 text-purple-400" /> 300+ Condominiums
            </span>
          </div>
        </div>
      </section>

      {/* SERVICES MATRIX */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Dumbbell className="w-5 h-5 text-[#D4AF37]" /> Core Fitness Services
            </h2>
            <p className="text-xs text-gray-400">Select a service to find coaching near your area</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.slug}
              className="bg-[#121218] p-6 rounded-2xl border border-white/10 hover:border-[#D4AF37]/40 transition duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="relative h-40 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={svc.image}
                    alt={svc.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-3 text-xs font-bold text-[#D4AF37] uppercase">{svc.name}</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition">
                  {svc.name}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                  {svc.shortDesc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-[#D4AF37]">
                <span>Explore Singapore Areas</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PLANNING AREAS DIRECTORY */}
      <section className="py-16 bg-[#0d0d12] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-400" /> Singapore Planning Areas &amp; Districts
            </h2>
            <p className="text-xs text-gray-400">Search personal trainers by planning district</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {SINGAPORE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/singapore/personal-training-${area.slug}-singapore`}
                className="bg-white/5 hover:bg-[#D4AF37]/10 p-3.5 rounded-xl border border-white/5 hover:border-[#D4AF37]/30 transition group"
              >
                <p className="text-sm font-semibold text-white group-hover:text-[#D4AF37] transition truncate">{area.name}</p>
                <p className="text-[10px] text-gray-400">{area.district} &bull; {area.region}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MRT STATIONS DIRECTORY */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Train className="w-5 h-5 text-blue-400" /> Personal Trainers Near MRT Stations
          </h2>
          <p className="text-xs text-gray-400">Zero-commute coaching walking distance from major stations</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {SINGAPORE_MRTS.map((mrt) => (
            <Link
              key={mrt.slug}
              href={`/singapore/personal-training-near-${mrt.slug}-singapore`}
              className="bg-[#121218] hover:bg-blue-500/10 p-3.5 rounded-xl border border-white/5 hover:border-blue-500/30 transition group"
            >
              <p className="text-xs font-semibold text-white group-hover:text-blue-400 transition truncate">{mrt.name}</p>
              <p className="text-[10px] text-gray-400 truncate">{mrt.area}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CONDO GYM SPECIALISTS DIRECTORY */}
      <section className="py-16 bg-[#0d0d12] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Building className="w-5 h-5 text-purple-400" /> Condominium Fitness Coaching
            </h2>
            <p className="text-xs text-gray-400">Mobile doorstep personal trainer at your private condo gym</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {SINGAPORE_CONDOS.map((condo) => (
              <Link
                key={condo.slug}
                href={`/singapore/home-condo-training-${condo.slug}-singapore`}
                className="bg-white/5 hover:bg-purple-500/10 p-3.5 rounded-xl border border-white/5 hover:border-purple-500/30 transition group"
              >
                <p className="text-xs font-semibold text-white group-hover:text-purple-400 transition truncate">{condo.name}</p>
                <p className="text-[10px] text-gray-400">{condo.area} ({condo.district})</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-black border-t border-white/10 text-gray-400 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <p className="text-white font-semibold">PersonalTrainer.sg &bull; Singapore Personal Training Directory</p>
          <p className="text-gray-500 text-xs">&copy; {new Date().getFullYear()} PersonalTrainer.sg. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
