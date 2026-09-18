# Legal-pages status — pre-counsel draft tracker

The legal pages (`/terms/`, `/privacy/`, `/refunds/`, `/contact/`) were
drafted from a structured gap-analysis (the `us-legal-doc-reviewer`
subagent) on 2026-05-14. They are **draft text suitable for Stripe sign-up
review**, but they are **not lawyer-reviewed**, and several items
deliberately commit to behavior that has to be implemented on the product
side before the policy is accurate at first paying subscriber.

This file is the internal tracker for what's done, what depends on a
counsel review, and what depends on product/UX work. It is not
customer-facing.

## Configuration baked into the current drafts

- **Legal entity.** Jared Howard (sole proprietor)
- **State of formation / residence.** Commonwealth of Virginia — rendered as
  plain "Virginia" in all customer-facing prose (see the 2026-09-06 change-log
  entry); the formal name survives only in the Terms §16 governing-law and
  venue clauses.
- **Legal-notice address.** `jared@jaredhoward.com`
- **Governing law.** Virginia
- **Venue.** Virginia state and federal courts
- **Dispute resolution.** Informal-first (30-day good-faith window), then
  Virginia courts. **No arbitration, no class-action waiver.**
- **Indemnification.** One-way (user → merchant), with merchant's right
  to assume defence on its own behalf.
- **Liability cap.** Greater of 12-months-fees-paid or US $100.
- **Subscription auto-renewal.** Yes; ROSCA-shaped disclosure baked into
  Terms §4; renewal-reminder commitment (15–45 days for annual plans);
  same-medium cancellation commitment.
- **Privacy framework.** CCPA-shaped baseline with explicit VCDPA appeal
  process and Virginia AG referral.
- **Analytics / tracking.** Site is currently first-party-only; Privacy
  §8 commits to updating the policy *before* any third-party analytics
  or ad tech is added.

If any of these assumptions changes, the relevant section needs to be
updated.

## Stripe sign-up readiness

- [x] Terms of Service exists at `/terms/`, linked from footer.
- [x] Privacy Policy exists at `/privacy/`, linked from footer.
- [x] Refund and Cancellation Policy exists at `/refunds/`, linked from
  footer.
- [x] Contact email is published and routes correctly.
- [x] Service description on the homepage matches Terms §1.
- [x] Currency stated as US dollars; payment method named (Stripe).
- [x] Auto-renewal disclosure language in place (Terms §4); the
  operational checkout-time disclosure still has to be implemented on
  the product side — see "Required product/UX work" below.

These items should clear an automated Stripe application review and a
first-pass manual review. Anything that depends on the product itself
(subscription checkout flow, in-product cancellation) is gated by the
work below, not by these pages.

## Required product/UX work before first paying subscriber

The Terms and Refunds pages commit to specific behaviors that the
product has to actually deliver. Don't bill the first subscriber until
these are real:

- [ ] **Pre-charge auto-renewal disclosure at checkout.** The actual
  sign-up screen has to clearly and conspicuously show: that the
  subscription auto-renews, the cadence, the renewal amount, the date of
  the first renewal charge, and how to cancel. The customer has to
  affirmatively accept (checkbox or signed click) and the acceptance has
  to be recorded.
- [ ] **In-product cancellation.** A single-step cancel control in
  account settings. Until this exists, the email path described in Terms
  §4.4 and Refunds §1 is the operational mechanism.
- [ ] **Renewal-reminder email for annual plans.** Automated, fires
  15–45 days before each renewal date, includes the renewal amount,
  renewal date, and a direct link to cancel.
- [ ] **Failed-payment dunning.** Up to 14 days of retry, customer
  notification, then suspension. (Stripe's smart retries cover most of
  this if turned on.)
- [ ] **Sub-processor list update.** Once the application-hosting
  platform, transactional-email provider, error-tracker, and any
  analytics tool are picked, update Privacy §4 to name them
  **before** any of them touches customer personal information.

## Open items for counsel review before launch

A licensed Virginia attorney should sign off on the wording below before
a paying subscriber is onboarded. (Round-2 used inline HTML "DRAFT"
comments in the public pages to mark these clauses; round-3 removed
them because they were visible to anyone who view-sourced the page,
and they signalled "this is tentative" to hostile reviewers. The
counsel-review list below is now the only canonical record.)

