---
title: "FUNCTIONAL SPECIFICATION (ANONYMIZED)"
author: "Greg Homstad"
date: "September 2025"
---

# FUNCTIONAL SPECIFICATION (ANONYMIZED)

**SAP Cost Center Line-Item Reporting**  
**Reference Key Visibility**  

**Prepared by:** Greg Homstad  
**Date:** September 2025  
**Version:** 0.3.0  

*Disclaimer: This document is a functional portfolio artifact. To protect confidentiality, all specific enterprise program names, internal systems, exact business logic variations, and executive stakeholder identities have been anonymized.*

<br>

## VERSION HISTORY

| VERSION | REVISION DATE | DESCRIPTION OF CHANGE | AUTHOR |
| :--- | :--- | :--- | :--- |
| 0.1.0 | 09/11/2025 | Initial draft prepared for functional design session with finance stakeholders. | Greg Homstad |
| 0.2.0 | 09/12/2025 | Updated based on stakeholder feedback. Aligned terminology and refined functional scope. | Greg Homstad |
| 0.3.0 | 09/15/2025 | Finalized functional specification based on S/4HANA reporting standards. | Greg Homstad |

## APPROVAL MATRIX

| APPROVED BY | ROLE | APPROVAL DATE | SIGNATURE/eSIGNATURE |
| :--- | :--- | :--- | :--- |
| Finance IT Architect | Enterprise Data Architecture (Finance) | 9/15/2025 | |
| Finance Business Stakeholder | Business Stakeholder (Cost Accounting / Controlling) | 9/15/2025 | |

## DOCUMENT CONTROLS

<table class="doc-controls">
  <thead>
    <tr>
      <th>CONTROL</th>
      <th>DESCRIPTION</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>SYSTEM</td>
      <td>SAP S/4HANA Environment</td>
    </tr>
    <tr>
      <td>RICEF/OBJECT ID</td>
      <td></td>
    </tr>
    <tr>
      <td>PROCESS AREA</td>
      <td>Finance – Controlling (Cost Center Reporting)</td>
    </tr>
    <tr>
      <td>CHANGE TYPE</td>
      <td>Report Field Visibility Enhancement</td>
    </tr>
    <tr>
      <td>USER STORY #</td>
      <td></td>
    </tr>
    <tr>
      <td>METHODOLOGY:</td>
      <td>Agile</td>
    </tr>
  </tbody>
</table>

<br>

## Table of Contents

1.0 INTRODUCTION  
&nbsp;&nbsp;&nbsp;&nbsp;1.1 Purpose  
2.0 PROJECT OVERVIEW  
&nbsp;&nbsp;&nbsp;&nbsp;2.1 Objectives  
&nbsp;&nbsp;&nbsp;&nbsp;2.2 Assumptions  
&nbsp;&nbsp;&nbsp;&nbsp;2.3 Constraints  
&nbsp;&nbsp;&nbsp;&nbsp;2.4 Risks  
3.0 SUPPORTING DOCUMENTS  
&nbsp;&nbsp;&nbsp;&nbsp;3.1 As Is  
&nbsp;&nbsp;&nbsp;&nbsp;3.2 To Be  
4.0 FUNCTIONAL REQUIREMENTS  
&nbsp;&nbsp;&nbsp;&nbsp;4.1 Business Rules/ Requirements  
&nbsp;&nbsp;&nbsp;&nbsp;4.2 Functional Requirements  
&nbsp;&nbsp;&nbsp;&nbsp;4.3 Stakeholder Requirements  
&nbsp;&nbsp;&nbsp;&nbsp;4.4 Solution Requirements  
&nbsp;&nbsp;&nbsp;&nbsp;4.5 Non-Functional Requirements  
&nbsp;&nbsp;&nbsp;&nbsp;4.6 Transition Requirements  
&nbsp;&nbsp;&nbsp;&nbsp;4.7 Usability Requirements  
&nbsp;&nbsp;&nbsp;&nbsp;4.8 Performance Requirements  
&nbsp;&nbsp;&nbsp;&nbsp;4.9 Supportability Requirements  
&nbsp;&nbsp;&nbsp;&nbsp;4.10 Security Requirements  
&nbsp;&nbsp;&nbsp;&nbsp;4.11 Interface Requirements  
&nbsp;&nbsp;&nbsp;&nbsp;4.12 Compliance Requirements  
5.0 SUPPLEMENTAL DOCUMENTS  
&nbsp;&nbsp;&nbsp;&nbsp;5.1 Traceability Matrix  
APPENDIX A: REFERENCES  
APPENDIX B: KEY TERMS  

