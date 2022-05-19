import {
	INIT_CURRENCY_SWITCHER,
	SWITCH_ACTUAL_CURRENCY,
	INIT_NAVBAR,
	INIT_APP,
	INIT_CURRENT_CATEGORY,
	RENDER_CATEGORY_PAGE,
} from '../types/types';

export const initApp = (initialData) => {
	return {
		type: INIT_APP,
		payload: { initialData },
	};
};
export const initCurrentCategory = (currentPage) => ({
	type: INIT_CURRENT_CATEGORY,
	payload: { currentPage },
});
export const renderCategoryPage = (products) => ({
	type: RENDER_CATEGORY_PAGE,
	payload: { products },
});
export const initCurrencySwitcher = (currencyByDefault) => ({
	type: INIT_CURRENCY_SWITCHER,
	payload: { currencyByDefault },
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
