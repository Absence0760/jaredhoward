---
description: Pre-tag readiness gate. Checks working tree, main, CI status, and the delta since the last release tag. Reports a green/red checklist. Read-only; never tags.
---

Run a pre-tag readiness audit before publishing a GitHub release. Report a green/red checklist; never tag, push, or publish anything. The operator does the actual `gh release create` after they've reviewed the report.

## Why this exists

The deploy workflow (`.github/workflows/deploy.yml`) is **release-gated** — it fires when a GitHub Release is published (`gh release create vX.Y.Z`), not on push to `main`. So publishing a release *is* the production deploy: this command is the single yes/no before that irreversible step — "is the site currently in a state I'd be happy to call `vX.Y.Z` and push live?"

A failing universal gate (dirty tree, CI red, unpushed commits) almost always means what's on `main` differs from what the release tag will point at and deploy, which is the actual operational footgun this command exists to catch.

## When to use

**Right fit:** the operator is about to cut a release tag and wants a single yes/no.

**Wrong fit — refuse:**
- The operator is on a feature branch (not `main`) — explain that releases tag from `main`, ask whether to switch.

## Procedure

### 1. Confirm we're on main

```
git rev-parse --abbrev-ref HEAD
```

If not `main`, abort with: "releases tag from `main`; you're on `<branch>`. Switch with `git checkout main && git pull`, then re-run."

### 2. Run the universal gates

For each, mark **green** / **red** and capture a one-line reason for any red.

#### 2a. Working tree is clean

```
git status --porcelain
```

Empty → green. Anything → red ("uncommitted changes in: <files>"). There are no SOPS plaintext siblings to worry about in this repo — but flag any unexpected `build/` or `.svelte-kit/` output that didn't get gitignored.

#### 2b. main is up to date with origin

```
git fetch origin main
git rev-list --count HEAD..origin/main
git rev-list --count origin/main..HEAD
```

Both `0` → green. Behind → red. Ahead → red ("local main has unpushed commits — push first, wait for CI, then re-run"). Note: `git push` is on the `.claude/settings.json` deny list by default; surface this as a manual step.

#### 2c. Latest CI run on main is green

```
gh run list --branch main --limit 1 --json status,conclusion,workflowName,headSha,createdAt
```

`status=completed` and `conclusion=success` → green. Anything else → red ("CI on the head commit is `<status>/<conclusion>` — wait for green or investigate").

Also check the most recent runs of the security workflows on `main`:

```
gh run list --workflow=security.yml --branch main --limit 1
gh run list --workflow=secret-scan.yml --branch main --limit 1
gh run list --workflow=scorecard.yml --branch main --limit 1
gh run list --workflow=deploy.yml --branch main --limit 1
```

If any have an open failed run, surface as an amber row (informational; doesn't block but worth knowing). `deploy.yml` red is the one to actually treat as red — that means what's "deployed" doesn't match `main`.

If `gh` isn't installed or the operator isn't logged in, recommend `gh auth login` and skip — don't fail the whole report.

### 3. Delta since last release

Find the last release tag:

```
git describe --tags --match 'v[0-9]*' --abbrev=0 2>/dev/null || echo "(no prior release tag)"
```

If there is one, list the commits + files changed since that tag, grouped by directory:

```
git log --oneline <last-tag>..HEAD
git diff --stat <last-tag>..HEAD
git diff --name-only <last-tag>..HEAD | awk -F/ '{print $1}' | sort -u
```

Report:
- **Commits since:** count + one-line summaries
- **Top-level paths touched:** `src/`, `static/`, `docs/`, `.github/`, `.claude/`, root (single-line summary per)
- **Legal-page changes:** explicit yes/no on `src/routes/{terms,privacy,refunds,contact}/+page.svelte` and `docs/legal-status.md`. If yes, surface as amber — the operator should re-skim `docs/legal-status.md` "Maintenance rhythm" before tagging.

If `Commits since` is `0`, flag as red — there's nothing to release.

### 4. Sanity checks

#### 4a. Open security signals

```
gh api repos/{owner}/{repo}/code-scanning/alerts --jq '[.[] | select(.state=="open")] | length'
gh api repos/{owner}/{repo}/dependabot/alerts --jq '[.[] | select(.state=="open")] | length'
```

Non-zero either → amber. Don't block; just surface.

#### 4b. Legal-status tracker hot items

```
grep -c '\[ \] \*\*' docs/legal-status.md
```

If the tracker has open items in the "Launch gates" section that map to current legal-page commitments, surface those — they're hard blockers for "first paying subscriber", which a release tag implicitly says you're ready for.

### 5. Build the report

```
# Release readiness — proposed `v<x.y.z>`

## Universal gates

| Gate | Status | Detail |
|---|---|---|
| On main | green / red | ... |
| Working tree clean | green / red | ... |
| main pushed + in sync with origin | green / red | ... |
| CI green on HEAD | green / red | ... |
| Deploy workflow green on HEAD | green / red | ... |

## Delta since `v<last>`

- Commits: <n>
- Top-level paths touched: <list>
- Legal-page changes: <yes/no — and which if yes>

## Open audit signals

- CodeQL alerts open: <count>
- Dependabot alerts open: <count>
- Legal-status open launch-gate items: <count + brief>

## Changelog draft (commits since `v<last>`)

- abcd123 commit subject
- ...

## Verdict

ALL GREEN — ready to publish a release with:
  gh release create v<x.y.z> --title "v<x.y.z> - <short summary>" --notes "<...>"

or

NOT READY — fix the red items above first
```

### 6. Hand off

End with:

> If everything's green, the next step is:
> ```
> git push origin main      # if you have commits ahead
> gh release create v<x.y.z> --title "..." --notes "..."
> ```
> I won't run those — `git push` and `gh release create` are both on the deny list by default. That's your call.

**Do not tag, do not push, do not create a release, do not auto-fix any of the red gates.** This command is read-only.

## Notes

- The whole thing should take under a minute. If a gate hangs (e.g. `gh run list` on a slow connection), skip it with a `skipped — <reason>` row rather than blocking the report.
- `gh` is required for the CI-status check and the open-alert sweep. If unavailable, fall back to a one-line note: "install `gh` to auto-check CI; manual: open the Actions tab and confirm green on the head commit."
- This command does NOT replace `docs/domain-setup.md` or any deploy procedure. It's a pre-flight, not the release procedure itself.
