import { useEffect, useRef } from "react"
import mermaid from "mermaid"

mermaid.initialize({
    startOnLoad: false,
    theme: "dark",
    themeVariables: {
        background: "transparent",
        primaryColor: "#1e1e1e",
        primaryTextColor: "#F5F0EB",
        primaryBorderColor: "#2a2a2a",
        lineColor: "#D4B67E",
        secondaryColor: "#161616",
        tertiaryColor: "#1a1a1a",
        edgeLabelBackground: "#0C0C0C",
        fontFamily: "'Inter', sans-serif",
        fontSize: "13px",
    },
    flowchart: {
        curve: "basis",
        padding: 20,
    },
})

let diagramCount = 0

interface MermaidDiagramProps {
    chart: string
}

export default function MermaidDiagram({ chart }: MermaidDiagramProps) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!ref.current) return
        const id = `mermaid-${++diagramCount}`
        ref.current.innerHTML = ""
        mermaid
            .render(id, chart)
            .then(({ svg }) => {
                if (ref.current) ref.current.innerHTML = svg
            })
            .catch(() => {
                // Silently swallow render errors — diagram data is display-only
            })
    }, [chart])

    return (
        <div
            ref={ref}
            className="w-full overflow-x-auto flex justify-center [&>svg]:max-w-full [&>svg]:h-auto"
        />
    )
}
