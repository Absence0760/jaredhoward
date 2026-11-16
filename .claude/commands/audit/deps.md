---
description: Dependency audit — GitHub Actions pinning, Dependabot coverage, action-version drift, plus the npm dependency tree (SvelteKit / Vite / Svelte + Vitest) and its lockfile.
---

Sweep dependencies for known CVEs and version drift; verify Dependabot covers everything and CI workflow pins aren't a supply-chain risk.

## What this is

This repo has a real npm dependency tree in `package.json` (SvelteKit / Vite / Svelte + Vitest `devDependencies`), pinned by `pnpm-lock.yaml`; `pnpm install --frozen-lockfile` runs in CI. There is no `Cargo.toml`, no `go.mod`, no `pyproject.toml`. So this audit has **two supply-chain surfaces**: the npm packages (run a `pnpm audit` pass and confirm Dependabot's `npm` ecosystem is monitoring them) and the GitHub Actions referenced in `.github/workflows/`. Several of those workflows have elevated permissions (`id-token: write` on `deploy.yml`, `contents: write` + `pull-requests: write` on `claude.yml` and `dependabot-auto-merge.yml`), so an un-pinned action ref on those is a supply-chain risk worth the same severity treatment a runtime CVE gets.

## What to check

1. **Dependabot coverage.** Read `.github/dependabot.yml`. The expected shape is:
   - Exactly one `package-ecosystem: "github-actions"` entry, `directory: "/"`, weekly schedule.
   - `open-pull-requests-limit` reasonable (currently 3 — fine for a small repo).
   - Grouped (`groups.all-actions.patterns: ["*"]`) so a single PR holds the week's bumps instead of one PR per action.
   - Commit-message prefix `chore(ci)` with scope — matches repo style.
   - Flag anything missing or anything that would create excessive PR churn.

2. **npm ecosystem coverage.** Confirm `.github/dependabot.yml` includes a `package-ecosystem: "npm"` entry (`directory: "/"`) so SvelteKit / Vite / Svelte / Vitest bumps get filed. If it's missing, the dependency tree is unmonitored — flag as High. `cargo` / `pip` / `gomod` remain out of scope (no matching manifest) — flag if added, since they would generate "no manifest found" errors.

   Also run `pnpm audit` and surface any advisory at Medium+ severity, with the recommended upgrade.

3. **GitHub Actions pinning.** Grep `.github/workflows/` for `uses: <action>@<ref>`.
   - SHA pins (`@<40-hex-chars>`) are the safer default for any workflow that touches `${{ secrets.* }}` or `id-token: write`. Scorecard's `Pinned-Dependencies` check enforces this.
   - Floating refs (`@v6`, `@main`) are supply-chain risks on elevated-permission workflows. Flag any on:
     - `.github/workflows/deploy.yml` (id-token: write) — Critical if floating.
     - `.github/workflows/claude.yml` (contents/pull-requests/issues write) — Critical if floating.
     - `.github/workflows/dependabot-auto-merge.yml` (contents/pull-requests write) — Critical if floating.
     - `.github/workflows/labeler.yml` (pull-requests write) — High.
     - `.github/workflows/pr-title-lint.yml` (read-only) — Low.
     - `.github/workflows/ci.yml`, `security.yml`, `secret-scan.yml`, `scorecard.yml` — Medium / High depending on permissions.
   - At time of last audit, every workflow in this repo pins by SHA with the version comment alongside (commit `89ab7ca` "ci: SHA-pin actions in deploy and ci workflows for Scorecard"). Expected state: all SHA-pinned.

4. **Action-version drift.**
   - For each pinned action, check whether a newer minor / patch version is available. Dependabot opens these as PRs weekly — the audit just confirms the auto-merge worked or surfaces any stuck PR.
   - `gh pr list --label "github_actions"` shows the current Dependabot queue.

5. **Auto-merge guardrails.**
   - Read `.github/workflows/dependabot-auto-merge.yml`. The author gate (`if: github.actor == 'dependabot[bot]'`) must be present. The signed-metadata check via `dependabot/fetch-metadata` must be present.
   - Major-version bumps must stay manual (the `update-type == 'version-update:semver-minor' || ...semver-patch'` gate).
   - Required CI checks must be configured in branch protection — this command can't read branch protection from inside the repo, so surface as "verify in repo Settings → Branches".

## Report

- **Critical** — a floating action ref on a workflow with elevated permissions (`id-token: write`, `contents: write`, `pull-requests: write`).
- **High** — a floating ref on a workflow without elevated permissions but with secrets access; Dependabot ecosystem missing; auto-merge guardrails weakened.
- **Medium** — version drift on a SHA-pinned action where a newer patch is available and Dependabot hasn't filed it; `open-pull-requests-limit` too high (>5 for this repo).
- **Low** — undocumented pinning rationale, grouping that could be tightened.

For each finding: action name + current ref + recommended ref + the file:line to change.

## Useful starting points

- `.github/dependabot.yml`
- `.github/workflows/*.yml` — grep `uses:` per file
- `.github/workflows/dependabot-auto-merge.yml` — auto-merge guardrails
- `.github/workflows/scorecard.yml` — pinned-dependencies check publisher
- Commit `89ab7ca` — the SHA-pinning baseline this repo set

## Delegate to

Use the `repo-security-auditor` agent: `"Audit dependency hygiene — GitHub Actions pinning, Dependabot coverage (Actions + npm), auto-merge guardrails, and a pnpm audit of the npm dependency tree (SvelteKit / Vite / Svelte + Vitest)."`

Read-only audit. Recommend upgrades; don't apply them without instruction.
