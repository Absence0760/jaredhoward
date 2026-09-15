import { test, expect } from '@playwright/test';

// The landing page's conversion path and the site's published contact address.
// Both were changed deliberately (see docs/legal-status.md → "Change log — copy
// pass, 2026-09-06") and both are the kind of thing a later restyle silently
// reverts: a button reintroduced "for balance", an address copy-pasted from an
// old draft. `pnpm check` and Vitest cannot see either.

const ROUTES = [
	'/',
	'/services/',
	'/work/',
	'/capabilities/',
	'/cv/',
	'/contact/',
	'/terms/',
	'/privacy/',
	'/refunds/'
];

const EMAIL = 'jared@jaredhoward.com';

test('the hero CTA is a single button that reaches the Experience page', async ({ page }) => {
	await page.setViewportSize({ width: 1440, height: 900 });
	await page.goto('/', { waitUntil: 'networkidle' });

	const actions = page.locator('.hero-actions .button');
	await expect(actions, 'the hero carries exactly one call to action').toHaveCount(1);
	await expect(actions).toHaveText(/Experience/);

	// Assert arrival, not that a click "did not error": the button is the only
	// action in the fold, so it has to actually land somewhere.
	await actions.click();
	await page.waitForURL('**/capabilities/');
	await expect(page.locator('h1')).toHaveText('Experience');
});

test('the landing page offers no button routing to /contact/', async ({ page }) => {
	// Both "Start a project" buttons were removed: they sent the reader to
	// /contact/ to find an address the closing band now exposes directly.
	await page.setViewportSize({ width: 1440, height: 900 });
	await page.goto('/', { waitUntil: 'networkidle' });

	const contactButtons = await page.$$eval('main a.button[href]', (els) =>
		els
			.map((el) => new URL((el as HTMLAnchorElement).href).pathname)
			.filter((path) => path === '/contact/')
	);
	expect(contactButtons, 'a "Start a project"-style CTA is back in <main>').toEqual([]);

	// …and the closing band still gives the reader somewhere to go. Removing the
	// buttons must not have left the page with no conversion path at all.
	const mailto = page.locator('.about-cta-mail');
	await expect(mailto).toHaveAttribute('href', `mailto:${EMAIL}`);
	await expect(mailto).toBeVisible();
});

test('/contact/ is still reachable from the landing page shell', async ({ page }) => {
	// The page it routed to is load-bearing — the legal pages cite it as the
	// notice channel — so it has to survive the loss of the buttons.
	await page.setViewportSize({ width: 1440, height: 900 });
	await page.goto('/', { waitUntil: 'networkidle' });

	await page.click('a[href="/contact/"]');
	await page.waitForURL('**/contact/');
	await expect(page.locator('h1')).toHaveText('Contact');
});

test('the masthead nav labels the capability statement "Experience"', async ({ page }) => {
	await page.setViewportSize({ width: 1440, height: 900 });
	await page.goto('/', { waitUntil: 'networkidle' });

	const nav = page.locator('.masthead a[href="/capabilities/"]').first();
	await expect(nav).toHaveText('Experience');
});

test('every published address on every route is the current one', async ({ page }) => {
	// The legal-notice address appears on eight of the nine routes plus
	// SECURITY.md. One stale mailto is a notice channel that silently bounces.
	const seen: string[] = [];

	for (const route of ROUTES) {
		await page.goto(route, { waitUntil: 'networkidle' });

		const addresses = await page.$$eval('a[href^="mailto:"]', (els) =>
			els.map((el) => (el as HTMLAnchorElement).href.replace(/^mailto:/, '').split('?')[0])
		);
		for (const address of addresses) {
			seen.push(address);
			expect(address, `${route} publishes a stale address: ${address}`).toBe(EMAIL);
		}
	}

	// Progress, not absence: a selector that matched nothing would pass the loop
	// above without checking a single address.
	expect(seen.length, 'no mailto links were found at all — the check was vacuous').toBeGreaterThan(
		4
	);
});
