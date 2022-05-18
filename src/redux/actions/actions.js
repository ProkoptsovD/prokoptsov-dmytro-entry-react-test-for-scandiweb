import {
	INIT_PRODUCTS_LIST_PAGE,
	RENDER_CURRENCIES,
	RENDER_PRODUCT_DESCRIPTION_PAGE,
	INIT_CURRENCY_SWITCHER,
	SWITCH_ACTUAL_CURRENCY,
	INIT_NAVBAR,
	INIT_APP,
} from '../types/types';

export const initApp = (initialData) => {
	return {
		type: INIT_APP,
		payload: { initialData },
	};
};
export const initProductListPage = (products) => ({
	type: INIT_PRODUCTS_LIST_PAGE,
	payload: { products },
});
export const initCurrencySwitcher = (currenciesList) => ({
	type: INIT_CURRENCY_SWITCHER,
	payload: { currenciesList },
});
export const switchActualCurrency = (newCurrency) => ({
	type: SWITCH_ACTUAL_CURRENCY,
	payload: { newCurrency },
});
export const initNavbar = (categories) => ({
	type: INIT_NAVBAR,
	payload: { categories },
});

// export const renderProductDescriptionPage = (productInfo) => ({
// 	type: RENDER_PRODUCT_DESCRIPTION_PAGE,
// 	payload: productInfo,
// });
// export const renderCurrencies = (currencies) => ({
// 	type: RENDER_CURRENCIES,
// 	payload: currencies,
// });
