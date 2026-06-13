# Recommended Integration Architecture

## Purpose

This document defines the recommended integration categories for the dropshipping business.

Definition:
- Integration: a connection between this business system and another software service.

The user will provide or approve final providers. Until then, these are recommended categories and candidate options, not final account decisions.

## Default Platform Assumption

Default assumption for the first architecture pass:

```text
Shopify-centred commerce backend
+ supplier integration layer
+ analytics and reporting layer
+ marketing and support layer
+ finance and accounting layer
```

Why:
- Shopify has mature commerce primitives for products, customers, orders, inventory, checkout, payments, storefronts, webhooks, and app integrations.
- It can start fast but still support advanced custom apps, APIs, webhooks, customer accounts, checkout extensions, and custom storefront options.

Definitions:
- Commerce primitives: basic ecommerce building blocks such as products, carts, customers, orders, and payments.
- Webhook: an automatic message sent from one system to another when something happens.
- Custom app: software built specifically for this business or store.

## Integration Matrix

| Area | Recommended Direction | Candidate Providers Or Tools | Decision Needed From User |
|---|---|---|---|
| Ecommerce platform | Use a scalable commerce platform first | Shopify, Shopify Plus later if needed | Confirm Shopify or another platform |
| Market setup | Separate US and UK rules inside the commerce backend | Shopify Markets, market-specific pricing, market-specific shipping, market-specific tax settings | US and UK confirmed as launch markets |
| Multi-store management | Use one architecture template with separate store configurations | Shopify separate stores later, shared Codex docs now, shared reporting template, store ID tagging | Confirm whether each niche will become a separate legal/brand/storefront entity |
| Market intelligence | Track demand signals before niche and product approval | Amazon Best Sellers/Product Opportunity Explorer, Google Trends, TikTok Creative Center, TikTok Shop Seller Center, AliExpress supplier research, DSers, AutoDS, Temu competitor checks, Pinterest Trends, Shopify trend reports | Confirm budget for paid research tools |
| Product compliance | Add a required product approval gate before products go live | Shopify metafields, product tags, approval workflow, supplier document storage, optional legal/IP review | Confirm whether any official licensed merchandise will be pursued |
| Supplier sourcing | Use supplier apps or direct supplier feeds | DSers, AutoDS, Spocket, CJdropshipping, Syncee, direct supplier API, CSV feed | Provide preferred suppliers or product niche |
| Product enrichment | Use AI-assisted internal workflow plus human approval | Codex workflow, Shopify product data, possible PIM later | Confirm product approval process |
| Payments | Use platform-native payments where possible; Stripe if custom/headless | Shopify Payments, Stripe | Confirm store country and payment provider access |
| Fraud | Use payment/platform fraud tools plus manual review rules | Stripe Radar, Shopify fraud analysis, manual review queue | Confirm risk tolerance |
| Tax | Use automated tax calculation, not manual spreadsheets | Shopify Tax, Stripe Tax, Avalara, TaxJar | Confirm business registration, US sales tax nexus, and UK VAT approach |
| Duties and import taxes | Require product customs fields before cross-border checkout | Shopify duties and import taxes, HS codes, country-of-origin fields, carrier/DDP support | Confirm supplier origin countries and duty handling |
| Shipping rules | Use platform rules plus supplier shipping data | Shopify shipping profiles, supplier shipping tables, carrier tracking tool | Confirm US and UK supplier coverage |
| Tracking | Centralize tracking updates | AfterShip, Track123, supplier tracking API, Shopify order status | Confirm supplier tracking quality |
| Returns | Use return workflow software if volume grows | Loop Returns, AfterShip Returns, ReturnGO, Shopify returns | Confirm return policy |
| Support | Use ecommerce-aware support desk | Gorgias, Zendesk, Intercom, Shopify Inbox for early stage | Confirm support channel preference |
| CRM | Store leads, customers, segments, consent, and lifecycle stage | Shopify Customers first, Klaviyo/Omnisend later | Confirm customer data and email strategy |
| Lead capture | Capture voluntary sign-ups and lead magnet requests | Shopify Forms, theme forms, Typeform later if quiz-heavy | Confirm first lead magnet |
| Email marketing | Use ecommerce lifecycle marketing | Klaviyo, Omnisend, Shopify Messaging/Email early stage | Confirm email/SMS budget |
| SMS marketing | Use only where legally and commercially justified | Klaviyo SMS, Attentive, Postscript | Confirm target countries and consent approach |
| Incentives and offers | Use margin-checked offers | Shopify discounts, automatic discounts, free shipping discounts, bundle app later | Confirm welcome offer and shipping thresholds after margin review |
| Reviews | Add review collection after fulfilment is stable | Judge.me, Loox, Yotpo, Okendo | Confirm review strategy |
| Analytics | Track ecommerce events from the start | GA4, Google Tag Manager, Meta Pixel/CAPI, TikTok Pixel, PostHog if product analytics needed | Confirm ad channels |
| Growth dashboard | Show CRM, conversion, offer, and product trend metrics clearly | Shopify analytics first, Looker Studio later, BigQuery later | Confirm dashboard depth |
| Product trend engine | Create monthly product opportunity reports | Google Trends, marketplace checks, social observation, supplier data, store search, email clicks, GA4 | Confirm monthly review cadence |
| Product feeds | Prepare feeds for shopping channels | Google Merchant Center, Meta Catalog, TikTok Catalog | Confirm sales channels |
| Accounting | Sync orders, fees, refunds, taxes, payouts | Xero, QuickBooks, A2X | Confirm accounting software |
| Data warehouse | Add when reporting needs exceed platform dashboards | BigQuery, Snowflake, Airbyte/Fivetran, custom exports | Confirm reporting ambition and budget |
| Automation | Use automation tools before over-customizing | Shopify Flow, Make, Zapier, n8n | Confirm preferred automation platform |
| Monitoring | Track backend and integration failures | Sentry, Better Stack, UptimeRobot, platform alerts | Confirm whether custom services will be hosted |
| Consent/privacy | Manage cookies and marketing consent | Shopify privacy tools, Cookiebot, OneTrust | Confirm target regions |

