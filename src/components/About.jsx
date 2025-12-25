import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-slate-800/70">
      <div className="max-w-5xl">
        <h2 className="text-3xl font-semibold text-slate-100 mb-6">
          About Me
        </h2>

        <div className="space-y-6 text-slate-300 text-[15px] leading-relaxed">
          <p>
            I’m <span className="font-semibold text-slate-100">
              Yadaram Harivardhan Reddy
            </span>, a{" "}
            <span className="text-emerald-400 font-medium">
              Data Analyst & Business Analytics aspirant
            </span>{" "}
            with a strong academic foundation in Python, SQL, Power BI, and
            Excel. I enjoy working with data to uncover patterns, build
            dashboards, and translate raw information into clear, actionable
            insights.
          </p>

          <p>
            As a fresh graduate, my focus is on{" "}
            <span className="font-medium text-slate-100">
              data cleaning, exploratory analysis, visualization, and reporting
            </span>{" "}
            that support better decision-making. I’m particularly interested in
            how analytics can be applied to real-world business and operational
            problems.
          </p>

          <p>
            Alongside analytics, I also have hands-on academic experience in{" "}
            <span className="font-medium text-slate-100">
              Machine Learning and Computer Vision
            </span>. This background strengthens my understanding of data,
            feature engineering, and model evaluation, while keeping my primary
            career focus on data analytics roles.
          </p>

          <p>
            I’m actively seeking entry-level opportunities where I can grow as a
            Data Analyst, collaborate with teams, and contribute to data-driven
            decision-making.
          </p>
        </div>
      </div>
    </section>
  );
}
