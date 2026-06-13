# Product Validation Data Model

## Purpose

This document defines the records needed to run the product validation engine.

Definition:
- Data model: the plan for what information the system stores and how records connect.

Business meaning:
- Product research becomes useful only when it is stored as structured records.
- Structured records let Codex later build dashboards, automations, product approval gates, and reporting.

## Records

| Record | Business Meaning | Key Fields |
|---|---|---|
| Product Candidate | Product idea before launch | candidate ID, store ID, product name, category, customer problem, status, score, decision |
| Market Signal | Evidence of demand | platform, signal type, source URL, captured date, notes, confidence |
| Compliance Lane | Risk group for proof requirements | lane number, lane name, required documents, blocked claims, approval rule |
| Product File | Product proof folder | product file ID, candidate ID, supplier ID, evidence status, missing evidence, approval status |
| Supplier Route | How the product can be sourced | supplier route ID, supplier name, app/platform, countries, cost model, risk status |
| Sample Test | Physical product check | sample ID, candidate ID, supplier ID, order date, delivery date, result, defect notes |
| Pricing Review | Margin check | cost, shipping, fees, target price, expected margin, decision |
| Product Claim | Approved or blocked wording | candidate ID, claim text, claim type, status, evidence, notes |
| Visual Verification | Product-page and image check | candidate ID, screen/page, viewport, issue, status, reviewer |
| Launch Decision | Final pre-launch decision | candidate ID, decision, reason, date, next action |

Definitions:
- Candidate ID: an internal unique identifier for one product idea.
- Confidence: how much weight the business gives a signal.
- Viewport: the screen size used to check a page, such as mobile or desktop.

## Relationship Map

```text
Product Candidate
-> Market Signal
-> Compliance Lane
-> Supplier Route
-> Product File
-> Sample Test
-> Pricing Review
-> Product Claim
-> Visual Verification
-> Launch Decision
```

When a launch decision passes:

```text
Launch Decision
-> Product
-> Variant
-> Supplier Product
-> Inventory Snapshot
-> Shopify Product Page
```

## Candidate Status Values

Use only these statuses:

```text
idea
candidate
scored
supplier_review
sample_pending
sample_review
claims_review
pricing_review
ready_for_import
visual_review
test_launch
approved
blocked
```

Definition:
- Status value: the exact label used by the system to avoid unclear wording.

## Launch Decision Values

Use only these decisions:

```text
direct_sale_priority
sample_first
affiliate_first
prepare_only
exclude_for_now
blocked
```

## Required Fields Before Sample Order

Before ordering a sample, the candidate must have:
- Store ID.
- Product name.
- Category.
- Customer problem.
- Compliance lane.
- Demand score.
- Supplier route.
- Estimated cost.
- Target selling price.
- Decision status.

## Required Fields Before Shopify Import

Before importing into Shopify, the product must have:
- Product file.
- Passed sample test.
- Approved supplier route.
- Pricing review pass.
- Approved claims.
- Blocked claims.
- Product images checked.
- Product page requirements.
- Return and support notes.

Definition:
- Shopify import: creating the product record inside Shopify so it can become a store product.

## Backend Tidiness Rules

- Product candidate is not the same as product.
- Product file is not the same as product page.
- Supplier approval is not the same as product approval.
- A product can have more than one supplier route.
- A product can have many market signals.
- Claims must be stored separately from product descriptions.
- Visual verification must be stored separately from compliance review.
- Every blocked product needs a reason.

## Example Candidate Record

```text
candidate_id: beauty-001
store_id: beauty_accessories
product_name: Travel cosmetic/toiletry organizer
category: storage/travel
customer_problem: travel leakage and beauty clutter
score: 33
compliance_lane: Lane 1
launch_decision: direct_sale_priority
supplier_route_primary: CJdropshipping or DSers
sample_required: yes
status: supplier_review
```

## Verification Checklist

Operational verification:
- Required fields exist before sample ordering.
- Required fields exist before Shopify import.
- Product can be blocked with a reason.
- Product can have backup suppliers.

Backend verification:
- Status values are controlled.
- Decision values are controlled.
- Records connect by IDs rather than vague notes.
- Claims, compliance, sample tests, and visual checks are not mixed into one messy field.

Visual verification:
- Future admin table must show status, score, compliance lane, missing evidence, and next action.
- Future product page builder must show whether claims are approved.
- Future dashboard must make blocked products visually obvious.

## Reusable Codex Prompt

```text
Create a product validation data model for this ecommerce business. Define all terms in plain English. Include records, key fields, relationship map, controlled statuses, controlled decision values, required fields before sample order, required fields before import, backend tidiness rules, and verification checks.
```
