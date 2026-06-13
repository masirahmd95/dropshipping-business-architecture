# Product Validation Engine Method

## Purpose

This method explains how to decide what products a dropshipping business should sell before building a storefront.

Definition:
- Product validation engine: a repeatable decision system that checks demand, profit, operations, suppliers, compliance, and content fit before a product goes live.

## Why This Matters

Dropshipping fails when product selection is based only on what looks viral.

A real business architecture needs to answer:
- Is there demand?
- Can we make margin?
- Can a supplier fulfil it reliably?
- Can we sell it legally and honestly?
- Can we support customers when something goes wrong?
- Can the product be shown accurately online?

Definition:
- Margin: the money left after product cost, shipping, payment fees, returns, discounts, and marketing costs.

## Step 1: Separate Product Types

Do not treat every product equally.

Example for beauty:

| Product Type | Operational Meaning |
|---|---|
| Simple accessory | Usually easiest to launch |
| Skin-contact tool | Needs material and hygiene checks |
| Cosmetic | Needs ingredient, label, batch, and claim checks |
| Electrical product | Needs safety proof and sample operation checks |
| Treatment/device product | Needs expert review or affiliate-first route |

Definition:
- Operational meaning: what the product type changes about how the business must run.

## Step 2: Define Scoring Areas

Score each product across:
- Demand.
- Profit.
- Operational fit.
- Supplier depth.
- Compliance ease.
- Content fit.
- Differentiation.

Definition:
- Supplier depth: whether the business has enough credible suppliers so it is not dependent on one weak source.

## Step 3: Add Override Rules

Some risks beat the score.

Example:
- A product can be viral and profitable, but still blocked if it makes acne-treatment, hair-growth, SPF, or medical-device claims without proper proof.

Definition:
- Override rule: a hard business rule that stops a risky product even when other scores look good.

## Step 4: Assign Launch Decisions

Use clear decision labels:

| Decision | Meaning |
|---|---|
| Direct sale | Sell it through the store |
| Sample first | Test the physical product before deciding |
| Affiliate-first | Recommend through an authorized seller before direct sale |
| Prepare only | Build future compliance path, but do not sell yet |
| Exclude | Do not pursue for this business stage |

## Step 5: Build Product Files

Every approved product needs a product file.

Definition:
- Product file: the proof folder for one product.

It should include:
- Supplier.
- Materials or ingredients.
- Labels.
- Safety documents.
- Sample notes.
- Approved claims.
- Blocked claims.
- Photos.
- Warnings.
- Complaint and recall process.

## Step 6: Connect The Engine To Backend Architecture

The validation engine should become backend logic.

Backend logic:
- Products start as candidates.
- Candidates become tested only after supplier checks.
- Tested products become approved only after compliance and sample checks.
- Approved products can be imported into the commerce backend.
- Products with missing proof stay blocked.

Definition:
- Commerce backend: the system that manages products, checkout, orders, customers, payments, and store operations.

## Step 7: Verify Before Launch

Operational verification:
- The product can be sold and fulfilled.
- The supplier has been tested.
- The product file exists.
- The product has a launch decision.

Backend verification:
- Product data fields are complete.
- Status labels are consistent.
- Risk rules are visible.
- Approval cannot happen accidentally.

Visual verification:
- Product page images match the real sample.
- The product page is readable on mobile.
- Warnings and usage instructions are visible.
- Claims are approved and not exaggerated.

## Codex Prompt

```text
Create a product validation engine for this business. Define all technical terms in plain English. Score products by demand, profit, operational fit, supplier depth, compliance ease, content fit, and differentiation. Add override rules, launch decisions, product-file requirements, backend fields, and operational/backend/visual verification checks.
```

## Reusable Lesson

A product research list is not enough.

A scalable business needs a product approval system that can stop bad products, approve strong products, and explain every decision later.
