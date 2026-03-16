import { Helmet } from "react-helmet-async"
import { FileText } from "lucide-react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { useNavigate } from "react-router-dom"
import { SITE_URL, SITE_OG_IMAGE, SITE_TWITTER_HANDLE } from "../seo"

export default function Resume() {
    const { ref, isVisible } = useScrollAnimation()
    const navigate = useNavigate()
    const title = "Resume | Greg Homstad"
    const desc = "Download the professional resume of Greg Homstad, Technical Product Owner specializing in enterprise systems and SAP delivery."

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={desc} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${SITE_URL}/resume`} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={desc} />
                <meta property="og:image" content={SITE_OG_IMAGE} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content={SITE_TWITTER_HANDLE} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={desc} />
                <meta name="twitter:image" content={SITE_OG_IMAGE} />
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

                        <button
                            onClick={() => {
                                navigate("/")
                                setTimeout(() => {
                                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                                }, 100)
                            }}
                            className="btn-text group text-[0.9rem]"
                        >
                            Looking to collaborate? <span className="group-hover:translate-x-1 transition-transform inline-block ml-1 underline decoration-[var(--accent)] underline-offset-4">Get in touch →</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
