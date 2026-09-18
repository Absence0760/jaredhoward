// Site-wide metadata — the SvelteKit equivalent of Zola's old config.toml.
// `url` is the production origin used for canonical links and the sitemap.

export interface NavLink {
	href: string;
	label: string;
}

export interface Project {
	name: string;
	repo: string;
	/** Live site, if the project has a public one. */
	url?: string;
	blurb: string;
	tech: readonly string[];
	/**
	 * Short uppercase category shown on the home page's work cards. It labels
	 * what the project *is*, not who it was for — nothing here claims a client.
	 */
	kind: string;
	/**
	 * Home-page short blurb. The long `blurb` above is what `/work/` renders;
	 * the home cards need ~2 lines, not ~5.
	 */
	cardBlurb: string;
	/** Surfaced in the home page's "Selected work" trio. */
	featured?: boolean;
	/** Decorative preview-panel treatment (see .work-thumb-* in app.css). */
	thumb: 'analytics' | 'storefront' | 'ledger' | 'mobile' | 'terminal' | 'engine';
}

export const site = {
	title: 'Jared Howard',
	role: 'Software Engineer',
	description:
		'Custom web and software development for small businesses and government agencies.',
	url: 'https://jaredhoward.com',
	github: 'https://github.com/Absence0760',
	email: 'jared@jaredhoward.com',

	// Sidebar navigation (order matters).
	nav: [
		{ href: '/', label: 'Home' },
		{ href: '/services/', label: 'Services' },
		{ href: '/work/', label: 'Work' },
		// Labelled "Experience" but served from /capabilities/ on purpose: the
		// path is what federal buyers have already been given, and a static
		// site cannot redirect. Don't "fix" the mismatch by moving the route.
		{ href: '/capabilities/', label: 'Experience' },
		{ href: '/cv/', label: 'CV' },
		{ href: '/contact/', label: 'Contact' }
	] satisfies NavLink[],

	// Public work (order matters). /work/ renders this array as-is, so the first
	// entry leads that page; the three flagged `featured` also appear in the home
	// page's "Selected work" trio, in this same order.
	projects: [
		{
			name: 'Cross-platform fitness app',
			repo: 'https://github.com/Absence0760/threkir',
			url: 'https://threkir.com',
			blurb:
				'Running, gym, and nutrition app — Flutter on iOS and Android with native Apple Watch and Wear OS companions, a SvelteKit web app, and a Supabase backend.',
			tech: ['Flutter', 'SwiftUI', 'SvelteKit', 'Supabase'],
			kind: 'Mobile',
			cardBlurb:
				'Running, gym and nutrition app — Flutter on iOS and Android with native watch companions.',
			thumb: 'mobile'
		},
		{
			name: 'Flakey',
			repo: 'https://github.com/Absence0760/project-flakey',
			blurb:
				'Self-hosted, CI-agnostic test-reporting dashboard — ingests Cypress, Playwright, Jest, and pytest results with flaky-test detection and multi-tenant Postgres row-level security.',
			tech: ['SvelteKit', 'TypeScript', 'Node', 'PostgreSQL', 'Docker'],
			kind: 'Developer tooling',
			cardBlurb:
				'Self-hosted test-reporting dashboard — ingests Cypress, Playwright, Jest and pytest results with flaky-test detection.',
			featured: true,
			thumb: 'analytics'
		},
		{
			name: 'Meryl Green Designs',
			repo: 'https://github.com/Absence0760/meryl-green-designs',
			url: 'https://merylgreendesigns.com',
			blurb:
				'E-commerce site for a design studio — gallery, PayFast checkout, and an owner-managed CMS. Serverless on AWS, provisioned end-to-end with Terraform.',
			tech: ['SvelteKit', 'Hono', 'AWS Lambda', 'Sanity CMS', 'Terraform'],
			kind: 'E-commerce',
			cardBlurb:
				'E-commerce site for a design studio — gallery, checkout and an owner-managed CMS, serverless on AWS.',
			featured: true,
			thumb: 'storefront'
		},
		{
			name: 'FeohLedger',
			repo: 'https://github.com/Absence0760/feohledger',
			blurb:
				'Full-stack accounts-payable app — multi-tenant invoice intake and approvals behind a Python API and a SvelteKit front end.',
			tech: ['SvelteKit', 'FastAPI', 'Python', 'PostgreSQL'],
			kind: 'Internal tools',
			cardBlurb:
				'Full-stack accounts-payable app — multi-tenant invoice intake and approvals behind a Python API.',
			featured: true,
			thumb: 'ledger'
		},
		{
			name: 'disag',
			repo: 'https://github.com/Absence0760/project-disag',
			url: 'https://disag.jaredhoward.com',
			blurb:
				'Disaggregates monthly streamflow into daily flows — a Python port of a legacy Delphi/Pascal hydrology model, with a SvelteKit web app and cross-platform CLI.',
			tech: ['Python', 'SvelteKit', 'Terraform'],
			kind: 'Scientific computing',
			cardBlurb:
				'Disaggregates monthly streamflow into daily flows — a Python port of a legacy Delphi hydrology model.',
			thumb: 'terminal'
		},
		{
			name: 'Going Dark',
			repo: 'https://github.com/Absence0760/project-gonedark',
			blurb:
				'Mobile-first RTS/FPS hybrid — command camps, then possess a single unit and go dark. Pre-production design plus a custom Rust game engine.',
			tech: ['Rust', 'WGSL', 'Kotlin'],
			kind: 'Game engine',
			cardBlurb:
				'Mobile-first RTS/FPS hybrid — pre-production design plus a custom Rust game engine.',
			thumb: 'engine'
		}
	] satisfies Project[],

	// Footer legal/contact links.
	footer: [
		{ href: '/contact/', label: 'Contact' },
		{ href: '/terms/', label: 'Terms' },
		{ href: '/privacy/', label: 'Privacy' },
		{ href: '/refunds/', label: 'Refunds' }
	] satisfies NavLink[],

	// Every prerendered route, for the sitemap. Keep in sync with src/routes/.
	routes: [
		'/',
		'/services/',
		'/work/',
		'/capabilities/',
		'/cv/',
		'/contact/',
		'/terms/',
		'/privacy/',
		'/refunds/'
	]
} as const;
