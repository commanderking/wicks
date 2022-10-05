import type { Scent } from '../constants/scents';

export type Candle = {
	candleName: string;
	characterName: string;
	categories: Scent[];
	scentNotes: string[];
};

export type FandomCandles = {
	title: string;
	candles: Candle[];
};
