<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	export let isOpen = false,
		containerClasses: svelte.JSX.ClassName = '';

	const dispatch = createEventDispatcher();
</script>

{#if isOpen}
	<div class="flex justify-center items-center fixed inset-0 h-full w-full z-40">
		<div
			transition:fade={{ duration: 300 }}
			on:click={() => dispatch('close')}
			class="absolute inset-0 h-full w-full bg-programming/50"
		/>
		<div
			transition:fly={{ duration: 500, y: 100 }}
			class={`relative bg-programming text-white drop-shadow-glow w-full m-8 min-w-[3rem] max-w-3xl min-h-[3rem] rounded md:w-auto ${containerClasses}`}
		>
			<button
				on:click={() => dispatch('close')}
				class="absolute top-0 right-0 flex justify-center overflow-hidden items-center text-4xl rounded-tr rounded-bl w-20 h-14 bg-gradient-design-animation || before:absolute before:inset-0 before:transition before:duration-300 before:bg-workattack hover:before:opacity-0"
			>
				<svg
					stroke="currentColor"
					fill="currentColor"
					stroke-width="0"
					viewBox="0 0 24 24"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
					class="relative"
					><path
						d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
					/></svg
				>
			</button>
			<slot>Modal</slot>
		</div>
	</div>
{/if}

<style>
	/* your styles go here */
</style>
