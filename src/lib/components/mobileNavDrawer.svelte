<script lang="ts">
	import { icons } from '$lib/data/icons';
	import NavTopics from '$lib/data/navTopics.svelte';
	import { Modal } from '@skeletonlabs/skeleton-svelte';
	import LightSwitch from './lightSwitch.svelte';

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
			<a class="flex gap-4" href="/" title="Islam-Science" aria-label="Islam-Science">
				{@html icons.logo}
				<h2 class="h3">Islam Science</h2>
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
			<NavTopics />
		</nav>
	{/snippet}
</Modal>
