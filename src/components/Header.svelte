<script lang="ts">
	import { getScents } from '../utils/scents';
	import ScentIconText from './ScentIconText.svelte';

	let scents = getScents();
</script>

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
