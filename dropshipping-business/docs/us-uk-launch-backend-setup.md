# US And UK Launch Backend Setup

## Purpose

This document turns the launch-market decision into backend setup rules for the beauty dropshipping store.

Definition:
- Launch market: a country or region where the store is allowed to sell.
- Backend setup: the hidden records, rules, fields, workflows, and integrations that make the store operate correctly.
- Control plane: the rule layer that tells the business systems what is allowed, blocked, required, or waiting for proof.

Business meaning:
- The store is no longer treated as a vague "worldwide shipping" idea.
- It is now a controlled US and UK launch, with country-specific tax, shipping, compliance, returns, and verification gates.

## Launch Decision

The beauty store launch markets are:

| Market | Backend Market Code | Currency | Launch Position |
|---|---|---|---|
| United States | US | USD | Primary launch market |
| United Kingdom | GB | GBP | Primary launch market |

Definition:
- Backend market code: a short system label used so orders, products, tax rules, shipping rules, and reports do not mix countries accidentally.
- Currency: the money shown and charged to customers.

## What This Changes

The backend must now store market-specific rules for:
- Product eligibility.
- Price and margin.
- Currency.
- Tax.
- Duties and import taxes.
- Shipping promises.
- Returns and cancellations.
- Product safety.
- Cosmetic rules.
- Electrical-product rules.
- Customer-facing policy text.
- Product-page visual verification.

Definition:
- Product eligibility: whether a product is allowed to be sold in a specific market.
- Duties and import taxes: charges applied when products cross borders.

## Backend Structures Created

The operational setup now lives in:

- `../backend-config/README.md`
- `../backend-config/stores/beauty_accessories.store.json`
- `../backend-config/markets/us.market.json`
- `../backend-config/markets/uk.market.json`
- `../backend-config/rules/product_launch_gates.json`
- `../backend-config/rules/pricing_margin_rules.json`
- `../backend-config/rules/order_routing_rules.json`
- `../backend-config/integrations/beauty_accessories.integration-plan.json`
- `../backend-config/verification/us_uk_backend_setup_verification.md`

Business meaning:
- These files are not secrets and do not connect to live accounts.
- They are the setup map for Shopify, supplier apps, tax settings, product files, reporting, and later automation.

## US Market Rules

The US backend must support:
- USD pricing.
- US customer addresses.
- State-by-state sales tax monitoring.
- Sales tax collection only where the business has confirmed registration or nexus.
- HS code and country-of-origin records for imported products.
- Duties and import tax review for cross-border fulfilment.
- FTC-style shipping promise controls.
- CPSC-style product safety evidence for relevant products.
- FDA cosmetic rules for direct-sale cosmetics.

Definitions:
- Nexus: enough business connection with a US state that the business may need to collect and remit sales tax there.
- HS code: an international product classification code used for customs.
- Country of origin: where the product was made.
- Remit: pay collected tax to the correct tax authority.

Operational rule:
- Do not rely on a single "US tax rate."
- The backend must track US tax by state and must keep a tax-registration status before collecting where required.

## UK Market Rules

The UK backend must support:
- GBP pricing.
- UK customer addresses.
- UK VAT review.
- Low-value goods handling for consignments of GBP 135 or less where applicable.
- Duties and import tax review for consignments above that value.
- Product safety evidence.
- UK consumer cancellation and delivery information.
- GB cosmetic notification and UK responsible-person checks before direct-sale cosmetics.
- Separate note for Northern Ireland where cosmetic rules can differ from Great Britain.

Definitions:
- VAT: value added tax, a tax charged on many goods and services in the UK.
- Consignment: one shipment sent to a customer.
- Responsible person: the named business or person responsible for regulatory duties in a market.
- GB: Great Britain, meaning England, Scotland, and Wales.

Operational rule:
- Treat "UK launch" as a serious compliance setup, not just a shipping zone.
- Direct-sale cosmetics remain prepare-only until ingredient, label, notification, responsible-person, and product-file evidence are complete.

## Product Launch Gate

No product can move to live sale unless these records pass:

1. Product candidate exists.
2. Product file exists.
3. Sample test is complete.
4. Supplier route is approved.
5. US eligibility is approved or blocked.
6. UK eligibility is approved or blocked.
7. HS code and country of origin are recorded where cross-border shipping may occur.
8. Pricing is approved in USD and GBP.
9. Claims are approved.
10. Product page is visually verified.

