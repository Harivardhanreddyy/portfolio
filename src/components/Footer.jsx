import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
        <p>© {new Date().getFullYear()} Y. Harivardhan Reddy. All rights reserved.</p>
        <p>Built with React &amp; Tailwind CSS.</p>
      </div>
    </footer>
  )
}
