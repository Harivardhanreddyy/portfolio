import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        background: {
          color: "transparent",
        },
        fullScreen: { enable: false },
        particles: {
          number: {
            value: 40,
            density: { enable: true, area: 800 },
          },
          color: { value: ["#34d399", "#0ea5e9"] }, // emerald + cyan
          shape: { type: "circle" },
          opacity: {
            value: 0.25,
          },
          size: {
            value: { min: 1, max: 3 },
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            random: true,
            outModes: "out",
          },
          links: {
            enable: true,
            distance: 130,
            color: "#34d399",
            opacity: 0.2,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            grab: {
              distance: 150,
              links: { opacity: 0.4 },
            },
          },
        },
      }}
    />
  );
}
