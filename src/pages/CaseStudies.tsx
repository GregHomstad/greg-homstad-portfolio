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

            <section ref={ref} className={`min-h-screen pt-28 pb-32 px-6 fade-up${isVisible ? ' visible' : ''}`}>
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-label mb-4">Selected Work</div>
                    <h1 className="text-display text-[clamp(2.5rem,6vw,4.5rem)] text-[var(--text)] mb-6 max-w-[700px]">
                        Enterprise Case Studies
                    </h1>
                    <p className="text-[0.95rem] text-[var(--muted)] leading-[1.8] font-light max-w-[560px] mb-16">
                        End-to-end ownership from requirements capture through delivery validation.
                    </p>

                    <div className={`stagger${isVisible ? ' visible' : ''}`}>
                        {caseStudies.map((c) => (
                            <Link
                                key={c.slug}
                                to={`/case-studies/${c.slug}`}
                                className="block py-8 border-b border-[var(--border)] group transition-colors hover:border-[var(--border-hover)]"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr_auto] gap-4 items-center">
                                    <h2 className="text-[1.2rem] text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-300 font-normal font-['DM_Serif_Display']">
                                        {c.title}
                                    </h2>
                                    <p className="text-[0.85rem] text-[var(--muted)] font-light leading-[1.6]">
                                        {c.overview}
                                    </p>
                                    <ArrowRight size={16} className="text-[var(--faint)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all duration-300 hidden md:block" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}