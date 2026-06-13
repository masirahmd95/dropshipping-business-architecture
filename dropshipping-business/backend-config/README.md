# Backend Config

## Purpose

This folder stores structured backend setup rules for the dropshipping business.

Definition:
- Backend config: readable setup files that describe how the backend should behave.
- Structured file: a file arranged consistently enough that a person, spreadsheet, script, or future app can use it.

Business meaning:
- These files are the bridge between planning documents and live setup inside Shopify, supplier apps, analytics tools, and future custom dashboards.
- They do not contain passwords, API keys, or private account details.

## Current Store

The active setup is for:

```text
beauty_accessories
```

Launch markets:

```text
US
GB
```

Definitions:
- US: United States.
- GB: Great Britain/United Kingdom market code used here for UK ecommerce setup. UK-specific notes are included where Northern Ireland may differ.

## File Map

| File | What It Controls |
|---|---|
| `stores/beauty_accessories.store.json` | Store-level setup, product fields, launch lanes, admin views |
| `markets/us.market.json` | United States tax, duties, safety, shipping, and policy rules |
| `markets/uk.market.json` | United Kingdom VAT, product safety, shipping, returns, and policy rules |
| `rules/product_launch_gates.json` | Product approval gates before sale |
| `rules/pricing_margin_rules.json` | Pricing and margin rules for USD and GBP |
| `rules/order_routing_rules.json` | Order-to-supplier routing and failure handling |
| `integrations/beauty_accessories.integration-plan.json` | Tool stack and integration setup status |
| `verification/us_uk_backend_setup_verification.md` | Operational, backend, and visual checks |

Definition:
- Admin view: an internal screen or table used to manage operations.

## How To Use These Files

1. Use the market files to configure Shopify Markets, tax, duties, shipping, and policy settings.
2. Use the store file to create Shopify product metafields, tags, collections, and admin filters.
3. Use the product gate file to decide whether a product can be imported, sampled, published, or blocked.
4. Use the pricing rules to calculate USD and GBP prices before product import.
5. Use the order routing rules to decide when paid orders can be sent to suppliers.
6. Use the integration plan to know which accounts are needed and which tools are deferred.
7. Use the verification file before marking setup complete.

## Backend Tidiness Rules

- Keep one responsibility per file.
- Use stable IDs such as `beauty_accessories`, `US`, and `GB`.
- Do not store secrets.
- Do not store guesses as approved facts.
- Mark unknowns as `pending`.
- Add source links for legal, tax, platform, or supplier rules that can change.
- Update the playbook when a structure becomes reusable.

Definition:
- Stable ID: a name that does not change casually, so records can connect reliably.

## Playbook Lesson

A backend can start as structured rules before it becomes custom software. The important step is making the business rules explicit, named, and reusable.
