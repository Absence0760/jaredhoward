# infra/ — Terraform for the jaredhoward.com DNS zone

This account (the `jaredhoward` account, SSO profile `jaredhoward`) is
deliberately tiny: the website itself is served by
**GitHub Pages** (no S3/CloudFront/ACM in this account), so the only
provisioned AWS resource is the **`jaredhoward.com` Route 53 hosted zone**.
This Terraform adopts that zone so DNS stops being hand-edited in the console.

> **Why this is load-bearing.** The apex zone serves the live site, carries
> the Migadu mail records (`docs/email-setup.md`), and delegates
> `disag.jaredhoward.com` to another account. A wrong record + an `apply`
> breaks site, email, or the disag delegation. Always `plan` and read the
> diff before `apply`. See `docs/domain-setup.md`.

## Layout

```
infra/
  bootstrap/    one-shot: creates the S3 state bucket (LOCAL state)
  dns/          the zone + all records (REMOTE state in that bucket)
```

Convention mirrors `threkir/infra` (sibling repo): an S3 backend with
S3-native locking (`use_lockfile = true`, Terraform ≥ 1.10 — no DynamoDB), one
KMS-free state bucket per account. There is **no `infra-secrets` subdir for this
project** — a static GitHub-Pages site with public DNS has nothing to encrypt.

## First-time setup — DONE (2026-07-10)

The one-time adoption has been run: `bootstrap` is applied (state bucket
exists), the live zone + records were imported (`10 to import, 0 to add,
0 to change, 0 to destroy` — 1 zone + 9 records; apex NS/SOA are managed
implicitly and never imported), the one-shot import blocks were retired,
and the follow-up plan is "No changes". Two live-side details from that
run, for the record:

- The zone `comment` is pinned in `dns/main.tf` to the live value
  ("HostedZone created by Route53 Registrar") — the provider would
  otherwise default it to "Managed by Terraform" and diff forever.
- The three zone tags in `dns/main.tf` were applied to the live zone via
  `aws route53 change-tags-for-resource` *before* the import plan, so the
  adoption plan could be gated on strictly zero changes.

To re-run from scratch (new account, lost state), follow the same shape:
`bootstrap` apply with local state → `dns` `terraform init` + import
blocks → plan gated on **zero add/change/destroy** → apply → retire the
import blocks and confirm "No changes". All commands require
`AWS_PROFILE=jaredhoward` and a live SSO session
(`aws sso login --profile jaredhoward`).

## Steady state

Edit `records.tf` (or the defaults in `variables.tf`), `terraform plan`, read
the diff, `terraform apply`. Applied locally by the operator — there is no CI
deploy role for DNS (the website deploys separately via GitHub Pages /
`actions/deploy-pages`). State lives in the
`personal-website-tfstate-136758763748` bucket (account-ID-suffixed per the
estate `<slug>-tfstate-<account-id>` convention — the bare name was already
taken globally). The bucket and the `Project = "personal-website"` default
tag keep the slug from before the 2026-09-14 rename (account `Jared`, repo
`project-personal-website`, profile `personal-website`, all now
`jaredhoward`): S3 buckets can't be renamed, and a tag isn't worth an apply.
Losing your laptop is fine — re-`init` elsewhere after
`aws sso login`.

## Cross-repo coupling: the disag.jaredhoward.com delegation

`aws_route53_record.disag_ns` (in `dns/records.tf`, values in
`dns/variables.tf` → `disag_delegation_ns`) is a **delegation pointer**, not a
zone we own. The real `disag.jaredhoward.com` zone lives in **project-disag's**
AWS account, created by the estate baseline; project-disag only
*reads* it via `data "aws_route53_zone"`.

**Direction of truth: disag's child-zone name servers → this NS record.** This
repo mirrors them. If project-disag ever recreates its zone (account rebuild,
zone destroy/recreate), AWS issues a new NS set and `disag_delegation_ns` here
goes stale — `disag.jaredhoward.com` then fails to resolve until it's updated to
match. The disag side, conversely, must not recreate that zone without updating
this record. Tracked in [`../docs/todo.md`](../docs/todo.md) §2; re-verify with
`dig NS disag.jaredhoward.com +short` against disag's live name servers.

## What is intentionally NOT here

- **ACM / CloudFront / S3 website** — GitHub Pages serves the site; the apex A
  records point at GitHub's anycast IPs.
- **GitHub OIDC / deploy role** — no Terraform runs in CI for this account.
- **Apex NS / SOA records** — managed implicitly by `aws_route53_zone`.
- **Secrets** — none. This repo and account hold no encrypted material.
