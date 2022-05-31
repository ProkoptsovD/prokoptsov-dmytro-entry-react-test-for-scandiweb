import { combineReducers } from 'redux';
import { appReducer } from './reducers/appReducer';
import { currencyReducer } from './reducers/currencyReducer';
import { categoryPageReducer } from './reducers/categoryPageReducer';
import { cartReducer } from './reducers/cartReducer';
import { cartOverlayReducer } from './reducers/cartOverlayReducer';
import { galleryReducer } from './reducers/galleryReducer';
import { productPageReducer } from './reducers/productPageReducer';

export const rootReducer = combineReducers({
	initial: appReducer,
	currency: currencyReducer,
	category: categoryPageReducer,
	cart: cartReducer,
	cartOverlay: cartOverlayReducer,
	gallery: galleryReducer,
	productPage: productPageReducer,
});
