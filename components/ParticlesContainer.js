import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";

const ParticlesContainer = () => {
  // Initialize the particles engine
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); // Load all tsparticles plugins
  }, []);

  // Handle particles loaded event (currently unused)
  const particlesLoaded = useCallback(() => {}, []);

  return (
    <Particles
      className="w-full h-full absolute translate-z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: { value: "" }, // Background color, if needed
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // Particles move away on hover
            },
            resize: true, // Particles adjust on window resize
          },
          modes: {
            push: { quantity: 90 }, // Add particles on event
            repulse: {
              distance: 200, // Repulse distance
              duration: 0.4, // Repulse duration
            },
          },
        },
        particles: {
          color: { value: "#e68e2e" }, // Particle color
          links: {
            color: "#f5d393",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: { enable: true }, // Enable particle collisions
          move: {
            enable: true,
            speed: 1,
            outModes: { default: "bounce" }, // Bounce when hitting edge
          },
          number: {
            density: { enable: true, area: 800 }, // Particle density
            value: 80, // Initial number of particles
          },
          opacity: { value: 0.5 }, // Particle opacity
          shape: { type: "circle" }, // Particle shape
          size: { value: { min: 1, max: 5 } }, // Particle size range
        },
        detectRetina: true, // Enable Retina display support
      }}
    />
  );
};

export default ParticlesContainer;
