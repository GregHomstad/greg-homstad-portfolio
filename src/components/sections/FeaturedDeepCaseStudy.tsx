import { Link } from "react-router-dom"

export default function Hero() {
    const scrollTo = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center px-6 py-28"
        >
            <div
                className="
          max-w-7xl w-full
          bg-white/10 backdrop-blur-xl
          border border-white/15
          rounded-3xl
          px-14 py-12
        "
            >
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left: Image */}
                    <div className="relative">
                        <div className="relative w-full max-w-lg mx-auto -translate-y-3">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/25 to-violet-400/25 blur-3xl" />
                            <img
                                src="/Greg.jpg"
                                alt="Greg Homstad"
                                className="
                  relative w-full aspect-square object-cover
                  rounded-3xl border border-white/15 shadow-2xl
                "
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-7 pr-6">
                        <div>
                            {/* Role badge */}
                            <div
                                className="
                  inline-flex items-center
                  px-4 py-1.5
                  mb-4
                  rounded-full
                  bg-blue-400/15
                  border border-blue-400/25
                  text-sm font-medium tracking-wide text-blue-100
                  md:px-6 md:py-2 md:mb-5
                  md:text-xl md:font-semibold
                "
                            >
                                Technical Product Owner
                            </div>

                            <h1
                                className="
                  text-5xl md:text-6xl lg:text-7xl
                  font-bold tracking-tight
                  leading-[1.18]
                  mt-2 mb-6
                "
                            >
                                Greg Homstad
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed max-w-xl">
                                I'm a Technical Product Owner focused on enterprise platforms,
                                financial systems, and data-driven decision making. I own
                                product delivery from stakeholder alignment and requirements through
                                implementation and validation, ensuring complex systems are scalable,
                                reliable, and aligned to real business outcomes.
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 pt-1">
                            {/* Route to Case Studies page */}
                            <Link
                                to="/case-studies"
                                className="
                  group px-9 py-4
                  bg-white text-slate-900
                  rounded-xl font-semibold
                  hover:bg-blue-500 hover:text-white
                  transition-all duration-300
                  shadow-lg hover:shadow-blue-500/40
                "
                            >
                                <span className="flex items-center gap-2">
                                    View Case Studies
                                    <svg
                                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </span>
                            </Link>

                            {/* Scroll to About section */}
                            <button
                                onClick={() => scrollTo("about")}
                                className="
                  px-8 py-4
                  border border-white/30
                  rounded-xl text-white font-semibold
                  hover:bg-white/10 hover:border-white/50
                  transition-all duration-300
                "
                            >
                                About Me
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-x-10 gap-y-3 mt-4 pt-4 border-t border-white/20">
                            <div className="flex items-baseline gap-3">
                                <span className="text-3xl font-bold text-white">5+</span>
                                <span className="text-sm uppercase tracking-wide text-slate-300">
                                    years enterprise systems
                                </span>
                            </div>

                            <div className="flex items-baseline gap-3">
                                <span className="text-3xl font-bold text-white">1+</span>
                                <span className="text-sm uppercase tracking-wide text-slate-300">
                                    year product ownership
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                className="
          absolute bottom-10 left-1/2 -translate-x-1/2
          flex flex-col items-center gap-2
          text-slate-300 animate-pulse
        "
            >
                <span className="text-xs uppercase tracking-widest">
                    Scroll to explore
                </span>
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    )
}
