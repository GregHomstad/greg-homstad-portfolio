import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "../../hooks/useScrollAnimation"

const experience = [
    {
        company: "Tyson Foods",
        role: "IT Product Owner · Enterprise Systems",
        description: "Leading enterprise BOM initiatives and cross-functional SAP S/4HANA reconciliations; delivered 95% reduction in data discrepancies.",
    },
    {
        company: "Field Nation",
        role: "IT Field Technician",
        description: "Delivered 80+ infrastructure projects across 25+ sites with 98% first-time success for national retail and healthcare clients.",
    },
    {
        company: "Shine Solar",
        role: "IT Support Specialist",
        description: "Supported 300+ users; authored company-first IT operating manuals and technical onboarding programs.",
    },
]

export default function About() {
    const { ref, isVisible } = useScrollAnimation()
    return (
        <section ref={ref} id="about" aria-labelledby="about-heading" className={`py-32 px-6 fade-up${isVisible ? ' visible' : ''}`}>
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                    {/* Left — narrative */}
                    <div>
                        <div className="text-label mb-4">About</div>
                        <h2
                            id="about-heading"
                            className="text-display text-[clamp(2rem,4vw,3rem)] text-[var(--text)] mb-8"
                        >
                            Technical Business Analyst,<br />
                            Enterprise Systems
                        </h2>

                        <p className="text-[0.95rem] text-[var(--muted)] leading-[1.9] font-light mb-4">
                            I started out in hands-on IT work — supporting systems, infrastructure,
                            and users directly. That foundation gave me a real understanding of
                            how enterprise systems behave under load, and how small gaps in
                            requirements become large operational and financial problems.
                        </p>
                        <p className="text-[0.95rem] text-[var(--muted)] leading-[1.9] font-light mb-8">
                            I bridge business requirements with technical
                            reality — turning stakeholder conversations into structured,
                            production-ready documentation that engineering teams can build from.
                            I am currently open to new full-time, remote, or hybrid positions and relocate for the right role.
                        </p>

                        <Link to="/resume" className="btn-primary">
                            Full resume <ArrowRight size={14} />
                        </Link>
                    </div>

                    {/* Right — experience timeline */}
                    <div>
                        <div className="text-label mb-6">Experience</div>
                        <div className={`stagger${isVisible ? ' visible' : ''}`}>
                            {experience.map((exp) => (
                                <div key={exp.company} className="py-5 border-b border-[var(--border)]">
                                    <div className="text-[0.95rem] text-[var(--text)] mb-1">
                                        {exp.company}
                                    </div>
                                    <div className="text-[0.78rem] text-[var(--accent)] mb-2 font-light">
                                        {exp.role}
                                    </div>
                                    <p className="text-[0.82rem] text-[var(--muted)] leading-[1.7] font-light">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Education */}
                        <div className="mt-10">
                            <div className="text-label mb-4">Education</div>
                            <div className="text-[0.95rem] text-[var(--text)] mb-1">
                                University of Arkansas
                            </div>
                            <div className="text-[0.82rem] text-[var(--accent)] mb-1 font-light">
                                B.S. Business Administration
                            </div>
                            <div className="text-[0.78rem] text-[var(--muted)] font-light">
                                Information Systems · Business Analytics
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
