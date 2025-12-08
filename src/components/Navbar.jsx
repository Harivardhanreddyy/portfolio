import React from "react";

const Navbar = () => {
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Logo / Name */}
        <a href="#top" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-slate-950 text-sm font-bold shadow-[0_0_20px_rgba(45,212,191,0.6)]">
            YH
          </div>
          <span className="text-sm sm:text-base font-semibold text-slate-50">
            Harivardhan Reddy
          </span>
        </a>

        {/* Center nav links */}
        <div className="hidden md:flex items-center gap-6 text-xs text-slate-300">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-emerald-300 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right social links */}
        <div className="flex items-center gap-2 text-xs">
          <a
            href="https://github.com/Harivardhanreddyy"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-full border border-slate-600/70 text-slate-200 hover:border-emerald-400 hover:text-emerald-300 transition text-[11px]"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/harivardhan-reddyy/"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 text-[11px] font-medium hover:brightness-110 transition shadow-[0_0_18px_rgba(45,212,191,0.6)]"
          >
            LinkedIn
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
