<script lang="ts">
	import type { FandomCandles } from '../types/candles';
	import CandlesWrapper from './CandlesWrapper.svelte';
	import Candle from './Candle.svelte';
	export let fandomCandles: FandomCandles;
</script>

<CandlesWrapper title={fandomCandles.title.toUpperCase()} candles={fandomCandles.candles} />
