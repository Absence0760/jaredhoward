<script lang="ts">
	import SectionRail from '$lib/components/SectionRail.svelte';

	// Index for the >=1080px right rail. Kept beside the markup rather than
	// derived from the DOM so it prerenders and works with no JavaScript.
	const sections = [
		{ id: 'cancelling-a-software-product-subscription', label: '1. Cancelling a software-product subscription' },
		{ id: 'refunds-for-software-product-subscriptions', label: '2. Refunds for software-product subscriptions' },
		{ id: 'custom-development-engagements', label: '3. Custom-development engagements' },
		{ id: 'billing-errors', label: '4. Billing errors' },
		{ id: 'billing-disputes-and-chargebacks', label: '5. Billing disputes and chargebacks' },
		{ id: 'contact', label: '6. Contact' }
	];
</script>

<svelte:head>
	<title>Refund and Cancellation Policy | Jared Howard</title>
	<meta
		name="description"
		content="How cancellations, refunds, and chargebacks work for subscriptions and custom-development work."
	/>
</svelte:head>

<article class="prose">
	<header class="prose-header">
		<h1>Refund and Cancellation Policy</h1>
	</header>

	<div class="post-content">
		<p><em>Effective: May 14, 2026. Last reviewed: May 14, 2026.</em></p>

		<p>
			This policy explains how to cancel a subscription, when refunds are available, and how billing
			disputes are handled. It applies to all software-product subscriptions and custom-development
			engagements with Jared Howard, a sole proprietor based in Virginia ("<strong
				>we</strong
			>", "<strong>our</strong>", "<strong>us</strong>"). It supplements, and should be read
			together with, our Terms of Service at <code>/terms/</code>.
		</p>

		<h2 id="cancelling-a-software-product-subscription">1. Cancelling a software-product subscription</h2>
		<p>
			You may cancel at any time. The cancellation method we offer will, at all times, be
			<strong>at least as easy to use as the method you used to sign up</strong>.
		</p>
		<ul>
			<li>
				<strong>From your account.</strong> Once subscription products are live, the in-product
				cancellation control will let you cancel in a single step from your account settings. The
				cancellation takes effect the moment you confirm it in the control; we will also confirm on
				screen and by email.
			</li>
			<li>
				<strong>By email.</strong> Until in-product cancellation is available, you can cancel by
				emailing us at
				<a href="mailto:jared@jaredhoward.com">jared@jaredhoward.com</a> with the subject line
				<strong>"Cancel subscription"</strong> and the email address on your account.
				<strong>An email cancellation takes effect on the day we receive it.</strong> We will confirm
				receipt and processing promptly; if you have not received confirmation within five business days,
				please re-send to ensure delivery.
			</li>
		</ul>
		<p>
			<strong>What cancellation does.</strong> Cancelling stops future renewals. Your subscription
			remains active through the end of the billing period that has already been paid for, and we do
			not pro-rate refunds for partial periods, except as set out in Section 2 or as required by
			applicable law.
		</p>
		<p>
			<strong>Annual subscription renewal reminders.</strong> For annual plans, we email a renewal
			reminder to the address on your account at least 7 days, and no more than 45 days, before the
			renewal date (or such longer minimum as the law of your state of residence requires). The
			reminder includes the renewal amount, the renewal date, and a direct link or instructions to
			cancel.
		</p>

		<h2 id="refunds-for-software-product-subscriptions">2. Refunds for software-product subscriptions</h2>
		<p>
			<strong>Monthly plans.</strong> Monthly subscription fees are non-refundable once charged,
			except for billing errors (see Section 4).
		</p>
		<p>
			<strong>Annual plans.</strong> If you cancel an annual subscription part-way through the term,
			you may request a pro-rated refund for the unused complete months remaining. Refund
			eligibility, calculation, and processing are described in the documentation for the specific
			plan you purchased. Until plan-specific terms are published, we will consider annual-plan refund
			requests on a case-by-case basis and aim to be reasonable; the default expectation is that
			early-cancellation refunds are available only within the first 30 days following the most recent
			renewal or initial purchase, and only to customers who have not breached the Acceptable Use
			provisions in our Terms of Service.
		</p>
		<p>
			Approved refunds are processed through Stripe to the payment method originally charged. We aim
			to respond to refund requests promptly, typically within a few business days, and to issue
			approved refunds within a commercially reasonable time after approval (Stripe-side processing
			can add additional days outside our control).
		</p>
		<p>
			<strong>Refunds outside this framework.</strong> We may, in our sole discretion, issue a
			discretionary refund outside the criteria above (for example, in cases of service outages that
			materially affected your use, or where we otherwise believe a refund is appropriate).
			Discretionary refunds are not precedent for future requests.
		</p>

		<h2 id="custom-development-engagements">3. Custom-development engagements</h2>
		<p>
			Refund terms for custom-development work are set in the statement of work ("<strong>SOW</strong
			>") for each engagement. Unless an SOW says otherwise, the following defaults apply:
		</p>
		<ul>
			<li>
				<strong>Deposits</strong> are non-refundable once work has commenced and time has been
				allocated to the engagement.
			</li>
			<li>
				<strong>Milestone payments</strong> cover work delivered up to and accepted at that milestone
				and are non-refundable once accepted in writing (which may include email acceptance).
			</li>
			<li>
				<strong>Retainer fees</strong> cover availability and a defined scope of work for the
				relevant period and are non-refundable, except for the unused portion of the current period
				if we terminate the retainer for our convenience.
			</li>
			<li>
				<strong>Ongoing hosting and maintenance subscriptions</strong> follow the software-product
				rules in Sections 1 and 2 above unless the SOW defines a different cancellation or refund
				mechanic.
			</li>
		</ul>
		<p>
			If a project is materially delayed by us, or if a deliverable does not substantially meet the
			agreed acceptance criteria, the SOW or applicable law may give you additional remedies. Tell us
			at the address in Section 6 (Contact) and we will work to resolve it.
		</p>

		<h2 id="billing-errors">4. Billing errors</h2>
		<p>
			If you believe you were charged in error — duplicate charge, charge after cancellation, wrong
			plan, or wrong amount — email us at the address in Section 6 (Contact) within 60 days of the
			charge appearing on your statement. Subject line: <strong>"Billing error"</strong>. Include the
			date of the charge, the amount, and the email address on the account.
		</p>
		<p>
			We will investigate promptly and respond within a commercially reasonable time, typically
			within a few business days; investigations that require Stripe-side action may take longer
			because of factors outside our control. Verifiable billing errors are refunded in full to the
			payment method originally charged.
		</p>

		<h2 id="billing-disputes-and-chargebacks">5. Billing disputes and chargebacks</h2>
		<p>
			If you have a billing dispute that has not been resolved by Section 1 or Section 4, please
			contact us <strong>before</strong> initiating a chargeback with your card issuer. Most disputes
			are resolved within a day or two when we hear about them directly.
		</p>
		<p>
			<strong><a href="mailto:jared@jaredhoward.com">jared@jaredhoward.com</a></strong> — subject
			line <strong>"Billing dispute"</strong>.
		</p>
		<p>
			<strong>If a chargeback is filed.</strong> We respond to chargebacks through Stripe's disputes
			process. In responding, we provide Stripe and the card network with such evidence as we have
			for the relevant transaction — typically covering the sign-up and renewal record, the
			auto-renewal disclosure shown at checkout, cancellation history, and the email correspondence
			between us. We do not provide unrelated personal information or content beyond what is needed to
			substantiate the transaction.
		</p>
		<p>
			We may decline to provide further services to a customer who files a chargeback for a charge
			that is properly owed under these Terms.
		</p>

		<h2 id="contact">6. Contact</h2>
		<p>For cancellations, refund requests, billing errors, or disputes:</p>
		<p>
			<strong>Jared Howard</strong><br />
			<a href="mailto:jared@jaredhoward.com">jared@jaredhoward.com</a>
		</p>
		<p>
			See our <a href="/terms/">Terms of Service</a> and <a href="/privacy/">Privacy Policy</a> for the
			broader terms that govern your use of the services.
		</p>
	</div>
</article>

<SectionRail {sections} />
