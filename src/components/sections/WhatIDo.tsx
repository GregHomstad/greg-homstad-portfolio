import { useScrollAnimation } from "../../hooks/useScrollAnimation"

const capabilities = [
    {
        title: "Product Ownership",
        description: "End-to-end ownership of enterprise products — from requirements capture and stakeholder alignment through delivery validation and production monitoring.",
    },
    {
        title: "Enterprise Systems",
        description: "SAP S/4HANA, ERP platforms, and manufacturing systems. Deep understanding of how enterprise systems behave under load and at scale.",
    },
    {
        title: "Data Architecture",
        description: "Cross-system data reconciliation, BOM validation, Power BI reporting, and BigQuery analytics. Turning raw data into actionable operational intelligence.",
    },
    {
        title: "Requirements Engineering",
        description: "Structured BRDs, functional specifications, and acceptance criteria. Turning stakeholder conversations into documentation engineering teams can build from.",
    },
]

export default function WhatIDo() {
    const { ref, isVisible } = useScrollAnimation()
    return (
        <section
            ref={ref}
            className={`py-32 px-6 border-t border-[var(--border)] fade-up${isVisible ? " visible" : ""}`}
        >
            <div className="max-w-[1200px] mx-auto">
                <div className="text-label mb-4">What I Do</div>
                <h2 className="text-display text-[clamp(2rem,4vw,3rem)] text-[var(--text)] mb-16">
                    Core Capabilities
                </h2>

                <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 stagger${isVisible ? " visible" : ""}`}>
                    {capabilities.map((cap) => (
                        <div
                            key={cap.title}
                            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/40 px-6 py-6 md:px-7 md:py-7 hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)]/60 transition-colors duration-300"
                        >
                            <h3 className="text-[1.1rem] text-[var(--text)] text-display mb-3">
                                {cap.title}
                            </h3>
                            <p className="text-[0.85rem] text-[var(--muted)] font-light leading-[1.7]">
                                {cap.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
