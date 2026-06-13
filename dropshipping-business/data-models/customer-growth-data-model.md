# Customer Growth Data Model

## Purpose

This document defines the database records needed for CRM, leads, marketing consent, incentives, email campaigns, and trend-driven product selection.

Definition:
- Database: an organized place where records are stored so the business can find, update, analyze, and connect information.

Business meaning:
- The store needs more than an order list.
- It needs to know who joined, what they wanted, what offer they received, what they clicked, what they bought, and which product trends should influence future launches.

## Core Records

| Record | Business Meaning | Important Fields |
|---|---|---|
| Lead | Interested person before purchase | lead ID, email, country, source, interest, lead magnet, consent status, created date |
| Customer Profile | Buyer or account holder | customer ID, email, country, order count, total spend, interests, segment tags |
| Consent Record | Permission and privacy evidence | person, channel, consent status, consent source, consent date, privacy version, unsubscribe date |
| Form Submission | One completed lead form | form ID, lead, form location, answers, source campaign, timestamp |
| Lead Magnet | Free asset offered for sign-up | asset ID, title, topic, file location, target segment, status |
| Incentive | Reason to buy or return | incentive ID, type, value, market, expiry, margin gate, status |
| Discount Usage | Actual use of an incentive | incentive, customer, order, code, used date, revenue impact |
| Customer Segment | Rule-based group | segment ID, rule, market, purpose, active status |
| Campaign | Marketing activity | campaign ID, channel, audience, offer, products, send date, status |
| Email Event | Email performance record | campaign, customer/lead, sent, delivered, opened, clicked, unsubscribed, purchased |
| Marketing Event | Store or ad event | event type, person/session, product, source, campaign, timestamp |
| Product Interest | Evidence a person likes a category | person, category, product, source event, score, last seen |
| Product Trend Signal | Market signal for a product idea | product idea, source, metric, country, score, captured date |
| Monthly Trend Report | Monthly product intelligence output | report month, market, top products, score summary, recommendations |
| Product Opportunity | Product idea from trend report | opportunity ID, product idea, demand score, margin score, compliance score, decision |
| Dashboard Metric | Saved number for reporting | metric name, value, period, market, source, status |

Definitions:
- Consent status: whether the person has agreed to receive a type of message.
- Privacy version: the version of the privacy notice shown when the person signed up.
- Revenue impact: the extra or reduced revenue connected to an offer.

## Relationship Map

```text
Lead
-> Consent Record
-> Form Submission
-> Lead Magnet
-> Customer Segment
-> Campaign
-> Email Event
-> Product Interest
-> Customer Profile
-> Order
```

```text
Product Trend Signal
-> Monthly Trend Report
-> Product Opportunity
-> Product Candidate
-> Product File
-> Sample Test
-> Product
```

```text
Incentive
-> Discount Usage
-> Order
-> Campaign
-> Dashboard Metric
```

Definition:
- Relationship map: a plain-English diagram showing how records connect.

## Controlled Statuses

Lead status:
- new.
- subscribed.
- engaged.
- first_purchase.
- repeat_customer.
- dormant.
- unsubscribed.
- deleted.

Consent status:
- unknown.
- granted.
- denied.
- withdrawn.

Incentive status:
- draft.
- approved.
- active.
- paused.
- expired.
- blocked.

Campaign status:
- draft.
- ready_for_review.
- scheduled.
- sent.
- paused.
- complete.

Product opportunity decision:
- research.
- sample_next.
- watchlist.
- reject.
- prepare_only.
- affiliate_only.

## Data Quality Rules

- Do not send marketing emails without consent status or a lawful marketing basis recorded.
- Every lead must have source, country, and created date.
- Every marketing email must connect to a campaign record.
- Every incentive must have a margin gate before activation.
- Every discount usage must connect to an order where possible.
- Product trend signals must include source, date, market, and score.
- Monthly trend reports must list the data sources used.
- Customer segment rules must be written clearly enough to explain in plain English.
- Unsubscribed contacts must not be reactivated by importing lists.
- Deleted or deletion-requested contacts must not remain in marketing audiences.

Definition:
- Lawful marketing basis: the recorded reason the business is allowed to send a marketing message.

## Starting Database Choice

Use this staged approach:

| Stage | Database Choice | Why |
|---|---|---|
| Launch | Shopify Customers plus structured spreadsheet records | Cheapest and simplest |
| Early growth | Shopify Customers plus Shopify segments plus exported campaign reports | Enough for weekly newsletters and simple offers |
| Growth | Klaviyo or Omnisend as marketing CRM | Better segmentation, automation, and revenue attribution |
| Scale | BigQuery or database warehouse plus dashboard | Needed when Shopify, ads, supplier, email, and product data become hard to combine |

Definition:
- Data warehouse: a central reporting database that combines information from many systems.

## Verification Checklist

Operational verification:
- A lead can sign up, receive the free asset, and enter the correct segment.
- A lead can convert into a customer without losing original source and consent data.
- Incentive usage can be measured against orders.
- Monthly trend signals can become product opportunities.

Backend verification:
- Records use stable IDs.
- Status labels are controlled.
- Consent and unsubscribe data are protected.
- Lead magnet delivery is separate from product fulfilment.
- Trend data is separate from customer personal data.

Visual verification:
- Forms show clear value and consent text.
- Dashboard shows lead funnel, email performance, offer performance, and trend scores clearly.
- Charts avoid fake precision where data is only directional.

## Reusable Codex Prompt

```text
Create a customer growth data model for this ecommerce business. Define terms in plain English. Include leads, customers, consent, form submissions, lead magnets, incentives, campaigns, email events, product interests, trend signals, monthly trend reports, product opportunities, dashboard metrics, relationships, controlled statuses, data quality rules, database choice, and operational/backend/visual verification.
```