Definition:
- Gate: a checkpoint that stops a product moving forward until proof exists.

## Recommended Launch Position

Direct-sale launch should start with Lane 1 and selected Lane 2 products:
- Organizers.
- Hair accessories.
- Travel storage.
- Makeup routine accessories.
- Low-risk reusable tools after sample checks.

Hold or prepare:
- Cosmetics.
- Electrical beauty tools.
- SPF.
- Acne products.
- Hair growth products.
- Teeth whitening products.
- Treatment or device-like products.

Business meaning:
- US+UK launch is possible without backtracking, but the product list must be split by compliance risk.
- Low-risk products can move through backend setup first.
- Higher-risk products need their own compliance path before direct sale.

## Shopify Setup Meaning

When the Shopify account is created, these structures translate into:

| Backend Need | Shopify Setup Area |
|---|---|
| US and UK markets | Markets and international settings |
| USD and GBP pricing | Market currency settings and product price approval |
| Tax | Taxes and duties settings |
| Duties and imports | HS codes, country of origin, duties settings, shipping terms |
| Product gates | Product metafields, tags, product status, manual approval workflow |
| Supplier route | DSers, CJdropshipping, EPROLO, or other supplier app records |
| Product files | Private proof folders and product metafields |
| Visual verification | Product page checks, checkout checks, email checks, admin checks |

Definition:
- Metafield: a custom field added to Shopify records, such as product file ID, compliance lane, or supplier route.

## What Is Not Live Yet

The backend structure is implemented in this repository, but live setup still requires:
- Shopify account access.
- Business legal name and address.
- Payment account setup.
- Tax registration decisions.
- Supplier app accounts.
- Real supplier links.
- Sample order evidence.
- Product photos and packaging checks.
- Product-page screenshots.

Definition:
- Credential: private login or access information. Credentials must never be committed to Git.

## Source Notes Checked On 2026-06-13

These sources were used to ground the US and UK setup rules:

- GOV.UK VAT registration: https://www.gov.uk/register-for-vat
- GOV.UK overseas goods sold directly to UK customers: https://www.gov.uk/guidance/vat-and-overseas-goods-sold-directly-to-customers-in-the-uk
- GOV.UK online and distance selling: https://www.gov.uk/online-and-distance-selling-for-businesses
- GOV.UK product safety advice: https://www.gov.uk/guidance/product-safety-advice-for-businesses
- GOV.UK cosmetic product notification: https://www.gov.uk/guidance/submit-a-cosmetic-product-notification
- FDA MoCRA cosmetics rules: https://www.fda.gov/cosmetics/cosmetics-laws-regulations/modernization-cosmetics-regulation-act-2022-mocra
- FTC Mail, Internet, or Telephone Order Merchandise Rule: https://www.ftc.gov/legal-library/browse/rules/mail-internet-or-telephone-order-merchandise-rule
- CPSC business and manufacturing guidance: https://www.cpsc.gov/Business--Manufacturing
- Streamlined Sales Tax remote seller guidance: https://www.streamlinedsalestax.org/for-businesses/remote-seller-faqs/remote-seller-state-guidance
- Shopify tax setup guidance: https://help.shopify.com/en/manual/taxes
- Shopify duties and import taxes guidance: https://help.shopify.com/en/manual/international/duties-and-import-taxes

## Verification Checklist

Operational verification:
- US and UK are defined as separate markets, not one generic worldwide market.
- Products can be approved for US, UK, both, or neither.
- Tax and duties decisions are not hidden inside product copy.
- Cosmetics and electrical products cannot bypass compliance gates.
- Supplier routes must prove they can ship to the correct market before publication.

Backend verification:
- Every market rule is stored in a structured file.
- Every product has market eligibility fields.
- Every order-routing rule checks destination country.
- No secrets or live credentials are stored.
- Source links are recorded for rules that may change.

Visual verification:
- US and UK customers must see correct currency, shipping promise, tax/duty presentation, return wording, and product warnings.
- Desktop and mobile product pages must show actual product contents, size, usage limits, and approved claims.
- Checkout, order confirmation, customer account, receipts, and support replies must be visually checked before launch.

## Playbook Lesson

Launching in more than one country is not just a marketing choice. It changes the backend. A scalable business must store market rules as records so products, orders, tax, shipping, support, and compliance can behave differently by country without rebuilding the system.
