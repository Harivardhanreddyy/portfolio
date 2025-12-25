import React from "react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 sm:py-20 border-t border-slate-800/70"
    >
      <div className="max-w-6xl mx-auto px-5">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100 mb-4">
          Projects & Analytical Work
        </h2>

        <p className="text-slate-400 max-w-3xl mb-12">
          Academic projects demonstrating strong foundations in data analysis,
          machine learning, and computer vision, with emphasis on real-world
          problem solving and analytical thinking.
        </p>

        <div className="space-y-12 sm:space-y-16">

          {/* ================= MAJOR PROJECT ================= */}
          <div className="relative rounded-2xl border border-slate-800/80
                          bg-slate-950/70 p-6 sm:p-8">
            <div className="absolute inset-px rounded-2xl opacity-40
                            bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.18),_transparent_60%)]
                            pointer-events-none" />

            <div className="relative grid gap-6 lg:grid-cols-3">

              {/* LEFT */}
              <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold text-slate-100 mb-1">
                  SyndromeScan
                </h3>

                <p className="text-sm text-emerald-400 mb-4">
                  Major Project · Machine Learning & Computer Vision
                </p>

                <p className="text-sm text-slate-300 mb-3">
                  <span className="text-slate-100 font-medium">Tech:</span>{" "}
                  Python, VGG16, NMF, LightGBM, OpenCV, MobileNet, SVM
                </p>

                <p className="text-sm text-slate-300 mb-3">
                  <span className="text-slate-100 font-medium">Problem:</span>{" "}
                  Early detection of Down Syndrome from facial images is often
                  delayed due to limited specialist availability.
                </p>

                <p className="text-sm text-slate-300">
                  <span className="text-slate-100 font-medium">Solution:</span>{" "}
                  Designed a hybrid deep-learning pipeline with optimized
                  feature extraction and real-time inference capability.
                </p>
              </div>

              {/* RIGHT */}
              <div>
                <div className="flex lg:justify-end mb-4">
                  <span className="px-3 py-1 rounded-full text-xs
                                   border border-emerald-400/40
                                   bg-emerald-500/10
                                   text-emerald-300">
                    ~96.2% Accuracy · 105 FPS
                  </span>
                </div>

                <h4 className="text-sm font-semibold text-slate-100 mb-2">
                  Highlights
                </h4>

                <ul className="list-disc list-inside text-sm text-slate-300 space-y-2">
                  <li>High-accuracy facial analysis model.</li>
                  <li>Optimized for real-time deployment.</li>
                  <li>
                    Based on published research paper.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ================= MINOR PROJECT ================= */}
          <div className="relative rounded-2xl border border-slate-800/80
                          bg-slate-950/70 p-6 sm:p-8">
            <div className="absolute inset-px rounded-2xl opacity-40
                            bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_60%)]
                            pointer-events-none" />

            <div className="relative grid gap-6 lg:grid-cols-3">

              {/* LEFT */}
              <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold text-slate-100 mb-1">
                  CALM-MIND
                </h3>

                <p className="text-sm text-cyan-400 mb-4">
                  Minor Project · Full-stack & ML
                </p>

                <p className="text-sm text-slate-300 mb-3">
                  <span className="text-slate-100 font-medium">Tech:</span>{" "}
                  Python, Flask, MySQL, YOLO, PoseNet, SVD
                </p>

                <p className="text-sm text-slate-300 mb-3">
                  <span className="text-slate-100 font-medium">Problem:</span>{" "}
                  Lack of personalized mental well-being tools with real-time
                  feedback.
                </p>

                <p className="text-sm text-slate-300">
                  <span className="text-slate-100 font-medium">Solution:</span>{" "}
                  Built a yoga recommendation and posture-correction system
                  with emotion-aware analytics.
                </p>
              </div>

              {/* RIGHT */}
              <div>
                <div className="flex lg:justify-end mb-4">
                  <span className="px-3 py-1 rounded-full text-xs
                                   border border-cyan-400/40
                                   bg-cyan-500/10
                                   text-cyan-300">
                    59+ Emotions · CV-guided Yoga
                  </span>
                </div>

                <h4 className="text-sm font-semibold text-slate-100 mb-2">
                  Highlights
                </h4>

                <ul className="list-disc list-inside text-sm text-slate-300 space-y-2">
                  <li>Pose correction using computer vision.</li>
                  <li>Mood-based yoga recommendation.</li>
                  <li>Session history & analytics dashboard.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
