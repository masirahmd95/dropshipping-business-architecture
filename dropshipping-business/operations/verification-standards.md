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
- Product, supplier, order, payment, shipment, support, CRM, marketing, trend intelligence, and reporting logic should not be mixed together unnecessarily.
- Names should be plain enough to explain to a non-developer.
- Duplicate rules should be avoided.
- Logs should explain what happened and why.
- Failed integration calls should create useful errors or alerts.
- Secrets must not be placed in files.
- Configuration should use placeholders until real credentials are provided.
- Multi-store records must include a store ID so products, orders, customers, reports, and support tickets do not blur together.
- Marketing records must connect lead, consent, campaign, incentive, product interest, and customer/order records without mixing US and UK audiences accidentally.
- Trend records must connect source, market, score, product opportunity, and product validation decision.
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
- Clear consent wording on lead forms
- Accurate discount and free-shipping terms
- Newsletter and email rendering on mobile and desktop
- Dashboard cards, percentages, warning badges, and empty states
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
- Lead form creates lead, consent, segment, and analytics records.
- Lead magnet delivery works.
- Unsubscribe suppresses marketing emails.
- Incentives apply only when margin and market rules allow them.
- Monthly trend report produces product opportunity decisions.
- Dashboards show revenue, margin, supplier, and order status accurately.
- Growth dashboards show lead funnel, email performance, offer performance, US/UK split, and trend scores accurately.

Definition:
- Line item: one product row inside an order.
