import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { SITE_URL, SITE_OG_IMAGE, SITE_TWITTER_HANDLE } from "../seo"

const templates = [
    {
        title: "Functional Specification",
        description:
            "Enterprise-grade functional specification template used for SAP and internal platforms.",
        audience: "Developers, Solution Architects, QA",
        includes: [
            "Architecture & integrations",
            "Data design & APIs",
            "Security & performance",
            "Testing & deployment",
        ],
        pdf: "/resources/templates/Enterprise_Functional_Spec_Template.pdf",
    },
    {
        title: "Business Requirements Document (BRD)",
        description:
            "Stakeholder-aligned business requirements template for intake, scope, and approvals.",
        audience: "Business Stakeholders, Product Owners, Analysts",
        includes: [
            "Business objectives & scope",
            "In-scope / out-of-scope",
            "High-level requirements",
            "Success criteria",
        ],
        pdf: "/resources/templates/BRD_Template.pdf",
    },
    {
        title: "Functional Requirements Document (FRD)",
        description:
            "Detailed functional requirements template bridging business needs and implementation.",
        audience: "Business Analysts, Developers, QA",
        includes: [
            "Functional requirements",
            "Process flows",
            "Validation rules",
            "Acceptance criteria",
        ],
        pdf: "/resources/templates/FRD_Template.pdf",
    },
]

export default function Templates() {
    const title = "Enterprise Templates | Greg Homstad"
    const description = "Enterprise-ready templates for functional specs, BRDs, and FRDs used in real SAP and platform delivery work."

    return (
        <section className="pt-28 pb-24 px-6">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${SITE_URL}/resources/templates`} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={SITE_OG_IMAGE} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content={SITE_TWITTER_HANDLE} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={SITE_OG_IMAGE} />
            </Helmet>
            <div className="max-w-7xl mx-auto">
                {/* Glass container */}
                <div
                    className="
                        inline-block
                        w-full
                        bg-white/8 backdrop-blur-xl
                        border border-white/15
                        rounded-3xl
                        px-14 py-16
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
                    "
                >
                    {/* Back link */}
                    <Link
                        to="/resources"
                        className="mb-6 inline-block text-sm text-slate-400 hover:text-slate-200 transition"
                    >
                        ← Back to resources
                    </Link>

                    {/* Header */}
                    <div className="mb-14 max-w-2xl">
                        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                            Enterprise Templates
                        </h1>
                        <p className="mt-4 text-slate-400 leading-relaxed">
                            Practical, enterprise-ready templates used in real delivery work,
                            including SAP and internal platform initiatives.
                        </p>
                    </div>

                    {/* Templates grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {templates.map((template) => (
                            <div
                                key={template.title}
                                className="
                                    rounded-2xl
                                    border border-white/10
                                    bg-slate-900/40
                                    p-6
                                    transition-all duration-300
                                    hover:border-blue-400/40
                                    hover:bg-slate-900/60
                                "
                            >
                                {/* Title */}
                                <h2 className="text-lg font-semibold text-white">
                                    {template.title}
                                </h2>

                                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                                    {template.description}
                                </p>

                                <div className="my-4 h-px bg-white/10" />

                                {/* Audience */}
                                <div className="text-sm text-slate-300">
                                    <span className="font-medium text-slate-200">
                                        Audience:
                                    </span>{" "}
                                    {template.audience}
                                </div>

                                {/* Includes */}
                                <ul className="mt-4 space-y-1 text-sm text-slate-400">
                                    {template.includes.map((item) => (
                                        <li key={item}>• {item}</li>
                                    ))}
                                </ul>

                                <div className="my-5 h-px bg-white/10" />

                                {/* Actions */}
                                <div className="flex gap-4">
                                    <a
                                        href={template.pdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            text-sm font-medium
                                            text-blue-400
                                            hover:text-blue-300
                                            transition
                                        "
                                    >
                                        Preview →
                                    </a>

                                    <a
                                        href={template.pdf}
                                        download
                                        className="
                                            rounded-lg
                                            border border-white/15
                                            px-3 py-1.5
                                            text-sm font-medium
                                            text-slate-300
                                            hover:text-white
                                            hover:border-white/30
                                            transition
                                        "
                                    >
                                        Download PDF
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}