<script lang="ts">
	export let imageSrc: string;
	export let text: string;
	export let link: string;
	export let alt: string;
</script>

<div class="text-center md:w-2/4 sm:max-w-screen m-auto mb-8">
	<a href={link}>
		<img class="rounded-full w-[200px] m-auto mb-4 border-8" src={imageSrc} {alt} />
		<h3 class="text-2xl text-[#E9CAE5]">{text}</h3>
	</a>
</div>
