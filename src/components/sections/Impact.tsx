type Metric = {
    value: string
    label: string
}

const metrics: Metric[] = [
    { value: "50+", label: "BRDs Authored" },
    { value: "25+", label: "Functional Specs Delivered" },
    { value: "1,000+", label: "BOM Components Validated" },
    { value: "4+", label: "Years Enterprise Systems" },
]

export default function Impact() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Quantified Impact
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Enterprise manufacturing systems require measurable results.
                        These numbers represent production-level outcomes.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-10">
                    {metrics.map((metric) => (
                        <div key={metric.label}>
                            <div className="text-4xl font-bold text-white mb-3">
                                {metric.value}
                            </div>
                            <div className="text-slate-400 text-sm uppercase tracking-wide">
                                {metric.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}