import React from "react";

const groups = [
  {
    title: "Programming & Core",
    items: ["Python", "SQL"],
  },
  {
    title: "Web & Backend",
    items: ["Flask", "REST APIs", "HTML", "CSS"],
  },
  {
    title: "ML & CV",
    items: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "LightGBM",
      "OpenCV",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS EC2", "AWS S3", "Azure Fundamentals", "Docker (Basics)"],
  },
  {
    title: "Data & BI",
    items: ["MySQL", "MongoDB", "Power BI", "Tableau", "Excel"],
  },
  {
    title: "Practices",
    items: ["SDLC", "Agile (Scrum)", "Unit Testing", "Requirement Analysis"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-14 sm:py-20 border-t border-slate-800/70"
    >
      <div className="max-w-6xl mx-auto px-5">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100 mb-3">
          Skills
        </h2>

        <p className="text-slate-400 text-sm sm:text-base mb-10 max-w-3xl">
          A balanced skill set focused on data analysis, analytics engineering,
          and applied machine learning.
        </p>

        {/* Skill Cards */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.title}
              className="relative rounded-2xl
                         border border-slate-800/80
                         bg-slate-950/80
                         p-5 sm:p-6"
            >
              {/* Glow */}
              <div className="absolute inset-px rounded-2xl opacity-40
                              bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.2),_transparent_55%)]
                              pointer-events-none" />

              <div className="relative">
                <h3 className="text-sm sm:text-base font-semibold text-slate-100 mb-3">
                  {group.title}
                </h3>

                {/* Pills */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="
                        px-3 py-1.5
                        rounded-full
                        bg-slate-900/80
                        border border-slate-700/80
                        text-xs sm:text-sm
                        text-slate-200
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
