import { Helmet } from "react-helmet-async"
import { FileText } from "lucide-react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { Link } from "react-router-dom"
import Tag from "../components/ui/Tag"

const skills = [
    "SAP S/4HANA", "SAP ECC", "Power BI", "BigQuery", "SQL",
    "Jira", "Confluence", "Agile / Scrum", "Requirements Engineering",
    "Functional Specifications", "Data Reconciliation", "BOM Management",
]

const certifications = [
    "eCornell Product Management Certificate",
    "B.S. Business Administration — Information Systems, University of Arkansas",
]

export default function Resume() {
    const { ref, isVisible } = useScrollAnimation()
    const title = "Resume | Technical Product Owner & Business Analyst | Greg Homstad"
    const desc = "Resume of Greg Homstad — Technical Product Owner specializing in SAP, ERP, enterprise systems, and data reconciliation."

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={desc} />
            </Helmet>

            <section ref={ref} className={`min-h-screen pt-32 pb-32 px-6 fade-up${isVisible ? ' visible' : ''}`}>
                <div className="max-w-[900px] mx-auto">
                    <div className="text-center mb-16">
                        <div className="text-label mb-8">Professional Background</div>
                        <h1 className="text-display text-[clamp(3rem,8vw,5rem)] text-[var(--text)] mb-8 leading-[0.9] pt-4 pb-8">
                            Resume
                        </h1>
                        <p className="text-[1.1rem] text-[var(--muted)] leading-[1.8] font-light mb-12 max-w-[460px] mx-auto">
                            Technical Product Owner specializing in enterprise systems and SAP delivery.
                        </p>

                        <a
                            href="/docs/Greg_Homstad_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary px-14 py-5 text-[0.95rem]"
                        >
                            View & Download PDF <FileText size={18} />
                        </a>
                    </div>

                    {/* Skills & Tools */}
                    <section className="mb-16 border-t border-[var(--border)] pt-14">
                        <h2 className="text-label mb-6">Skills & Tools</h2>
                        <div className="flex flex-wrap gap-2.5">
                            {skills.map((skill) => (
                                <Tag key={skill}>{skill}</Tag>
                            ))}
                        </div>
                    </section>

                    {/* Credentials */}
                    <section className="mb-16 border-t border-[var(--border)] pt-14">
                        <h2 className="text-label mb-6">Credentials</h2>
                        <ul className="space-y-3">
                            {certifications.map((cert) => (
                                <li key={cert} className="flex items-start gap-3 text-[0.9rem] text-[var(--muted)] font-light leading-[1.7]">
                                    <span className="w-1 h-1 rounded-full bg-[var(--accent)] mt-2.5 shrink-0" />
                                    {cert}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* CTA */}
                    <div className="text-center border-t border-[var(--border)] pt-14">
                        <Link to="/#contact" className="btn-text group text-[0.9rem]">
                            Looking to collaborate? <span className="group-hover:translate-x-1 transition-transform inline-block ml-1 underline decoration-[var(--accent)] underline-offset-4">Get in touch →</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
