# Beauty Product Validation Engine - June 2026

## Purpose

This document defines the decision system for the beauty dropshipping store before products are imported into Shopify or any storefront is built.

Definition:
- Validation engine: a repeatable scoring system that decides whether a product should be sold, tested, held for later, or rejected.

Business meaning:
- We are not guessing products from trends alone.
- Each product must pass demand, profit, supplier, compliance, and operational checks.
- The engine protects the store from selling unsafe, unprofitable, slow-shipping, or hard-to-defend products.

## Current Store Direction

Working store:

```text
beauty_accessories
```

Scope:
- Beauty accessories.
- Hair accessories.
- Makeup tools.
- Travel and storage products.
- Simple skin-contact beauty tools.
- Selected cosmetics only if supplier documentation is strong.
- Selected electrical beauty products only if safety evidence is strong.

Definitions:
- Skin-contact product: a product that touches the skin, such as a face brush, roller, sponge, or reusable pad.
- Cosmetic: a product applied to the body for cleansing, beautifying, promoting attractiveness, or changing appearance.
- Electrical beauty product: a beauty product powered by electricity or a battery, such as a heated eyelash curler, hair dryer, or lighted mirror.

## Source Signals Used

Trend signals reviewed:
- Who What Wear reported June 2026 demand around hair accessories such as bandanas, resin claw clips, crochet accessories, ocean-inspired accessories, and elasticated headbands.
- Who What Wear's 2026 beauty tools coverage highlighted strong interest in at-home beauty tools, hair tools, depuffing tools, shower filters, and advanced devices.
- Vogue's 2026 K-beauty coverage highlighted toner pads, overnight masks, scalp treatments, cooling masks, brow products, and streamlined skincare routines.
- Good Housekeeping's 2026 beauty trend coverage highlighted K-beauty, jelly cleansers, body and hair mists, scalp care, accessible packaging, and practical product performance.
- TikTok Shop beauty coverage and social commerce reports show that creator-led beauty remains a strong discovery and conversion channel.

Compliance sources reviewed:
- FDA MoCRA guidance for cosmetic registration, product listing, adverse event reporting, safety substantiation, and records.
- FDA cosmetics law guidance explaining that cosmetics are regulated, even though most cosmetics are not pre-approved by FDA before market.
- FDA device classification guidance for products that may become medical devices because of intended use or claims.
- FDA radiation-emitting product guidance for products using light, laser, IPL, or similar technology.
- FTC health product advertising guidance requiring truthful, non-misleading claims backed by evidence.
- European Commission product safety and CE marking guidance for EU-facing product safety obligations.

Definition:
- Intended use: what the product is meant to do, based on its design, label, website copy, images, ads, influencer scripts, and seller statements.

Reference links:
- Vogue K-beauty trends 2026: https://www.vogue.com/article/k-beauty-trends-2026
- Vogue blurred makeup trend 2026: https://www.vogue.com/article/blurred-makeup-trend-2026
- Good Housekeeping 2026 beauty trends: https://www.goodhousekeeping.com/beauty-products/a70987601/beauty-awards-2026-trends/
- Who What Wear hair accessory trends 2026: https://www.whowhatwear.com/beauty/hair/hair-accessories-trends-summer-2026
- Who What Wear beauty tools 2026: https://www.whowhatwear.com/beauty/best-beauty-tools-2026
- FDA MoCRA: https://www.fda.gov/cosmetics/cosmetics-laws-regulations/modernization-cosmetics-regulation-act-2022-mocra
- FDA cosmetics authority: https://www.fda.gov/cosmetics/cosmetics-laws-regulations/fda-authority-over-cosmetics-how-cosmetics-are-not-fda-approved-are-fda-regulated
- FDA medical device classification: https://www.fda.gov/medical-devices/overview-device-regulation/classify-your-medical-device
- FDA radiation-emitting products: https://www.fda.gov/radiation-emitting-products
- FTC health product advertising guidance: https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance
- European Commission product safety: https://commission.europa.eu/topics/business-and-industry/doing-business-eu/eu-product-safety-and-labelling/product-safety_en
- European Commission CE marking: https://single-market-economy.ec.europa.eu/single-market/goods/ce-marking_en

