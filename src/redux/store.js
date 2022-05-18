import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { productListPageReducer } from './reducers/productListPageReducer';
import { rootReducer } from './rootReducer';

export const store = createStore(rootReducer, applyMiddleware(thunk));
