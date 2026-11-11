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
			url: 'https://feohledger.com',
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
			name: 'IC-WBT',
			repo: 'https://github.com/Absence0760/project-water-management',
			url: 'https://icwbt.jaredhoward.com',
			blurb:
				'Daily catchment water-balance modelling in the browser — a web replacement for a spreadsheet tool, covering river flow from rainfall, farm irrigation demand, dams, transfers and environmental-flow checks, with per-project sharing. Serverless on AWS, provisioned with Terraform.',
			tech: ['SvelteKit', 'Hono', 'PostgreSQL', 'AWS Lambda', 'Terraform'],
			kind: 'Water modelling',
			cardBlurb:
				'Daily catchment water-balance model — farms, dams, irrigation demand and environmental-flow checks, in the browser.',
			thumb: 'analytics'
		},
		{
			name: 'EWR Compliance',
			repo: 'https://github.com/Absence0760/ewr-compliance',
			url: 'https://ewr-compliance.jaredhoward.com/signin/',
			blurb:
				'Compares observed river flows with Environmental Water Requirements across four river basins — a static, map-based web app where flow files a user loads never leave their browser, behind an invite-only sign-in on AWS.',
			tech: ['SvelteKit', 'TypeScript', 'MapLibre', 'AWS Lambda', 'CloudFront', 'Terraform'],
			kind: 'Water modelling',
			cardBlurb:
				'Checks observed river flows against Environmental Water Requirements on a map; loaded files stay in the browser.',
			thumb: 'analytics'
		},
		{
			name: 'disag',
			repo: 'https://github.com/Absence0760/project-disag',
			blurb:
				'Disaggregates monthly streamflow into daily flows — a Python port of a legacy Delphi/Pascal hydrology model, run locally as a Tkinter GUI or CLI.',
			tech: ['Python', 'Tkinter', 'Delphi'],
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
		'/refunds/',
		// Home and policy pages for the Social Publisher developer apps (Meta, TikTok,
		// Google). In the sitemap, deliberately not in nav or footer: only the
		// app listings link here.
		'/social/',
		'/social/privacy/',
		'/social/data-deletion/',
		'/social/terms/'
	]
} as const;
