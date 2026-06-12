# AGENTS.md

## Project Purpose

This workspace has two connected tracks:

1. Build a real dropshipping business architecture.
2. Create a plain-English business architecture playbook while building it.

The business build and the playbook must be developed side by side. Each practical architecture decision for the dropshipping business should also produce reusable playbook knowledge, prompts, checklists, or definitions.

Definitions:
- Dropshipping: an ecommerce model where the store sells products but a supplier ships the products directly to the customer.
- Architecture: the design of how the system parts connect and work together.
- Backend: the hidden part of the system that handles data, business rules, integrations, automation, payments, orders, inventory, and operations.
- Playbook: a reusable guide that explains the method clearly enough to repeat it for another business.

## User Profile

The user has a business and economics background and is not a software developer.

Always:
- Explain technical terms in plain English when they first appear.
- Explain what each technical decision does for the business.
- Focus on system function, data movement, business rules, and operational consequences.
- Avoid low-level coding detail unless it is necessary for decision-making.
- Keep explanations practical and direct.

Do not assume the user knows developer vocabulary.

## Core Working Rule

Build the dropshipping business as the primary case study, and document the reusable method in the playbook as work progresses.

Every major output should answer two questions:

1. What does this do for the dropshipping business?
2. What reusable lesson belongs in the playbook?

## Business Direction

The chosen business model is dropshipping.

The user wants advanced, sophisticated, scalable architecture from the start, with no important backend function or integration skipped.

Backend comes first. Branding comes last.

Definitions:
- Scalable: able to handle more products, customers, suppliers, orders, countries, channels, and automation without needing to rebuild the system from scratch.
- Integration: a connection between this business system and another service, such as a payment provider, supplier platform, email tool, analytics system, or accounting system.
- Backend-first: designing data, operations, rules, and integrations before visual branding or front-end polish.

## Architecture Priorities

Prioritize the following backend domains before branding:

1. Product catalogue and product data
2. Supplier management
3. Inventory and availability tracking
4. Pricing and margin rules
5. Storefront platform and checkout
6. Customer accounts and identity
7. Cart, checkout, payments, fraud controls, and tax
8. Order management
9. Supplier order routing
10. Shipping, tracking, and delivery notifications
11. Returns, refunds, disputes, and chargebacks
12. Customer support and ticketing
13. Email, SMS, and lifecycle marketing automation
14. Analytics, attribution, reporting, and dashboards
15. Accounting, bookkeeping, and finance exports
16. Data warehouse or central reporting model when justified
17. Compliance, privacy, consent, cookies, and data retention
18. Security, access control, secrets management, and audit trails
19. Monitoring, error tracking, uptime, and operational alerts
20. Admin workflows and internal operating procedures

Definitions:
- Product catalogue: the structured list of products sold by the store.
- Supplier management: tracking who supplies products, their costs, terms, shipping times, and reliability.
- Margin: the difference between selling price and cost, before or after fees depending on context.
- Attribution: identifying which marketing source caused a visit, lead, or sale.
- Audit trail: a record of important actions so the business can see what changed, when, and by whom.

## Integration Philosophy

Use a sophisticated hybrid architecture:

- Use proven external services where they reduce risk, especially payments, tax, email delivery, analytics, fulfilment, support, and accounting.
- Use custom code or custom workflows where the business needs a unique advantage, unified dashboard, automation, data model, or supplier logic.
- Do not choose integrations blindly. Recommend options, explain tradeoffs, and ask the user to provide or approve specific providers before implementation that depends on accounts, credentials, or paid services.

Definitions:
- Hybrid architecture: a system that combines existing tools with custom-built components.
- Provider: a company or service that supplies a function, such as Stripe for payments or Klaviyo for ecommerce email marketing.
- Credentials: private login details, API keys, tokens, or secrets that let software access an account.

## Secrets And Credentials

Never place secrets in committed files or plain documentation.

Examples of secrets:
- API keys
- access tokens
- passwords
- payment provider secret keys
- supplier account credentials
- database passwords

Use `.env.example` for placeholder names only when a software repo is created. Do not include real secret values.

Definition:
- Environment variable: a configuration value supplied outside the code, often used for private settings such as API keys.

## Playbook Requirements

The playbook should become a step-by-step guide for creating business architecture for many business types.

For this dropshipping project, document:

- Definitions of technical and business-system terms
- Backend architecture decisions
- Integration decision records
- Data models
- Business logic
- Operational workflows
- Codex prompts
- Verification checklists
- Client-facing templates when useful

Definitions:
- Data model: the plan for what information the system stores and how records relate.
- Business logic: the rules that tell the system what should happen.
- Verification checklist: a list of checks proving that a workflow works correctly.
- Decision record: a short note explaining what was decided and why.

## Suggested Repository Shape

When creating files, keep the business and playbook separate but connected:

