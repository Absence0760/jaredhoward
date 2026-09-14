# Email setup for jaredhoward.com (Migadu)

How email for `@jaredhoward.com` is hosted, and the exact DNS records that
make it work. Companion to [`domain-setup.md`](./domain-setup.md), which
covers the website (GitHub Pages) side of the same Route 53 zone.

## Decision

**`jaredhoward.com` email is hosted by [Migadu](https://migadu.com)** — a
managed, standards-based (IMAP/SMTP) email provider. We deliberately chose a
managed host over self-hosting:

- A primary identity address (`jh@jaredhoward.com`) is the worst thing to
  lose; managed hosting gives near-perfect deliverability and zero ops.
- Migadu's **Micro plan (~$19/yr)** allows **unlimited addresses, aliases,
  domains, and catch-all** — pricing is gated on daily message *volume*, not
  address count. That fits "as many `whatever@jaredhoward.com` as I want."
- No lock-in: standard IMAP/SMTP means mail can be pulled out with any client
  and the domain repointed to another provider (or self-hosted) at any time —
  only DNS changes.

This **supersedes the self-hosted Stalwart + AWS SES plan** that previously
lived in the `homelab` repo. That plan has been descoped/deprecated there;
`jaredhoward.com` mail does **not** run on the homelab host. See
`homelab/SERVICES.md` (Email section).

## Where this lives

- The `jaredhoward.com` Route 53 **hosted zone is owned by the
  `jaredhoward` AWS account** (the account ID is recorded in the
  private org docs, not here).
- The zone is now **managed by Terraform** in [`infra/dns`](../infra/README.md)
  (same stack as the GitHub Pages records in `domain-setup.md`). All five email
  record-sets below — apex TXT (SPF + verify), MX, the three DKIM CNAMEs, and
  `_dmarc` — are codified in `infra/dns/records.tf` and were adopted from the
  live zone by `terraform import`. Change them via `terraform plan`/`apply`
  (`AWS_PROFILE=jaredhoward`), **not** the Route 53 console. The console
  values below remain the human-readable reference / source-of-truth check
  against Migadu's admin panel. (This completes the "codify these records when
  the zone moves to Terraform" obligation noted under Phase 5b,
  `project-mgmt/docs/personal-org-migration.md`.)

## DNS records to add

Add these to the `jaredhoward.com` hosted zone. They coexist cleanly with the
existing GitHub Pages records — `MX` and the email `TXT`/`CNAME` records are
different record types from the apex `A`/`AAAA` records, so nothing collides.

> **Verify exact values in the Migadu admin panel** (Domains → your domain →
> the DNS / "Check" diagnostics screen). Migadu shows the precise records for
> your domain and a live pass/fail check. The values below are Migadu's
> standard set; treat the admin panel as source of truth if they differ.

### 1. Apex TXT — ownership verification **and** SPF (one record-set, two values)

Migadu's ownership check is a **TXT value at the apex** of the form
`hosted-email-verify=<token>` — **not** a `hosted-email-verify.<domain>`
subdomain. Your SPF record is *also* an apex TXT, and DNS allows only one TXT
*record-set* per name, so both values go into the **same** apex TXT set:

```
Type: TXT  Name: jaredhoward.com (apex)   — TWO values in one record-set:
  "v=spf1 include:spf.migadu.com -all"
  "hosted-email-verify=<token shown in Migadu admin → Domains → DNS>"
```

The only value unique to your account is the `hosted-email-verify=` token; the
SPF line is identical for every Migadu domain. The domain stays inactive until
Migadu's diagnostics pass. Keep exactly **one** SPF string at the apex — if
another sender is ever added, merge its `include:` into this one SPF value
(don't create a second SPF TXT). In Route 53 this is one record-set with both
strings as separate values (see the `change-batch` example below).

### 2. MX — where mail for the domain is delivered

```
Type: MX   Name: jaredhoward.com (apex)
  10 aspmx1.migadu.com.
  20 aspmx2.migadu.com.
```

### 3. DKIM — three CNAMEs (Migadu-hosted keys, auto-rotated)

```
Type: CNAME  Name: key1._domainkey.jaredhoward.com
  -> key1.jaredhoward.com._domainkey.migadu.com.
Type: CNAME  Name: key2._domainkey.jaredhoward.com
  -> key2.jaredhoward.com._domainkey.migadu.com.
Type: CNAME  Name: key3._domainkey.jaredhoward.com
  -> key3.jaredhoward.com._domainkey.migadu.com.
```

### 4. DMARC — start in monitor mode, then tighten

```
Type: TXT  Name: _dmarc.jaredhoward.com
Value: v=DMARC1; p=none; rua=mailto:postmaster@jaredhoward.com
```

Start with `p=none` to confirm SPF+DKIM align (watch the aggregate reports for
a week or two), then move to `p=quarantine` and eventually `p=reject` once
you're confident nothing legitimate is failing alignment.

### 5. (Optional) Client autoconfiguration

Lets Thunderbird / Apple Mail / mobile clients auto-discover settings, so you
type only an address + password.

```
Type: CNAME  Name: autoconfig.jaredhoward.com -> autoconfig.migadu.com.
Type: SRV    Name: _autodiscover._tcp.jaredhoward.com
  -> 0 1 443 autoconfig.migadu.com.
Type: SRV    Name: _submissions._tcp.jaredhoward.com -> 0 1 465 smtp.migadu.com.
Type: SRV    Name: _imaps._tcp.jaredhoward.com       -> 0 1 993 imap.migadu.com.
```

## Migadu-side configuration (not DNS)

Done in the Migadu admin panel, not in Route 53:

- **Mailbox:** create the real mailbox (e.g. `jh@jaredhoward.com`) with a
  strong password / app password.
- **Aliases:** add as many alias addresses as you like (all deliver to the
  mailbox). Unlimited on every plan.
- **Catch-all:** enable a catch-all so any not-yet-defined prefix
  (`anything@jaredhoward.com`) still lands in the mailbox — this is the
  "infinite prefixes" behavior.
- **Identities:** to *send as* an alias, add it as an identity.

## Client connection settings

```
IMAP:  imap.migadu.com   port 993  (SSL/TLS)
SMTP:  smtp.migadu.com   port 465  (SSL/TLS)   [or 587 STARTTLS]
User:  the full address (e.g. jh@jaredhoward.com)
Pass:  the mailbox password / app password
```

## Verify

1. Migadu admin → Domains → diagnostics all green (verify, MX, SPF, DKIM).
2. `dig MX jaredhoward.com +short` → shows `aspmx1/aspmx2.migadu.com`.
3. `dig TXT jaredhoward.com +short` → shows the `v=spf1 ... migadu` record.
4. Send a test message to `jh@jaredhoward.com` from an external account; reply
   from it. Then run it through <https://www.mail-tester.com> — aim for 10/10
   (confirms SPF, DKIM, DMARC all pass).

## Backup (recommended, provider-independent)

Because it's standard IMAP, keep a local copy so a Migadu outage or account
loss never means losing mail: periodic `mbsync`/`offlineimap` sync to the
laptop or (later) the homelab host. One-time setup; closes the only real gap
of using a small indie provider.
