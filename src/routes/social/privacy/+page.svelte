<script lang="ts">
	import SectionRail from '$lib/components/SectionRail.svelte';
	import { site } from '$lib/site';

	// Policy for the "Jared Howard Social Publisher" developer apps (Meta, and
	// LinkedIn later). Linked from the app listings, from Privacy §1 and from /social/terms/, not
	// from the nav. Changes go through docs/legal-status.md like the other
	// legal pages.
	const sections = [
		{ id: 'what-it-is', label: '1. What it is' },
		{ id: 'what-it-accesses', label: '2. What it accesses' },
		{ id: 'what-it-does-not-do', label: '3. What it does not do' },
		{ id: 'where-data-is-kept', label: '4. Where data is kept' },
		{ id: 'removing-access-and-deleting-data', label: '5. Removing access and deleting data' },
		{ id: 'contact', label: '6. Contact' }
	];
</script>

<svelte:head>
	<title>Social Publisher: privacy policy | Jared Howard</title>
	<meta
		name="description"
		content="What the Jared Howard Social Publisher app accesses, what it does with it, and how to have it deleted."
	/>
</svelte:head>

<article class="prose">
	<header class="prose-header">
		<h1>Social Publisher: privacy policy</h1>
	</header>

	<div class="post-content">
		<p><em>Effective: November 3, 2026. Last reviewed: November 3, 2026.</em></p>

		<p>
			This policy covers <strong>Jared Howard Social Publisher</strong>, the developer app I use on
			Meta (Facebook, Instagram and Threads), and later LinkedIn, to publish my own posts. It does
			not replace the site-wide <a href="/privacy/">Privacy Policy</a>, which covers this website and
			my paid services. The <a href="/social/terms/">Social Publisher terms of service</a> cover
			using the app.
		</p>

		<h2 id="what-it-is">1. What it is</h2>
		<p>
			I run a self-hosted social media scheduler (Postiz, which is open source). It publishes posts
			to social accounts that I own and manage for my own projects, such as Threkir and FeohLedger.
			It is not offered to the public. I am its only user.
		</p>

		<h2 id="what-it-accesses">2. What it accesses</h2>
		<ul>
			<li>
				The access tokens a platform grants when I connect one of my own Pages or accounts.
			</li>
			<li>Basic profile or page details of those accounts: name, ID and picture.</li>
			<li>The posts and media I schedule.</li>
		</ul>

		<h2 id="what-it-does-not-do">3. What it does not do</h2>
		<p>
			It does not collect data about other people. It does not sell or share data with anyone. It
			shows no ads and runs no analytics.
		</p>

		<h2 id="where-data-is-kept">4. Where data is kept</h2>
		<p>
			The scheduler runs only on a server I control, in Amazon Web Services (us-east-1), and no
			account is connected to it before then. Access tokens are stored encrypted at rest. I can
			disconnect any account at any time.
		</p>

		<h2 id="removing-access-and-deleting-data">5. Removing access and deleting data</h2>
		<p>
			You can revoke the app's access from your Facebook, Instagram or Threads settings, and ask me
			to delete anything it holds. The steps are on the
			<a href="/social/data-deletion/">data deletion instructions</a> page.
		</p>

		<h2 id="contact">6. Contact</h2>
		<p>
			<strong>Jared Howard</strong><br />
			<a href="mailto:{site.email}">{site.email}</a>
		</p>
	</div>
</article>

<SectionRail {sections} />
