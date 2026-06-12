# Multi-Store Backend Architecture

## Purpose

This document defines how three separate dropshipping stores can share the same backend architecture while keeping their product rules, suppliers, branding, analytics, and compliance decisions separate.

Definition:
- Multi-store architecture: one operating model used to run more than one store.

The three first store candidates are:

1. Home/kitchen organization and utility accessories.
2. Beauty tools and skincare-adjacent accessories.
3. Pet accessories and grooming tools.

Branding remains deferred. These are working store types, not final brand names.

Definition:
- Working store type: a temporary business label used while building operations before naming or branding the store.

## Direct Answer

The backend architecture should be almost identical, but not completely identical.

Use the same:

- Market intelligence process.
- Product candidate scoring.
- Supplier onboarding process.
- Product compliance gate.
- Product catalogue structure.
- Inventory sync process.
- Pricing and margin rules.
- Checkout, payment, fraud, tax, and order workflow.
- Supplier routing workflow.
- Tracking, returns, refunds, and support workflow.
- Analytics, reporting, accounting, monitoring, and verification standards.

Do not use the exact same:

- Product categories.
- Product attributes.
- Compliance risk rules.
- Supplier approval rules.
- Return risk scoring.
- Product page content.
- Marketing messages.
- Visual verification checklist.
- Customer support scripts.
- Advertising restrictions.

Definition:
- Product attribute: a structured detail about a product, such as size, material, colour, capacity, pet size, or skin-contact warning.
- Configuration: settings that adjust how the same system behaves for each store.

## Recommended Structure

Use a shared architecture with separate store configurations.

```text
Shared backend pattern
-> store configuration
-> product candidate records
-> supplier and compliance checks
-> approved store catalogue
-> order and fulfilment workflow
-> store-specific reporting
```

Definition:
- Store configuration: the settings, rules, categories, suppliers, and content requirements that make one store different from another.

## Store Separation Rule

Each store should have separate:

- Storefront.
- Product catalogue.
- Product candidate list.
- Supplier approval list.
- Compliance rules.
- Customer-facing content.
- Analytics view.
- Marketing lists.
- Support tags and issue categories.

These can still share the same architecture, templates, workflows, and reporting structure.

Definition:
- Storefront: the customer-facing online shop.
- Analytics view: a filtered reporting view for one store, channel, country, or campaign.

## Platform Recommendation

Start with one of these two patterns:

| Option | Meaning | Recommendation |
|---|---|---|
| Separate Shopify stores | Each niche has its own Shopify store, domain, catalogue, checkout, analytics, and brand later | Best if these are intended to become separate businesses |
| One Shopify store with collections | One shop contains all three product groups as collections | Easier early setup, but weaker brand clarity and messier analytics |
| Custom headless multi-tenant backend | One custom backend powers several storefronts | Powerful later, but unnecessary before product validation |

Recommended now:

```text
Separate Shopify stores later, shared backend architecture now.
```

Business reason:
- We can design one clean operating system and reuse it three times.
- Each store can be judged separately.
- If one niche fails, it does not contaminate the data, brand, or product catalogue of the others.

Definition:
- Headless commerce: an ecommerce setup where the customer-facing website is separate from the backend commerce engine.
- Multi-tenant: one software system serving multiple stores, clients, or business units with separation between them.

## Shared Backend Modules

| Module | Shared Or Store-Specific | Notes |
|---|---|---|
| Market intelligence | Shared process, store-specific records | Same scoring method, different candidate products |
| Product candidate scoring | Shared process, store-specific records | Each candidate belongs to one store type |
| Supplier management | Shared process, partly shared suppliers | Some suppliers may serve multiple stores, but approval must be per category |
| Product compliance | Shared gate, store-specific rules | Beauty, pet, and kitchen products carry different risks |
| Catalogue | Shared structure, store-specific products | Same data model, different categories and attributes |
| Inventory | Shared method, store-specific stock | Sync logic can match, stock records must be separate |
| Pricing | Shared rules, store-specific targets | Margin targets may differ by return risk and competition |
| Orders | Shared workflow, store-specific records | Orders should be tagged by store |
| Fulfilment | Shared workflow, store-specific supplier routing | Supplier rules vary by product type |
| Returns/refunds | Shared workflow, store-specific policies | Fashion-like beauty accessories may differ from pet products |
| Support | Shared helpdesk, store-specific tags | Use one support system with strict store tagging if volume is low |
| Marketing | Shared tools, store-specific audiences | Do not mix consent lists without a clear legal basis |
| Analytics | Shared event schema, separate views | Same event names, separate dashboards |
| Accounting | Shared method, possibly separate books | Depends on legal structure and accountant guidance |

Definition:
- Event schema: the agreed names and structure for tracking events such as product viewed, cart started, purchase, refund, or support ticket created.
- Consent list: customers who gave permission to receive marketing messages.

## Store-Specific Risk Rules

| Store Type | Main Backend Difference | Main Risk |
|---|---|---|
| Home/kitchen utility | Product attributes must track size, material, food-contact relevance, heat relevance, and cleaning instructions | Product safety, misleading dimensions, weak quality |
| Beauty accessories | Product attributes must track skin contact, hygiene, material, claim restrictions, and before/after content rules | Health claims, hygiene concerns, advertising restrictions |
| Pet accessories | Product attributes must track pet type, pet size, material, chew risk, choking risk, and supervision guidance | Animal safety, product durability, customer trust |

Definition:
- Claim restriction: a rule that limits what the store can say about what a product does.

## Data Model Additions

Every major record should include:

- `store_id`
- `store_type`
- `store_status`
- `store_configuration_version`

Definitions:
- Store ID: a unique code for one store.
- Store status: whether a store is research, setup, test, live, paused, or closed.
- Configuration version: the version of the store settings used when a product or order was created.

Recommended store IDs:

| Store ID | Store Type | Status |
|---|---|---|
| `home_kitchen_utility` | Home/kitchen organization and utility accessories | Research |
| `beauty_accessories` | Beauty tools and skincare-adjacent accessories | Research |
| `pet_accessories` | Pet accessories and grooming tools | Research |

## Shared Event Chain

```text
Store type selected
-> store configuration created
-> market signals collected for that store
-> product candidates scored
-> supplier candidates reviewed
-> sample orders requested
-> compliance checks completed
-> approved products imported
-> product pages visually checked
-> store can enter test launch
```

Definition:
- Test launch: a controlled launch used to validate products, suppliers, pages, payments, tracking, and support before scaling advertising.

## Verification Standard

Operational verification:
- Each store has a store profile.
- Each product candidate belongs to exactly one store.
- Supplier approval is recorded by store and product category.
- Product compliance rules match the store type.

Backend tidiness verification:
- Every product, order, supplier product, support ticket, marketing event, and accounting export has a `store_id`.
- Shared templates are not copied and edited inconsistently.
- Store-specific rules live in store profiles or store configuration files.

Visual verification:
- Product photos match the exact product and variant.
- Store pages do not use generic product-copy from suppliers without review.
- Size, material, use, and limitations are visible before checkout.
- Store-specific trust signals are present before launch.

Definition:
- Trust signal: a visible or operational proof that reduces customer doubt, such as clear delivery times, return rules, product details, reviews, or support access.

## Current Decision

Set up three store tracks using the same backend blueprint:

1. `home_kitchen_utility`
2. `beauty_accessories`
3. `pet_accessories`

Do not open live stores yet. The next backend step is to build product candidate scorecards for each store and shortlist sample-order products.
