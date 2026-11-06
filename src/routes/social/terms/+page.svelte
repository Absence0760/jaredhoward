<script lang="ts">
	import SectionRail from '$lib/components/SectionRail.svelte';
	import { site } from '$lib/site';

	// Terms of Service URL for the "Jared Howard Social Publisher" developer
	// apps (TikTok requires one; Google's OAuth consent screen accepts one).
	// Linked from /social/privacy/ and the app listings, not from the nav.
	// Changes go through docs/legal-status.md like the other legal pages.
	const sections = [
		{ id: 'what-it-is', label: '1. What it is' },
		{ id: 'what-it-does', label: '2. What it does' },
		{ id: 'platform-terms', label: '3. Platform terms' },
		{ id: 'no-warranty', label: '4. No warranty' },
		{ id: 'removing-access', label: '5. Removing access' },
		{ id: 'contact', label: '6. Contact' }
	];
</script>

<svelte:head>
	<title>Social Publisher: terms of service | Jared Howard</title>
	<meta
		name="description"
		content="The terms for the Jared Howard Social Publisher app, a private tool that publishes my own posts to my own social accounts."
	/>
</svelte:head>

<article class="prose">
	<header class="prose-header">
		<h1>Social Publisher: terms of service</h1>
	</header>

	<div class="post-content">
		<p><em>Effective: November 6, 2026. Last reviewed: November 6, 2026.</em></p>

		<p>
			These terms cover <strong>Jared Howard Social Publisher</strong>, the developer app I use to
			publish my own posts. They do not replace the site-wide
			<a href="/terms/">Terms of Service</a>, which cover this website and my paid services. The
			<a href="/social/privacy/">Social Publisher privacy policy</a> says what the app accesses.
		</p>

		<h2 id="what-it-is">1. What it is</h2>
		<p>
			I run a self-hosted social media scheduler (Postiz, which is open source). It publishes posts
			to social accounts that I own and manage for my own projects, such as Threkir and FeohLedger.
			It is not offered to the public. I am its only user.
		</p>

		<h2 id="what-it-does">2. What it does</h2>
		<p>
			It publishes posts and media that I write or make to accounts I control, on YouTube, TikTok,
			Facebook, Instagram, Threads, X, Bluesky and LinkedIn. It does this only through each
			platform's official API, and only to accounts I have connected myself.
		</p>

		<h2 id="platform-terms">3. Platform terms</h2>
		<p>
			Using the app means also following the terms of each platform it publishes to. In
			particular:
		</p>
		<ul>
			<li>
				YouTube uploads are made through the YouTube API Services. By using the app with YouTube
				you agree to the <a href="https://www.youtube.com/t/terms">YouTube Terms of Service</a>,
				and Google's handling of data is described in the
				<a href="https://policies.google.com/privacy">Google Privacy Policy</a>.
			</li>
			<li>
				TikTok posts are made through TikTok's API and are subject to the
				<a href="https://www.tiktok.com/legal/terms-of-service">TikTok Terms of Service</a>.
			</li>
		</ul>

		<h2 id="no-warranty">4. No warranty</h2>
		<p>
			The app is provided as is, without any warranty. I do not promise that it will be available,
			that a post will publish at a given time, or that it will work with every platform feature.
		</p>

		<h2 id="removing-access">5. Removing access</h2>
		<p>
			You can revoke the app's access from the platform's own settings at any time, and ask me to
			delete anything it holds. The steps are on the
			<a href="/social/data-deletion/">data deletion instructions</a> page. I can also disconnect
			any account, or stop running the app, at any time.
		</p>

		<h2 id="contact">6. Contact</h2>
		<p>
			<strong>Jared Howard</strong><br />
			<a href="mailto:{site.email}">{site.email}</a>
		</p>
	</div>
</article>

<SectionRail {sections} />
