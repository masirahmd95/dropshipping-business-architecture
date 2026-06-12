# Verification Standards

## Purpose

This document defines what "done" means for the dropshipping backend.

Definition:
- Verification: checking that the system works, remains tidy behind the scenes, and appears visually correct.

## Three Verification Types

1. Operational verification: the business workflow works.
2. Backend verification: the hidden system is organized and reliable.
3. Visual verification: customer and staff screens look accurate and professional.

Definitions:
- Operational verification: checking that the business result happens correctly.
- Backend verification: checking that data, rules, files, integrations, logs, and errors are tidy and maintainable.
- Visual verification: checking screens, emails, receipts, dashboards, and states such as loading, empty, and error views.

## Backend Tidiness Checklist

- One module should have one main responsibility.
- Product, supplier, order, payment, shipment, support, and reporting logic should not be mixed together unnecessarily.
- Names should be plain enough to explain to a non-developer.
- Duplicate rules should be avoided.
- Logs should explain what happened and why.
- Failed integration calls should create useful errors or alerts.
- Secrets must not be placed in files.
- Configuration should use placeholders until real credentials are provided.
- Multi-store records must include a store ID so products, orders, customers, reports, and support tickets do not blur together.
- Shared templates should be reused rather than copied into inconsistent versions.

Definitions:
- Module: a self-contained part of a system with one main job.
- Log: a written record of what the software did.
- Configuration: settings that control how the system behaves.
- Store ID: a unique internal code for one store.

## Visual Verification Checklist

Check every screen or customer message for:

- Correct data
- Clear wording
- Readable text
- Consistent spacing
- Mobile responsiveness
- Loading states
- Empty states
- Error states
- Correct currency, tax, and totals
- No broken images
- No overlapping interface elements
- Store-specific product warnings, dimensions, materials, and limitations visible before checkout

Definitions:
- Mobile responsiveness: the layout works properly on phones.
- Empty state: what appears when there is no data yet.
- Loading state: what appears while data is being fetched.
- Error state: what appears when something goes wrong.

## Operational Verification Checklist

- Product import creates usable product records.
- Product approval prevents incomplete products from going live.
- Inventory sync reduces overselling risk.
- Checkout creates a valid order.
- Payment success captures money or records authorization correctly.
- Payment failure does not create supplier fulfilment.
- Fraud review can hold risky orders.
- Supplier routing sends the right line items to the right supplier.
- Tracking updates reach the customer.
- Refunds update order, payment, support, analytics, and accounting records.
- Dashboards show revenue, margin, supplier, and order status accurately.

Definition:
- Line item: one product row inside an order.
