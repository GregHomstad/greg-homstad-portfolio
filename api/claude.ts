import Anthropic from "@anthropic-ai/sdk"

type IncomingMessage = { role: "user" | "assistant"; content: string }

const MODEL_DEFAULT = "claude-3-opus-20240229"

function safeString(x: unknown): string {
    if (typeof x !== "string") return ""
    return x
}

export default async function handler(req: any, res: any) {
    if (req.method !== "POST") {
        res.status(405).json({ error: "Method not allowed" })
        return
    }

    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
        res.status(500).json({ error: "Missing ANTHROPIC_API_KEY" })
        return
    }

    const message = safeString(req.body?.message).trim()
    const transcript = (req.body?.transcript ?? []) as IncomingMessage[]

    if (!message) {
        res.status(400).json({ error: "Missing message" })
        return
    }

    const anthropic = new Anthropic({ apiKey })

    const system = [
        "You are an assistant embedded in Greg Homstad’s portfolio site.",
        "Scope: only answer using information that can be inferred from the user’s question and the portfolio context described below.",
        "If the user asks for private information, credentials, or anything not on the site, say you don’t have that information.",
        "",
        "Portfolio context:",
        "- Greg is a Technical Product Owner & Business Analyst focused on enterprise delivery and SAP environments.",
        "- Resources include: BRD/FS templates, requirements elicitation guide, SAP reconciliation playbook, product hypothesis framework, metrics guide, and proof-of-work artifacts.",
        "- Academic foundation: eCornell Product Management certificate (credential image is available on the site).",
    ].join("\n")

    const history = Array.isArray(transcript)
        ? transcript
              .filter((m) => m && (m.role === "user" || m.role === "assistant"))
              .slice(-10)
              .map((m) => ({
                  role: m.role,
                  content: safeString(m.content).slice(0, 2000),
              }))
        : []

    const model = process.env.ANTHROPIC_MODEL || MODEL_DEFAULT

    try {
        const out = await anthropic.messages.create({
            model,
            max_tokens: 600,
            temperature: 0.3,
            system,
            messages: [...history, { role: "user", content: message }],
        })

        const text =
            out.content
                ?.map((b: any) => (b?.type === "text" ? b.text : ""))
                .join("")
                .trim() || ""

        res.status(200).json({ reply: text || "I’m not sure I can answer that from the portfolio context." })
    } catch (err) {
        const msg = err instanceof Error ? err.message : "Claude request failed"
        res.status(500).json({ error: msg })
    }
}

