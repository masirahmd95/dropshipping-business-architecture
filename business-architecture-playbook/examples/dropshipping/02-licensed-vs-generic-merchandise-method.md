# Licensed Vs Generic Merchandise Method

## Purpose

This method helps decide whether a dropshipping business should sell licensed goods, generic goods, or original goods.

Definitions:
- Licensed goods: products sold with permission from the intellectual-property owner.
- Generic goods: products that serve the same customer need without using protected brand, league, club, event, player, logo, or design rights.
- Original goods: products created by the business using its own artwork, wording, packaging, or product design.
- Unauthorized goods: products sold without the necessary permission from the rights holder.

## Core Rule

Do not ask "will this sell?" first.

Ask:

1. Are we allowed to sell this?
2. Can we prove we are allowed to sell this?
3. Can the supplier ship it reliably?
4. Does the margin survive refunds, shipping, fees, tax, support, and compliance work?
5. Can the product scale without platform, payment, customs, or rights-holder risk?

Definition:
- Compliance work: the operational work needed to follow laws, platform rules, payment rules, supplier restrictions, and advertising rules.

## Decision Sequence

Use this sequence for every product category:

1. Identify the customer occasion.
2. Identify protected names, marks, designs, faces, clubs, teams, leagues, sponsors, and event references.
3. Classify the product as generic, original, licensed, affiliate, or blocked.
4. Check supplier authorization and shipping ability.
5. Check gross margin, contribution margin, and return exposure.
6. Check whether ads, product feeds, payment providers, and sales channels allow the product.
7. Approve, revise, affiliate-link, or reject the product.

Definitions:
- Customer occasion: the buying situation, such as matchday, tournament viewing, training, gifting, or team travel.
- Contribution margin: revenue left after the variable costs of selling the product, such as product cost, shipping, payment fees, packaging, and expected returns.

## Product Classification

| Classification | Meaning | Action |
|---|---|---|
| Generic | No protected marks or affiliation claims | Eligible for supplier and margin checks |
| Original | Created by the business without protected rights | Eligible after design/IP review |
| Licensed | Authorization is proven | Eligible with territory and channel controls |
| Affiliate | Sale happens through an authorized seller | Eligible as a referral layer |
| Blocked | Authorization missing or risk unacceptable | Do not import, publish, advertise, or sell |

Definition:
- Channel control: a rule that decides where a product may be sold or advertised, such as the store, Google Shopping, Meta, TikTok, Amazon, or affiliate-only pages.

## Backend Pattern

Add product-compliance fields before product launch:

```text
Product
- supplier_id
- supplier_authorization_status
- ip_risk_level
- protected_marks_detected
- authorization_evidence
- allowed_territories
- allowed_channels
- margin_after_risk
- publication_status
```

This keeps the storefront from becoming the first place risk is discovered.

Definition:
- Storefront: the customer-facing shop website.

## Codex Prompt

Use this prompt when assessing a new dropshipping niche:

```text
Assess whether [product category] is viable for dropshipping.

Compare:
- licensed goods
- legal generic goods
- original goods
- unauthorized or counterfeit goods

For each, explain:
- customer demand
- supplier access
- margin profile
- stock reliability
- legal/platform/payment risk
- backend fields needed
- verification checks

Define technical and legal-business terms in plain English.
Return a recommendation and a product-compliance checklist.
```

## Reusable Lesson

In rights-heavy categories, product selection is a compliance architecture problem.

The business should protect itself by designing approval rules, records, supplier evidence, and publication controls before importing products at scale.
