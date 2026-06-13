# Backend Function Map

## Purpose

This document lists the backend functions the dropshipping business needs.

Definition:
- Backend function: a hidden system capability that supports the business, such as storing products, routing orders, calculating tax, or sending tracking updates.

## Master Backend Domains

| Domain | Business Job | Required Functions |
|---|---|---|
| Store management | Keep multiple stores separated and comparable | Store ID, store configuration, store status, store-specific rules, shared reporting structure |
| Market setup | Keep countries, currencies, tax, duties, shipping, and product eligibility separated | Market ID, market currency, market eligibility, market price, tax registration status, duties/import rule |
| Market intelligence | Decide what is worth testing before importing products | Trend capture, demand signal scoring, competitor price checks, supplier depth checks, niche decision records |
| Product catalogue | Control what the store sells | Product import, product enrichment, category mapping, images, variants, product status |
| Product compliance | Prevent risky products from reaching the storefront | Product file, sample test, claim review, IP risk review, authorization evidence, allowed territory, allowed channel, publication approval |
| Supplier management | Know who fulfils each product | Supplier profiles, supplier cost, fulfilment rules, reliability tracking, supplier priority |
| Inventory | Avoid selling unavailable items | Stock sync, safety buffers, stockout handling, backorder rules |
| Pricing | Protect margin | Cost tracking, markup rules, sale pricing, currency rules, fee allowance |
| Storefront platform | Run the commerce engine | Products, cart, checkout, customer accounts, order records |
| Payments | Take money safely | Payment authorization, capture, failed payment handling, refunds |
| Fraud | Reduce risky orders | Risk scoring, manual review, block rules, fraud notes |
| Tax | Calculate legal tax obligations | Sales tax, VAT, GST, product tax codes, regional rules |
| Orders | Manage customer purchases | Order creation, status changes, cancellation, edits, partial fulfilment |
| Supplier order routing | Send orders to suppliers | Routing rules, supplier order creation, split shipment handling |
| Fulfilment | Get items shipped | Fulfilment status, tracking number, carrier, delivery status |
| Customer notifications | Keep customers informed | Order confirmation, tracking update, delay notice, refund notice |
| Returns | Handle customer returns | Return request, eligibility rule, return label, restock or no-restock |
| Refunds | Return money correctly | Full refund, partial refund, store credit, refund reason |
| Customer support | Resolve issues | Ticket creation, order lookup, customer history, refund/return workflow |
| Marketing automation | Grow repeat sales | Welcome flow, abandoned cart, post-purchase, review request, winback |
| Analytics | Measure behaviour and sales | Ecommerce events, attribution, conversion tracking, product performance |
| Reporting | Manage the business | Revenue, margin, AOV, CAC, ROAS, refund rate, supplier performance |
| Accounting | Keep finance records clean | Sales export, fees, refunds, tax, payout reconciliation |
| Compliance | Reduce legal risk | Consent, cookie banner, privacy policy, data retention, customer deletion |
| Security | Protect accounts and data | Roles, permissions, secrets, audit trail, staff access review |
| Monitoring | Catch failures early | Error tracking, sync failure alerts, uptime checks, failed order alerts |

Definitions:
- Variant: a version of a product, such as size or colour.
- Safety buffer: inventory held back so the store does not sell every unit shown by the supplier.
- AOV: average order value.
- CAC: customer acquisition cost.
- ROAS: return on ad spend.
- Reconciliation: matching money records across systems so sales, fees, refunds, and payouts agree.
- IP risk review: checking whether a product may use protected names, logos, designs, people, teams, leagues, events, or brands without permission.
- Demand signal scoring: comparing evidence from platforms such as Amazon, TikTok Shop, Temu, AliExpress, Google Trends, and supplier data before choosing products.
- Store configuration: settings that define how one store behaves while using the shared backend architecture.
- Market setup: configuring each launch country so products, prices, orders, tax, shipping, and compliance behave correctly by market.

## Core Event Chain

```text
Store configuration selected
-> launch market selected
-> market signal captured
-> product candidate created
-> demand, price floor, supplier depth, and compliance risk scored
-> sample order decision made
-> product file opened
-> sample received and inspected
-> market eligibility approved or blocked
-> market price approved
-> product claims approved or blocked
-> supplier product data received
-> product enriched
-> product compliance review completed
-> product page visual verification completed
-> product approved
-> product published to store
-> customer views product
-> customer adds to cart
-> customer checks out
-> payment is authorized or captured
-> fraud, market, customs, and tax logic runs
-> order record is created
-> order is routed to supplier
-> supplier confirms fulfilment
-> tracking is received
-> customer is notified
-> analytics and finance records update
-> support and return workflows remain available
```

Definition:
- Event chain: the sequence of events that moves the business from one state to another.

## Advanced Requirements

The architecture should support these from the start:

- Multiple suppliers for the same product type.
- Supplier fallback if the first supplier is unavailable.
- Product candidate scoring before import.
- Product quality review before publishing.
- Product compliance review before publishing.
- Margin protection before product activation.
- Stock buffers to reduce overselling.
- Split shipments when one order uses multiple suppliers.
- Failed payment handling.
- Fraud review before supplier fulfilment where needed.
- Tracking updates from suppliers or carriers.
- Refunds and returns connected to finance records.
- Marketing events connected to customer behaviour.
- Reporting by product, supplier, channel, country, and margin.
- US and UK market rules from the start, with a path to add more countries later.

Definition:
- Supplier fallback: using a backup supplier when the preferred supplier cannot fulfil an order.

## Playbook Lesson

A dropshipping backend is not just "products plus checkout." It is a control system for supplier risk, payment risk, delivery risk, support risk, and margin risk.
