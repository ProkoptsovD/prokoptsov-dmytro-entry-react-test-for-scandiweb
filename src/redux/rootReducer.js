import { INIT_PRODUCT_LIST_PAGE } from './types/types';

export const rootReducer = (state, action) => {
	switch (action.type) {
		case INIT_PRODUCT_LIST_PAGE:
			console.log(action.payload);
			return { ...state, data: action.payload };
		default:
			return state;
	}
};
