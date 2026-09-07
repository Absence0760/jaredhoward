<script lang="ts">
	import SectionRail from '$lib/components/SectionRail.svelte';

	// Index for the >=1080px right rail. Kept beside the markup rather than
	// derived from the DOM so it prerenders and works with no JavaScript.
	const sections = [
		{ id: 'the-services', label: '1. The services' },
		{ id: 'eligibility-and-accounts', label: '2. Eligibility and accounts' },
		{ id: 'payment-and-billing', label: '3. Payment and billing' },
		{ id: 'automatic-renewal-of-subscriptions', label: '4. Automatic renewal of subscriptions' },
		{ id: 'acceptable-use', label: '5. Acceptable use' },
		{ id: 'intellectual-property-and-content', label: '6. Intellectual property and content' },
		{ id: 'third-party-services', label: '7. Third-party services' },
		{ id: 'termination', label: '8. Termination' },
		{ id: 'disclaimer-of-warranties', label: '9. Disclaimer of warranties' },
		{ id: 'limitation-of-liability', label: '10. Limitation of liability' },
		{ id: 'indemnification', label: '11. Indemnification' },
		{ id: 'governing-law', label: '12. Governing law' },
		{ id: 'dispute-resolution', label: '13. Dispute resolution' },
		{ id: 'changes-to-these-terms', label: '14. Changes to these Terms' },
		{ id: 'general-provisions', label: '15. General provisions' },
		{ id: 'contact', label: '16. Contact' }
	];
</script>

<svelte:head>
	<title>Terms of Service | Jared Howard</title>
	<meta
		name="description"
		content="Terms of service for software products and development work provided by Jared Howard."
	/>
</svelte:head>

