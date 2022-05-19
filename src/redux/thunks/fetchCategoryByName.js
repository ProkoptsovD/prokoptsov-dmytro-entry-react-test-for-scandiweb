import { initProductListPage } from '../actions/actions';
import { makeRequest } from '../../server/makeRequest';
import { getCategoryByName } from '../../server/query';

export const fetchCategoryByName = (categoryName) => {
	const categoryNameJSON = JSON.stringify({ categoryName });

	return (dispatch) => {
		makeRequest(serverURL, { getCategoryByName, categoryNameJSON })
			.then((res) => res.json())
			.then((category) => {
				dispatch(initProductListPage(category));
			})
			.catch(console.log);
	};
};