```text
dropshipping-business/
  docs/
  backend-architecture/
  integrations/
  operations/
  data-models/
  workflows/

business-architecture-playbook/
  glossary/
  learning/
  architecture-patterns/
  codex-prompts/
  client-delivery/
  examples/
    dropshipping/
```

Definitions:
- `docs`: documentation for how the system works.
- Workflow: a repeatable sequence of actions, such as order placed, payment captured, supplier order sent, tracking received, customer notified.
- Example: a worked case study that makes the playbook concrete.

## Content Standards

Every meaningful document should include, where relevant:

- Purpose
- Key definitions
- Business context
- Architecture or workflow explanation
- Data involved
- Integrations involved
- Business rules
- Risks and tradeoffs
- Verification checklist
- Reusable Codex prompts

Keep private learning material separate from polished client-facing material.

## Backend Build Standards

Before implementing any backend function, define:

1. Business outcome
2. Users or systems involved
3. Data created, read, updated, or deleted
4. Trigger event
5. Business rules
6. Integration dependencies
7. Failure cases
8. Verification method
9. Playbook lesson

Definitions:
- Trigger event: something that starts a workflow, such as an order being paid.
- Failure case: a situation where something goes wrong, such as payment failure, supplier stockout, or shipping delay.

## Dropshipping Core Workflows

Treat these workflows as required until explicitly ruled out:

- Product import and product enrichment
- Supplier price and stock sync
- Customer account creation
- Cart and checkout
- Payment authorization and capture
- Fraud screening
- Tax calculation
- Order creation
- Supplier order routing
- Fulfilment tracking
- Customer order status notifications
- Returns and refund handling
- Support ticket creation
- Abandoned cart recovery
- Post-purchase email flows
- Review request flow
- Analytics and attribution capture
- Revenue, margin, and order reporting
- Accounting export or integration

Definitions:
- Product enrichment: improving supplier product data with better titles, descriptions, images, categories, and attributes.
- Stock sync: keeping store inventory aligned with supplier availability.
- Payment authorization: checking that a payment method can be charged.
- Payment capture: actually taking the money.
- Fraud screening: checking whether an order may be risky or fake.
- Fulfilment: the process of getting an order shipped to the customer.
- Abandoned cart: when a customer adds products to cart but does not complete checkout.

## Verification Standards

A workflow is not complete until it has a verification checklist.

Verification must cover three dimensions:

1. Operational verification: the business workflow works correctly.
2. Backend verification: the hidden system remains tidy, understandable, maintainable, and safe to extend.
3. Visual verification: customer-facing and staff-facing screens look accurate, professional, and consistent with the intended design.

Definitions:
- Operational verification: checking that the business outcome works, such as order paid, supplier notified, and customer updated.
- Backend verification: checking that data models, business rules, integrations, logs, errors, and internal structure are clean and reliable.
- Visual verification: checking the appearance of pages, dashboards, forms, emails, receipts, and admin screens.
- Maintainable: easy for Codex or a future developer to understand, modify, and test without unnecessary confusion.

For dropshipping, verify at least:

- Product data imports correctly.
- Product price and margin rules apply correctly.
- Stock changes do not allow overselling.
- Checkout creates the correct order records.
- Payment success and payment failure behave differently.
- Supplier order routing works.
- Tracking updates reach the customer.
- Refunds and returns update finance and customer records.
- Analytics records the right source, campaign, product, order, and revenue data.
- Admin dashboards show accurate operational data.
- Backend modules are organized by responsibility and do not mix unrelated concerns.
- Data names, file names, and workflow names are clear enough to explain in plain English.
- Duplicate logic is avoided unless there is a clear reason.
- Errors are logged clearly and do not silently fail.
- Admin screens, customer pages, checkout flows, transactional emails, receipts, and dashboards are visually checked before being considered complete.
- Visual checks include layout, spacing, mobile responsiveness, readable text, correct data display, empty states, loading states, and error states.

Definition:
- Overselling: selling a product that is not actually available from the supplier.
- Empty state: what a screen shows when there is no data yet, such as no orders or no support tickets.
- Loading state: what a screen shows while data is still being fetched or processed.
- Error state: what a screen shows when something fails, such as payment decline or unavailable supplier data.

## Communication Format

When explaining decisions to the user:

1. Start with the business meaning.
2. Define technical terms.
3. Explain the system role.
4. Show how it connects to other parts.
5. Give the next practical step.

Keep final answers concise unless the user asks for depth.

## Branding Rule

Branding is the final major phase, not the first phase.

Before branding, establish:

- Business model
- Product strategy
- Backend architecture
- Supplier and fulfilment logic
- Data and reporting model
- Customer operations
- Marketing automation requirements
- Integration choices
- Verification plan

Definitions:
- Branding: the visual and verbal identity of the business, including name, logo, colours, typography, tone, and creative direction.
- Product strategy: the logic for what products to sell, to whom, why they buy, and how the store differentiates itself.
