# jaredhoward

Professional services website for **Jared Howard** — custom web and software
development for small businesses and government agencies — at
[jaredhoward.com](https://jaredhoward.com). Doubles as the public business URL
for Stripe sign-up.

### Built with

 - [SvelteKit](https://svelte.dev/docs/kit) (Svelte 5) with `@sveltejs/adapter-static` — fully prerendered
 - TypeScript
 - Vite (build) + Vitest (unit tests)

No backend, no database. Prerendered to static HTML/CSS/JS and deployed to
GitHub Pages.

### Local development

```
pnpm install  # first time only
pnpm dev      # Vite dev server, live reload (http://localhost:7777)
pnpm build    # prerender to ./build
pnpm check    # svelte-check (types + component diagnostics)
pnpm test     # Vitest unit suite
```

See `docs/run-locally.md` for details and `CLAUDE.md` for repo conventions.
