import { combineReducers } from 'redux';
import { appReducer } from './reducers/appReducer';
import { currencyReducer } from './reducers/currencyReducer';
import { productsListPageReducer } from './reducers/productsListPageReducer';

export const rootReducer = combineReducers({
	initial: appReducer,
	currency: currencyReducer,
	category: productsListPageReducer,
});
