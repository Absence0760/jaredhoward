import { test, expect } from '@playwright/test';

// Invariants of the deployed artefact, asserted against the built output served
// the way GitHub Pages serves it. These are the claims the docs make about the
// site — the ones a manual audit re-checks by hand every time and, being
// manual, eventually skips.

const ROUTES = [
	'/',
	'/services/',
	'/work/',
	'/capabilities/',
	'/cv/',
	'/contact/',
	'/terms/',
	'/privacy/',
	'/refunds/',
	'/social/privacy/',
	'/social/data-deletion/'
];

const LEGAL = ['/contact/', '/terms/', '/privacy/', '/refunds/'];

test.describe('every route', () => {
	for (const route of ROUTES) {
		test(`${route} renders one visible h1 and the legal footer`, async ({ page }) => {
			await page.setViewportSize({ width: 1440, height: 900 });
			await page.goto(route, { waitUntil: 'networkidle' });

			// Visible, not merely present: /cv/ deliberately carries two h1s in the
			// DOM — one for screen, one for print — and exactly one is ever shown.
			const visibleH1s = await page.$$eval('h1', (els) =>
				els.filter((el) => el.getClientRects().length > 0).map((el) => el.textContent?.trim())
			);
			expect(visibleH1s, `expected exactly one visible h1, got ${visibleH1s.length}`).toHaveLength(1);

			const footerLinks = await page.$$eval('a[href]', (els) =>
				els.map((el) => new URL((el as HTMLAnchorElement).href).pathname)
			);
			for (const href of LEGAL) {
				expect(footerLinks, `${route} is missing the ${href} link`).toContain(href);
			}
		});

		test(`${route} has no horizontal overflow at 320px`, async ({ page }) => {
			// The narrowest width the design supports. Overflow here is the one
			// layout fault that makes a page unusable rather than merely ugly.
			await page.setViewportSize({ width: 320, height: 568 });
			await page.goto(route, { waitUntil: 'networkidle' });

			const overflow = await page.evaluate(() => {
				const d = document.documentElement;
				return d.scrollWidth - d.clientWidth;
			});
			expect(overflow, `${route} overflows horizontally by ${overflow}px`).toBeLessThanOrEqual(1);
		});
	}
});

test('the 404 page is served for an unknown URL, in the site design', async ({ page }) => {
	const response = await page.goto('/definitely-not-a-page/', { waitUntil: 'networkidle' });

	expect(response?.status(), 'an unknown URL must answer 404, not 200').toBe(404);

	// It is a hand-written static file that cannot link the hashed stylesheet,
	// so it is the page most likely to drift out of the design unnoticed —
	// which is exactly what happened once already.
	const links = await page.$$eval('footer a', (els) =>
		els.map((el) => new URL((el as HTMLAnchorElement).href).pathname)
	);
	for (const href of LEGAL) {
		expect(links, `the 404 page is missing the ${href} link`).toContain(href);
	}

	const h1 = await page.$$eval('h1', (els) => els.filter((e) => e.getClientRects().length > 0).length);
	expect(h1).toBe(1);
});

test('nothing is fetched from a third party', async ({ page }) => {
	// Privacy §4/§8 commits the site to first-party-only. A font, a script or an
	// analytics beacon added later would be a policy change before it was a code
	// change, and this is the only automated thing standing in its way.
	const offOrigin: string[] = [];
	page.on('request', (req) => {
		const url = new URL(req.url());
		const local = url.hostname === 'localhost' || url.hostname === '127.0.0.1';
		if (!local && url.protocol.startsWith('http')) offOrigin.push(`${req.resourceType()} ${req.url()}`);
	});

	for (const route of ROUTES) {
		await page.goto(route, { waitUntil: 'networkidle' });
	}

	expect(offOrigin, `off-origin requests: ${offOrigin.join(', ')}`).toEqual([]);
});

test('reveal animations never leave content invisible without JS', async ({ browser }) => {
	// The scroll-reveal arms `opacity: 0` before hydration. If the bundle fails
	// to run, every revealed element must still be shown — otherwise the page is
	// in the DOM but blank on screen.
	const context = await browser.newContext({ javaScriptEnabled: false });
	const page = await context.newPage();

	for (const route of ROUTES) {
		await page.goto(route, { waitUntil: 'domcontentloaded' });
		const hidden = await page.$$eval(
			'[data-reveal]',
			(els) => els.filter((el) => getComputedStyle(el).opacity === '0').length
		);
		expect(hidden, `${route} hides ${hidden} elements when JS is off`).toBe(0);
	}

	await context.close();
});
