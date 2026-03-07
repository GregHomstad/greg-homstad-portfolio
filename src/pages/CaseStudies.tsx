import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { SITE_URL, SITE_OG_IMAGE, SITE_TWITTER_HANDLE } from "../seo"
import { caseStudies } from "../data/caseStudies"

export default function CaseStudies() {
    const { ref, isVisible } = useScrollAnimation()
    const title = "Work | Greg Homstad"
    const desc = "Enterprise case studies — SAP reporting, financial compliance, platform modernization."

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={desc} />
                <meta property="og:url" content={`${SITE_URL}/case-studies`} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={desc} />
                <meta property="og:image" content={SITE_OG_IMAGE} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content={SITE_TWITTER_HANDLE} />
            </Helmet>

            <section ref={ref} className={`min-h-screen pt-32 pb-32 px-6 fade-up${isVisible ? " visible" : ""}`}>
                <div className="max-w-[1200px] mx-auto">
                    <div className="max-w-[720px] mb-14">
                        <div className="text-label mb-4">Selected Work</div>
                        <h1 className="text-display text-[clamp(2.5rem,6vw,4.5rem)] text-[var(--text)] mb-5">
                            Enterprise Case Studies
                        </h1>
                        <p className="text-[0.95rem] text-[var(--muted)] leading-[1.8] font-light">
                            End-to-end ownership from requirements capture through delivery validation.
                        </p>
                    </div>

                    <div className={`grid gap-6 md:gap-8 md:grid-cols-2 stagger${isVisible ? " visible" : ""}`}>
                        {caseStudies.map((c) => (
                            <Link
                                key={c.slug}
                                to={`/case-studies/${c.slug}`}
                                className="group relative flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)]/40 px-6 py-6 md:px-7 md:py-7 hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)]/60 transition-colors duration-300"
                            >
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-start justify-between gap-4">
                                        <h2 className="text-[1.1rem] md:text-[1.2rem] text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-300 font-normal text-display">
                                            {c.title}
                                        </h2>
                                        <ArrowRight
                                            size={16}
                                            className="mt-1 shrink-0 text-[var(--faint)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all duration-300"
                                        />
                                    </div>
                                    <p className="text-[0.85rem] text-[var(--muted)] font-light leading-[1.7]">
                                        {c.overview}
                                    </p>
                                    {c.tags && c.tags.length > 0 && (
                                        <div className="mt-1 flex flex-wrap gap-2">
                                            {c.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-full border border-[var(--border)] bg-black/10 px-2.5 py-1 text-[0.7rem] uppercase tracking-[0.12em] text-[var(--muted)]"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}