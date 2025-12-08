import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-12 border-t border-slate-800/70"
    >
      <h2 className="text-xl sm:text-2xl font-semibold text-slate-50 mb-3">
        Contact
      </h2>
      <p className="text-sm text-slate-300 mb-6 max-w-xl">
        I&apos;m open to roles in Software Engineering, ML Engineering and Data
        Analytics. If you&apos;d like to collaborate, discuss an idea, or just say
        hi, feel free to reach out.
      </p>

      <div className="grid md:grid-cols-[3fr,2fr] gap-6 text-sm text-slate-300">
        {/* Form (static demo) */}
        <form
          className="space-y-3 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4"
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
            className="inline-flex px-4 py-2 rounded-full text-xs font-medium bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 hover:brightness-110 transition"
          >
            Send (static demo)
          </button>
        </form>

        {/* Direct contact info */}
        <div className="space-y-3">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
            <p className="text-xs text-slate-400 mb-1">Email</p>
            <a
              href="mailto:harivardhanreddyyaadaram@gmail.com"
              className="text-emerald-300 hover:text-emerald-200 break-all text-xs"
            >
              harivardhanreddyyaadaram@gmail.com
            </a>
          </div>
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
            <p className="text-xs text-slate-400 mb-1">Location</p>
            <p className="text-xs">Hyderabad, Telangana, India</p>
          </div>
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 space-y-2">
            <p className="text-xs text-slate-400 mb-1">Profiles</p>
            <div className="flex flex-wrap gap-2 text-xs">
              <a
                href="https://www.linkedin.com/in/harivardhan-reddyy/"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 rounded-full border border-slate-700/80 hover:border-emerald-400 hover:text-emerald-200 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Harivardhanreddyy"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 rounded-full border border-slate-700/80 hover:border-emerald-400 hover:text-emerald-200 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
