<script lang="ts">
	import { site } from '$lib/site';
	import { reveal } from '$lib/reveal';
	import { spotlight } from '$lib/spotlight';
	import HeroRibbon from '$lib/components/HeroRibbon.svelte';
	import WorkRow from '$lib/components/WorkRow.svelte';
	import Icon from '$lib/components/Icon.svelte';

	const featured = site.projects.filter((project) => project.featured);
</script>

<svelte:head>
	<title>{site.title} — {site.role}</title>
	<meta name="description" content={site.description} />
</svelte:head>

<main class="landing">
	<!-- ── Hero ─────────────────────────────────────────────────
	     Above the fold, so nothing here waits on an IntersectionObserver:
	     the entrance is a pure-CSS sequence (see "Hero entrance" in app.css)
	     that has settled by 1080ms. -->
	<section class="hero" aria-labelledby="hero-title">
		<div class="hero-figure"><HeroRibbon /></div>

		<div class="hero-copy">
			<p class="eyebrow hero-in hero-in-eyebrow">
				<span class="eyebrow-dot" aria-hidden="true"></span>
				<span>{site.role} · Virginia</span>
			</p>

			<h1 class="hero-title hero-in hero-in-title" id="hero-title">
				Software and web development for <span class="hero-accent">businesses</span> and
				<span class="hero-accent">government</span>.
			</h1>

			<p class="hero-lead hero-in hero-in-lead">
				I build custom applications, internal tools, and automated test suites that are reliable,
				maintainable, and built to last.
			</p>

			<div class="hero-actions">
				<a class="button button-primary hero-in hero-in-cta1" href="/capabilities/">
					<span>Experience</span>
					<Icon name="arrow" size={17} class="icon-nudge" />
				</a>
			</div>
		</div>
	</section>

	<!-- ── What I do ────────────────────────────────────────── -->
	<section class="band" aria-labelledby="streams-label">
		<div class="band-head" data-reveal use:reveal={{}}>
			<h2 class="band-label" id="streams-label">What I do</h2>
			<span class="band-rule" aria-hidden="true"></span>
		</div>

		<div class="stream-row" use:spotlight={'.stream-card'}>
			<article class="stream-card" data-reveal use:reveal={{ index: 0 }}>
				<span class="stream-icon" aria-hidden="true"><Icon name="business" size={26} /></span>
				<h3>For small businesses</h3>
				<div class="stream-text">
					<p>
						Custom web apps, SaaS dashboards, e-commerce storefronts and internal tools — designed,
						built, hosted and maintained. Billed as a project, a retainer or a subscription.
					</p>
				</div>
				<a class="card-link" href="/services/">
					<span>Learn more</span>
					<Icon name="arrow" size={16} class="icon-nudge" />
				</a>
			</article>

			<article class="stream-card" data-reveal use:reveal={{ index: 1 }}>
				<span class="stream-icon" aria-hidden="true"><Icon name="government" size={26} /></span>
				<h3>For government</h3>
				<div class="stream-text">
					<p>
						Application development, systems integration and test automation for public-sector
						work, under NAICS 541511, 541512 and 513210.
					</p>
				</div>
				<a class="card-link" href="/capabilities/">
					<span>Learn more</span>
					<Icon name="arrow" size={16} class="icon-nudge" />
				</a>
			</article>
		</div>
	</section>

	<!-- ── Selected work ────────────────────────────────────── -->
	<section class="band" aria-labelledby="work-label">
		<div class="band-head" data-reveal use:reveal={{}}>
			<h2 class="band-label" id="work-label">Selected work</h2>
			<span class="band-rule" aria-hidden="true"></span>
			<!-- /work/, not the GitHub profile: "all work" promised a curated set
			     and delivered a code host, off-site, asking a small-business
			     buyer to evaluate raw repositories. -->
			<a class="band-action" href="/work/">
				<span>View all work</span>
				<Icon name="arrow" size={15} class="icon-nudge" />
			</a>
		</div>

		<WorkRow projects={featured} />
	</section>

	<!-- ── About ────────────────────────────────────────────── -->
	<section class="band" aria-labelledby="about-label">
		<div class="band-head" data-reveal use:reveal={{}}>
			<h2 class="band-label" id="about-label">About</h2>
			<!-- No band-action here: the closing CTA below is the page's only
			     action and carries far greater weight. The rule runs the full
			     measure instead. -->
			<span class="band-rule" aria-hidden="true"></span>
		</div>

		<!-- Two columns, because this is the page's last beat and it was ending on
		     a biography. The bio keeps its place; the right column is the page's
		     only call to action. It is a bare mailto by design — the button that
		     used to sit here sent the reader to /contact/ to find the address
		     they can now just click. That makes it the sole conversion path on
		     the page, so it is set at lead weight, not the 14px muted treatment
		     it wore when a button carried the load above it. It also fills the
		     ~40% of empty band a single paragraph left, so the page's rhythm
		     doesn't decay to nothing right at the end. -->
		<div class="about-grid">
			<p class="about-copy" data-reveal use:reveal={{}}>
				I'm based in Virginia and work as a QA-minded software engineer, building and maintaining
				automated test suites alongside the applications they support. My <a href="/cv/">CV</a> has
				the full background, and my
				<a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a> has the code.
			</p>

			<div class="about-cta" data-reveal use:reveal={{ index: 1 }}>
				<p class="about-cta-lead">Have something you need built?</p>
				<a class="about-cta-mail about-cta-mail-lead" href="mailto:{site.email}">
					<Icon name="mail" size={18} />
					<span>{site.email}</span>
				</a>
			</div>
		</div>
	</section>
</main>
