<script lang="ts">
	import { site } from '#lib/site.ts';

	// Home page of the "Jared Howard Social Publisher" developer apps: the
	// "Application home page" on Google's OAuth consent screen (Google's
	// branding review needs a page that names the app, says what it does and
	// links its privacy policy). Like the other /social/ pages: in the sitemap,
	// not in the nav or footer.
</script>

<svelte:head>
	<title>Jared Howard Social Publisher | Jared Howard</title>
	<meta
		name="description"
		content="Jared Howard Social Publisher is a private, self-hosted tool that publishes my own posts and videos to my own social media accounts."
	/>
</svelte:head>

<article class="prose">
	<header class="prose-header">
		<h1>Jared Howard Social Publisher</h1>
	</header>

	<div class="post-content">
		<p>
			<strong>Jared Howard Social Publisher</strong> is the app I use to publish my own posts. It is
			a self-hosted copy of <a href="https://github.com/gitroomhq/postiz-app">Postiz</a>, an open
			source social media scheduler, running at <code>social.jaredhoward.com</code>. It is private:
			I am its only user, and it is not offered to the public.
		</p>

		<h2>What it does</h2>
		<ul>
			<li>
				Publishes posts, images and short videos that I make to social accounts I own for my own
				projects, such as <a href="https://threkir.com">Threkir</a>: YouTube, TikTok, Facebook,
				Instagram, Threads, X, Bluesky and LinkedIn.
			</li>
			<li>Schedules those posts for a later time, from one calendar.</li>
			<li>
				Shows each account's own statistics (for example YouTube views and watch time) so I can see
				what works.
			</li>
		</ul>
		<p>
			It works only through each platform's official API, and only with accounts I connect myself.
			On YouTube it uploads videos to my channel, sets their title, description, privacy and
			thumbnail, and reads the channel's analytics.
		</p>

		<h2>Policies</h2>
		<ul>
			<li><a href="/social/privacy/">Privacy policy</a>: what the app accesses and keeps.</li>
			<li><a href="/social/terms/">Terms of service</a></li>
			<li>
				<a href="/social/data-deletion/">Data deletion instructions</a>: how to revoke access and
				have data removed.
			</li>
		</ul>

		<h2>Contact</h2>
		<p>
			<strong>Jared Howard</strong><br />
			<a href="mailto:{site.email}">{site.email}</a>
		</p>
	</div>
</article>
