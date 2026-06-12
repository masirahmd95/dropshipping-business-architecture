# Multi-Store Architecture Method

## Purpose

This method explains how to run several niche stores from one reusable business architecture.

Definition:
- Reusable business architecture: a repeatable system design that can be copied into new businesses with controlled changes.

## Core Principle

Use the same backend blueprint, but do not pretend every store is operationally identical.

The shared backend should control:

- How products are researched.
- How suppliers are approved.
- How products pass compliance.
- How orders, payments, tracking, returns, support, analytics, and accounting work.

The store profile should control:

- What products are allowed.
- What product attributes are required.
- What claims are blocked.
- What visual checks are needed.
- What customer language is appropriate.

Definition:
- Backend blueprint: the reusable plan for data, workflows, integrations, and verification.

## Step 1: Create A Store ID

Every store needs a clear internal code.

Example:

```text
home_kitchen_utility
beauty_accessories
pet_accessories
```

Definition:
- Internal code: a plain identifier used inside systems, files, reports, and records.

## Step 2: Create A Store Profile

The store profile should define:

- Working store type.
- Status.
- Product lanes.
- Required product attributes.
- Blocked product types.
- Store-specific compliance rules.
- Product candidate examples.
- Verification rules.

Definition:
- Store profile: a document or record that explains what one store is, what it sells, what it avoids, and how it is verified.

## Step 3: Add Store Fields To The Data Model

Every important record should include:

- `store_id`
- `store_type`
- `store_status`
- `store_configuration_version`

Definition:
- Store field: a data field used to keep one store's products, orders, customers, events, and reports separate from another store's.

## Step 4: Share The Workflow

Each store should follow the same workflow:

```text
Market signal
-> product candidate
-> supplier review
-> sample order
-> compliance review
-> product approval
-> catalogue import
-> visual verification
-> test launch
```

Definition:
- Test launch: a limited launch used to check whether the business works before spending heavily on marketing.

## Step 5: Separate The Risk Rules

Different niches have different risk patterns:

| Store Type | Risk Pattern |
|---|---|
| Home/kitchen utility | Food-contact claims, dimensions, material quality, breakage |
| Beauty accessories | Hygiene, skin-contact claims, before/after content, medical claims |
| Pet accessories | Choking risk, chew risk, pet size, supervision guidance |

Definition:
- Risk pattern: the common things that can go wrong in a specific business or product category.

## Step 6: Keep Reporting Comparable

Use the same KPI names across every store:

- Revenue.
- Gross margin.
- AOV.
- CAC.
- ROAS.
- Refund rate.
- Return rate.
- Supplier defect rate.
- Delivery time.
- Support tickets per order.

Definition:
- KPI: key performance indicator; a number used to judge how well a business function is performing.
- Supplier defect rate: the percentage of supplier-fulfilled orders with quality, fulfilment, tracking, or delivery problems.

## Step 7: Decide Whether To Split Repositories Later

Start in one repository while designing the shared architecture.

Split into separate repositories when:

- A store becomes a real build.
- It needs its own codebase, theme, app, or deployment process.
- Different collaborators need access to different stores.
- The store is ready to become a standalone portfolio example.

Definition:
- Repository: a tracked project folder, usually managed with Git, containing files and change history.

## Codex Prompt

Use this prompt when creating a new store track:

```text
Create a store profile for this dropshipping niche using the shared backend architecture. Define all technical terms. Include store ID, status, product lanes, required product attributes, blocked product types, store-specific compliance rules, product candidate examples, backend tidiness checks, operational verification, and visual verification. Keep branding deferred unless I explicitly ask for it.
```
