// src/data/caseStudies.ts

export interface CaseStudy {
    slug: string
    title: string
    overview: string
    problem: string
    approach: string
    methodology: string
    knowledgeAreas: string[]
    stakeholders: string[]
    impact: string[]
    tags: string[]
    artifacts: string[]
}

export const caseStudies: CaseStudy[] = [
    {
        slug: "erp-reconciliation",
        title: "Enterprise ERP Data Reconciliation",
        overview:
            "Led a cross-functional data reconciliation initiative between SAP S/4HANA and a secondary database platform across 30+ manufacturing plants. Identified and resolved systemic data discrepancies in material specifications and Bills of Material, delivering audit-ready reporting through a cloud analytics platform and enterprise dashboards that directly supported annual financial close.",
        problem:
            "Material and specification data across SAP S/4HANA and a secondary enterprise database had diverged over time, creating discrepancies that impacted production costing, financial reporting, and audit readiness across 30+ manufacturing plants. Manual reconciliation efforts were inconsistent, time-consuming, and lacked visibility into root causes.",
        approach:
            "Conducted strategy analysis to define the initiative's scope, success criteria, and stakeholder alignment across Operations, Finance, and Supply Chain directors. Led elicitation sessions with plant managers and operations directors to gather requirements and map current-state data flows. Performed gap analysis and root cause analysis to identify where and why data diverged between systems. Defined data validation rules and reconciliation logic, translating business needs into documented requirements delivered through Agile sprint cycles. Coordinated with engineering to build automated validation pipelines and designed KPI dashboards for ongoing monitoring and executive reporting.",
        methodology: "BABOK · Agile/Scrum",
        knowledgeAreas: [
            "Strategy Analysis",
            "Business Analysis Planning & Monitoring",
            "Elicitation & Collaboration",
            "Requirements Analysis & Design Definition",
            "Requirements Life Cycle Management",
            "Solution Evaluation",
        ],
        stakeholders: [
            "Directors of Operations",
            "Finance Leadership",
            "Supply Chain Directors",
            "Plant Managers",
            "Internal Audit",
            "SAP Engineering",
        ],
        impact: [
            "Reduced ERP data discrepancies by 95% across 30+ plants",
            "Delivered audit-ready reporting that directly supported annual financial close",
            "Eliminated compliance risk flagged by internal audit",
            "Established ongoing data governance and monitoring practices",
        ],
        tags: ["SAP S/4HANA", "Data Reconciliation", "Power BI", "GCP BigQuery", "Data Governance"],
        artifacts: [
            "Stakeholder Analysis",
            "Current-State / Future-State Process Maps",
            "Gap Analysis & Root Cause Analysis",
            "Data Validation Rules",
            "Business Requirements Document (BRD)",
            "KPI Dashboard Design",
            "Requirements Traceability Matrix",
            "Acceptance Criteria",
            "UAT Test Scenarios",
        ],
    },
    {
        slug: "bom-portal",
        title: "Enterprise BOM Portal Ownership",
        overview:
            "Owned the enterprise Bill of Materials (BOM) Portal — the single source of truth for 700K+ Bills of Material across 30+ manufacturing plants — serving as the product owner responsible for data integrity, backlog prioritization, and cross-functional coordination between finance, operations, and engineering stakeholders.",
        problem:
            "The enterprise BOM Portal managed 700K+ Bills of Material underpinning production costing, scheduling, and financial reporting. Competing priorities from finance, operations, and engineering created backlog contention, while data integrity issues across the full product lifecycle risked downstream impact on costing accuracy and compliance.",
        approach:
            "Applied business analysis planning and monitoring to establish a prioritization framework using MoSCoW criteria, balancing audit compliance deadlines against production system enhancements — deliberately deferring lower-priority feature requests to protect the critical path for financial close. Led ongoing elicitation with finance, operations, and engineering stakeholders to refine requirements and manage change requests. Facilitated backlog grooming and sprint planning in Jira, clarifying acceptance criteria and aligning cross-functional teams. Performed continuous solution evaluation through data validation, stakeholder feedback loops, and sprint retrospectives to maintain data integrity across the full product lifecycle.",
        methodology: "BABOK · Agile/Scrum",
        knowledgeAreas: [
            "Business Analysis Planning & Monitoring",
            "Elicitation & Collaboration",
            "Requirements Analysis & Design Definition",
            "Requirements Life Cycle Management",
            "Solution Evaluation",
        ],
        stakeholders: [
            "Finance Analysts",
            "Operations Directors",
            "Engineering Stakeholders",
            "Production Scheduling Teams",
            "SAP Development",
        ],
        impact: [
            "Maintained data integrity for production costing, scheduling, and financial reporting",
            "Improved sprint completion rates by 20% through clarified acceptance criteria",
            "Reduced scope churn across competing stakeholder requests",
            "Supported multimillion-dollar production and financial reporting workflows",
        ],
        tags: ["Product Ownership", "BOM Management", "Agile/Scrum", "Backlog Prioritization"],
        artifacts: [
            "Product Backlog",
            "MoSCoW Prioritization Framework",
            "User Stories & Acceptance Criteria",
            "Sprint Planning Documentation",
            "Stakeholder Communication Plan",
            "Data Integrity Validation Reports",
        ],
    },
    {
        slug: "ksb1",
        title: "SAP KSB1 Field Visibility",
        overview:
            "SAP KSB1 reporting enhancement focused on improving visibility into critical reference fields used by finance teams to trace and reconcile costs. The solution reduced reliance on manual lookups and spreadsheets by surfacing key data directly within standard KSB1 reporting, enabling faster analysis and more reliable audit trails.",
        problem:
            "Standard KSB1 reporting did not expose key reference fields needed by finance, forcing users to rely on spreadsheets, manual lookups, and error-prone reconciliation.",
        approach:
            "Conducted elicitation sessions with finance and controlling stakeholders to identify reporting gaps and define business needs. Translated stakeholder requirements into structured business rules and functional requirements through iterative analysis. Built a traceability matrix linking each business requirement to its functional specification and UAT test scenario. Delivered within Agile sprint cycles, coordinating with SAP development to design enhancements that surfaced required reference fields while preserving standard reporting performance.",
        methodology: "BABOK · Agile/Scrum",
        knowledgeAreas: [
            "Elicitation & Collaboration",
            "Requirements Analysis & Design Definition",
            "Requirements Life Cycle Management",
            "Solution Evaluation",
        ],
        stakeholders: [
            "Finance IT Architect",
            "Cost Accounting / Controlling",
            "Finance Analysts",
            "SAP Development",
        ],
        impact: [
            "Reduced manual reconciliation and spreadsheet dependency",
            "Improved traceability for audits and downstream analysis",
            "Preserved SAP standard performance and reporting behavior",
        ],
        tags: ["SAP", "KSB1", "Field Visibility", "Finance Reporting"],
        artifacts: [
            "Stakeholder Requirements",
            "Business Requirements Document (BRD)",
            "Functional Specification (FS)",
            "Requirements Traceability Matrix",
            "Acceptance Criteria",
            "UAT Test Scenarios",
        ],
    },
    {
        slug: "1099-enhancement",
        title: "SAP 1099 MISC Extract Enhancement",
        overview:
            "Enhanced the SAP 1099 MISC extract program to support automated year-end reporting. Excluded non-reportable Virtual Card payments, structured recipient names and addresses properly, integrated vendor email data, and enabled an ALV Grid export to Excel to streamline the Corporate Tax team's reconciliation processes.",
        problem:
            "The existing 1099 extract program included non-reportable virtual card payments, lacked email addresses and structured name fields, and output data in a flat file, resulting in manual data cleansing and inefficient reconciliation processes.",
        approach:
            "Led elicitation and collaboration with Corporate Tax and Accounting stakeholders to capture business rules for year-end 1099 reporting. Applied requirements analysis techniques including data modeling and process modeling to define extraction logic changes. Managed the requirements life cycle through a traceability matrix linking business requirements to functional specifications and UAT test cases. Coordinated delivery through Agile sprint planning, backlog grooming, and cross-functional collaboration with SAP ABAP development.",
        methodology: "BABOK · Agile/Scrum",
        knowledgeAreas: [
            "Business Analysis Planning & Monitoring",
            "Elicitation & Collaboration",
            "Requirements Analysis & Design Definition",
            "Requirements Life Cycle Management",
            "Solution Evaluation",
        ],
        stakeholders: [
            "Corporate Tax Team",
            "Corporate Accounting",
            "Enterprise Data Architect",
            "SAP ABAP Development",
        ],
        impact: [
            "Eliminated manual removal of virtual card payments from 1099 files",
            "Improved IRS compliance with accurate recipient name formatting",
            "Enabled seamless Excel data exports for the Corporate Tax team",
        ],
        tags: ["SAP", "1099 MISC", "Accounts Payable", "Data Extraction"],
        artifacts: [
            "Stakeholder Analysis",
            "Business Requirements Document (BRD)",
            "Functional Specification (FS)",
            "Data Dictionary",
            "Requirements Traceability Matrix",
            "RACI Matrix",
            "Acceptance Criteria",
            "UAT Test Scenarios",
        ],
    },
    {
        slug: "portfolio-site",
        title: "AI-Powered Portfolio — Conception to Production",
        overview:
            "Designed, built, and shipped a production-grade portfolio site in under a month using AI-powered development tools — applying the same Agile principles, product management methodology, and iterative delivery approach used in enterprise product ownership. Served as sole product owner, designer, and QA, directing AI agents (Claude Code, Cursor, Google AI Studio) as the engineering team.",
        problem:
            "Needed a production-quality portfolio to communicate enterprise product ownership experience, SAP/ERP expertise, and structured business analysis skills to hiring managers — without a traditional development team or a multi-month timeline.",
        approach:
            "Applied Cornell product management principles to define the product vision, target audience, and success criteria before writing any code. Ran iterative sprints using Agile methodology — defining user stories, prioritizing features with MoSCoW, and shipping incremental releases. Used AI agents as the development team: Claude Code for architecture, component development, and production readiness reviews; Cursor for real-time code iteration; and Google AI Studio for content strategy and prompt engineering. Managed the AI collaboration the same way a PO manages engineering — writing clear requirements, reviewing outputs against acceptance criteria, and iterating through feedback loops. Conducted a full production readiness review including confidentiality audits, performance verification, and BABOK-aligned case study validation before launch.",
        methodology: "Agile/Scrum · AI-Assisted Development",
        knowledgeAreas: [
            "Strategy Analysis",
            "Business Analysis Planning & Monitoring",
            "Elicitation & Collaboration",
            "Requirements Analysis & Design Definition",
            "Solution Evaluation",
        ],
        stakeholders: [
            "Hiring Managers (target audience)",
            "AI Agents (Claude Code, Cursor, Google AI Studio)",
            "Cornell PM Certificate Program (methodology)",
        ],
        impact: [
            "Shipped from conception to production in under one month",
            "Zero confidentiality violations across all case studies and documents",
            "Production-grade React + TypeScript SPA with lazy loading and SEO optimization",
            "Demonstrated AI-augmented product delivery as a repeatable workflow",
        ],
        tags: ["AI-Assisted Development", "Product Management", "React", "TypeScript", "Prompt Engineering"],
        artifacts: [
            "Product Vision & Success Criteria",
            "Feature Backlog & MoSCoW Prioritization",
            "AI Prompt Engineering Workflows",
            "Production Readiness Checklist",
            "Confidentiality & Anonymization Audit",
            "SEO & Performance Optimization",
        ],
    },
]
