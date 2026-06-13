# Lead To Customer Lifecycle Workflow

## Purpose

This workflow explains how a visitor becomes a lead, then a customer, then a repeat customer.

Definition:
- Lifecycle: the full journey of a person through the business, from first interest to repeat purchase.

## Normal Flow

```text
1. Visitor arrives from search, social, ad, referral, or content.
2. Visitor sees a lead magnet offer.
3. Visitor submits form with email, country, interest, and consent.
4. Lead record is created.
5. Consent record is stored.
6. Lead magnet email is sent.
7. Welcome email sequence starts.
8. Lead enters a segment based on market and interest.
9. Lead receives first-purchase incentive.
10. Lead views products or clicks newsletter content.
11. Product interest records update.
12. Lead adds item to cart or begins checkout.
13. Lead purchases or stays in nurture sequence.
14. First purchase changes lead into customer.
15. Post-purchase education and review flow starts.
16. Customer receives cross-sell, bundle, or winback flow based on behaviour.
17. Dashboard updates lead, conversion, campaign, revenue, and retention metrics.
```

Definitions:
- Nurture sequence: useful messages sent over time to build trust and encourage purchase.
- Cross-sell: recommending a related product.
- Winback: trying to bring back a customer or lead who stopped engaging.

## Lead Capture Forms

Required forms:

| Form | Purpose | Main Fields |
|---|---|---|
| Newsletter signup | General list growth | email, country, consent |
| Free PDF signup | Lead magnet delivery | email, country, interest, lead magnet, consent |
| Beauty routine quiz | Higher-intent segmentation | email, country, routine interest, product category, consent |
| Back-in-stock or launch alert | Product-specific intent | email, product, market, consent |

Business rule:
- Forms should ask for only the data needed for the next useful action.

## Email Flow Map

| Flow | Timing | Content |
|---|---|---|
| Welcome 1 | Immediately | Deliver PDF, set expectations, confirm preferences |
| Welcome 2 | Day 1-2 | Useful beauty routine tip and relevant category links |
| Welcome 3 | Day 3-5 | First-purchase incentive and best approved products |
| Newsletter | Weekly | New products, trend-led tips, approved offers |
| New arrival | When product passes launch gates | Product story, use case, launch offer if margin-safe |
| Abandoned cart | After cart/checkout abandon | Reminder, objections, shipping/return clarity |
| Post-purchase | After order | Product care, usage, support route |
| Review request | After delivery buffer | Ask for review and feedback |
| Winback | 60-90 days inactive | Fresh trend or offer based on interest |

## Failure Cases

| Failure | Business Risk | Required Response |
|---|---|---|
| Consent missing | Email compliance risk | Do not send marketing email; request consent properly |
| Lead magnet email fails | Lost trust | Retry or create support task |
| Discount code reused incorrectly | Margin leakage | Enforce one-use rule and audit discount usage |
| Weekly newsletter includes unapproved product | Compliance or fulfilment risk | Block campaign until product gate passes |
| Unsubscribe not respected | Legal and trust risk | Suppress contact from marketing |
| Trend report recommends high-compliance product | Product risk | Mark prepare-only or affiliate-only |

Definition:
- Suppress: prevent a contact from receiving marketing messages.

## Verification Checklist

Operational verification:
- Form creates lead record.
- Consent is stored with source and date.
- Lead magnet email sends.
- Lead enters correct segment.
- First-purchase incentive is delivered and restricted.
- Newsletter excludes blocked products.

Backend verification:
- Lead ID connects to form submission, consent, campaign, product interest, and customer profile.
- Unsubscribe status overrides all marketing flows.
- Discount usage connects to customer and order.
- Failed automation creates a visible issue.

Visual verification:
- Lead form is readable on mobile and desktop.
- Consent text is visible before submission.
- PDF email has clear download link and store link.
- Discount code display is clear.
- Newsletter layout shows product images, prices, market, and offer rules accurately.

## Playbook Lesson

Lead conversion is a workflow. If the backend stores source, consent, interest, incentive, and purchase behaviour, marketing becomes measurable instead of guesswork.
