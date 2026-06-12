# Licensed Vs Generic Football Merchandise

## Purpose

This document assesses whether the store should sell licensed football goods through a dropshipping model or focus on generic football goods.

Definitions:
- Licensed goods: products sold with permission from the rights holder, such as FIFA, a league, a club, a national team, a player, or an official kit manufacturer.
- Generic goods: products that serve football fans or players but do not use protected names, logos, crests, badges, likenesses, tournament marks, or designs.
- Counterfeit goods: fake products that imitate protected goods or brands without permission.
- Rights holder: the person or organization that owns or controls intellectual property.

## Decision

Do not build the launch model around official FIFA, World Cup, EPL, La Liga, club, team, player, or kit-branded merchandise unless the business has written authorization from an approved supplier, licensor, distributor, affiliate program, or rights holder.

Build the launch catalogue around legal generic football goods and original designs, then add official licensed goods later only through verified authorized routes.

Definition:
- Authorized route: a supply or sales channel where the business can prove it has permission to sell the product.

## Why This Matters

Football merchandise has strong demand, but the demand is attached to protected intellectual property.

The USPTO describes trademarks as words, phrases, designs, or combinations that identify and distinguish goods or services and indicate their source. This matters because football crests, league names, tournament marks, team names, player-related branding, and kit manufacturer marks can all signal commercial source or affiliation.

Stripe lists counterfeit goods, unauthorized sale of brand-name or designer products, and other intellectual-property-infringing goods as prohibited or restricted business activity. For this business, that means the payment system itself can become a risk point if the catalogue contains unauthorized football goods.

Shopify's Acceptable Use Policy also expects merchants to comply with applicable laws and platform rules. Product eligibility disputes may come from regulators, rights holders, payment partners, or platform enforcement teams.

Definition:
- Product eligibility: whether a product is allowed to be sold through a platform or payment provider.

## Viability Comparison

| Category | Demand | Supplier Access | Margin | Stock Reliability | Legal And Platform Risk | Dropshipping Fit | Verdict |
|---|---:|---:|---:|---:|---:|---:|---|
| Official licensed goods | Very high | Low without authorization | Usually tight | Often limited and allocated | Low only if authorization is proven | Weak to moderate | Add later through authorized routes |
| Generic football goods | Medium to high | Higher | Better control | Better supplier variety | Lower if IP rules are followed | Strong | Primary launch path |
| Unauthorized branded goods | High short-term demand | Easy through risky suppliers | Looks attractive but fragile | Unreliable | Very high | Not acceptable | Exclude completely |

Definitions:
- Allocated stock: stock that is controlled and distributed in limited quantities by the brand, distributor, or wholesaler.
- Fragile margin: profit that looks good in a spreadsheet but can disappear because of refunds, disputes, supplier failure, ad restrictions, seizure, or account suspension.

## Licensed Goods Assessment

Official licensed goods are commercially attractive because customers already search for them and trust the brands. For example, replica football shirts are a large market, and reported 2026 World Cup shirt prices show strong consumer willingness to pay.

The problem is not demand. The problem is access and control.

Main issues:

- Authorized suppliers may not offer true dropshipping.
- Stock may be seasonal, limited, or allocated to larger retailers.
- Wholesale margins can be thin because brands, manufacturers, distributors, and retailers all need their cut.
- Suppliers may restrict marketplaces, ad language, territories, product imagery, discounts, and returns.
- Proof of authorization must be available if Shopify, Stripe, ad platforms, customs, or rights holders ask for it.
- Counterfeit risk rises around major tournaments, which means extra scrutiny from payment providers, customs, marketplaces, and customers.

Definition:
- Territory restriction: a rule that limits where a product can be sold, advertised, or shipped.

## Generic Goods Assessment

Generic football goods are more viable for the launch model because they can serve the same buying occasions without relying on protected marks.

Good launch categories:

- Training cones, agility ladders, resistance bands, ball pumps, boot bags, shin-pad straps, grip socks, water bottles, recovery tools, and mini goals.
- Watch-party goods that avoid protected tournament marks, such as generic international football party sets, country-colour decorations, tableware, and flags where legally safe.
- Storage, display, and collector accessories that do not copy club, league, tournament, player, or manufacturer marks.
- Print-on-demand apparel with original artwork, slogans, or football culture themes that avoid protected terms and confusion.
- Seasonal football goods around neutral themes such as international football, club-season watch parties, training season, five-a-side, youth football, and gifts for football fans.

