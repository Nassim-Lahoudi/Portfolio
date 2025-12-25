/**
 * ParticlesBackground Component
 *
 * Renders an animated particle background using tsparticles library.
 * The particles create an interactive network effect with subtle animations.
 *
 * Features:
 * - Animated floating particles
 * - Connected particles with lines
 * - Mouse interaction (repulse effect on hover)
 * - Optimized performance with slim engine
 */

import React, { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import './Particles.css';

export default function ParticlesBackground() {
  // Initialize particles engine with slim preset for better performance
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Particle configuration options
  const options = {
    fullScreen: { enable: false },  // Don't take full screen, positioned via CSS
    detectRetina: true,             // Enable retina display support for crisp graphics
    fpsLimit: 60,                   // Limit frame rate for performance

    particles: {
      // Number and distribution of particles
      number: {
        value: 40,                    // Total particle count
        density: {
          enable: true,
          area: 800                   // Particle density per 800px area
        }
      },

      // Visual appearance
      color: { value: '#ffffff' },    // White particles
      shape: { type: 'circle' },      // Circular particles
      opacity: { value: 0.15 },       // Subtle transparency
      size: { value: { min: 1, max: 4 } }, // Random size variation

      // Movement behavior
      move: {
        enable: true,                 // Enable particle movement
        speed: 0.6,                   // Slow, gentle movement
        direction: 'none',            // Random direction
        outModes: { default: 'out' }  // Particles leave and respawn
      },

      // Connection lines between particles
      links: {
        enable: true,                 // Show connection lines
        distance: 120,                // Max distance for connections
        color: '#ffffff',             // White lines
        opacity: 0.05,                // Very subtle lines
        width: 1                      // Thin lines
      }
    },

    // User interaction settings
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse'             // Particles move away from cursor
        },
        onClick: { enable: false }    // No click interaction
      },
      modes: {
        repulse: { distance: 80 }     // Repulse effect radius
      }
    }
  };

  return (
    <div className="particles-wrapper" aria-hidden="true">
      {/* Particles canvas - positioned behind page content */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={options}
        className="particles-canvas"
      />
    </div>
  );
}
