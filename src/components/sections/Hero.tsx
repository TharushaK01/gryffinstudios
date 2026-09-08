"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const projects = [
  { name: "LEAF", href: "#" },
  { name: "BOILING PROXIES", href: "#" },
  { name: "KESS CARE", href: "#" },
  { name: "SEASHORE GARDEN", href: "#" },
  { name: "PROXIFY", href: "#" },
  { name: "PREMADASA HOLDINGS", href: "#" },
];

const features = [
  {
    titleWhite: "ORGANIZED",
    titleCyan: "REQUESTS",
    description:
      "MANAGE ALL YOUR DESIGN AND DEVELOPMENT TASKS IN ONE PLACE, CLEARLY AND EFFICIENTLY.",
  },
  {
    titleWhite: "FLAT",
    titleCyan: "MONTHLY FEE",
    description:
      "ONE PREDICTABLE PRICE WITH NO HIDDEN COSTS. SCALE UP OR DOWN ANYTIME.",
  },
  {
    titleWhite: "HIGH QUALITY",
    titleCyan: "RESULTS",
    description:
      "MOST REQUESTS DELIVERED IN 2-5 DAYS, CRAFTED TO PERFORM AND IMPRESS.",
  },
];

const services = [
  {
    titleWhite: "DESIGN AND",
    titleCyan: "DEVELOPMENT",
    description:
      "WE HAVE SEVERAL OFFERS RELATED TO UI/UX DESIGN, SUCH AS WEBSITE DESIGN, MOBILEAPP DESIGN, DASHBOARD DESIGN, PROTOTYPING AND WIREFRAME.",
    tags: ["UI/UX DESIGN", "ONLINE STORES", "DASHBOARD"],
  },
  {
    titleWhite: "BRANDING AND",
    titleCyan: "IDENTITY",
    description:
      "CRAFTING DISTINCT VISUAL IDENTITIES, LOGO SYSTEMS, BRAND GUIDELINES, AND DIGITAL ASSETS THAT SET YOUR BUSINESS APART.",
    tags: ["LOGOS", "BRAND BOOK", "ASSETS"],
  },
  {
    titleWhite: "FULL STACK",
    titleCyan: "SOLUTIONS",
    description:
      "CUSTOM WEB APPLICATION DEVELOPMENT, API INTEGRATIONS, FAST PERFORMANCE OPTIMIZATION, AND RELIABLE INFRASTRUCTURE.",
    tags: ["NEXT.JS", "TAILWIND", "API BUILD"],
  },
  {
    titleWhite: "SEO & DIGITAL",
    titleCyan: "MARKETING",
    description:
      "STRATEGIC CONTENT OPTIMIZATION, TECHNICAL SEO AUDITS, AND CAMPAIGN DESIGN TO SCALE YOUR AUDIENCE ORGANICALLY.",
    tags: ["SEO AUDIT", "ANALYTICS", "GROWTH"],
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const getCardStyle = (index: number) => {
    const total = services.length;
    const diff = (index - activeIndex + total) % total;

    if (diff === 0) {
      // Center Active Card - bigger + glass effect
      return "opacity-100 scale-110 z-20 border-cyan-400/50 bg-white/[0.04] shadow-[0_0_40px_rgba(0,200,255,0.12)] translate-x-0";
    } else if (diff === 1 || diff === -(total - 1)) {
      // Right Side Card
      return "opacity-25 scale-90 z-10 border-white/10 bg-white/[0.02] translate-x-[72%] sm:translate-x-[82%] pointer-events-none";
    } else if (diff === total - 1 || diff === -1) {
      // Left Side Card
      return "opacity-25 scale-90 z-10 border-white/10 bg-white/[0.02] -translate-x-[72%] sm:-translate-x-[82%] pointer-events-none";
    } else {
      return "opacity-0 scale-75 z-0 pointer-events-none hidden";
    }
  };

  return (
    <div className="relative w-full bg-black text-white">
      <section className="relative min-h-screen w-full flex flex-col justify-between items-center pt-36 pb-12 overflow-hidden bg-black text-white">
        {/* Central Neon Beam */}
        <div className="absolute inset-x-0 top-0 h-full pointer-events-none z-0 overflow-hidden flex justify-center">
          {/* 1. Wide soft ambient glow (the broad teal wash filling the top of the scene) */}
          <div
            className="absolute top-0 w-[600px] md:w-[820px] h-[85%]
               bg-[radial-gradient(ellipse_at_top,_rgba(0,190,220,0.22)_0%,_rgba(0,130,160,0.10)_40%,_transparent_75%)]
               blur-3xl opacity-90"
          />

          {/* 2. Main soft beam column (even width, not a flared cone) */}
          <div
            className="absolute top-0 w-[220px] md:w-[300px] h-[85%]
               bg-gradient-to-b from-cyan-300/30 via-cyan-400/14 to-transparent
               blur-2xl"
          />

          {/* 3. Brighter inner beam */}
          <div
            className="absolute top-0 w-[90px] md:w-[130px] h-[75%]
               bg-gradient-to-b from-cyan-100/45 via-cyan-300/20 to-transparent
               blur-xl"
          />

          {/* 4. Bright core near the source, fading fast */}
          <div
            className="absolute top-0 w-[24px] md:w-[36px] h-[45%]
               bg-gradient-to-b from-white/80 via-cyan-100/35 to-transparent
               blur-md
               shadow-[0_0_30px_rgba(0,240,255,0.5),0_0_60px_rgba(0,200,230,0.25)]"
          />

          {/* 5. Subtle horizontal falloff so the beam doesn't look like a hard rectangle */}
          <div
            className="absolute top-0 w-[420px] md:w-[560px] h-[70%]
               bg-gradient-to-b from-cyan-400/10 via-cyan-400/5 to-transparent
               blur-3xl"
          />
        </div>

        {/* Background Tech Frame (Spans Full Screen Width) */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center px-4 md:px-8">
          <div className="relative w-[92%] md:w-[86%] max-w-9xl h-[72%] border border-cyan-500/10">
            {/* Corner Brackets */}
            <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-cyan-400/40" />
            <span className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-cyan-400/40" />
            <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-cyan-400/40" />
            <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-cyan-400/40" />
            <div className="absolute inset-24 sm:inset-24 border border-cyan-400/10">
              <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-cyan-300/30" />
              <span className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-cyan-300/30" />
              <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-cyan-300/30" />
              <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-cyan-300/30" />
            </div>
          </div>
        </div>

        {/* Main Headline & Call to Action (Centered Content) */}
        <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center mt-8 px-6">
          <h1 className="font-mono text-4xl sm:text-[48px] md:text-[48px] md:mt-[204px] font-regular uppercase tracking-widest text-white leading-tight mb-6">
            UNLIMITED DESIGN REQUESTS.
            <br />
            <span className="text-cyan-300 font-regular tracking-wider drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">
              FOR FLAT MONTHLY FEE
            </span>
          </h1>

          <p className="font-mono text-xs sm:text-sm text-gray-400 tracking-widest uppercase max-w-2xl leading-relaxed mb-10">
            SKIP THE HASSLE OF HIRING AND CHASING FREELANCERS. GET UNLIMITED,
            RELIABLE DESIGN SUPPORT WITH A FLAT MONTHLY RATE.
          </p>
          <button
            type="button"
            onClick={() => {
              // Add your booking logic here
            }}
            className="pointer-events-auto cursor-pointer relative z-10 font-mono text-xs tracking-widest uppercase px-8 py-3.5 text-cyan-300 bg-cyan-950/30 border border-cyan-500/40 hover:border-cyan-300 hover:bg-cyan-900/40 hover:text-white hover:scale-[1.02] hover:shadow-[0_0_12px_rgba(0,240,255,0.65),0_0_32px_rgba(0,240,255,0.35)] transition-all duration-300 group shadow-[0_0_20px_rgba(0,240,255,0.15)]"
          >
            <span className="absolute -top-[2px] -left-[2px] w-2 h-2 border-t-2 border-l-2 border-cyan-400" />
            <span className="absolute -top-[2px] -right-[2px] w-2 h-2 border-t-2 border-r-2 border-cyan-400" />
            <span className="absolute -bottom-[2px] -left-[2px] w-2 h-2 border-b-2 border-l-2 border-cyan-400" />
            <span className="absolute -bottom-[2px] -right-[2px] w-2 h-2 border-b-2 border-r-2 border-cyan-400" />
            BOOK A CALL WITH GRYFFIN
          </button>
        </div>

        {/* Statues & Logo Marquee (Full Edge-to-Edge Container) */}
        <div className="relative z-10 w-full md:-mt-[420px]">
          <div className="relative w-full aspect-[1440/761]">
            <Image
              src="/statues.svg"
              alt="Classical Statues Art"
              fill
              className="object-cover object-bottom pointer-events-none select-none opacity-90 mix-blend-screen"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent h-full" />
          </div>

          {/* Logo Carousel (Edge-to-Edge) */}
          <div className="absolute bottom-2 left-0 right-0 z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="overflow-hidden w-full">
              <div className="animate-marquee flex w-max py-3 opacity-75 hover:opacity-100 transition-opacity">
                {/* First set */}
                <div className="relative flex shrink-0 items-center">
                  <div className="relative h-24 w-[1500px] shrink-0">
                    <Image
                      src="/client-logos.svg"
                      alt="Client Logos"
                      fill
                      className="object-contain filter brightness-200 contrast-200"
                    />
                  </div>
                  <div className="w-20 shrink-0" />
                </div>

                {/* Duplicate sets */}
                <div
                  className="relative flex shrink-0 items-center"
                  aria-hidden="true"
                >
                  <div className="relative h-24 w-[1500px] shrink-0">
                    <Image
                      src="/client-logos.svg"
                      alt=""
                      fill
                      className="object-contain filter brightness-200 contrast-200"
                    />
                  </div>
                  <div className="w-20 shrink-0" />
                </div>

                <div
                  className="relative flex shrink-0 items-center"
                  aria-hidden="true"
                >
                  <div className="relative h-24 w-[1500px] shrink-0">
                    <Image
                      src="/client-logos.svg"
                      alt=""
                      fill
                      className="object-contain filter brightness-200 contrast-200"
                    />
                  </div>
                  <div className="w-20 shrink-0" />
                </div>

                <div
                  className="relative flex shrink-0 items-center"
                  aria-hidden="true"
                >
                  <div className="relative h-24 w-[1500px] shrink-0">
                    <Image
                      src="/client-logos.svg"
                      alt=""
                      fill
                      className="object-contain filter brightness-200 contrast-200"
                    />
                  </div>
                  <div className="w-20 shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= FEATURED PROJECTS SECTION ================= */}
      <section
        id="projects"
        className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 overflow-hidden"
      >
        {/* Projects Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/projects-bg.svg"
            alt="Featured Projects Artwork"
            fill
            className="object-cover object-center opacity-60 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black" />
        </div>

        {/* Projects Tech Box Frame */}
        <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center px-4 md:px-8 py-12">
          <div className="relative w-[92%] md:w-[86%] max-w-9xl h-[82%] border border-cyan-500/10 bg-cyan-950/[0.01]">
            <span className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-cyan-400/60" />
            <span className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-2 border-r-2 border-cyan-400/60" />
            <span className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-2 border-l-2 border-cyan-400/60" />
            <span className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-cyan-400/60" />
          </div>
        </div>

        {/* Interactive Text & Button */}
        <div className="relative z-20 max-w-5xl mx-auto text-center px-6 flex flex-col items-center">
          <ul className="space-y-4 md:space-y-6 mb-16">
            {projects.map((project, index) => (
              <li key={index}>
                <Link
                  href={project.href}
                  className="group inline-block font-mono text-[3xl] sm:text-5xl md:text-[60px] uppercase tracking-widest transition-all duration-500"
                >
                  <span
                    className={`transition-all duration-300 ${
                      index === 0
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500 drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                        : "text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)] group-hover:[-webkit-text-stroke:0px] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-cyan-400 group-hover:drop-shadow-[0_0_25px_rgba(0,240,255,0.6)]"
                    }`}
                  >
                    {project.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#projects"
            className="pointer-events-auto cursor-pointer relative z-10 font-mono text-xs tracking-widest uppercase px-8 py-3.5 text-cyan-300 bg-cyan-950/30 border border-cyan-500/40 hover:border-cyan-300 hover:bg-cyan-900/40 hover:text-white hover:scale-[1.02] hover:shadow-[0_0_12px_rgba(0,240,255,0.65),0_0_32px_rgba(0,240,255,0.35)] transition-all duration-300 group shadow-[0_0_20px_rgba(0,240,255,0.15)]"
          >
            <span className="absolute -top-[2px] -left-[2px] w-2 h-2 border-t-2 border-l-2 border-cyan-400" />
            <span className="absolute -top-[2px] -right-[2px] w-2 h-2 border-t-2 border-r-2 border-cyan-400" />
            <span className="absolute -bottom-[2px] -left-[2px] w-2 h-2 border-b-2 border-l-2 border-cyan-400" />
            <span className="absolute -bottom-[2px] -right-[2px] w-2 h-2 border-b-2 border-r-2 border-cyan-400" />
            VIEW ALL PROJECTS
          </Link>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}

      <section className="relative min-h-[130vh] w-full flex flex-col justify-center items-center py-24 overflow-hidden bg-black text-white">
        {/* Background Tech Frame with Corner Brackets */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center px-4 md:px-8 py-12">
          <div className="relative w-full h-full border border-cyan-500/10 bg-cyan-950/[0.01]">
            <span className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-cyan-400/60" />
            <span className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-2 border-r-2 border-cyan-400/60" />
            <span className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-2 border-l-2 border-cyan-400/60" />
            <span className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-cyan-400/60" />
          </div>
        </div>

        {/* Main Layered Container */}
        <div className="relative z-10 w-full max-w-6xl mx-auto min-h-[650px] flex flex-col items-center justify-center px-6">
          {/* Layer 1 (z-10): Gradient Title Text (BEHIND PERSON) */}
          <div className="absolute top-12 z-10 text-center select-none pointer-events-none">
            <h2 className="font-mono text-6xl sm:text-8xl md:text-[240px] font-regular uppercase tracking-widest leading-none bg-clip-text text-transparent bg-gradient-to-b from-cyan-200 via-cyan-400 to-transparent opacity-95 -mt-24">
              GRYFFIN
              <br />
              STUDIO
            </h2>
          </div>

          {/* Layer 2 (z-20): Character Image (IN FRONT OF TITLE, full-bleed, cropped at bottom) */}
          <div className="absolute -bottom-48 md:-bottom-72 left-1/2 z-20 h-[500px] w-screen max-w-none -translate-x-1/2 pointer-events-none sm:h-[600px] md:h-[750px]">
            <Image
              src="/about-person.svg"
              alt="Gryffin Studio Hooded Character"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Layer 3 (z-30): Description Paragraph (OVERLAY ON TOP) */}
          <div className="absolute bottom-6 md:bottom-12 z-30 max-w-2xl text-center px-4">
            <div className="relative border border-cyan-500/20 p-5 md:p-6">
              {/* Corner brackets */}
              <span className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-cyan-400/70" />
              <span className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-2 border-r-2 border-cyan-400/70" />
              <span className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-2 border-l-2 border-cyan-400/70" />
              <span className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-cyan-400/70" />

              <p className="font-mono text-xs sm:text-sm tracking-widest uppercase leading-relaxed bg-clip-text text-transparent bg-gradient-to-b from-cyan-200 via-cyan-400 to-cyan-600">
                AT GRYFFIN STUDIOS, WE&apos;VE SPENT THE PAST TWO YEARS BRINGING
                IDEAS TO LIFE, COMPLETING OVER 20 PROJECTS FROM QUICK FIXES TO
                FULL-SCALE BUILDS. AS A GROWING STARTUP, WE OFFER A RANGE OF
                SERVICES TO SUPPORT YOUR BUSINESS AND GROW ALONGSIDE YOU.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}

      <section className="relative w-full bg-black py-20 px-4 md:px-8 flex justify-center items-center">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="relative bg-gradient-to-b from-[#0c0c0f] via-[#08080a] to-[#050505] border border-white/10 p-8 sm:p-10 flex flex-col items-center justify-center min-h-[280px] overflow-hidden group hover:border-cyan-500/30 transition-colors duration-300"
            >
              {/* Soft inner gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-cyan-950/20 pointer-events-none" />

              {/* Top Glowing Cyan Line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Corner Tech Brackets - White */}
              <span className="absolute top-[2px] left-[2px] w-2.5 h-2.5 border-t border-l border-white/80" />
              <span className="absolute top-[2px] right-[2px] w-2.5 h-2.5 border-t border-r border-white/80" />
              <span className="absolute bottom-[2px] left-[2px] w-2.5 h-2.5 border-b border-l border-white/80" />
              <span className="absolute bottom-[2px] right-[2px] w-2.5 h-2.5 border-b border-r border-white/80" />

              {/* Content - Centered */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <h3 className="font-mono text-xl sm:text-2xl font-regulars uppercase tracking-wider text-white">
                  {feature.titleWhite}{" "}
                  <span className="text-cyan-400 font-regular drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
                    {feature.titleCyan}
                  </span>
                </h3>

                <p className="font-mono text-xs sm:text-sm text-zinc-400 tracking-widest uppercase leading-relaxed mt-6 max-w-[280px] text-justify">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Cyan Glow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] h-28 bg-[radial-gradient(ellipse_at_bottom,_rgba(0,200,220,0.35)_0%,_rgba(0,120,150,0.12)_40%,_transparent_70%)] blur-2xl pointer-events-none group-hover:opacity-90 transition-all duration-300" />
            </div>
          ))}
        </div>
      </section>
      {/* ================= SERVICES SECTION ================= */}
      <section className="relative min-h-screen w-full flex flex-col justify-center items-center py-24 overflow-hidden bg-black text-white">
        {/* Outer Section Background Artwork */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/services-bg.svg"
            alt="Services Background Artwork"
            fill
            className="object-cover object-center opacity-50 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-radial from-transparent via-black/50 to-black" />
        </div>

        {/* Outer Tech Frame with Corner Brackets */}
        <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center px-4 md:px-8 py-10">
          <div className="relative w-full h-full border border-cyan-500/10 bg-cyan-950/[0.01]">
            <span className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-cyan-400/60" />
            <span className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-2 border-r-2 border-cyan-400/60" />
            <span className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-2 border-l-2 border-cyan-400/60" />
            <span className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-cyan-400/60" />
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative z-20 w-full max-w-7xl h-[520px] sm:h-[560px] flex items-center justify-center px-4">
          {services.map((service, idx) => {
            const cardStyle = getCardStyle(idx);
            return (
              <div
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`absolute w-[90%] max-w-[760px] p-8 sm:p-12 border backdrop-blur-xl transition-all duration-700 ease-in-out cursor-pointer flex flex-col justify-between overflow-hidden ${cardStyle}`}
              >
                {/* Straight Top Border Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent z-10" />

                {/* Soft Blurred Top Cyan Gradient Glow (Matches 2nd Screenshot) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-28 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-400/20 via-cyan-900/10 to-transparent blur-xl pointer-events-none z-0" />

                {/* Card Corner Tech Brackets */}
                <span className="absolute -top-[2px] -left-[2px] w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400 z-20" />
                <span className="absolute -top-[2px] -right-[2px] w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400 z-20" />
                <span className="absolute -bottom-[2px] -left-[2px] w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400 z-20" />
                <span className="absolute -bottom-[2px] -right-[2px] w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-400 z-20" />

                {/* Title Header */}
                <div className="relative z-10">
                  <h3 className="font-sans text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wider mb-6 text-white leading-tight">
                    {service.titleWhite}{" "}
                    <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                      {service.titleCyan}
                    </span>
                  </h3>

                  <p className="font-mono text-xs sm:text-sm text-gray-300 tracking-widest uppercase leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                </div>

                {/* Tag Buttons */}
                <div className="flex flex-wrap gap-3 mt-8 relative z-10">
                  {service.tags.map((tag, tIdx) => (
                    <div
                      key={tIdx}
                      className="relative font-mono text-[10px] sm:text-xs tracking-widest uppercase px-4 py-2 text-cyan-300 bg-cyan-950/30 border border-cyan-500/30"
                    >
                      <span className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 border-t border-l border-cyan-400" />
                      <span className="absolute -top-[1px] -right-[1px] w-1.5 h-1.5 border-t border-r border-cyan-400" />
                      <span className="absolute -bottom-[1px] -left-[1px] w-1.5 h-1.5 border-b border-l border-cyan-400" />
                      <span className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 border-b border-r border-cyan-400" />
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Manual Navigation Controls */}
        <div className="relative z-30 flex items-center gap-4 mt-10">
          {services.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setActiveIndex(dotIdx)}
              className={`h-2 transition-all duration-300 rounded-full ${
                activeIndex === dotIdx
                  ? "w-8 bg-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.8)]"
                  : "w-2 bg-gray-600 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