**Round-1 items (still open, addressed in the page text):**

- [ ] **ROSCA + state-ARL alignment.** Counsel to confirm Terms §4 plus
  the planned checkout-disclosure UX satisfies both ROSCA (15 U.S.C. §8403)
  and the strictest state ARL we'll meet in practice (probably California,
  Bus. & Prof. Code §17600 et seq., even though Virginia is the governing
  law — California consumers can still buy).
- [ ] **Dispute resolution architecture.** Counsel to confirm the
  courts-based-with-informal-first structure (Terms §13) is appropriate
  for our risk profile; reconsider arbitration only if counsel
  recommends it.
- [ ] **CCPA / VCDPA disclosures.** Counsel to confirm Privacy §§ 2–7
  satisfy CCPA/CPRA, VCDPA, CO CPA, CT CTDPA, UT UCPA, and TX TDPSA, or
  flag any state where additional disclosure is needed.
- [ ] **Click-to-cancel mechanism.** Counsel to confirm the in-product
  cancel UX, when built, satisfies the FTC click-to-cancel rule's
  "same medium" principle and California's single-step cancellation
  requirement.

**Round-2 items (new tentative drafts, added 2026-05-14):**

- [ ] **Liability cap carve-outs (Terms §10).** Counsel to confirm the
  enumerated carve-outs (gross negligence, wilful misconduct, fraud,
  personal injury, our §11.2 indemnity, non-waivable claims) are
  complete for Virginia and for B2C exposure in California, New Jersey,
  and Massachusetts in particular. The cap currently relies on these
  carve-outs to survive an unconscionability attack.
- [ ] **Mutual indemnification (Terms §11.1 + §11.2).** Counsel to
  confirm: (a) the narrow IP-infringement indemnity in §11.2 is the
  right scope, (b) the enumerated exclusions in §11.2 (Customer Content,
  modifications, combinations, post-notice use) are complete, (c)
  whether §11.1 should be additionally restricted to organisational
  customers to avoid unconscionability attack in B2C contexts, and (d)
  the §11.3 procedural mechanics are appropriate.
- [ ] **AI/ML provisions (Terms §6.2.1 and §6.2.2).** Counsel to
  confirm the split between training / third-party inference /
  internal operational tooling. §6.2.2 was softened in round 3 from
  an absolute "tools whose terms prohibit retention/training" to a
  best-efforts policy with a stated migration commitment if a tool's
  terms drift; counsel should confirm the softer phrasing still
  defeats a misrepresentation argument and that the migration
  commitment is meaningful as drafted.
- [ ] **Custom-development assignment-on-payment (Terms §6.3).** Counsel
  to confirm the assignment language is enforceable in Virginia, the
  Background-IP carve-out is appropriately scoped, and the third-party
  / open-source materials disclaimer is sufficient. Also confirm whether
  an explicit SOW IP clause should be a precondition for engagement.
- [ ] **Wind-down floor (Terms §8.3).** Counsel to confirm the 30-day
  default (10-day for non-payment) Wind-Down Period aligns with VCDPA /
  CCPA right-to-portability provisions.

**Round-3 items (new tentative drafts, added 2026-05-14):**

- [ ] **§11.2 unilateral election.** Round 3 added "at our sole and
  unilateral option" plus an explicit statement that the customer has
  no right to require a particular remedy. Counsel to confirm this
  closes the previously-flagged uncapped-procurement path (option (i)
  "procure rights" + option (ii) "modify" sit outside the §10 cap) and
  is enforceable in Virginia and against B2C consumers.
- [ ] **§15.5 force-majeure payment carve-out.** Round 3 added an
  explicit "does not excuse or suspend any obligation to pay fees"
  exception. Counsel to confirm the phrasing is unambiguous and
  consistent with §4.6 (failed-payment retry) and §10(e) (fees-owed
  carve-out from the cap).
