---
description: Find anything secret-shaped in git history, the committed working tree, GitHub Actions workflows, or a public asset
---

Audit for secrets / API keys / tokens / private addresses that should not be in this repo.

## Goal

This is a static site with **no application secrets**. The committed working tree should contain none — no `.env`, no `.sops`, no Stripe keys, no email passwords, no AWS credentials. Pre-commit gitleaks (`.pre-commit-config.yaml`) catches the obvious shapes; this audit is the back-stop for both the working tree and git history.

## What to check

1. **`.gitignore` covers known plaintext-secret paths.**
   - The current `.gitignore` ignores `build/` and `.svelte-kit/` (the SvelteKit prerender output and generated dir). That's correct. If anyone ever adds a `.env` or a `*.sops` file to this repo, `.gitignore` should be updated to cover the plaintext sibling — flag a missing entry as Medium.

2. **Working tree has no secret-shaped files.**
   - `find . -name '*.env*' -not -path './.git/*' 2>/dev/null` should return nothing.
   - `find . -name '*.pem' -o -name '*.key' -o -name 'id_rsa*' -o -name '*.p12' -not -path './.git/*' 2>/dev/null` should return nothing.
   - `grep -rE 'sk_live_|sk_test_|rk_live_|rk_test_|AIza|AKIA[0-9A-Z]{16}|ghp_[A-Za-z0-9]{36}|github_pat_' . --include='*.{md,html,svelte,ts,js,css,json,yml,yaml}' 2>/dev/null` should return nothing. Anything matching is at least High; a `_live_` key shape is Critical.

3. **Git history pickaxe.**
   - `git log --all -S 'sk_live_' -S 'AKIA' -S 'github_pat_' -S '-----BEGIN PRIVATE KEY' -S '-----BEGIN OPENSSH' --pretty=fuller`
   - The `-S` pickaxe finds commits that added or removed the literal pattern. A single touch on a real secret means that value is permanently exposed and needs rotation regardless of subsequent removal — flag as Critical with the recommendation "rotate the underlying credential, the value can be recovered from git history."

4. **GitHub Actions workflow secrets.**
   - `.github/workflows/*.yml`: every `env:` block should reference `${{ secrets.X }}` or `${{ vars.X }}`, never a literal value. Walk each workflow.
   - The `claude.yml` workflow uses `secrets.CLAUDE_CODE_OAUTH_TOKEN` and `vars.CLAUDE_AUTHORIZED_USER` — expected. Any other workflow that references a secret should justify it.
   - Workflows must not `echo $SECRET_X` or `set -x` with secret values in scope. Grep each `run:` block.
   - `actions/deploy-pages` uses GitHub's built-in `id-token: write` flow — no AWS / external credentials should ever appear in `deploy.yml`. A long-lived AWS / cloud-provider key in any workflow is Critical.

5. **Public asset leak.**
   - Search `static/` for any file containing key shapes — `sk_`, `rk_`, `AIza`, `Bearer `, hex strings ≥ 32 chars in JS / CSS source.
   - `static/cv.pdf` should not contain the operator's home address, phone number, or any private identifier the operator hasn't already chosen to publish. Skim the rendered PDF (not in scope for an automated audit — flag as a manual-review item).

6. **Component + page files.**
   - `src/` files are prerendered to HTML and served. Walk every file for hardcoded credentials, internal-only URLs, or private email addresses that aren't the published contact address. The published contact channel is in `src/routes/contact/+page.svelte` — anything in any other file is suspicious.

## Expected finding state

For this repo, the expected state is **zero secret-shaped findings**. A non-empty result is the load-bearing signal.

## Report

- **Critical** — a real secret ever in git history (any commit, any branch); a live API key in the working tree; an AWS access key in a workflow.
- **High** — a secret-shaped string in workflow logs (`echo $X`); a static asset that contains key-shaped content.
- **Medium** — `.gitignore` missing a path for a plaintext secret file that exists locally; a workflow with a literal secret value instead of `${{ secrets.X }}`.
- **Low** — undocumented intent on a `vars.X` reference, missing example entry for a future secret pattern.

For each: the literal pattern name and the file:line, what should change. **Never paste a found key value into the report — identify by name + location only.**

## Useful starting points

- `.github/workflows/secret-scan.yml` — the existing automated sweep (TruffleHog)
- `.github/workflows/claude.yml` — the only workflow here that legitimately references a secret
- `.gitignore` — currently single-line; the back-stop for anything added later
- `.pre-commit-config.yaml` — the pre-commit gitleaks hook

## Delegate to

Use the `repo-security-auditor` agent: `"Audit for secrets / API keys / tokens that may have leaked into git history, the working tree, GitHub Actions workflows, or a public asset."`

Read-only. Recommendations only — never paste a found key into the report. Identify by name + location.