Definition:
- Print-on-demand: a fulfilment model where a product is printed only after the customer orders it.

The strategic advantage is control. The business can design its own positioning, test product categories faster, diversify suppliers, protect margins, and avoid depending on official licensing access at launch.

## Product Language Rules

Do not use protected names or affiliation claims in product titles, product imagery, URLs, ads, metadata, or packaging unless the product has verified authorization.

Avoid:

- "Official FIFA World Cup shirt"
- "EPL club jersey"
- "La Liga replica"
- Club crests, national federation crests, league logos, tournament marks, player names, player likenesses, or kit manufacturer marks without permission
- Product photos that show protected badges or copied kit designs without authorization

Prefer:

- "International football fan scarf"
- "Football watch-party bunting"
- "Country-colour matchday accessories"
- "Football training speed ladder"
- "Original football culture tee"

Definition:
- Metadata: hidden or structured information about a product page, often used by search engines, ads, and platform catalogues.

## Recommended Backend Rule

Every product must pass a product-compliance gate before publication.

Required fields:

- `supplier_authorization_status`: unknown, generic, authorized, affiliate, rejected.
- `ip_risk_level`: low, medium, high, blocked.
- `protected_marks_detected`: yes or no.
- `authorization_evidence`: link or record of supplier agreement, invoice, affiliate approval, or rights-holder permission.
- `allowed_territories`: countries or regions where the product can be sold.
- `allowed_channels`: store, marketplace, ads, affiliate, or restricted.
- `margin_after_risk`: margin after payment fees, shipping, returns, estimated refunds, and compliance burden.
- `publication_status`: draft, review, approved, live, paused, removed.

Definition:
- Product-compliance gate: a required review step that prevents risky products from being published.

## Recommended Integration Direction

Use separate routes for different product types:

1. Generic products: Shopify plus vetted supplier app, direct supplier feed, or direct supplier API.
2. Original designs: print-on-demand provider such as Printful, Printify, Gelato, or another provider selected after sample checks.
3. Official licensed products: affiliate or authorized reseller route only.
4. Risky branded products: blocked before import or publication.

Definition:
- Affiliate route: a model where this business refers customers to an authorized seller and earns commission instead of holding the sale itself.

## Verification Checklist

Operational verification:

- Confirm each supplier can ship to target countries.
- Confirm delivery times, return rules, refund rules, and customer-service responsibility.
- Confirm supplier invoices and product listings do not make suspicious authorization claims.
- Confirm sample quality before scaling a product.

Backend tidiness verification:

- No live product is missing supplier, authorization, margin, shipping, return, or territory fields.
- High-risk and blocked products cannot be published.
- Supplier documents are linked to product records.
- Product titles, tags, handles, and feeds follow the language rules.

Visual verification:

- Storefront product images do not show protected logos, crests, badges, player likenesses, or copied kit designs unless authorization is recorded.
- Product badges do not imply "official", "licensed", or "authentic" unless proven.
- Product pages clearly match what the customer will receive.
- Checkout, confirmation emails, and tracking pages do not overpromise delivery times or official status.

Definition:
- Product handle: the readable part of a product page URL, usually based on the product name.

## Recommendation

Launch with generic football goods and original football-culture products. Treat official licensed merchandise as a later expansion path, not the foundation.

This gives the business a scalable dropshipping architecture without relying on scarce official supply, thin margins, or high intellectual-property risk.

## Source Notes

- USPTO explains that trademarks identify and distinguish goods or services and indicate source: https://www.uspto.gov/trademarks/basics/trademark-patent-copyright
- Stripe restricts products and services that infringe intellectual-property rights, counterfeit goods, and unauthorized sale of brand-name or designer products: https://stripe.com/legal/restricted-businesses
- Shopify Acceptable Use Policy explains platform enforcement principles and merchant responsibility: https://www.shopify.com/legal/aup
- AP reported a 2026 seizure of suspected counterfeit World Cup-related jerseys and other goods: https://apnews.com/article/fake-jerseys-world-cup-hong-kong-8b79f31a905bdb7295966effb0e74c5c
- The Guardian reported high 2026 replica-shirt prices and counterfeit concerns around football shirts: https://www.theguardian.com/business/2026/jun/10/nike-charges-world-cup-fans-most-replica-shirts-prices-surge
