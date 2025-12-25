import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

// ⭐ Scroll animations
import MotionFadeIn from './components/MotionFadeIn';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">

      <Navbar />

      {/* 👇 ADD pt-16 HERE TO FIX OVERLAP */}
      <main className="pt-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <MotionFadeIn delay={0}>
          <Hero />
        </MotionFadeIn>

        {/* About */}
        <MotionFadeIn delay={0.1}>
          <About />
        </MotionFadeIn>

        {/* Skills */}
        <MotionFadeIn delay={0.2}>
          <Skills />
        </MotionFadeIn>

        {/* Projects */}
        <MotionFadeIn delay={0.3}>
          <Projects />
        </MotionFadeIn>

        {/* Experience */}
        <MotionFadeIn delay={0.4}>
          <Experience />
        </MotionFadeIn>

        {/* Contact */}
        <MotionFadeIn delay={0.5}>
          <Contact />
        </MotionFadeIn>

      </main>

      <Footer />
    </div>
  );
}
