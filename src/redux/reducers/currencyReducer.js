import { INIT_CURRENCY_SWITCHER, SWITCH_ACTUAL_CURRENCY } from '../types/types';

const initialState = {
	actualCurrency: {},
};

export const currencyReducer = (state = initialState, action) => {
	switch (action.type) {
		case INIT_CURRENCY_SWITCHER:
			return {
				...state,
				actualCurrency: action.payload.currencyByDefault,
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
