import React from "react";

export default function Contact() {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <section id="contact" className="py-20 border-t border-slate-800/70">
      <div className="max-w-5xl mx-auto px-5">

        <h2 className="text-3xl font-semibold text-slate-100 mb-4">
          Contact
        </h2>

        <p className="text-slate-400 max-w-2xl mb-10">
          Open to Data Analyst / Business Analyst roles.
          Reach out directly or review my resume.
        </p>

        <div className="grid gap-8 md:grid-cols-2">

          {/* INFO */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5">
              <p className="text-sm text-slate-400">Email</p>
              <a
                href="mailto:harivardhanreddyyadaram@gmail.com"
                className="text-slate-100 hover:text-emerald-400 transition"
              >
                harivardhanreddyyadaram@gmail.com
              </a>
            </div>

            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5">
              <p className="text-sm text-slate-400">Location</p>
              <p className="text-slate-100">
                Hyderabad, Telangana, India
              </p>
            </div>
          </div>

          {/* RESUME */}
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-6">
            <h3 className="text-lg font-semibold text-slate-100 mb-2">
              Resume
            </h3>

            <div className="flex flex-col gap-4">
              <a
                href={resumeUrl}
                target="_blank"
                className="px-5 py-2 rounded-full text-center
                           border border-slate-700
                           text-slate-300 hover:text-white transition"
              >
                View Resume
              </a>

              <a
                href={resumeUrl}
                download
                className="px-5 py-2 rounded-full text-center
                           border border-emerald-400/40
                           bg-emerald-500/20
                           text-emerald-300 hover:bg-emerald-500/30 transition"
              >
                Download Resume
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
