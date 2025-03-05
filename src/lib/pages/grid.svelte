<script>
    export let data;
    /**
	 * @type {string}
	 */
    export let path;
	import { base } from "$app/paths";
</script>


<div class="grid grid-cols-1 gap-6 max-w-[90rem] place-items-center px-4 pb-28 mx-auto">
	{console.log(base)}
	{console.log(path)}
	<!-- {console.log(path.replace('islam-science', ''))} -->
	{#each data.data as item}
		<a href="{path.replace(/\/$/, '')}/{item.toLowerCase().replace(/\s+/g, '_')}" class="block w-full h-full">
			<div
				class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 w-full h-full max-w-md px-4 py-8 flex text-center justify-center flex-col m-auto"
			>
				<h2 class="text-2xl font-bold">{item}</h2>
			</div>
		</a>
    {/each}
</div>


<style>
	@media (min-width: 640px) {
		.grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (min-width: 1024px) {
		.grid {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}
</style>
