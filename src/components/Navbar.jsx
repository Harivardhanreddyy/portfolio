import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* LEFT — NAME */}
          <div className="text-lg font-semibold text-slate-100">
            Harivardhan Reddy
          </div>

          {/* CENTER — LINKS (DESKTOP) */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-slate-300 hover:text-emerald-400 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* RIGHT — SOCIALS */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/Harivardhanreddyy"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full text-sm
                         border border-slate-700 text-slate-300
                         hover:text-white hover:border-slate-500 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/harivardhanreddyy/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full text-sm font-semibold
                         bg-emerald-400 text-slate-900
                         shadow-[0_0_20px_rgba(52,211,153,0.45)]
                         hover:scale-105 transition-transform"
            >
              Linkedin
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-slate-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden border-t border-slate-800/70 bg-slate-950/95">
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-300 hover:text-emerald-400"
                >
                  {link.name}
                </a>
              ))}

              <div className="flex gap-3 pt-2">
                <a
                  href="https://github.com/Harivardhanreddyy"
                  target="_blank"
                  className="flex-1 text-center py-2 rounded-full
                             border border-slate-700 text-slate-300"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/harivardhanreddyy/"
                  target="_blank"
                  className="flex-1 text-center py-2 rounded-full
                             bg-emerald-400 text-slate-900 font-semibold"
                >
                  Linkedin
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
