# US And UK Backend Setup Method

## Purpose

This method explains how to turn a country launch decision into backend architecture.

Definition:
- Country launch decision: choosing where customers are allowed to buy from the store.
- Backend architecture: the records, rules, tools, workflows, and checks that make the business operate.

## Core Lesson

A country is not just a shipping option.

Each launch market changes:
- Currency.
- Tax.
- Duties.
- Shipping promises.
- Returns.
- Product safety.
- Compliance.
- Product-page wording.
- Reporting.
- Customer support.

## Step 1: Create Market Records

Create one record per launch market.

Minimum fields:
- Market ID.
- Country or region.
- Currency.
- Tax model.
- Duties/import rule.
- Shipping promise.
- Product safety rule.
- Returns/cancellation rule.
- Source links.
- Review date.

Definition:
- Market record: a structured entry that stores how the business behaves in one country or region.

## Step 2: Add Product Eligibility By Market

Every product should be allowed, blocked, affiliate-only, or prepare-only for each market.

Example:

| Product | US | UK |
|---|---|---|
| Travel organizer | Approved after sample | Approved after sample |
| Lip oil | Prepare only | Prepare only |
| Heated eyelash curler | Prepare only | Prepare only |

Definition:
- Affiliate-only: the business refers the customer to another authorized seller instead of selling the product directly.

## Step 3: Add Customs Fields

For cross-border ecommerce, products need customs data.

Minimum fields:
- HS code.
- Country of origin.
- Declared value.
- Product category.

Definition:
- Customs data: information used by border authorities and carriers when goods move between countries.

## Step 4: Price By Market

Do not simply convert one price into another currency.

Market price should consider:
- Supplier cost.
- Shipping cost.
- Payment fees.
- Duties and import taxes.
- VAT or sales tax treatment.
- Competitor price floor.
- Return buffer.
- Customer expectations.

Definition:
- Return buffer: a margin allowance for refunds, defects, or returns.

## Step 5: Build Product Gates

Use gates to stop risky products.

Common gates:
- Product file exists.
- Sample passed.
- Supplier route approved.
- Market eligibility approved.
- Pricing approved.
- Claims approved.
- Visual verification passed.

## Step 6: Build Order Routing Rules

Before an order goes to a supplier, check:
- Payment.
- Fraud risk.
- Destination market.
- Product eligibility.
- Supplier availability.
- Shipping promise.
- Customs data.

Definition:
- Order routing: deciding which supplier should receive the order and whether it is safe to send.

## Step 7: Verify Three Ways

Operational verification:
- The business process works.

Backend verification:
- Records, statuses, and rules are tidy.

Visual verification:
- Customer and staff screens show the correct information.

## Reusable Codex Prompt

```text
Turn this ecommerce launch-country decision into backend setup. Define terms in plain English. Create market records, product eligibility fields, customs fields, pricing rules, product gates, order-routing rules, integration setup status, and operational/backend/visual verification. Do not include secrets.
```

## Reusable Lesson

The earlier the backend separates country rules, the easier it becomes to add more markets later without confusing tax, shipping, compliance, support, and reporting.
