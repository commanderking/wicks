<script lang="ts">
	import { getCandlesByScent } from '../../utils/candles';
	import { scents, type Scent } from '../../constants/scents';

	const candlesByScent = getCandlesByScent();

	console.log({ candlesByScent });
	const scentValues = Object.values(scents);

	let selectedScents: Scent[] = [];

	let initialScentsActive: { [key: string]: boolean } = {};
	$: scentsActive = selectedScents.reduce((activeScents, currentScent) => {
		return {
			...activeScents,
			[currentScent]: true
		};
	}, initialScentsActive);

	const updateScentsActive = (scent: Scent) => {
		scentsActive = {
			...scentsActive,
			[scent]: !scentsActive[scent]
		};
	};

	const addScent = (addedScent: Scent) => {
		if (selectedScents.includes(addedScent)) {
			selectedScents = selectedScents.filter((availableScent) => availableScent !== addedScent);
		} else {
			selectedScents = [...selectedScents, addedScent];
		}

		updateScentsActive(addedScent);
	};

	const selectAll = () => {
		selectedScents = scentValues.map((scentValue) => scentValue.name);
	};
</script>

<div>
	<h1>Scent Menu</h1>
	{#each scentValues as scentValue}
		<button
			class={'p-2 border-solid border-2 rounded-full'}
			style:background-color={scentsActive[scentValue.name] ? 'white' : ''}
			on:click={(value) => addScent(scentValue.name)}
		>
			{scentValue.name}
		</button>
	{/each}
	<button on:click={selectAll}>See All Scents</button>

	{#each selectedScents as scent}
		<div>
			{#each candlesByScent[scent] as candle}
				<div>{candle.candleName}</div>
			{/each}
		</div>
	{/each}

	{selectedScents}
</div>
