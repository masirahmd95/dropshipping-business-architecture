# Customer Growth And CRM Architecture

## Purpose

This document defines the backend architecture for CRM, lead capture, email marketing, incentives, customer retention, and product trend intelligence.

Definitions:
- CRM: customer relationship management; the system for storing leads, customers, consent, preferences, purchases, support history, and marketing status.
- Lead: a person who has shown interest but has not bought yet.
- Conversion: turning a visitor or lead into a buyer.
- Retention: getting customers to come back after the first purchase.
- Incentive: a reason to take action, such as a discount, free PDF, free shipping threshold, or early product access.

Business meaning:
- The store should not wait for paid ads to create sales.
- It needs a backend that captures interest, stores permission, educates leads, presents offers, learns from behaviour, and feeds product selection.

## Core Decision

Use a low-cost CRM and marketing stack first:

```text
Shopify Customers
+ Shopify Forms or equivalent lead form
+ Shopify Messaging for early email
+ Shopify customer segments
+ GA4/GTM event tracking
+ structured trend and campaign records in repo/Sheets
+ optional Looker Studio dashboard later
```

Definition:
- Customer segment: a rule-based group of customers or leads, such as "US leads interested in hair accessories."
- Event tracking: recording actions such as sign-up, product view, add to cart, purchase, refund, and email click.

Upgrade later to Klaviyo, Gorgias, BigQuery, or a custom dashboard only when volume justifies it.

## Business Jobs This System Must Do

| Job | Backend Role |
|---|---|
| Capture leads | Store email, market, source, interest, consent, and incentive claimed |
| Deliver lead magnet | Send the free beauty tips PDF or checklist after sign-up |
| Convert first purchase | Send welcome sequence and first-purchase offer |
| Build trust | Send useful beauty routine, storage, travel, and care content |
| Sell weekly | Send weekly product newsletter with approved products only |
| Increase order value | Use bundles, free shipping thresholds, and large-order shipping incentives |
| Bring customers back | Use post-purchase, cross-sell, review, and winback flows |
| Choose new products | Feed monthly market trend reports into product validation |
| Monitor performance | Show simple dashboard numbers from complex backend data |

## Lead Capture Strategy

Lead capture should be voluntary and value-led.

Do not buy scraped email lists.

Definitions:
- Lead magnet: a useful free asset given in exchange for a sign-up, such as a PDF checklist.
- Scraped list: contact details copied from websites or platforms without direct permission.

Recommended lead magnets:

| Lead Magnet | Target Visitor | Product Connection |
|---|---|---|
| 7-Day Beauty Organization Reset PDF | Storage and routine shoppers | Organizers, brush cases, travel bags |
| Travel Beauty Packing Checklist | Travel buyers | Toiletry organizers, brush covers, cosmetic bags |
| Heatless Hair Routine Cheat Sheet | Hair accessory buyers | Heatless curl set, satin accessories, claw clips |
| Brush Cleaning And Replacement Calendar | Makeup tool buyers | Brush cleaning mat, reusable pads, brush covers |
| Morning Routine Mini Guide | Routine-led buyers | Headbands, wrist bands, scalp brush, puff sets |

Business rule:
- A lead magnet must connect naturally to products the store can actually sell.

## Lead Forms

Minimum form fields:
- Email.
- Country: US or UK.
- Main interest: hair, travel, organization, skincare routine, makeup tools.
- Consent checkbox for marketing.
- Source campaign.
- Lead magnet requested.

Optional later fields:
- Birthday month.
- Skin sensitivity preference.
- Hair type or routine type.
- Product interest quiz result.

Backend rule:
- Ask for the least data needed at first.
- More fields can increase targeting quality but reduce sign-up rate.

Definition:
- Sign-up rate: the percentage of visitors who submit a form.

## Email And Newsletter Strategy

Start with these email flows:

| Flow | Trigger | Business Job |
|---|---|---|
| Welcome and lead magnet | Lead signs up | Deliver free PDF, introduce store promise, offer first-purchase incentive |
| New customer discount | Lead joins list or creates account | Convert first order without over-discounting |
| Abandoned cart | Customer leaves checkout/cart | Recover revenue from interested visitors |
| Weekly product newsletter | Weekly schedule | Keep the store in mind and show approved products |
| New arrival alert | Product passes launch gates | Promote newly approved products |
| Post-purchase education | Order paid or delivered | Reduce support issues and teach proper product use |
| Review request | Delivery confirmed plus delay buffer | Collect proof after product arrives |
| Cross-sell and bundle | Customer buys from a category | Increase repeat order or second item purchase |
| Winback | No purchase for 60-90 days | Bring back dormant leads/customers |
| VIP/large order | High spend or cart value threshold | Encourage larger baskets with shipping or bundle incentives |

Definitions:
- Trigger: the event that starts an automation.
- Automation: a rule that sends or performs something automatically.
- Abandoned cart: when a visitor adds products to cart but does not complete checkout.
- VIP: a valuable customer group based on spend, order count, or engagement.

## Incentive Strategy

Use incentives carefully so discounts do not destroy margin.

Starting incentives:

