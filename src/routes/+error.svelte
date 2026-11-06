<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status} | Jared Howard</title>
</svelte:head>

<article class="prose">
	<header class="prose-header">
		<h1>{page.status} — {page.error?.message ?? 'Something went wrong'}</h1>
	</header>
	<div class="post-content">
		<p>
			That page couldn't be found. Head back to the <a href="/">home page</a>, or
			<a href="/contact/">get in touch</a> if you think something is broken.
		</p>
	</div>
</article>
