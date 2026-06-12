# Store Profile: Home/Kitchen Utility

## Working Identity

Store ID:

```text
home_kitchen_utility
```

Store type:

```text
Home/kitchen organization and utility accessories
```

Status:

```text
Research
```

Definition:
- Store ID: a unique internal code used to keep products, orders, analytics, and decisions separate.

## Business Logic

This store focuses on small household products that solve visible everyday problems.

Initial product lanes:

- Drawer and cabinet organizers.
- Food storage helpers.
- Reusable cleaning accessories.
- Countertop organization.
- Small preparation tools.

Definition:
- Product lane: a focused product group inside a store.

## Why This Store Is Viable

- Demand signals are broad and stable.
- Products are usually small and shippable.
- Benefits are easy to show in photos or short video.
- Compliance risk is lower than supplements, electronics, or baby products.
- Bundles are natural, such as storage sets or cleaning kits.

Definition:
- Bundle: a group of products sold together to raise average order value or solve a fuller customer problem.

## Backend Configuration

Required product attributes:

- Dimensions.
- Material.
- Colour.
- Pack quantity.
- Food-contact relevance.
- Heat relevance.
- Cleaning instructions.
- Storage location.
- Supplier processing time.
- Shipping regions.

Store-specific compliance checks:

- Do not make unsafe food-contact claims without evidence.
- Do not sell sharp, heated, electrical, or child-safety-sensitive products first.
- Verify actual dimensions because misleading size is a major return driver.
- Require sample photos before publishing product pages.

Definition:
- Return driver: a reason customers commonly return a product.

## Blocked At Launch

- Electrical kitchen appliances.
- Products used by babies or young children.
- Knives or sharp tools.
- Products with unsupported food safety claims.
- Products that rely on misleading before/after images.

## Product Candidate Examples

These are research examples, not approved products:

| Candidate | Customer Problem | Why It Fits | Risk To Check |
|---|---|---|---|
| Adjustable drawer organizer | Messy drawers | Clear visual benefit | Size accuracy |
| Reusable cleaning cloth set | Disposable cleaning waste | Bundle potential | Material quality |
| Fridge storage bin set | Fridge clutter | Easy product photography | Shipping damage |
| Countertop cable and tool holder | Counter clutter | Low complexity | Adhesive quality |

## Verification

Operational:
- Product candidate has at least three demand signals.
- Supplier has sample order record.
- Product dimensions are checked against the real sample.

Backend tidiness:
- Every product has `store_id = home_kitchen_utility`.
- Product attributes include material, size, pack quantity, and use location.
- Product page cannot publish without compliance decision.

Visual:
- Product images show scale.
- Variant images match the selected variant.
- Product page shows dimensions before checkout.
