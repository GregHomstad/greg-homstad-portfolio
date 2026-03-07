import { useEffect, useState } from "react"

export default function LoadingScreen() {
    const [progress, setProgress] = useState(0)
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(p => {
                if (p >= 100) {
                    clearInterval(timer)
                    setTimeout(() => setIsComplete(true), 500)
                    return 100
                }
                return p + (Math.random() * 15)
            })
        }, 150)

        return () => clearInterval(timer)
    }, [])

    if (isComplete) return null

    return (
        <div className={`fixed inset-0 z-[10000] bg-[var(--bg)] flex flex-col items-center justify-center transition-opacity duration-1000 ${progress === 100 ? "opacity-0" : "opacity-100"}`}>
            <div className="relative px-8 pb-10">
                <h2 className="text-display text-[clamp(2.5rem,8vw,5.5rem)] text-[var(--text)] reveal-up leading-[0.85]">
                    <span>Greg Homstad</span>
                </h2>
                {/* Background Track */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--border)]" />
                {/* Active Progress */}
                <div
                    className="absolute bottom-0 left-0 h-[1px] bg-[var(--accent)] transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <div className="mt-12 text-label text-[10px] opacity-30 font-light tracking-[0.3em]">
                {Math.round(progress)}%
            </div>
        </div>
    )
}
