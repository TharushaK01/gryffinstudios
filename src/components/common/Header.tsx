"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/60 backdrop-blur-md border-b border-white/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-sans text-2xl font-bold tracking-wider text-white uppercase group-hover:text-cyan-400 transition-colors">
            Gryffin<span className="text-cyan-400">Studio</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 font-mono text-xs tracking-widest uppercase text-gray-300">
          <Link
            href="#services"
            className="hover:text-cyan-400 transition-colors"
          >
            Services
          </Link>
          <Link href="#work" className="hover:text-cyan-400 transition-colors">
            Our Work
          </Link>
          <Link
            href="#pricing"
            className="hover:text-cyan-400 transition-colors"
          >
            Pricing
          </Link>
          <Link href="#blog" className="hover:text-cyan-400 transition-colors">
            Insights
          </Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="#contact"
          className="font-mono text-xs tracking-wider uppercase px-5 py-2.5 rounded-full border border-cyan-400/40 text-cyan-300 bg-cyan-950/20 hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]"
        >
          Get in Touch
        </Link>
      </div>
    </header>
  );
}
