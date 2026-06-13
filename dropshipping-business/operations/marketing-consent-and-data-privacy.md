# Marketing Consent And Data Privacy

## Purpose

This document defines safe rules for collecting leads and sending marketing emails in the US and UK launch.

Definitions:
- Marketing consent: permission to send promotional messages.
- Privacy notice: plain-language information telling people what data is collected, why, how long it is kept, and who it is shared with.
- Unsubscribe: the action a person takes to stop receiving marketing emails.

Business meaning:
- Marketing growth should not put the store's email account, payment account, ad accounts, or public reputation at risk.

## Plain-English Rules

- Do not buy or scrape email lists.
- Use voluntary sign-ups.
- Tell people what they are signing up for.
- Store consent source and date.
- Make unsubscribe easy.
- Respect unsubscribes immediately in the backend.
- Keep marketing messages honest.
- Do not hide medical or treatment claims inside beauty tips.

## US Email Rule

For US marketing emails, follow CAN-SPAM controls:
- Sender details must be accurate.
- Subject lines must not be deceptive.
- Marketing emails must identify themselves clearly where required.
- Emails need a valid physical postal address.
- Emails need a clear opt-out method.
- Opt-out requests must be honored promptly.
- Third-party email providers do not remove the store's responsibility.

Definition:
- Opt-out: choosing not to receive future marketing messages.

## UK Privacy And Marketing Rule

For UK leads and customers, use a conservative consent-first rule:
- Use a clear opt-in checkbox for marketing.
- Do not pre-check the marketing consent box.
- Tell people what they will receive.
- Store what privacy notice was shown.
- Give a simple unsubscribe route.
- Do not use a lead magnet to hide marketing permission.

Definition:
- Opt-in: actively choosing to receive marketing.

## Data Stored For Each Lead

Minimum:
- Email.
- Country.
- Consent status.
- Consent source.
- Consent timestamp.
- Privacy notice version.
- Lead magnet requested.
- Main interest.
- Source campaign.

Avoid collecting at launch:
- Sensitive personal data.
- Medical conditions.
- Detailed skin conditions.
- Unnecessary demographic data.

Definition:
- Sensitive personal data: information that creates higher privacy risk, such as health details.

## Lead Magnet Rules

Allowed:
- Beauty organization checklist.
- Travel beauty packing guide.
- Brush cleaning schedule.
- Hair accessory styling ideas.
- Routine planning template.

Blocked without review:
- Acne treatment guide.
- Hair growth guide.
- Medical skin advice.
- Weight loss or body-change content.
- Claims that cosmetics, tools, or accessories can treat conditions.

Business reason:
- The store can use education, but it should not drift into medical advice or risky claims.

## Verification Checklist

Operational verification:
- Signup form records consent.
- Unsubscribe works.
- Lead magnet sends only after form submission.
- Marketing emails exclude unsubscribed contacts.

Backend verification:
- Consent status is stored separately from customer profile.
- Privacy version is stored.
- Unsubscribe timestamp is stored.
- Deleted contacts are not re-imported into campaigns.

Visual verification:
- Consent wording is readable on mobile and desktop.
- Form explains what the person receives.
- Emails include unsubscribe and physical address.
- Lead magnet content does not imply medical treatment.

## Source Notes Checked On 2026-06-13

- FTC CAN-SPAM guide: https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business
- ICO right to be informed: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/the-right-to-be-informed/
