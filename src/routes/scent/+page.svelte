<script lang="ts">
	import { getCandlesByScent } from '../../utils/candles';
	import { scents, type Scent } from '../../constants/scents';
	import CandlesWrapper from '../../components/CandlesWrapper.svelte';
	import Header from '../../components/Header.svelte';
	import { fade } from 'svelte/transition';

	const candlesByScent = getCandlesByScent();
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
			selectedScents = [addedScent, ...selectedScents];
		}

		updateScentsActive(addedScent);
	};

	const selectAll = () => {
		selectedScents = scentValues.map((scentValue) => scentValue.name);
	};
</script>

<div class="flex flex-wrap w-[1024px] justify-center content-center m-auto mt-8 ">
	<Header />
	<div class="max-w-[850px] p-4">
		<h1 class="text-4xl text-center text-white mb-2">Pick a Scent</h1>
		<div class="pt-8 pb-8">
			{#each scentValues as scentValue}
				<button
					class={'p-4 pt-2 pb-2 m-1 border-solid border-2 rounded-full'}
					style:background-color={scentsActive[scentValue.name] ? scentValue.color : ''}
					on:click={(value) => addScent(scentValue.name)}
				>
					<span class="font-bold">{scentValue.name.toUpperCase()}</span>
				</button>
			{/each}
			<button class="w-[100%] text-white underline mt-4 text-xl" on:click={selectAll}
				>See All Scents!</button
			>
		</div>
	</div>

	<div>
		{#each selectedScents as scent (scent)}
			{#if candlesByScent[scent].length}
				<div in:fade={{ duration: 500 }}>
					<CandlesWrapper
						title={scent.toUpperCase()}
						candles={candlesByScent[scent]}
						titleBgColor={scents[scent].color}
					/>
				</div>
			{/if}
		{/each}
	</div>

	{#if selectedScents.length === 0}
		<div
			class="w-[100%] max-w-[850px] text-center text-2xl text-white p-8 border-white border-2 m-10"
		>
			No Scents Selected Yet :(
		</div>
	{/if}
</div>
