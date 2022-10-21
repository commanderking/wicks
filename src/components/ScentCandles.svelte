<script lang="ts">
	import CandlesWrapper from './CandlesWrapper.svelte';
	export let title: string;
	export let candles: Candle[];
</script>

<CandlesWrapper {title} {candles} />
