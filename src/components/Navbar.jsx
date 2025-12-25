import React, { useEffect, useState } from "react";
import { Github, Linkedin } from "lucide-react";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="backdrop-blur bg-slate-950/80 border-b border-slate-800/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">

            {/* LEFT — NAME */}
            <div className="font-semibold text-slate-100">
              Harivardhan Reddy
            </div>

            {/* CENTER — NAV LINKS */}
            <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
              <a href="#about" className="hover:text-emerald-400 transition">About</a>
              <a href="#skills" className="hover:text-emerald-400 transition">Skills</a>
              <a href="#projects" className="hover:text-emerald-400 transition">Projects</a>
              <a href="#experience" className="hover:text-emerald-400 transition">Experience</a>
              <a href="#contact" className="hover:text-emerald-400 transition">Contact</a>
            </div>

            {/* RIGHT — SOCIALS WITH ICONS */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Harivardhanreddyy"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm
                           border border-slate-700/70 bg-slate-900/60
                           text-slate-300 hover:border-emerald-400/40
                           hover:text-emerald-300 transition"
              >
                <Github size={16} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/harivardhan-reddyy/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium
                           bg-emerald-400 text-slate-900
                           shadow-[0_0_20px_rgba(52,211,153,0.45)]
                           hover:bg-emerald-300 transition"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
}
