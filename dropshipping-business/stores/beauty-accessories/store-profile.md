# Store Profile: Beauty Accessories

## Working Identity

Store ID:

```text
beauty_accessories
```

Store type:

```text
Beauty tools and skincare-adjacent accessories
```

Status:

```text
Backend setup for US and UK launch
```

Definition:
- Skincare-adjacent: related to skincare routines without being a cosmetic, supplement, medicine, or treatment product.

## Business Logic

This store focuses on beauty organization, routine tools, travel storage, and low-risk personal-care accessories.

Current product lanes:

- Makeup organizers.
- Skincare storage.
- Travel toiletry systems.
- Lash and brow tools.
- Hair and scalp accessories that do not make medical claims.
- Beauty routine accessories.
- Selected cosmetics after product-file checks.
- Selected electrical beauty tools after safety-document checks.

## Why This Store Is Viable

- TikTok and short-video fit is strong.
- Products can be visually demonstrated.
- Customers often buy routine accessories in sets.
- The niche has repeat content potential around organization, travel, and routines.
- Lead magnets can naturally teach organization, travel beauty packing, hair routines, and tool cleaning without making medical claims.

Definition:
- Content potential: how easily a product can generate useful marketing content such as demos, before/after organization, tutorials, or comparisons.

## Backend Configuration

Required product attributes:

- Market eligibility for United States.
- Market eligibility for United Kingdom.
- USD target price.
- GBP target price.
- HS code where needed for customs.
- Country of origin where needed for customs.
- Material.
- Skin-contact relevance.
- Hygiene notes.
- Cleaning instructions.
- Tool type.
- Pack quantity.
- Colour.
- Size.
- Claim restrictions.
- Supplier processing time.
- Shipping regions.

Store-specific compliance checks:

- Do not make medical, skin improvement, hair growth, acne, weight loss, or treatment claims.
- Do not launch cosmetics, ingestibles, or devices that require safety certification.
- Check hygiene concerns for reusable tools.
- Require clear content rules before using before/after imagery.

Definition:
- Before/after imagery: images or videos comparing a starting state with an ending state. In beauty, these can create claim risk if they imply health or treatment results.

## Related Validation Documents

- `../../docs/beauty-product-validation-2026-06.md`: validation engine and launch rules.
- `../../docs/beauty-launch-readiness-plan.md`: launch gates and first launch assumptions.
- `../../docs/us-uk-launch-backend-setup.md`: US and UK backend setup.
- `../../backend-config/README.md`: structured backend control plane.
- `../../backend-architecture/customer-growth-crm-architecture.md`: CRM, lead capture, lifecycle marketing, incentives, and trend intelligence.
- `../../data-models/customer-growth-data-model.md`: customer growth records.
- `../../workflows/lead-to-customer-lifecycle.md`: lead conversion workflow.
- `../../workflows/monthly-product-trend-intelligence.md`: monthly trend intelligence workflow.
- `lead-magnet-and-newsletter-plan.md`: store-specific lead magnet and newsletter plan.
- `trend-reports/monthly-trend-report-template.md`: monthly product opportunity report template.
- `top-100-product-scorecard.md`: ranked product candidates and launch decisions.
- `sample-order-plan.md`: first controlled sample batch.
- `product-files/product-file-index.md`: first product proof files.
- `../../operations/product-compliance-testing.md`: product-file and compliance testing process.
- `../../integrations/beauty-supplier-shortlist-2026-06.md`: supplier routes and checks.

## Blocked At Launch

- Cosmetics applied to the skin unless ingredient, label, batch, supplier, and claim checks pass.
- Supplements or ingestibles.
- Electrical beauty devices unless safety certification evidence and sample checks pass.
- Products claiming to treat acne, hair loss, pain, skin conditions, or medical issues.
- Products with unrealistic before/after claims.

## Product Candidate Examples

These are research examples, not approved products:

| Candidate | Customer Problem | Why It Fits | Risk To Check |
|---|---|---|---|
| Travel cosmetic/toiletry organizer | Travel leakage and clutter | Bundle potential | Zipper and waterproofing quality |
| Satin bonnet/scrunchie/headband set | Hair protection and styling | Strong bundle fit | Fabric feel and stitching |
| Heatless curl set | Hair styling convenience | Strong TikTok fit | Claims and material comfort |
| Makeup headband and wrist wash-band set | Messy face-washing routine | Viral routine use | Absorbency and stitching |
| Resin claw clips | Easy styling | Current hair accessory trend | Hinge strength and finish |
| Rotating makeup organizer | Messy beauty storage | Strong visual demo | Plastic quality |
| Silicone brush cleaning mat | Dirty makeup brushes | Clear routine use | Hygiene claims |

## Verification

Operational:
- Product candidate has demand signals from marketplace and social channels.
- Product does not require regulatory review before launch.
- Supplier sample is checked for material, comfort, and hygiene.
- Product has a US and UK eligibility decision before either checkout market is enabled.

Backend tidiness:
- Every product has `store_id = beauty_accessories`.
- Every market-sensitive product has `market_eligibility_us` and `market_eligibility_gb`.
- USD and GBP prices are reviewed separately before publication.
- Lead, consent, segment, campaign, and incentive records are linked before email campaigns launch.
- Claim restrictions are recorded before copywriting.
- Product page cannot publish without compliance decision.

Visual:
- US and UK versions show the correct currency, shipping promise, and product restrictions.
- Lead forms and weekly newsletters look clear on desktop and mobile.
- Dashboard views show trend scores, lead funnel, offer performance, and US/UK split clearly.
- Product page avoids exaggerated results.
- Product images show actual contents and size.
- Instructions do not imply medical or treatment benefits.
