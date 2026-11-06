import { describe, it, expect } from 'vitest';
import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { site } from './site';

const routesDir = resolve(dirname(fileURLToPath(import.meta.url)), '../routes');

describe('site metadata', () => {
	it('has an https apex URL with no trailing slash', () => {
		expect(site.url).toBe('https://jaredhoward.com');
	});

	it('exposes a role for the sidebar identity rail', () => {
		expect(site.role.length).toBeGreaterThan(0);
	});

	it('lists routes as absolute, trailing-slash paths (home excepted)', () => {
		for (const route of site.routes) {
			expect(route.startsWith('/')).toBe(true);
			if (route !== '/') {
				expect(route.endsWith('/')).toBe(true);
			}
		}
	});

	it('has no duplicate routes', () => {
		expect(new Set(site.routes).size).toBe(site.routes.length);
	});

	it('every sidebar nav target is a known route', () => {
		for (const link of site.nav) {
			expect(site.routes).toContain(link.href);
		}
	});

	it('every footer link target is a known route', () => {
		for (const link of site.footer) {
			expect(site.routes).toContain(link.href);
		}
	});

	it('lists the Social Publisher home and policy pages in the sitemap, not in nav or footer', () => {
		const social = ['/social/', '/social/privacy/', '/social/data-deletion/', '/social/terms/'];
		for (const route of social) {
			expect(site.routes).toContain(route);
			expect(site.nav.some((link) => link.href === route)).toBe(false);
			expect(site.footer.some((link) => link.href === route)).toBe(false);
		}
	});

	it('every listed route has a page under src/routes/', () => {
		for (const route of site.routes) {
			const page = resolve(routesDir, `.${route}`, '+page.svelte');
			expect(existsSync(page), `${route} has no ${page}`).toBe(true);
		}
	});

	it('every project links to an https GitHub repo and lists a tech stack', () => {
		expect(site.projects.length).toBeGreaterThan(0);
		for (const project of site.projects) {
			expect(project.name.length).toBeGreaterThan(0);
			expect(project.repo).toMatch(/^https:\/\/github\.com\//);
			expect(project.blurb.length).toBeGreaterThan(0);
			expect(project.tech.length).toBeGreaterThan(0);
			if (project.url !== undefined) {
				expect(project.url).toMatch(/^https:\/\//);
			}
		}
	});

	it('flags exactly three featured projects, matching the home page trio', () => {
		const featured = site.projects.filter((project) => project.featured);
		expect(featured).toHaveLength(3);
		// Every featured project is also in the full list /work/ renders — the
		// home page is a subset of that page, never a separate source of truth.
		for (const project of featured) {
			expect(site.projects).toContain(project);
		}
	});

	it('exposes a /work/ route for the projects the home page does not feature', () => {
		expect(site.routes).toContain('/work/');
		expect(site.nav.some((link) => link.href === '/work/')).toBe(true);
		// The point of the page: there is work beyond the featured trio.
		expect(site.projects.length).toBeGreaterThan(3);
	});

	it('derives unique /work/ anchor slugs from project names', () => {
		const slugs = site.projects.map((project) =>
			project.name
				.toLowerCase()
				.replace(/[^\w\s-]/g, '')
				.trim()
				.replace(/[\s_]+/g, '-')
		);
		expect(new Set(slugs).size).toBe(slugs.length);
		for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9-]+$/);
	});

	it('every project carries the fields the landing-page work card renders', () => {
		const treatments = ['analytics', 'storefront', 'ledger', 'mobile', 'terminal', 'engine'];
		for (const project of site.projects) {
			expect(project.kind.length).toBeGreaterThan(0);
			expect(project.cardBlurb.length).toBeGreaterThan(0);
			// The card gives the blurb roughly two lines; the long one is too long.
			expect(project.cardBlurb.length).toBeLessThanOrEqual(140);
			expect(project.tech.length).toBeGreaterThanOrEqual(3);
			expect(treatments).toContain(project.thumb);
		}
	});

	it('features exactly the three projects the landing-page work row shows', () => {
		expect(site.projects.filter((project) => project.featured)).toHaveLength(3);
	});

	it('exposes the profile links the landing-page footer and menu use', () => {
		expect(site.github).toMatch(/^https:\/\/github\.com\//);
		expect(site.email).toMatch(/^[^@\s]+@jaredhoward\.com$/);
	});
});
