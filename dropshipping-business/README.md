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
- `docs/market-trend-scouting-2026-06.md`: current trend research across Amazon, AliExpress, TikTok Shop, Temu, Google Trends, and related signals.
- `integrations/recommended-integrations.md`: integration categories, recommended candidates, and user decisions needed.
- `data-models/core-data-model.md`: the business memory for products, suppliers, orders, payments, tracking, returns, and reporting.
- `workflows/order-to-fulfilment.md`: core workflow from customer checkout to supplier fulfilment.
- `operations/verification-standards.md`: operational, backend, and visual verification rules.

## Playbook Link

Every decision here should create a reusable lesson in:

`../business-architecture-playbook/examples/dropshipping/`

Definition:
- Playbook: a reusable guide that explains the method clearly enough to apply it to another business.
