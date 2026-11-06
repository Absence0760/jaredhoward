import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

// SvelteKit 3 takes its configuration here; svelte.config.js is no longer read.
export default defineConfig({
	plugins: [
		sveltekit({
			preprocess: [vitePreprocess()],
			// Pure static output → ./build (default dir). No SSR, no backend.
			adapter: adapter(),
			// Apex domain (jaredhoward.com) → base stays ''. BASE_PATH is only
			// wired up so a subpath deploy is possible without editing this file.
			paths: {
				base: (process.env.BASE_PATH || '') as '' | `/${string}`
			},
			prerender: {
				// '*' crawls every linked page; the sitemap endpoint is unlinked,
				// so name it explicitly.
				entries: ['*', '/sitemap.xml']
			}
		})
	]
});
