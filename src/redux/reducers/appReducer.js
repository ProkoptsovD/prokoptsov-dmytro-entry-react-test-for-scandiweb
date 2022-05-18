import { INIT_APP } from '../types/types';

const initialState = {
	default: {
		currency: {
			label: 'USD',
			symbol: '$',
		},
		category: 'all',
	},
	categories: [],
	currencies: [],
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INIT_APP:
			const { currencies, categories } = action.payload.initialData;
			return {
				...state,
				currencies,
				categories,
			};
		default:
			return state;
	}
};
