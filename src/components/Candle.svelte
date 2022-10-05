<script lang="ts">
	import type { FormattedCandle } from '../utils/candles';
	export let candle: FormattedCandle;
</script>

<div class="flex flex-wrap">
	<div class="p-2">
		<div
			class="w-[30px] h-[30px]"
			style="  background:linear-gradient(to bottom left, {candle.scentKeyColors[1]} 50%,{candle
				.scentKeyColors[0]} 50%);
		"
		/>
	</div>

	<div>
		<p class="font-bold text-lg">{candle.candleName}</p>
		<p class="italic">{candle.scentNotesText}</p>
	</div>
</div>
