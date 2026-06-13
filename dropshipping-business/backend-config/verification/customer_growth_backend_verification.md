# Customer Growth Backend Verification

## Purpose

This checklist verifies CRM, lead capture, email marketing, incentives, monthly trend intelligence, and dashboard setup.

Definition:
- CRM: customer relationship management; the system for storing leads, customers, consent, preferences, purchases, and marketing status.

## Operational Verification

- Lead form creates a lead record.
- Lead form stores country and interest.
- Consent status, source, timestamp, and privacy notice version are stored.
- Lead magnet email sends after sign-up.
- Welcome discount is one-use per customer.
- Free shipping thresholds are market-specific and margin-checked.
- Weekly newsletter uses only approved products.
- Unsubscribe removes the contact from marketing flows.
- Abandoned cart flow does not send to suppressed contacts.
- Monthly trend report creates product opportunity decisions.
- Product opportunities connect to product validation before sample ordering.

## Backend Verification

- CRM fields exist in the store config.
- Lead, customer, consent, form, campaign, email event, incentive, and product interest records are defined.
- Marketing flows use controlled status labels.
- Campaigns connect to products, segments, and incentives.
- Discounts are tracked separately from base pricing.
- Trend signals store source, market, date, metric, and score.
- Dashboard metrics have a source and period.
- No real customer lists or private personal data are committed to Git.

Definition:
- Personal data: information that can identify a person, such as email address, name, phone number, or address.

## Visual Verification

- Lead form is clear on desktop and mobile.
- Consent checkbox is visible and understandable.
- Lead magnet delivery email has a clear download action.
- Welcome discount email states terms clearly.
- Weekly newsletter is readable on desktop and mobile.
- Offer terms are not hidden.
- Dashboard shows lead funnel, US/UK split, email performance, offer performance, and trend scores clearly.
- Empty dashboard states explain that there is not enough data yet.
- Error states explain failed data sources.

## Pass Rule

Customer growth setup passes only when:

- The lead capture path works.
- The consent and unsubscribe path works.
- Incentives cannot bypass margin gates.
- Monthly trend intelligence produces usable product decisions.
- Dashboard views are visually understandable without opening raw spreadsheets.
