import { Helmet } from "react-helmet-async"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { SITE_URL, SITE_OG_IMAGE, SITE_TWITTER_HANDLE } from "../seo"

export default function Resources() {
    const { ref, isVisible } = useScrollAnimation()
    const title = "Resources | Greg Homstad"
    const desc = "Frameworks, templates, and guides for enterprise requirements analysis and systems delivery."

    const resources = [
        {
            title: "BRD Template Framework",
            type: "Template",
            description: "Structured business requirements document template with field mapping tables, validation rules, and stakeholder sign-off sections.",
        },
        {
            title: "SAP Reconciliation Playbook",
            type: "Guide",
            description: "Step-by-step process for validating SAP ECC data against internal systems, with exception handling procedures.",
        },
        {
            title: "Requirements Elicitation Guide",
            type: "Framework",
            description: "Workshop facilitation framework for structured stakeholder interviews and requirements capture sessions.",
        },
    ]

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={desc} />
                <meta property="og:url" content={`${SITE_URL}/resources`} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={desc} />
                <meta property="og:image" content={SITE_OG_IMAGE} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content={SITE_TWITTER_HANDLE} />
            </Helmet>

            <section ref={ref} className={`min-h-screen pt-28 pb-32 px-6 fade-up${isVisible ? ' visible' : ''}`}>
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-label mb-4">Resources</div>
                    <h1 className="text-display text-[clamp(2.5rem,6vw,4.5rem)] text-[var(--text)] mb-6 max-w-[700px]">
                        Frameworks & Guides
                    </h1>
                    <p className="text-[0.95rem] text-[var(--muted)] leading-[1.8] font-light max-w-[560px] mb-16">
                        Practical tools and templates refined through enterprise delivery experience.
                    </p>

                    <div className={`stagger${isVisible ? ' visible' : ''}`}>
                        {resources.map((r) => (
                            <div
                                key={r.title}
                                className="py-8 border-b border-[var(--border)] group"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-[auto_2fr_3fr] gap-4 items-start">
                                    <span className="text-[0.7rem] text-[var(--accent)] tracking-[0.1em] uppercase font-medium w-[80px]">
                                        {r.type}
                                    </span>
                                    <h2 className="text-[1.1rem] text-[var(--text)] font-normal font-['DM_Serif_Display']">
                                        {r.title}
                                    </h2>
                                    <p className="text-[0.85rem] text-[var(--muted)] font-light leading-[1.6]">
                                        {r.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}