<br>

---

## 1.0 INTRODUCTION

### 1.1 Purpose

The purpose of this document is to detail the functional design for enabling users to easily identify the external source system of financial postings directly within the SAP S/4HANA cost center line-item report (KSB1). Providing direct visibility into the external source identifier will reduce reconciliation effort, improve enterprise data reconciliation, and allow stakeholders to more efficiently trace ERP integrations.

---

## 2.0 PROJECT OVERVIEW

### 2.1 Objectives

* **Specific:** Provide visibility into external source system identifiers within the KSB1 report to support financial reconciliation and ERP data integrity.
* **Measurable:** Enable users to reconcile SAP postings without drilling into individual document headers.
* **Attainable:** Business need can be met using information already available in SAP postings.
* **Realistic:** Business needs can be met using data already present in S/4HANA financial documents.
* **Time-bound:** Deliver reporting visibility by the end of Q4 FY2025.

### 2.2 Assumptions

* External source identifiers are consistently populated in SAP document headers for relevant postings.
* Users have the required authorization to view cost center line items and related information.

### 2.3 Constraints

* The reporting change must not degrade report performance or user experience within the ERP system.
* The change must remain compatible with existing SAP S/4HANA reporting structures.

### 2.4 Risks

* If external source identifiers are inconsistently populated, enterprise data reconciliation accuracy may be impacted.
* Changes to how future external systems supply identifiers could reduce long-term reporting usefulness.

---

## 3.0 SUPPORTING DOCUMENTS

### 3.1 As Is

Currently, standard KSB1 reporting does not expose the external source identifier within the grid. The KSB1 transaction drills into detailed postings, but users must manually navigate through multiple SAP reporting screens to view document header data. This impacts reporting accuracy and slows down cross-functional collaboration.

### 3.2 To Be

Users will be able to view the external source identifier directly within the KSB1 report output. The report pulls all cost centers and aggregates data accurately alongside the reference key, eliminating repetitive navigation into document headers and improving transparency of financial data for the IT Financial Controlling & Costing teams.

*(Note: System visuals have been removed from this anonymized version.)*

---

## 4.0 FUNCTIONAL REQUIREMENTS

### 4.1 Business Rules/ Requirements

| BRD ID | Business Rule / Requirement |
| :--- | :--- |
| BR-001 | Users must be able to view the external source identifier directly within the KSB1 cost center line-item report. |
| BR-002 | Users must be able to identify the originating external source system for a posting without navigating into individual SAP document headers. |
| BR-003 | The solution must support efficient reconciliation of high-volume financial postings within standard reporting workflows. |
| BR-004 | The enhancement must improve transparency of financial posting without altering existing posting logic or data values. |

### 4.2 Functional Requirements

| FR ID | Functional Requirement |
| :--- | :--- |
| FR-001 | The KSB1 report output must incorporate the external reference key from the financial document header. |
| FR-002 | The mapped value must accurately reflect the originating system identifier stored at the document level in the SAP ERP. |
| FR-003 | Standard filtering, layout management, and extraction capabilities of the KSB1 line-item grid must remain fully operational. |

### 4.3 Stakeholder Requirements

Business stakeholders (Cost Accounting / Controlling) require direct visibility into external source system identifiers within cost center line-item reporting to efficiently reconcile financial postings across multiple integrated enterprise systems.

