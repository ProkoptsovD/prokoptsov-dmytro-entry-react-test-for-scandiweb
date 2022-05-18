import { INIT_PRODUCTS_LIST_PAGE } from '../types/types';

const initialState = {
	products: [],
	categories: [],
};

export const productsListPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case INIT_PRODUCTS_LIST_PAGE:
			console.log(action.payload);
			return {
				...state,
				products: action.payload.products,
				categories: action.payload.categories,
			};
		default:
			return state;
	}
};
