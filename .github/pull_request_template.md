## Summary

<!-- 1–3 sentences on what this PR does and why. -->

## Changes

<!-- Bulleted list of the user-visible or developer-visible changes. -->

-
-

## Surface touched

- [ ] Pages / components (`src/routes/`, `src/lib/`) — including the legal pages
- [ ] Styles / site metadata (`src/app.css`, `src/lib/site.ts`)
- [ ] Build config (`vite.config.ts`, `tsconfig.json`, `package.json`)
- [ ] Static assets (`static/` — `CNAME`, `cv.pdf`, `robots.txt`, `404.html`)
- [ ] CI / GitHub Actions (`.github/`)
- [ ] Project docs (`docs/`, `CLAUDE.md`, `README.md`, etc.)
- [ ] `.claude/` tooling

## Static-site safety checklist

<!-- Tick what applies. Untick lines that genuinely don't apply, but
     don't delete the row — so the next reviewer can see you considered
     it. -->

- [ ] No third-party script / font / pixel / iframe added without a matching update to the Privacy page (`src/routes/privacy/`) (§4 and §8 commit the site to staying first-party only)
- [ ] No tracker / analytics / chat widget loaded on page load (consent gate or first-party only)
- [ ] No secret, API token, or private email address committed in components, styles, or config
- [ ] Legal-page edits run through `docs/legal-status.md` (Effective / Last reviewed updated where required; cross-references still resolve)
- [ ] `pnpm build` prerenders all routes; internal links still resolve (no dead anchors to `/terms/`, `/privacy/`, `/refunds/`, `/contact/`)
- [ ] If `static/CNAME` or the site `url` (`src/lib/site.ts`) changed, `docs/domain-setup.md` was followed and re-verified

## Test plan

<!-- How this was verified. Delete rows that don't apply. -->

- [ ] `pnpm check` + `pnpm test` pass locally
- [ ] `pnpm build` passes locally (all routes prerender)
- [ ] CI `CI gate` check is green

<!-- Walkthrough notes: -->
