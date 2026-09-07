<script lang="ts">
	import SectionRail from '$lib/components/SectionRail.svelte';
	import { site } from '$lib/site';

	// No h2s on this page, so there is no index to build — but the address is
	// the entire point of the route and it was buried in the third paragraph.
	// The rail lifts it to the top right, where the eye lands first.
</script>

<svelte:head>
	<title>Contact | Jared Howard</title>
	<meta
		name="description"
		content="How to get in touch about software products, custom development, billing, or privacy."
	/>
</svelte:head>

<article class="prose">
	<header class="prose-header">
		<h1>Contact</h1>
	</header>

	<div class="post-content">
		<p>
			I'm Jared Howard, doing business as a sole proprietor in Virginia — the
			same legal entity referred to as "we" / "us" in our <a href="/terms/">Terms of Service</a> and
			<a href="/privacy/">Privacy Policy</a>. The "I" / "me" voice on this page is the same person.
		</p>

		<p>The best way to reach me is by email:</p>

		<p>
			<strong><a href="mailto:jared@jaredhoward.com">jared@jaredhoward.com</a></strong>
		</p>

		<p>
			Use a subject line that matches your reason for writing — it routes faster and gets a more
			useful reply:
		</p>

		<ul>
			<li>
				<strong>Project enquiry.</strong> Subject <strong>"Project enquiry"</strong>. Please include
				a short description of what you're trying to build, your rough timeline, and whether you
				already have a domain or hosting set up. I typically reply within a few business days.
			</li>
			<li>
				<strong>Product support.</strong> Subject <strong>"Support — &lt;product name&gt;"</strong>.
				Mention the product name and the email on your account so I can find your records quickly.
			</li>
			<li>
				<strong>Cancel subscription.</strong> Subject <strong>"Cancel subscription"</strong> plus
				the email address on your account. <strong
					>Email cancellations take effect the day I receive them</strong
				>; I'll confirm processing promptly. See the
				<a href="/refunds/">Refund and Cancellation Policy</a> for full details.
			</li>
			<li>
				<strong>Billing error or dispute.</strong> Subject <strong>"Billing error"</strong> or
				<strong>"Billing dispute"</strong>. Include the charge date, amount, and account email. I aim
				to respond within a commercially reasonable time, typically a few business days — and most
				disputes resolve faster than a chargeback would.
			</li>
			<li>
				<strong>Privacy request or appeal.</strong> Subject <strong>"Privacy request"</strong> (or
				<strong>"Privacy request — appeal"</strong> if you are appealing a previously denied
				request). Tell me which right you want to exercise — know, correct, delete, portability,
				opt-out of sale/sharing, or appeal — and include the email associated with the personal
				information. Response times follow the timeframes required by the state-privacy law that
				applies to you, as described in the <a href="/privacy/">Privacy Policy</a>.
			</li>
		</ul>

		<p>
			For anything else — partnerships, press, conference talks — write whatever subject line makes
			sense and I'll get to it.
		</p>
	</div>
</article>

<SectionRail>
	<div class="rail-card">
		<p class="rail-card-label">Reach me</p>
		<p class="rail-card-lead"><a href="mailto:{site.email}">{site.email}</a></p>
		<p class="rail-card-note">
			Use a subject line from the list — it routes faster. I typically reply within a few business
			days.
		</p>
	</div>
</SectionRail>
