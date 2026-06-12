# Backend Planning Prompts

## Purpose

These prompts help direct Codex when planning backend architecture.

Definition:
- Prompt: an instruction given to Codex.

## Master Backend Architecture Prompt

```text
Act as my backend business architect for a dropshipping business.

I am not a developer. Define technical terms in plain English.

Design the backend architecture before branding.

Cover:
- product catalogue
- supplier management
- inventory sync
- pricing and margin rules
- checkout
- payments
- fraud
- tax
- order management
- supplier order routing
- fulfilment and tracking
- returns and refunds
- customer support
- email and SMS marketing automation
- analytics and attribution
- accounting and finance exports
- compliance
- security
- monitoring
- operational alerts

For each area, explain:
- business purpose
- data involved
- integrations needed
- business rules
- failure cases
- verification checklist
- whether it should use existing tools, custom code, or both

Do not write implementation code yet.
```

## Integration Decision Prompt

```text
Create an integration decision matrix for this dropshipping business.

For each integration category, include:
- purpose
- recommended provider options
- what account or credential the user must provide
- what data moves through the integration
- business risks
- verification steps

Define all technical terms.
Flag decisions that depend on country, supplier, payment account, tax obligations, or budget.
```

## Data Model Prompt

```text
Design the data model for the dropshipping business.

Include products, variants, suppliers, supplier products, inventory snapshots, price rules, customers, carts, orders, order lines, payments, fraud reviews, supplier orders, shipments, returns, refunds, support tickets, marketing events, analytics attribution, and accounting exports.

Explain every record in plain English.
Show how records connect.
List data quality rules.
Do not write code yet.
```

## Verification Prompt

```text
Create a verification plan for the dropshipping backend.

Include:
- operational verification
- backend tidiness verification
- visual verification
- failure cases

Test product import, price rules, inventory sync, checkout, payment success, payment failure, fraud review, supplier routing, tracking updates, returns, refunds, support tickets, analytics events, and accounting exports.

Explain the checks in plain English.
```
