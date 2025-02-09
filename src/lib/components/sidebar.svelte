<div
	class="hidden xl:block preset-filled-surface-100-900 shadow-xl fixed top-0 left-0 bottom-0 h-screen z-50 w-[320px] p-4 pb-24 space-y-10 overflow-y-auto transition-transform duration-100"
	id="drawer"
>
	<!-- Header -->
	<header class="flex justify-between items-center">
		<h2 class="h3">Skeleton</h2>
	</header>
	<!-- Theme / Lightswitch -->
	<div class="grid grid-cols-[1fr_auto] gap-4 items-center">
		<div class="input-group grid-cols-[auto_1fr] hover:preset-tonal">
			<div class="input-group-cell">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-palette"
					><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle
						cx="17.5"
						cy="10.5"
						r=".5"
						fill="currentColor"
					></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle
						cx="6.5"
						cy="12.5"
						r=".5"
						fill="currentColor"
					></circle><path
						d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
					></path></svg
				>
			</div>
		</div>
	</div>
	<!-- Navigation -->
	<nav class="flex flex-col gap-2">
		<span class="font-bold capitalize">Navigate</span>
		<a class="anchor" href="/" title="Homepage">Home</a>
		<a class="anchor hover:underline" href="/docs/get-started/introduction" target="_self">
			Docs
		</a><a class="anchor hover:underline" href="/news" target="_self"> News </a><a
			class="anchor hover:underline"
			href="https://themes.skeleton.dev/"
			target="_blank"
		>
			Themes
		</a><a class="anchor hover:underline" href="/figma" target="_self"> Figma </a>
	</nav>
	<!-- Slot -->
	<aside class="type-scale-2 space-y-10 overflow-y-auto pr-4">
		<nav class="flex flex-col gap-2">
			<span class="font-bold capitalize ml-2">get started</span>
			<ul class="flex flex-col gap-1">
				<a
					class="px-2 py-1 rounded anchor"
					href="/docs/get-started/introduction"
					title="Introduction"
				>
					Introduction
				</a><a
					class="px-2 py-1 rounded anchor"
					href="/docs/get-started/installation"
					title="Installation"
				>
					Installation
				</a><a
					class="px-2 py-1 rounded anchor"
					href="/docs/get-started/fundamentals"
					title="Fundamentals"
				>
					Fundamentals
				</a><a
					class="px-2 py-1 rounded anchor"
					href="/docs/get-started/plugin"
					title="Tailwind Plugin"
				>
					Tailwind Plugin
				</a>
			</ul>
		</nav>
		<nav class="flex flex-col gap-2">
			<span class="font-bold capitalize ml-2">guides</span>
			<ul class="flex flex-col gap-1">
				<a class="px-2 py-1 rounded anchor" href="/docs/guides/mode" title="Dark Mode">
					Dark Mode
				</a><a class="px-2 py-1 rounded anchor" href="/docs/guides/layouts" title="Layouts">
					Layouts
				</a><a class="px-2 py-1 rounded anchor" href="/docs/guides/figma" title="Figma UI kit">
					Figma UI kit
				</a><a class="px-2 py-1 rounded anchor" href="/docs/guides/cookbook" title="Cookbook">
					Cookbook
				</a>
			</ul>
		</nav>
		<nav class="flex flex-col gap-2">
			<span class="font-bold capitalize ml-2">design</span>
			<ul class="flex flex-col gap-1">
				<a class="px-2 py-1 rounded anchor" href="/docs/design/themes" title="Themes"> Themes </a><a
					class="px-2 py-1 rounded anchor"
					href="/docs/design/colors"
					title="Colors"
				>
					Colors
				</a><a class="px-2 py-1 rounded anchor" href="/docs/design/presets" title="Presets">
					Presets
				</a><a class="px-2 py-1 rounded anchor" href="/docs/design/typography" title="Typography">
					Typography
				</a><a class="px-2 py-1 rounded anchor" href="/docs/design/spacing" title="Spacing">
					Spacing
				</a>
			</ul>
		</nav>
		<nav class="flex flex-col gap-2">
			<span class="font-bold capitalize ml-2">tailwind</span>
			<ul class="flex flex-col gap-1">
				<a class="px-2 py-1 rounded anchor" href="/docs/tailwind/badges" title="Badges">
					Badges
				</a><a class="px-2 py-1 rounded anchor" href="/docs/tailwind/buttons" title="Buttons">
					Buttons
				</a><a class="px-2 py-1 rounded anchor" href="/docs/tailwind/cards" title="Cards">
					Cards
				</a><a class="px-2 py-1 rounded anchor" href="/docs/tailwind/chips" title="Chips">
					Chips
				</a><a class="px-2 py-1 rounded anchor" href="/docs/tailwind/dividers" title="Dividers">
					Dividers
				</a><a
					class="px-2 py-1 rounded anchor"
					href="/docs/tailwind/forms"
					title="Forms and Inputs"
				>
					Forms and Inputs
				</a><a class="px-2 py-1 rounded anchor" href="/docs/tailwind/gradients" title="Gradients">
					Gradients
				</a><a
					class="px-2 py-1 rounded anchor"
					href="/docs/tailwind/placeholders"
					title="Placeholders"
				>
					Placeholders
				</a><a class="px-2 py-1 rounded anchor" href="/docs/tailwind/tables" title="Tables">
					Tables
				</a>
			</ul>
		</nav>
		<nav class="flex flex-col gap-2">
			<span class="font-bold capitalize ml-2">components</span>
			<ul class="flex flex-col gap-1">
				<a
					class="px-2 py-1 rounded anchor"
					href="https://next.skeleton.dev/docs/components/accordion/svelte"
					title="Accordion"
				>
					Accordion
				</a><a
					class="px-2 py-1 rounded anchor"
					href="https://next.skeleton.dev/docs/components/app-bar/svelte"
					title="App Bar"
				>
					App Bar
				</a><a
					class="px-2 py-1 rounded anchor"
					href="https://next.skeleton.dev/docs/components/avatar/svelte"
					title="Avatar"
				>
					Avatar
				</a><a
					class="px-2 py-1 rounded anchor"
					href="https://next.skeleton.dev/docs/components/file-upload/svelte"
					title="File Upload"
				>
					File Upload
				</a><a
					class="px-2 py-1 rounded anchor"
					href="https://next.skeleton.dev/docs/components/navigation/svelte"
					title="Navigation"
				>
					Navigation
				</a><a
					class="px-2 py-1 rounded anchor"
					href="https://next.skeleton.dev/docs/components/pagination/svelte"
					title="Pagination"
				>
					Pagination
				</a><a
					class="px-2 py-1 rounded anchor"
					href="https://next.skeleton.dev/docs/components/progress/svelte"
					title="Progress"
				>
					Progress
				</a><a
					class="px-2 py-1 rounded anchor"
					href="https://next.skeleton.dev/docs/components/progress-ring/svelte"
					title="Progress Ring"
				>
					Progress Ring
				</a><a
					class="px-2 py-1 rounded anchor"
					href="https://next.skeleton.dev/docs/components/rating/svelte"
					title="Rating"
				>
					Rating
				</a><a
					class="px-2 py-1 rounded anchor"
					href="https://next.skeleton.dev/docs/components/segment/svelte"
					title="Segment Control"
				>
					Segment Control
				</a><a
					class="px-2 py-1 rounded anchor"
					href="https://next.skeleton.dev/docs/components/slider/svelte"
					title="Slider"
				>
					Slider
				</a><a
					class="px-2 py-1 rounded anchor"
					href="https://next.skeleton.dev/docs/components/switch/svelte"
					title="Switch"
				>
					Switch
				</a><a
					class="px-2 py-1 rounded anchor"
					href="https://next.skeleton.dev/docs/components/tabs/svelte"
					title="Tabs"
				>
					Tabs
				</a><a
					class="px-2 py-1 rounded anchor"
					href="https://next.skeleton.dev/docs/components/tags-input/svelte"
					title="Tags Input"
				>
					Tags Input
				</a>
			</ul>
		</nav>
		<nav class="flex flex-col gap-2">
			<span class="font-bold capitalize ml-2">integrations</span>
			<ul class="flex flex-col gap-1">
				<a
					class="px-2 py-1 rounded anchor"
					href="https://next.skeleton.dev/docs/integrations/code-block/svelte"
					title="Code Block"
				>
					Code Block
				</a><a
					class="px-2 py-1 rounded anchor"
					href="https://next.skeleton.dev/docs/integrations/iconography/svelte"
					title="Iconography"
				>
					Iconography
				</a><a
					class="px-2 py-1 rounded preset-tonal"
					href="https://next.skeleton.dev/docs/integrations/popover/svelte"
					title="Popover"
				>
					Popover
				</a><a
					class="px-2 py-1 rounded anchor"
					href="https://next.skeleton.dev/docs/integrations/toasts/svelte"
					title="Toasts"
				>
					Toasts
				</a>
			</ul>
		</nav>
		<nav class="flex flex-col gap-2">
			<span class="font-bold capitalize ml-2">resources</span>
			<ul class="flex flex-col gap-1">
				<a class="px-2 py-1 rounded anchor" href="/docs/resources/contribute" title="Contribute">
					Contribute
				</a>
			</ul>
		</nav>
	</aside>
</div>
