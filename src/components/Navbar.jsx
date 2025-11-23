import React from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <a href="#top" className="font-semibold text-lg">
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            YH
          </span>
          <span className="ml-1 text-slate-200">Portfolio</span>
        </a>
        <div className="hidden md:flex gap-5 text-sm">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-300 hover:text-emerald-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
