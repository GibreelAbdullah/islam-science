<script lang="ts">
	import { GRID, PRE_TITLE, ROOT_PATH, TEXT, TITLE } from '$lib/data/constants';
	import getData from '$lib/service/utils';
	import Grid from '$lib/pages/grid.svelte';
	import { page } from '$app/stores';
	import Text from '$lib/pages/text.svelte';

	let dataStore = $state<any>(null);
	let path = $state<string>('');
	let title = $state<string>('');

	$effect(() => {
		path = $page.url?.pathname || '';
		if (path !== undefined) {
			if (path === '/') {
				getData(ROOT_PATH).then((data) => {
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

{#await dataStore then data: { type: string }}
	{#if data && data.type === GRID}
		<Grid {data} path={$page.url.pathname} />
	{:else if data && data.type === TEXT}
		<Text {data} />
	{/if}
{/await}
