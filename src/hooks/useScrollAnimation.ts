import { useEffect, useRef, useState } from "react"

function prefersReducedMotion() {
    return typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function useScrollAnimation(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(prefersReducedMotion)

    useEffect(() => {
        if (isVisible) return

        const el = ref.current
        if (!el) return

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    obs.disconnect()
                }
            },
            { threshold }
        )
        obs.observe(el)
        return () => obs.disconnect()
    }, [threshold, isVisible])

    return { ref, isVisible }
}
