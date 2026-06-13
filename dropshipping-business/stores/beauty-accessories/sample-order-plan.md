# Beauty Sample Order Plan

## Purpose

This plan defines the first controlled sample batch for the beauty store.

Definition:
- Sample order: buying a product from the intended supplier before selling it to customers.

Business meaning:
- A sample order checks whether the product, supplier, packaging, delivery, and claims are good enough for the store.
- In dropshipping, sample orders are one of the strongest protections against selling poor-quality products.

## Recommended Sample Batch

Use a top-30 sample batch, ordered and inspected in two controlled waves.

Definition:
- Controlled wave: a smaller group inside a larger sample plan, used so ordering, tracking, inspection, and cash control do not become chaotic.

Business rule:
- The goal is to test all top 30 products, but still keep evidence tidy product by product.

## Sample Batch A: First 15 Operating Products

| Batch Priority | Product | Compliance Lane | Primary Supplier Route | Backup Route | Product File ID | Sample Status |
|---:|---|---|---|---|---|---|
| 1 | Travel cosmetic/toiletry organizer | Lane 1 | CJdropshipping | DSers/AppScenic | beauty-001 | Not ordered |
| 2 | Satin bonnet/scrunchie/headband set | Lane 1 | EPROLO | DSers/CJdropshipping | beauty-002 | Not ordered |
| 3 | Heatless curl set | Lane 1 | DSers | CJdropshipping/EPROLO | beauty-003 | Not ordered |
| 4 | Makeup headband and wrist wash-band set | Lane 1 | DSers | CJdropshipping | beauty-004 | Not ordered |
| 5 | Resin claw clips | Lane 1 | DSers | CJdropshipping/EPROLO | beauty-005 | Not ordered |
| 6 | Rotating makeup organizer | Lane 1 | CJdropshipping | DSers/AppScenic | beauty-006 | Not ordered |
| 7 | Silicone brush cleaning mat/rack | Lane 1 | DSers | CJdropshipping | beauty-007 | Not ordered |
| 8 | Travel makeup brush case/covers | Lane 1 | DSers | CJdropshipping | beauty-008 | Not ordered |
| 9 | Microfiber hair towel wrap | Lane 1 | CJdropshipping | DSers/EPROLO | beauty-009 | Not ordered |
| 10 | Spa wrist wash bands | Lane 1 | DSers | CJdropshipping | beauty-010 | Not ordered |
| 11 | Triangle powder puff set | Lane 2 | DSers | CJdropshipping | beauty-011 | Not ordered |
| 12 | Reusable makeup remover pads | Lane 2 | CJdropshipping | DSers/Syncee | beauty-012 | Not ordered |
| 13 | Scalp shampoo brush | Lane 2 | CJdropshipping | DSers/Syncee | beauty-013 | Not ordered |
| 14 | Acrylic lipstick holder | Lane 1 | CJdropshipping | DSers/AppScenic | beauty-014 | Not ordered |
| 15 | Bandana/scarf hair accessory set | Lane 1 | EPROLO | DSers/Trendsi watchlist | beauty-015 | Not ordered |

Note:
- `beauty-015` was assigned to the bandana/scarf set in the first sample plan. It remains unchanged to preserve the existing product-file link.

## Sample Batch B: Top-30 Expansion Products

