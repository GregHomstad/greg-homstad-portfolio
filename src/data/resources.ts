export interface Resource {
    slug: string
    title: string
    type: "Article" | "Templates" | "Guide"
    summary: string
    content: string
    pdf?: string
}

export const resources: Resource[] = [
    {
        slug: "templates",
        title: "Enterprise Templates",
        type: "Templates",
        summary:
            "Enterprise-ready templates for functional specs, BRDs, and delivery documentation.",
        content: `
This section contains enterprise-grade templates used in real delivery work,
including SAP and internal platform initiatives.

Available templates include:
- Enterprise Functional Specification
- Business Requirements Document (BRD)
- Functional Requirements Document (FRD)

Each template is designed to support clarity, traceability, and stakeholder alignment.
        `,
    },
    {
        slug: "brd-frd-fsd",
        title: "BRD vs FRD vs FSD — When to Use Each",
        type: "Article",
        summary:
            "A breakdown of business and functional documentation types, with real-world examples.",
        content: `
BRDs, FRDs, and FSDs often get used interchangeably — and that causes problems.

This article explains:
- Who each document is for
- When to write each
- Common mistakes teams make
        `,
    },
    {
        slug: "sap-reporting-best-practices",
        title: "SAP Reporting Enhancement Best Practices",
        type: "Guide",
        summary:
            "Lessons learned from enhancing standard SAP reports without breaking performance or upgrades.",
        content: `
Enhancing standard SAP reports requires a careful balance between usability,
performance, and upgrade safety.

This guide outlines best practices learned from real enterprise implementations.
        `,
    },
]