import React from "react";
import {
  Linkedin,
  Github,
  Mail,
  FileText,
} from "lucide-react";

export default function Contact() {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <section
      id="contact"
      className="py-20 border-t border-slate-800/70"
    >
      <div className="max-w-5xl mx-auto px-5">

        {/* TITLE */}
        <h2 className="text-3xl font-semibold text-slate-100 mb-4 text-center">
          Let’s Connect
        </h2>

        <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-center">
          Open to Data Analyst and Business Analyst roles.
          Feel free to reach out, connect, or view my resume.
        </p>

        {/* CARD */}
        <div
          className="rounded-2xl border border-slate-800/80
                     bg-slate-950/70 p-8
                     flex flex-col gap-8"
        >

          {/* EMAIL */}
          <a
            href="mailto:harivardhanreddyyadaram@gmail.com"
            className="flex items-center gap-3
                       text-slate-300 hover:text-emerald-300
                       transition"
          >
            <Mail className="w-5 h-5 text-emerald-400" />
            harivardhanreddyyadaram@gmail.com
          </a>

          {/* SOCIAL BUTTONS */}
          <div className="flex flex-wrap gap-4">

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/harivardhan-reddyy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2
                         px-5 py-2.5 rounded-full
                         border border-emerald-400/40
                         bg-emerald-500/10
                         text-emerald-300
                         hover:bg-emerald-500/20
                         transition"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/Harivardhanreddyy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2
                         px-5 py-2.5 rounded-full
                         border border-slate-700/70
                         bg-slate-900/60
                         text-slate-200
                         hover:border-slate-500
                         transition"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>

          </div>

          {/* RESUME BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">

            {/* VIEW */}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2
                         px-6 py-2.5 rounded-full
                         border border-slate-700/70
                         bg-slate-900/60
                         text-slate-200
                         hover:border-slate-500
                         transition"
            >
              <FileText className="w-5 h-5" />
              View Resume
            </a>

            {/* DOWNLOAD */}
            <a
              href={resumeUrl}
              download
              className="inline-flex items-center justify-center gap-2
                         px-6 py-2.5 rounded-full
                         border border-emerald-400/40
                         bg-emerald-500/10
                         text-emerald-300
                         hover:bg-emerald-500/20
                         transition"
            >
              <FileText className="w-5 h-5" />
              Download Resume
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
