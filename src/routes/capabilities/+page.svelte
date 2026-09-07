<script lang="ts">
	import SectionRail from '$lib/components/SectionRail.svelte';

	// Corporate data is the first thing a SAM.gov buyer scans for, so it sits in
	// the rail rather than at the bottom of a long page. Below 1080px the rail
	// stops being a column and the block flows inline after the prose, reading
	// in roughly its old position.
	// NOTE: the UEI/CAGE rows go into this same <dl class="capability-data">
	// once SAM.gov registration completes — see docs/sam-gov-checklist.md.
	//
	// This page is titled "Experience" for a general audience, but it *is* the
	// federal capability statement: the corporate-data rail, the NAICS codes and
	// the SAM.gov checklist all still apply. The route stays /capabilities/.
	const sections = [
		{ id: 'core-competencies', label: 'Core competencies' },
		{ id: 'differentiators', label: 'Differentiators' },
		{ id: 'relevant-experience', label: 'Relevant experience' }
	];
</script>

<svelte:head>
	<title>Experience | Jared Howard</title>
	<meta
		name="description"
		content="Experience and capabilities of Jared Howard — custom software and web development, test automation, and cloud services. NAICS 541511 / 541512 / 513210."
	/>
</svelte:head>

<article class="prose">
	<header class="prose-header">
		<h1>Experience</h1>
	</header>

	<div class="post-content">
		<p>
			<strong>Jared Howard</strong> — Sole proprietor, Virginia. Custom software and
			web development, test automation, and cloud services for commercial and government clients.
		</p>

		<h2 id="core-competencies">Core competencies</h2>
		<ul>
			<li>
				<strong>Custom application &amp; web development</strong> — web applications, multi-tenant
				SaaS, internal tools, and e-commerce, from design through deployment.
			</li>
			<li>
				<strong>Test automation &amp; quality engineering</strong> — automated end-to-end test
				suites (Cypress, Playwright), CI/CD integration, and QA process design.
			</li>
			<li>
				<strong>Cloud &amp; infrastructure</strong> — AWS deployments and infrastructure-as-code
				with Terraform, built to least-privilege and security-conscious defaults.
			</li>
			<li>
				<strong>Application maintenance &amp; modernization</strong> — taking over, securing, and
				improving existing web applications.
			</li>
		</ul>

		<h2 id="differentiators">Differentiators</h2>
		<ul>
			<li>
				<strong>Principal-led delivery.</strong> The engineer you contract with does the work — no
				handoff to a separate delivery team.
			</li>
			<li>
				<strong>Modern, maintainable stack.</strong> TypeScript/JavaScript, Python, and static-first
				delivery where it fits — fewer dependencies, smaller attack surface.
			</li>
			<li>
				<strong>Quality engineering built in.</strong> Automated testing is a core competency, not an
				afterthought.
			</li>
			<li>
				<strong>Security-conscious by default.</strong> Least-privilege cloud setups and no
				unnecessary third-party code.
			</li>
		</ul>

		<h2 id="relevant-experience">Relevant experience</h2>
		<p><em>Selected commercial experience:</em></p>
		<ul>
			<li>
				<strong>Senior SDET → QA Software Engineer, Paymerang &amp; enChoice, Inc. (2023–present)</strong>
				— build and maintain automated test suites (Cypress, Playwright), security automation with
				OWASP ZAP, CI pipelines (Bitbucket) for the test suites, and frontend/backend contributions
				across teams.
			</li>
			<li>
				<strong>QA Engineer, enChoice (2022–2023)</strong> — feature testing, automated test-suite
				maintenance, and Cucumber integration.
			</li>
			<li>
				<strong>Client website delivery (NYCTechPros externship)</strong> — developed and shipped a
				website for an external client.
			</li>
		</ul>
		<p>See the full <a href="/cv/">CV</a> for detailed history, education, and skills.</p>

		<hr />

		<p>
			To discuss a requirement or request a tailored capability statement,
			<a href="/contact/">get in touch</a>.
		</p>
	</div>
</article>

<SectionRail {sections}>
	<div class="rail-card">
		<p class="rail-card-label">Corporate data</p>
		<dl class="capability-data">
			<dt>Legal name</dt>
			<dd>Jared Howard (sole proprietor)</dd>

			<dt>Location</dt>
			<dd>Virginia, United States</dd>

			<dt>Primary NAICS</dt>
			<dd>541511 — Custom Computer Programming Services</dd>

			<dt>Secondary NAICS</dt>
			<dd>
				541512 — Computer Systems Design Services<br />
				513210 — Software Publishers<br />
				541519 — Other Computer Related Services
			</dd>

			<dt>Business size</dt>
			<dd>Small Business (self-certified; 541511 SBA size standard $34M)</dd>

			<dt>Socioeconomic status</dt>
			<dd>Small Business. Other set-aside eligibility under evaluation.</dd>

			<dt>Point of contact</dt>
			<dd>Jared Howard — <a href="mailto:jared@jaredhoward.com">jared@jaredhoward.com</a></dd>
			</dl>
	</div>
</SectionRail>
