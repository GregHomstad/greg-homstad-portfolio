import { Helmet } from "react-helmet-async"
import { useParams, Link, Navigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { caseStudies } from "../data/caseStudies"

export default function CaseStudyDetail() {
    const { slug } = useParams()
    const { ref, isVisible } = useScrollAnimation()

    // Find the actual case study from data
    const study = caseStudies.find((c) => c.slug === slug)

    if (!study) {
        return <Navigate to="/case-studies" replace />
    }

    const summaryImpacts = study.impact.slice(0, 3)

    return (
        <>
            <Helmet>
                <title>{`${study.title} | Greg Homstad`}</title>
                <meta name="description" content={study.overview} />
            </Helmet>

            <article ref={ref} className={`min-h-screen pt-32 pb-32 px-6 fade-up${isVisible ? " visible" : ""}`}>
                <div className="max-w-[900px] mx-auto">

                    {/* Back */}
                    <Link to="/case-studies" className="btn-text mb-10 inline-flex">
                        <ArrowLeft size={14} /> Back to Work
                    </Link>

                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="text-label">Case Study</div>
                        <span className="rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-2.5 py-0.5 text-[0.65rem] uppercase tracking-[0.12em] text-[var(--accent)]">
                            {study.methodology}
                        </span>
                    </div>
                    <h1 className="text-display text-[clamp(2.2rem,5vw,3.4rem)] text-[var(--text)] mb-4">
                        {study.title}
                    </h1>
                    <p className="text-[1.02rem] text-[var(--muted)] leading-[1.8] font-light mb-10">
                        {study.overview}
                    </p>

                    {/* Summary band */}
                    <section className="mb-16 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 px-6 py-6 md:px-7 md:py-7">
                        <div className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.5fr)] items-start">
                            <div>
                                <div className="text-label mb-3">Impact Highlights</div>
                                <ul className="space-y-2.5">
                                    {summaryImpacts.map((item) => (
                                        <li key={item} className="flex items-start gap-2.5 text-[0.88rem] text-[var(--muted)] font-light leading-[1.6]">
                                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="md:pl-4 border-t md:border-t-0 md:border-l border-[var(--border)]/60 pt-4 md:pt-0 md:ml-2">
                                {study.stakeholders && study.stakeholders.length > 0 && (
                                    <div className="mb-4">
                                        <div className="text-label mb-3">Stakeholders</div>
                                        <ul className="space-y-1.5">
                                            {study.stakeholders.map((s) => (
                                                <li key={s} className="flex items-center gap-2 text-[0.84rem] text-[var(--muted)] font-light">
                                                    <span className="h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                                                    {s}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {study.tags && study.tags.length > 0 && (
                                    <div>
                                        <div className="text-label mb-3">Systems & Domains</div>
                                        <div className="flex flex-wrap gap-2">
                                            {study.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-full border border-[var(--border)] bg-black/10 px-2.5 py-1 text-[0.7rem] uppercase tracking-[0.12em] text-[var(--muted)]"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>

                    {/* Problem / Challenge */}
                    <section className="mb-14">
                        <h2 className="text-label mb-4">Challenge</h2>
                        <p className="text-[0.95rem] text-[var(--muted)] leading-[1.9] font-light">
                            {study.problem}
                        </p>
                    </section>

                    {/* Approach */}
                    <section className="mb-14">
                        <h2 className="text-label mb-4">Approach</h2>
                        <p className="text-[0.95rem] text-[var(--muted)] leading-[1.9] font-light mb-6">
                            {study.approach}
                        </p>
                        {study.knowledgeAreas && study.knowledgeAreas.length > 0 && (
                            <div>
                                <div className="text-[0.72rem] uppercase tracking-[0.14em] text-[var(--muted)]/60 mb-2.5">
                                    BABOK Knowledge Areas Applied
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {study.knowledgeAreas.map((area) => (
                                        <span
                                            key={area}
                                            className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[0.7rem] text-[var(--muted)] font-light"
                                        >
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </section>

                    {/* Impact */}
                    <section className="mb-14">
                        <h2 className="text-label mb-4">Impact</h2>
                        <ul className="space-y-3">
                            {study.impact.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-[0.9rem] text-[var(--muted)] font-light leading-[1.7]">
                                    <span className="w-1 h-1 rounded-full bg-[var(--accent)] mt-2.5 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Artifacts Produced */}
                    {study.artifacts && study.artifacts.length > 0 && (
                        <section className="mb-14">
                            <h2 className="text-label mb-4">Artifacts Produced</h2>
                            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 px-6 py-5 md:px-7 md:py-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {study.artifacts.map((artifact) => (
                                        <div key={artifact} className="flex items-center gap-3 text-[0.88rem] text-[var(--muted)] font-light">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                                            {artifact}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}
                </div>
            </article>
        </>
    )
}
