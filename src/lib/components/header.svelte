<script lang="ts">
	import Sidebar from './sidebar.svelte';
	import { icons } from '$lib/data/icons';
	import getData from '$lib/service/utils';
	import LightSwitch from './lightSwitch.svelte';
	import { base } from '$app/paths';
	import { ROOT_PATH } from '$lib/data/constants';

	let topics: Promise<any> = getData(ROOT_PATH);
</script>

<header
	class="sticky top-0 z-50 border-b-[1px] border-surface-500/20 backdrop-blur w-full h-[70px] flex items-center"
>
	<div
		class="container mx-auto xl:grid max-w-screen-2xl xl:grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 xl:px-10"
	>
		<!-- Left -->
		<div class="flex items-center gap-10">
			<!-- Mobile Nav Drawer -->
			<div class="xl:hidden btn-icon">
				<Sidebar />
			</div>

			<a
				class="m-auto flex justify-center"
				href="{base}/"
				title="Islam-Science"
				aria-label="Islam-Science"
				style="left: 50%; transform: translateX(-50%);"
			>
				{@html icons.logo}
			</a>

			<div
				class="hidden xl:flex items-center justify-start gap-10 opacity-60 flex-nowrap text-nowrap"
			>
				{#await topics then data}
					{@html data}
				{/await}
			</div>
		</div>
		<!-- Middle -->
		<div class="flex items-center gap-2"><!-- Search --></div>
		<!-- Right -->
		<div class="flex items-center justify-end gap-2">
			<div class="hidden xl:flex items-center justify-end gap-2">
				<!-- Dark Mode Toggle -->
				<LightSwitch />
			</div>
		</div>
	</div>
</header>
