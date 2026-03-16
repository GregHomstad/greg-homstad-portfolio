import { Link } from "react-router-dom"
import { ArrowRight, MapPin } from "lucide-react"
import { useScrollAnimation } from "../../hooks/useScrollAnimation"

export default function Hero() {
    const { ref, isVisible } = useScrollAnimation(0.1)
    return (
        <section
            ref={ref}
            className={`relative min-h-screen flex items-center px-6 pt-28 pb-20 lg:pt-32 lg:pb-24 fade-up${isVisible ? " visible" : ""}`}
        >
            <div className="max-w-[1200px] mx-auto w-full">
                {/* Label */}
                <div className="text-label mb-8 font-medium">Technical Product Owner</div>

                {/* Name — editorial serif */}
                <h1 className="text-display text-[clamp(3.5rem,7vw,5.5rem)] text-[var(--text)] mb-8 leading-[0.9] pt-2 pb-8">
                    Greg<br />Homstad
                </h1>

                {/* Subtitle */}
                <p className="text-[clamp(1.1rem,1.6vw,1.35rem)] text-[var(--muted)] leading-[1.7] max-w-[520px] mb-6 font-light">
                    Bridging business requirements and technical reality
                    across SAP, ERP, and enterprise data platforms.
                </p>

                {/* Location */}
                <div className="flex items-center gap-2 text-[var(--faint)] text-[0.85rem] mb-12">
                    <MapPin size={14} />
                    Open to full-time, remote, hybrid, or relocation positions
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-6">
                    <Link to="/case-studies" className="btn-primary px-10 py-4">
                        Selected Work <ArrowRight size={16} />
                    </Link>
                    <Link to="/resume" className="btn-text text-[0.9rem]">
                        View Resume →
                    </Link>
                </div>
            </div>

            {/* Scroll line */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2" aria-hidden="true">
                <div className="w-[1px] h-16 bg-gradient-to-b from-[var(--accent)] to-transparent opacity-20" />
            </div>
        </section>
    )
}
