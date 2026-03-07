import { useMemo, useState } from "react"
import { MessageSquare, Send, Shield } from "lucide-react"

type ChatMessage = {
    role: "user" | "assistant"
    content: string
}

export default function ClaudeChat() {
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            role: "assistant",
            content:
                "Ask me about the frameworks on this page, my eCornell Product Management training, or how I approach enterprise delivery.",
        },
    ])

    const canSend = useMemo(() => input.trim().length > 0 && !isLoading, [input, isLoading])

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!canSend) return

        const userText = input.trim()
        setInput("")
        setError(null)
        setIsLoading(true)

        const nextMessages: ChatMessage[] = [...messages, { role: "user", content: userText }]
        setMessages(nextMessages)

        try {
            const res = await fetch("/api/claude", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: userText,
                    transcript: nextMessages,
                    pageContext: "resources",
                }),
            })

            if (!res.ok) {
                const text = await res.text()
                throw new Error(text || `Request failed (${res.status})`)
            }

            const data = (await res.json()) as { reply?: string }
            const reply = data.reply?.trim()
            if (!reply) throw new Error("Empty response from assistant")

            setMessages((prev) => [...prev, { role: "assistant", content: reply }])
        } catch (err) {
            const msg = err instanceof Error ? err.message : "Something went wrong."
            setError(msg)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="border border-[var(--border)] bg-[var(--surface)]/30 backdrop-blur-sm rounded-lg overflow-hidden">
            <div className="p-10 border-b border-[var(--border)] flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-[var(--bg)] border border-[var(--border)] rounded">
                        <MessageSquare className="text-[var(--accent)]" size={20} />
                    </div>
                    <div>
                        <div className="text-label mb-2">Claude Opus</div>
                        <h3 className="text-[1.6rem] text-[var(--text)] font-normal leading-tight">
                            Ask about my product frameworks
                        </h3>
                        <p className="text-[0.95rem] text-[var(--muted)] font-light leading-[1.7] max-w-[680px] mt-3">
                            Q&A powered by Claude with a strict “portfolio-only” scope. Your message is sent to a server-side endpoint; your
                            browser never sees an API key.
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-[0.8rem] text-[var(--muted)]">
                    <Shield size={16} className="text-[var(--accent)]" />
                    Server-side key
                </div>
            </div>

            <div className="p-10">
                <div className="space-y-6 mb-8">
                    {messages.map((m, idx) => (
                        <div
                            key={idx}
                            className={[
                                "p-6 rounded-lg border",
                                m.role === "assistant"
                                    ? "bg-[var(--bg)] border-[var(--border)]"
                                    : "bg-[var(--text)] text-[var(--bg)] border-transparent",
                            ].join(" ")}
                        >
                            <div className="text-[0.7rem] uppercase tracking-[0.3em] opacity-70 mb-3">
                                {m.role === "assistant" ? "Assistant" : "You"}
                            </div>
                            <div className="text-[0.95rem] leading-[1.8] font-light whitespace-pre-wrap">{m.content}</div>
                        </div>
                    ))}
                </div>

                <form onSubmit={onSubmit} className="space-y-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask a question… (e.g., “How do you turn stakeholder requests into acceptance criteria?”)"
                            rows={3}
                            className="w-full p-5 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30"
                        />
                        <button
                            type="submit"
                            disabled={!canSend}
                            className="btn-primary px-8 py-5 md:self-stretch disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                        >
                            {isLoading ? "Thinking…" : "Send"} <Send size={18} />
                        </button>
                    </div>

                    {error ? (
                        <div className="text-[0.9rem] text-red-600">
                            {error}
                        </div>
                    ) : null}
                </form>
            </div>
        </section>
    )
}

