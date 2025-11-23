import React from 'react'

export default function Hero() {
  return (
    <section id="top" className="pt-16 pb-10 sm:pt-20 sm:pb-16">
      <p className="text-xs tracking-[0.25em] uppercase text-emerald-300/70 mb-3">
        Python • ML • Data
      </p>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50 mb-4">
        Building intelligent systems with{' '}
        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Python, ML &amp; Data
        </span>
      </h1>
      <p className="text-sm sm:text-base text-slate-300/90 max-w-xl mb-6">
        I&apos;m <span className="font-semibold">Y. Harivardhan Reddy</span>, a Python Developer and ML Engineer
        crafting high-performance AI solutions, real-time computer vision systems, and data-driven
        applications ready for production.
      </p>
      <div className="flex flex-wrap gap-3 mb-6">
        <a
          href="#contact"
          className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition"
        >
          Let&apos;s Connect
        </a>
        <span className="inline-flex items-center px-4 py-2 rounded-full text-xs border border-slate-700 text-slate-200">
          Open to Software / ML / Data roles
        </span>
      </div>
    </section>
  )
}
