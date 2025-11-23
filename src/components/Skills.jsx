import React from 'react'

const groups = [
  { title: 'Programming & Core', items: ['Python', 'SQL'] },
  { title: 'Web & Backend', items: ['Flask', 'REST APIs', 'HTML', 'CSS'] },
  { title: 'Cloud & DevOps', items: ['AWS EC2', 'AWS S3', 'Azure Fundamentals', 'Docker (Basics)'] },
  { title: 'ML, CV & Data', items: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'LightGBM', 'OpenCV'] },
  { title: 'Analytics & BI', items: ['MySQL', 'MongoDB', 'Power BI', 'Tableau', 'Excel'] },
  { title: 'Practices', items: ['SDLC', 'Agile (Scrum)', 'Unit Testing', 'Requirement Analysis'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-10 border-t border-slate-800/70">
      <h2 className="text-xl sm:text-2xl font-semibold text-slate-50 mb-3">Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl bg-slate-950/60 border border-slate-800/80 p-4"
          >
            <h3 className="text-sm font-semibold text-slate-100 mb-2">{group.title}</h3>
            <ul className="flex flex-wrap gap-2 text-xs text-slate-300">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="px-2.5 py-1 rounded-full bg-slate-900/70 border border-slate-700/70"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
