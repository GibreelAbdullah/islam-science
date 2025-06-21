<script>
	import { onMount } from 'svelte';

	let isDarkMode = false;
	onMount(() => {
		isDarkMode = localStorage.getItem('theme') === 'dark';
		document.documentElement.classList.toggle('dark', isDarkMode);
	});
	function toggleDarkMode() {
		isDarkMode = !isDarkMode;
		localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
		document.documentElement.classList.toggle('dark', isDarkMode);
	}
</script>

<button
	class="btn transition hover:scale-105"
	title="Toggle Dark Mode"
	on:click={toggleDarkMode}
	aria-label="Toggle Dark Mode"
>
	{#if isDarkMode}
		<!-- Moon Icon -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-moon"
		>
			<path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
		</svg>
	{:else}
		<!-- Sun Icon -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-sun"
		>
			<circle cx="12" cy="12" r="4" />
			<path
				d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
			/>
		</svg>
	{/if}
</button>
