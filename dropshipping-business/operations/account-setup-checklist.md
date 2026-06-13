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
| 7 | Email/support | Enable Shopify Messaging/Email and Shopify Inbox | Lifecycle message map |
| 8 | Shopify Markets | Configure United States and United Kingdom as launch markets | Market configuration map |
| 9 | Tax and duties | Configure Shopify Tax settings and duties/import-tax approach for US and UK | Tax setup questions and accountant handoff notes |
| 10 | CRM and lead capture | Enable Shopify Customers/segments and lead forms | Lead capture and CRM field map |
| 11 | Incentives | Create draft discount/free-shipping rules after margin review | Incentive rules and margin gates |
| 12 | Trend dashboard | Set up monthly trend report and dashboard fields | Product trend engine and dashboard spec |
| 13 | Affiliate routes | Apply for TikTok Shop affiliate, Amazon Associates, or brand affiliate routes | Affiliate-first product map |
| 14 | Accounting | Defer QuickBooks/Xero until sales begin or accountant requests it | Export/reconciliation plan |

Definitions:
- Property: a Google Analytics workspace for one website or app.
- Container: a Google Tag Manager workspace that holds tracking tags.

## First Launch Configuration Decisions

Confirm before setup:
- Launch countries: United States and United Kingdom.
- Store currencies: USD and GBP.
- Business legal country.
- Shopify account email.
- Payment provider eligibility.
- US sales tax approach.
- UK VAT approach.
- Duties and import-tax approach.
- First lead magnet.
- Welcome discount and free-shipping threshold after margin review.
- Marketing consent wording.
- Newsletter sender name and physical address.
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
- Draft lead magnets, email flows, incentive rules, and dashboard specs.

Codex should not:
- Store secrets in the repo.
- Make payments.
- Enter bank details.
- Create accounts without user direction.
- Pretend compliance documents exist before suppliers provide them.
- Import purchased or scraped email lists.
- Send live marketing campaigns before consent and unsubscribe paths are verified.

## Verification Checklist

Operational verification:
- Every account has a business reason.
- Every account owner action is listed.
- No paid account is created without user approval.
- No supplier is treated as approved before sample checks.
- No marketing account is treated as ready before consent capture and unsubscribe handling works.
- No offer is activated before margin review.

Backend verification:
- Account responsibilities are mapped to business functions.
- Credentials are excluded from documentation.
- Future configuration values use placeholders.
- CRM fields, consent fields, campaign fields, and incentive fields are mapped before live use.

Visual verification:
- Shopify admin setup screens should be checked when configured.
- Product pages, checkout, emails, tracking pages, and support inbox views should be visually verified after setup.
- Lead forms, lead magnet emails, weekly newsletters, and dashboards should be visually verified on desktop and mobile.

## Reusable Codex Prompt

```text
Create an account setup checklist for this business architecture. Define all terms in plain English. Separate business-owner actions from Codex outputs. Include no-secrets rules, setup order, configuration decisions, boundaries, and operational/backend/visual verification checks.
```
