# Account Setup Checklist

## Purpose

This checklist defines what must be prepared before creating or connecting live business accounts.

Definition:
- Account setup: creating or configuring external services such as Shopify, supplier apps, payment providers, analytics tools, and email tools.

Business meaning:
- Codex can design the architecture and prepare setup instructions.
- The business owner must control real accounts, billing, passwords, payment details, and legal identity.

## No-Secrets Rule

Never commit private account information to Git.

Definition:
- Secret: private access information such as a password, API key, payment credential, token, or account recovery code.

Do not commit:
- Passwords.
- API keys.
- Supplier account credentials.
- Payment provider secret keys.
- Tax account credentials.
- Recovery codes.
- Bank details.

## Setup Order

| Order | Account Or Tool | Owner Action Needed | Codex Output Needed |
|---:|---|---|---|
| 1 | Business email | Create a business email for accounts | Record placeholder only |
| 2 | Shopify | Create Shopify account/trial and choose country/currency | Setup checklist and configuration map |
| 3 | Payment provider | Activate Shopify Payments if available or confirm alternative | Payment flow requirements |
| 4 | Supplier apps | Create DSers and CJdropshipping test accounts | Supplier test checklist |
| 5 | Analytics | Create GA4 property and Google Tag Manager container | Event tracking plan |
| 6 | Social pixels | Create TikTok Pixel and Meta Pixel if ads will be used | Pixel placement checklist |
| 7 | Email/support | Enable Shopify Email and Shopify Inbox | Lifecycle message map |
| 8 | Tax | Configure Shopify Tax settings for launch country | Tax setup questions and accountant handoff notes |
| 9 | Affiliate routes | Apply for TikTok Shop affiliate, Amazon Associates, or brand affiliate routes | Affiliate-first product map |
| 10 | Accounting | Defer QuickBooks/Xero until sales begin or accountant requests it | Export/reconciliation plan |

Definitions:
- Property: a Google Analytics workspace for one website or app.
- Container: a Google Tag Manager workspace that holds tracking tags.

## First Launch Configuration Decisions

Confirm before setup:
- Launch country.
- Store currency.
- Business legal country.
- Shopify account email.
- Payment provider eligibility.
- Supplier app choice.
- Sample-order budget.
- Return address or return policy approach.
- Support email.
- Whether TikTok Shop will be a sales channel, affiliate channel, or both.

## Codex Setup Boundaries

Codex can:
- Create setup guides.
- Create data models.
- Create checklists.
- Create configuration maps.
- Draft product file templates.
- Draft customer and support workflows.
- Later build import files, dashboards, or custom apps if needed.

Codex should not:
- Store secrets in the repo.
- Make payments.
- Enter bank details.
- Create accounts without user direction.
- Pretend compliance documents exist before suppliers provide them.

## Verification Checklist

Operational verification:
- Every account has a business reason.
- Every account owner action is listed.
- No paid account is created without user approval.
- No supplier is treated as approved before sample checks.

Backend verification:
- Account responsibilities are mapped to business functions.
- Credentials are excluded from documentation.
- Future configuration values use placeholders.

Visual verification:
- Shopify admin setup screens should be checked when configured.
- Product pages, checkout, emails, tracking pages, and support inbox views should be visually verified after setup.

## Reusable Codex Prompt

```text
Create an account setup checklist for this business architecture. Define all terms in plain English. Separate business-owner actions from Codex outputs. Include no-secrets rules, setup order, configuration decisions, boundaries, and operational/backend/visual verification checks.
```
