"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full py-12 md:py-16 px-4 md:px-8 text-white overflow-hidden">
      {/* Full-section background image – no gradients / shadows */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/footer-bg.svg"
          alt="Footer Artwork"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Black overlay for the top edge transition */}
      <div className="absolute inset-x-0 top-0 z-[1] h-24 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none" />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Main framed card – reduced bottom height */}
        <div className="relative w-full border border-white/15 overflow-hidden min-h-[320px] md:min-h-[340px]">
          {/* Corner brackets – matched to screenshot */}
          <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-white/50 z-20 pointer-events-none" />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-white/50 z-20 pointer-events-none" />
          <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-white/50 z-20 pointer-events-none" />
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-white/50 z-20 pointer-events-none" />
          <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/60 z-20 pointer-events-none" />

          {/* Content – less bottom padding */}
          <div className="relative z-10 h-full flex flex-col justify-between p-8 sm:p-10 md:p-12 pb-8 md:pb-10">
            {/* Top section: Brand + Links */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
              {/* Brand Column */}
              <div className="md:col-span-5 space-y-5">
                <div className="flex items-center gap-3">
                  {/* Logo only (text is already inside the logo) */}
                  <Image
                    src="/logo-griffin.svg"
                    alt="Gryffin Studios"
                    width={160}
                    height={32}
                    priority // Injects fetchpriority="high" and preloads the image
                    className="h-8 w-auto"
                  />
                </div>

                <p className="font-mono text-xs sm:text-sm text-zinc-300 tracking-widest uppercase leading-relaxed max-w-[350px]">
                  WE ARE AN AGENCY WITH 5+ YEARS OF EXPERIENCE THAT HAS HELPED
                  MORE THAN 5K+ PROJECT FROM SMALL TO LARGE PROJECTS.
                </p>
              </div>

              {/* Navigation Columns */}
              <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 font-mono text-xs sm:text-sm">
                {/* HOME */}
                <div>
                  <h4 className="text-zinc-200 uppercase tracking-[0.2em] font-medium mb-5">
                    HOME
                  </h4>
                  <ul className="space-y-3 text-zinc-400 uppercase tracking-wider">
                    <li>
                      <Link
                        href="#about"
                        className="hover:text-cyan-400 transition-colors"
                      >
                        ABOUT US
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#services"
                        className="hover:text-cyan-400 transition-colors"
                      >
                        OUR SERVICE
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#work"
                        className="hover:text-cyan-400 transition-colors"
                      >
                        OUR PROJECT
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#testimonials"
                        className="hover:text-cyan-400 transition-colors"
                      >
                        REVIEW CLIENT
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* PRIVACY */}
                <div>
                  <h4 className="text-zinc-200 uppercase tracking-[0.2em] font-medium mb-5">
                    PRIVACY
                  </h4>
                  <ul className="space-y-3 text-zinc-400 uppercase tracking-wider">
                    <li>
                      <Link
                        href="/#"
                        className="hover:text-cyan-400 transition-colors"
                      >
                        TERMS
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#"
                        className="hover:text-cyan-400 transition-colors"
                      >
                        OFFICE
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* SOCIAL MEDIA */}
                <div>
                  <h4 className="text-cyan-400 uppercase tracking-[0.2em] font-medium mb-5">
                    SOCIAL MEDIA
                  </h4>
                  <ul className="space-y-3 text-zinc-400 uppercase tracking-wider">
                    <li>
                      <a
                        href="https://dribbble.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-cyan-400 transition-colors"
                      >
                        DRIBBBLE
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://behance.net"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-cyan-400 transition-colors"
                      >
                        BEHANCE
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-cyan-400 transition-colors"
                      >
                        INSTAGRAM
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-cyan-400 transition-colors"
                      >
                        LINKEDIN
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright bar – outside the main frame */}
        <div className="mt-10 md:mt-16 flex flex-col sm:flex-row justify-between items-start sm:items-center font-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase text-zinc-400 gap-3 px-1">
          <div>©GRYFFIN STUDIOS</div>
          <div>ALL RIGHTS RESERVED</div>
        </div>
      </div>
    </footer>
  );
}
