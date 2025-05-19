<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	let { children } = $props();
</script>

<div class="min-h-screen bg-gradient-to-br from-surface-50 to-surface-200 dark:from-surface-950 dark:to-surface-900">
	<!-- Header -->
	<header class="p-4"><Header /></header>
	<!-- Main -->
	<main class="">
		{@render children()}
	</main>
	<footer class="inset-x-0 bottom-0 shadow-lg">
		<Footer />
	</footer>
</div>
