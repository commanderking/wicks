export const scents = {
	Fruity: {
		name: 'Fruity',
		color: '#FFF2AF',
		image: ''
	},
	Floral: {
		name: 'Floral',
		color: '#B6A7DE'
	},
	Fresh: {
		name: 'Fresh',
		color: '#75C9C5'
	},
	Woodsy: {
		name: 'Woodsy',
		color: '#6D8C79'
	},
	Spicy: {
		name: 'Spicy',
		color: '#C96367'
	},
	Musky: {
		name: 'Musky',
		color: '#706D6D'
	},
	Sweet: {
		name: 'Sweet',
		color: '#F3CCDD'
	}
} as const;

export type Scent = keyof typeof scents;
