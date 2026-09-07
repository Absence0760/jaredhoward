<script lang="ts">
	import SectionRail from '$lib/components/SectionRail.svelte';

	// Index for the >=1080px right rail. Kept beside the markup rather than
	// derived from the DOM so it prerenders and works with no JavaScript.
	const sections = [
		{ id: 'custom-web-software-development', label: 'Custom web & software development' },
		{ id: 'government-federal-it-services', label: 'Government & federal IT services' },
		{ id: 'how-i-work', label: 'How I work' },
		{ id: 'engagement-billing', label: 'Engagement & billing' }
	];
</script>

<svelte:head>
	<title>Services | Jared Howard</title>
	<meta
		name="description"
		content="Custom web and software development for small businesses, plus application development and test automation for government buyers."
	/>
</svelte:head>

<article class="prose">
	<header class="prose-header">
		<h1>Services</h1>
	</header>

	<div class="post-content">
		<p>
			I build and maintain custom software. Most engagements fall into one of two streams —
			commercial work for small businesses, and contract work for government agencies. Everything is
			browser-based: no downloadable installers, no physical goods.
		</p>

		<h2 id="custom-web-software-development">Custom web &amp; software development</h2>
		<p>
			For small businesses, startups, and operators who need something built right and kept running:
		</p>
		<ul>
			<li>
				<strong>Web applications &amp; internal tools</strong> — dashboards, admin panels, and
				workflow tools tailored to how your business actually works.
			</li>
			<li>
				<strong>Multi-tenant SaaS</strong> — subscription products with per-customer accounts,
				billing via Stripe, and the supporting infrastructure.
			</li>
			<li>
				<strong>E-commerce storefronts</strong> — product catalogues, checkout, and Stripe payment
				integration.
			</li>
			<li>
				<strong>Maintenance &amp; modernization</strong> — taking over an existing site or app,
				fixing what's broken, and keeping it secure and up to date.
			</li>
		</ul>

		<h2 id="government-federal-it-services">Government &amp; federal IT services</h2>
		<p>Capability areas for public-sector work:</p>
		<ul>
			<li>
				<strong>Custom application development</strong> (NAICS 541511 — Custom Computer Programming
				Services).
			</li>
			<li><strong>Computer systems design &amp; integration</strong> (NAICS 541512).</li>
			<li><strong>Software development &amp; publishing</strong> (NAICS 513210).</li>
			<li>
				<strong>Test automation &amp; quality engineering</strong> — automated test suites (Cypress,
				Playwright), CI/CD pipelines, and QA process for software delivery.
			</li>
		</ul>
		<p>
			For the full federal profile — core competencies, differentiators, and corporate data — see
			the <a href="/capabilities/">Experience</a> page, which doubles as the capability statement.
		</p>

		<h2 id="how-i-work">How I work</h2>
		<ul>
			<li>
				<strong>Principal-led.</strong> You work directly with the engineer doing the build — not an
				account manager and an offshore handoff.
			</li>
			<li>
				<strong>Security-conscious.</strong> Static-first delivery where it fits, least-privilege
				cloud setups, and no unnecessary third-party dependencies.
			</li>
			<li>
				<strong>Transparent.</strong> Clear scope, clear pricing, and ongoing visibility into
				progress.
			</li>
		</ul>

		<h2 id="engagement-billing">Engagement &amp; billing</h2>
		<ul>
			<li><strong>Project fee</strong> — fixed scope, fixed price, for a defined build.</li>
			<li>
				<strong>Retainer</strong> — ongoing development, maintenance, and support billed monthly.
			</li>
			<li>
				<strong>Subscription</strong> — for products I host and operate, billed via Stripe
				Subscriptions.
			</li>
		</ul>
		<p>
			Billing terms, cancellation, and refunds are covered in the
			<a href="/terms/">Terms of Service</a> and
			<a href="/refunds/">Refund and Cancellation Policy</a>.
		</p>

		<hr />

		<p>
			<strong>Ready to talk?</strong> <a href="/contact/">Get in touch</a> with a short description
			of what you're trying to build and your rough timeline.
		</p>
	</div>
</article>

<SectionRail {sections} />