| Batch Priority | Product | Compliance Lane | Primary Supplier Route | Backup Route | Product File ID | Sample Status |
|---:|---|---|---|---|---|---|
| 16 | Oversized bow hair clip | Lane 1 | EPROLO | DSers/CJdropshipping | beauty-016 | Not ordered |
| 17 | Elasticated headband set | Lane 1 | DSers | EPROLO/CJdropshipping | beauty-017 | Not ordered |
| 18 | Makeup sponge air-dry holder | Lane 1 | DSers | CJdropshipping | beauty-018 | Not ordered |
| 19 | Lash/brow spoolie set | Lane 2 | DSers | CJdropshipping/Syncee | beauty-019 | Not ordered |
| 20 | Edge brush and parting comb kit | Lane 1 | CJdropshipping | DSers | beauty-020 | Not ordered |
| 21 | Satin sleep eye mask | Lane 1 | EPROLO | DSers/CJdropshipping | beauty-021 | Not ordered |
| 22 | Hair turban towel | Lane 1 | CJdropshipping | DSers/EPROLO | beauty-022 | Not ordered |
| 23 | Clear TSA cosmetic bag set | Lane 1 | CJdropshipping | DSers/AppScenic | beauty-023 | Not ordered |
| 24 | Cosmetic mixing palette/spatula | Lane 2 | DSers | CJdropshipping/Syncee | beauty-024 | Not ordered |
| 25 | Perfume atomizer | Lane 1 | CJdropshipping | DSers | beauty-025 | Not ordered |
| 26 | Lighted compact mirror | Lane 4 | AppScenic document-led supplier | CJdropshipping documented supplier | beauty-026 | Not ordered |
| 27 | LED vanity mirror | Lane 4 | AppScenic document-led supplier | Authorized/documented supplier | beauty-027 | Not ordered |
| 28 | Brow shaping stencil kit | Lane 1 | DSers | CJdropshipping | beauty-028 | Not ordered |
| 29 | False eyelash applicator kit | Lane 2 | DSers | CJdropshipping/Syncee | beauty-029 | Not ordered |
| 30 | Empty travel cosmetic containers | Lane 1 | CJdropshipping | DSers/AppScenic | beauty-030 | Not ordered |

Definitions:
- Primary supplier route: the first supplier path to test.
- Backup route: the alternative supplier path if the first route fails.

## Sample Inspection Standards

Every sample must be checked for:
- Delivery time.
- Tracking quality.
- Packaging condition.
- Product match against listing photos.
- Size accuracy.
- Material quality.
- Smell or chemical odor.
- Sharp edges or loose parts.
- Stitching, zipper, hinge, or moving-part quality.
- Cleaning instructions where relevant.
- Whether product photos can honestly show what customers receive.

## Product-Specific Checks

| Product Type | Extra Check |
|---|---|
| Textile hair accessories | Fabric feel, stitching, stretching, color accuracy |
| Organizers | Plastic strength, rotation, hinges, size, scratch risk |
| Skin-contact tools | Material softness, hygiene packaging, cleaning instructions |
| Travel pouches | Waterproofing, zipper, seam strength, capacity |
| Hair clips | Hinge strength, grip, finish, breakage risk |

## Sample Pass Rules

A sample passes when:
- Product matches listing.
- Quality is acceptable for the target selling price.
- Product can be photographed honestly.
- Supplier delivery time is acceptable.
- Packaging does not create avoidable customer complaints.
- No obvious compliance or safety issue appears.
- Claims can be written safely.

A sample fails when:
- Product is materially different from listing.
- Quality feels too cheap for the target price.
- Supplier delivery is too slow or unclear.
- Packaging arrives damaged.
- Product has sharp edges, poor stitching, weak hinge, bad smell, or misleading claims.
- Supplier cannot answer basic product questions.

Definition:
- Target selling price: the price the store intends to charge customers.

## Backend Records To Create

For each sample:
- Product candidate record.
- Product file record.
- US market eligibility record.
- UK market eligibility record.
- USD price review record.
- GBP price review record.
- Customs field record where needed.
- Supplier route record.
- Sample test record.
- Pricing review record.
- Product claim record.
- Visual verification record.
- Launch decision record.

## Verification Checklist

Operational verification:
- 30 product files exist or are planned.
- Every sample has primary and backup supplier route.
- Every sample has US and UK eligibility pending until proof is complete.
- Every sample has product-specific inspection criteria.
- Failed samples create a decision, not a vague note.

Backend verification:
- Sample IDs connect to candidate IDs.
- Supplier route and product file are linked.
- Market eligibility records connect to product file IDs.
- USD and GBP pricing review records connect to sample results.
- Sample status uses controlled labels.
- Sample results are stored before launch decision.

Visual verification:
- Sample photos must be compared with supplier photos.
- Product-page images must show real size and pack contents.
- If supplier photos mislead, reshoot or reject.
- Mobile product-page layout must show key proof before checkout.

## Reusable Codex Prompt

```text
Create a sample order plan for these ecommerce products. Define terms in plain English. Include sample batch size, product list, compliance lane, primary supplier route, backup route, product file ID, inspection standards, pass/fail rules, backend records, and operational/backend/visual verification.
```
