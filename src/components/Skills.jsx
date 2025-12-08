import React from "react";
import { motion } from "framer-motion";

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
    items: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "LightGBM", "OpenCV"],
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
    <section id="skills" className="py-16 border-t border-slate-800/70">
      <h2 className="text-2xl font-semibold text-slate-50 mb-3">Skills</h2>
      <p className="text-sm text-slate-400 mb-10">
        A stack tuned for ML-driven products, analytics, and modern backend systems.
      </p>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{
              y: -6,
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.55)",
              borderColor: "rgba(45, 212, 191, 0.4)",
            }}
            className="relative rounded-2xl border border-slate-800 bg-slate-950/70 p-5
                       transition-all duration-300"
          >
            {/* Radial Glow */}
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.18),_transparent_65%)] pointer-events-none rounded-2xl" />

            {/* Content */}
            <div className="relative">
              <h3 className="text-sm font-semibold text-slate-100 mb-3 tracking-wide">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{
                      scale: 1.12,
                      backgroundColor: "rgba(45,212,191,0.2)",
                      borderColor: "rgba(45,212,191,0.5)",
                      color: "white",
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="px-3 py-1 rounded-full border border-slate-700/70 
                               bg-slate-900/70 text-[11px] text-slate-300 
                               transition-all duration-200"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
