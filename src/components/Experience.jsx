import React from 'react'

export default function Experience() {
  return (
    <section id="experience" className="py-10 border-t border-slate-800/70">
      <h2 className="text-xl sm:text-2xl font-semibold text-slate-50 mb-4">Experience &amp; Education</h2>
      <div className="grid lg:grid-cols-[3fr,2fr] gap-8">
        <div className="space-y-4 text-sm text-slate-300">
          <div className="rounded-2xl bg-slate-950/70 border border-slate-800/80 p-4">
            <p className="text-sm font-semibold text-slate-50">Data Analytics Job Simulation</p>
            <p className="text-xs text-emerald-300/80 mb-1">Deloitte (Forage) • 2025</p>
            <p className="text-xs">
              Worked through a virtual job simulation covering data cleaning, visualization, insight generation,
              and stakeholder-ready reporting.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-950/70 border border-slate-800/80 p-4">
            <p className="text-sm font-semibold text-slate-50">Salesforce Developer Virtual Internship</p>
            <p className="text-xs text-emerald-300/80 mb-1">Smart Internz • 2024</p>
            <p className="text-xs">
              Gained experience with Salesforce CRM, custom objects, and cloud-based development workflows.
            </p>
          </div>
        </div>
        <div className="rounded-2xl bg-slate-950/70 border border-slate-800/80 p-4 text-sm text-slate-300">
          <h3 className="text-sm font-semibold text-slate-50 mb-3">Education</h3>
          <ul className="space-y-3">
            <li>
              <p className="font-medium text-slate-100">B.Tech in Computer Science &amp; Engineering</p>
              <p>ACE Engineering College (2021 – 2025)</p>
            </li>
            <li>
              <p className="font-medium text-slate-100">Intermediate (MPC)</p>
              <p>Narayana Junior College (2019 – 2021)</p>
            </li>
            <li>
              <p className="font-medium text-slate-100">Secondary School Certificate (SSC)</p>
              <p>Sri Chaitanya Techno School (2018 – 2019)</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
