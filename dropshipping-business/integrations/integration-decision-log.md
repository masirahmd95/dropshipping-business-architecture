# Integration Decision Log

## Purpose

This document records integration decisions for the dropshipping business.

Definition:
- Decision log: a running record of choices, reasons, risks, and next steps.

Use this file when the user provides preferred providers or account access.

## Current Status

No providers are final yet.

The current default architecture assumes a Shopify-centred commerce backend unless the user chooses another platform.

Definition:
- Commerce backend: the system that controls products, cart, checkout, customers, orders, payments, and fulfilment records.

## Decision Table

| Area | Status | Current Default | User Input Needed | Notes |
|---|---|---|---|---|
| Ecommerce platform | Pending | Shopify | Confirm platform and country | Affects nearly every other decision |
| Product compliance | Active rule | Generic/original football goods first; official goods only through authorized or affiliate routes | Provide supplier authorization evidence if pursuing official merchandise | Prevents IP, payment, platform, customs, and advertising risk |
| Supplier source | Pending | Supplier app or direct feed | Provide supplier names/apps | Drives product import, stock sync, and fulfilment |
| Payment provider | Pending | Shopify Payments or Stripe | Confirm account availability | Depends on country and store platform |
| Fraud controls | Pending | Platform fraud plus manual review | Confirm risk tolerance | Must run before supplier fulfilment |
| Tax | Pending | Shopify Tax, Stripe Tax, Avalara, or TaxJar | Confirm countries and accountant guidance | Tax varies by jurisdiction |
| Shipping/tracking | Pending | Supplier tracking plus tracking provider | Confirm target markets and suppliers | Tracking quality affects support load |
| Returns | Pending | Platform returns first, returns app later | Confirm return policy | Must match supplier policies |
| Support | Pending | Shopify Inbox early, Gorgias/Zendesk later | Confirm support channels | Email/chat/social choices matter |
| Email marketing | Pending | Klaviyo or Omnisend | Confirm budget and target countries | Consent rules matter |
| SMS marketing | Pending | Deferred until consent and country rules are clear | Confirm countries and SMS appetite | SMS can create compliance risk |
| Analytics | Pending | GA4, GTM, Meta CAPI, TikTok Pixel | Confirm ad channels | Needed before paid campaigns |
| Product feeds | Pending | Google Merchant Center, Meta Catalog | Confirm channels | Needed for shopping ads/catalog ads |
| Accounting | Pending | Xero or QuickBooks plus A2X if needed | Confirm accounting software | Needed for clean finance records |
| Data warehouse | Pending | Defer until reporting complexity justifies it | Confirm reporting ambition and budget | Useful after volume or multi-channel data grows |
| Monitoring | Pending | Platform alerts; Sentry/Better Stack if custom backend exists | Confirm custom services | Needed for hosted custom code |

Definitions:
- Jurisdiction: a country, state, or region with its own legal or tax rules.
- Consent: permission from a customer to use their data for a purpose such as marketing.
- CAPI: conversions API; a server-side way to send conversion events to an ad platform.

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

1. Product niche or product category.
2. Supplier names or supplier apps under consideration.
3. Countries to sell into first.
4. Ecommerce platform preference.
5. Payment provider account availability.
6. Accounting software preference.
7. Marketing channels planned for launch.
