# Monthly Product Trend Intelligence Workflow

## Purpose

This workflow defines the monthly system for finding new product opportunities for the beauty store.

Definition:
- Product trend intelligence: a repeatable process for collecting market signals and turning them into product decisions.

Business meaning:
- New products should not be chosen by impulse.
- The store should use customer behaviour, public trend signals, supplier data, margin, and compliance to decide what to sample next.

## Monthly Flow

```text
1. Collect public trend signals.
2. Collect store behaviour signals.
3. Collect supplier availability and cost signals.
4. Score product opportunities.
5. Separate viral, steady, profitable, and operationally sound products.
6. Flag compliance risk.
7. Recommend sample products.
8. Recommend content and newsletter topics.
9. Update product validation queue.
10. Update dashboard metrics.
11. Archive the monthly trend report.
```

Definitions:
- Viral product: a product getting short-term attention quickly.
- Steady product: a product with repeated demand over time.
- Operationally sound: practical to source, ship, support, price, and explain.

## Signal Sources

| Source | What It Tells Us | Weakness |
|---|---|---|
| Google Trends | Search interest direction by market | Relative interest, not exact sales |
| Google Trending Now | Short-term search surges | Can be news-driven and temporary |
| TikTok/social observation | Content velocity and demo potential | Can be hype without margin |
| Amazon bestseller/review checks | Existing buyer demand | Marketplace prices can be hard to beat |
| Supplier platforms | Availability, cost, shipping route | Supplier claims need verification |
| Store search | What visitors wanted on this store | Needs traffic volume to be reliable |
| Email clicks | What subscribers care about | Can be biased by email subject and design |
| Product page views | Product interest | Views do not always mean purchase intent |
| Add-to-cart rate | Stronger purchase intent | Needs enough traffic |
| Support/refund notes | Customer problems and quality issues | Reactive, not predictive |

Definition:
- Relative interest: a comparison score, not a count of sales.

## Product Opportunity Score

Score each opportunity out of 100:

| Factor | Points | Meaning |
|---|---:|---|
| Demand growth | 15 | Search/social/category attention is rising |
| Steady demand | 10 | Product is not only a short spike |
| Profit potential | 15 | Margin survives cost, shipping, returns, and offers |
| Supplier depth | 10 | More than one credible supplier route exists |
| Operational fit | 10 | Product is practical to ship, explain, and support |
| Compliance ease | 10 | Product avoids drug/device/high-risk claims |
| Content potential | 10 | Product is easy to show in photos/video/email |
| Customer signal | 10 | Store data shows interest or buying behaviour |
| Market fit US/UK | 5 | Product can work in both markets or has clear market route |
| Differentiation | 5 | Product can be bundled, positioned, or explained better |

Decision bands:
- 80-100: sample next.
- 65-79: watch closely or sample if supplier route is strong.
- 50-64: keep on watchlist.
- Below 50: reject or revisit later.

## Monthly Report Output

Each monthly report should include:
- Top 20 opportunity scores.
- Top 10 sample recommendations.
- Top 10 newsletter/content ideas.
- Products to pause or remove.
- Products to bundle.
- Products needing compliance preparation.
- US vs UK demand differences.
- Supplier risk notes.
- Margin risk notes.
- Dashboard-ready charts.

Definition:
- Dashboard-ready: structured enough to display as charts, cards, percentages, and trend arrows.

## Visual Dashboard Requirements

The frontend should show:
- Trend score cards.
- US vs UK comparison.
- Product opportunity heatmap.
- Demand vs margin scatter chart.
- Compliance risk badges.
- Supplier depth bars.
- Category share of store sales and leads.
- Monthly movement arrows.
- "Sample next" shortlist.
- "Do not launch yet" warnings.

Definition:
- Heatmap: a visual table where stronger or weaker scores are shown with color intensity.

## Verification Checklist

Operational verification:
- Monthly report has a date and source list.
- Every recommended product has a score and reason.
- High-compliance products are not pushed into direct launch.
- Sample recommendations connect to product files.

Backend verification:
- Trend records store source, market, date, metric, and score.
- Store behaviour signals are separated from public trend signals.
- Product opportunity decisions use controlled labels.
- Monthly reports are archived.

Visual verification:
- Dashboard is readable without needing raw spreadsheets.
- Percentages and scores are labelled clearly.
- Internal category share is not presented as global market share.
- Warnings are visually obvious for compliance or margin risk.

## Playbook Lesson

A product trend system should combine outside market signals with inside business data. The best product is not always the most viral product; it is the product with demand, margin, supplier reliability, compliance fit, and clear customer use.
