<script lang="ts">
	import MobileNavDrawer from './mobileNavDrawer.svelte';
	import { icons } from '$lib/data/icons';
	import NavTopics from '$lib/data/navTopics.svelte';
	import LightSwitch from './lightSwitch.svelte';
</script>
<header
	class="sticky top-0 z-50 border-b-[1px] border-surface-500/20 bg-surface-50/90 dark:bg-surface-950/90 backdrop-blur w-full h-[70px] flex items-center"
>
	<div
		class="container mx-auto grid max-w-screen-2xl grid-cols-[auto_1fr_auto] xl:grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 xl:px-10"
	>
		<!-- Left -->
		<div class="flex items-center justify-start gap-10">
			<!-- Mobile Nav Drawer -->
			<div class="xl:hidden btn-icon">
				<MobileNavDrawer />
			</div>
			<!-- Logo -->
			<a class="hidden xl:inline-block" href="/" title="Islam-Science" aria-label="Islam-Science">
				{@html icons.logo}
			</a>
			<!-- Navigation -->
			<div class="hidden xl:flex items-center justify-start gap-10 opacity-60 flex-nowrap text-nowrap">
				<NavTopics />
			</div>
		</div>
		<!-- Middle -->
		<div class="flex items-center gap-2"><!-- Search --></div>
		<!-- Right -->
		<div class="flex items-center justify-end gap-2">
			<div class="hidden xl:flex items-center justify-end gap-2">
				<!-- Dark Mode Toggle -->
				<LightSwitch />
				<!-- Social -->
				<nav class="flex items-center">
					<a
						class="btn hover:preset-tonal"
						href="https://github.com/skeletonlabs/skeleton"
						target="_blank"
						title="GitHub"
						aria-label="GitHub"
					>
						{@html icons.github}
					</a>
				</nav>
			</div>
		</div>
	</div>
</header>
