interface TagProps {
    children: React.ReactNode
}

export default function Tag({ children }: TagProps) {
    return (
        <span className="rounded-full border border-[var(--border)] bg-black/10 px-2.5 py-1 text-[0.7rem] uppercase tracking-[0.12em] text-[var(--muted)]">
            {children}
        </span>
    )
}