| Incentive | Purpose | Backend Gate |
|---|---|---|
| Free beauty tips PDF | Capture leads before launch | Form, consent, email delivery |
| First purchase discount | Convert first buyers | Margin check and one-use customer rule |
| Free shipping threshold | Raise average order value | Shipping cost and margin review |
| Large order shipping discount | Encourage bigger baskets | Cart value and destination market rule |
| Bundle offer | Sell related products together | Bundle margin check |
| New arrival early access | Create urgency without heavy discounting | Product launch gate approved |

Definition:
- Average order value: the average amount customers spend per order.

Suggested thresholds are not final until supplier shipping and margin are known:
- US free shipping test band: USD 60-75.
- UK free shipping test band: GBP 50-65.

Business rule:
- No discount, free shipping, or bundle offer should go live until margin is checked by market.

## Customer Segments

Initial segments:

| Segment | Rule |
|---|---|
| US leads | Country is US, subscribed, no purchase yet |
| UK leads | Country is UK, subscribed, no purchase yet |
| Hair accessory interest | Interest contains hair |
| Travel beauty interest | Interest contains travel |
| Organization interest | Interest contains organization |
| First-time buyers | Order count equals 1 |
| Repeat customers | Order count greater than 1 |
| High-intent non-buyers | Signed up, clicked email, viewed product, no purchase |
| VIP candidates | High spend, repeat purchases, or high engagement |
| Dormant leads | Subscribed but no click or purchase for 60-90 days |

Backend rule:
- Segments must be rule-based, not manually guessed.

## Monthly Market Trend Engine

The store needs a monthly market trend process that feeds product selection.

Definition:
- Market trend engine: a repeatable process for collecting demand signals, scoring product opportunities, and recommending what to sample next.

Monthly sources:
- Google Trends and Trending Now.
- TikTok/social trend observations.
- Amazon bestseller/review movement.
- Shopify trend reports.
- Supplier availability and cost movement.
- Store search terms.
- Email clicks.
- Product page views.
- Add-to-cart rate.
- Customer support questions.
- Refund/return reasons.

Definitions:
- Add-to-cart rate: the percentage of product viewers who add the product to cart.
- Return reason: the explanation customers give when returning a product.

Monthly output:
- Top 20 product opportunities.
- Top 10 products to sample.
- Products to remove, pause, or reprice.
- Product categories gaining attention.
- Product categories losing attention.
- Content ideas for weekly newsletters.
- Compliance risks discovered.
- Supplier risks discovered.

## Dashboard Strategy

The backend should be analytical, but the owner-facing dashboard should be simple.

Definition:
- Dashboard: a visual screen showing important business numbers.

Dashboard panels:

| Panel | Shows |
|---|---|
| Growth snapshot | Visitors, leads, subscribers, first purchases, repeat purchases |
| Lead funnel | Visitor to form view to sign-up to first purchase |
| Email performance | Sends, opens, clicks, purchases, revenue, unsubscribe rate |
| Product trend score | Which products are rising, stable, or declining |
| Product opportunity map | Demand score vs margin score vs compliance difficulty |
| Market split | US vs UK leads, orders, revenue, conversion, AOV |
| Category share | Share of store revenue by category |
| Offer performance | Discount usage, free shipping threshold impact, bundle conversion |
| Customer retention | Repeat purchase rate, days since last purchase, winback response |
| Backend alerts | Missing consent, failed email delivery, risky products, low-margin offers |

Definition:
- Category share: the percentage of this store's sales or leads coming from one product category. It is not global market share unless an external market-size data source is added.

## Source Notes Checked On 2026-06-13

- FTC CAN-SPAM guide: https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business
- ICO right to be informed: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/the-right-to-be-informed/
- Shopify Messaging: https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-email
- Shopify customer segmentation: https://help.shopify.com/en/manual/customers/customer-segmentation
- Shopify discounts: https://help.shopify.com/en/manual/discounts
- Google Analytics recommended events: https://support.google.com/analytics/answer/9267735
- Google Trends FAQ: https://support.google.com/trends/answer/4365533
- Google Trends Trending Now: https://support.google.com/trends/answer/3076011

## Verification Checklist

Operational verification:
- Lead forms collect only useful fields.
- Marketing consent is stored before marketing emails are sent.
- Lead magnet delivery works.
- First-purchase incentive is one-use and margin-safe.
- Weekly newsletter uses only approved products.
- Trend report produces a product sample shortlist monthly.

Backend verification:
- CRM records connect lead, consent, segment, campaign, order, product interest, and incentive usage.
- Email events connect to GA4 and Shopify where possible.
- Discount rules are separated from pricing rules.
- Product trend records connect to product validation records.
- No scraped or purchased lists are imported.

Visual verification:
- Sign-up forms are clear on desktop and mobile.
- Consent wording is readable and not hidden.
- PDF delivery email looks professional.
- Weekly newsletter is readable on desktop and mobile.
- Dashboard uses simple cards, percentages, trend arrows, and alerts.
- Dashboard distinguishes internal category share from external market share estimates.

## Playbook Lesson

Marketing is not just sending emails. It is a customer data system. The business must store who the customer is, why they joined, what they clicked, what they bought, what incentive they used, and what products the market is moving toward.
