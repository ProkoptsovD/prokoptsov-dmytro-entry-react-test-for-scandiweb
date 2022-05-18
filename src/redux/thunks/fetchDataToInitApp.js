import { makeRequest, serverURL } from '../../api/makeRequest';
import { getCategoryByName } from '../../api/query';
import { initApp } from '../actions/actions';

export const fetchDataToInitApp = (categoryName) => {
	const query = { query: getCategoryByName, category: { title: categoryName } };

	return (dispatch) => {
		makeRequest(serverURL, query)
			.then((response) => response.json())
			.then((parsedData) => {
				const { categories, currencies } = parsedData.data;
				dispatch(initApp({ categories, currencies }));
			});
	};
};
