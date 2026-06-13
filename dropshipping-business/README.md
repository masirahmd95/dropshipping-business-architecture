# Dropshipping Business Architecture

## Purpose

This folder is the working architecture for a real dropshipping business.

Definition:
- Dropshipping: an ecommerce model where the store sells products, but a supplier ships the products directly to the customer.

This project is backend-first. That means we design the operating system of the business before branding.

Definition:
- Backend-first: designing data, rules, integrations, operations, automation, and reporting before visual identity.

## Current Strategy

Build a sophisticated, scalable dropshipping architecture from the start. The system should be able to support:

- Multiple suppliers
- Multiple product categories
- Stock and price updates
- Payments, fraud checks, tax, and checkout
- Supplier order routing
- Shipping tracking
- Returns and refunds
- Customer support
- Email and SMS marketing
- Analytics and reporting
- Accounting and finance exports
- Operational alerts

Definition:
- Scalable: able to handle more products, customers, suppliers, orders, countries, and integrations without needing to rebuild the whole system.

## Working Order

1. Backend architecture
2. Integration choices
3. Data model
4. Core workflows
5. Verification standards
6. Storefront and customer experience
7. Marketing systems
8. Branding

Branding is last because the business must first have a working operating model.

## Key Files

- `backend-architecture/backend-function-map.md`: complete backend function inventory.
- `backend-architecture/multi-store-backend-architecture.md`: shared backend blueprint for running the three store tracks.
- `docs/market-trend-scouting-2026-06.md`: current trend research across Amazon, AliExpress, TikTok Shop, Temu, Google Trends, and related signals.
- `docs/beauty-product-validation-2026-06.md`: validation engine for the first beauty store.
- `docs/beauty-launch-readiness-plan.md`: launch gates, first launch basket, account sequence, and sample budget planning.
- `stores/README.md`: store-track index for home/kitchen utility, beauty accessories, and pet accessories.
- `stores/beauty-accessories/top-100-product-scorecard.md`: ranked beauty product candidates and launch decisions.
- `stores/beauty-accessories/sample-order-plan.md`: first controlled sample batch.
- `stores/beauty-accessories/product-files/product-file-index.md`: proof status for first launch products.
- `operations/product-compliance-testing.md`: product-file, claims, sample-testing, complaint, and recall process.
- `operations/product-file-template.md`: reusable product proof template.
- `operations/account-setup-checklist.md`: safe setup boundary for Shopify, supplier, payment, analytics, and support accounts.
- `integrations/recommended-integrations.md`: integration categories, recommended candidates, and user decisions needed.
- `integrations/beauty-supplier-shortlist-2026-06.md`: supplier routes for beauty products.
- `integrations/cheapest-scalable-backend-stack-2026-06.md`: cheapest serious backend stack and upgrade triggers.
- `data-models/core-data-model.md`: the business memory for products, suppliers, orders, payments, tracking, returns, and reporting.
- `data-models/product-validation-data-model.md`: records needed to turn product validation into a backend workflow.
- `workflows/order-to-fulfilment.md`: core workflow from customer checkout to supplier fulfilment.
- `workflows/product-validation-to-launch.md`: workflow from product idea to test launch.
- `operations/verification-standards.md`: operational, backend, and visual verification rules.

## Playbook Link

Every decision here should create a reusable lesson in:

`../business-architecture-playbook/examples/dropshipping/`

Definition:
- Playbook: a reusable guide that explains the method clearly enough to apply it to another business.
