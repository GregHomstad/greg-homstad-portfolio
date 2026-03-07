// src/data/caseStudies.ts

export interface CaseStudyDocument {
    type: string
    label: string
    href: string
}

export interface CaseStudy {
    slug: string
    title: string
    overview: string
    problem: string
    solution: string
    impact: string[]
    tags: string[]
    pdf?: string
    documents?: CaseStudyDocument[]
}

export const caseStudies: CaseStudy[] = [
    {
        slug: "ksb1",
        title: "SAP KSB1 Field Visibility",
        overview:
            "SAP KSB1 reporting enhancement focused on improving visibility into critical reference fields used by finance teams to trace and reconcile costs. The solution reduced reliance on manual lookups and spreadsheets by surfacing key data directly within standard KSB1 reporting, enabling faster analysis and more reliable audit trails.",
        problem:
            "Standard KSB1 reporting did not expose key reference fields needed by finance, forcing users to rely on spreadsheets, manual lookups, and error-prone reconciliation.",
        solution:
            "Defined business requirements and designed SAP enhancements to surface required reference fields in KSB1 while maintaining standard performance and avoiding disruption to existing reporting.",
        impact: [
            "Reduced manual reconciliation and spreadsheet dependency",
            "Improved traceability for audits and downstream analysis",
            "Preserved SAP standard performance and reporting behavior",
        ],
        tags: ["SAP", "KSB1", "Field Visibility", "Finance Reporting"],
        pdf: "/case-studies/KSB1/KSB1_BRD.pdf",
        documents: [
            {
                type: "BRD",
                label: "Business Requirements Document",
                href: "/Greg_Homstad_BRD_Anonymized_SAP_Cost_Center_Reporting.docx"
            }
        ]
    },
]