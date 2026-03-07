import { Helmet } from "react-helmet-async"
import { useParams, Link, Navigate } from "react-router-dom"
import { ArrowRight } from "lucide-react"
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

    return (
        <>
            <Helmet>
                <title>{`${study.title} | Greg Homstad`}</title>
                <meta name="description" content={study.overview} />
            </Helmet>

            <article ref={ref} className={`min-h-screen pt-28 pb-32 px-6 fade-up${isVisible ? ' visible' : ''}`}>
                <div className="max-w-[800px] mx-auto">

                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[0.75rem] text-[var(--faint)] mb-8">
                        <Link to="/" className="hover:text-[var(--muted)] transition-colors">Home</Link>
                        <span>/</span>
                        <Link to="/case-studies" className="hover:text-[var(--muted)] transition-colors">Work</Link>
                        <span>/</span>
                        <span className="text-[var(--muted)]">{study.title}</span>
                    </nav>

                    {/* Header */}
                    <div className="text-label mb-4">Case Study</div>
                    <h1 className="text-display text-[clamp(2rem,5vw,3.5rem)] text-[var(--text)] mb-4">
                        {study.title}
                    </h1>
                    <p className="text-[1.05rem] text-[var(--muted)] leading-[1.7] font-light mb-16">
                        {study.overview}
                    </p>

                    {/* Problem / Challenge */}
                    <div className="mb-14">
                        <h2 className="text-label mb-4">Challenge</h2>
                        <p className="text-[0.95rem] text-[var(--muted)] leading-[1.9] font-light">
                            {study.problem}
                        </p>
                    </div>

                    {/* Solution / Approach */}
                    <div className="mb-14">
                        <h2 className="text-label mb-4">Approach</h2>
                        <p className="text-[0.95rem] text-[var(--muted)] leading-[1.9] font-light">
                            {study.solution}
                        </p>
                    </div>

                    {/* Impact */}
                    <div className="mb-14">
                        <h2 className="text-label mb-4">Impact</h2>
                        <ul className="space-y-3">
                            {study.impact.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-[0.9rem] text-[var(--muted)] font-light leading-[1.7]">
                                    <span className="w-1 h-1 rounded-full bg-[var(--accent)] mt-2.5 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Embedded PDF Viewers */}
                    {study.embeddedPdfs && study.embeddedPdfs.length > 0 && (
                        <div className="mb-14 space-y-16">
                            {study.embeddedPdfs.map((pdf, idx) => (
                                <div key={idx}>
                                    <h2 className="text-label mb-6">{pdf.title}</h2>
                                    <div className="w-full h-[70vh] min-h-[600px] max-h-[1000px] bg-[var(--surface)] border border-[var(--border)] overflow-hidden rounded">
                                        <iframe
                                            src={`${pdf.href}#view=Fit`}
                                            className="w-full h-full"
                                            title={pdf.title}
                                            sandbox="allow-same-origin allow-scripts"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {/* CTA */}
                    <div className="mt-20 pt-14 border-t border-[var(--border)]">
                        <p className="text-[var(--muted)] text-[0.9rem] mb-6 font-light">Interested in working together?</p>
                        <div className="flex flex-wrap gap-6">
                            <Link to="/#contact" className="btn-primary px-8 py-3">
                                Get in Touch <ArrowRight size={16} />
                            </Link>
                            <Link to="/case-studies" className="btn-text text-[0.9rem]">
                                View All Work →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}