import { useParams, Link } from "react-router-dom"
import { resources } from "../data/resources"

export default function ResourceDetail() {
    const { slug } = useParams()
    const resource = resources.find((r) => r.slug === slug)

    if (!resource) {
        return (
            <section className="pt-28 px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-2xl font-semibold text-white">
                        Resource not found
                    </h1>
                    <Link
                        to="/resources"
                        className="mt-4 inline-block text-blue-400 hover:text-blue-300"
                    >
                        ← Back to resources
                    </Link>
                </div>
            </section>
        )
    }

    return (
        <section className="pt-28 pb-24 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Back */}
                <Link
                    to="/resources"
                    className="text-sm text-slate-400 hover:text-white transition"
                >
                    ← Back to resources
                </Link>

                {/* Title */}
                <h1 className="mt-4 text-3xl md:text-4xl font-bold text-white">
                    {resource.title}
                </h1>

                {/* Content */}
                <div className="mt-8 text-slate-300 leading-relaxed whitespace-pre-line">
                    {resource.content}
                </div>

                {/* PDF */}
                {resource.pdf && (
                    <div className="mt-12">
                        <h2 className="text-xl font-semibold text-white mb-4">
                            Download / View Template
                        </h2>
                        <div className="rounded-xl overflow-hidden border border-white/10">
                            <iframe
                                src={resource.pdf}
                                title={resource.title}
                                className="w-full h-[600px]"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
