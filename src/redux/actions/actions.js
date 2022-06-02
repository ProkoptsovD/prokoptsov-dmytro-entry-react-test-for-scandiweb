import {
	INIT_CURRENCY_SWITCHER,
	SWITCH_ACTUAL_CURRENCY,
	INIT_NAVBAR,
	INIT_APP,
	INIT_CURRENT_CATEGORY,
	RENDER_CATEGORY_PAGE,
	RENDER_PRODUCT_PAGE,
	ADD_ITEM_TO_CART,
	REMOVE_ITEM_FROM_CART,
	INCREASE_ITEMS_QUANTATY,
	DECREASE_ITEMS_QUANTATY,
	OPEN_OVERLAY,
	CLOSE_OVERLAY,
	UPDATE_ACTUAL_CURRENCY_IN_CART,
	SUM_TOTAL_PRICE,
	NEXT_PICTURE,
	PREV_PICTURE,
	INIT_GALLERY,
	OPEN_CURRENCY_LIST,
	CLOSE_CURRENCY_LIST,
	CLEAR_PRODUCT_PAGE,
	ADD_NOTIFICATION,
	DELETE_NOTIFICATION,
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
export const openCurrencyList = () => ({
	type: OPEN_CURRENCY_LIST,
});
export const closeCurrencyList = () => ({
	type: CLOSE_CURRENCY_LIST,
});
export const initNavbar = (categories) => ({
	type: INIT_NAVBAR,
	payload: { categories },
});

export const addNotification = (type, message) => ({
	type: ADD_NOTIFICATION,
	payload: {
		type,
		message,
	}
});
export const deleteNotification = (toastId) => ({
	type: DELETE_NOTIFICATION,
	payload: { toastId }
});

//=================== cart actions ================//
export const addItemToCart = (item, option = null) => {
	// if (!option) {
		return {
			type: ADD_ITEM_TO_CART,
			payload: {item, option}
		}
	// } 
	
	// const isEveryOptionPicked = Object.keys(option).length === item.attributes.length;
	// if (isEveryOptionPicked) {
	// 	return {
	// 		type: ADD_ITEM_TO_CART,
	// 		payload: {item, option}
	// 	}
	// } else {
	// 	return alertNotification();
	// } 
};
export const removeItemToCart = (itemId) => ({
	type: REMOVE_ITEM_FROM_CART,
	payload: {itemId}
});
export const increaseItemsQuantaty = (id) => ({
	type: INCREASE_ITEMS_QUANTATY,
	payload: {id},
});
export const decreaseItemsQuantaty = (id) => ({
	type: DECREASE_ITEMS_QUANTATY,
	payload: {id},
});
export const updateActualCurrencyInCart = (currency) => ({
	type: UPDATE_ACTUAL_CURRENCY_IN_CART,
	payload: {currency},
});
export const sumTotalPrice = () => ({
	type: SUM_TOTAL_PRICE,
});

//================== cart overlay actions =============//
export const openOverlay = () => ({
	type: OPEN_OVERLAY,
});
export const closeOverlay = () => ({
	type: CLOSE_OVERLAY,
});

//================= gallery actions ==================//
export const initGallery = (picsQuantaty) => ({
	type: INIT_GALLERY,
	payload: { picsQuantaty },
});
export const nextPicture = () => ({
	type: NEXT_PICTURE,
});
export const prevPicture = () => ({
	type: PREV_PICTURE,
});

//================= product page ===================//
export const renderProductPage = (product) => ({
	type: RENDER_PRODUCT_PAGE,
	payload: { product },
});
export const clearProductPage = () => ({
	type: CLEAR_PRODUCT_PAGE,
});