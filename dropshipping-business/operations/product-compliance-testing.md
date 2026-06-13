# Product Compliance Testing Process

## Purpose

This document explains what must happen before the beauty store sells products directly.

Definition:
- Compliance testing: checking that a product is safe, legal, correctly labelled, honestly advertised, and allowed by the platforms and payment providers used by the business.

Business meaning:
- Compliance is not just legal paperwork.
- It protects customers, payment accounts, ad accounts, platform accounts, supplier relationships, and the public portfolio reputation of this business.

## Plain-English Rule

Every product needs proof before sale.

The more a product touches skin, uses electricity, includes ingredients, or promises a body result, the more proof is required.

## Source Notes

This process is based on current public compliance guidance checked on 2026-06-13:

- FDA MoCRA: https://www.fda.gov/cosmetics/cosmetics-laws-regulations/modernization-cosmetics-regulation-act-2022-mocra
- FDA authority over cosmetics: https://www.fda.gov/cosmetics/cosmetics-laws-regulations/fda-authority-over-cosmetics-how-cosmetics-are-not-fda-approved-are-fda-regulated
- FDA device classification: https://www.fda.gov/medical-devices/overview-device-regulation/classify-your-medical-device
- FDA radiation-emitting products: https://www.fda.gov/radiation-emitting-products
- FTC health product compliance guidance: https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance
- European Commission product safety: https://commission.europa.eu/topics/business-and-industry/doing-business-eu/eu-product-safety-and-labelling/product-safety_en
- European Commission CE marking: https://single-market-economy.ec.europa.eu/single-market/goods/ce-marking_en
- GOV.UK product safety advice: https://www.gov.uk/guidance/product-safety-advice-for-businesses
- GOV.UK cosmetic product notification: https://www.gov.uk/guidance/submit-a-cosmetic-product-notification
- GOV.UK VAT and overseas goods: https://www.gov.uk/guidance/vat-and-overseas-goods-sold-directly-to-customers-in-the-uk

## Product File Requirement

Every product needs a product file.

Definition:
- Product file: the folder of evidence for one product.

Template:
- `product-file-template.md`

Minimum product file:
- Product name and SKU.
- Supplier name and contact details.
- Supplier platform link or direct supplier agreement.
- Product photos from sample inspection.
- Supplier product page screenshots.
- Materials or ingredient list.
- Packaging and label photos.
- Country of manufacture.
- Country or countries where it will be sold.
- Safety documents supplied by the supplier.
- Sample order date and inspection notes.
- Approved product claims.
- Blocked product claims.
- Customer warnings and usage instructions.
- Return and complaint notes.
- Recall contact plan.

Definition:
- SKU: a unique code for a product or variant, used to track it in systems.

## Compliance Lanes

### Lane 1: Simple Accessories

Examples:
- Hair clips.
- Cosmetic organizers.
- Toiletry bags.
- Makeup brush cases.
- Acrylic holders.
- Headbands.
- Satin scrunchies.

What we must do:
- Order a sample.
- Check size, material, stitching, hinges, zips, and finish.
- Check for sharp edges or loose parts.
- Check product photos match reality.
- Write accurate size and material information.
- Avoid counterfeit-looking designs or branded copies.

Launch status:
- Best first launch lane after sample checks.

### Lane 2: Skin-Contact Tools

Examples:
- Face massage brush.
- Gua sha.
- Ice roller.
- Scalp shampoo brush.
- Triangle powder puff.
- Reusable makeup remover pads.
- Silicone brush cleaner.

What we must do:
- Order a sample.
- Check material softness, smell, finish, and hygiene packaging.
- Ask supplier for material information.
- Add cleaning instructions.
- Avoid medical or treatment claims.
- Avoid "before and after" claims unless evidence is strong and reviewed.

Launch status:
- Launchable after sample and wording checks.

### Lane 3: Cosmetics

Examples:
- Lip oil.
- Tinted balm.
- Blush.
- Mascara.
- Setting spray.
- Toner pads.
- Fragrance mist.
- Hair oil.
- Leave-in conditioner.

What we must do:
- Use authorized brand partners or suppliers with proper documents.
- Require ingredient list.
- Require batch code process.
- Require expiry date or period-after-opening information.
- Require responsible party/manufacturer information.
- Require label photos.
- Require safety substantiation or supplier safety statement.
- Keep complaint records.
- Control all claims.

Launch status:
- Not first unless documentation is strong.

Definition:
- Batch code: a code that identifies when and where a product was made, useful for quality checks and recalls.
- Period after opening: how long a product should be used after it has been opened.

### Lane 4: Electrical Beauty Products

Examples:
- LED vanity mirror.
- Lighted compact mirror.
- Heated eyelash curler.
- Mini straightener.
- Hot air brush.
- Hair dryer.
- Hair waver.
- Skincare mini fridge.

What we must do:
- Require safety certification evidence for target countries.
- Check plug type, voltage, charger, battery, and instructions.
- Order samples and run basic use checks.
- Check overheating risk.
- Check warnings and manual quality.
- Check shipping restrictions for batteries.
- Avoid treatment claims.

Launch status:
- Possible later, but not first without certification proof.

Definition:
- Certification evidence: documents showing that a product was tested against recognized safety standards.

### Lane 5: High-Compliance Products

