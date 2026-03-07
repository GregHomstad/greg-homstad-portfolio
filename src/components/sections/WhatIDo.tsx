import { useScrollAnimation } from "../../hooks/useScrollAnimation"

const capabilities = [
    {
        title: "Functional Spec Authoring",
        description: "BRDs, FRDs, and functional specifications with traceable field mapping, validation logic, and acceptance criteria that engineering teams can build from.",
    },
    {
        title: "SAP & BOM Reconciliation",
        description: "Field-level validation between SAP ECC and internal BOM systems to eliminate production mismatches before they reach the floor.",
    },
    {
        title: "Cross-System Data Validation",
        description: "SAP ↔ BigQuery ↔ MySQL reconciliation queries and structured comparison logic. If it doesn't match, I find where it breaks.",
    },
    {
        title: "Stakeholder Alignment",
        description: "Finance, Manufacturing, and IT workshop facilitation. Structured sessions that turn competing priorities into documented, agreed-upon requirements.",
    },
    {
        title: "Governance & Controls",
        description: "Schema enforcement, validation rules, and production-safe system logic that holds up under audit.",
    },
    {
        title: "ERP Data Modeling",
        description: "Routing structures, PLMZ mapping, CRHD hierarchy, and system traceability across enterprise platforms.",
    },
]

export default function WhatIDo() {
    const { ref, isVisible } = useScrollAnimation()
    return (
        <section ref={ref} className={`py-32 px-6 section-accent-glow fade-up${isVisible ? ' visible' : ''}`}>
            <div className="max-w-[1200px] mx-auto">
                <div className="text-label mb-4">Capabilities</div>
                <h2 className="text-display text-[clamp(2rem,5vw,3.5rem)] text-[var(--text)] mb-16 max-w-[600px]">
                    What I Actually Do
                </h2>

                <div className={`stagger${isVisible ? ' visible' : ''}`}>
                    {capabilities.map((item) => (
                        <div key={item.title} className="editorial-row grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-12 py-8 border-b border-[var(--border)]">
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
