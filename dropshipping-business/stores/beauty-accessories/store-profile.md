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
Research
```

Definition:
- Skincare-adjacent: related to skincare routines without being a cosmetic, supplement, medicine, or treatment product.

## Business Logic

This store focuses on beauty organization, routine tools, travel storage, and low-risk personal-care accessories.

Initial product lanes:

- Makeup organizers.
- Skincare storage.
- Travel toiletry systems.
- Lash and brow tools.
- Hair and scalp accessories that do not make medical claims.

## Why This Store Is Viable

- TikTok and short-video fit is strong.
- Products can be visually demonstrated.
- Customers often buy routine accessories in sets.
- The niche has repeat content potential around organization, travel, and routines.

Definition:
- Content potential: how easily a product can generate useful marketing content such as demos, before/after organization, tutorials, or comparisons.

## Backend Configuration

Required product attributes:

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

## Blocked At Launch

- Cosmetics applied to the skin.
- Supplements or ingestibles.
- Electrical beauty devices.
- Products claiming to treat acne, hair loss, pain, skin conditions, or medical issues.
- Products with unrealistic before/after claims.

## Product Candidate Examples

These are research examples, not approved products:

| Candidate | Customer Problem | Why It Fits | Risk To Check |
|---|---|---|---|
| Rotating makeup organizer | Messy beauty storage | Strong visual demo | Plastic quality |
| Travel toiletry pouch | Travel leakage and clutter | Bundle potential | Zipper quality |
| Silicone brush cleaning mat | Dirty makeup brushes | Clear routine use | Hygiene claims |
| Heatless hair accessory set | Hair styling convenience | Strong TikTok fit | Claims and material comfort |

## Verification

Operational:
- Product candidate has demand signals from marketplace and social channels.
- Product does not require regulatory review before launch.
- Supplier sample is checked for material, comfort, and hygiene.

Backend tidiness:
- Every product has `store_id = beauty_accessories`.
- Claim restrictions are recorded before copywriting.
- Product page cannot publish without compliance decision.

Visual:
- Product page avoids exaggerated results.
- Product images show actual contents and size.
- Instructions do not imply medical or treatment benefits.
