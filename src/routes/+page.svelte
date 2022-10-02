<script>
	import ByCategory from '../components/ByCategory.svelte';
</script>

<div class="w-96">
	<div class="w-screen h-screen flex content-center ">
		<div class="w-screen max-w-screen-md m-auto">
			<h1 class="text-3xl mb-10 text-center font-bold center m-auto">View Candles</h1>
			<div class="flex">
				<ByCategory text="By Fandom" imageSrc="/fandom.png" link="/fandom" alt="Nintendo Switch" />
				<ByCategory
					text="By Scent"
					imageSrc="/scents.png"
					link="/scentcategory"
					alt="trees, flowers, fruits, and coffee or cake"
				/>
			</div>
		</div>
	</div>
</div>
