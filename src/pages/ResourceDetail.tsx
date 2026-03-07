import { useParams, Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { resources } from "../data/resources"
import { SITE_URL, SITE_OG_IMAGE, SITE_TWITTER_HANDLE } from "../seo"

export default function ResourceDetail() {
    const { slug } = useParams()
    const resource = resources.find((r) => r.slug === slug)

    if (!resource) {
        return (
            <section className="pt-28 px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-display text-2xl text-[var(--text)]">
                        Resource not found
                    </h1>
                    <Link
                        to="/resources"
                        className="mt-4 inline-block text-[var(--accent)] hover:text-[var(--text)] transition-colors"
                    >
                        ← Back to resources
                    </Link>
                </div>
            </section>
        )
    }

    return (
        <section className="pt-28 pb-24 px-6">
            <div className="max-w-4xl mx-auto">
                <Helmet>
                    <title>{resource.title} | Greg Homstad</title>
                    <meta name="description" content={resource.summary} />
                    <meta property="og:type" content="article" />
                    <meta property="og:url" content={`${SITE_URL}/resources/${resource.slug}`} />
                    <meta property="og:title" content={`${resource.title} | Greg Homstad`} />
                    <meta property="og:description" content={resource.summary} />
                    <meta property="og:image" content={SITE_OG_IMAGE} />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content={SITE_TWITTER_HANDLE} />
                    <meta name="twitter:title" content={`${resource.title} | Greg Homstad`} />
                    <meta name="twitter:description" content={resource.summary} />
                    <meta name="twitter:image" content={SITE_OG_IMAGE} />
                </Helmet>
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[0.75rem] text-[var(--faint)] mb-8">
                    <Link to="/" className="hover:text-[var(--muted)] transition-colors">Home</Link>
                    <span>/</span>
                    <Link to="/resources" className="hover:text-[var(--muted)] transition-colors">Resources</Link>
                    <span>/</span>
                    <span className="text-[var(--muted)]">{resource.title}</span>
                </nav>

                {/* Title */}
                <h1 className="mt-4 text-display text-[clamp(2rem,5vw,3.5rem)] text-[var(--text)]">
                    {resource.title}
                </h1>

                {/* Content */}
                <div className="mt-8 text-[0.95rem] text-[var(--muted)] leading-[1.9] font-light whitespace-pre-line">
                    {resource.content}
                </div>

                {/* PDF */}
                {resource.pdf && (
                    <div className="mt-12">
                        <h2 className="text-label mb-6">Download / View Template</h2>
                        <div className="rounded-xl overflow-hidden border border-[var(--border)]">
                            <iframe
                                src={resource.pdf}
                                title={resource.title}
                                className="w-full h-[600px]"
                                sandbox="allow-same-origin allow-scripts"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
