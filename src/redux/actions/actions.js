import { INIT_PRODUCT_LIST_PAGE } from '../types/types';

export const initProductPage = (dataFromServer) => ({
	type: INIT_PRODUCT_LIST_PAGE,
	payload: dataFromServer,
});
