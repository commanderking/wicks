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
    let groupByKey = 'fandom'
    let candleByFandom = _.groupBy(candles.candles, groupByKey)
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

    let fandomNames = Object.keys(candleByFandom)
    let data = fandomNames.map(x => {return {'title': x, 'candles': candleByFandom[x]}})
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
</script>
