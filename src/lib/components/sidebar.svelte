<script lang="ts">
	import { icons } from '$lib/data/icons';
	import { Modal } from '@skeletonlabs/skeleton-svelte';
	import LightSwitch from './lightSwitch.svelte';
	import { base } from '$app/paths';

	const { hierarchy } = $props<{ hierarchy: Promise<any> }>();

	let drawerState = $state(false);

	function drawerClose() {
		drawerState = false;
	}
</script>

<Modal
	bind:open={drawerState}
	triggerBase="btn preset-tonal"
	contentBase="bg-surface-100-900 p-4 space-y-4 shadow-xl w-[480px] h-screen"
	positionerJustify="justify-start"
	positionerAlign=""
	positionerPadding=""
	transitionsPositionerIn={{ x: -480, duration: 200 }}
	transitionsPositionerOut={{ x: -480, duration: 200 }}
>
	{#snippet trigger()}{@html icons.menu}{/snippet}
	{#snippet content()}
		<header class="flex items-center justify-between">
			<a onclick={drawerClose} class="flex gap-4" href="{base}/" title="Islam-Science" aria-label="Islam-Science">
				{@html icons.logo}
				<!-- <h2 class="h3">{title}</h2> -->
			</a>
			<button
				class="btn-icon mr-3"
				onclick={drawerClose}
				data-drawer-toggle=""
				aria-label="Close Drawer"
			>
				{@html icons.close}
			</button>
		</header>
		<div class="float-right">
			<LightSwitch />
		</div>

		<nav class="flex flex-col gap-2">
			{#await hierarchy then data}
				{#each Object.entries(JSON.parse(data) as Record<string, { url: string; children: { key: string; url: string }[] }>) as [name, { url, children }]}
					<a
						onclick={drawerClose}
						href={url}
						class="flex items-center gap-1 px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-black hover:bg-primary-50 dark:hover:text-white dark:hover:bg-primary-700 transition-colors duration-150"
					>
						{name}
					</a>
				{/each}
			{/await}
		</nav>
	{/snippet}
</Modal>
