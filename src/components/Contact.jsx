import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-10 border-t border-slate-800/70">
      <h2 className="text-xl sm:text-2xl font-semibold text-slate-50 mb-3">Contact</h2>
      <p className="text-sm text-slate-300 mb-4 max-w-xl">
        I’m open to opportunities in Software Engineering, ML Engineering, and Data Analytics. If you’d like to
        collaborate, discuss an idea, or just say hi, feel free to reach out.
      </p>
      <div className="grid md:grid-cols-[3fr,2fr] gap-6 text-sm text-slate-300">
        <form
          className="space-y-3 rounded-2xl bg-slate-950/70 border border-slate-800/80 p-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Name</label>
              <input
                className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-xs focus:outline-none focus:border-emerald-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Email</label>
              <input
                type="email"
                className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-xs focus:outline-none focus:border-emerald-400"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-xs focus:outline-none focus:border-emerald-400"
              placeholder="Tell me about your project or opportunity..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex px-4 py-2 rounded-full text-xs font-medium bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition"
          >
            Send (static demo)
          </button>
        </form>
        <div className="space-y-3">
          <div className="rounded-2xl bg-slate-950/70 border border-slate-800/80 p-4">
            <p className="text-xs text-slate-400 mb-1">Email</p>
            <a
              href="mailto:harivardhanreddyyaadaram@gmail.com"
              className="text-emerald-300 hover:text-emerald-200 break-all"
            >
              harivardhanreddyyaadaram@gmail.com
            </a>
          </div>
          <div className="rounded-2xl bg-slate-950/70 border border-slate-800/80 p-4">
            <p className="text-xs text-slate-400 mb-1">Location</p>
            <p>Hyderabad, Telangana, India</p>
          </div>
          <div className="rounded-2xl bg-slate-950/70 border border-slate-800/80 p-4">
            <p className="text-xs text-slate-400 mb-1">Social</p>
            <a
              href="https://linkedin.com/in/harivardhan-reddy"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-300 hover:text-emerald-200 text-xs"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
