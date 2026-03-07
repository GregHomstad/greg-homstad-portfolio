import { useScrollAnimation } from "../../hooks/useScrollAnimation"
import { useEffect, useRef, useState } from "react"

const metrics = [
    { value: 50, suffix: "+", label: "BRDs Authored" },
    { value: 25, suffix: "+", label: "Functional Specs" },
    { value: 80, suffix: "+", label: "Infrastructure Projects" },
    { value: 4, suffix: "+", label: "Years Enterprise" },
]

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0)
    const ref = useRef<HTMLDivElement>(null)
    const started = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true
                    const duration = 1500
                    const start = performance.now()

                    const animate = (now: number) => {
                        const elapsed = now - start
                        const progress = Math.min(elapsed / duration, 1)
                        // Ease out cubic
                        const eased = 1 - Math.pow(1 - progress, 3)
                        setCount(Math.round(eased * target))
                        if (progress < 1) requestAnimationFrame(animate)
                    }
                    requestAnimationFrame(animate)
                }
            },
            { threshold: 0.5 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [target])

    return (
        <div ref={ref} className="text-display text-[clamp(3rem,6vw,5rem)] text-[var(--accent)] counter-value leading-none mb-3">
            {count}{suffix}
        </div>
    )
}

export default function Impact() {
    const { ref, isVisible } = useScrollAnimation()
    return (
        <section ref={ref} className={`py-32 px-6 section-accent-glow fade-up${isVisible ? ' visible' : ''}`}>
            <div className="max-w-[1200px] mx-auto">
                <div className="text-label mb-4">Impact</div>
                <h2 className="text-display text-[clamp(2rem,5vw,3.5rem)] text-[var(--text)] mb-20">
                    By the Numbers
                </h2>

                <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 stagger${isVisible ? ' visible' : ''}`}>
                    {metrics.map((m, i) => (
                        <div
                            key={m.label}
                            className={`text-center ${i > 0 ? 'md:border-l md:border-[var(--border)]' : ''}`}
                        >
                            <AnimatedNumber target={m.value} suffix={m.suffix} />
                            <div className="text-[0.75rem] text-[var(--muted)] tracking-[0.08em] uppercase font-light">
                                {m.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
