<script src="lodash.js">
	import { getCandles } from '../../utils/candles';
	import { getScents } from '../../utils/scents';
	import ScentIconText from '../../components/ScentIconText.svelte';

	import FandomCandles from '../../components/FandomCandles.svelte';
	let fandomCandles = getCandles();
	let scents = getScents();

	console.log({ candles: fandomCandles });
</script>

<div class="flex flex-wrap w-[1024px] justify-center content-center m-auto text-[#7565A0]">
	<img src="/logo_pink.png" alt="wicks by werby logo" class="w-[300px]" />
	<div class="max-w-[550px] p-4">
		<h3
			class="text-7xl text-white p-8 text-center"
			style="	color: #7565A0;
			-webkit-text-stroke: 2px white;"
		>
			SCENT MENU
		</h3>
		<div class="flex flex-wrap bg-white justify-center p-4">
			{#each scents as scent}
				<div class="font-bold text-lg">
					<ScentIconText text={scent.name} color={scent.color} />
				</div>
			{/each}
		</div>
	</div>
	{#each fandomCandles as fandomCandleSet}
		<FandomCandles fandomCandles={fandomCandleSet} />
	{/each}
</div>
