import { combineReducers } from 'redux';
import { currencyReducer } from './reducers/currencyReducer';
import { productsListPageReducer } from './reducers/productListPageReducer';

export const rootReducer = combineReducers({
	currency: currencyReducer,
	category: productsListPageReducer,
});
