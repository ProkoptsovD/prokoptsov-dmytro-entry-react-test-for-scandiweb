import { INIT_PRODUCTS_LIST_PAGE } from '../types/types';

export const initProductListPage = (dataFromServer) => ({
	type: INIT_PRODUCTS_LIST_PAGE,
	payload: dataFromServer,
});
