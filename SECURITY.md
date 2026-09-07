# Security Policy

This repository hosts the source for [jaredhoward.com](https://jaredhoward.com),
a static website built with [SvelteKit](https://svelte.dev/docs/kit)
(`adapter-static`, fully prerendered) and deployed to GitHub Pages. There is
no backend, database, or server in this repository; the deployed surface is
prerendered HTML, CSS, and a small amount of first-party JavaScript.

## Reporting a vulnerability

If you discover a vulnerability — whether in the deployed site, the build
configuration, the GitHub Actions workflows under `.github/`, or anywhere
else in this repository — please report it privately rather than opening a
public issue or pull request.

**Email:** [jared@jaredhoward.com](mailto:jared@jaredhoward.com)
**Subject line:** "Security report — jaredhoward.com"

Please include:

- A description of the issue and where it lives in the repository or on
  the deployed site.
- Steps to reproduce (or a proof-of-concept where appropriate).
- An impact assessment, if you have one.
- Whether you would like to be credited in the eventual fix.

I aim to acknowledge reports promptly and to coordinate on disclosure
once a fix is in place. Please do not file a public issue, open a public
pull request, or publicly disclose the vulnerability until we have agreed
on a disclosure timeline.

## Scope

**In scope** for this policy:

- Misconfigurations in GitHub Actions workflows under `.github/workflows/`.
- Vulnerabilities introduced by first-party client-side JavaScript in the
  Svelte components under `src/`.
- Information disclosure via deployed site content.
- Build-time vulnerabilities in the SvelteKit build config, dependencies, or
  generated artefacts that would be served from the public site.

**Out of scope** — please report these directly to the relevant upstream
project rather than to me:

- Vulnerabilities in SvelteKit / Vite / the npm toolchain itself, GitHub
  Pages infrastructure, or any of the third-party GitHub Actions used in
  `.github/workflows/`.
- Phishing, social-engineering, or impersonation attempts targeting the
  site operator or customers.
- Theoretical vulnerabilities without a practical exploit, or
  best-practice deviations that do not produce a concrete impact.

## What this policy is not

This policy covers vulnerabilities in the static site itself. It does
**not** cover billing, account, or privacy concerns about software
products or custom-development engagements provided through this site —
those are handled under the [Terms of Service](https://jaredhoward.com/terms/),
the [Privacy Policy](https://jaredhoward.com/privacy/), and the
[Refund and Cancellation Policy](https://jaredhoward.com/refunds/), with
the contact channels described on the [Contact](https://jaredhoward.com/contact/)
page.
