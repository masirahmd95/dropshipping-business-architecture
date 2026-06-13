# Beauty Launch Readiness Plan

## Purpose

This document converts the beauty validation research into the next practical launch stage.

Definition:
- Launch readiness: the state where the business has enough proof, tools, records, and checks to safely open a product for sale.

Business meaning:
- We are not launching the store yet.
- We are preparing the backend conditions that must exist before launch.
- The confirmed launch market set is United States and United Kingdom, with country-specific backend gates before products can sell in either market.

Definition:
- Launch assumption: a working decision used to move planning forward until the user confirms or changes it.

## Current Working Assumptions

| Area | Working Assumption | Why |
|---|---|---|
| First launch markets | United States and United Kingdom | Builds the backend with two serious markets from the start while still blocking products that are not ready by country |
| Commerce backend | Shopify Basic | Cheapest serious platform with checkout, products, orders, payments, taxes, apps, and scale path |
| First product type | Simple beauty accessories and selected skin-contact tools | Lower compliance burden than cosmetics, SPF, acne products, or advanced devices |
| First supplier routes | DSers and CJdropshipping, with EPROLO/AppScenic/Syncee as backups | Lowest practical cost for early sample and fulfilment testing |
| Cosmetics route | Prepare only, Shopify Collective, authorized brand partner, or affiliate-first | Avoids blind cosmetic resale risk |
| High-compliance route | Affiliate-first or expert-reviewed authorized route only | Avoids drug, device, radiation, and payment-provider risk |
| Marketing setup | Tracking infrastructure first, paid ads later | Prevents spending before attribution and product proof exist |
| Branding | Deferred | Product strategy, backend, supplier proof, compliance, and verification come first |

Definition:
- Attribution: connecting a sale back to the channel, campaign, or content that caused it.

## Launch Gate

The store should not sell a direct-sale product until all gates pass.

Definition:
- Launch gate: a required checkpoint that stops a product from going live too early.

| Gate | What Must Be True | Business Reason |
|---|---|---|
| Product decision gate | Product has score, compliance lane, launch decision, and supplier route | Stops random product uploads |
| Supplier gate | Supplier has sample check, delivery check, support route, and backup route where possible | Reduces fulfilment failure |
| Product-file gate | Product file is complete enough for its compliance lane | Keeps proof organized |
| Pricing gate | Target price leaves enough margin after product cost, shipping, fees, and likely returns | Avoids selling unprofitably |
| Claims gate | Approved and blocked wording is documented | Avoids risky or misleading marketing |
| Visual gate | Product images, dimensions, materials, usage, and warnings can be shown clearly | Avoids customer confusion and returns |
| Operations gate | Support, refund, returns, tracking, and complaint paths exist | Avoids customer-service chaos |

## First Launch Basket

Start with products that are useful, visual, small, low-compliance, bundle-friendly, and suitable for testing.

| Priority | Product | Launch Route | Required Proof |
|---:|---|---|---|
| 1 | Travel cosmetic/toiletry organizer | Direct sale after sample | Zipper, waterproofing, size, packaging |
| 2 | Satin bonnet/scrunchie/headband set | Direct sale after sample | Fabric, stitching, comfort, color accuracy |
| 3 | Heatless curl set | Direct sale after sample | Material comfort, instructions, no exaggerated claims |
| 4 | Makeup headband and wrist wash-band set | Direct sale after sample | Absorbency, stitching, fit |
| 5 | Resin claw clips | Direct sale after sample | Hinge strength, finish, size |
| 6 | Rotating makeup organizer | Direct sale after sample | Rotation strength, plastic quality, dimensions |
| 7 | Silicone brush cleaning mat/rack | Direct sale after sample | Silicone quality, cleaning instructions |
| 8 | Travel makeup brush case/covers | Direct sale after sample | Fit, material, cleaning guidance |
| 9 | Microfiber hair towel wrap | Direct sale after sample | Absorbency, stitching, size |
| 10 | Spa wrist wash bands | Direct sale after sample | Absorbency, fit, pack count |
| 11 | Triangle powder puff set | Sample first | Skin-contact material, hygiene packaging |
| 12 | Reusable makeup remover pads | Sample first | Fabric quality, wash instructions |
| 13 | Scalp shampoo brush | Sample first | Material softness, no hair-growth claims |
| 14 | Acrylic lipstick holder | Direct sale after sample | Scratch resistance, dimensions |
| 15 | Bandana/scarf hair accessory set | Direct sale after sample | Fabric, print quality, size |

