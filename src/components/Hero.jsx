import React from "react";
import pic from "../assets/profile.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-[80vh] pt-28 pb-16 flex flex-col items-center 
                 text-center relative overflow-hidden"
    >

      {/* 🌫️ STATIC GRADIENT FOG BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10">

        {/* Emerald glow top-left */}
        <div
          className="absolute -top-24 -left-20 w-[420px] h-[420px]
                     bg-emerald-400/20 rounded-full blur-3xl"
        ></div>

        {/* Cyan glow top-right */}
        <div
          className="absolute -top-20 right-0 w-[350px] h-[350px]
                     bg-cyan-400/20 rounded-full blur-3xl"
        ></div>

        {/* Deep ambient fog bottom */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2
                     w-[800px] h-[350px]
                     bg-emerald-500/10 rounded-full blur-[100px]"
        ></div>
      </div>

      {/* 🌫️ ANIMATED MOVING FOG WAVES */}
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">

        {/* Moving emerald fog */}
        <div
          className="absolute w-[600px] h-[600px] bg-emerald-400/10
                     rounded-full blur-[120px] animate-fog-move-1
                     -left-40 top-20"
        ></div>

        {/* Moving cyan fog */}
        <div
          className="absolute w-[500px] h-[500px] bg-cyan-400/10
                     rounded-full blur-[140px] animate-fog-move-2
                     right-10 bottom-10"
        ></div>
      </div>

      {/* PROFILE PHOTO */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        whileHover={{
          scale: 1.07,
          rotate: 1,
          boxShadow:
            "0 0 40px rgba(45,212,191,0.35),0 0 80px rgba(59,130,246,0.25)",
        }}
        className="relative mb-6 rounded-full p-[4px]
                   border border-emerald-400/40
                   shadow-[0_0_30px_rgba(45,212,191,0.25)] z-10"
      >
        <img
          src={pic}
          alt="Harivardhan Reddy"
          className="w-44 h-44 rounded-full object-cover"
        />
      </motion.div>

      {/* OPEN TO ROLES BADGE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        whileHover={{
          scale: 1.06,
          boxShadow: "0 0 25px rgba(45,212,191,0.25)",
        }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                   border border-emerald-400/40 bg-emerald-500/10
                   text-emerald-300 text-sm font-medium mb-8 z-10"
      >
        <span className="inline-block w-2 h-2 rounded-full
                         bg-emerald-400 animate-pulse" />
        Open to roles: Python / ML / Data
      </motion.div>

      {/* MAIN TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl md:text-5xl font-semibold 
                   text-slate-100 leading-tight mb-4 z-10"
      >
        Building{" "}
        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400
                         bg-clip-text text-transparent">
          intelligent, real-time
        </span>{" "}
        systems with Python, ML & Data.
      </motion.h1>

      {/* SUBTITLE */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-2xl text-slate-400 text-sm sm:text-base mb-8 z-10"
      >
        I'm <span className="font-semibold text-slate-100">Y. Harivardhan Reddy</span>,
        a Python Developer & ML Engineer focused on building
        production-ready ML pipelines, computer vision systems,
        and data-driven web apps that are fast, scalable, and reliable.
      </motion.p>

      {/* ROLE TAGS */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-3 mb-8 z-10"
      >
        {[
          "Python Developer",
          "ML Engineer",
          "Data Analyst",
          "Computer Vision",
          "Cloud-aware",
        ].map((tag) => (
          <motion.span
            key={tag}
            whileHover={{
              scale: 1.15,
              backgroundColor: "rgba(45,212,191,0.18)",
              borderColor: "rgba(45,212,191,0.5)",
              color: "white",
              boxShadow: "0 0 20px rgba(45,212,191,0.25)",
            }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="px-4 py-1.5 text-[13px] rounded-full border border-slate-700/70
                       bg-slate-900/60 text-slate-300 cursor-default"
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4 z-10"
      >
        <motion.a
          href="#contact"
          whileHover={{
            scale: 1.07,
            backgroundColor: "rgba(45,212,191,0.25)",
            boxShadow: "0 0 25px rgba(45,212,191,0.35)",
          }}
          className="px-6 py-2 rounded-full text-sm font-medium bg-emerald-500/20
                     border border-emerald-400/40 text-emerald-300"
        >
          Let’s build something
        </motion.a>

        <motion.a
          href="https://github.com/Harivardhanreddyy"
          target="_blank"
          whileHover={{
            scale: 1.07,
            backgroundColor: "rgba(2,132,199,0.2)",
            boxShadow: "0 0 25px rgba(56,189,248,0.35)",
          }}
          className="px-6 py-2 rounded-full text-sm font-medium bg-slate-900/60
                     border border-slate-700/70 text-slate-300 flex items-center gap-1"
        >
          GitHub Profile →
        </motion.a>
      </motion.div>

    </section>
  );
}
