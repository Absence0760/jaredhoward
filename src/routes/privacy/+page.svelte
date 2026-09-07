<script lang="ts">
	import SectionRail from '$lib/components/SectionRail.svelte';

	// Index for the >=1080px right rail. Kept beside the markup rather than
	// derived from the DOM so it prerenders and works with no JavaScript.
	const sections = [
		{ id: 'about-this-policy', label: '1. About this policy' },
		{ id: 'personal-information-we-collect', label: '2. Personal information we collect' },
		{ id: 'sale-or-sharing-of-personal-information', label: '3. Sale or sharing of personal information' },
		{ id: 'service-providers-and-other-recipients', label: '4. Service providers and other recipients' },
		{ id: 'your-privacy-rights', label: '5. Your privacy rights' },
		{ id: 'how-to-exercise-your-rights', label: '6. How to exercise your rights' },
		{ id: 'how-to-appeal-a-denied-request-virginia-and-similar-states', label: '7. How to appeal a denied request (Virginia and similar states)' },
		{ id: 'cookies-tracking-and-analytics', label: '8. Cookies, tracking, and analytics' },
		{ id: 'security', label: '9. Security' },
		{ id: 'changes-to-this-policy', label: '10. Changes to this policy' },
		{ id: 'contact', label: '11. Contact' }
	];
</script>

<svelte:head>
	<title>Privacy Policy | Jared Howard</title>
	<meta
		name="description"
		content="How Jared Howard collects, uses, and protects personal information."
	/>
</svelte:head>

