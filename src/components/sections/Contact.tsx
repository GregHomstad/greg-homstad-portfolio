import { SiLinkedin } from "react-icons/si"
import { Mail } from "lucide-react"
import { useScrollAnimation } from "../../hooks/useScrollAnimation"

export default function Contact() {
    const { ref, isVisible } = useScrollAnimation()
    return (
        <section
            ref={ref}
            id="contact"
            aria-labelledby="contact-heading"
            className={`py-32 px-6 scroll-mt-20 border-t border-[var(--border)] fade-up${isVisible ? ' visible' : ''}`}
        >
            <div className="max-w-[1200px] mx-auto">
                <div className="max-w-[640px]">
                    <div className="text-label mb-4">Contact</div>

                    <h2
                        id="contact-heading"
                        className="text-display text-[clamp(2.5rem,6vw,4.5rem)] text-[var(--text)] mb-6"
                    >
                        Let's Talk
                    </h2>

                    <p className="text-[0.95rem] text-[var(--muted)] leading-[1.8] font-light mb-4">
                        I work at the intersection of requirements analysis, enterprise systems,
                        and technical delivery. Always open to conversations about complex
                        problems and solutions that actually scale.
                    </p>

                    <p className="text-[0.8rem] text-[var(--faint)] mb-10 font-light">
                        Open to full-time, remote, hybrid, or relocation positions
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => window.location.href = `mailto:${["Greg", "Homstad", "outlook.com"].join(".").replace("Homstad.", "Homstad@")}`}
                            className="btn-primary"
                        >
                            <Mail size={15} />
                            Reach Out
                        </button>
                        <a
                            href="https://linkedin.com/in/GregHomstad"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-text"
                        >
                            <SiLinkedin size={15} />
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
