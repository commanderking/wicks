<script src="lodash.js">
	import { getCandles } from '../../utils/candles';
	import Header from '../../components/Header.svelte';

	import CandlesWrapper from '../../components/CandlesWrapper.svelte';
	let fandomCandles = getCandles();
</script>

<div class="flex flex-wrap w-[1024px] justify-center content-center m-auto text-[#7565A0]">
	<Header />
	{#each fandomCandles as fandomCandleSet}
		<CandlesWrapper title={fandomCandleSet.title.toUpperCase()} candles={fandomCandleSet.candles} />
	{/each}
</div>
