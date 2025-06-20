<script lang="ts">
	import Sidebar from './sidebar.svelte';
	import { icons } from '$lib/data/icons';
	import getData from '$lib/service/utils';
	import LightSwitch from './lightSwitch.svelte';
	import { base } from '$app/paths';
	import { HIERARCHY_PATH } from '$lib/data/constants';

	let hierarchy: Promise<any> = getData(HIERARCHY_PATH);
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
				<Sidebar {hierarchy} />
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

			<div class="hidden xl:flex items-center justify-start flex-nowrap text-nowrap">
				{#await hierarchy then data}
					{#each Object.entries(JSON.parse(data) as Record<string, { url: string; children: { key: string; url: string }[] }>) as [name, { url, children }]}
						<div class="relative inline-block m-2 group">
							<div class="pb-1">
								<!-- Creates overlap space -->
								<a
									href={url}
									class="flex items-center gap-1 px-3 py-2 rounded-md  text-gray-700 dark:text-gray-200 hover:text-black hover:bg-primary-50 dark:hover:text-white dark:hover:bg-primary-700 transition-colors duration-150"
								>
									{name}
									{#if children.length > 0}
										<svg
											class="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M19 9l-7 7-7-7"
											></path>
										</svg>
									{/if}
								</a>
							</div>

							{#if children.length > 0}
								<div
									class="preset-filled-surface-100-900 border-[1px] border-surface-200-800 absolute top-full left-0 mt-0 shadow-xl rounded-lg p-1 z-20 min-w-[180px] hidden group-hover:block opacity-0 group-hover:opacity-100 transform translate-y-0 group-hover:translate-y-0 transition-all duration-150"
								>
									{#each children as child}
										<a
											class="block px-3 py-2 rounded-md text-sm text-gray-700 dark:text-gray-200 hover:text-black hover:bg-primary-50 dark:hover:text-white dark:hover:bg-primary-700 transition-colors duration-150"
											href={child.url}
										>
											{child.key}
										</a>
									{/each}
								</div>
							{/if}
						</div>
					{/each}
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
