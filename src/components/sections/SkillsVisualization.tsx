import { useScrollAnimation } from "../../hooks/useScrollAnimation"

const skills = [
    "Business Requirements & Documentation",
    "Stakeholder Facilitation & Alignment",
    "SAP ECC & Enterprise ERP",
    "Cross-System Data Validation",
    "Governance & Audit Controls",
    "AI-Assisted Process Analysis",
]

export default function SkillsVisualization() {
    const { ref, isVisible } = useScrollAnimation()
    return (
        <section ref={ref} className={`py-32 px-6 border-t border-[var(--border)] fade-up${isVisible ? ' visible' : ''}`}>
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div>
                        <div className="text-label mb-4">Expertise</div>
                        <h2 className="text-display text-[clamp(2rem,5vw,3.5rem)] text-[var(--text)] mb-6">
                            Core Competencies
                        </h2>
                        <p className="text-[0.95rem] text-[var(--muted)] leading-[1.8] font-light">
                            Measured against enterprise delivery standards across
                            manufacturing, finance, and data platforms.
                        </p>
                    </div>

                    <div className={`stagger${isVisible ? ' visible' : ''}`}>
                        {skills.map((skill) => (
                            <div key={skill} className="flex items-center gap-4 py-4 border-b border-[var(--border)] group">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                                <span className="text-[0.95rem] text-[var(--muted)] group-hover:text-[var(--text)] transition-colors duration-300">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