## Deferred Product Groups

| Product Group | Status | Reason |
|---|---|---|
| Lip oils, blush, mascara, setting spray | Prepare only | Cosmetic product file required |
| Fragrance mist and hair oils | Prepare only | Ingredient, allergen, label, and claim control required |
| Heated lash curlers, hair tools, mirrors | Sample first later | Electrical proof required |
| LED masks, IPL, microcurrent, acne wands | Affiliate-first or prepare only | Device, radiation, and treatment-claim risk |
| SPF, acne treatment, hair growth, teeth whitening | Exclude for direct launch | High drug/device/claim risk |

## Account Setup Sequence

Do not connect everything at once.

Detailed setup boundary:
- `../operations/account-setup-checklist.md`

| Sequence | Account Or Tool | Why It Comes Here |
|---:|---|---|
| 1 | Shopify trial or Basic plan | Commerce backend foundation |
| 2 | DSers and CJdropshipping test accounts | Supplier import and sample route |
| 3 | GA4 and Google Tag Manager | Analytics foundation before traffic |
| 4 | TikTok Pixel and Meta Pixel | Social attribution before campaigns |
| 5 | Shopify Email and Shopify Inbox | Low-cost lifecycle and support basics |
| 6 | Shopify Payments or approved payment route | Checkout/payment readiness |
| 7 | Shopify Tax settings | Sales tax logic before checkout |
| 8 | Shopify Markets | Separates US and UK market, currency, tax, shipping, and checkout behavior |
| 9 | Shopify Collective or affiliate accounts | Authorized cosmetics/high-compliance testing |
| 10 | QuickBooks/Xero and A2X later | Accounting only after transaction volume justifies it |

Definition:
- Pixel: a tracking connection that tells an ad platform what visitors did, such as viewing a product or buying.

## Sample Budget Planning

Start with a controlled sample batch.

| Budget Level | Meaning | Recommended Use |
|---|---|---|
| Lean | 5-7 samples | Confirm the strongest product lanes |
| Standard | 10-15 samples | Validate first launch basket properly |
| Strong | 20-30 samples | Compare multiple suppliers and variants |

Working recommendation:
- Standard sample batch of 10-15 products before building product pages.

## Backend Meaning

This plan tells the backend what must exist before launch:
- Store record.
- Market records for US and UK.
- Market eligibility records for each launch product.
- Market price records for USD and GBP.
- Tax and duties decision records.
- Product candidate records.
- Product file records.
- Supplier records.
- Sample test records.
- Pricing records.
- Claims records.
- Launch decision records.
- Verification records.

Definition:
- Verification record: stored proof that a check was performed and what the result was.

## Verification Checklist

Operational verification:
- US and UK launch markets are recorded separately.
- Launch basket is separated from deferred product groups.
- Supplier routes are assigned to product risk level.
- Sample budget level is selected before supplier ordering.
- No high-compliance product enters direct-sale launch.
- No product can launch in a market without that market's eligibility decision.

Backend verification:
- Every product has one launch status.
- Every product has one compliance lane.
- Every product has US and UK eligibility fields.
- Every product has USD and GBP pricing review before both markets are enabled.
- Customs fields are required where cross-border shipping needs them.
- Every direct-sale product has a sample requirement.
- Every supplier route has a backup or escalation note.
- Every deferred product has a reason.

Visual verification:
- Future product pages must show accurate size, material, pack contents, and usage.
- Future admin screens must show missing product-file evidence clearly.
- Future customer screens must not hide warnings, cleaning instructions, or product limitations.
- Future mobile screens must be checked before launch.

## Reusable Codex Prompt

```text
Create a launch readiness plan for this ecommerce store. Define terms in plain English. Include working assumptions, launch gates, first launch basket, deferred product groups, account setup sequence, sample budget planning, backend records, and operational/backend/visual verification checks.
```

## Related Backend Setup

The US and UK backend control plane is documented in:

- `us-uk-launch-backend-setup.md`
- `../backend-config/README.md`

Definition:
- Control plane: the rule layer that tells the business systems what is allowed, blocked, required, or waiting for proof.
