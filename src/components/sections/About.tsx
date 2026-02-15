import { Link } from "react-router-dom"

export default function About() {
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className="py-24 px-6"
        >
            {/* Glass container */}
            <div
                className="
                    relative max-w-7xl mx-auto
                    bg-white/10 backdrop-blur-xl
                    border border-white/15
                    rounded-3xl
                    px-14 py-14
                "
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                    {/* Left column */}
                    <div>
                        {/* About badge */}
                        <div
                            className="
                                inline-block mb-12 px-6 py-2
                                rounded-full
                                bg-emerald-400/20
                                border border-emerald-400/30
                            "
                        >
                            <span className="text-sm font-semibold tracking-wide text-emerald-200">
                                About
                            </span>
                        </div>

                        {/* Title */}
                        <h2
                            id="about-heading"
                            className="
                                text-3xl md:text-4xl lg:text-5xl
                                font-bold tracking-tight
                                leading-[1.15]
                                text-white
                                text-center md:text-left
                            "
                        >
                            Technical Product Owner
                            <br />
                            Enterprise Systems and Operations
                        </h2>

                        {/* Narrative */}
                        <p
                            className="
                                mt-8 text-lg font-medium
                                text-slate-200
                                leading-relaxed
                                max-w-xl
                                text-center md:text-left
                            "
                        >
                            I started out doing hands-on IT work, supporting systems,
                            infrastructure, and users directly. That experience gave me
                            a strong understanding of how enterprise systems actually
                            behave in production, and how small gaps can turn into real
                            operational and financial problems.
                            <br /><br />
                            Over time, I moved closer to data, reporting, and platform
                            ownership. Most recently, I worked as a Technical Product Owner,
                            owning requirements and delivery across SAP-backed platforms and
                            enterprise financial systems. I spend my time bridging
                            business needs with technical reality to make sure systems
                            are reliable, auditable, and built to scale.
                        </p>

                        {/* Resume CTA */}
                        <div className="mt-10 flex justify-center md:justify-start">
                            <Link
                                to="/resume"
                                className="
                                    inline-flex items-center gap-2
                                    rounded-xl
                                    bg-white/8
                                    px-9 py-4
                                    text-base font-semibold text-white
                                    border border-emerald-400/30
                                    transition-all duration-200
                                    hover:bg-white/12
                                    hover:border-emerald-400/60
                                    hover:-translate-y-0.5
                                    shadow-md
                                    focus-visible:outline-none
                                    focus-visible:ring-2
                                    focus-visible:ring-emerald-400/60
                                "
                            >
                                View full resume
                                <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="space-y-10">

                        {/* Experience */}
                        <section
                            aria-labelledby="experience-heading"
                            className="
                                rounded-2xl
                                border border-white/15
                                bg-white/7 backdrop-blur-lg
                                p-8
                            "
                        >
                            <h3
                                id="experience-heading"
                                className="text-lg font-semibold text-white mb-5"
                            >
                                Experience
                            </h3>

                            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                                <div>
                                    <span className="font-medium text-white">
                                        Tyson Foods
                                    </span>{" "}
                                    — IT Product Owner (Financial Controlling and Costing)
                                    <p className="mt-1">
                                        Own SAP reporting, BOM platforms, and compliance initiatives;
                                        lead ERP reconciliation improving data accuracy and audit reliability
                                    </p>
                                </div>

                                <div>
                                    <span className="font-medium text-white">
                                        U.S. Department of Veterans Affairs
                                    </span>{" "}
                                    — Systems Administrator
                                    <p className="mt-1">
                                        Supported secure enterprise systems in a federal environment;
                                        held a Public Trust clearance and ensured compliance with
                                        government security and access controls
                                    </p>
                                </div>

                                <div>
                                    <span className="font-medium text-white">
                                        Field Nation
                                    </span>{" "}
                                    — IT Field Technician
                                    <p className="mt-1">
                                        Delivered 80+ infrastructure projects across more than
                                        25 sites with high first-time success; led complex deployments
                                    </p>
                                </div>

                                <div>
                                    <span className="font-medium text-white">
                                        Shine Solar
                                    </span>{" "}
                                    — IT Support Specialist
                                    <p className="mt-1">
                                        Supported more than 300 users; authored IT policies and training
                                        that reduced repeat incidents and onboarding time
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Education */}
                        <section
                            aria-labelledby="education-heading"
                            className="
        rounded-2xl
        border border-white/15
        bg-white/7 backdrop-blur-lg
        p-8
    "
                        >
                            <h3
                                id="education-heading"
                                className="text-lg font-semibold text-white mb-4"
                            >
                                Education
                            </h3>

                            <div className="text-sm text-slate-300 leading-relaxed">
                                <span className="font-medium text-white">
                                    Bachelor of Science in Business Administration
                                </span>
                                <p className="mt-1">
                                    Major in Information Systems with a Business Analytics concentration<br />
                                    University of Arkansas, Sam M. Walton College of Business
                                </p>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </section>
    )
}