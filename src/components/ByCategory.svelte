<script lang="ts">
	export let imageSrc: string;
	export let text: string;
	export let link: string;
	export let alt: string;
</script>

<div class="flex-1 text-center">
	<a href={link}>
		<img class="rounded-full w-[200px] m-auto mb-4" src={imageSrc} {alt} />
		<h3 class="text-2xl">{text}</h3>
	</a>
</div>
