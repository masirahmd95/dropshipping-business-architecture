# Order To Fulfilment Workflow

## Purpose

This document maps the core dropshipping workflow from customer checkout to delivery.

Definition:
- Fulfilment: the process of getting the purchased product shipped to the customer.

## Normal Flow

```text
1. Customer adds product to cart.
2. Customer enters shipping and payment details.
3. Checkout identifies the market, currency, shipping, tax, duties/import-tax handling, discounts, and total.
4. Payment is authorized or captured.
5. Fraud check runs.
6. Market eligibility check confirms each product can sell to the destination.
7. Order is created.
8. Inventory is reserved or reduced.
9. Supplier routing chooses the correct supplier.
10. Customs fields are checked where cross-border shipping needs them.
11. Supplier order is created.
12. Supplier accepts or rejects order.
13. Supplier ships product.
14. Tracking number is received.
15. Customer receives tracking notification.
16. Shipment status updates until delivered.
17. Customer profile, product interest, and segment records update.
18. Post-purchase marketing and review flows run.
19. Finance, analytics, and CRM records update.
```

Definitions:
- Authorized: the payment method is approved, but money may not yet be fully captured.
- Captured: the money is actually taken.
- Supplier routing: the rule that decides which supplier should fulfil an item.
- Market eligibility: whether a product is approved to sell in a specific country or region.
- Duties/import-tax handling: the rule for who pays charges when goods cross borders.

## Failure Cases

| Failure | Business Risk | Required Response |
|---|---|---|
| Payment fails | No money collected | Do not create fulfilment request; show useful checkout message |
| Fraud risk is high | Chargeback or loss | Hold order for manual review before supplier routing |
| Product is not eligible for the destination market | Legal, tax, safety, or customer-service risk | Hold order before supplier routing and create operations task |
| Customs fields are missing | Border delay or incorrect duty/tax handling | Hold order until HS code, country of origin, and declared value are corrected |
| Supplier stockout | Customer paid for unavailable product | Route to backup supplier or notify support for resolution |
| Supplier rejects order | Fulfilment blocked | Create support task and prevent silent failure |
| Tracking missing | Customer support burden | Alert operations and request tracking from supplier |
| Delivery delayed | Customer dissatisfaction | Send proactive delay notification if data is available |
| Customer requests return | Support and finance complexity | Check policy, create return request, update order status |
| Refund issued | Finance records must match | Update payment, order, customer, accounting, and analytics records |

Definition:
- Chargeback: when a customer disputes a payment and the bank may reverse the transaction.

## Backend Verification Checklist

- Order has all required customer, product, supplier, price, tax, and shipping data.
- Payment success and failure create different outcomes.
- Fraud review can pause supplier fulfilment.
- Market eligibility can pause supplier fulfilment.
- US and UK orders store the correct market, currency, tax, duties/import status, and shipping promise.
- HS code and country of origin are present where required before cross-border supplier routing.
- Supplier routing produces one or more supplier orders.
- Split supplier orders remain connected to one customer order.
- Tracking number connects to the correct order and customer.
- Refunds connect to the original payment.
- Customer profile updates order count, total spend, category interest, and post-purchase segment.
- Post-purchase email flows respect consent and unsubscribe status.
- Failed supplier events create staff alerts.
- No workflow silently fails.

Definition:
- Split supplier order: one customer order fulfilled by more than one supplier.

## Visual Verification Checklist

- Checkout shows correct product, price, shipping, tax, and total.
- US checkout shows USD and US market terms.
- UK checkout shows GBP and UK market terms.
- Payment failure message is clear and not alarming.
- Order confirmation page shows the right order summary.
- Customer account page shows order and tracking status clearly.
- Admin order screen shows supplier, payment, fulfilment, and risk status.
- Tracking emails are readable on desktop and mobile.
- Refund or return screens explain next steps clearly.

Definition:
- Admin order screen: the internal view staff use to manage an order.

## Playbook Lesson

The order workflow is the centre of a dropshipping business. If this flow is not controlled, marketing growth will only create more operational problems.