## Scoring Model

Score every product from 1 to 5 in each category.

| Score Area | Plain-English Meaning | 1 Means | 5 Means |
|---|---|---|---|
| Demand | Evidence customers want it | Weak signal | Strong repeated signals |
| Profit | Likely margin after costs | Hard to make money | Strong room for margin |
| Operational Fit | Easy to ship and support | High returns, fragile, complex | Small, simple, reliable |
| Supplier Depth | Enough credible suppliers | One weak source | Several credible options |
| Compliance Ease | Easy to sell legally and safely | High legal/testing burden | Simple documentation |
| Content Fit | Easy to demonstrate online | Hard to show benefit | Clear visual demo |
| Differentiation | Can be sold beyond cheap price | Commodity only | Bundle, quality, or niche angle |

Definition:
- Differentiation: the reason a customer buys from this store instead of a cheaper marketplace.

## Decision Formula

Use this decision logic:

```text
Launch score = demand + profit + operational fit + supplier depth + compliance ease + content fit + differentiation
```

Maximum score:

```text
35
```

Decision bands:

| Score | Decision | Meaning |
|---:|---|---|
| 30-35 | Direct-sale priority | Strong candidate for launch after sample check |
| 25-29 | Test candidate | Worth testing, but one weakness needs proof |
| 20-24 | Prepare only | Research and document, but do not launch yet |
| Below 20 | Reject or hold | Too risky, weak, or operationally messy |

Override rule:
- A product with high compliance risk cannot be direct-sale priority until documentation and claim review pass, even if the total score is high.

Definition:
- Override rule: a hard rule that beats the score when risk is too high.

## Compliance Lanes

| Lane | Product Type | Launch Meaning |
|---|---|---|
| Lane 1 | Simple accessories | Best first launch lane after sample check |
| Lane 2 | Skin-contact tools | Possible launch with material, hygiene, and claims checks |
| Lane 3 | Cosmetics | Only through authorized supplier or strong product file |
| Lane 4 | Electrical beauty products | Only with electrical safety proof and sample testing |
| Lane 5 | High-compliance products | Prepare only unless expert review and documents are complete |

Definitions:
- Authorized supplier: a supplier that has permission from the brand/manufacturer to sell the product through this route.
- Product file: the proof folder for one product, including supplier details, safety documents, labels, ingredients, sample notes, and approved claims.

## Launch Decision Types

| Decision | Meaning |
|---|---|
| Direct sale | The store sells the product and handles the customer relationship |
| Sample first | Order and inspect samples before deciding |
| Affiliate-first | Send the customer to an authorized seller and earn commission while avoiding direct compliance responsibility |
| Prepare only | Build the documentation path for later, but do not sell yet |
| Exclude | Do not pursue unless the business model changes |

Definition:
- Affiliate-first: recommending or linking to another authorized seller instead of directly selling the product yourself.

## Direct-Sale Launch Basket

These products have the best early fit because they are small, visual, generally low compliance, and suitable for bundles:

| Product | Why It Fits | Required Check |
|---|---|---|
| Travel cosmetic/toiletry organizer | Strong practical demand and easy content | Zipper, waterproofing, size accuracy |
| Satin bonnet/scrunchie/headband set | Strong hair accessory trend and bundle potential | Fabric feel, stitching, colorfastness |
| Heatless curl set | Strong visual demo and low electrical risk | Comfort, material, tutorial accuracy |
| Rotating makeup organizer | Useful storage product with good visual demo | Rotation strength, plastic quality |
| Silicone brush cleaning mat/rack | Clear problem and simple demo | Silicone quality, hygiene instructions |
| Scalp shampoo brush | Good shower routine accessory | Material softness, no hair-growth claims |
| Resin claw clips | Current fashion trend and low compliance | Hinge strength, finish, sizing |
| Travel makeup brush case/covers | Practical add-on and bundle item | Fit, cleaning, material quality |
| Makeup headband and wrist wash-band set | Viral routine accessory | Absorbency, comfort, stitching |
| Reusable makeup remover pads | Good sustainability angle | Fabric quality, wash instructions |
| Microfiber hair towel wrap | Practical repeat purchase gift item | Absorbency, stitching, size |
| Spa wrist wash bands | Low-cost bundle product | Absorbency and fit |
| Acrylic lipstick holder | Storage add-on | Material strength, scratch resistance |
| Triangle powder puff set | Steady makeup tool demand | Hygiene packaging, skin-contact material |
| Lash/brow spoolie set | Low-cost add-on | Packaging hygiene, bristle quality |

