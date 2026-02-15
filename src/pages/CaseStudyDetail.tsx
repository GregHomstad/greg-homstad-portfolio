import { useParams, Link } from "react-router-dom"
import { caseStudies } from "../data/caseStudies"
import type { CaseStudy, CaseStudyDocument } from "../data/caseStudies"

export default function CaseStudyDetail() {
    const { slug } = useParams<{ slug: string }>()

    const caseStudy = caseStudies.find(
        (c: CaseStudy) => c.slug === slug
    )

    if (!caseStudy) {
        return (
            <section className="pt-28 px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-2xl font-semibold text-white">
                        Case study not found
                    </h1>
                    <Link
                        to="/case-studies"
                        className="mt-4 inline-block text-blue-400 hover:text-blue-300"
                    >
                        ← Back to case studies
                    </Link>
                </div>
            </section>
        )
    }

    return (
        <section className="pt-28 pb-24 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Back link */}
                <Link
                    to="/case-studies"
                    className="text-sm text-slate-400 hover:text-white transition"
                >
                    ← Back to case studies
                </Link>

                {/* Title */}
                <h1 className="mt-3 text-3xl md:text-4xl font-bold text-white">
                    {caseStudy.title}
                </h1>

                {/* Overview */}
                <p className="mt-4 text-slate-300 leading-relaxed max-w-3xl">
                    {caseStudy.overview}
                </p>

                {/* Content */}
                <div className="mt-10 space-y-6">
                    {/* 01 */}
                    <section>
                        <h2 className="text-xl font-semibold text-white">
                            It All Started When…
                        </h2>
                        <p className="mt-2 text-slate-300 leading-relaxed">
                            Finance stakeholders identified a recurring
                            reconciliation bottleneck within SAP cost center
                            line-item reporting. Although key reference data
                            existed within SAP, users were required to navigate
                            multiple screens and document headers to identify
                            posting origins.
                        </p>
                    </section>

                    {/* 02 */}
                    <section>
                        <h2 className="text-xl font-semibold text-white">
                            The Problem
                        </h2>
                        <p className="mt-2 text-slate-300 leading-relaxed">
                            {caseStudy.problem}
                        </p>
                    </section>

                    {/* 03 */}
                    <section>
                        <h2 className="text-xl font-semibold text-white">
                            The Solution
                        </h2>
                        <p className="mt-2 text-slate-300 leading-relaxed">
                            {caseStudy.solution}
                        </p>
                    </section>

                    {/* 04 */}
                    <section>
                        <h2 className="text-xl font-semibold text-white">
                            The Impact
                        </h2>
                        <ul className="mt-2 list-disc list-inside text-slate-300 space-y-1">
                            {caseStudy.impact.map((item: string) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    {/* Supporting Documentation */}
                    {(caseStudy.documents || caseStudy.pdf) && (
                        <section>
                            <h2 className="text-xl font-semibold text-white">
                                Supporting Documentation
                            </h2>

                            <div className="mt-4">
                                {caseStudy.documents?.map(
                                    (doc: CaseStudyDocument) => (
                                        <a
                                            key={doc.label}
                                            href={doc.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                                                inline-block
                                                max-w-sm
                                                rounded-xl
                                                border border-white/10
                                                bg-white/5
                                                backdrop-blur
                                                p-4
                                                transition
                                                hover:border-blue-400/40
                                                hover:bg-white/10
                                                cursor-pointer
                                            "
                                        >
                                            <p className="text-sm text-slate-400 mb-1">
                                                {doc.type}
                                            </p>

                                            <h3 className="text-white font-medium mb-2">
                                                {doc.label}
                                            </h3>

                                            <span className="text-sm text-blue-400">
                                                View document →
                                            </span>
                                        </a>
                                    )
                                )}

                                {!caseStudy.documents && caseStudy.pdf && (
                                    <a
                                        href={caseStudy.pdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            inline-block
                                            max-w-sm
                                            rounded-xl
                                            border border-white/10
                                            bg-white/5
                                            backdrop-blur
                                            p-4
                                            transition
                                            hover:border-blue-400/40
                                            hover:bg-white/10
                                            cursor-pointer
                                        "
                                    >
                                        <p className="text-sm text-slate-400 mb-1">
                                            Business Requirements Document
                                        </p>

                                        <h3 className="text-white font-medium mb-2">
                                            SAP Cost Center Line-Item Reporting
                                        </h3>

                                        <span className="text-sm text-blue-400">
                                            View document →
                                        </span>
                                    </a>
                                )}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </section>
    )
}