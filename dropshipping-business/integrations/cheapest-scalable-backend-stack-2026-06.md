# Cheapest Scalable Backend Stack - June 2026

## Purpose

This document records the cheapest serious backend stack for launching the beauty dropshipping store without blocking future scale.

Definition:
- Backend stack: the set of tools that run the hidden operations of the business.

Business meaning:
- The goal is not to buy the most software.
- The goal is to start with enough infrastructure to sell safely, track performance, support customers, and scale later.

## Decision

Use a Shopify-centered backend with low-cost native tools first, then upgrade only when volume justifies it.

Definition:
- Native tool: a tool already built into the main platform or officially connected to it.

## Recommended Starting Stack

| Business Function | Starting Tool | Why This Is The Cheapest Serious Choice | Upgrade Trigger |
|---|---|---|---|
| Commerce backend | Shopify Basic | Products, checkout, orders, payments, tax settings, app ecosystem, and scale path | Upgrade to Grow when staff/team or fee economics justify it |
| US and UK market setup | Shopify Markets | Lets the same store support US and UK market rules, currency, shipping, tax, and checkout presentation | Upgrade only if multi-store or localization complexity outgrows one Shopify setup |
| Supplier import and fulfilment | DSers and CJdropshipping test routes | Free or low-cost entry and strong Shopify app presence | Add AppScenic/Syncee/Spocket when supplier quality or shipping region requires it |
| Authorized no-inventory products | Shopify Collective where eligible | Brand-direct route without buying stock | Use direct brand partnerships when store has traction |
| High-compliance product testing | TikTok Shop affiliate or Amazon Associates | Tests demand without direct compliance burden | Direct sale only after product file and authorization proof |
| Payments | Shopify Payments if available | Reduces third-party complexity and supports Shopify features | Stripe/custom route only if platform or country requires it |
| Tax | Shopify Tax settings first | Built into Shopify and adequate for early controlled launch | Avalara/TaxJar/accountant-led setup when multi-state/country complexity grows |
| Duties and import taxes | Shopify duties/import settings where available, with HS code and country-of-origin fields | Reduces surprise costs and supports US/UK cross-border checkout planning | Add customs broker or specialist app if cross-border complexity grows |
| Fraud | Shopify fraud analysis plus manual review rules | Built into commerce flow | Add stricter rules when chargeback risk rises |
| Analytics | Shopify analytics, GA4, Google Tag Manager | Low-cost measurement foundation | Add data warehouse when reporting becomes multi-channel and manual |
| Paid social tracking | TikTok Pixel and Meta Pixel | Required before social ads | Add server-side tracking later if ad scale justifies it |
| Product feeds | Google Merchant Center, Meta Catalog, TikTok Catalog | Needed for shopping/social catalog distribution | Add feed-management app if catalog complexity grows |
| Email | Shopify Messaging/Email first | Low-cost early lifecycle messaging | Klaviyo when segmentation and revenue justify it |
| CRM | Shopify Customers first | Already tied to orders, segments, consent, and Shopify marketing | Add Klaviyo/Omnisend CRM depth when lifecycle revenue justifies it |
| Lead capture | Shopify Forms or native theme forms | Low-cost way to collect email, market, interest, and consent | Add Typeform/quiz app only if quizzes materially improve conversion |
| Incentives | Shopify discounts | Supports percentage, fixed, buy-X-get-Y, and free shipping discount paths | Add bundle/loyalty app only after offer performance is proven |
| Support | Shopify Inbox first | Low-cost customer support | Gorgias/Zendesk when support volume grows |
| Reviews | Judge.me or Shopify-compatible review app later | Reviews matter after fulfilment is reliable | Add after first orders and delivery proof |
| Accounting | Shopify exports first | Avoids monthly cost before sales | QuickBooks/Xero plus A2X when payouts/fees/refunds become hard to reconcile |
| Automation | Shopify Flow if plan allows, otherwise manual SOPs and Make/Zapier later | Avoids premature automation spend | Add Make/Zapier/n8n after repeated manual tasks appear |
| Monthly trend engine | Manual monthly report first | Cheapest way to combine Google Trends, social, marketplace, supplier, and store signals | Automate when repeated reporting takes too much time |
| Growth dashboard | Shopify analytics plus structured scorecards first | Avoids custom dashboard cost before real data exists | Add Looker Studio/BigQuery when multi-source reporting becomes painful |
| Monitoring | Shopify/admin alerts first | No custom backend yet | Sentry/Better Stack when custom code or hosted services exist |

Definitions:
- Manual review rule: a rule that sends an order or product to a human before continuing.
- Data warehouse: a central reporting database combining data from many systems.
- SOP: standard operating procedure; a written repeatable process.

## Integrations Not Needed On Day One

Do not add these until there is a clear business reason:
- Data warehouse.
- Custom app.
- Advanced returns app.
- Advanced support desk.
- SMS marketing.
- Enterprise tax software.
- Paid product research tools.
- Complex automation platform.
- Custom CRM.
- Custom dashboard.
- Paid quiz app.
- Loyalty app.

Business reason:
- Extra tools create cost, setup work, data mess, and maintenance before the business has proved demand.

## Integration Data Flow

```text
Supplier apps
-> Shopify products and inventory
-> Shopify checkout and orders
-> Payment and fraud checks
-> Supplier fulfilment
-> Tracking updates
-> Customer notifications
-> Analytics and marketing events
-> CRM segments and lifecycle emails
-> Lead magnet and incentive records
-> Support and refund records
-> Accounting export
-> Monthly trend report
```

Definition:
- Data flow: the path information follows through the business systems.

## User Inputs Needed Before Account Setup

Before live setup, confirm:
- First launch countries: United States and United Kingdom are now confirmed.
- Business legal name and country.
- Shopify account email.
- Payment provider availability.
- Tax and VAT registration approach.
- Duties/import-tax approach for cross-border fulfilment.
- Supplier app accounts.
- First lead magnet.
- Welcome discount and free-shipping threshold after margin review.
- Email sender details and unsubscribe approach.
- Sample order budget.
- Domain preference later.
- Accounting software preference later.

No secrets should be committed to this repository.

Definition:
- Secret: private access information such as passwords, API keys, tokens, or payment credentials.

## Verification Checklist

Operational verification:
- Every starting tool has a business function.
- US and UK are represented as separate backend markets.
- No paid upgrade is added without trigger.
- Supplier tools are matched to product risk.
- High-compliance products use affiliate or authorized route.
- CRM, lead capture, and email marketing are covered without buying unnecessary software.
- Incentives have margin gates.
- Monthly trend engine has a repeatable source list and scoring method.

Backend verification:
- Each system owns a clear responsibility.
- Data flow is documented.
- Market config files exist for US and UK.
- Product records include US and UK eligibility fields.
- Product records include HS code and country-of-origin requirements where needed.
- No duplicate tools are chosen for the same job without reason.
- No credentials are stored in files.

Visual verification:
- Shopify admin, product pages, checkout, emails, and support views must be checked when configured.
- Tracking pixels must not affect visible layout.
- Product feed output must show correct images, titles, prices, and availability.

## Reusable Codex Prompt

```text
Choose the cheapest scalable backend stack for this ecommerce business. Define terms in plain English. Map each business function to a starting tool, explain why it is enough for launch, define upgrade triggers, show data flow, list user inputs needed, and include operational/backend/visual verification.
```
