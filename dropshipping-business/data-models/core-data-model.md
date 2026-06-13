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
| Market | Country or region where the store can sell | market ID, country or region, currency, tax model, duties rule, shipping rule, returns rule, review date |
| Market Eligibility | Product approval by country | product, market, eligibility status, reason, required evidence, approval date |
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
| Market Price | Approved product price by market | product, market, currency, target price, landed cost, margin, approval status |
| Lead | Person interested before purchase | email, country, source, interest, consent, lead magnet, lead status |
| Consent Record | Permission and privacy evidence | person, channel, consent status, source, timestamp, privacy version, unsubscribe date |
| Form Submission | One submitted form | form ID, lead, form location, answers, source campaign, timestamp |
| Lead Magnet | Free asset offered for sign-up | asset ID, title, topic, target segment, delivery status |
| Incentive | Offer used to encourage action | incentive ID, type, value, market, margin gate, expiry, status |
| Customer Segment | Rule-based customer or lead group | segment ID, rule, market, purpose, active status |
| Campaign | Marketing activity | campaign ID, channel, audience, offer, products, send date, status |
| Email Event | Email performance action | campaign, lead/customer, sent, delivered, opened, clicked, unsubscribed, purchased |
| Product Interest | Evidence a person likes a product/category | person, category, product, source event, score, last seen |
| Product Trend Signal | Product demand signal captured monthly | product idea, source, metric, market, score, captured date |
| Monthly Trend Report | Monthly product opportunity output | month, market, top products, recommendations, archived status |
| Product Opportunity | Trend-backed product idea | opportunity ID, product idea, score, decision, next action |
| Dashboard Metric | Saved reporting number | metric name, value, period, market, source, status |
| Customer | Person who buys | name, email, phone, address, consent, lifetime value |
| Cart | Items before checkout | customer/session, items, discounts, abandoned status |
| Order | Customer purchase | customer, line items, market, payment status, fulfilment status, total, tax, shipping |
| Order Line | One product inside an order | product, variant, quantity, price, cost, supplier, margin |
| Payment | Money attempt or result | order, provider, amount, status, transaction ID, failure reason |
| Fraud Review | Risk decision | order, risk score, reason, decision, reviewer |
| Tax And Duties Decision | Tax, VAT, duty, or import-tax treatment | order or product, market, rule source, registration status, amount, review status |
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
- Market: a country or region where the store can sell, such as the United States or United Kingdom.
- Market eligibility: whether one product is approved, blocked, affiliate-only, or prepare-only for one market.
- Market price: the approved price for one product in one market and currency.
- Tax and duties decision: the stored decision about sales tax, VAT, duties, or import tax treatment.
- Lead: a person who has shown interest but has not bought yet.
- Consent record: stored proof of whether someone agreed to receive marketing and when.
- Lead magnet: a useful free asset offered in exchange for a sign-up.
- Incentive: a discount, free asset, free shipping threshold, or access offer used to encourage action.
- Customer segment: a rule-based group used for targeting and reporting.
- Product trend signal: evidence that a product or category may be rising, stable, or declining.
- Visual demo score: a judgement of how clearly the product benefit can be shown in photos or short video.
- Store configuration: settings that adjust the shared backend for one store.
- Launch stage: the current maturity of a store, such as research, setup, test, live, paused, or closed.

## Relationship Map

```text
Store
-> Store Configuration
-> Market
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
-> Market Eligibility
-> Market Price
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
-> Tax And Duties Decision
-> Supplier Order
-> Shipment
-> Support Ticket / Return Request / Refund
-> Accounting Export
```

Customer behaviour also creates:

```text
Lead, Customer, or session
-> Consent Record
-> Form Submission
-> Lead Magnet
-> Customer Segment
-> Campaign
-> Email Event
-> Product Interest
-> Marketing Event
-> Analytics Attribution
-> Order
-> Reporting
```

Product trend intelligence creates:

```text
Product Trend Signal
-> Monthly Trend Report
-> Product Opportunity
-> Product Candidate
-> Product File
-> Sample Test
```

Definition:
- Session: one visitor's activity during a period of browsing.

## Data Quality Rules

- Every major record should include `store_id` once more than one store exists.
- Every market-sensitive record should include `market_id` when it affects country, currency, tax, duties, shipping, returns, or compliance.
- A product cannot go live without supplier, cost, price, margin, shipping region, return status, store ID, and product category.
- A product cannot go live in the United States or United Kingdom without a market eligibility decision for that market.
- A product cannot go live in more than one currency without market price approval for each currency.
- Cross-border products must store HS code and country of origin before checkout approval where those fields are needed.
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
- An order cannot route to a supplier until payment, fraud, market eligibility, customs fields, and supplier destination rules allow it.
- A marketing campaign cannot send without consent status, unsubscribe suppression, audience segment, approved products, and offer margin checks where relevant.
- A lead magnet cannot collect sensitive data or make medical/treatment claims without review.
- A monthly product trend report cannot recommend direct sale for blocked or high-compliance products without compliance review.
- A refund must connect to the original order and payment.
- A shipment must connect to a supplier order and customer order.
- Analytics must connect product, order, campaign, and revenue where possible.

Definition:
- Data quality rule: a rule that prevents incomplete or unreliable records from entering the operating system.

## Playbook Lesson

The data model is the business memory. If product, supplier, order, payment, and tracking records are weak, every dashboard and automation built on top of them will be weak.
