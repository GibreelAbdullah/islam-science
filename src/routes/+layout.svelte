<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	let { children } = $props();
</script>

<!-- Islamic pattern background -->
<div
	aria-hidden="true"
	class="pointer-events-none absolute inset-0 z-0 opacity-10"
	style="background-image: url('/islamic-pattern.svg'); background-size: 400px 400px; background-repeat: repeat; min-height: 100vh; height: 100%; width: 100vw; position: fixed;"
></div>
<div
	class="min-h-screen bg-gradient-to-br from-surface-50 to-surface-200 dark:from-surface-950 dark:to-surface-900"
>
	<!-- Header -->
	<header class="p-4"><Header /></header>
	<!-- Main -->
	<main class="relative">
			{@render children()}
	</main>
	<footer class="inset-x-0 bottom-0 shadow-lg">
		<Footer />
	</footer>
</div>
