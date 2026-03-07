import { useEffect, useState } from "react"

/**
 * Cursor glow — a subtle radial gradient that follows the mouse.
 * Creates a premium, alive feel across the entire page.
 */
export default function CursorGlow() {
    const [pos, setPos] = useState({ x: 0, y: 0 })
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY })
            if (!visible) setVisible(true)
        }
        const onLeave = () => setVisible(false)
        const onEnter = () => setVisible(true)

        window.addEventListener("mousemove", onMove)
        document.addEventListener("mouseleave", onLeave)
        document.addEventListener("mouseenter", onEnter)
        return () => {
            window.removeEventListener("mousemove", onMove)
            document.removeEventListener("mouseleave", onLeave)
            document.removeEventListener("mouseenter", onEnter)
        }
    }, [visible])

    // Don't render on touch devices
    if (typeof window !== "undefined" && "ontouchstart" in window) return null

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-500"
            style={{ opacity: visible ? 1 : 0 }}
        >
            <div
                className="absolute w-[600px] h-[600px] rounded-full transition-transform duration-[50ms] ease-out"
                style={{
                    transform: `translate(${pos.x - 300}px, ${pos.y - 300}px)`,
                    background: "radial-gradient(circle, rgba(107,94,248,0.04) 0%, transparent 60%)",
                }}
            />
        </div>
    )
}
