# Core Data Model

## Purpose

This document defines the core records the dropshipping business must store or synchronize.

Definition:
- Record: stored information about one thing, such as a product, supplier, customer, order, payment, or shipment.

## Core Tables Or Objects

| Record | Business Meaning | Important Fields |
|---|---|---|
| Store | One separate store track or live store | store ID, store type, status, country, currency, configuration version, launch stage |
| Store Configuration | Store-specific settings that adjust the shared backend | store, product lanes, required attributes, blocked products, compliance rules, supplier rules, visual rules |
| Market Signal | Evidence that a product or niche may have demand | platform, query/product, category, signal type, metric, source URL, captured date |
| Product Candidate | Product idea being researched before store import | candidate name, niche cluster, customer problem, platform signals, Temu price floor, supplier count, estimated landed cost, target price, visual demo score, decision status |
| Product | Item sold in the store | title, description, category, status, supplier, images, SEO fields, publication status |
| Product Compliance Review | Product approval record before publication | product, supplier, authorization status, IP risk level, protected marks detected, evidence link, allowed territories, allowed channels, reviewer, decision |
| Product File | Proof folder for a product before sale | product file ID, candidate, supplier, compliance lane, evidence status, missing evidence, approval status |
| Sample Test | Physical sample inspection | sample ID, candidate, supplier, order date, delivery date, result, defect notes, visual notes |
| Product Claim | Approved or blocked wording for product pages, ads, and creator scripts | candidate, claim text, claim type, status, evidence, notes |
| Visual Verification | Check that product pages and admin screens look accurate | candidate/product, screen, viewport, status, issue, reviewer |
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
- Market signal: evidence from a marketplace, search platform, social platform, or supplier source that helps judge demand.
- Product candidate: a product idea that has not yet been approved for the store catalogue.
- Price floor: the lowest visible market price customers can easily find for a similar product.
- Visual demo score: a judgement of how clearly the product benefit can be shown in photos or short video.
- Store configuration: settings that adjust the shared backend for one store.
- Launch stage: the current maturity of a store, such as research, setup, test, live, paused, or closed.

## Relationship Map

```text
Store
-> Store Configuration
-> Market Signal
-> Product Candidate
```

```text
Market Signal
-> Product Candidate
-> Product File
-> Sample Test
-> Product Claim
-> Product Compliance Review
-> Visual Verification
-> Product / Variant
```

```text
Supplier
-> Supplier Product
-> Product Candidate
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

- Every major record should include `store_id` once more than one store exists.
- A product cannot go live without supplier, cost, price, margin, shipping region, return status, store ID, and product category.
- A product cannot be imported into the catalogue without a product candidate record unless manually approved as an exception.
- A product candidate should have at least three demand signals before sample ordering unless the user marks it as an experimental test.
- A product candidate must include price floor, estimated landed cost, target price, compliance risk, return risk, and visual demo score.
- A product cannot go live without a product compliance review.
- A direct-sale product cannot go live without a product file and sample-test result unless explicitly approved as a limited test.
- A product page cannot use claims that are not approved in Product Claim records.
- A product cannot pass visual verification if images, sizing, materials, usage, warnings, or pack contents are misleading.
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
