# Core Data Model

## Purpose

This document defines the core records the dropshipping business must store or synchronize.

Definition:
- Record: stored information about one thing, such as a product, supplier, customer, order, payment, or shipment.

## Core Tables Or Objects

| Record | Business Meaning | Important Fields |
|---|---|---|
| Product | Item sold in the store | title, description, category, status, supplier, images, SEO fields, publication status |
| Product Compliance Review | Product approval record before publication | product, supplier, authorization status, IP risk level, protected marks detected, evidence link, allowed territories, allowed channels, reviewer, decision |
| Variant | Sellable version of a product | SKU, option values, price, compare-at price, cost, weight, barcode |
| Supplier | Company or platform that fulfils products | name, contact, API type, reliability score, shipping regions, authorization evidence |
| Supplier Product | Supplier-side product record | supplier SKU, supplier cost, supplier stock, processing time, source URL, authorization status |
| Inventory Snapshot | Stock state at a point in time | variant, supplier, available quantity, reserved quantity, sync time |
| Price Rule | Pricing logic | cost basis, markup, minimum margin, rounding rule, sale rule |
| Customer | Person who buys | name, email, phone, address, consent, lifetime value |
| Cart | Items before checkout | customer/session, items, discounts, abandoned status |
| Order | Customer purchase | customer, line items, payment status, fulfilment status, total, tax, shipping |
| Order Line | One product inside an order | product, variant, quantity, price, cost, supplier, margin |
| Payment | Money attempt or result | order, provider, amount, status, transaction ID, failure reason |
| Fraud Review | Risk decision | order, risk score, reason, decision, reviewer |
| Supplier Order | Order sent to supplier | supplier, order lines, supplier order ID, status, cost |
| Shipment | Delivery movement | supplier order, carrier, tracking number, status, estimated delivery |
| Return Request | Customer return | order, item, reason, eligibility, status |
| Refund | Money returned | order, payment, amount, reason, status |
| Support Ticket | Customer issue | customer, order, issue type, priority, status |
| Marketing Event | Customer behaviour event | customer/session, event type, product, campaign, timestamp |
| Analytics Attribution | Where the customer came from | channel, campaign, source, medium, click ID |
| Accounting Export | Finance record for bookkeeping | order, payment, fee, tax, refund, payout, export status |

Definitions:
- SKU: stock keeping unit; a unique code used to identify a product or variant.
- SEO: search engine optimization; product text and structure that helps search engines understand the page.
- Lifetime value: total revenue or profit expected from a customer over time.
- Transaction ID: the payment provider's unique reference for a payment.
- Click ID: a tracking code from an ad platform that helps connect an ad click to a sale.
- Authorization status: whether the business can prove it is allowed to sell a product.
- IP risk level: the risk that a product uses protected intellectual property without permission.

## Relationship Map

```text
Supplier
-> Supplier Product
-> Product Compliance Review
-> Product / Variant
-> Inventory Snapshot
-> Cart
-> Order
-> Order Line
-> Payment
-> Supplier Order
-> Shipment
-> Support Ticket / Return Request / Refund
-> Accounting Export
```

Customer behaviour also creates:

```text
Customer or session
-> Marketing Event
-> Analytics Attribution
-> Order
-> Reporting
```

Definition:
- Session: one visitor's activity during a period of browsing.

## Data Quality Rules

- A product cannot go live without supplier, cost, price, margin, shipping region, return status, and product category.
- A product cannot go live without a product compliance review.
- A product with blocked IP risk cannot be published, advertised, or routed to checkout.
- A licensed product cannot go live without authorization evidence, allowed territory, and allowed channel records.
- A variant cannot go live without SKU, supplier SKU, price, cost, and inventory rule.
- An order cannot route to a supplier until payment and fraud rules allow it.
- A refund must connect to the original order and payment.
- A shipment must connect to a supplier order and customer order.
- Analytics must connect product, order, campaign, and revenue where possible.

Definition:
- Data quality rule: a rule that prevents incomplete or unreliable records from entering the operating system.

## Playbook Lesson

The data model is the business memory. If product, supplier, order, payment, and tracking records are weak, every dashboard and automation built on top of them will be weak.
