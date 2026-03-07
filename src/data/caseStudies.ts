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
    role?: string
    tools?: string[]
    pdf?: string
    documents?: CaseStudyDocument[]
    embeddedPdfs?: { title: string; href: string }[]
    architectureDiagram?: string
}

export const caseStudies: CaseStudy[] = [
    {
        slug: "bom-reconciliation",
        title: "Enterprise BOM Data Reconciliation",
        overview:
            "Led enterprise-wide Bill of Materials (BOM) reconciliation initiative across SAP S/4HANA and internal manufacturing systems. Delivered a 95% reduction in data discrepancies through cross-functional coordination, structured validation logic, and automated exception handling workflows.",
        problem:
            "BOM data across SAP and internal manufacturing platforms contained systemic discrepancies — mismatched component quantities, orphaned records, and inconsistent unit-of-measure mappings. These gaps caused production planning errors, incorrect cost rollups, and downstream financial reporting issues.",
        solution:
            "Designed and owned the reconciliation framework: defined validation rules mapping SAP BOM structures to internal platform records, built exception categorization logic, and established remediation workflows with clear ownership across engineering, procurement, and finance teams.",
        impact: [
            "95% reduction in BOM data discrepancies across SAP and internal systems",
            "Eliminated manual spreadsheet-based reconciliation processes",
            "Improved production planning accuracy and cost rollup reliability",
            "Established repeatable validation framework for ongoing data governance",
        ],
        tags: ["SAP S/4HANA", "BOM", "Data Reconciliation", "Manufacturing"],
        role: "IT Product Owner",
        tools: ["SAP S/4HANA", "SQL", "Power BI", "Excel"],
        architectureDiagram: `graph LR
    A["SAP S/4HANA<br/>BOM Master"] -->|"Extract"| C["Validation<br/>Engine"]
    B["Internal MFG<br/>Platform"] -->|"Extract"| C
    C -->|"Match"| D["Reconciled<br/>Records"]
    C -->|"Exception"| E["Exception<br/>Queue"]
    E -->|"Route"| F["Remediation<br/>Workflow"]
    F -->|"Resolve"| C
    D -->|"Report"| G["Power BI<br/>Dashboard"]`,
    },
    {
        slug: "ksb1",
        title: "SAP KSB1 Field Visibility",
        overview:
            "SAP KSB1 reporting enhancement focused on improving visibility into critical reference fields used by finance teams to trace and reconcile costs. Reduced reliance on manual lookups and spreadsheets by surfacing key data directly within standard KSB1 reporting, enabling faster analysis and more reliable audit trails.",
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
        role: "IT Product Owner",
        tools: ["SAP ECC", "KSB1", "ABAP"],
        embeddedPdfs: [
            {
                title: "Business Requirements Document (BRD)",
                href: "/case-studies/KSB1/KSB1_BRD.pdf"
            },
            {
                title: "Functional Specification (FS)",
                href: "/case-studies/KSB1/KSB1_FS.pdf"
            }
        ],
        architectureDiagram: `graph LR
    A["Finance<br/>Users"] -->|"Run Report"| B["SAP KSB1<br/>Transaction"]
    B -->|"Standard Fields"| C["Cost Center<br/>Line Items"]
    B -->|"Enhanced Fields"| D["Reference<br/>Fields"]
    C --> E["Consolidated<br/>Report Output"]
    D --> E
    E -->|"Export"| F["Excel /<br/>Downstream"]`,
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
        role: "IT Product Owner",
        tools: ["SAP ECC", "ABAP", "ALV Grid", "Excel"],
        embeddedPdfs: [
            {
                title: "Business Requirements Document (BRD)",
                href: "/case-studies/1099_Enhancement/1099_BRD.pdf"
            },
            {
                title: "Functional Specification (FS)",
                href: "/case-studies/1099_Enhancement/1099_FS.pdf"
            }
        ],
        architectureDiagram: `graph LR
    A["SAP Vendor<br/>Master"] -->|"Extract"| C["1099 Extract<br/>Program"]
    B["SAP Payment<br/>History"] -->|"Filter"| C
    C -->|"Exclude Virtual<br/>Card Payments"| D["Filtered<br/>Dataset"]
    D -->|"Map Names<br/>& Addresses"| E["Formatted<br/>Output"]
    E -->|"ALV Grid"| F["Excel<br/>Export"]
    F -->|"Reconcile"| G["Corporate<br/>Tax Team"]`,
    },
]
