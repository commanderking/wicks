<script lang="ts">
	import type { FormattedCandle } from '../utils/candles';
	export let candle: FormattedCandle;
</script>

<div class="flex flex-wrap">
	<div class="p-2">
		{#if candle.scentKeyColors}
			<div
				class="w-[30px] h-[30px]"
				style="  background:linear-gradient(to bottom left, {candle.scentKeyColors[1]} 50%,{candle
					.scentKeyColors[0]} 50%);
		"
			/>
		{/if}
	</div>

	<div>
		<p class="font-bold text-lg">{candle.candleName.toUpperCase()}</p>
		<p class="italic">{candle.scentNotesText}</p>
		<p>| {candle.characterName} |</p>
	</div>
</div>
