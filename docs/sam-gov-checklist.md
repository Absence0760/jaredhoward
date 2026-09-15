# SAM.gov registration checklist

The capability statement — the page at `/capabilities/`, titled **Experience**
in the nav and in its own `h1` for a general audience, but still the federal
one-pager — [`src/routes/capabilities/+page.svelte`](../src/routes/capabilities/+page.svelte)
ships with placeholders marked `[ TO BE ASSIGNED ]` for the federal identifiers that only exist once the
business is registered in **SAM.gov**. This doc is the to-do list for obtaining
them and the steps to replace the placeholders afterward.

> None of this is legal or contracting advice. Verify current requirements at
> [SAM.gov](https://sam.gov) — the process changes.

## What to obtain (in order)

1. **Confirm the legal entity & address.** Sole proprietor, Commonwealth of
   Virginia. Have the legal business name and physical address ready — they must
   match exactly across every system.
2. **Get a UEI (Unique Entity Identifier).** A 12-character ID assigned in
   SAM.gov; it replaced the DUNS number in April 2022. Created as part of entity
   registration — no separate DUNS step.
3. **CAGE code.** Five-character Commercial and Government Entity code. For
   domestic entities it is **assigned automatically** during SAM.gov
   registration — you do not request it separately.
4. **Complete the full SAM.gov entity registration.** Includes Reps & Certs.
   Required before you can be awarded a federal contract. Renew annually.
5. **Confirm NAICS code selections.** Already chosen on the capability statement:
   - **541511** — Custom Computer Programming Services (primary; this is the
     web-development code).
   - **541512** — Computer Systems Design Services.
   - **513210** — Software Publishers.
   - **541519** — Other Computer Related Services (optional).
   Add/adjust in SAM.gov as the offering evolves.
6. **Self-certify small business size.** The 541511 SBA size standard is
   ~$34M average annual receipts, so a sole proprietorship qualifies easily.
7. **Evaluate set-aside eligibility.** Decide whether any socioeconomic
   programs apply (8(a), HUBZone, SDVOSB/VOSB, WOSB/EDWOSB). **Do not claim any
   you do not qualify for** — the capability statement currently states only
   "Small Business; other set-asides under evaluation."

## After registration: update the capability statement

The public pages deliberately say nothing about registration status — they
describe the work, not the back-office process. So the only edit needed once
you're registered is to **add the identifiers** to the corporate-data block.

In `src/routes/capabilities/+page.svelte`, add two rows near the top of the
`<dl class="capability-data">` block (under "Location"):

```html
<dt>UEI (Unique Entity Identifier)</dt>
<dd>YOUR-12-CHAR-UEI</dd>

<dt>CAGE code</dt>
<dd>YOUR-CAGE</dd>
```

- Update the **Socioeconomic status** line if any set-aside certification is
  granted.

Then run `pnpm build` and `pnpm check`. Identifiers are factual data, not legal
commitments, so this normally doesn't trigger the `docs/legal-status.md` tracker.

## Optional follow-ups

- Produce a one-page **PDF** capability statement once the data is real
  (federal buyers often ask for a PDF attachment).
- Watch for relevant solicitations on SAM.gov under the NAICS codes above.
