<script lang="ts">
	import type { FandomCandles } from '../types/candles';
	import Candle from './Candle.svelte';
	export let title: string;
	export let candles: FandomCandles['candles'];
	export let titleBgColor: string = '#FFF2AF';
</script>

<div class="p-4 md:w-[850px] sm:max-w-[100%]">
	<div
		class="inline-block bg-{titleBgColor} p-2 pl-4 pr-4 font-bold text-lg"
		style:background-color={titleBgColor}
	>
		{title}
	</div>
	<div class="bg-white p-2 grid md:grid-cols-2 sm:grid-cols-1 gap-4">
		{#each candles as candle}
			<Candle {candle} />
		{/each}
	</div>
</div>
