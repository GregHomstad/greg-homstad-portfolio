import { Link } from "react-router-dom"
import { ArrowRight, MapPin } from "lucide-react"
import { useScrollAnimation } from "../../hooks/useScrollAnimation"

export default function Hero() {
    const { ref, isVisible } = useScrollAnimation(0.1)
    return (
        <section ref={ref} className={`relative min-h-screen flex flex-col justify-center px-6 pt-20 fade-up${isVisible ? ' visible' : ''}`}>
            <div className="max-w-[1200px] mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">

                    {/* Text side */}
                    <div className="pb-12 lg:pb-24">
                        {/* Label */}
                        <div className="text-label mb-8">Technical Business Analyst</div>

                        {/* Name — giant editorial serif */}
                        <h1 className="text-display text-[clamp(4rem,10vw,9rem)] text-[var(--text)] mb-6 leading-tight pb-4">
                            Greg<br />Homstad
                        </h1>

                        {/* Subtitle */}
                        <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-[var(--muted)] leading-[1.7] max-w-[500px] mb-4 font-light">
                            Bridging business requirements and technical reality
                            across SAP, ERP, and enterprise data platforms.
                        </p>

                        {/* Location */}
                        <div className="flex items-center gap-2 text-[var(--faint)] text-[0.8rem] mb-10">
                            <MapPin size={12} />
                            Open to full-time, remote, hybrid, or relocation
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4">
                            <Link to="/case-studies" className="btn-primary">
                                View Work <ArrowRight size={14} />
                            </Link>
                            <Link to="/resume" className="btn-text">
                                Resume →
                            </Link>
                        </div>
                    </div>

                    {/* Photo — large, B&W, transparent background cutout */}
                    <div className="hidden lg:flex w-full h-[85vh] justify-end items-end">
                        <img
                            src="/Greg-cutout.png"
                            alt="Greg Homstad"
                            className="w-auto h-full max-h-[1000px] object-contain object-bottom"
                            style={{
                                filter: 'grayscale(100%) contrast(1.1) brightness(1.05)',
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Scroll line */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2" aria-hidden="true">
                <div className="w-[1px] h-16 bg-gradient-to-b from-[var(--accent)] to-transparent opacity-30" />
            </div>
        </section>
    )
}
