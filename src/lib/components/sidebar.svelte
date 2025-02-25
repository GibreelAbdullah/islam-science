<script lang="ts">
	import { icons } from '$lib/data/icons';
	import topics from '$lib/service/utils';
	import { Modal } from '@skeletonlabs/skeleton-svelte';
	import LightSwitch from './lightSwitch.svelte';
	import { base } from '$app/paths';
	import { TITLE } from '$lib/data/constants';
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
			<a class="flex gap-4" href="{base}/" title="Islam-Science" aria-label="Islam-Science">
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
			{#each topics as item}
				<a class="hover:underline" href="{base}/{item.url}" target="_self"> {item.header} </a>
			{/each}
		</nav>
	{/snippet}
</Modal>