- [ ] **§8.2(d) general-discontinuation notice and pro-rata refund.**
  Round 3 split the §8.2 clauses so that discontinuation under (d)
  requires 60 days' notice plus pro-rata refund of pre-paid fees for
  the unused period. Counsel to confirm 60 days is the right number,
  that the carve-out from the §3 non-refundability rule is
  unambiguous, and that no parallel obligation should apply to
  custom-development engagements under §6.3.
- [ ] **§3 / §15.6 deliverability reconciliation.** Round 3 removed
  the specific "spam filter is your problem" disclaimer in §3 and now
  defers to §15.6's "absent bounce or delivery failure" rule. Counsel
  to confirm this satisfies the renewal-reminder receipt requirements
  in California (Bus. & Prof. Code §17602) and New York (GBL §527-a),
  and to confirm the merchant's customer-address-currency burden is
  still adequate.

## Other items to revisit periodically

These are not blockers but are worth a periodic review (suggest
quarterly while pre-launch, then annually):

- [ ] **Sub-processor list.** Add named vendors as they're selected;
  remove or replace as the stack changes (Privacy §4).
- [ ] **Effective date / last-reviewed date.** Update "Last reviewed" on
  each page each time you skim the page, even if no edit is made.
  Update "Effective" only on material changes.
- [ ] **International / non-US user posture.** Currently US-only
  (Privacy §1, Terms §12). If marketing ever targets EU/UK customers,
  the entire privacy regime has to be re-evaluated for GDPR.
- [ ] **Sensitive personal information.** Privacy §2 currently states we
  collect none. If that changes — for example, if a product collects
  precise geolocation, government IDs, or account credentials for
  third-party systems — Section 2 has to be updated and (in some states)
  opt-in consent has to be obtained.
- [ ] **State expansion.** If we register the sole prop or form an LLC
  in a different state, Terms §12 and Privacy §1 need to be updated.

## Launch gates (hard blockers for first paying subscriber)

The public legal pages commit to specific behaviour that the product
has to actually deliver. Do **not** start billing a subscriber until
every item below is either built or the relevant page is edited to
remove the future-tense commitment:

- [ ] **In-product cancellation control.** Terms §4.4 and Refunds §1
  both promise this in future tense. Build it, or edit both sections
  before the first paid signup.
- [ ] **Pre-charge auto-renewal disclosure UX.** Terms §4.2 promises a
  "clear and conspicuous" disclosure at checkout with affirmative
  consent. Build the checkbox-with-disclosure step, or edit §4.2 to
  match what the actual UX does.
- [ ] **Automated annual-renewal reminder email.** Terms §4.3 commits
  to a 7–45 day reminder window. Stand up the automation (or use a
  Stripe customer-portal feature that does it) before the first
  annual subscription is sold.
- [ ] **Plan-specific refund documentation.** Refunds §2 defers
  annual-pro-rata to "the documentation for the specific plan you
  purchased". Write that documentation for each plan, or edit §2 to
  remove the deferral, before annual plans go on sale.

## Post-domain-purchase items

When the custom domain is registered and pointed at the site (see
`docs/domain-setup.md`), do these as part of the cutover:

- [x] **Move the published legal-notice address to a domain-controlled
  forwarder.** Done — every customer-facing address now reads
  `jared@jaredhoward.com` (Migadu-hosted, catch-all lands in the
  mailbox; see `docs/email-setup.md`), replacing the old Gmail address.
  Updated across the Contact page, Capability Statement, Terms §16,
  Privacy §11, Refunds §6, and `SECURITY.md`. Reduces the risk that a
  Gmail suspension nukes every customer-facing legal-notice channel at
  once.
- [ ] **Re-publish with the custom domain in the site `url`** (`src/lib/site.ts`,
  per `docs/domain-setup.md`) and then re-run the `us-legal-doc-reviewer`
  to catch any references to the old GitHub-Pages URL.

## Change log — site redesign, 2026-08-28

The site was restyled (new masthead, landing page, footer card, single token
layer). **No legal-page wording changed** — `terms/`, `privacy/`, `refunds/`
and `contact/` kept their markup verbatim; only the shell around them and the
typography did. What was re-verified against this tracker at the time:

- All four footer links (Contact · Terms · Privacy · Refunds) render on **every**
  built page, now from `LandingFooter` rather than the old `Footer` component.
  Verified against `build/**/index.html`, 4/4 distinct targets on all 8 routes.