### 4.4 Technical Architecture & Data Mapping

To support the visibility of the external source identifier within the KSB1 ALV grid without degrading performance, the solution will leverage standard SAP S/4HANA Core Data Services (CDS) or BAdI extensibility, mapping header-level reference data to the line-item display structure.

**Data Mapping Table:**

| Component | Source Table | Source Field | Target Structure | Target Field Name | Data Type |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Accounting Document Header | `BKPF` | `RefKeyHeader(1)` (Reference Key) | `CI_COBL` (Custom Include) | `ZZ_EXT_SRC_ID` | `CHAR 20` |
| CO Object: Line Items | `COEP` | `OBJNR` (Object Number) | Implicit Join | N/A | Mapping Link |

**Implementation Logic (BAdI Approach):**

1. Implement a custom BAdI within the FICO posting interface or report extraction logic (e.g., Logical Database `KDF`).
2. Read the `RefKeyHeader(1)` (Reference Key) or `XBLNR` (Reference Document Number) from the accounting document header (`BKPF`) corresponding to the cost center line item (`COEP`).
3. Append the extracted `RefKeyHeader(1)` value to the custom field `ZZ_EXT_SRC_ID` within the KSB1 ALV output structure.
4. Ensure the new column "Ext Source Id" is available in the layout catalog for end-users to select and save in their standard variants.

### 4.5 Non-Functional Requirements

The enhancement must not introduce measurable performance degradation during month-end close operations.

### 4.6 Transition Requirements

Existing KSB1 report variants and saved user layouts must remain functional post-deployment.

### 4.7 Usability Requirements

The external source identifier must be clearly labeled and placed intuitively within the available column catalog.

### 4.8 Performance Requirements

High-volume enterprise data sets must render without degradation to the SAP GUI or Fiori launchpad experience.

### 4.9 Supportability Requirements

The solution must be supportable under standard Enterprise Change Management (ECM) processes and IT box office tickets.

### 4.10 Security Requirements

Access to the new field respects existing SAP FI/CO authorization roles; no additional security roles are needed.

### 4.11 Interface Requirements

No inbound or outbound EDI or API interfaces are modified by this internal reporting view change.

### 4.12 Compliance Requirements

The solution complies with internal SOX (Sarbanes-Oxley Act) controls, presenting only existing data without allowing manipulation.

---

## 5.0 SUPPLEMENTAL DOCUMENTS

### 5.1 Traceability Matrix

| Business Req | Functional Req | Priority | Test Case Description |
| :--- | :--- | :--- | :--- |
| BR-001 | FR-001 | High | **Scenario:** Post GL expense via `FB50` with Reference Key (`RefKeyHeader(1)`) 'GCP-99281'. **Action:** Execute `KSB1` for the target Cost Center. **Validation:** Verify column 'Ext Source Id' exists and displays 'GCP-99281'. |
| BR-004 | FR-002 | Medium | **Scenario:** Perform standard month-end assessment via `KSU5`. **Validation:** Verify no posting values, profit center derivations, or standard CO-PA logic are altered by the BAdI extraction. |

---

### APPENDIX A: REFERENCES

| Document Name | Description |
| :--- | :--- |
| Product Costing Acronyms Wiki | Internal reference for SAP and Controller terminology |
| Enterprise Change Management (ECM) | Change process standards for the promotion of S/4HANA objects |

### APPENDIX B: KEY TERMS

| Term | Definition |
| :--- | :--- |
| **KSB1** | SAP transaction used to display cost center line-item postings. It drills into detailed postings and can filter by sets. |
| **External Source Identifier** | Identifier stored at the document header level indicating the originating external system for a financial posting. |
| **FI** | Financial Accounting (SAP) |
| **SOX** | Sarbanes-Oxley Act – Protects the public from fraudulent or erroneous practices by corporations or other business entities. |
| **S/4HANA** | SAP's enterprise ERP platform. |
| **Set** | Reusable groups of cost centers used for organizing and filtering reporting data. |
