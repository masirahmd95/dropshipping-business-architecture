# Product Validation To Launch Workflow

## Purpose

This workflow defines how a product moves from idea to approved launch product.

Definition:
- Workflow: a repeatable sequence of actions that turns an input into an outcome.

Business meaning:
- A product should not jump straight from supplier listing to customer-facing store.
- The business needs a controlled path that checks demand, supplier reliability, product proof, margin, claims, and visual accuracy.

## Normal Flow

```text
1. Product idea is captured.
2. Market signals are recorded.
3. Product candidate score is calculated.
4. Compliance lane is assigned.
5. Supplier routes are shortlisted.
6. Product file is opened.
7. Sample order is approved.
8. Sample is ordered.
9. Sample is inspected.
10. US and UK market eligibility is reviewed.
11. USD and GBP pricing and margin are checked.
12. Claims are approved or blocked.
13. Product launch decision is made.
14. Product is prepared for Shopify import.
15. Product page content is drafted.
16. Product page visual checks pass.
17. Product is approved for test launch.
```

Definition:
- Test launch: a limited launch used to check product, supplier, customer, and tracking behaviour before scaling marketing.

## Workflow Statuses

| Status | Meaning | Next Step |
|---|---|---|
| Idea | Product is only a suggestion | Capture demand signals |
| Candidate | Product has enough interest to research | Score product |
| Scored | Product has a validation score | Assign compliance lane |
| Supplier review | Supplier routes are being checked | Open product file |
| Sample pending | Sample order is approved but not received | Wait for delivery |
| Sample review | Product is being inspected | Pass, fail, or retest |
| Claims review | Wording and images are being checked | Approve safe wording |
| Pricing review | Margin is being checked | Approve price or reject |
| Market review | US and UK eligibility are being checked | Approve, block, prepare, or affiliate by market |
| Ready for import | Product can enter Shopify setup | Draft product page |
| Visual review | Product page/images are checked | Approve test launch |
| Test launch | Product is live in limited form | Monitor orders and issues |
| Approved | Product passed test launch | Scale carefully |
| Blocked | Product should not launch | Record reason |

Definition:
- Status: a label showing where an item currently sits in a process.

## Failure Cases

| Failure | Business Risk | Required Response |
|---|---|---|
| Weak demand evidence | Product may not sell | Keep as idea or reject |
| Supplier has poor reviews | Customer complaints and delays | Use backup route or reject |
| Supplier cannot provide documents | Compliance risk | Keep as prepare only |
| Sample quality is poor | Returns and reputation damage | Reject supplier or product |
| Delivery is too slow | Customer dissatisfaction | Use faster supplier or exclude |
| Product is not eligible in a launch market | Legal, tax, safety, or support risk | Block, prepare-only, or affiliate-only for that market |
| Product margin is too low | Sales create losses | Reprice, bundle, or reject |
| Claims are risky | Legal, platform, or ad account risk | Rewrite claims or block product |
| Product photos are misleading | Returns and trust damage | Reshoot or reject listing |
| Product page fails mobile check | Poor conversion and trust | Fix before launch |

Definition:
- Conversion: when a visitor takes a desired action, such as buying.

## Backend Records Created

| Workflow Step | Record Created Or Updated |
|---|---|
| Product idea captured | Product Candidate |
| Market signals recorded | Market Signal |
| Score calculated | Product Candidate score fields |
| Compliance lane assigned | Product Compliance Review |
| Supplier routes shortlisted | Supplier and Supplier Product |
| Product file opened | Product File |
| Sample ordered | Sample Test |
| Market eligibility checked | Market Eligibility |
| Pricing checked | Market Price, Price Rule, or Pricing Review |
| Claims reviewed | Product Claim |
| Product imported | Product and Variant |
| Product page checked | Visual Verification |
| Test launch monitored | Product Performance and Support Ticket records |

## Required Business Rules

- A product cannot become `Ready for import` unless supplier review and compliance lane are complete.
- A direct-sale product cannot become `Test launch` unless sample review passes.
- A product cannot become `Test launch` in the United States or United Kingdom unless that market eligibility is approved.
- A product cannot become `Ready for import` in both launch markets unless USD and GBP price reviews are complete.
- A cosmetic cannot become `Test launch` unless ingredient, label, batch, and claim checks pass.
- An electrical product cannot become `Test launch` unless safety proof and sample operation checks pass.
- A high-compliance product cannot become direct-sale without authorized route and expert review.
- Product page copy cannot use blocked claims.
- Product page images must match the inspected sample.
- A failed sample creates either a supplier rejection or retest.

Definition:
- Business rule: a rule that tells the system what must happen in a specific situation.

## Verification Checklist

Operational verification:
- Product cannot skip sample review when sample is required.
- Blocked products remain blocked.
- Supplier failure creates a backup decision.
- US and UK eligibility decisions are recorded separately.
- Pricing review catches low-margin products.
- Claims review happens before product-page drafting.

Backend verification:
- Workflow statuses use one consistent list.
- Every status change has a timestamp and reason.
- Product candidate and product file are linked.
- Market eligibility records link to product file IDs.
- Market price records link to product file IDs.
- Supplier and sample results are linked.
- Visual review is stored separately from operational review.

Visual verification:
- Product page has accurate product images.
- Product page shows size, material, pack count, and usage.
- Mobile page is readable.
- Error, loading, and empty states exist for future admin screens.
- Claims shown to customers match approved claims.

## Playbook Lesson

Product approval is a workflow, not a single decision.

If the workflow is clear, Codex can later automate it, turn it into dashboards, and adapt it for other business types.
