import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Lighting & Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/80 to-black pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 text-center z-10 flex flex-col items-center">
        {/* Top Tagline */}
        <p className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-cyan-400 mb-6 border border-cyan-500/30 px-4 py-1.5 rounded-full bg-cyan-950/20 backdrop-blur-sm">
          Aesthetic Design & Specialized Engineering
        </p>

        {/* Main Headline */}
        <h1 className="font-sans text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-white max-w-4xl leading-none mb-8">
          Aesthetic Design Studio for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-600">
            The Next Web
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-mono text-sm sm:text-base text-gray-400 max-w-2xl mb-10 leading-relaxed">
          We construct high-converting digital products, 3D experiences, and
          modern web architectures engineered for maximum performance and
          conversion.
        </p>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="#contact"
            className="font-mono text-sm uppercase tracking-wider px-8 py-4 rounded-full bg-cyan-400 text-black font-bold hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)]"
          >
            Start a Project
          </Link>
          <Link
            href="#work"
            className="font-mono text-sm uppercase tracking-wider px-8 py-4 rounded-full border border-white/20 text-white hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 bg-white/5 backdrop-blur-sm"
          >
            Explore Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
