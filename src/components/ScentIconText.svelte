<script lang="ts">
	export let text: string;
	export let color: string;
</script>

<div class="flex">
	<div class="p-2">
		<div style="background-color: {color}" class="w-[20px] h-[20px]" />
	</div>
	<span class="p-2 pl-0 pr-4">
		{text.toUpperCase()}
	</span>
</div>
