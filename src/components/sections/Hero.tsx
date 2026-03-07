import { Link } from "react-router-dom"
import { ArrowRight, MapPin } from "lucide-react"
import { useScrollAnimation } from "../../hooks/useScrollAnimation"

export default function Hero() {
    const { ref, isVisible } = useScrollAnimation(0.1)
    return (
        <section ref={ref} className={`relative min-h-screen flex flex-col justify-center px-6 pt-20 fade-up${isVisible ? ' visible' : ''}`}>
            <div className="max-w-[1200px] mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                    {/* Text side */}
                    <div className="flex flex-col justify-end h-full">
                        {/* Label */}
                        <div className="text-label mb-8 font-medium">Technical Product Owner</div>

                        {/* Name — giant editorial serif */}
                        <h1 className="text-display text-[clamp(4.5rem,10vw,9.5rem)] text-[var(--text)] mb-8 leading-[0.85] pt-4 pb-12">
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

                    {/* Photo — large, B&W, transparent background cutout */}
                    <div className="hidden lg:flex w-full h-full justify-end items-stretch">
                        <img
                            src="/Greg-cutout.png"
                            alt="Greg Homstad"
                            className="w-auto h-full max-h-none object-contain object-top"
                            style={{
                                filter: 'grayscale(100%) contrast(1.1) brightness(1.05)',
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Scroll line */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2" aria-hidden="true">
                <div className="w-[1px] h-16 bg-gradient-to-b from-[var(--accent)] to-transparent opacity-20" />
            </div>
        </section>
    )
}
