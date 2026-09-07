<script lang="ts">
	import type { Snippet } from 'svelte';
	import { railScrollDelta } from '$lib/railScroll';

	// The right-hand rail on reading pages, ≥1080px only.
	//
	// It exists because the reading column is 68ch inside a 1280px page, which
	// left ~450px of empty field down the right of every interior route. A
	// hard-left column beside a large empty gutter doesn't read as "centred
	// text", it reads as a page whose right-hand element failed to load — the
	// eye holds a slot open for a figure that never arrives. So the rail gives
	// that field a job rather than deleting it.
	//
	// Two independent parts, either optional:
	//   · `children` — a card. Used by Experience (/capabilities/) to lift the corporate-data
	//     block (the first thing a SAM.gov buyer scans for) off the bottom of a
	//     long page, and by Contact to surface the email address.
	//   · `sections` — an index of the page's own h2s.
	//
	// Progressive enhancement throughout: the index is a plain list of anchor
	// links that works with no JavaScript and no observer. The active marker is
	// the only scripted part, and its absence costs nothing.
	interface Section {
		id: string;
		label: string;
	}

	let {
		sections = [],
		label = 'On this page',
		children
	}: { sections?: readonly Section[]; label?: string; children?: Snippet } = $props();

	let active = $state<string | null>(null);
	let nav = $state<HTMLElement | null>(null);

	$effect(() => {
		if (sections.length === 0) return;

		const targets = sections
			.map((s) => document.getElementById(s.id))
			.filter((el): el is HTMLElement => el !== null);
		if (targets.length === 0) return;

		// Bias the band toward the top of the viewport: the heading a reader is
		// "in" is the last one they scrolled past, not whichever happens to be
		// centred. Without the negative bottom inset, three headings are on
		// screen at once on a long legal page and the marker jitters between them.
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) active = entry.target.id;
				}
			},
			{ rootMargin: '-96px 0px -72% 0px', threshold: 0 }
		);
		for (const target of targets) observer.observe(target);

		// A heading scrolled past the top edge stops intersecting without any
		// other heading starting to, so the last section on a short tail would
		// never light up. Fall back to "whichever heading is highest above the
		// fold" whenever the observer has nothing to say.
		const onScroll = () => {
			if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 4) {
				active = sections[sections.length - 1].id;
			}
		};
		window.addEventListener('scroll', onScroll, { passive: true });

		return () => {
			observer.disconnect();
			window.removeEventListener('scroll', onScroll);
		};
	});

	// Keep the marked item in view when the index is longer than the rail.
	//
	// This must move the rail's OWN scroll box and nothing else. The obvious
	// `link.scrollIntoView({ block: 'nearest' })` scrolls every scrollable
	// ancestor including the document, so marking the active item dragged the
	// page back toward the rail while the reader was scrolling away from it —
	// and `html { scroll-behavior: smooth }` animated the drag. On every rail
	// page that formed a loop the reader could not escape: scroll down, a new
	// heading activates, the document is pulled up, the previous heading
	// re-activates. Measured on /work/ at 1440px, scrollY oscillated between
	// 259 and 600 and never advanced.
	$effect(() => {
		if (!active || !nav) return;
		const link = nav.querySelector<HTMLElement>(`a[href="#${CSS.escape(active)}"]`);
		const box = nav.closest<HTMLElement>('.section-rail-inner');
		if (!link || !box) return;

		const delta = railScrollDelta(box.getBoundingClientRect(), link.getBoundingClientRect());
		// A no-op when the rail isn't overflowing, which is the common case.
		if (delta !== 0) box.scrollTop += delta;
	});
</script>

<aside class="section-rail">
	<div class="section-rail-inner">
		{#if children}
			{@render children()}
		{/if}

		{#if sections.length > 0}
			<nav bind:this={nav} class="rail-index" aria-label={label}>
				<p class="rail-index-label">{label}</p>
				<ul>
					{#each sections as section (section.id)}
						<li>
							<a
								href="#{section.id}"
								class:is-active={active === section.id}
								aria-current={active === section.id ? 'true' : undefined}
							>
								{section.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		{/if}
	</div>
</aside>
