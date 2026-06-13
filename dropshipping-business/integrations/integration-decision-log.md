# Integration Decision Log

## Purpose

This document records integration decisions for the dropshipping business.

Definition:
- Decision log: a running record of choices, reasons, risks, and next steps.

Use this file when the user provides preferred providers or account access.

## Current Status

No paid providers or real accounts are final yet.

The current default architecture assumes a Shopify-centred commerce backend unless the user chooses another platform.

Definition:
- Commerce backend: the system that controls products, cart, checkout, customers, orders, payments, and fulfilment records.

## Decision Table

| Area | Status | Current Default | User Input Needed | Notes |
|---|---|---|---|---|
| Ecommerce platform | Working assumption | Shopify Basic | Confirm platform and account setup | Affects nearly every other decision |
| Launch markets | Confirmed | United States and United Kingdom | Confirm business legal country, tax/VAT approach, and supplier coverage | Makes country rules explicit before Shopify setup |
| Multi-store setup | Active rule | Three store tracks share one backend architecture with separate store configurations | Confirm whether stores will be separate Shopify accounts/domains later | Prevents a messy general store while reusing the same operating system |
| Market intelligence | Active rule | Validate niche using Amazon, AliExpress, TikTok Shop, Temu, Google Trends, and supplier signals before product import | Confirm whether paid tools such as Jungle Scout, Helium 10, AutoDS, or Similarweb are approved | Prevents choosing products from hype alone |
| Product compliance | Active rule | Beauty products are separated into simple accessories, skin-contact tools, cosmetics, electrical tools, and high-compliance products | Approve supplier document requirements and market-specific evidence | Prevents unsafe products, risky claims, payment issues, and platform problems |
| Supplier source | Active shortlist | DSers/CJdropshipping for simple accessories; Shopify Collective/affiliate routes for cosmetics and high-compliance goods | Approve supplier accounts and sample-order budget | Drives product import, stock sync, and fulfilment |
| Payment provider | Pending | Shopify Payments or Stripe | Confirm account availability | Depends on country and store platform |
| Fraud controls | Pending | Platform fraud plus manual review | Confirm risk tolerance | Must run before supplier fulfilment |
| Tax | Pending | Shopify Tax, Stripe Tax, Avalara, or TaxJar | Confirm US sales tax, UK VAT, and accountant guidance | Tax varies by jurisdiction |
| Duties and import taxes | Pending | Shopify duties/import settings where available | Confirm HS codes, country of origin, supplier origin, and DDP/DAP approach | Border charges affect margin and customer trust |
| Shipping/tracking | Pending | Supplier tracking plus tracking provider | Confirm US and UK supplier coverage | Tracking quality affects support load |
| Returns | Pending | Platform returns first, returns app later | Confirm return policy | Must match supplier policies |
| Support | Pending | Shopify Inbox early, Gorgias/Zendesk later | Confirm support channels | Email/chat/social choices matter |
| CRM | Active rule | Shopify Customers first, Klaviyo/Omnisend later if justified | Confirm lead fields and customer segments | Stores leads, customers, consent, interests, and lifecycle stage |
| Lead capture | Active rule | Shopify Forms/native forms first | Confirm first lead magnet | Captures voluntary signups without buying lists |
| Email marketing | Pending | Klaviyo or Omnisend | Confirm budget and target countries | Consent rules matter |
| SMS marketing | Pending | Deferred until consent and country rules are clear | Confirm countries and SMS appetite | SMS can create compliance risk |
| Incentives/offers | Active rule | Shopify discounts with margin gates | Confirm welcome discount and shipping threshold after pricing review | Prevents discounts from destroying margin |
| Analytics | Pending | GA4, GTM, Meta CAPI, TikTok Pixel | Confirm ad channels | Needed before paid campaigns |
| Product trend engine | Active rule | Monthly manual report first | Confirm monthly review date and data sources | Feeds new product selection with evidence |
| Growth dashboard | Active rule | Shopify analytics/scorecards first, Looker Studio later | Confirm dashboard depth | Makes complex backend data easy to interpret |
| Product feeds | Pending | Google Merchant Center, Meta Catalog | Confirm channels | Needed for shopping ads/catalog ads |
| Accounting | Pending | Xero or QuickBooks plus A2X if needed | Confirm accounting software | Needed for clean finance records |
| Data warehouse | Pending | Defer until reporting complexity justifies it | Confirm reporting ambition and budget | Useful after volume or multi-channel data grows |
| Monitoring | Pending | Platform alerts; Sentry/Better Stack if custom backend exists | Confirm custom services | Needed for hosted custom code |
| Cheapest scalable stack | Working assumption | Shopify Basic, Shopify Markets, DSers/CJdropshipping, Shopify Payments, Shopify Tax, GA4, GTM, TikTok Pixel, Meta Pixel, Shopify Messaging/Email, Shopify Inbox | Confirm account setup | Keeps launch cost low without blocking scale |

Definitions:
- Jurisdiction: a country, state, or region with its own legal or tax rules.
- Consent: permission from a customer to use their data for a purpose such as marketing.
- CAPI: conversions API; a server-side way to send conversion events to an ad platform.
- Hype: short-term attention that may not become profitable demand.
- Store configuration: the rules and settings that make one store different while using the same backend architecture.

## Decision Record Template

Use this format when making a final choice:

```text
Decision:
Area:
Chosen provider:
Reason:
Business benefit:
Data exchanged:
Risks:
Fallback:
Verification checklist:
Playbook lesson:
```

Definition:
- Fallback: the backup plan if the chosen provider fails or becomes unsuitable.

## Next User Inputs Needed

1. Business legal country and trading setup.
2. Ecommerce platform approval, currently Shopify Basic recommended.
3. US sales tax and UK VAT handoff to accountant or tax adviser.
4. First lead magnet choice, currently `7-Day Beauty Organization Reset` recommended.
5. Welcome discount and free-shipping threshold after margin review.
6. Supplier app/account approval for DSers, CJdropshipping, or alternatives.
7. Sample-order budget for first launch products.
8. Payment provider account availability.
9. Accounting software preference.
10. Marketing channels planned for launch.
