type StackCategory = {
    title: string
    items: string[]
}

const stack: StackCategory[] = [
    {
        title: "Enterprise Systems",
        items: [
            "SAP ECC",
            "Routing (C203)",
            "BOM (CS03)",
            "PLMZ",
            "CRHD / CRHS / CRTX",
        ],
    },
    {
        title: "Data Layer",
        items: [
            "BigQuery",
            "MySQL",
            "SQL",
            "GCP",
            "Cross-System Reconciliation",
        ],
    },
    {
        title: "Documentation",
        items: [
            "BRD",
            "FRD",
            "Functional Specs",
            "Process Mapping",
            "Validation Frameworks",
        ],
    },
    {
        title: "Delivery",
        items: [
            "Agile",
            "UAT",
            "Stakeholder Workshops",
            "Governance Controls",
            "Production Change Management",
        ],
    },
]

export default function EnterpriseStack() {
    return (
        <section className="py-24 px-6 bg-slate-900/40">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Enterprise Technical Stack
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Systems, data layers, documentation, and delivery
                        frameworks I operate within.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {stack.map((category) => (
                        <div
                            key={category.title}
                            className="p-8 bg-white/5 border border-white/10 rounded-2xl"
                        >
                            <h3 className="text-xl font-semibold mb-4">
                                {category.title}
                            </h3>

                            <ul className="space-y-2 text-slate-300 text-sm">
                                {category.items.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}