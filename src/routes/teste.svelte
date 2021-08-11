<script lang="ts">
	import { initTreejs } from '../utils/treejs';
	import { onMount } from 'svelte';

	let canvasRef: HTMLCanvasElement;

	onMount(() => {
		initTreejs(canvasRef);
	});
</script>

<canvas bind:this={canvasRef} class="webgl" />

<style>
	.webgl {
		position: absolute;
		bottom: 0;
		right: 0;
		outline: none;
	}
</style>
