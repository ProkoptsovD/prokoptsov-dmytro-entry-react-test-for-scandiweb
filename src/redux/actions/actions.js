import {
	INIT_PRODUCTS_LIST_PAGE,
	RENDER_CURRENCIES,
	RENDER_PRODUCT_DESCRIPTION_PAGE,
} from '../types/types';

export const initProductListPage = (dataFromServer) => ({
	type: INIT_PRODUCTS_LIST_PAGE,
	payload: dataFromServer,
});
export const renderProductDescriptionPage = (productInfo) => ({
	type: RENDER_PRODUCT_DESCRIPTION_PAGE,
	payload: productInfo,
});
export const renderCurrencies = (currencies) => ({
	type: RENDER_CURRENCIES,
	payload: currencies,
});
