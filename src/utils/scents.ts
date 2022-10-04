import { scents } from '../constants/scents';

export const getScents = () => {
	return Object.values(scents).sort();
};