## Products To Prepare But Not Rush

| Product Type | Why We Hold It |
|---|---|
| Lip oils, blush, mascara, setting spray, toner pads | Cosmetic product files must be complete |
| Body and hair fragrance mists | Ingredient, allergen, label, and claim controls needed |
| Hair oil, leave-in conditioner, scalp serum | Avoid hair-growth and treatment claims |
| Heated eyelash curler, hair dryer, hot brush, hair waver | Electrical safety proof and sample testing needed |
| Skincare mini fridge, LED vanity mirror | Electrical proof required, but easier than treatment devices |
| LED masks, microcurrent tools, IPL devices, high-frequency acne wands | Device/radiation/medical-claim risk |
| SPF, acne treatment, hair-growth products, teeth whitening | High compliance and claim risk |

## Product Record Fields

Every product candidate needs these fields before launch:

| Field | Meaning |
|---|---|
| `product_name` | Plain product name |
| `store_id` | Internal store code |
| `category` | Product group |
| `demand_type` | Viral, seasonal, steady, evergreen, or mixed |
| `trend_signal` | Social/search/marketplace evidence |
| `target_customer_problem` | What customer problem it solves |
| `supplier_options` | Possible supplier platforms or brand partners |
| `sample_required` | Whether a physical sample must be ordered |
| `estimated_product_cost` | Supplier product cost |
| `estimated_shipping_cost` | Delivery cost |
| `target_selling_price` | Intended retail price |
| `estimated_gross_margin` | Estimated money left after direct product costs |
| `compliance_lane` | Lane 1 through Lane 5 |
| `required_documents` | Product file evidence needed |
| `claim_restrictions` | Words or promises not allowed |
| `return_risk` | Low, medium, or high |
| `supplier_risk` | Low, medium, or high |
| `decision_status` | Direct sale, sample first, affiliate-first, prepare only, exclude |
| `verification_status` | Not started, in progress, passed, failed |

Definition:
- Gross margin: the money left after subtracting product cost, shipping, and direct selling costs from the selling price.

## Backend Meaning

The validation engine becomes a backend gate.

Backend function:
- Products cannot move from "candidate" to "approved" unless the required fields are complete.
- Compliance lane decides which documents are required.
- Decision status decides whether a product is imported into Shopify, tracked as affiliate-first, or held.
- Verification status keeps the backend tidy and prevents unclear product decisions.

Definition:
- Backend gate: a rule in the hidden operating system that stops incomplete or risky work from moving forward.

## Verification Checklist

Operational verification:
- Every launch product has a decision status.
- Every launch product has a compliance lane.
- Every direct-sale product has a sample requirement.
- Every direct-sale product has at least one supplier route.
- Every high-compliance product is marked prepare only or affiliate-first unless documents are complete.

Backend verification:
- Product names, categories, and statuses are consistent.
- No product is approved without required fields.
- Claim restrictions are stored before product copy is written.
- Supplier risk and compliance lane are visible in the candidate record.
- Decision statuses are not mixed with personal notes.

Visual verification:
- Future admin tables must show product status, compliance lane, launch decision, and missing tasks clearly.
- Future product pages must not display unapproved claims.
- Future product pages must show accurate size, material, usage, warning, and cleaning information.
- Future customer-facing content must be checked on mobile and desktop before launch.

## Reusable Codex Prompt

```text
Create a validation engine for this product category. Define every technical term in plain English. Separate trend demand, profit potential, operational fit, supplier risk, compliance risk, and visual content fit. Create scoring bands, override rules, product record fields, and verification checks. End with launch, test, affiliate-first, prepare-only, and exclude decisions.
```
