import { useScrollAnimation } from "../../hooks/useScrollAnimation"

const principles = [
    {
        title: "No Assumption-Based Logic",
        description:
            "Every field is validated against its system-of-record before production deployment. No silent mismatches, no inherited technical debt passed downstream.",
    },
    {
        title: "Field-Level Discipline",
        description:
            "Throughput, crewing, scrap %, usage %, and routing logic are validated individually — never assumed from prior state or partial data.",
    },
    {
        title: "Governance Before Speed",
        description:
            "Enterprise manufacturing systems require structure, validation, and long-term stability. Quick fixes that bypass controls create audit exposure and operational risk.",
    },
]

export default function HowIThink() {
    const { ref, isVisible } = useScrollAnimation()
    return (
        <section ref={ref} className={`py-32 px-6 fade-up${isVisible ? ' visible' : ''}`}>
            <div className="max-w-[1200px] mx-auto">
                <div className="text-label mb-4">Philosophy</div>
                <h2 className="text-display text-[clamp(2rem,5vw,3.5rem)] text-[var(--text)] mb-16 max-w-[600px]">
                    How I Approach Complex Systems
                </h2>

                <div className={`stagger${isVisible ? ' visible' : ''}`}>
                    {principles.map((item) => (
                        <div
                            key={item.title}
                            className="editorial-row grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-12 py-8 border-b border-[var(--border)]"
                        >
                            <h3 className="text-[1.1rem] text-[var(--text)] font-normal">
                                {item.title}
                            </h3>
                            <p className="text-[0.9rem] text-[var(--muted)] leading-[1.8] font-light">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