<article class="prose">
	<header class="prose-header">
		<h1>Terms of Service</h1>
	</header>

	<div class="post-content">
		<p><em>Effective: May 14, 2026. Last reviewed: May 14, 2026.</em></p>

		<p>
			These Terms of Service ("<strong>Terms</strong>") are a binding agreement between Jared Howard,
			a sole proprietor based in Virginia ("<strong>we</strong>",
			"<strong>our</strong>", "<strong>us</strong>"), and the individual or organization accessing
			our website or using the software products and development services we provide ("<strong
				>you</strong
			>", "<strong>your</strong>", or "<strong>Customer</strong>"). By creating an account, clicking
			"I agree" at checkout, or otherwise using the services, you confirm that you have read these
			Terms, that you have authority to bind yourself or the organization you represent, and that you
			accept these Terms.
		</p>

		<p>If you do not agree to these Terms, do not access or use the services.</p>

		<h2 id="the-services">1. The services</h2>
		<p>We provide two categories of service, both digital:</p>
		<ul>
			<li>
				<strong>Software products we operate.</strong> Multi-tenant SaaS dashboards, e-commerce
				storefronts, and web-based tools, sold to organizations on monthly or annual subscriptions.
			</li>
			<li>
				<strong>Custom software development for small businesses.</strong> Project fees, retainers,
				and ongoing hosting and maintenance, billed via Stripe Subscriptions or invoicing.
			</li>
		</ul>
		<p>
			Everything we provide is accessed through a web browser. We do not sell physical goods, and we
			do not distribute downloadable installers.
		</p>
		<p>
			A specific subscription plan, statement of work, or order form ("<strong>Order</strong>") will
			set the price, billing cycle, scope, and any plan-specific terms for your engagement. If
			anything in an Order conflicts with these Terms, the Order controls for that engagement.
		</p>

		<h2 id="eligibility-and-accounts">2. Eligibility and accounts</h2>
		<p>
			You must be at least 18 years old and capable of forming a binding contract to use the
			services. If you are using the services on behalf of an organization, you confirm that you are
			authorized to bind that organization, and "you" includes that organization for the purposes of
			these Terms.
		</p>
		<p>
			You are responsible for maintaining the confidentiality of your account credentials and for all
			activity that occurs under your account. Tell us promptly at the address in Section 16 if you
			believe your account has been compromised.
		</p>

		<h2 id="payment-and-billing">3. Payment and billing</h2>
		<p>
			Fees for software-product subscriptions are billed in advance for the billing period selected
			at sign-up (monthly or annual). Fees for custom development engagements are billed according to
			the relevant Order (typically a deposit, milestone payments, retainer, or recurring
			hosting/maintenance subscription). All amounts are stated in US dollars and charged through
			Stripe, our payment processor; we do not store full payment-card details on our own systems.
		</p>
		<p>
			Unless an Order says otherwise, fees are non-refundable except as expressly provided in our
			Refund and Cancellation Policy at <code>/refunds/</code>.
		</p>
		<p>
			We may change the price of a subscription on renewal. We will give you at least 30 days' notice
			by email to the address associated with your account (treated as effective notice per Section
			15.6) before any price change takes effect. You are responsible for keeping the email address
			on your account current. If you do not want to accept the new price, you can cancel your
			subscription before the next renewal date.
		</p>

		<h2 id="automatic-renewal-of-subscriptions">4. Automatic renewal of subscriptions</h2>
		<blockquote>
			<p>
				⚠️ <strong>PLEASE READ — AUTOMATIC RENEWAL DISCLOSURE.</strong> Software-product
				subscriptions sold under these Terms are <strong
					>negative-option (auto-renewing) subscriptions</strong
				>. The terms in this Section 4 apply unless an Order says otherwise.
			</p>
		</blockquote>
		<p>
			<strong>4.1 What auto-renewal means.</strong> When you purchase a subscription, you authorize
			us to charge your payment method on file, through Stripe, for the recurring fee at the start of
			each new billing period until you cancel. Subscriptions renew automatically for additional
			periods of the same length (month-for-month or year-for-year) at the then-current renewal price
			for your plan.
		</p>
		<p>
			<strong>4.2 Pre-charge disclosure.</strong> Before charging your payment method for the first
			time, we will display, in clear and conspicuous form at the checkout or sign-up step, all of
			the following: that the subscription auto-renews, the renewal cadence, the renewal amount, the
			date of the first renewal charge, and a description of how to cancel. You must affirmatively
			accept these terms (for example, by ticking a checkbox or clicking "Subscribe and Pay") before
			any charge is made; we record that acceptance.
		</p>
		<p>
			<strong>4.3 Renewal reminder.</strong> For annual subscriptions, we will email a renewal
			reminder to the address on your account at least 7 days, and no more than 45 days, before the
			renewal date — or such longer minimum as the law of your state of residence requires. The
			reminder will state the renewal amount, the renewal date, and a direct link or instructions to
			cancel.
		</p>
		<p>
			<strong>4.4 How to cancel.</strong> You may cancel at any time before your next renewal date.
			Cancellation will be available from your account settings in-product once subscription products
			are live. Until then, the cancellation channel is email to the address in Section 16 with the
			subject line "Cancel subscription". <strong
				>An email cancellation request takes effect on the day we receive it</strong
			>, provided the request includes the email address on your account; this is true regardless of
			when we confirm the cancellation in reply, and applies in any dispute (including with your card
			issuer). We will confirm receipt and processing promptly. If you have not received a reply from
			us within a reasonable time, you are welcome to re-send to confirm delivery — but a
			successfully-sent and -received original cancellation email remains effective even if our reply
			is delayed. The cancellation method we offer will, at all times, be at least as easy to use as
			the sign-up method.
		</p>
		<p>
			<strong>4.5 Effect of cancellation.</strong> Cancelling stops future renewals. Your
			subscription remains active through the end of the billing period that has already been paid
			for; we do not pro-rate refunds for partial periods, except as set out in our Refund and
			Cancellation Policy or as required by applicable law.
		</p>
		<p>
			<strong>4.6 Failed payments.</strong> If we cannot charge your payment method on a renewal, we
			may attempt the charge again for up to 14 days. If the charge ultimately fails, we may suspend
			or terminate your subscription. We will notify you by email before doing so.
		</p>

		<h2 id="acceptable-use">5. Acceptable use</h2>
		<p>
			You agree not to use the services to (a) violate any applicable law or regulation, (b) infringe
			on the intellectual-property, privacy, or publicity rights of any person, (c) transmit malware,
			viruses, or other malicious code, (d) interfere with or attempt to compromise the security or
			operation of the services, or (e) reverse-engineer, decompile, or otherwise attempt to extract
			the source code, underlying ideas, or trade-secret algorithms of any product we operate except
			to the extent applicable law expressly permits.
		</p>
		<p>
			We may suspend or terminate access for any breach of this Section 5 or for any conduct that we
			reasonably believe creates risk or legal exposure for us or other customers.
		</p>

		<h2 id="intellectual-property-and-content">6. Intellectual property and content</h2>
		<p>
			<strong>6.1 Our materials.</strong> As between you and us, we (and our licensors) own all
			right, title, and interest in and to the services, the software, documentation, designs, and
			any improvements, modifications, or derivative works thereof, including all related
			intellectual-property rights. These Terms do not transfer any ownership rights to you; we grant
			you a limited, non-exclusive, non-transferable, revocable license to use the services for their
			intended purpose during your subscription or engagement.
		</p>
		<p>
			<strong>6.2 Your content.</strong> You retain all rights to the content, data, and materials
			you submit to or store within the services ("<strong>Customer Content</strong>"). You grant us
			a non-exclusive, worldwide, royalty-free license to host, process, transmit, display, and
			create necessary backup copies of your Customer Content solely as needed to operate the
			services for you, to provide you with support, and to comply with legal obligations.
		</p>
		<p>
			<strong>6.2.1 No training on Customer Content.</strong> We will not use Customer Content to
			train machine-learning models — whether our own models or the models of any third party —
			without your prior written consent. Where we use AI-assisted features within the services that
			send Customer Content to a third-party AI provider for <em>inference</em> (for example, to
			generate a response to your input), we will do so only under contractual terms that prohibit the
			provider from using Customer Content for their own model training.
		</p>
		<p>
			<strong>6.2.2 Operational tooling.</strong> We use general-purpose developer and support tools
			that may incorporate AI assistance (for example, coding assistants, email tools, and
			documentation tools). It is our policy to choose tools whose terms support the no-training
			posture in Section 6.2.1, to treat Customer Content shared with such tools as confidential, and
			to review our tool stack periodically against this commitment. If we identify a tool that no
			longer meets this standard, we will migrate off it within a reasonable period or update this
			policy before continuing to use it for Customer Content.
		</p>
		<p>
			<strong>6.3 Custom-development deliverables.</strong> Ownership and licensing of code or other
			materials we deliver under a custom-development engagement ("<strong>Deliverables</strong>")
			are governed by the relevant Order. Unless the Order says otherwise:
		</p>
		<ul>
			<li>
				<strong>Assignment on full payment.</strong> Upon our receipt of full payment of the fees due
				for a Deliverable, we assign to you all of our right, title, and interest in that Deliverable,
				subject to the carve-outs below. Until we have received full payment, you have no right to use
				the Deliverable, and any prior delivery to you is for review purposes only.
			</li>
			<li>
				<strong>Background IP.</strong> We retain ownership of (a) any general-purpose tools,
				libraries, frameworks, scripts, methodologies, and pre-existing materials we owned or
				developed independently of the engagement ("<strong>Background IP</strong>"), and (b) any
				general-purpose improvements to our Background IP made during the engagement. On payment, we
				grant you a perpetual, irrevocable, worldwide, royalty-free, non-exclusive license to use the
				Background IP solely as incorporated in the Deliverable and for the Deliverable's intended
				use.
			</li>
			<li>
				<strong>Third-party materials.</strong> Open-source dependencies and other third-party
				materials incorporated in the Deliverable are licensed to you directly by their respective
				rights-holders under their own licenses; we do not own those materials and cannot assign them
				to you.
			</li>
		</ul>
		<p>
			<strong>6.4 Feedback.</strong> Suggestions or feedback you give us about the services are
			non-confidential, and you grant us a perpetual, royalty-free right to use them without
			compensation.
		</p>

		<h2 id="third-party-services">7. Third-party services</h2>
		<p>
			The services may integrate with or link to third-party services (for example, Stripe for
			payments, GitHub Pages for site hosting, and email providers for transactional and support
			email). We are not responsible for the operation, availability, or content of third-party
			services. Your use of any third-party service is governed by that service's own terms.
		</p>

		<h2 id="termination">8. Termination</h2>
		<p>
			<strong>8.1 By you.</strong> You may terminate these Terms at any time by cancelling your
			subscription and ceasing to use the services. Cancellation is described in Section 4.4.
		</p>
		<p>
			<strong>8.2 By us.</strong> We may suspend or terminate your access to the services, in whole
			or in part and with or without notice, if (a) you materially breach these Terms or an Order, (b)
			you fail to pay fees when due and the failure continues for more than 15 days after written
			notice, or (c) we reasonably believe your continued use poses a security risk or legal
			exposure. We may also terminate by discontinuing the services generally under clause (d), but in
			that case we will give active subscription customers at least 60 days' prior written notice and
			will refund the pro-rata portion of any pre-paid fees attributable to the period after the
			discontinuation date. The pro-rata refund obligation in this clause (d) is in addition to, not
			in place of, the Wind-Down Period in Section 8.3, and is an exception to the non-refundability
			of fees stated in Section 3.
		</p>
		<p>
			<strong>8.3 Effect.</strong> On termination, your right to access the services ends. Sections 3
			(for unpaid amounts), 6, 8.3, 9, 10, 11, 12, 13, 14, 15, and 16 survive termination. We will
			retain Customer Content for at least 30 days after termination (the "<strong
				>Wind-Down Period</strong
			>"), during which you may request export of your Customer Content; for terminations caused by
			your non-payment of fees that remain unpaid more than 30 days after written notice, the
			Wind-Down Period is 10 days. After the Wind-Down Period, we may delete Customer Content without
			further notice. You are responsible for exporting any content you wish to retain before the
			Wind-Down Period ends.
		</p>

		<h2 id="disclaimer-of-warranties">9. Disclaimer of warranties</h2>
		<blockquote>
			<p>
				<strong
					>THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE", WITHOUT WARRANTY OF ANY KIND, EITHER
					EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, WE EXPRESSLY
					DISCLAIM ALL IMPLIED WARRANTIES, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY,
					FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT, AND ANY WARRANTIES ARISING
					FROM COURSE OF DEALING, COURSE OF PERFORMANCE, OR USAGE OF TRADE. WE DO NOT WARRANT THAT
					THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS, OR THAT ANY
					DATA WILL BE SECURE OR NOT LOST OR ALTERED.</strong
				>
			</p>
		</blockquote>
		<p>
			Some jurisdictions do not allow the exclusion of certain warranties, so some of the above
			exclusions may not apply to you.
		</p>

		<h2 id="limitation-of-liability">10. Limitation of liability</h2>
		<p>
			For the purposes of this Section 10, "<strong>we</strong>", "<strong>our</strong>", and
			"<strong>us</strong>" include Jared Howard and our employees, contractors, agents, licensors,
			and successors.
		</p>
		<blockquote>
			<p>
				<strong
					>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, OUR AGGREGATE LIABILITY ARISING OUT OF
					OR RELATING TO THESE TERMS OR THE SERVICES WILL NOT EXCEED THE GREATER OF (A) THE FEES YOU
					PAID TO US IN THE TWELVE MONTHS IMMEDIATELY BEFORE THE EVENT GIVING RISE TO THE CLAIM, OR
					(B) ONE HUNDRED US DOLLARS (US $100).</strong
				>
			</p>
			<p>
				<strong
					>IN NO EVENT WILL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
					EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR
					BUSINESS OPPORTUNITY, WHETHER OR NOT WE WERE ADVISED OF THE POSSIBILITY OF SUCH DAMAGES AND
					REGARDLESS OF THE THEORY OF LIABILITY.</strong
				>
			</p>
		</blockquote>
		<p>The limitations and exclusions in this Section 10 do <strong>not</strong> apply to:</p>
		<p>
			(a) our gross negligence, wilful misconduct, or fraud;<br />
			(b) death or personal injury caused by our negligence;<br />
			(c) our indemnification obligations under Section 11.2 (if any);<br />
			(d) liability that cannot be limited or excluded under applicable law;<br />
			(e) your obligation to pay fees owed under any Order; or<br />
			(f) your indemnification obligations under Section 11.1.
		</p>
		<p>
			Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of the
			limitations above may not apply to you.
		</p>

		<h2 id="indemnification">11. Indemnification</h2>
		<p>
			<strong>11.1 By you.</strong> You agree to indemnify, defend, and hold harmless Jared Howard
			and our employees, contractors, agents, licensors, and successors ("<strong
				>Indemnified Parties</strong
			>") from and against any third-party claims, damages, losses, liabilities, costs, and expenses
			(including reasonable attorneys' fees) arising out of or relating to (a) your Customer Content,
			(b) your breach of these Terms or an Order, (c) your violation of any law or third-party right,
			or (d) your use of the services in a manner not permitted by these Terms.
		</p>
		<p>
			<strong>11.2 By us.</strong> We agree to defend, indemnify, and hold you harmless from any
			third-party claim that the services, as provided by us and used by you in accordance with these
			Terms, directly infringe a US patent, copyright, trademark, or trade-secret right of that third
			party. Our obligation under this Section 11.2 does <strong>not</strong> apply to any claim
			arising from or relating to (a) Customer Content; (b) any modification of the services by anyone
			other than us; (c) use of the services in combination with materials, content, or software we
			did not provide; (d) use of the services after we have notified you to discontinue use of an
			allegedly infringing component, or after we have offered a non-infringing alternative; or (e)
			use of the services other than as permitted by these Terms. If we receive notice of a claim
			covered by this Section, we may, <strong>at our sole and unilateral option and at our expense</strong>,
			(i) procure for you the right to continue using the services, (ii) modify the services so that
			they are non-infringing, or (iii) terminate the affected subscription and refund any pre-paid,
			unused fees attributable to the period after termination. The choice among (i), (ii), and (iii)
			is ours alone; you have no right to require us to pursue any particular remedy, and we may elect
			(iii) at any time. The remedies in this Section 11.2 are your sole and exclusive remedy, and our
			entire liability, for any claim of intellectual-property infringement related to the services.
		</p>
		<p>
			<strong>11.3 Procedure.</strong> A party seeking indemnification under this Section 11 ("<strong
				>Indemnitee</strong
			>") must (a) promptly give the other party ("<strong>Indemnitor</strong>") written notice of
			the claim, (b) allow the Indemnitor sole control of the defense and settlement of the claim
			(provided that the Indemnitor may not settle a claim that imposes liability or admits fault on
			the Indemnitee without the Indemnitee's prior written consent, not to be unreasonably withheld),
			and (c) reasonably cooperate in the defense at the Indemnitor's expense.
		</p>

		<h2 id="governing-law">12. Governing law</h2>
		<p>
			These Terms, and any dispute arising out of or relating to them or the services, are governed
			by the laws of the Commonwealth of Virginia, without regard to its conflict-of-laws principles.
			The United Nations Convention on Contracts for the International Sale of Goods does not apply.
		</p>

		<h2 id="dispute-resolution">13. Dispute resolution</h2>
		<p>
			<strong>13.1 Informal resolution first.</strong> Before either party files any legal action
			arising out of or relating to these Terms, the party with a concern must send a written notice
			to the other party that describes the concern in reasonable detail and proposes a resolution.
			Notices to us go to the address in Section 16; notices to you go to the email on your account.
			The parties will then negotiate in good faith for at least 30 days. Many disputes can be
			resolved this way, and we ask that you not file a legal action before completing this step.
		</p>
		<p>
			<strong>13.2 Venue.</strong> If a dispute is not resolved through informal resolution within 30
			days, the dispute must be filed exclusively in the state or federal courts located in the
			Commonwealth of Virginia. Both parties consent to the personal jurisdiction of, and venue in,
			those courts and waive any objection based on inconvenient forum.
		</p>
		<p>
			<strong>13.3 Time limit.</strong> Any cause of action arising out of or relating to these Terms
			or the services must be filed within one (1) year after the cause of action accrues, to the
			extent permitted by applicable law, after which it is permanently barred.
		</p>

		<h2 id="changes-to-these-terms">14. Changes to these Terms</h2>
		<p>
			We may update these Terms from time to time. The "Effective" date at the top reflects the
			current version. If a change is material, we will (a) update the Effective date, (b) notify
			active subscription customers by email at least 15 days before the change takes effect, and (c)
			where practical, post a short summary at the top of this page describing the change. Your
			continued use of the services after the new Effective date constitutes acceptance of the
			updated Terms. If you do not accept a material change, your remedy is to cancel your
			subscription before the change takes effect.
		</p>

		<h2 id="general-provisions">15. General provisions</h2>
		<p>
			<strong>15.1 Entire agreement.</strong> These Terms, together with any Order, our Privacy
			Policy, and our Refund and Cancellation Policy, constitute the entire agreement between you and
			us regarding the services and supersede all prior or contemporaneous communications and
			proposals on the subject.
		</p>
		<p>
			<strong>15.2 Severability.</strong> If any provision of these Terms is held invalid or
			unenforceable, that provision will be enforced to the maximum extent permitted, and the
			remaining provisions will continue in full force.
		</p>
		<p>
			<strong>15.3 No waiver.</strong> Our failure to enforce any right or provision is not a waiver
			of that right or provision.
		</p>
		<p>
			<strong>15.4 Assignment.</strong> You may not assign or transfer these Terms or any rights or
			obligations under them without our prior written consent. We may assign these Terms in
			connection with a merger, acquisition, or sale of all or substantially all of our assets, on
			notice to you.
		</p>
		<p>
			<strong>15.5 Force majeure.</strong> Neither party is liable for any failure or delay in
			performance caused by events beyond its reasonable control, including acts of God, natural
			disasters, war, terrorism, civil unrest, labor disputes, internet or telecommunications
			failures, or actions of governmental authorities. The affected party's performance obligations
			are suspended for the duration of the event. <strong
				>Notwithstanding the foregoing, this Section 15.5 does not excuse or suspend any obligation
				to pay fees that are due under these Terms or any Order.</strong
			>
		</p>
		<p>
			<strong>15.6 Notices.</strong> Notices to us must be sent to the email address in Section 16.
			Notices to you may be sent to the email address associated with your account or to any postal
			address you have provided. A notice is considered given when received (for email, on the date
			sent absent bounce or delivery failure).
		</p>
		<p>
			<strong>15.7 Relationship.</strong> Nothing in these Terms creates a partnership, joint
			venture, employment, or agency relationship between you and us.
		</p>
		<p>
			<strong>15.8 Headings.</strong> Section headings are for convenience only and do not affect
			interpretation.
		</p>

		<h2 id="contact">16. Contact</h2>
		<p>
			Questions about these Terms, requests to cancel a subscription, or any notice required by these
			Terms should be sent to:
		</p>
		<p>
			<strong>Jared Howard</strong><br />
			<a href="mailto:jared@jaredhoward.com">jared@jaredhoward.com</a>
		</p>
	</div>
</article>

<SectionRail {sections} />
