import { initProductListPage } from '../actions/actions';
import { makeRequest, serverURL } from '../../server/makeRequest';
import { getProductById } from '../../server/query';

export const fetchProductsbyId = (id) => {
	const idJSON = JSON.stringify({ id: id });

	return (dispatch) => {
		makeRequest(serverURL, { getProductById, id })
			.then((res) => res.json())
			.then((data) => {
				dispatch(initProductListPage(data));
			})
			.catch(console.log);
	};
};
