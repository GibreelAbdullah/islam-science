<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<title>Islam & Science | Current Developments, Research and Publications in the Domain of Islam, Science and Technology</title>
	<meta name="description" content="Current Developments, Research and Publications in the Domain of Islam, Science and Technology">
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="keywords" content="Islam, Science, Islamic Science, Quran and Science, Muslim Scientists, Islam Knowledge, Kalam, Ilm">
	<meta name="author" content="Dr. Muhammed Hisham and Gibreel Abdullah">
	<link rel="canonical" href="https://islam-science.com" />
	<meta property="og:title" content="Islam & Science" />
	<meta property="og:description" content="Current Developments, Research and Publications in the Domain of Islam, Science and Technology." />
	<!-- <meta property="og:image" content="https://islam-science.com/social-card.jpg" /> -->
	<meta property="og:url" content="https://islam-science.com" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Islam & Science" />
	<meta name="twitter:description" content="Current Developments, Research and Publications in the Domain of Islam, Science and Technology." />
	<!-- <meta name="twitter:image" content="https://islam-science.com/social-card.jpg" /> -->
</svelte:head>

<!-- Background Pattern -->
<div
	aria-hidden="true"
	class="pointer-events-none absolute inset-0 z-0 opacity-10"
	style="background-image: url('/islamic-pattern.svg'); background-size: 400px 400px; background-repeat: repeat; min-height: 100vh; height: 100%; width: 100vw; position: fixed;"
></div>

<div
	class="min-h-screen bg-gradient-to-br from-surface-50 to-surface-200 dark:from-surface-950 dark:to-surface-900"
>
	<!-- Header -->
	<header class="p-4">
		<Header />
	</header>

	<!-- Main Content -->
	<main class="relative">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="inset-x-0 bottom-0 shadow-lg">
		<Footer />
	</footer>
</div>
