<script lang="ts">
	import type { Project } from '#lib/site.ts';

	// Decorative preview panel for a work card. These are *abstractions*, not
	// screenshots — hand-drawn SVG in the site's own palette, so nothing here
	// misrepresents what a real client site or app looks like. Purely
	// presentational: aria-hidden, and the card's heading carries the meaning.
	let { thumb }: { thumb: Project['thumb'] } = $props();
</script>

<div class="thumb thumb-{thumb}" aria-hidden="true">
	<svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" role="presentation">
		<!-- App chrome: a title bar with three window dots, shared by every variant. -->
		<rect class="thumb-chrome" x="0" y="0" width="320" height="18" />
		<circle class="thumb-dot" cx="12" cy="9" r="2.6" />
		<circle class="thumb-dot" cx="21" cy="9" r="2.6" />
		<circle class="thumb-dot" cx="30" cy="9" r="2.6" />
		<rect class="thumb-omni" x="42" y="5.5" width="72" height="7" rx="3.5" />

		{#if thumb === 'analytics'}
			<!-- Sidebar + KPI row + trend line. -->
			<rect class="thumb-panel" x="0" y="18" width="58" height="162" />
			{#each [30, 44, 58, 72, 86] as y (y)}
				<rect class="thumb-line" x="10" y={y} width="38" height="4" rx="2" />
			{/each}
			{#each [0, 1, 2] as i (i)}
				<rect class="thumb-tile" x={70 + i * 82} y="30" width="72" height="30" rx="5" />
				<rect class="thumb-line thumb-line-bright" x={78 + i * 82} y="40" width="30" height="5" rx="2.5" />
			{/each}
			<rect class="thumb-tile" x="70" y="72" width="236" height="94" rx="6" />
			<path
				class="thumb-spark"
				d="M82 148 L108 132 L130 138 L152 112 L176 122 L200 96 L224 104 L248 84 L272 90 L294 68"
			/>
			<path
				class="thumb-spark-fill"
				d="M82 148 L108 132 L130 138 L152 112 L176 122 L200 96 L224 104 L248 84 L272 90 L294 68 L294 158 L82 158 Z"
			/>
			<circle class="thumb-node" cx="294" cy="68" r="3.4" />
		{:else if thumb === 'storefront'}
			<!-- Hero band + a three-up product grid. -->
			<rect class="thumb-tile" x="14" y="28" width="292" height="60" rx="6" />
			<rect class="thumb-line thumb-line-bright" x="28" y="46" width="96" height="7" rx="3.5" />
			<rect class="thumb-line" x="28" y="60" width="140" height="5" rx="2.5" />
			<rect class="thumb-pill" x="28" y="72" width="44" height="10" rx="5" />
			{#each [0, 1, 2] as i (i)}
				<rect class="thumb-tile" x={14 + i * 100} y="98" width="88" height="64" rx="6" />
				<circle class="thumb-node" cx={58 + i * 100} cy="122" r="12" />
				<rect class="thumb-line" x={30 + i * 100} y="144" width="56" height="4" rx="2" />
				<rect class="thumb-line" x={30 + i * 100} y="152" width="34" height="4" rx="2" />
			{/each}
		{:else if thumb === 'ledger'}
			<!-- Filter bar over a table of invoice rows with status chips. -->
			<rect class="thumb-pill" x="14" y="28" width="52" height="12" rx="6" />
			<rect class="thumb-pill" x="72" y="28" width="40" height="12" rx="6" />
			<rect class="thumb-pill thumb-pill-accent" x="118" y="28" width="34" height="12" rx="6" />
			<rect class="thumb-tile" x="14" y="50" width="292" height="116" rx="6" />
			{#each [0, 1, 2, 3, 4] as i (i)}
				<rect class="thumb-line" x="28" y={64 + i * 21} width="66" height="5" rx="2.5" />
				<rect class="thumb-line" x="106" y={64 + i * 21} width="94" height="5" rx="2.5" />
				<rect class="thumb-line" x="212" y={64 + i * 21} width="30" height="5" rx="2.5" />
				<rect
					class="thumb-chip"
					class:thumb-chip-on={i % 3 === 0}
					x="256"
					y={60 + i * 21}
					width="36"
					height="13"
					rx="6.5"
				/>
			{/each}
		{:else if thumb === 'mobile'}
			<!-- Two phone frames: an activity ring and a session list. -->
			<rect class="thumb-tile" x="52" y="30" width="86" height="140" rx="12" />
			<rect class="thumb-tile" x="176" y="30" width="86" height="140" rx="12" />
			<circle class="thumb-ring-track" cx="95" cy="78" r="26" />
			<circle class="thumb-ring" cx="95" cy="78" r="26" />
			{#each [0, 1, 2] as i (i)}
				<rect class="thumb-line" x="66" y={118 + i * 14} width="58" height="5" rx="2.5" />
			{/each}
			{#each [0, 1, 2, 3, 4] as i (i)}
				<rect class="thumb-line" x="190" y={48 + i * 22} width="58" height="5" rx="2.5" />
				<rect class="thumb-line thumb-line-bright" x="190" y={57 + i * 22} width="30" height="4" rx="2" />
			{/each}
		{:else if thumb === 'terminal'}
			<!-- CLI transcript over a hydrograph. -->
			{#each [0, 1, 2, 3] as i (i)}
				<rect class="thumb-line thumb-line-bright" x="16" y={32 + i * 15} width="10" height="5" rx="2.5" />
				<rect class="thumb-line" x="32" y={32 + i * 15} width={[112, 78, 148, 96][i]} height="5" rx="2.5" />
			{/each}
			<rect class="thumb-tile" x="14" y="98" width="292" height="68" rx="6" />
			<path
				class="thumb-spark"
				d="M26 152 C 52 148, 60 112, 82 116 S 118 154, 140 148 S 176 106, 200 114 S 240 152, 262 142 S 288 116, 296 120"
			/>
			<path
				class="thumb-spark-fill"
				d="M26 152 C 52 148, 60 112, 82 116 S 118 154, 140 148 S 176 106, 200 114 S 240 152, 262 142 S 288 116, 296 120 L296 158 L26 158 Z"
			/>
		{:else}
			<!-- Engine: a wireframe horizon with a unit marker. -->
			<rect class="thumb-tile" x="0" y="18" width="320" height="162" rx="0" />
			{#each [0, 1, 2, 3, 4, 5] as i (i)}
				<path class="thumb-grid" d="M{-40 + i * 92} 180 L{110 + i * 26} 96" />
			{/each}
			{#each [0, 1, 2, 3] as i (i)}
				<path class="thumb-grid" d="M0 {104 + i * i * 7 + i * 12} H320" />
			{/each}
			<path class="thumb-spark" d="M0 96 H320" />
			<circle class="thumb-node" cx="196" cy="140" r="5" />
			<circle class="thumb-ring-pulse" cx="196" cy="140" r="14" />
		{/if}
	</svg>
</div>