Examples:
- SPF and sunscreen.
- Acne treatment.
- Hair-growth products.
- Dandruff treatment.
- Teeth whitening gels or devices.
- LED therapy masks.
- Microcurrent devices.
- IPL hair removal devices.
- High-frequency acne wands.

What we must do:
- Confirm whether the product is cosmetic, drug, device, or radiation-emitting product.
- Use authorized brand route, affiliate route, or legal review.
- Require regulatory documents before direct sale.
- Confirm payment provider and platform rules.
- Control claims carefully.
- Do not use exaggerated or medical before/after content.

Launch status:
- Prepare only unless expert review and documents are complete.

Definition:
- Medical device: a product regulated because it is intended to diagnose, treat, prevent, or affect body function.

## Claims Control

Claims are the words, images, videos, and influencer scripts that say what a product does.

Definition:
- Claim: any promise or implication about a product's result.

Blocked wording:
- Treats acne.
- Cures hair loss.
- Grows hair.
- Heals eczema.
- Repairs skin disease.
- Prevents sun damage, unless it is a properly approved SPF product.
- Detoxes the body.
- Medical-grade result.
- Clinically proven, unless evidence is verified.

Safer wording:
- Supports your routine.
- Helps with facial massage.
- Helps organize beauty essentials.
- Helps apply product evenly.
- Helps keep brushes cleaner when used as directed.
- Helps style hair without heat, where accurate.
- Helps reduce visible puffiness as part of a massage routine, only if carefully worded.

## Country Decision

Do not assume "worldwide shipping" means every product can ship everywhere on day one.

Launch-country rule:
- Start with a controlled country list and store market eligibility by country.
- Add countries after product files, labels, tax, shipping, returns, and local rules are checked.

Confirmed first country set:
- United States.
- United Kingdom.

US and UK launch does not mean every product can launch in both countries.

Backend rule:
- Every product needs `market_eligibility_us`.
- Every product needs `market_eligibility_gb`.
- A product can be direct-sale in one market and blocked, prepare-only, or affiliate-only in another.

UK-specific note:
- Great Britain cosmetic products require a responsible-person and notification route before direct-sale cosmetics are placed on the market.
- Northern Ireland can differ for cosmetics, so cosmetics remain blocked for NI until reviewed.

Definition:
- Responsible person: a legally responsible business or person named for regulatory purposes in a market.

## Supplier Document Requests

Ask every supplier for:
- Product specification sheet.
- Material list or ingredient list.
- Safety certificates if electrical or skin-contact risk is meaningful.
- Label and packaging photos.
- Country of manufacture.
- Batch/lot tracking process.
- Return, defect, and recall procedure.
- Proof they are authorized to sell branded products, if branded.
- Confirmation that product photos and claims may be used.

Definition:
- Product specification sheet: a document describing what the product is made from, its dimensions, usage, and technical details.

## Sample Testing Checklist

For every direct-sale product:
- Buy at least one sample from the intended supplier.
- Photograph packaging before opening.
- Photograph product from multiple angles.
- Compare product to listing photos.
- Measure product dimensions.
- Check smell, finish, sharp edges, loose parts, stitching, zipper, hinge, or electronics.
- Use the product in the normal intended way.
- Record defects.
- Record packaging quality.
- Record delivery time and tracking quality.
- Decide pass, fail, or retest.

## Complaint And Recall Process

Complaint:
- A customer says a product is defective, unsafe, misleading, damaged, or caused a reaction.

Recall:
- The business stops sale and contacts customers because a product may be unsafe, defective, incorrectly labelled, or legally problematic.

Minimum process:
- Store complaint date, order ID, product SKU, issue, photos, resolution, and supplier response.
- Escalate any injury, burn, allergic reaction, electrical fault, contamination, or repeated defect.
- Stop sale if a pattern appears.
- Contact supplier for batch information.
- Contact customers if needed.
- Keep a public-facing recall notice template ready.

## Backend Meaning

The backend must store:
- Product file status.
- Compliance lane.
- Required documents.
- Approved claims.
- Blocked claims.
- Sample test status.
- Complaint count.
- Recall status.
- Supplier document expiry or review date.

Business meaning:
- The store can scale without losing proof.
- Codex can later build dashboards that show which products are safe to publish, which are blocked, and why.

## Verification Checklist

Operational verification:
- No product is sold without a product file.
- No cosmetics go live without ingredient and label checks.
- No electrical product goes live without safety proof and sample checks.
- No high-compliance product goes live without expert review or authorized route.
- Every direct-sale product has customer instructions and warnings where needed.

Backend verification:
- Compliance status is visible in product records.
- Required documents are attached or marked missing.
- Approved and blocked claims are stored separately.
- Complaint and recall fields exist before launch.
- Product status cannot move to approved if required compliance fields are empty.

Visual verification:
- Product pages show accurate product photos, size, materials, usage, and warnings.
- Product pages do not hide important limitations.
- Product pages do not show risky medical claims.
- Mobile product pages remain readable.
- Checkout, receipts, emails, and support replies use approved wording.

## Reusable Codex Prompt

```text
Create a product compliance process for this ecommerce category. Define terms in plain English. Separate low-risk accessories, skin-contact products, cosmetics, electrical products, and high-compliance products. Create a product file checklist, sample testing checklist, claims-control rules, complaint process, recall process, backend fields, and visual verification checks.
```
