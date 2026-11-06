<script lang="ts">
	import { site } from '#lib/site.ts';
	import Monogram from './Monogram.svelte';
	import Icon from './Icon.svelte';

	const year = new Date().getFullYear();
</script>

<footer class="landing-footer">
	<div class="landing-footer-card">
		<div class="landing-footer-top">
			<a class="lockup" href="/" aria-label="{site.title} — home">
				<Monogram size={42} />
				<span class="lockup-text">
					<span class="lockup-name">{site.title}</span>
					<span class="lockup-role">{site.role}</span>
				</span>
			</a>

			<nav class="landing-footer-links" aria-label="Legal and contact">
				<ul>
					{#each site.footer as item (item.href)}
						<li><a href={item.href}>{item.label}</a></li>
					{/each}
				</ul>
			</nav>

			<div class="landing-footer-social">
				<a
					class="social-button"
					href={site.github}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub profile"
				>
					<Icon name="github" size={18} />
				</a>
				<a class="social-button" href="mailto:{site.email}" aria-label="Email {site.email}">
					<Icon name="mail" size={18} />
				</a>
			</div>
		</div>

		<div class="landing-footer-rule"></div>

		<p class="landing-footer-legal">&copy; {year} {site.title}</p>
	</div>
</footer>
