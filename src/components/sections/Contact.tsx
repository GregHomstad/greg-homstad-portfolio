import { SiLinkedin } from "react-icons/si"

export default function Contact() {
    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className="py-32 px-6 scroll-mt-24"
        >
            {/* Glass container */}
            <div
                className="
          max-w-4xl mx-auto
          bg-white/10 backdrop-blur-xl
          border border-white/15
          rounded-3xl
          px-14 py-16
          text-center
        "
            >
                {/* Heading */}
                <h2
                    id="contact-heading"
                    className="
            text-4xl md:text-5xl lg:text-6xl
            font-bold tracking-tight
            leading-[1.1]
            text-white
          "
                >
                    Let’s Work Together
                </h2>

                {/* Core message */}
                <p
                    className="
            mt-6 text-lg md:text-xl
            font-medium text-slate-200
            leading-relaxed
            max-w-2xl mx-auto
          "
                >
                    I work at the intersection of technical product ownership, requirements
                    analysis, and enterprise systems. I’m always open to thoughtful
                    conversations about complex problems, system design, and building
                    solutions that actually scale.
                </p>

                {/* Credibility anchor */}
                <p className="mt-6 text-sm text-slate-400">
                    Experience across SAP, financial systems, and enterprise-scale platforms
                </p>

                {/* Primary actions */}
                <div className="mt-14 flex flex-col sm:flex-row gap-6 justify-center items-center">
                    {/* Email */}
                    <a
                        href="mailto:Greg.Homstad@outlook.com"
                        className="
              inline-flex items-center gap-2
              rounded-xl
              bg-white/10
              px-10 py-4
              text-base font-semibold text-white
              border border-white/25
              transition-all duration-200
              hover:bg-white/15
              hover:border-white/40
              hover:-translate-y-0.5
              shadow-md
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500/60
            "
                    >
                        Start a conversation
                        <span aria-hidden="true">→</span>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/in/GregHomstad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
    inline-flex items-center gap-3
    rounded-xl
    px-11 py-4
    text-base font-semibold text-slate-200
    border border-white/20
    transition-all duration-200
    hover:text-white
    hover:bg-white/10
    hover:border-white/40
    hover:-translate-y-0.5
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-blue-500/60
  "
                    >
                        <SiLinkedin className="w-5 h-5 shrink-0 -translate-y-[1px]" />
                        LinkedIn
                    </a>





                </div>

                {/* Closing line */}
                <p className="mt-12 text-sm text-slate-400">
                    Based in Northwest Arkansas (NWA) • Open to remote and hybrid opportunities
                </p>
            </div>
        </section>
    )
}
