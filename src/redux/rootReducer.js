import { combineReducers } from 'redux';
import { appReducer } from './reducers/appReducer';
import { currencyReducer } from './reducers/currencyReducer';
import { categoryPageReducer } from './reducers/categoryPageReducer';

export const rootReducer = combineReducers({
	initial: appReducer,
	currency: currencyReducer,
	category: categoryPageReducer,
});
