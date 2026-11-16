---
description: N/A for this repo — GitHub Pages free tier, no AWS, no metered SaaS. Kept as a stub in case the stack ever grows one.
---

Audit spend safeguards for this repo.

## What this is

This site runs on the **GitHub Pages free tier**. There is no AWS bill, no <CMS> bill, no <email-service> bill, no <payment-processor> processing fee accrual against this codebase. The Stripe integration referenced in the legal pages exists at the *business* level (Stripe → operator), not at the code level — adding a `<script src="https://js.stripe.com/...">` to this site would be a separate architectural decision and would trigger the privacy-policy update path before it could land.

The only loosely-spend-related knobs in-tree are:

- **`.github/dependabot.yml`** — `open-pull-requests-limit: 3` caps the weekly PR queue. Below 5 is fine for a small repo.
- **GitHub Actions usage** — this repo's workflows (CI, CodeQL, secret scan, Scorecard, Dependabot auto-merge, Claude Code, deploy, labeler, PR title lint) run on the GitHub-Actions free minutes quota for a public repo. Public repos get unlimited free minutes; not a cost vector here.

There is nothing in-tree to audit for cost.

## What this command does

Respond with the following one-liner and exit:

> `/audit/cost-controls` is **N/A** for this repo. GitHub Pages serves the bundle on the free tier, there is no AWS / metered SaaS in-tree, and the repo is public so Actions minutes are unmetered. If this repo ever adds a backend, a paid hosting layer, or an outbound paid SaaS call, this command needs a real body.

Do not spawn an agent. Do not search for `infra/`, `budget.tf`, rate-limit modules, or `<CMS>` / `<email-service>` quota configuration — they don't exist here.

## When this command will become real

If this repo ever:

- Adds a backend (Lambda / Worker / container) with metered compute / egress.
- Adds an outbound paid API call (analytics, transactional email, telemetry).
- Switches off the GitHub Pages free tier to a paid CDN with metered egress.

then this command needs a real body. The previous template revision had an extensive cost-control audit (per-IP rate limits, API Gateway throttling, AWS budget alarms, `<email-service>` / `<CMS>` quota headroom, denial-of-wallet paths) — look at the donor-project history in `git log` for prior shape.
