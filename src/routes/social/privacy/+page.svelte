<script lang="ts">
	import SectionRail from '$lib/components/SectionRail.svelte';
	import { site } from '$lib/site';

	// Policy for the "Jared Howard Social Publisher" developer apps (YouTube,
	// TikTok, Meta, X, Bluesky, LinkedIn). Linked from the app listings, from
	// Privacy §1 and from /social/terms/, not from the nav. Changes go through
	// docs/legal-status.md like the other legal pages.
	const sections = [
		{ id: 'what-it-is', label: '1. What it is' },
		{ id: 'what-it-accesses', label: '2. What it accesses' },
		{ id: 'what-it-does-not-do', label: '3. What it does not do' },
		{ id: 'youtube-and-tiktok', label: '4. YouTube and TikTok' },
		{ id: 'where-data-is-kept', label: '5. Where data is kept' },
		{ id: 'removing-access-and-deleting-data', label: '6. Removing access and deleting data' },
		{ id: 'contact', label: '7. Contact' }
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
		<p><em>Effective: November 6, 2026. Last reviewed: November 6, 2026.</em></p>

		<p>
			This policy covers <strong>Jared Howard Social Publisher</strong>, the developer app I use to
			publish my own posts to YouTube, TikTok, Facebook, Instagram, Threads, X, Bluesky and
			LinkedIn. It does
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
				The access tokens a platform grants when I connect one of my own Pages, channels or
				accounts (for Bluesky, an app password I create for it).
			</li>
			<li>Basic profile or page details of those accounts: name, ID and picture.</li>
			<li>The posts and media I write and schedule, which it sends to the platform to publish.</li>
		</ul>

		<h2 id="what-it-does-not-do">3. What it does not do</h2>
		<p>
			It does not collect data about other people. It does not sell or share data with anyone. It
			shows no ads and runs no analytics.
		</p>

		<h2 id="youtube-and-tiktok">4. YouTube and TikTok</h2>
		<p>
			The app uses the <strong>YouTube API Services</strong>. From YouTube it reads my channel's
			name, ID and picture, and it uploads the videos I make, with their titles, descriptions and
			thumbnails. It stores only the OAuth tokens and basic channel information needed to publish,
			and the post content I write. It shares none of this with anyone; it is sent only to YouTube,
			to publish. By using it with YouTube you agree to the
			<a href="https://www.youtube.com/t/terms">YouTube Terms of Service</a>, and Google's handling
			of data is described in the
			<a href="https://policies.google.com/privacy">Google Privacy Policy</a>. You can revoke its
			access at any time at
			<a href="https://myaccount.google.com/permissions">myaccount.google.com/permissions</a>.
		</p>
		<p>
			From TikTok it uses only basic profile information (display name, ID and avatar) and
			permission to post the videos I make to my own account. You can revoke its access in the
			TikTok app under <strong>Settings and privacy &gt; Security &gt; Manage app
			permissions</strong>.
		</p>

		<h2 id="where-data-is-kept">5. Where data is kept</h2>
		<p>
			The scheduler runs only on a server I control, in Amazon Web Services (us-east-1), and no
			account is connected to it before then. Access tokens are stored encrypted at rest. I can
			disconnect any account at any time.
		</p>

		<h2 id="removing-access-and-deleting-data">6. Removing access and deleting data</h2>
		<p>
			You can revoke the app's access from each platform's own settings, and ask me to delete
			anything it holds. The steps are on the
			<a href="/social/data-deletion/">data deletion instructions</a> page.
		</p>

		<h2 id="contact">7. Contact</h2>
		<p>
			<strong>Jared Howard</strong><br />
			<a href="mailto:{site.email}">{site.email}</a>
		</p>
	</div>
</article>

<SectionRail {sections} />
