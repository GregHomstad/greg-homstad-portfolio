import { Link } from "react-router-dom"
import { Tag } from "../common/Tag"

export function CaseStudyCard({
    study,
}: {
    study: {
        id: string
        type: string
        title: string
        description: string
        impact: string
        tags: string[]
    }
}) {
    return (
        <div className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl hover:shadow-blue-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-violet-500/0 group-hover:from-blue-500/5 group-hover:to-violet-500/5 rounded-2xl transition-all duration-500"></div>

            <div className="relative space-y-6">
                <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
                    {study.type}
                </span>

                <h3 className="text-2xl font-bold text-white leading-tight">
                    {study.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                        <Tag key={tag} label={tag} />
                    ))}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                    {study.description}
                </p>

                <div className="pt-6 border-t border-white/10 space-y-2">
                    <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                        Impact
                    </p>
                    <p className="text-sm text-slate-200 leading-relaxed">
                        {study.impact}
                    </p>
                </div>

                <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition"
                >
                    View Details →
                </Link>
            </div>
        </div>
    )
}
