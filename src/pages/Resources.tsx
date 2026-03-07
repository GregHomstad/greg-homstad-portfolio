import { Helmet } from "react-helmet-async"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { SITE_URL, SITE_OG_IMAGE, SITE_TWITTER_HANDLE } from "../seo"
import { Download, Briefcase } from "lucide-react"
import ClaudeChat from "../components/ui/ClaudeChat"

export default function Resources() {
    const { ref, isVisible } = useScrollAnimation()
    const title = "Product Playbook | Greg Homstad"
    const desc = "A curated collection of enterprise frameworks, professional templates, and iterative product management proof-of-work."

    const sections = [
        {
            id: "featured",
            label: "Featured Resources",
            icon: <Briefcase className="text-[var(--accent)]" size={24} />,
            items: [
                {
                    title: "BRD / FS Master Template",
                    type: "Template",
                    description: "The gold standard for business and functional requirements documentation in mission-critical SAP environments.",
                    href: "/resources/BRD_Template.pdf"
                },
                {
                    title: "Requirements Elicitation Guide",
                    type: "Best Practice",
                    description: "A handbook on turning vague stakeholder requests into technical acceptance criteria for Scrum teams.",
                    href: "/resources/Requirements_Elicitation_Guide.pdf"
                },
                {
                    title: "eCornell Product Management Certificate",
                    type: "Credential",
                    description: "Formal training credential supporting the product frameworks and iterative delivery artifacts on this site.",
                    href: "/resources/Cornell_PM_Certification.png"
                }
            ]
        }
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

            <section ref={ref} className={`min-h-screen pt-32 pb-32 px-6 fade-up${isVisible ? ' visible' : ''}`}>
                <div className="max-w-[1200px] mx-auto">
                    {/* Header */}
                    <div className="max-w-[800px] mb-24">
                        <div className="text-label mb-6">Professional Resources</div>
                        <h1 className="text-display text-[clamp(2.5rem,7vw,5.5rem)] text-[var(--text)] mb-8 leading-[0.85] pt-4 pb-12">
                            Product<br />Management<br />Playbook
                        </h1>
                        <p className="text-[1.1rem] text-[var(--muted)] leading-[1.8] font-light max-w-[600px]">
                            A sequential collection of high-fidelity frameworks and technical artifacts
                            extracted from iterative enterprise delivery. This is more than a list of tools—it is a
                            blueprint for product excellence.
                        </p>
                    </div>

                    {/* Sequential Phases */}
                    <div className="mb-10" />

                    {/* Resources Grid */}
                    <div className="space-y-24">
                        {sections.map((section) => (
                            <div key={section.id} className="fade-up visible">
                                <div className="flex items-center gap-4 mb-10 pb-4 border-b border-[var(--border)]">
                                    {section.icon}
                                    <h2 className="text-label text-base tracking-[0.2em]">{section.label}</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {section.items.map((item) => (
                                        <a
                                            key={item.title}
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative p-10 border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-500 rounded bg-[var(--surface)]/30 backdrop-blur-sm"
                                        >
                                            <div className="flex justify-between items-start mb-6">
                                                <span className="text-[0.7rem] text-[var(--accent)] tracking-[0.2em] uppercase font-semibold px-2 py-1 border border-[var(--accent)]/30 rounded">
                                                    {item.type}
                                                </span>
                                                <Download size={18} className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors transform group-hover:-translate-y-1" />
                                            </div>
                                            <h3 className="text-[1.4rem] text-[var(--text)] font-normal mb-4 leading-tight">
                                                {item.title}
                                            </h3>
                                            <p className="text-[0.9rem] text-[var(--muted)] font-light leading-[1.7] mb-0">
                                                {item.description}
                                            </p>

                                            {/* Hover underline effect */}
                                            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--accent)] group-hover:w-full transition-all duration-700" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Claude Opus Q&A */}
                    <div className="mt-16">
                        <ClaudeChat />
                    </div>
                </div>
            </section>
        </>
    )
}