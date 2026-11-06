<script lang="ts">
	import { site } from '#lib/site.ts';
	import SectionRail from '#lib/components/SectionRail.svelte';
	import WorkThumb from '#lib/components/WorkThumb.svelte';
	import Icon from '#lib/components/Icon.svelte';

	// The home page shows three projects, matching the reference composition.
	// This page is where the other three live, and where every project's long
	// `blurb` and full `tech` list are actually rendered — the home cards use
	// the short `cardBlurb` and the first three technologies only.
	//
	// It also gives the home page's "View all work" a destination. That link
	// used to point at the GitHub profile, which promised "all work" and
	// delivered a code host: off-site, and asking a small-business buyer to
	// evaluate raw repositories.
	const slug = (name: string) =>
		name
			.toLowerCase()
			.replace(/[^\w\s-]/g, '')
			.trim()
			.replace(/[\s_]+/g, '-');

	const sections = site.projects.map((project) => ({
		id: slug(project.name),
		label: project.name
	}));
</script>

<svelte:head>
	<title>Work | Jared Howard</title>
	<meta
		name="description"
		content="Public projects by Jared Howard — test tooling, e-commerce, internal tools, mobile, scientific computing and a game engine."
	/>
</svelte:head>

<article class="prose">
	<header class="prose-header">
		<h1>Work</h1>
	</header>

	<div class="post-content">
		<p>
			Public projects, each with its source on GitHub. They span the range I actually work
			across — test tooling and CI, e-commerce, internal business apps, mobile, scientific
			computing, and a game engine — rather than one narrow stack repeated six times.
		</p>

		<ul class="work-entries">
			{#each site.projects as project (project.repo)}
				<li class="work-entry">
					<div class="work-entry-preview">
						<WorkThumb thumb={project.thumb} />
						<span class="work-badge">{project.kind}</span>
					</div>

					<div class="work-entry-body">
						<h2 id={slug(project.name)}>{project.name}</h2>
						<p>{project.blurb}</p>

						<ul class="chips">
							{#each project.tech as item (item)}
								<li>{item}</li>
							{/each}
						</ul>

						<div class="work-entry-links">
							<a
								class="card-link"
								href={project.repo}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="{project.name} source on GitHub"
							>
								<Icon name="github" size={16} />
								<span>Source</span>
								<Icon name="arrow" size={15} class="icon-nudge" />
							</a>
							{#if project.url}
								<a
									class="card-link card-link-quiet"
									href={project.url}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Visit the {project.name} live site"
								>
									<span>Live site</span>
									<Icon name="external" size={14} />
								</a>
							{/if}
						</div>
					</div>
				</li>
			{/each}
		</ul>

		<hr />

		<p>
			Something here close to what you need building? <a href="/contact/">Get in touch</a> — or read
			how I <a href="/services/">work and bill</a>.
		</p>
	</div>
</article>

<SectionRail {sections} label="Projects" />
