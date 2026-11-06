<script lang="ts">
	import SectionRail from '$lib/components/SectionRail.svelte';
	import { site } from '$lib/site';

	// The "Data deletion instructions URL" for the Social Publisher developer
	// apps (Meta asks for one by name). Linked from /social/privacy/ and
	// /social/terms/, not from the nav. Changes go through
	// docs/legal-status.md like the other legal pages.
	const sections = [
		{ id: 'remove-the-app', label: '1. Remove the app' },
		{ id: 'what-happens-next', label: '2. What happens next' },
		{ id: 'ask-for-deletion-by-email', label: '3. Ask for deletion by email' }
	];
</script>

<svelte:head>
	<title>Social Publisher: data deletion instructions | Jared Howard</title>
	<meta
		name="description"
		content="How to remove the Jared Howard Social Publisher app and have any data it holds deleted."
	/>
</svelte:head>

<article class="prose">
	<header class="prose-header">
		<h1>Social Publisher: data deletion instructions</h1>
	</header>

	<div class="post-content">
		<p><em>Effective: November 6, 2026. Last reviewed: November 6, 2026.</em></p>

		<p>
			<strong>Jared Howard Social Publisher</strong> only publishes posts to social accounts I own.
			It does not collect data about other people. See the
			<a href="/social/privacy/">Social Publisher privacy policy</a> for what it accesses.
		</p>

		<h2 id="remove-the-app">1. Remove the app</h2>
		<p>Removing Jared Howard Social Publisher from a platform revokes its access there:</p>
		<ul>
			<li>
				<strong>YouTube (Google):</strong> go to
				<a href="https://myaccount.google.com/permissions">myaccount.google.com/permissions</a>,
				choose the app and remove its access.
			</li>
			<li>
				<strong>TikTok:</strong> in the TikTok app, open <strong>Settings and privacy &gt; Security
				&gt; Manage app permissions</strong> and remove the app.
			</li>
			<li>
				<strong>Facebook, Instagram or Threads:</strong> open <strong>Settings &amp; privacy &gt;
				Apps and websites</strong> (or <strong>Business integrations</strong>) and remove the app.
			</li>
			<li>
				<strong>X:</strong> open <strong>Settings and privacy &gt; Security and account access
				&gt; Apps and sessions &gt; Connected apps</strong> and revoke the app's access.
			</li>
			<li>
				<strong>Bluesky:</strong> open <strong>Settings &gt; Privacy and security &gt; App
				passwords</strong> and delete the app password created for it.
			</li>
			<li>
				<strong>LinkedIn:</strong> open <strong>Settings &amp; Privacy &gt; Data privacy &gt;
				Permitted services</strong> and remove the app.
			</li>
		</ul>

		<h2 id="what-happens-next">2. What happens next</h2>
		<p>
			I delete the connection, its access tokens and the basic account details stored with it from
			the scheduler. When Meta notifies the app that it was removed, that notice is only
			acknowledged; the endpoint that receives it holds no user data.
		</p>

		<h2 id="ask-for-deletion-by-email">3. Ask for deletion by email</h2>
		<p>
			If you believe the app holds data about you, email
			<a href="mailto:{site.email}">{site.email}</a> with the subject line
			<strong>"Social Publisher data deletion"</strong>. I will answer within 30 days.
		</p>
	</div>
</article>

<SectionRail {sections} />
