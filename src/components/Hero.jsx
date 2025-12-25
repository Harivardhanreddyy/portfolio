import React from "react";
import pic from "../assets/profile.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <section
      id="top"
      className="relative pt-16 pb-16 border-b border-slate-800/70"
    >
      <div className="max-w-6xl mx-auto px-5">

        {/* GRID */}
        <div className="grid gap-10 lg:grid-cols-[320px_1fr] items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="mx-auto lg:mx-0 rounded-2xl p-[3px]
                       border border-emerald-400/40
                       bg-slate-900/70"
          >
            <img
              src={pic}
              alt="Yadaram Harivardhan Reddy"
              className="
                w-56 h-64 sm:w-64 sm:h-72 lg:w-full lg:h-[420px]
                object-cover rounded-2xl
              "
            />
          </motion.div>

          {/* CONTENT */}
          <div className="text-center lg:text-left">

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 mb-4
                            px-4 py-1.5 rounded-full
                            border border-emerald-400/40
                            bg-emerald-500/10
                            text-emerald-300 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to roles: Data Analyst / Business Analyst
            </div>

            {/* NAME */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl
                           font-semibold text-slate-100 leading-tight mb-3">
              Yadaram{" "}
              <span className="text-emerald-400">
                Harivardhan Reddy
              </span>
            </h1>

            {/* ROLE */}
            <h2 className="text-lg sm:text-xl md:text-2xl
                           text-slate-200 mb-4 max-w-2xl mx-auto lg:mx-0">
              Data Analyst focused on{" "}
              <span className="text-emerald-400">
                insights, dashboards & decision-making
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-4">
              Fresh graduate <span className="text-slate-100 font-medium">
                Data Analyst
              </span>{" "}
              with strong foundations in Python, SQL, Power BI, and Excel —
              backed by Machine Learning knowledge.
            </p>

            {/* SKILLS */}
            <div className="flex flex-wrap justify-center lg:justify-start
                            gap-2 mb-6">
              {[
                "Data Analyst",
                "Python",
                "SQL",
                "Power BI",
                "Excel",
                "Machine Learning",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full
                             border border-slate-700/70
                             bg-slate-900/60 text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row
                            justify-center lg:justify-start
                            gap-4">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full text-center
                           bg-emerald-500/20
                           border border-emerald-400/40
                           text-emerald-300 font-medium
                           hover:bg-emerald-500/30 transition"
              >
                View Resume
              </a>

              <a
                href="#contact"
                className="px-6 py-2.5 rounded-full text-center
                           bg-slate-900/60
                           border border-slate-700/70
                           text-slate-200
                           hover:border-slate-500 transition"
              >
                Contact Me
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
