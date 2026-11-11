# Infra / DNS TODO

Operational follow-ups for this repo's Terraform (`infra/`) and the cross-account
DNS it manages. Product/content work doesn't belong here — this is the infra
backlog. Tick items off as they land.

## 1. Apply the DNS Terraform — DONE (2026-07-10)

The one-time adoption ran on 2026-07-10. Notes from the run (details in
[`../infra/README.md`](../infra/README.md)):

- The state bucket is **`personal-website-tfstate-136758763748`** — the bare
  `personal-website-tfstate` name was already taken globally by an unrelated
  AWS account, so it's account-ID-suffixed per the estate
  `<slug>-tfstate-<account-id>` convention.
- The import count is **10** (1 zone + 9 records), not the 11 previously
  written here — apex NS/SOA are managed implicitly and never imported.
- The zone `comment` had to be pinned to the live value and the zone tags
  pre-applied via the CLI so the plan could be gated on zero changes.

- [x] `bootstrap` applied (state bucket exists)
- [x] `dns` plan was a clean 10-import, no changes
- [x] `dns` applied; `imports.tf` removed; follow-up plan is "No changes"

Steady state from here: edit `records.tf`, `terraform plan`, read the diff,
`terraform apply` — every apply is still load-bearing (live site, Migadu mail).

## 2. ~~Keep the `disag.jaredhoward.com` delegation in sync~~ — retired 2026-11-11

project-disag's hosted web app was decommissioned (Absence0760/project-disag#152)
and the tool is now local-only, so the `disag_ns` delegation record and the
`disag_delegation_ns` variable were removed. Nothing in this zone points at
another account any more.

## 3. (Future) consider whether DNS apply should move to CI

Today the `infra/` stacks are applied locally by the operator — there's no
GitHub OIDC role in this account (the website deploys separately via GitHub
Pages). If DNS changes get frequent, revisit adding an OIDC deploy role +
plan-on-PR. Not worth it for an apex zone that changes a few times a year.
