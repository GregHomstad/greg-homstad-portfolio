import { useCallback } from "react"
import Particles from "react-tsparticles"
import type { Engine } from "tsparticles-engine"
import { loadSlim } from "tsparticles-slim"

export default function ParticleBackground() {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return null

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine)
    }, [])

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            className="absolute inset-0 z-0 pointer-events-none"
            options={{
                fpsLimit: 60,
                fullScreen: false,
                background: {
                    color: "transparent",
                },
                particles: {
                    number: {
                        value: 45,
                        density: {
                            enable: true,
                            area: 800,
                        },
                    },
                    color: {
                        value: "#94a3b8", // slate-400
                    },
                    opacity: {
                        value: 0.35,
                    },
                    size: {
                        value: { min: 1, max: 2 },
                    },
                    move: {
                        enable: true,
                        speed: 0.6,
                        direction: "none",
                        outModes: {
                            default: "out",
                        },
                    },
                    links: {
                        enable: true,
                        distance: 140,
                        color: "#64748b", // slate-500
                        opacity: 0.25,
                        width: 1,
                    },
                },
                interactivity: {
                    events: {
                        resize: true,
                    },
                },
                detectRetina: true,
            }}
        />
    )
}
