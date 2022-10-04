<script src="lodash.js">
	import candles from '../../data/smells.json';
	/* Example format
    {
        "candles": [
            {
                "candleName": "TOKEN OF MY OBJECTION!",
                "characterName": "Phoenix Wright",
                "categories": [
                    "Fruity"
                ],
                "scentNotes": [
                    "dragonfruit",
                    "blue agave", 
                    "black currant"
                ],
                "fandom": "Ace Attoney"
            }
        ]
    }
    */
	import _ from 'lodash';
	let groupByKey = 'fandom';
	let candleByFandom = _.groupBy(candles.candles, groupByKey);
	/* Example format
    {
        "Ace Attoney": [
            {
                "candleName": "TOKEN OF MY OBJECTION!",
                "characterName": "Phoenix Wright",
                "categories": [
                    "Fruity"
                ],
                "scentNotes": [
                    "dragonfruit",
                    "blue agave", 
                    "black currant"
                ],
                "fandom": "Ace Attoney"
            }
        ]
    }
    */

	let fandomNames = Object.keys(candleByFandom);
	let data = fandomNames.map((x) => {
		return { title: x, candles: candleByFandom[x] };
	});
	/* Example format
    {
        [
            "title": "Ace Attoney", 
            "candles": [
                {
                    "candleName": "TOKEN OF MY OBJECTION!",
                    "characterName": "Phoenix Wright",
                    "categories": [
                        "Fruity"
                    ],
                    "scentNotes": [
                        "dragonfruit",
                        "blue agave", 
                        "black currant"
                    ],
                    "fandom": "Ace Attoney"
                }
            ]
        ]
    }
    */

	import { getScents } from '../../utils/scents';

	let scents = getScents();

	import ScentIconText from '../../components/ScentIconText.svelte';
</script>

<div class="flex w-[1024px] justify-center content-center m-auto">
	<img src="/logo_pink.png" alt="wicks by werby logo" class="w-[350px]" />
	<div class="max-w-[550px] h-[300px]">
		<h3 class="text-7xl text-white p-8 text-center">SCENT MENU</h3>
		<div class="flex flex-wrap bg-white justify-center">
			{#each scents as scent}
				<div class="p-2 text-[#7565A0]">
					<ScentIconText text={scent.name} color={scent.color} />
				</div>
			{/each}
		</div>
	</div>
</div>
