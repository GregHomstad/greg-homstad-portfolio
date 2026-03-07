import { Helmet } from "react-helmet-async"
import { FileText } from "lucide-react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { Link } from "react-router-dom"

export default function Resume() {
    const { ref, isVisible } = useScrollAnimation()
    const title = "Resume | Greg Homstad"
    const desc = "Download the professional resume of Greg Homstad, Technical Product Owner & Business Analyst."

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={desc} />
            </Helmet>

            <section ref={ref} className={`min-h-[85vh] flex items-center justify-center px-6 fade-up${isVisible ? ' visible' : ''}`}>
                <div className="max-w-[700px] w-full text-center py-20">
                    <div className="text-label mb-8">Professional Background</div>
                    <h1 className="text-display text-[clamp(4rem,10vw,7rem)] text-[var(--text)] mb-8 leading-[0.9] pt-4 pb-12">
                        Resume
                    </h1>
                    <p className="text-[1.2rem] text-[var(--muted)] leading-[1.8] font-light mb-16 max-w-[460px] mx-auto">
                        Technical Product Owner & Business Analyst specializing in enterprise systems and SAP delivery.
                    </p>

                    <div className="flex flex-col items-center gap-8">
                        <a
                            href="/docs/Greg_Homstad_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary px-16 py-6 text-[1rem]"
                        >
                            View & Download PDF <FileText size={20} />
                        </a>

                        <Link to="/#contact" className="btn-text group text-[0.9rem]">
                            Looking to collaborate? <span className="group-hover:translate-x-1 transition-transform inline-block ml-1 underline decoration-[var(--accent)] underline-offset-4">Get in touch →</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
