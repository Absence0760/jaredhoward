<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import { onNavigate } from '$app/navigation';
	import { site } from '#lib/site.ts';
	import SiteHeader from '#lib/components/SiteHeader.svelte';
	import LandingFooter from '#lib/components/LandingFooter.svelte';

	let { children } = $props();

	// Tells the inline bootstrap in `app.html` that hydration happened, so its
	// watchdog leaves the `js` class (and with it the scroll-reveal hidden
	// state) in place. Without this the watchdog would disarm reveals on every
	// page load two seconds in.
	$effect(() => {
		document.documentElement.setAttribute('data-hydrated', '');
	});

	// One shell for the whole site: the masthead and the footer card wrap every
	// route. The landing page renders its own <main> because its bands are
	// full-bleed; every other route gets the centred reading column below.
	const isLanding = $derived(page.url.pathname === '/');

	// Reproduce the old transitions.js 220ms cross-fade via the View
	// Transitions API. Progressive enhancement: browsers without the API (or
	// users who prefer reduced motion) simply hard-swap. SvelteKit's client
	// router only intercepts internal links, so external/mailto/hash links are
	// unaffected — no manual opt-out needed.
	onNavigate((navigation) => {
		if (typeof document === 'undefined') return;
		// View Transitions API isn't in the baseline DOM lib types yet.
		const doc = document as Document & {
			startViewTransition?: (callback: () => Promise<void> | void) => void;
		};
		if (!doc.startViewTransition) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		return new Promise((resolve) => {
			doc.startViewTransition!(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<link rel="canonical" href={site.url + page.url.pathname} />
</svelte:head>

<SiteHeader />

{#if isLanding}
	{@render children()}
{:else}
	<main class="page">
		{@render children()}
	</main>
{/if}

<LandingFooter />
