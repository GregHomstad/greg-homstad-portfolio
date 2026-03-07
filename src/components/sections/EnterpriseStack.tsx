import { useScrollAnimation } from "../../hooks/useScrollAnimation"

const stacks = [
    {
        category: "Enterprise Systems",
        items: ["SAP ECC", "Routing (C203)", "BOM (CS03)", "PLMZ", "CRHD / CRHS / CRTX"],
    },
    {
        category: "Data & Analytics",
        items: ["BigQuery", "MySQL", "SQL", "GCP", "Cross-System Reconciliation", "Excel"],
    },
    {
        category: "AI & Automation",
        items: ["Claude (Anthropic)", "AI-Assisted Analysis", "Prompt Engineering", "Workflow Automation", "Documentation AI"],
    },
]

export default function EnterpriseStack() {
    const { ref, isVisible } = useScrollAnimation()
    return (
        <section ref={ref} className={`py-32 px-6 fade-up${isVisible ? ' visible' : ''}`}>
            <div className="max-w-[1200px] mx-auto">
                <div className="text-label mb-4">Technical Stack</div>
                <h2 className="text-display text-[clamp(2rem,5vw,3.5rem)] text-[var(--text)] mb-16 max-w-[600px]">
                    Enterprise Technical Stack
                </h2>

                <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 stagger${isVisible ? ' visible' : ''}`}>
                    {stacks.map((stack) => (
                        <div key={stack.category}>
                            <h3 className="text-[0.95rem] text-[var(--text)] mb-5 pb-3 border-b border-[var(--accent)] border-opacity-30">
                                {stack.category}
                            </h3>
                            <ul className="space-y-2.5">
                                {stack.items.map((item) => (
                                    <li key={item} className="text-[0.85rem] text-[var(--muted)] font-light">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
