<script lang="ts">
	import {ROOT_PATH, TITLE } from '$lib/data/constants';
	import getData from '$lib/service/utils';
	import { page } from '$app/stores';
	import Loader from '$lib/components/loader.svelte';

	let dataStore = $state<any>(null);
	let path = $state<string>('');
	let title = $state<string>('');

	$effect(() => {
		path = $page.url?.pathname || '';
		if (path !== undefined) {
			console.log(path);
			if (path === '/' || path === '/islam-science/') {
				getData(ROOT_PATH + 'FRONTPAGE').then((data) => {
					dataStore = data;
				});
			} else {
				getData(path).then((data) => {
					dataStore = data;
				});
			}
		}
		let lastPath = path.split('/').pop();
		if (lastPath == '/' || lastPath == '') {
			title = TITLE;
		} else {
			title = lastPath?.replace(/_/g, ' ').toUpperCase() || '';
		}
	});
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="h2 text-center pb-8">{title}</div>

{#await dataStore}
	<Loader />
{:then data}
	<div class="gap-6 max-w-[90rem] px-4 pb-28 mx-auto text-lg">
		{@html data}
	</div>
{/await}	

<style>		
	@media (min-width: 640px) {
		:global(.grid) {
			grid-template-columns: repeat(2, minmax(0, 1fr))!important;
		}
	}

	@media (min-width: 1024px) {
		:global(.grid) {
			grid-template-columns: repeat(4, minmax(0, 1fr))!important;		
		}
	}
	:global(ol) {
		list-style-type: decimal!important;
		list-style-position: inside!important;
	}	
</style>
	