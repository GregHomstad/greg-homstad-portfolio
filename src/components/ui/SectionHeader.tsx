interface SectionHeaderProps {
    label: string
    title: string
    description?: string
    id?: string
    maxWidth?: string
}

export default function SectionHeader({ label, title, description, id, maxWidth = "720px" }: SectionHeaderProps) {
    return (
        <div className={`max-w-[${maxWidth}] mb-14`}>
            <div className="text-label mb-4">{label}</div>
            <h1
                id={id}
                className="text-display text-[clamp(2.5rem,6vw,4.5rem)] text-[var(--text)] mb-5"
            >
                {title}
            </h1>
            {description && (
                <p className="text-[0.95rem] text-[var(--muted)] leading-[1.8] font-light">
                    {description}
                </p>
            )}
        </div>
    )
}
