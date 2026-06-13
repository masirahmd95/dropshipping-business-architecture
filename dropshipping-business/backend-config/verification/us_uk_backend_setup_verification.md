# US And UK Backend Setup Verification

## Purpose

This checklist proves that the backend setup for the beauty store is ready to configure in live tools.

Definition:
- Verification: checking that the system works, stays tidy, and looks correct.

## Operational Verification

Check that the business process works:

- US and UK are defined as launch markets.
- USD and GBP are defined as market currencies.
- Every product has US and UK eligibility fields.
- Every product has a product file ID before publication.
- Sample status is separate from product publication status.
- Supplier route is recorded before sample ordering.
- Backup supplier route is recorded before launch.
- HS code and country of origin are required before cross-border checkout approval.
- US sales tax status is pending registration review, not assumed complete.
- UK VAT status is pending registration review, not assumed complete.
- Cosmetics are prepare-only unless cosmetic documentation passes.
- Electrical beauty tools are prepare-only unless safety documentation passes.
- High-compliance products are affiliate-only or blocked until expert review.
- Order routing cannot send failed, risky, blocked-market, or missing-customs-field orders to suppliers.

## Backend Verification

Check that the hidden system remains tidy:

- Store ID is consistently `beauty_accessories`.
- Market IDs are consistently `US` and `GB`.
- Product lanes use controlled lane IDs.
- Status values use controlled labels, not one-off wording.
- Each config file has one clear responsibility.
- Source links are stored for tax, legal, platform, and compliance rules.
- No credentials, API keys, passwords, or private tokens appear in files.
- Deferred tools are marked deferred rather than half-configured.
- Unknown business facts are marked pending.
- Failure cases create exception records.

Definition:
- Controlled label: a fixed status value such as `pending`, `approved`, or `blocked`.

## Visual Verification

Check that customer and staff screens appear accurate after live setup:

- Product pages show the correct currency for US and UK visitors.
- Product pages show accurate product size, pack contents, material, usage, and warnings.
- Product pages do not use blocked medical, treatment, acne, hair-growth, or cure claims.
- Product images match sample photos.
- Mobile product pages remain readable.
- Cart shows correct price, shipping, tax/duty messaging, and market.
- Checkout can be tested with US and UK addresses.
- Checkout clearly shows customer-facing delivery and import-cost expectations.
- Order confirmation shows the correct market, currency, product, shipping, tax, and total.
- Shipping notification email is readable on desktop and mobile.
- Refund notification email is readable on desktop and mobile.
- Shopify admin product view shows compliance lane, product file ID, sample status, and market eligibility.
- Shopify admin order view shows payment, fraud, supplier route, market, tax/duty status, and fulfilment status.

Definition:
- Staff-facing screen: an internal screen used by the business owner or support staff.

## Evidence To Save Later

When live tools exist, save:

- Screenshots of Shopify market settings.
- Screenshots of product metafields.
- Screenshots of US and UK checkout tests.
- Screenshots of product pages on desktop and mobile.
- Screenshots or exports showing order-routing exceptions.
- Sample photos for each product file.
- Tax, VAT, duty, and compliance decisions from accountant, tax tool, or advisor.

## Pass Rule

Backend setup passes only when:

- The structured files are complete.
- Live account setup can follow the files without guessing.
- Product gates stop risky products.
- Customer-facing screens are visually checked after configuration.
- Staff-facing screens show the right operating information.
