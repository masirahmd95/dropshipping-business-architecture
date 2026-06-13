# Beauty Product File Index

## Purpose

This index tracks the first product files for the beauty store.

Definition:
- Product file index: a list showing which proof folders exist, what evidence is missing, and whether each product can move forward.

Business meaning:
- The product-file index is the compliance and operations control board before launch.
- It prevents products from being approved because they "look good" while proof is missing.

## Product File Status Labels

| Status | Meaning |
|---|---|
| Not started | No proof gathered yet |
| Opened | Product file exists but evidence is incomplete |
| Sample pending | Sample ordered but not reviewed |
| In review | Evidence and sample are being checked |
| Approved | Product file passed current launch requirements |
| Blocked | Product cannot launch |

## First Product Files

| Product File ID | Product | Compliance Lane | Launch Decision | Evidence Status | Missing Evidence | Next Action |
|---|---|---|---|---|---|---|
| beauty-001 | Travel cosmetic/toiletry organizer | Lane 1 | Direct-sale priority | Not started | Sample, supplier link, delivery check, material notes | Open product file |
| beauty-002 | Satin bonnet/scrunchie/headband set | Lane 1 | Direct-sale priority | Not started | Sample, fabric notes, stitching check, supplier link | Open product file |
| beauty-003 | Heatless curl set | Lane 1 | Direct-sale priority | Not started | Sample, comfort notes, usage instructions | Open product file |
| beauty-004 | Makeup headband and wrist wash-band set | Lane 1 | Direct-sale priority | Not started | Sample, absorbency check, stitching check | Open product file |
| beauty-005 | Resin claw clips | Lane 1 | Direct-sale priority | Not started | Sample, hinge check, finish check | Open product file |
| beauty-006 | Rotating makeup organizer | Lane 1 | Direct-sale priority | Not started | Sample, dimensions, rotation check | Open product file |
| beauty-007 | Silicone brush cleaning mat/rack | Lane 1 | Direct-sale priority | Not started | Sample, silicone notes, cleaning instructions | Open product file |
| beauty-008 | Travel makeup brush case/covers | Lane 1 | Direct-sale priority | Not started | Sample, size, material notes | Open product file |
| beauty-009 | Microfiber hair towel wrap | Lane 1 | Direct-sale priority | Not started | Sample, absorbency, size, stitching | Open product file |
| beauty-010 | Spa wrist wash bands | Lane 1 | Direct-sale priority | Not started | Sample, absorbency, fit, pack count | Open product file |
| beauty-011 | Triangle powder puff set | Lane 2 | Sample first | Not started | Sample, skin-contact material, hygiene packaging | Open product file |
| beauty-012 | Reusable makeup remover pads | Lane 2 | Sample first | Not started | Sample, fabric quality, wash instructions | Open product file |
| beauty-013 | Scalp shampoo brush | Lane 2 | Sample first | Not started | Sample, material softness, claim restrictions | Open product file |
| beauty-014 | Acrylic lipstick holder | Lane 1 | Direct-sale priority | Not started | Sample, dimensions, scratch check | Open product file |
| beauty-015 | Bandana/scarf hair accessory set | Lane 1 | Direct-sale priority | Not started | Sample, fabric, print quality, size | Open product file |

## Market Eligibility Status

Definition:
- Market eligibility: whether one product is approved, blocked, affiliate-only, or prepare-only for one country or region.

Current rule:
- All products are pending for United States and United Kingdom until samples, supplier routes, pricing, customs fields, claims, and visual checks pass.

| Product File ID | Product | US Eligibility | UK Eligibility | Market Evidence Still Needed |
|---|---|---|---|---|
| beauty-001 | Travel cosmetic/toiletry organizer | Pending | Pending | Supplier route, sample, HS code if needed, country of origin, USD/GBP pricing |
| beauty-002 | Satin bonnet/scrunchie/headband set | Pending | Pending | Supplier route, sample, material notes, country of origin, USD/GBP pricing |
| beauty-003 | Heatless curl set | Pending | Pending | Supplier route, sample, usage instructions, country of origin, USD/GBP pricing |
| beauty-004 | Makeup headband and wrist wash-band set | Pending | Pending | Supplier route, sample, absorbency notes, country of origin, USD/GBP pricing |
| beauty-005 | Resin claw clips | Pending | Pending | Supplier route, sample, finish check, country of origin, USD/GBP pricing |
| beauty-006 | Rotating makeup organizer | Pending | Pending | Supplier route, sample, dimensions, country of origin, USD/GBP pricing |
| beauty-007 | Silicone brush cleaning mat/rack | Pending | Pending | Supplier route, sample, material notes, country of origin, USD/GBP pricing |
| beauty-008 | Travel makeup brush case/covers | Pending | Pending | Supplier route, sample, size notes, country of origin, USD/GBP pricing |
| beauty-009 | Microfiber hair towel wrap | Pending | Pending | Supplier route, sample, fabric notes, country of origin, USD/GBP pricing |
| beauty-010 | Spa wrist wash bands | Pending | Pending | Supplier route, sample, pack count, country of origin, USD/GBP pricing |
| beauty-011 | Triangle powder puff set | Pending | Pending | Supplier route, sample, skin-contact material, hygiene packaging, country of origin, USD/GBP pricing |
| beauty-012 | Reusable makeup remover pads | Pending | Pending | Supplier route, sample, wash instructions, country of origin, USD/GBP pricing |
| beauty-013 | Scalp shampoo brush | Pending | Pending | Supplier route, sample, material softness, country of origin, USD/GBP pricing |
| beauty-014 | Acrylic lipstick holder | Pending | Pending | Supplier route, sample, dimensions, country of origin, USD/GBP pricing |
| beauty-015 | Bandana/scarf hair accessory set | Pending | Pending | Supplier route, sample, fabric notes, country of origin, USD/GBP pricing |

## Rules

- Do not mark a product file approved until the sample pass result is recorded.
- Do not mark a Lane 2 product approved without skin-contact material notes.
- Do not mark US or UK eligibility approved until market-specific pricing, supplier coverage, customs fields where needed, and visual checks are complete.
- Do not write product-page copy until approved and blocked claims are recorded.
- Do not import a product into Shopify until product file status is approved or explicitly approved for limited test.

Definition:
- Limited test: a controlled launch with lower exposure and close monitoring.

## Verification Checklist

Operational verification:
- Every first-batch product has a product file ID.
- Every product file has missing evidence listed.
- Every product file has a next action.
- Every product file has US and UK eligibility status.

Backend verification:
- Product file IDs match sample order plan IDs.
- Evidence status uses controlled labels.
- Product file approval is separate from supplier approval.

Visual verification:
- Product file must include real sample photos before product-page approval.
- Product-page visuals must show the product accurately.
- Admin screens should make missing evidence obvious.
