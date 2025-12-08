import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="py-12 border-t border-slate-800/70">
      <h2 className="text-xl sm:text-2xl font-semibold text-slate-50 mb-3">
        Projects
      </h2>
      <p className="text-sm text-slate-400 mb-6">
        Selected work combining ML, computer vision and full-stack development.
      </p>

      <div className="space-y-5">
        {/* SyndromeScan */}
        <article className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 sm:p-5">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
            <div>
              <h3 className="text-lg font-semibold text-slate-50">
                SyndromeScan
              </h3>
              <p className="text-xs text-emerald-300/80">
                Major Project • ML Engineer &amp; Computer Vision
              </p>
            </div>
            <span className="text-[11px] px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/50 text-emerald-300">
              96.2% accuracy • 105 FPS
            </span>
          </div>

          <p className="text-xs text-slate-400 mb-2">
            <span className="font-medium text-slate-200">Tech:</span> Python,
            VGG16, NMF, LightGBM, OpenCV, MobileNet, SVM
          </p>

          <div className="grid sm:grid-cols-[1.2fr,1.4fr] gap-4 text-xs text-slate-300">
            <div className="space-y-2">
              <p>
                <span className="font-semibold text-slate-100">Problem:</span>{" "}
                Early detection of Down Syndrome from facial images is often
                delayed or limited to specialist access.
              </p>
              <p>
                <span className="font-semibold text-slate-100">Solution:</span>{" "}
                Designed VNL-Net (VGG16 → NMF → LightGBM) for robust
                deep-feature extraction and classification. Deployed a
                MobileNet + SVM model optimized for real-time inference at{" "}
                <span className="text-emerald-300 font-semibold">105 FPS</span>
                , ideal for mobile or edge devices.
              </p>
            </div>
            <div className="space-y-2">
              <p>
                <span className="font-semibold text-slate-100">Highlights:</span>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>~96.2% test accuracy on facial image dataset.</li>
                <li>Real-time inference performance for deployment scenarios.</li>
                <li>Based on research paper &quot;Automated Facial Analysis for Early Detection of Down Syndrome&quot;.</li>
              </ul>
            </div>
          </div>
        </article>

        {/* CALM-MIND */}
        <article className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 sm:p-5">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
            <div>
              <h3 className="text-lg font-semibold text-slate-50">
                CALM-MIND
              </h3>
              <p className="text-xs text-emerald-300/80">
                Minor Project • Full-stack &amp; ML
              </p>
            </div>
            <span className="text-[11px] px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/50 text-cyan-300">
              59+ emotion types • CV-guided yoga
            </span>
          </div>

          <p className="text-xs text-slate-400 mb-2">
            <span className="font-medium text-slate-200">Tech:</span> Python,
            Flask, MySQL, YOLO, PoseNet, SVD, HTML, CSS, JS
          </p>

          <div className="grid sm:grid-cols-[1.2fr,1.4fr] gap-4 text-xs text-slate-300">
            <div className="space-y-2">
              <p>
                <span className="font-semibold text-slate-100">Problem:</span>{" "}
                Mental well-being tools often lack personalization and real-time
                feedback on user posture and emotions.
              </p>
              <p>
                <span className="font-semibold text-slate-100">Solution:</span>{" "}
                Built a web app that recommends yoga poses using SVD-based
                recommendation, tracks posture via YOLO + PoseNet, and integrates
                an emotion-aware chatbot handling{" "}
                <span className="text-emerald-300 font-semibold">59</span> emotion
                types with history tracking for users.
              </p>
            </div>
            <div className="space-y-2">
              <p>
                <span className="font-semibold text-slate-100">Highlights:</span>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Real-time pose correction using computer vision.</li>
                <li>Mood-based yoga recommendation using SVD.</li>
                <li>Personal dashboard with past sessions and emotional trends.</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
