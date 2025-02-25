<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	let { children } = $props();
</script>

<div class="h-screen">
	<!-- Header -->
	<header class=" p-4"><Header /></header>
	<!-- Main -->
	<main class=""> <!-- Add padding-bottom to prevent content from being hidden behind the fixed footer -->
		{@render children()}
	</main>
	<footer class="fixed inset-x-0 bottom-0 shadow-lg">
		<Footer />
	</footer>
</div>
