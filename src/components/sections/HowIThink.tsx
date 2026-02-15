type Principle = {
    title: string
    description: string
}

const principles: Principle[] = [
    {
        title: "No Assumption-Based Logic",
        description:
            "Every field is validated against its system-of-record before production deployment. No silent mismatches.",
    },
    {
        title: "Field-Level Discipline",
        description:
            "Throughput, crewing, scrap %, usage %, and routing logic are validated individually — never assumed.",
    },
    {
        title: "Governance Before Speed",
        description:
            "Enterprise manufacturing systems require structure, validation, and long-term stability over quick fixes.",
    },
]

export default function HowIThink() {
    return (
        <section className="py-24 px-6 bg-slate-900/40">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        How I Approach Complex Systems
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        My approach prioritizes production integrity, traceability,
                        and structured validation across enterprise systems.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {principles.map((item) => (
                        <div
                            key={item.title}
                            className="p-8 bg-white/5 border border-white/10 rounded-2xl"
                        >
                            <h3 className="text-xl font-semibold mb-4">
                                {item.title}
                            </h3>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}