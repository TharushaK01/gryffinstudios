import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">
        {/* Brand Column */}
        <div className="md:col-span-1 space-y-4">
          <span className="font-sans text-2xl font-bold tracking-wider text-white uppercase">
            Gryffin<span className="text-cyan-400">Studio</span>
          </span>
          <p className="font-mono text-xs text-gray-400 leading-relaxed">
            Aesthetic design & specialized software engineering studio building
            high-performance digital experiences.
          </p>
        </div>

        {/* Navigation Column */}
        <div className="space-y-3 font-mono text-xs">
          <h4 className="text-white uppercase tracking-widest text-sm font-semibold mb-4">
            Navigation
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="#services"
                className="hover:text-cyan-400 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#work"
                className="hover:text-cyan-400 transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#pricing"
                className="hover:text-cyan-400 transition-colors"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="#process"
                className="hover:text-cyan-400 transition-colors"
              >
                Process
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Column */}
        <div className="space-y-3 font-mono text-xs">
          <h4 className="text-white uppercase tracking-widest text-sm font-semibold mb-4">
            Capabilities
          </h4>
          <ul className="space-y-2">
            <li>
              <span className="hover:text-cyan-400 transition-colors">
                UI/UX Design
              </span>
            </li>
            <li>
              <span className="hover:text-cyan-400 transition-colors">
                Web Development
              </span>
            </li>
            <li>
              <span className="hover:text-cyan-400 transition-colors">
                Brand Strategy
              </span>
            </li>
            <li>
              <span className="hover:text-cyan-400 transition-colors">
                3D & Visuals
              </span>
            </li>
          </ul>
        </div>

        {/* Social / Connect */}
        <div className="space-y-3 font-mono text-xs">
          <h4 className="text-white uppercase tracking-widest text-sm font-semibold mb-4">
            Connect
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                Twitter / X
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                Dribbble
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center font-mono text-xs text-gray-500 gap-4">
        <p>© {new Date().getFullYear()} Gryffin Studio. All rights reserved.</p>
        <div className="flex space-x-6">
          <Link
            href="/privacy"
            className="hover:text-gray-400 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-gray-400 transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
