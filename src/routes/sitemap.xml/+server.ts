import { site } from '#lib/site.ts';

// Prerendered to build/sitemap.xml. It's unlinked, so vite.config.ts names
// it explicitly in the sveltekit() plugin's prerender.entries. Generated from site.routes so it
// can't drift from the actual route set.
export const prerender = true;

export function GET() {
	const urls = site.routes
		.map((route) => `\t<url>\n\t\t<loc>${site.url}${route}</loc>\n\t</url>`)
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

	return new Response(xml, {
		headers: { 'Content-Type': 'application/xml' }
	});
}
