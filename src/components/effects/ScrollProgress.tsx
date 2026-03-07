import { useEffect, useState } from "react"

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
        }
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <div aria-hidden="true" className="fixed top-0 left-0 right-0 z-[60] h-[1px]">
            <div
                className="h-full transition-[width] duration-150 ease-out bg-[var(--accent)]"
                style={{ width: `${progress}%`, opacity: 0.5 }}
            />
        </div>
    )
}
