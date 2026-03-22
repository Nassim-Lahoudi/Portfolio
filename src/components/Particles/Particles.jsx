import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function BackgroundParticles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      if (mounted) {
        setReady(true);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 60,
      detectRetina: true,
      background: { color: "transparent" },
      particles: {
        number: {
          value: 60,
          density: { enable: true, area: 900 },
        },
        color: { value: "#b6e3a8" },
        links: {
          enable: true,
          color: "#94c486",
          distance: 140,
          opacity: 0.28,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          outModes: { default: "out" },
        },
        opacity: { value: 0.42 },
        size: { value: { min: 1, max: 3 } },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: { enable: true },
        },
        modes: {
          grab: {
            distance: 160,
            links: { opacity: 0.42 },
          },
        },
      },
    }),
    []
  );

  if (!ready) {
    return null;
  }

  return (
    <div className="background-particles" aria-hidden="true">
      <Particles id="portfolio-particles" options={options} />
    </div>
  );
}

export default BackgroundParticles;
