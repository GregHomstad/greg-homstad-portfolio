import { Link } from "react-router-dom"
import { caseStudies } from "../data/caseStudies"
import type { CaseStudy } from "../data/caseStudies"

export default function CaseStudies() {
    return (
        <section className="pt-28 pb-24 px-6">
            {/* Layout container (controls width) */}
            <div className="max-w-7xl mx-auto">
                {/* Glass container (hugs content) */}
                <div
                    className="
                        inline-block
                        w-full
                        bg-white/8 backdrop-blur-xl
                        border border-white/15
                        rounded-3xl
                        px-14 py-16
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
                    "
                >
                    {/* Header */}
                    <div className="mb-14">
                        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                            Case Studies
                        </h1>
                        <p className="mt-4 text-slate-400 max-w-2xl leading-relaxed">
                            These case studies show how I owned large, complex initiatives end to end.
                            I start by defining the problem and business context, then work through
                            requirements, system design, delivery, and post-implementation validation.
                            <br /><br />
                            The work reflects hands-on collaboration with engineering, business, and
                            operations teams, with a focus on prioritization, reducing risk, protecting
                            data integrity, and delivering results through production.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {caseStudies.map((item: CaseStudy) => (
                            <Link
                                key={item.slug}
                                to={`/case-studies/${item.slug}`}
                                className="
                                    group
                                    relative
                                    rounded-2xl
                                    border border-white/10
                                    bg-slate-900/40
                                    p-6
                                    transition-all duration-300
                                    hover:-translate-y-0.5
                                    hover:border-blue-400/40
                                    hover:bg-slate-900/60
                                    hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.6)]
                                "
                            >
                                {/* subtle hover glow */}
                                <div
                                    className="
                                        pointer-events-none
                                        absolute inset-0
                                        rounded-2xl
                                        opacity-0
                                        group-hover:opacity-100
                                        transition
                                        bg-gradient-to-br
                                        from-blue-500/5
                                        to-transparent
                                    "
                                />

                                <h2 className="relative text-lg font-semibold text-white">
                                    {item.title}
                                </h2>

                                <p className="relative mt-3 text-sm text-slate-400 leading-relaxed">
                                    {item.overview}
                                </p>

                                <div className="relative mt-4 flex flex-wrap gap-2">
                                    {item.tags.map((tag: string) => (
                                        <span
                                            key={tag}
                                            className="
                                                rounded-full
                                                bg-slate-800
                                                px-3
                                                py-1
                                                text-xs
                                                text-slate-300
                                                transition
                                                group-hover:bg-slate-700
                                            "
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="relative mt-6 text-sm font-medium text-blue-400 transition group-hover:text-blue-300">
                                    Read full case study →
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}