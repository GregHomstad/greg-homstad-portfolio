import { Link } from "react-router-dom"

export default function FeaturedCaseStudies() {
    return (
        <section
            aria-labelledby="featured-case-studies-heading"
            className="py-24 px-6"
        >
            {/* Glass container */}
            <div
                className="
                    max-w-7xl mx-auto
                    bg-white/5 backdrop-blur-xl
                    border border-white/10
                    rounded-3xl
                    px-14 py-16
                "
            >
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* LEFT: Text content */}
                    <div className="max-w-xl pt-1">
                        {/* Section label */}
                        <div
                            className="
                                inline-block mb-7 px-6 py-2
                                rounded-full
                                bg-violet-400/20
                                border border-violet-400/30
                            "
                        >
                            <span className="text-sm font-semibold tracking-wide text-violet-200">
                                Case Studies
                            </span>
                        </div>

                        {/* Heading */}
                        <h2
                            id="featured-case-studies-heading"
                            className="
                                text-4xl md:text-5xl lg:text-6xl
                                font-bold tracking-tight
                                leading-[1.15]
                                text-white
                                mb-6
                            "
                        >
                            Enterprise Case Studies
                        </h2>

                        {/* Description */}
                        <p className="text-lg text-slate-300 leading-relaxed">
                            A selection of enterprise initiatives spanning SAP reporting,
                            financial compliance, and platform modernization. These case
                            studies reflect my ownership of requirements and functional
                            design through delivery. I partner closely with
                            engineering, architects, and business stakeholders to ship scalable,
                            production-ready solutions.
                        </p>

                        {/* CTA */}
                        <div className="mt-10">
                            <Link
                                to="/case-studies"
                                className="
                                    inline-flex items-center gap-2
                                    rounded-xl
                                    bg-white/5
                                    px-7 py-4
                                    text-base font-medium text-white
                                    border border-white/15
                                    transition-all duration-200
                                    hover:bg-white/10
                                    hover:border-violet-400/40
                                    hover:-translate-y-0.5
                                    focus-visible:outline-none
                                    focus-visible:ring-2
                                    focus-visible:ring-violet-400/60
                                "
                            >
                                View all case studies
                                <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT: Featured case study preview (desktop only) */}
                    <div className="relative hidden lg:flex justify-end">
                        <div
                            className="
      relative
      w-full max-w-sm
      bg-white/4 backdrop-blur-xl
      border border-white/15
      rounded-2xl
      p-5
      shadow-xl
  "
                        >

                            {/* Preview header */}
                            <div className="mb-4">
                                <span className="text-xs uppercase tracking-wide text-slate-400">
                                    Featured Case Study
                                </span>
                                <h3 className="mt-1 text-xl font-semibold text-white">
                                    SAP BOM Portal Modernization
                                </h3>
                            </div>

                            {/* Document preview */}
                            <div
                                className="
                                    aspect-[1/1.2]
                                    rounded-xl
                                    bg-gradient-to-br from-slate-800/60 to-slate-900/60
                                    border border-white/10
                                    p-4
                                    flex flex-col gap-3
                                "
                            >
                                <div className="h-3 w-2/3 bg-white/20 rounded" />
                                <div className="h-3 w-1/2 bg-white/15 rounded" />
                                <div className="h-3 w-3/4 bg-white/10 rounded" />

                                <div className="mt-4 h-2 w-full bg-white/10 rounded" />
                                <div className="h-2 w-5/6 bg-white/10 rounded" />
                                <div className="h-2 w-4/6 bg-white/10 rounded" />

                                <div className="mt-auto pt-4 border-t border-white/10">
                                    <span className="text-xs text-slate-400">
                                        Functional specification · Requirements · Data flows
                                    </span>
                                </div>
                            </div>

                            {/* Preview CTA */}
                            <Link
                                to="/case-studies/sap-bom-portal"
                                className="
                                    mt-4 inline-flex items-center gap-2
                                    text-sm font-medium text-violet-300
                                    hover:text-violet-200
                                    transition-colors
                                "
                            >
                                View case study
                                <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
