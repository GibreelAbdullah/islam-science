<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	export const prerender = true;
	export const trailingSlash = "always";
	let { children } = $props();
</script>

<div class="h-screen grid grid-rows-[auto_1fr_auto]">
	<!-- Header -->
	<header class=" p-4"><Header /></header>
	<!-- Main -->
	{@render children()}
	<!-- Footer -->
	<Footer />
</div>
