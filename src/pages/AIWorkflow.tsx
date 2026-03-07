import { Helmet } from "react-helmet-async"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { SITE_URL, SITE_OG_IMAGE, SITE_TWITTER_HANDLE } from "../seo"

const stack = [
    {
        name: "Claude",
        role: "Architecture thinking, requirements analysis, code review, documentation",
    },
    {
        name: "Cursor & VS Code",
        role: "Code generation, rapid prototyping, debugging, refactoring",
    },
    {
        name: "React + TypeScript + Vite",
        role: "Production framework with strict type safety and fast builds",
    },
    {
        name: "Tailwind CSS",
        role: "Design system implementation with custom tokens and utility-first styling",
    },
    {
        name: "Vercel",
        role: "Deployment, hosting, and edge delivery",
    },
]

const aiStrengths = [
    "Rapid component scaffolding and iteration",
    "CSS and Tailwind pattern generation across responsive breakpoints",
    "Consistent design system enforcement",
    "Documentation and content drafting",
    "Refactoring and code quality improvements",
]

const humanDecisions = [
    "Information architecture and content strategy",
    "Visual design direction and design token selection",
    "Accessibility review and semantic HTML decisions",
    "Performance optimization and dependency choices",
    "Business positioning and messaging",
]

export default function AIWorkflow() {
    const { ref, isVisible } = useScrollAnimation()
    const title = "AI Development Workflow | Greg Homstad"
    const desc = "How this portfolio was built using AI-assisted development — Claude, Cursor, VS Code, and modern tooling as a productivity multiplier."

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={desc} />
                <meta property="og:url" content={`${SITE_URL}/ai-workflow`} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={desc} />
                <meta property="og:image" content={SITE_OG_IMAGE} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content={SITE_TWITTER_HANDLE} />
            </Helmet>

            <section ref={ref} className={`min-h-screen pt-32 pb-32 px-6 fade-up${isVisible ? " visible" : ""}`}>
                <div className="max-w-[900px] mx-auto">

                    {/* Header */}
                    <div className="text-label mb-4">Process</div>
                    <h1 className="text-display text-[clamp(2.5rem,6vw,4.5rem)] text-[var(--text)] mb-6">
                        AI Development Workflow
                    </h1>
                    <p className="text-[1.05rem] text-[var(--muted)] leading-[1.8] font-light mb-20 max-w-[680px]">
                        This portfolio was built using AI-assisted development tools as a
                        productivity multiplier — not as a replacement for engineering knowledge.
                        Here is how the workflow operates.
                    </p>

                    {/* Development Stack */}
                    <section className="mb-20">
                        <h2 className="text-label mb-6">Development Stack</h2>
                        <div className={`space-y-0 stagger${isVisible ? " visible" : ""}`}>
                            {stack.map((item) => (
                                <div
                                    key={item.name}
                                    className="py-6 border-b border-[var(--border)] editorial-row"
                                >
                                    <div className="text-[1.05rem] text-[var(--text)] mb-1 text-display">
                                        {item.name}
                                    </div>
                                    <p className="text-[0.85rem] text-[var(--muted)] font-light leading-[1.7]">
                                        {item.role}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Methodology */}
                    <section className="mb-20">
                        <h2 className="text-label mb-6">Workflow Methodology</h2>
                        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 px-6 py-6 md:px-7 md:py-7">
                            <div className="grid gap-6 md:grid-cols-3">
                                <div>
                                    <div className="text-[1.4rem] text-[var(--accent)] text-display mb-2">01</div>
                                    <div className="text-[0.95rem] text-[var(--text)] mb-2">AI Generates</div>
                                    <p className="text-[0.82rem] text-[var(--muted)] font-light leading-[1.7]">
                                        Claude and Cursor generate initial component structures,
                                        styling patterns, and documentation drafts.
                                    </p>
                                </div>
                                <div>
                                    <div className="text-[1.4rem] text-[var(--accent)] text-display mb-2">02</div>
                                    <div className="text-[0.95rem] text-[var(--text)] mb-2">Human Reviews</div>
                                    <p className="text-[0.82rem] text-[var(--muted)] font-light leading-[1.7]">
                                        Every output is reviewed for correctness, accessibility,
                                        performance, and alignment with design intent.
                                    </p>
                                </div>
                                <div>
                                    <div className="text-[1.4rem] text-[var(--accent)] text-display mb-2">03</div>
                                    <div className="text-[0.95rem] text-[var(--text)] mb-2">AI Refines</div>
                                    <p className="text-[0.82rem] text-[var(--muted)] font-light leading-[1.7]">
                                        Feedback loops drive iterative improvement — TypeScript strict
                                        mode and ESLint enforce quality gates automatically.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* What AI Does Well vs Human Judgment */}
                    <section className="mb-20">
                        <div className="grid gap-12 md:grid-cols-2">
                            <div>
                                <h2 className="text-label mb-6">What AI Did Well</h2>
                                <ul className="space-y-3">
                                    {aiStrengths.map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-[0.9rem] text-[var(--muted)] font-light leading-[1.7]">
                                            <span className="w-1 h-1 rounded-full bg-[var(--accent)] mt-2.5 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-label mb-6">What Required Human Judgment</h2>
                                <ul className="space-y-3">
                                    {humanDecisions.map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-[0.9rem] text-[var(--muted)] font-light leading-[1.7]">
                                            <span className="w-1 h-1 rounded-full bg-[var(--accent)] mt-2.5 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Why It Matters */}
                    <section>
                        <h2 className="text-label mb-6">Why This Matters</h2>
                        <p className="text-[0.95rem] text-[var(--muted)] leading-[1.9] font-light mb-4">
                            AI-assisted development is not about replacing engineering judgment — it
                            is about accelerating iteration cycles and reducing the friction between
                            idea and implementation. For product owners, this means faster prototyping,
                            more time for architecture decisions, and the ability to validate concepts
                            before committing development resources.
                        </p>
                        <p className="text-[0.95rem] text-[var(--muted)] leading-[1.9] font-light">
                            The ability to evaluate and responsibly adopt emerging tools is a critical
                            skill for anyone leading technical teams that will increasingly use
                            AI-assisted workflows in production environments.
                        </p>
                    </section>
                </div>
            </section>
        </>
    )
}
