import { Helmet } from "react-helmet-async"
import { SITE_URL, SITE_OG_IMAGE, SITE_TWITTER_HANDLE } from "../seo"

export default function Resume() {
    const title = "Resume | Greg Homstad"
    const description = "Full resume for Greg Homstad, Technical Product Owner specializing in SAP, enterprise financial systems, and ERP platform delivery."

    return (
        <section className="relative min-h-screen px-6 py-32">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${SITE_URL}/resume`} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={SITE_OG_IMAGE} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content={SITE_TWITTER_HANDLE} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={SITE_OG_IMAGE} />
            </Helmet>
            {/* Glass container */}
            <div
                className="
          max-w-6xl mx-auto
          bg-white/10 backdrop-blur-xl
          border border-white/15
          rounded-3xl
          p-10 md:p-14
        "
            >
                {/* Header */}
                <div className="mb-10">
                    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                        {/* Title block */}
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Full Resume
                            </h1>
                            <p className="mt-3 text-slate-300">
                                Technical Product Owner • Systems & Integrations
                            </p>
                        </div>

                        {/* Action */}
                        <a
                            href="/docs/Greg_Homstad_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                inline-flex items-center gap-2
                rounded-xl
                bg-white/10
                px-6 py-3
                text-sm font-medium
                hover:bg-white/20
                transition
              "
                        >
                            Open PDF in New Tab
                        </a>
                    </div>
                </div>

                {/* PDF Preview */}
                <div className="relative w-full overflow-hidden rounded-2xl border border-white/10">
                    <iframe
                        src="/docs/Greg_Homstad_Resume.pdf"
                        className="w-full h-[80vh]"
                        title="Greg Homstad Resume"
                    />
                </div>
            </div>
        </section>
    )
}
