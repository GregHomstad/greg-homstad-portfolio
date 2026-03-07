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
    embeddedPdfs?: { title: string; href: string }[]
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
        embeddedPdfs: [
            {
                title: "Business Requirements Document (BRD)",
                href: "/case-studies/KSB1/KSB1_BRD.pdf"
            },
            {
                title: "Functional Specification (FS)",
                href: "/case-studies/KSB1/KSB1_FS.pdf"
            }
        ]
    },
    {
        slug: "1099-enhancement",
        title: "SAP 1099 MISC Extract Enhancement",
        overview:
            "Enhanced the SAP 1099 MISC extract program to support automated year-end reporting. Excluded non-reportable Virtual Card payments, structured recipient names and addresses properly, integrated vendor email data, and enabled an ALV Grid export to Excel to streamline the Corporate Tax team's reconciliation processes.",
        problem:
            "The existing 1099 extract program included non-reportable virtual card payments, lacked email addresses and structured name fields, and output data in a flat file, resulting in manual data cleansing and inefficient reconciliation processes.",
        solution:
            "Implemented data extraction logic to exclude specific payment methods dynamically, mapped additional vendor master data fields for proper name and address formatting, and enhanced the output display with an ALV Grid for direct Excel exports.",
        impact: [
            "Eliminated manual removal of virtual card payments from 1099 files",
            "Improved IRS compliance with accurate recipient name formatting",
            "Enabled seamless Excel data exports for the Corporate Tax team"
        ],
        tags: ["SAP", "1099 MISC", "Accounts Payable", "Data Extraction"],
        embeddedPdfs: [
            {
                title: "Business Requirements Document (BRD)",
                href: "/case-studies/1099_Enhancement/1099_BRD.pdf"
            },
            {
                title: "Functional Specification (FS)",
                href: "/case-studies/1099_Enhancement/1099_FS.pdf"
            }
        ]
    },
]