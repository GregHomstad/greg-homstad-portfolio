import { useEffect, useState, useCallback } from "react"

export default function BackToTop() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 600)
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const scrollUp = useCallback(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [])

    return (
        <button
            onClick={scrollUp}
            aria-label="Back to top"
            className={`fixed bottom-8 right-8 z-50 w-10 h-10 rounded-full border border-[var(--border-hover)] bg-[var(--surface)] text-[var(--muted)] flex items-center justify-center transition-all duration-300 hover:text-[var(--accent)] hover:border-[var(--accent)] focus-visible:outline-none ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
        >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 14V2M8 2L3 7M8 2L13 7" />
            </svg>
        </button>
    )
}
