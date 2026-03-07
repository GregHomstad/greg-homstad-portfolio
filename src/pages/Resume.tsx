import { Helmet } from "react-helmet-async"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { Link } from "react-router-dom"

export default function Resume() {
    const { ref, isVisible } = useScrollAnimation()
    const title = "Resume | Greg Homstad"
    const desc = "Greg Homstad — Technical Business Analyst. Enterprise systems, SAP, requirements analysis."

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={desc} />
            </Helmet>

            <section ref={ref} className={`min-h-screen pt-28 pb-32 px-6 fade-up${isVisible ? ' visible' : ''}`}>
                <div className="max-w-[800px] mx-auto">
                    <div className="text-label mb-4">Resume</div>
                    <h1 className="text-display text-[clamp(2.5rem,6vw,4.5rem)] text-[var(--text)] mb-4">
                        Greg Homstad
                    </h1>
                    <p className="text-[1.05rem] text-[var(--muted)] leading-[1.7] font-light mb-12">
                        Technical Business Analyst · Enterprise Systems · SAP
                    </p>

                    {/* PDF embed */}
                    <div className="w-full aspect-[8.5/11] bg-[var(--surface)] border border-[var(--border)] mb-10 flex items-center justify-center">
                        <iframe
                            src="/docs/Greg_Homstad_Resume.pdf"
                            className="w-full h-full"
                            title="Greg Homstad Resume"
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="/docs/Greg_Homstad_Resume.pdf"
                            download
                            className="btn-primary"
                        >
                            Download PDF <ArrowRight size={14} />
                        </a>
                        <Link to="/#contact" className="btn-text">
                            Get in touch →
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
