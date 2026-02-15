type Capability = {
    title: string
    description: string
}

const capabilities: Capability[] = [
    {
        title: "SAP Recipe & BOM Reconciliation",
        description:
            "Field-level validation between SAP ECC and internal BOM systems to eliminate production mismatches.",
    },
    {
        title: "Functional Spec Authoring",
        description:
            "BRD / FRD / Functional Specifications with traceable field mapping and validation logic.",
    },
    {
        title: "Cross-System Data Validation",
        description:
            "SAP ↔ BigQuery ↔ MySQL reconciliation queries and structured comparison logic.",
    },
    {
        title: "Stakeholder Alignment",
        description:
            "Finance, Manufacturing, and IT workshop facilitation with structured requirements capture.",
    },
    {
        title: "Governance Controls",
        description:
            "Schema enforcement, validation rules, and production-safe system logic.",
    },
    {
        title: "ERP Data Modeling",
        description:
            "Routing structures, PLMZ mapping, CRHD hierarchy integration, and system traceability.",
    },
]

export default function WhatIDo() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        What I Actually Do
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Enterprise manufacturing systems require structure,
                        validation, and cross-functional clarity.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {capabilities.map((item) => (
                        <div
                            key={item.title}
                            className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-400/40 transition duration-300"
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