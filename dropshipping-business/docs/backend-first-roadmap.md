# Backend-First Roadmap

## Purpose

This roadmap sets the build order for the dropshipping business.

Definition:
- Roadmap: a planned sequence of work.

The goal is not to create a basic store first and fix operations later. The goal is to design the operating system first so the store can scale cleanly.

## Phase 1: Architecture Foundation

Business outcome:
- Know exactly what the backend must do before choosing tools or building screens.

Work:
- Define backend functions.
- Define integration categories.
- Define core data model.
- Define core workflows.
- Define market trend scouting process before final niche selection.
- Define three separate store tracks with one shared backend architecture.
- Define product-compliance rules for licensed, generic, original, affiliate, and blocked products.
- Define verification standards.

Definition:
- Data model: the plan for what information the system stores and how records connect.

## Phase 2: Integration Decisions

Business outcome:
- Choose which systems will handle commerce, suppliers, payments, tax, marketing, support, analytics, and accounting.

Work:
- Confirm ecommerce platform.
- Confirm whether the three store tracks become separate Shopify stores, one Shopify store with collections, or separate builds later.
- Confirm supplier sources.
- Confirm market intelligence sources for Amazon, AliExpress, TikTok Shop, Temu, Google Trends, and supplier research.
- Confirm whether products are generic, original, authorized licensed goods, affiliate products, or blocked goods.
- Confirm payment setup.
- Confirm tax and compliance approach.
- Confirm marketing, support, analytics, and accounting tools.
- Confirm CRM, lead capture, email, incentive, and trend dashboard approach.

Definition:
- Integration: a connection between two systems, such as the store and a payment provider.

Current beauty-store output:
- Cheapest scalable stack selected as a working assumption: Shopify Basic, DSers/CJdropshipping sample routes, Shopify Payments where available, Shopify Tax settings, Shopify analytics, GA4, GTM, TikTok Pixel, Meta Pixel, Shopify Messaging/Email, and Shopify Inbox.
- United States and United Kingdom are now confirmed as the first launch markets.
- US and UK backend setup files now define market records, product gates, pricing rules, order routing rules, integration status, and verification checks.
- Customer growth setup now defines CRM records, lead magnets, weekly newsletter strategy, incentives, lifecycle email flows, monthly trend intelligence, and dashboard requirements.
- Paid and credential-dependent setup still requires user-controlled account creation.

## Phase 3: Data And Workflow Design

Business outcome:
- Ensure every important business event creates usable records.

Work:
- Product and supplier records.
- Product compliance review records.
- Inventory sync rules.
- Price and margin rules.
- Order lifecycle.
- Fulfilment lifecycle.
- Refund and return lifecycle.
- Customer communication events.
- Analytics events.
- CRM and consent records.
- Lead capture and lead magnet records.
- Incentive and discount records.
- Email campaign and email event records.
- Monthly trend report and product opportunity records.

Definition:
- Lifecycle: the full journey of something from start to finish, such as an order from checkout to delivery.

Current beauty-store output:
- Product validation data model created.
- Product validation to launch workflow created.
- Product file index and sample order plan created for the first launch basket.
- Core data model now includes market, market eligibility, market price, and tax/duties decision records.
- Customer growth data model created.
- Lead-to-customer lifecycle workflow created.
- Monthly product trend intelligence workflow created.

## Phase 4: Backend Implementation

Business outcome:
- Build or configure the hidden system that runs the business.

Work:
- Store platform setup.
- Supplier import and sync.
- Payment and fraud flow.
- Tax and shipping rules.
- Order routing.
- Tracking updates.
- Support ticket routing.
- Marketing automation triggers.
- Lead magnet delivery.
- Weekly newsletter setup.
- CRM customer segments.
- Offer and discount guardrails.
- Monthly trend report process.
- Reporting dashboard.

Definition:
- Trigger: an event that starts another action, such as payment success triggering order routing.

Current next implementation gate:
- Create Shopify account and supplier test accounts outside Git.
- Configure US and UK market setup from `../backend-config/`.
- Configure CRM, lead capture, consent, email, incentive, and trend dashboard setup from `../backend-config/`.
- Order first sample batch.
- Fill product files with real evidence.
- Only then prepare Shopify product import and product-page visual verification.

## Phase 5: Verification

Business outcome:
- Prove the system works, stays tidy, and looks right.

Work:
- Operational verification.
- Backend verification.
- Visual verification.
- Failure case testing.

Definition:
- Failure case: a situation where something goes wrong, such as stockout, payment decline, or supplier API outage.

## Phase 6: Customer Experience And Branding

Business outcome:
- Turn the working business machine into a trustworthy customer-facing brand.

Work:
- Storefront content and layout.
- Product pages.
- Checkout experience.
- Transactional emails.
- Visual identity.
- Brand guidelines.

Definition:
- Transactional email: an email sent because of a customer action, such as order confirmation, shipping update, or refund confirmation.
