"use client";

import Link from "next/link";
import Image from "next/image";
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
      className={`fixed top-0 py-[27px] left-0 right-0 z-50 h-[100px] transition-all duration-300 ${
        isScrolled ? "bg-transparent backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="h-[57px] w-full px-8 md:px-9 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group shrink-0">
          <div className="relative w-[240px] h-[42px] flex items-center">
            <Image
              src="/logogryffin.svg"
              alt="Gryffin Studios Logo"
              width={240}
              height={42}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-4 ml-auto mr-4 lg:mr-5 font-mono text-[14px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] tracking-[0.04em] uppercase">
          <Link href="/" className="text-cyan-400 transition-colors">
            HOME
          </Link>

          <Link
            href="#about"
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            ABOUT US
          </Link>

          <Link
            href="#services"
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            OUR SERVICES
          </Link>

          <Link
            href="#projects"
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            OUR PROJECTS
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="#contact"
          className="relative shrink-0 h-[48px] px-6 flex items-center justify-center font-mono text-[16px] tracking-wider uppercase text-white bg-black/50 border border-cyan-500/30 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 group"
        >
          {/* Top Left */}
          <span className="absolute -top-[1px] -left-[1px] w-[5px] h-[5px] border-t border-l border-cyan-400 transition-all group-hover:w-2 group-hover:h-2" />
          {/* Top Right */}
          <span className="absolute -top-[1px] -right-[1px] w-[5px] h-[5px] border-t border-r border-cyan-400 transition-all group-hover:w-2 group-hover:h-2" />
          {/* Bottom Left */}
          <span className="absolute -bottom-[1px] -left-[1px] w-[5px] h-[5px] border-b border-l border-cyan-400 transition-all group-hover:w-2 group-hover:h-2" />
          {/* Bottom Right */}
          <span className="absolute -bottom-[1px] -right-[1px] w-[5px] h-[5px] border-b border-r border-cyan-400 transition-all group-hover:w-2 group-hover:h-2" />
          LET'S CONNECT
        </Link>
      </div>
      <div className="absolute left-0 right-0 top-[100px] h-px bg-cyan-900/30" />
    </header>
  );
}
