import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "../../hooks/useScrollAnimation"

export default function FeaturedCaseStudies() {
    const { ref, isVisible } = useScrollAnimation()
    return (
        <section
            ref={ref}
            aria-labelledby="featured-case-studies-heading"
            className={`py-32 px-6 border-t border-[var(--border)] fade-up${isVisible ? ' visible' : ''}`}
        >
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
                    <div>
                        <div className="text-label mb-4">Selected Work</div>
                        <h2
                            id="featured-case-studies-heading"
                            className="text-display text-[clamp(2rem,5vw,3.5rem)] text-[var(--text)] mb-6"
                        >
                            Enterprise Case Studies
                        </h2>
                        <p className="text-[0.95rem] text-[var(--muted)] leading-[1.8] font-light max-w-[480px]">
                            Enterprise initiatives spanning SAP reporting, financial compliance,
                            and platform modernization. End-to-end ownership from requirements
                            capture through delivery validation.
                        </p>
                    </div>

                    <div className="flex md:justify-end">
                        <Link to="/case-studies" className="btn-primary">
                            View All Work <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
