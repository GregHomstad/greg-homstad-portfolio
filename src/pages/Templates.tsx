import { Helmet } from "react-helmet-async"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { SITE_URL, SITE_OG_IMAGE, SITE_TWITTER_HANDLE } from "../seo"

export default function Templates() {
    const { ref, isVisible } = useScrollAnimation()
    const title = "Templates | Greg Homstad"
    const desc = "Enterprise documentation templates — BRDs, functional specs, validation matrices."

    const templates = [
        {
            title: "Business Requirements Document",
            description: "Complete BRD template with stakeholder matrix, scope definition, and acceptance criteria.",
            includes: ["Scope statement", "Stakeholder sign-off matrix", "Field mapping tables", "Acceptance criteria"],
        },
        {
            title: "Functional Specification",
            description: "Technical specification template with system logic, validation rules, and data flow documentation.",
            includes: ["Data flow diagrams", "Validation rule definitions", "Error handling procedures", "Test scenarios"],
        },
        {
            title: "Data Validation Matrix",
            description: "Cross-system validation template for reconciliation between SAP and internal platforms.",
            includes: ["Field comparison grid", "Exception categorization", "Remediation workflow", "Audit trail"],
        },
    ]

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={desc} />
                <meta property="og:url" content={`${SITE_URL}/templates`} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={desc} />
                <meta property="og:image" content={SITE_OG_IMAGE} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content={SITE_TWITTER_HANDLE} />
            </Helmet>

            <section ref={ref} className={`min-h-screen pt-28 pb-32 px-6 fade-up${isVisible ? ' visible' : ''}`}>
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-label mb-4">Templates</div>
                    <h1 className="text-display text-[clamp(2.5rem,6vw,4.5rem)] text-[var(--text)] mb-6 max-w-[700px]">
                        Documentation Templates
                    </h1>
                    <p className="text-[0.95rem] text-[var(--muted)] leading-[1.8] font-light max-w-[560px] mb-16">
                        Field-tested documentation frameworks for enterprise requirements analysis.
                    </p>

                    <div className={`stagger${isVisible ? ' visible' : ''}`}>
                        {templates.map((t) => (
                            <div
                                key={t.title}
                                className="py-10 border-b border-[var(--border)]"
                            >
                                <h2 className="text-[1.25rem] text-[var(--text)] font-normal font-['DM_Serif_Display'] mb-3">
                                    {t.title}
                                </h2>
                                <p className="text-[0.9rem] text-[var(--muted)] font-light leading-[1.7] mb-5 max-w-[640px]">
                                    {t.description}
                                </p>
                                <div className="flex flex-wrap gap-x-6 gap-y-1">
                                    {t.includes.map((item) => (
                                        <span key={item} className="text-[0.78rem] text-[var(--faint)] font-light">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}