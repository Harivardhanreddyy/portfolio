import React from "react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-12 border-t border-slate-800/70"
    >
      <h2 className="text-xl sm:text-2xl font-semibold text-slate-50 mb-3">
        Experience &amp; Education
      </h2>

      <div className="grid lg:grid-cols-[3fr,2fr] gap-6">
        {/* Experience / Certifications */}
        <div className="space-y-4 text-sm text-slate-300">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
            <p className="text-sm font-semibold text-slate-50">
              Data Analytics Job Simulation
            </p>
            <p className="text-xs text-emerald-300/80 mb-1">
              Deloitte (Forage) • 2025
            </p>
            <p className="text-xs text-slate-300">
              Completed a virtual job simulation covering data cleaning,
              visualization, insight extraction and preparing stakeholder-ready
              decks, using realistic business scenarios.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
            <p className="text-sm font-semibold text-slate-50">
              Salesforce Developer Virtual Internship
            </p>
            <p className="text-xs text-emerald-300/80 mb-1">
              Smart Internz • 2024
            </p>
            <p className="text-xs text-slate-300">
              Gained experience with Salesforce CRM, custom objects, automation
              and cloud-based development workflows.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
            <p className="text-sm font-semibold text-slate-50">
              Azure Fundamentals &amp; Other Certifications
            </p>
            <p className="text-xs text-emerald-300/80 mb-1">
              Cloud &amp; Analytics
            </p>
            <p className="text-xs text-slate-300">
              Completed foundational Azure certification along with additional
              ML/Cloud/Analytics coursework to solidify core concepts.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 text-sm text-slate-300">
          <h3 className="text-sm font-semibold text-slate-50 mb-3">
            Education
          </h3>
          <ul className="space-y-3">
            <li>
              <p className="font-medium text-slate-100">
                B.Tech in Computer Science &amp; Engineering
              </p>
              <p>ACE Engineering College (2021 – 2025)</p>
            </li>
            <li>
              <p className="font-medium text-slate-100">Intermediate (MPC)</p>
              <p>Narayana Junior College (2019 – 2021)</p>
            </li>
            <li>
              <p className="font-medium text-slate-100">
                Secondary School Certificate (SSC)
              </p>
              <p>Sri Chaitanya Techno School (2018 – 2019)</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