- The homepage service description still matches **Terms §1**: two streams,
  browser-based only, no physical goods, no downloadable installers, billed as
  project fees / retainers / subscriptions. The Stripe-readiness checkbox above
  therefore still holds.
- **Privacy §8** ("all client-side JavaScript on the marketing site is
  first-party code we wrote ourselves; there are no embedded third-party
  scripts and no remote-loaded tracking tags") still holds. The redesign added
  one inline `<script>` to `src/app.html` — first-party, no `src`, four
  statements, sets a `js` class before first paint — plus first-party modules
  under `src/lib/`. No cookies, no `localStorage`, no third-party host: the
  built output's only off-origin references are `href` links to github.com and
  merylgreendesigns.com. Nothing in §4's sub-processor list changed.

Because no commitment moved, this did not trigger the `us-legal-doc-reviewer`
re-run below. If a future redesign changes any legal page's *wording* — not
just its styling — that re-run is required.

### Addendum, 2026-08-29 — section index added to the legal routes

A right-hand rail (`SectionRail.svelte`, ≥1080px only) was added to `terms/`,
`privacy/` and `refunds/`, and a "Reach me" card to `contact/`. **Again no
wording changed.** The edits to the three policy files are mechanical and
navigational only:

- Each `<h2>` gained an `id` (slug of its own text, with the leading section
  number stripped — `1. The services` → `the-services`). No heading text, and
  therefore **no section number, changed**: the numbering that Terms §8.3's
  survival list and every internal cross-reference depend on is untouched, so
  the "on any section renumbering or split" rule below is **not** triggered.
- Each file gained a `<script>` block declaring its own section list, and a
  `<SectionRail {sections} />` element after the closing `</article>`. The rail
  renders plain in-page anchor links; it adds no outbound link, no new
  sub-processor, and nothing that runs without JavaScript.
- Privacy §8 still holds: the rail's only script is a first-party module under
  `src/lib/`, used for the active-section marker. Still no cookies, no
  storage, no third-party host.

A ninth route, `/work/`, was added in the same change. It is marketing content
(the public project list) with no legal commitment of its own, and it carries
the same footer. It does not alter anything in this tracker.

Re-verified after the change: all four footer links still render 4/4 distinct
on all **9** built routes, and each anchor id in every rail resolves to a
heading that exists on its own page. Counsel review is still pending per the
launch gates above; this addendum does not change what counsel needs to look
at.

### Addendum, 2026-09-01 — the 404 page was missing the footer links

The footer-link check above was run as a glob over `build/**/index.html`. Every
route is an `index.html` inside a directory, so that pattern matches all nine —
and structurally cannot match `build/404.html`, which sits at the root. The one
page it could never see was the one page that failed.

`static/404.html` was a hand-written pre-redesign file that GitHub Pages serves
on any unresolved URL. It shipped with no masthead and no footer, so **Contact ·
Terms · Privacy · Refunds were absent** from it, while the tracker recorded them
as present on "every built page".

Fixed by rewriting `static/404.html` in the current design with the four legal
links in a footer. Re-verified in headless Chromium: it returns **HTTP 404**,
carries **4/4 distinct legal links** at seven widths in both colour schemes,
and still renders them with **JavaScript disabled**.

No wording on any of the four policy pages changed, and no section was
renumbered, so the renumbering rule is not triggered.

Two follow-ons worth recording, since both are commitments rather than styling:

- The rewritten page makes **no third-party request** — no font, no script, no
  stylesheet, no absolute URL of any kind. Privacy §4/§8 (first-party only)
  therefore holds on the 404 as well; its predecessor named `"Inter"` in a
  font stack but never fetched it, so neither page ever breached §8.
- `src/lib/static-assets.test.ts` now asserts the four legal links are present
  in `static/404.html`, so this specific gap fails `pnpm test` rather than
  waiting for the next manual audit. **Verify the footer-link claim against
  `build/*.html` as well as `build/**/index.html` in future passes.**

## Maintenance rhythm

- After any material site change → re-run the `us-legal-doc-reviewer`
  subagent and triage findings.
- Annually (and before any major launch) → counsel review of all four
  pages together.
- On every Stripe risk-review request → cross-check that the submitted
  business description still matches Terms §1 and the homepage services
  section.
- **Quarterly** while pre-launch (annually post-launch) → verify the
  sub-processor list in Privacy §4 is still accurate, that no
  third-party analytics / tracking has crept in, and that the
  acknowledgement-only mention of Stripe / GitHub / Google still
  matches reality. (Hard URLs were removed from §4 in round 2 to
  avoid link-rot.) Also at this cadence: review Terms §6.2.2
  operational-tooling commitment against the actual AI tool stack in
  use (Claude Code, IDE plugins, mail tools).
- **On any section renumbering or split** → re-verify every internal
  cross-reference in the file you renumbered, plus the §8.3 survival
  list, plus every other doc that references the renumbered file by
  section number. Round 2 caused a "Section 5" → wrong target bug in
  Refunds when its section count grew from 5 to 6; round 3 fixed it.

## Forward-looking notes

These don't need action today but should trigger an audit if they ever
change:

- **Trade name / DBA.** The business currently operates under the legal
  name "Jared Howard". The homepage links to a GitHub profile under the
  handle `Absence0760`. If we ever adopt a trade name (whether
  `Absence0760` or anything else) in customer-facing copy, Virginia DBA
  registration applies and Terms §16, Privacy §11, Refunds §6, the
  homepage, and the footer all need to be updated to use the trade
  name consistently.
- **Entity formation.** Currently a sole proprietorship. If we form a
  Virginia LLC or move to another state, Terms §12, Privacy §1, and the
  legal-notice address all change.
- **Future contractors.** Terms §10 and §11 both now extend "us" to
  cover employees, contractors, agents, licensors, and successors. If
  we ever sub-contract custom-development work, ensure the contractor
  is bound by an NDA / IP-assignment agreement so the §11.2 indemnity
  obligation doesn't outrun what the contractor is liable to us for.

## Change log — copy pass, 2026-09-06

A marketing-copy pass touched all four legal pages. **No legal commitment,
obligation, timeframe, section number or cross-reference changed** — the edits
were the entity descriptor and the notice address only.

- **"Commonwealth of Virginia" → "Virginia"** in the who-we-are sentence of
  Terms §1, Privacy §1, Refunds §1 and the Contact page opener. Rationale: the
  formal style taxes a general reader for no gain in a sentence written for
  them. **Deliberately not changed:** Terms §16 governing-law and venue clauses
  still read "Commonwealth of Virginia" — that is the state's correct legal
  name and standard drafting for a choice-of-law clause, and its reader is
  counsel, not a prospect. The two spellings refer to the same jurisdiction and
  neither is ambiguous. If counsel prefers one form throughout, §16 is the one
  to change, not the prose.
- **Notice address `contact@jaredhoward.com` → `jared@jaredhoward.com`.**
  Same Migadu mailbox. Updated in Terms §16, Privacy §11, Refunds §6, the
  Contact page, the Experience page's corporate-data rail, `/cv/`,
  `SECURITY.md` and `src/lib/site.ts`. **Pre-ship gate cleared 2026-09-18:**
  the `jared@jaredhoward.com` mailbox was created at Migadu, and the mail
  records it depends on are live in the Route 53 zone — apex MX
  (`aspmx1`/`aspmx2.migadu.com`), the Migadu SPF and verify TXT, the three
  DKIM CNAMEs (`key1`–`key3`) and `_dmarc` (`p=none`). So the published
  legal-notice address resolves to a real mailbox rather than bouncing, and the
  copy pass is clear to ship. Re-confirm the same way — mailbox exists, then
  `dig MX`/`dig TXT` — on any future mail-provider or address change; a
  published legal-notice address that bounces is worse than the old one.
- The `/capabilities/` page is now titled **Experience** in the nav and its
  `h1`. The route is unchanged, so no legal-page link needed updating.
- Both "Start a project" buttons were removed from the landing page. `/contact/`
  itself is untouched and still reachable from the masthead nav and the footer
  on every page — the footer-link invariant re-verified below still holds.
