"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WA_NUMBER = "6591081781";
const WA_MESSAGE = encodeURIComponent(
  "Hi PersonalTrainer.sg, I am interested in Personal Training. My goal is to improve my fitness and I would like to know more about the training options, availability and Trial Session."
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after slight delay for polish
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with PersonalTrainer.sg on WhatsApp"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      style={{
        position: "fixed",
        bottom: "28px",
        right: "24px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        textDecoration: "none",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.8)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
      }}
    >
      {/* Tooltip label */}
      <span
        style={{
          background: "#25D366",
          color: "#fff",
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "0.05em",
          padding: "6px 14px",
          borderRadius: "999px",
          whiteSpace: "nowrap",
          boxShadow: "0 4px 16px rgba(37,211,102,0.35)",
          opacity: showTooltip ? 1 : 0,
          transform: showTooltip ? "translateX(0)" : "translateX(8px)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
          pointerEvents: "none",
          fontFamily: "sans-serif",
        }}
      >
        Chat with us on WhatsApp
      </span>

      {/* WhatsApp icon button */}
      <div
        style={{
          width: "58px",
          height: "58px",
          borderRadius: "50%",
          background: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 24px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.3)",
          flexShrink: 0,
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "scale(1.12)";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(37,211,102,0.6), 0 2px 8px rgba(0,0,0,0.3)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 24px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.3)";
        }}
      >
        {/* Official WhatsApp SVG Logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="white"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </div>

      {/* Pulse ring animation */}
      <style>{`
        @keyframes wa-pulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.7); opacity: 0; }
        }
      `}</style>
      <div
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: "58px",
          height: "58px",
          borderRadius: "50%",
          background: "#25D366",
          animation: "wa-pulse 2s ease-out infinite",
          zIndex: -1,
        }}
      />
    </a>
  );
}

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // ── Register GSAP plugins ──────────────────────────────────────────────
    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.innerWidth < 768;

    // ── 1. Lenis smooth scrolling (desktop only) ───────────────────────────
    let lenis: InstanceType<typeof Lenis> | null = null;
    let gsapTick: ((time: number) => void) | null = null;

    if (!isMobile) {
      lenis = new Lenis({
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.8,
      });

      // Sync Lenis scroll events → ScrollTrigger position updates
      lenis.on("scroll", () => ScrollTrigger.update());

      // Drive Lenis via GSAP ticker so both share the same RAF loop
      gsapTick = (time: number) => {
        lenis!.raf(time * 1000);
      };
      gsap.ticker.add(gsapTick);
      gsap.ticker.lagSmoothing(0);
    }

    // ── 2. Reveal animations driven by GSAP ScrollTrigger ─────────────────
    const initReveal = () => {
      ScrollTrigger.refresh();

      const startY = isMobile ? 30 : 50;
      const startXLeft = isMobile ? -20 : -65;
      const startXRight = isMobile ? 20 : 65;

      // Mobile: use toggleActions (fire-and-forget) so animation always plays on scroll
      // Desktop: use scrub for smooth parallax feel
      const makeTrigger = (el: HTMLElement, extra?: object) => ({
        trigger: el,
        start: "top 90%",
        end: isMobile ? "top 65%" : "top 60%",
        scrub: isMobile ? false : 1.5,
        toggleActions: isMobile ? "play none none none" : "play none none reverse",
        ...extra,
      });

      // Fade-up (.reveal-hidden)
      document.querySelectorAll<HTMLElement>(".reveal-hidden").forEach((el) => {
        el.style.transition = "none";
        el.style.willChange = "opacity, transform";
        gsap.fromTo(
          el,
          { opacity: 0, y: startY, scale: isMobile ? 0.98 : 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: isMobile ? 0.6 : undefined,
            ease: "power2.out",
            scrollTrigger: makeTrigger(el),
          }
        );
      });

      // Slide-left (.reveal-left-hidden)
      document.querySelectorAll<HTMLElement>(".reveal-left-hidden").forEach((el) => {
        el.style.transition = "none";
        el.style.willChange = "opacity, transform";
        gsap.fromTo(
          el,
          { opacity: 0, x: startXLeft },
          {
            opacity: 1,
            x: 0,
            duration: isMobile ? 0.6 : undefined,
            ease: "power2.out",
            scrollTrigger: makeTrigger(el, { end: isMobile ? "top 65%" : "top 58%" }),
          }
        );
      });

      // Slide-right (.reveal-right-hidden)
      document.querySelectorAll<HTMLElement>(".reveal-right-hidden").forEach((el) => {
        el.style.transition = "none";
        el.style.willChange = "opacity, transform";
        gsap.fromTo(
          el,
          { opacity: 0, x: startXRight },
          {
            opacity: 1,
            x: 0,
            duration: isMobile ? 0.6 : undefined,
            ease: "power2.out",
            scrollTrigger: makeTrigger(el, { end: isMobile ? "top 65%" : "top 58%" }),
          }
        );
      });

      // Subtle lift for bare <section> elements (no custom reveal children)
      document.querySelectorAll<HTMLElement>("section").forEach((sec) => {
        if (sec.querySelector(".reveal-hidden, .reveal-left-hidden, .reveal-right-hidden")) return;
        gsap.fromTo(
          sec,
          { opacity: 0.8, y: isMobile ? 10 : 20 },
          {
            opacity: 1,
            y: 0,
            ease: "power1.out",
            duration: isMobile ? 0.5 : undefined,
            scrollTrigger: {
              trigger: sec,
              start: "top 96%",
              end: "top 78%",
              scrub: isMobile ? false : 1,
              toggleActions: isMobile ? "play none none none" : undefined,
            },
          }
        );
      });
    };

    // Small delay to let React render the full DOM first
    const timer = setTimeout(initReveal, 200);

    return () => {
      clearTimeout(timer);
      if (gsapTick) gsap.ticker.remove(gsapTick);
      if (lenis) lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [pathname]);

  return (
    <div className="antialiased">
      {children}
      <WhatsAppButton />
    </div>
  );
}
