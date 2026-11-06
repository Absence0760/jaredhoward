<script lang="ts">
	import { onMount } from 'svelte';
	import type { Project } from '#lib/site.ts';
	import { reveal } from '#lib/reveal.ts';
	import { spotlight } from '#lib/spotlight.ts';
	import WorkThumb from './WorkThumb.svelte';
	import Icon from './Icon.svelte';

	// Selected work. The two compositions are genuinely different interaction
	// models, not one grid at two widths:
	//   · ≥720px — a static grid. Nothing scrolls, nothing is a tab stop.
	//   · <720px — a snap-scroller with a peeking next card and a progress
	//     track. Six-ish items make dots noise; a proportional track reads as
	//     "how far through am I" at a glance and costs one element.
	// The scroller is only made keyboard-reachable when it can actually scroll,
	// so the desktop grid never picks up a pointless tab stop (WCAG 2.1.1
	// applies to scrollable regions — a grid is not one).
	let { projects }: { projects: readonly Project[] } = $props();

	let rail = $state<HTMLElement | null>(null);
	let scrollable = $state(false);
	/** How far through the scroll we are, 0–1. */
	let ratio = $state(0);
	/** Visible fraction of the track — the thumb's width, and the honest one:
	    card count says 33% for three cards that actually show 38% of the rail. */
	let visible = $state(1);

	onMount(() => {
		const node = rail;
		if (!node) return;

		let frame = 0;
		const measure = () => {
			const span = node.scrollWidth - node.clientWidth;
			scrollable = span > 4;
			ratio = span > 4 ? node.scrollLeft / span : 0;
			visible = node.scrollWidth > 0 ? node.clientWidth / node.scrollWidth : 1;
		};

		function onScroll() {
			if (frame) return;
			frame = requestAnimationFrame(() => {
				frame = 0;
				measure();
			});
		}

		measure();
		node.addEventListener('scroll', onScroll, { passive: true });
		const resize = new ResizeObserver(measure);
		resize.observe(node);

		return () => {
			node.removeEventListener('scroll', onScroll);
			resize.disconnect();
			cancelAnimationFrame(frame);
		};
	});
</script>

<div class="work-rail-wrap">
	<!-- The scroll container is a plain wrapper rather than the list itself, so
	     the list keeps its semantics while the scrollable region gets the tab
	     stop WCAG 2.1.1 requires. A scrollable region is exactly the case where a
	     non-interactive element must be focusable, which the lint rule can't see. -->
	<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
	<div
		bind:this={rail}
		class="work-rail"
		tabindex={scrollable ? 0 : undefined}
		role={scrollable ? 'region' : undefined}
		aria-label={scrollable ? 'Selected work, horizontally scrollable' : undefined}
	>
	<ul class="work-track" use:spotlight={'.work-card'}>
		{#each projects as project, i (project.repo)}
			<!-- staticBelow: below 720px these cards live in the horizontal snap
			     rail, where a scroll-reveal tuned for vertical runway leaves them
			     permanently blank. See RevealOptions.staticBelow. -->
			<li class="work-item" data-reveal use:reveal={{ index: i, staticBelow: 720 }}>
				<article class="work-card">
					<div class="work-preview">
						<WorkThumb thumb={project.thumb} />
						<span class="work-badge">{project.kind}</span>
					</div>

					<div class="work-body">
						<h3>{project.name}</h3>
						<p>{project.cardBlurb}</p>
						<ul class="chips">
							{#each project.tech.slice(0, 3) as item (item)}
								<li>{item}</li>
							{/each}
						</ul>
					</div>

					<div class="work-foot">
						<a
							class="card-link"
							href={project.repo}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="{project.name} source on GitHub"
						>
							<Icon name="github" size={16} />
							<span>View project</span>
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
								<span>Live</span>
								<Icon name="external" size={14} />
							</a>
						{/if}
					</div>
				</article>
			</li>
		{/each}
	</ul>
	</div>

	{#if scrollable}
		<div class="work-progress" aria-hidden="true">
			<span
				class="work-progress-thumb"
				style:--thumb-width="{(visible * 100).toFixed(2)}%"
				style:--thumb-shift="{(ratio * (1 / visible - 1) * 100).toFixed(2)}%"
			></span>
		</div>
	{/if}
</div>
