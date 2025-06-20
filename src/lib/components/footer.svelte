<script>
	import { icons } from '$lib/data/icons';
</script>

<footer class="border-t-[1px] border-surface-500/20 py-4 px-4 xl:px-0 opacity-100">
	<div class="container mx-auto flex flex-col xl:flex-row justify-between items-center gap-4">
		<div class="flex flex-col items-start gap-4">
			<p class="type-scale-1 opacity-100">
				Content : <a
					class="underline"
					href="https://www.researchgate.net/profile/Muhammed-Hisham"
					target="_blank">Dr. Muhammed Hisham</a
				>
				<br />
				Website :
				<a class="underline" href="https://www.linkedin.com/in/gibreel-abdullah/" target="_blank"
					>Gibreel Abdullah</a
				>
			</p>
		</div>
		<!-- Social -->
		<nav class="flex items-center">
			<a
				class="btn hover:preset-tonal"
				href="https://github.com/GibreelAbdullah/islam-science/"
				target="_blank"
				title="GitHub"
				aria-label="GitHub"
			>
				{@html icons.github}
			</a>
		</nav>
	</div>
</footer>
