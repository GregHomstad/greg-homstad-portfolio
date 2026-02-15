import { Link } from "react-router-dom"

export default function Hero() {
    return (
        <section className="py-32 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT SIDE — TEXT */}
                <div>
                    <div className="mb-6">
                        <span className="inline-block px-4 py-1 text-sm rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                            Enterprise Manufacturing Systems
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                            Greg Homstad
                        </span>
                    </h1>

                    <h2 className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                        IT Product Owner | SAP & BOM Systems Specialist
                        <br />
                        Enterprise Data Reconciliation & Functional Architecture
                    </h2>

                    <p className="text-slate-400 max-w-xl mb-10 leading-relaxed">
                        I design, validate, and govern enterprise manufacturing systems.
                        From SAP routing structures to cross-database reconciliation,
                        I ensure production integrity through structured validation,
                        field-level discipline, and stakeholder alignment.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            to="/case-studies"
                            className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition font-medium"
                        >
                            View Case Studies
                        </Link>

                        <Link
                            to="/resume"
                            className="px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 transition font-medium"
                        >
                            Download Resume
                        </Link>
                    </div>

                    {/* Quick Metrics */}
                    <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
                        <div>
                            <div className="text-2xl font-bold">50+</div>
                            <div className="text-xs text-slate-400 uppercase tracking-wide">
                                BRDs
                            </div>
                        </div>

                        <div>
                            <div className="text-2xl font-bold">25+</div>
                            <div className="text-xs text-slate-400 uppercase tracking-wide">
                                Functional Specs
                            </div>
                        </div>

                        <div>
                            <div className="text-2xl font-bold">4+</div>
                            <div className="text-xs text-slate-400 uppercase tracking-wide">
                                Years Enterprise
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE — IMAGE */}
                <div className="relative flex justify-center">
                    <div className="relative w-80 h-80 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
                        <img
                            src="/Greg.jpg"
                            alt="Greg Homstad"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute -z-10 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"></div>
                </div>

            </div>
        </section>
    )
}