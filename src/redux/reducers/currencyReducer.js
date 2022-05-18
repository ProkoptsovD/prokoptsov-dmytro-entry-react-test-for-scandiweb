import { INIT_CURRENCY_SWITCHER, SWITCH_ACTUAL_CURRENCY } from '../types/types';

const initialState = {
	actualCurrency: {
		label: 'USD',
		symbol: '$',
	},
	allCurrencies: [],
};

export const currencyReducer = (state = initialState, action) => {
	switch (action.type) {
		case INIT_CURRENCY_SWITCHER:
			return {
				...state,
				allCurrencies: action.payload.currenciesList,
			};
		case SWITCH_ACTUAL_CURRENCY:
			const { label, symbol } = action.payload.newCurrency;

			return {
				...state,
				actualCurrency: {
					label,
					symbol,
				},
			};
		default:
			return state;
	}
};
