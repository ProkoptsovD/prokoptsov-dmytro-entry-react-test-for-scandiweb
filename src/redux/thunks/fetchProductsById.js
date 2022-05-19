import { renderProductDescriptionPage } from '../actions/actions';
import { makeRequest, serverURL } from '../../server/makeRequest';
import { getProductById } from '../../server/query';

export const fetchProductsbyId = (id) => {
	return (dispatch) => {
		makeRequest({ getProductById, id: id })
			.then((res) => res.json())
			.then((product) => {
				dispatch(renderProductDescriptionPage(product));
			})
			.catch(console.log);
	};
};
