import React, { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import './Particles.css';

// Einfache Particles-Hintergrundkomponente mit @tsparticles/react
export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    // lädt die slim-Engine (performanter, enthält die wichtigsten Features)
    await loadSlim(engine);
  }, []);

  const options = {
    fullScreen: { enable: false },
    detectRetina: true,
    fpsLimit: 60,
    particles: {
      number: { value: 40, density: { enable: true, area: 800 } },
      color: { value: '#ffffff' },
      shape: { type: 'circle' },
      opacity: { value: 0.15 },
      size: { value: { min: 1, max: 4 } },
      move: {
        enable: true,
        speed: 0.6,
        direction: 'none',
        outModes: { default: 'out' }
      },
      links: {
        enable: true,
        distance: 120,
        color: '#ffffff',
        opacity: 0.05,
        width: 1
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        onClick: { enable: false }
      },
      modes: { repulse: { distance: 80 } }
    }
  };

  return (
    <div className="particles-wrapper" aria-hidden>
      <Particles id="tsparticles" init={particlesInit} options={options} className="particles-canvas" />
    </div>
  );
}
