import _ from 'lodash';
import type { Candle } from '../types/candles';
import data from '../data/smells.json';
import { scents } from '../constants/scents';

const getScentKeyColors = (candle: Candle) => {
	const { categories } = candle;
	if (categories.length === 1) {
		const scent = scents[categories[0]].color;
		return [scent, scent];
	}

	return categories.map((category) => {
		return scents[category].color;
	});
};

const formatScentNotesDisplayText = (candle: Candle) => {
	return candle.scentNotes.join(', ');
};

const formatCandles = (candles: Candle[]) => {
	let groupByKey = 'fandom';
	let candleByFandom = _.groupBy(candles, groupByKey);

	let fandomNames = Object.keys(candleByFandom);
	let fandomCandles = fandomNames.map((name) => {
		const candles = candleByFandom[name];
		const formattedCandles = candles.map((candle) => {
			return {
				...candle,
				scentKeyColors: getScentKeyColors(candle),
				scentNotesText: formatScentNotesDisplayText(candle)
			};
		});
		return { title: name, candles: formattedCandles };
	});
	return fandomCandles;
};

export type FormattedCandle = ReturnType<typeof formatCandles>[0]['candles'][0];

export const getCandles = () => {
	return formatCandles(data.candles);
};
