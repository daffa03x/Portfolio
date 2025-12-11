"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";
import type { Container, Engine } from "@tsparticles/engine";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    // Update particle color based on theme
    if (theme === "dark") {
        setColor("#ffffff");
    } else {
        setColor("#000000");
    }
  }, [theme]);

  if (!init) {
    return null;
  }

  return (
    <div className="absolute inset-0 -z-0">
        <Particles
            id="tsparticles"
            className="h-full w-full"
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        grab: {
                            distance: 140,
                            links: {
                                opacity: 0.5,
                            }
                        },
                    },
                },
                particles: {
                    color: {
                        value: color,
                    },
                    links: {
                        color: color,
                        distance: 150,
                        enable: true,
                        opacity: 0.2, // Subtle opacity
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1, // Slow movement
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                        },
                        value: 60, // Moderate density
                    },
                    opacity: {
                        value: 0.3, // Nice and transparent
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />
    </div>
  );
}
