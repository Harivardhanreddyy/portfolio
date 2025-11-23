import React from 'react'

export default function Projects() {
  return (
    <section id="projects" className="py-10 border-t border-slate-800/70">
      <h2 className="text-xl sm:text-2xl font-semibold text-slate-50 mb-4">Projects</h2>

      <article className="mb-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 p-4">
        <div className="flex items-center justify-between gap-3 mb-2">
          <div>
            <h3 className="text-lg font-semibold text-slate-50">SyndromeScan</h3>
            <p className="text-xs text-emerald-300/80">ML Engineer • Python Developer</p>
          </div>
          <span className="text-[11px] px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/40 text-emerald-300">
            Major Project
          </span>
        </div>
        <p className="text-xs text-slate-400 mb-2">
          <span className="font-medium text-slate-200">Tech:</span> Python, VGG16, NMF, LightGBM, OpenCV, MobileNet, SVM
        </p>
        <p className="text-sm text-slate-300 mb-1">
          Built an end-to-end ML pipeline for early detection of Down Syndrome in children using facial images,
          achieving ~96.2% accuracy with VNL-Net and 105 FPS inference using a MobileNet + SVM model.
        </p>
      </article>

      <article className="rounded-2xl bg-slate-950/70 border border-slate-800/80 p-4">
        <div className="flex items-center justify-between gap-3 mb-2">
          <div>
            <h3 className="text-lg font-semibold text-slate-50">CALM-MIND</h3>
            <p className="text-xs text-emerald-300/80">Full-Stack Developer • ML Engineer</p>
          </div>
          <span className="text-[11px] px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/40 text-emerald-300">
            Mini Project
          </span>
        </div>
        <p className="text-xs text-slate-400 mb-2">
          <span className="font-medium text-slate-200">Tech:</span> Python, Flask, MySQL, YOLO, PoseNet, SVD, HTML, CSS, JS
        </p>
        <p className="text-sm text-slate-300 mb-1">
          Developed an interactive web app for mental well-being combining mood-based yoga recommendations,
          real-time pose correction using computer vision, and an emotion-aware chatbot handling 59 emotions.
        </p>
      </article>
    </section>
  )
}