Definitions:
- Market intelligence: the process of collecting structured evidence about demand, competitors, prices, suppliers, and customer behavior.
- Multi-store management: the process of keeping several stores separate, comparable, and reusable without mixing records accidentally.
- PIM: product information management system; a tool for managing product data at scale.
- Manual review queue: a list of items that require a human decision before continuing.
- Lifecycle marketing: messages based on where the customer is in the buying journey.
- Product feed: structured product data sent to marketplaces or ad platforms.
- Data warehouse: a central reporting database that combines data from multiple systems.

## Recommended First Stack

Use this as the first working stack unless the user provides different integrations:

1. Shopify for commerce backend, product catalogue, checkout, orders, customer accounts, and US/UK market setup.
2. Shopify app or direct supplier feed for product import, inventory, and fulfilment.
3. Shopify Payments where available, or Stripe for custom payment flows.
4. Stripe Radar or platform fraud checks for risk screening.
5. Shopify Tax, Stripe Tax, Avalara, or TaxJar depending on country, US state nexus, UK VAT position, and scale.
6. Klaviyo or Omnisend for email lifecycle marketing.
7. Gorgias or Zendesk for customer support once order volume justifies it.
8. GA4, Google Tag Manager, Meta Pixel/CAPI, and TikTok Pixel for measurement.
9. Google Merchant Center and Meta Catalog for product feed distribution.
10. Xero or QuickBooks with A2X for accounting-grade reconciliation.
11. Sentry or Better Stack for custom backend monitoring if custom services are built.
12. Shopify Customers and Shopify Forms/Messaging first for CRM, lead capture, email, and customer segments.
13. Monthly trend intelligence process using Google Trends, marketplace checks, supplier checks, and store behaviour data.

Definition:
- Reconciliation-grade: accurate enough to match financial records across sales, fees, refunds, taxes, and payouts.

## Source Notes

These notes ground the current architecture assumptions:

- Shopify developer docs describe APIs for products, customers, orders, inventory, webhooks, storefronts, customer accounts, checkout extensions, and backend customization.
- Shopify help describes dropshipping as selling without handling inventory or shipping, while the merchant remains responsible for customer service and order tracking.
- Shopify help describes shipping profiles as product/location-based shipping rules.
- Shopify help describes refund flows, partial refunds, restocking, customer notifications, and transaction-fee considerations.
- Shopify help describes customer segments as dynamic, rule-based customer lists that can be used for targeted marketing.
- Shopify help describes discounts including discount codes, automatic discounts, percentage discounts, monetary discounts, buy-X-get-Y, and free shipping discounts.
- Shopify help describes Shopify Messaging as email/SMS marketing campaigns and marketing automations from Shopify admin.
- Stripe docs describe online payments, hosted checkout, advanced payment integrations, invoices, payment methods, and payment links.
- Stripe Radar docs describe real-time fraud evaluation, risk settings, rules, reviews, and fraud analytics.
- Stripe Tax docs describe tax calculation, registrations, filing/remittance, product tax codes, multi-country support, and threshold monitoring.
- Google Analytics docs recommend ecommerce events such as view item, add to cart, begin checkout, add payment info, purchase, and refund, and recommend DebugView or realtime reports for verification.
- Google Analytics docs include lead-generation events such as generate_lead and recommended ecommerce events such as add_to_cart, begin_checkout, purchase, refund, and select_promotion.
- Google Trends docs describe Trends data as normalized relative interest and warn it is one data point, not exact sales demand.

## Playbook Lesson

The goal is not to collect tools. The goal is to assign each business responsibility to the right system, then verify that data moves correctly between systems.
