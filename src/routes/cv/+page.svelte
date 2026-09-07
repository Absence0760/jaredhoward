<script lang="ts">
	import SectionRail from '$lib/components/SectionRail.svelte';
	import { site } from '$lib/site';

	// Index for the >=1080px right rail. Kept beside the markup rather than
	// derived from the DOM so it prerenders and works with no JavaScript.
	const sections = [
		{ id: 'summary', label: 'Summary' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'education', label: 'Education' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'school-projects', label: 'School Projects' },
		{ id: 'awards', label: 'Awards' }
	];
</script>

<svelte:head>
	<title>CV | Jared Howard</title>
	<meta
		name="description"
		content="Custom web and software development for small businesses and government agencies."
	/>
</svelte:head>

<div class="cv">
	<!-- Screen title. Every other route opens with a display h1 on the fading
	     rule; without this one the CV opened on a blue download button with no
	     subject attached to it, and the document's only h1 was the print-only
	     one below — display:none, so the screen outline started at h2. The
	     masthead says "Jared Howard / Software Engineer", not what this page is. -->
	<header class="prose-header cv-screen-header">
		<h1>Curriculum Vitae</h1>
	</header>

	<div class="cv-actions">
		<!-- rel="external": build/cv.pdf is generated AFTER `vite build` (by
		     build:pdf), so the prerender crawler must not follow this link. -->
		<a class="button button-primary" href="/cv.pdf" download="jared-howard-cv.pdf" rel="external">
			Download CV (PDF)
		</a>
	</div>

	<!-- Print-only: the PDF is generated from this page (scripts/generate_cv_pdf.mjs)
	     with the masthead hidden, so the identity line must live here. -->
	<header class="cv-print-header">
		<h1>{site.title}</h1>
		<p>
			{site.role} · <a href="mailto:jared@jaredhoward.com">jared@jaredhoward.com</a> ·
			<a href={site.url}>jaredhoward.com</a>
		</p>
	</header>

	<h2 id="summary">Summary</h2>
	<p>
		Software engineer working as a QA Software Engineer at enChoice, Inc., with a background
		leading the development and maintenance of automated Cypress and Playwright test suites.
		Alongside the day job I run an independent practice building and maintaining custom web
		applications for small-business clients.
	</p>

	<h2 id="experience">Experience</h2>

	<h3>QA Software Engineer at enChoice, Inc. — May 2025–Present</h3>
	<ul>
		<li>Contributing to the test-automation suite using Cypress.</li>
		<li>Building security automation with OWASP ZAP.</li>
		<li>Creating Bitbucket Pipelines to run the automated tests in CI.</li>
		<li>Reviewing and triaging the reports from automated test runs.</li>
		<li>Contributing to scrums and sprint planning on a daily/weekly basis.</li>
	</ul>

	<h3>Senior SDET at Paymerang — April 2023–April 2025</h3>
	<ul>
		<li>
			Leading the development of several automation projects, employing tools such as Cypress and
			Playwright.
		</li>
		<li>Leading and onboarding a new remote Indian SDET team.</li>
		<li>
			Worked with an Australian team (Sypht), contributing to different frontend and backend
			projects.
		</li>
		<li>Helped the development team at Paymerang improve their Remix apps.</li>
		<li>Contributed to scrums and sprint planning on a daily/weekly basis.</li>
	</ul>

	<h3>QA Engineer at enChoice — July 2022–April 2023</h3>
	<ul>
		<li>Testing new features under development.</li>
		<li>Creating as well as maintaining tests on their automated test suite.</li>
		<li>
			Integrated Cucumber with our existing test suite, enhancing the overall efficiency of our
			testing processes.
		</li>
		<li>Created and executed test cases in Zephyr for Regression testing.</li>
		<li>Participation in scrums and sprint planning on a daily/weekly basis.</li>
	</ul>

	<h3>Internship at enChoice — January 2020–March 2020</h3>
	<ul>
		<li>Shadowing developers and QA engineers.</li>
		<li>Actively participating in their daily tasks and contributing to various projects.</li>
		<li>
			Extensively working with JSON files, updating information to ensure its seamless integration
			within our product.
		</li>
	</ul>

	<h3>Externship at NYCTechPros — July 2019–September 2019</h3>
	<p>Further developed a website for a client as part of my final semester.</p>

	<h2 id="education">Education</h2>

	<h3>Le Moyne College — Bachelor of Science in Computer Science | May 2022</h3>
	<ul>
		<li>Minor in Mathematics</li>
		<li>Athletic Scholarship (Tennis)</li>
	</ul>

	<h3>ASA College — Associates degree in Computer Programming and Inf.Tech | September 2019</h3>
	<ul>
		<li>Athletic Scholarship (Tennis)</li>
	</ul>

	<h2 id="skills">Skills</h2>
	<p><strong>Programming:</strong> Javascript, Python, HCL</p>
	<p><strong>Software:</strong> Gitlab, Github, Azure Devops, AWS, GCP, Jira</p>
	<p>
		<strong>Relevant Coursework:</strong> Data Structures and Algorithms, Object Oriented Software
		Design, Introduction to Artificial Intelligence, Computer Architecture, Calculus, Discrete
		Mathematics, Introduction to Probability
	</p>
	<p><strong>Foreign Languages:</strong> Afrikaans</p>

	<h2 id="school-projects">School Projects</h2>

	<h3>Le Moyne Dolphin App — May 2022</h3>
	<p>
		For my honors project I built a news app using Xamarin. I learnt about mobile app development
		and gained experience with the .Net framework and the C# programming language.
	</p>

	<h3>Farkle Game — December 2021</h3>
	<p>
		Built a game using Java to implement certain design principles and follow security requirements.
		Final product was playable from the command line and stored data in an XML file.
	</p>

	<h3>Simulate Operating System — May 2021</h3>
	<p>
		Built functions to simulate operations of numerous operating systems. Implemented the
		inter-process communication mechanism. Used multithreading and scheduling algorithms. Built a
		memory manager for the simulation.
	</p>

	<h2 id="awards">Awards</h2>
	<ul>
		<li>ASA College Dean's List</li>
		<li>Le Moyne College Academic Excellence Spring 2020</li>
		<li>Le Moyne College Academic Excellence Fall 2020</li>
		<li>Le Moyne College Academic Honors Spring 2021</li>
		<li>Northeast-10 Conference Scholar-Athlete Sport Excellence Award</li>
		<li>NE10 All-Academic Team</li>
		<li>Elite 24 Award recipient</li>
		<li>NE10 Player of the Year</li>
		<li>All-Conference First Team at #1 singles and #1 doubles</li>
	</ul>
</div>

<SectionRail {sections} />