<article class="prose">
	<header class="prose-header">
		<h1>Privacy Policy</h1>
	</header>

	<div class="post-content">
		<p><em>Effective: May 14, 2026. Last reviewed: May 14, 2026.</em></p>

		<p>
			This Privacy Policy explains how Jared Howard, a sole proprietor based in Virginia
			("<strong>we</strong>", "<strong>our</strong>", "<strong>us</strong>"), collects,
			uses, discloses, and protects personal information ("<strong>PI</strong>") about visitors to
			this website and customers of our software products and development services (collectively, the
			"<strong>services</strong>"). It also describes the rights US residents have over their
			personal information and how to exercise them.
		</p>

		<p>If you do not agree with this policy, please do not use the services.</p>

		<h2 id="about-this-policy">1. About this policy</h2>
		<p>
			We are a US-based sole proprietorship. Our customers are primarily US consumers and US small
			businesses. We do not direct the services to residents of the European Economic Area, the
			United Kingdom, or other non-US jurisdictions; if you are located outside the United States, by
			using the services you understand that your personal information will be processed in the
			United States.
		</p>
		<p>
			Our Terms of Service require users to be at least 18 years old. We do not knowingly collect
			personal information from anyone under 18, and we do not direct the services to minors. If you
			believe someone under 18 has provided us with personal information — including a child under
			13, which carries additional protections under the federal Children's Online Privacy Protection
			Act — contact us at the address in Section 11 and we will delete the information and close the
			account. For California residents aged 13–17, the California "Eraser Law" (Bus. &amp; Prof. Code
			§22581) gives you the right to request removal of content you have posted; that right is
			described in Section 5.
		</p>

		<h2 id="personal-information-we-collect">2. Personal information we collect</h2>
		<p>
			We organize personal information by the categories used in the California Consumer Privacy Act
			(CCPA) so the disclosures below carry over to the similar privacy laws of Virginia, Colorado,
			Connecticut, Utah, and other US states.
		</p>

		<div class="table-scroll">
			<table>
				<thead>
					<tr>
						<th>Category</th>
						<th>Examples</th>
						<th>Sources</th>
						<th>Purposes</th>
						<th>Disclosed to (categories)</th>
						<th>Retention</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><strong>A. Identifiers</strong></td>
						<td>Name, email address, account identifier, IP address</td>
						<td>Directly from you; server logs</td>
						<td>
							Account creation and login; service delivery; customer support; security and abuse
							prevention; legal compliance
						</td>
						<td>
							Payment processor (for billing); hosting and infrastructure providers (to operate the
							service)
						</td>
						<td>
							While the account is active + up to 90 days after deletion request; server logs up to
							90 days
						</td>
					</tr>
					<tr>
						<td><strong>B. Customer records / commercial information</strong></td>
						<td>
							Billing address, billing country, last-four of payment card, subscription state, order
							history
						</td>
						<td>Stripe; directly from you when you place an order or sign an SOW</td>
						<td>
							Process and confirm payments; manage subscriptions and renewals; tax and accounting
							compliance
						</td>
						<td>Payment processor; tax and accounting service providers, if any</td>
						<td>
							Up to 7 years after the relevant transaction to meet US tax record-keeping standards
						</td>
					</tr>
					<tr>
						<td><strong>C. Internet or network activity</strong></td>
						<td>
							Pages visited, request timestamps, user-agent string, referring URL, basic device type
						</td>
						<td>Automatically when you use the services</td>
						<td>Operate and secure the services; debug; detect abuse</td>
						<td>Hosting and infrastructure providers</td>
						<td>Up to 90 days, except entries we preserve in connection with a specific incident</td>
					</tr>
					<tr>
						<td><strong>D. Geolocation (approximate only)</strong></td>
						<td>Country and approximate region inferred from IP address</td>
						<td>Automatically when you use the services</td>
						<td>Fraud prevention; geographic reporting; legal compliance</td>
						<td>Hosting and infrastructure providers</td>
						<td>Up to 90 days</td>
					</tr>
					<tr>
						<td>
							<strong>E. Professional or employment-related information (custom-development
								engagements only)</strong
							>
						</td>
						<td>Job title, organization, project description</td>
						<td>Directly from you during a custom-development engagement</td>
						<td>Scope and deliver the engagement; manage the customer relationship</td>
						<td>
							Hosting and infrastructure providers; sub-contractors if any (only with your prior
							knowledge)
						</td>
						<td>While the engagement is active + 7 years for record-keeping</td>
					</tr>
					<tr>
						<td><strong>F. Communications</strong></td>
						<td>Emails to and from us, support tickets</td>
						<td>Directly from you</td>
						<td>Respond to inquiries; document support and contract history</td>
						<td>None outside our email provider</td>
						<td>While the matter is active + reasonable archive for records</td>
					</tr>
				</tbody>
			</table>
		</div>

		<p>
			<strong>Sensitive personal information.</strong> We do not collect Social Security numbers,
			driver's licence numbers, precise geolocation, racial or ethnic origin, religious beliefs,
			biometric information, health information, sexual-orientation information, or contents of mail,
			email, or text messages other than communications you send to us directly. If our practices
			change, this section will be updated and active customers will be notified before the change
			takes effect.
		</p>
		<p>
			<strong>Payment-card data.</strong> We do not collect, store, or transmit full payment-card
			numbers, CVC codes, or expiration dates on our systems. Payment-card data is handled directly
			by Stripe, which states that its infrastructure is PCI-DSS compliant. We receive from Stripe
			only the limited billing-related fields described above in Category B; the "last-four of payment
			card" we receive is the last four digits of the card number for your reference, which is not
			considered cardholder data within the PCI-DSS scope and which we cannot use to charge or
			reconstruct the original card number.
		</p>

		<h2 id="sale-or-sharing-of-personal-information">3. Sale or sharing of personal information</h2>
		<p>
			The CCPA and similar state laws define <strong>"sale"</strong> and <strong>"sharing"</strong>
			as distinct concepts. "Sale" means disclosing personal information to a third party for monetary
			or other valuable consideration. "Sharing" means disclosing personal information to a third
			party for cross-context behavioral advertising, whether or not money changes hands.
		</p>
		<p>
			<strong
				>We do not sell personal information. We do not share personal information for cross-context
				behavioral advertising.</strong
			> As of the Effective date of this policy, we have not done either, and we have no plans to do so.
			We review this statement annually. If our practices change, this Section 3 will be updated before
			any change takes effect. We do not knowingly sell or share the personal information of consumers
			under the age of 16.
		</p>
		<p>
			Because we do not sell or share, the rights to opt out of sale or sharing described in Section 5
			are not applicable — but if you believe we have mischaracterized our practices, contact us at
			the address in Section 11 and we will respond.
		</p>

		<h2 id="service-providers-and-other-recipients">4. Service providers and other recipients</h2>
		<p>
			We use a small set of third-party service providers to operate the business. Each receives only
			the personal information they need to perform the service, and each is bound by contract or by
			the terms of their service offering to use that information solely on our instructions and for
			no other purpose.
		</p>
		<ul>
			<li>
				<strong>Payment processor.</strong> Stripe, Inc. — processes payments and manages
				subscriptions on our behalf.
			</li>
			<li>
				<strong>Static-site hosting.</strong> GitHub Pages, operated by GitHub, Inc. (a subsidiary of
				Microsoft Corporation) — hosts the marketing site you are reading now.
			</li>
			<li>
				<strong>Email and support.</strong> Google LLC (via Gmail) — receives and stores emails to
				and from our published contact address.
			</li>
		</ul>
		<p>
			Each of these providers publishes its own privacy policy on its corporate website; you can
			locate it by searching for the company name plus "privacy policy". Because their privacy
			policies change over time and the URLs do not always remain stable, we no longer link to
			specific URLs from this page.
		</p>
		<p>
			Additional service providers will be added when subscription products launch (for example, an
			application-hosting platform, a transactional-email service, or an error-monitoring service).
			This Section 4 will be updated before any new category of provider receives personal
			information.
		</p>
		<p>
			We may also disclose personal information when legally required — for example, in response to a
			subpoena, court order, or other valid legal process, or to protect the rights, safety, or
			property of any person.
		</p>

		<h2 id="your-privacy-rights">5. Your privacy rights</h2>
		<p>Depending on the US state you reside in, you may have some or all of the following rights:</p>
		<ul>
			<li>
				<strong>Right to know.</strong> Request confirmation of whether we process personal
				information about you, and request access to specific pieces and categories of that
				information.
			</li>
			<li>
				<strong>Right to correct.</strong> Request correction of inaccurate personal information we
				hold about you.
			</li>
			<li>
				<strong>Right to delete.</strong> Request deletion of personal information we hold about you,
				subject to limited exceptions (for example, information we must retain to meet tax
				obligations or to defend legal claims).
			</li>
			<li>
				<strong>Right to data portability.</strong> Receive a copy of personal information you have
				provided to us, in a portable and (where feasible) machine-readable format.
			</li>
			<li>
				<strong>Right to opt out of sale or sharing.</strong> Direct us not to sell or share your
				personal information. As noted in Section 3, we do not engage in either; this right is
				therefore not relevant to our practices but is available on request.
			</li>
			<li>
				<strong>Right to limit use of sensitive personal information.</strong> As noted in Section 2,
				we do not collect sensitive personal information; this right is therefore not relevant to our
				practices.
			</li>
			<li>
				<strong>Right to non-discrimination.</strong> We will not deny you the services, charge you a
				different price, or provide a different level of service because you exercised a privacy
				right.
			</li>
			<li>
				<strong>Right to appeal (Virginia, Colorado, Connecticut).</strong> If we deny a request, you
				may appeal that decision; see Section 7 for the appeal process.
			</li>
		</ul>
		<p>
			These rights are not absolute. We may decline a request to the extent applicable law permits —
			for example, where we cannot verify your identity, where the request is manifestly unfounded or
			excessive, or where complying would require us to violate another legal obligation. If we
			decline, we will tell you why.
		</p>

		<h2 id="how-to-exercise-your-rights">6. How to exercise your rights</h2>
		<p>Send a request by email to:</p>
		<p>
			<strong><a href="mailto:jared@jaredhoward.com">jared@jaredhoward.com</a></strong>
		</p>
		<p>Use the subject line <strong>"Privacy request"</strong>. In the body, please tell us:</p>
		<ol>
			<li>
				The right you wish to exercise (know, correct, delete, portability, opt-out of sale/sharing,
				or appeal).
			</li>
			<li>
				The email address associated with your account or with the personal information you are
				asking about.
			</li>
			<li>Enough detail about the request that we can respond meaningfully.</li>
		</ol>
		<p>
			<strong>Verification.</strong> To protect you, we will not act on a privacy request until we
			have reasonably verified that the request is yours. For account-holders, we will verify by
			confirming the request from the email address on the account and by asking one or two
			additional questions about the account. For non-account-holders, we will use the information
			available to us to make a reasonable verification; if we cannot verify, we will say so and
			explain what additional information might help.
		</p>
		<p>
			<strong>Authorized agents.</strong> You may designate an authorized agent to make a request on
			your behalf. We will require written proof of the authorization and verification of your
			identity before acting.
		</p>
		<p>
			<strong>Response time.</strong> We will acknowledge and respond to verifiable privacy requests
			within the timeframes required by the law of your state of residence (for example, the
			deadlines set by the CCPA/CPRA for California residents and by the VCDPA for Virginia residents
			— both generally 45 days, with a single permitted extension of up to an additional 45 days for
			good cause). For residents of US states without a comprehensive privacy statute, we apply a
			baseline of 45 days from a verifiable request, with one extension of up to an additional 45 days
			for good cause where needed. If we need an extension permitted by law, we will notify you within
			the original response period, explain the reason, and extend the deadline only by the period the
			relevant statute (or, for non-statute states, this policy) allows.
		</p>

		<h2 id="how-to-appeal-a-denied-request-virginia-and-similar-states">7. How to appeal a denied request (Virginia and similar states)</h2>
		<p>
			If we deny a request in whole or in part, residents of Virginia, Colorado, Connecticut, and
			other states that grant an appeal right may appeal that decision within 60 days of our response
			by emailing us at the address in Section 6 with the subject line
			<strong>"Privacy request — appeal"</strong> and the reasons you believe the original decision was
			wrong.
		</p>
		<p>
			We will respond to the appeal within 60 days of receipt with a written explanation of our final
			decision. If your appeal is denied, you may contact your state's Attorney General with a
			complaint about our handling of the request. For Virginia residents, that is the Virginia
			Attorney General (https://www.oag.state.va.us/).
		</p>

		<h2 id="cookies-tracking-and-analytics">8. Cookies, tracking, and analytics</h2>
		<p>
			As of the Effective date of this policy, this website does <strong>not</strong> use third-party
			analytics, advertising cookies, advertising pixels, or cross-site tracking technologies. All
			client-side JavaScript on the marketing site is first-party code we wrote ourselves; there are
			no embedded third-party scripts and no remote-loaded tracking tags as of that date.
		</p>
		<p>
			Subscription products may use a limited set of first-party functional cookies or local-storage
			entries (for example, to keep you signed in or to remember UI preferences). Where they do, those
			cookies are strictly necessary for the product to function and will be described in the
			product's own help or privacy documentation.
		</p>
		<p>
			If we ever add third-party analytics, behavioral-advertising, session-replay, or similar
			tracking technologies, this Section 8 will be updated <strong>before</strong> any such tool is
			enabled, and (where required by law) we will obtain consent or provide opt-out controls at that
			point.
		</p>

		<h2 id="security">9. Security</h2>
		<p>
			We take reasonable administrative, technical, and physical safeguards to protect personal
			information against accidental or unlawful loss, access, disclosure, alteration, or destruction.
			These include HTTPS in transit, reliance on Stripe (which states that its infrastructure is
			PCI-DSS compliant) for all payment-card handling, access controls on accounts and systems, and
			routine review of our service providers. No system is perfectly secure, however, and we cannot
			guarantee absolute security.
		</p>
		<p>
			In the event of a security incident affecting your personal information, we will notify you (and
			any regulator we are legally required to notify) in accordance with applicable law.
		</p>

		<h2 id="changes-to-this-policy">10. Changes to this policy</h2>
		<p>
			We may update this Privacy Policy from time to time. The "Effective" date at the top reflects
			the current version. We will notify you of material changes by (a) updating the Effective date,
			(b) emailing active subscription customers at least 15 days before the change takes effect, and
			(c) posting a short summary of the change at the top of this page for a reasonable period after
			the change. Continued use of the services after the new Effective date constitutes acceptance of
			the updated policy.
		</p>

		<h2 id="contact">11. Contact</h2>
		<p>
			For privacy questions, to exercise a right, or to file a complaint about our handling of
			personal information:
		</p>
		<p>
			<strong>Jared Howard</strong><br />
			<a href="mailto:jared@jaredhoward.com">jared@jaredhoward.com</a><br />
			Subject line: <strong>"Privacy request"</strong> (or <strong>"Privacy question"</strong> for
			general inquiries).
		</p>
	</div>
</article>

<SectionRail {sections} />
