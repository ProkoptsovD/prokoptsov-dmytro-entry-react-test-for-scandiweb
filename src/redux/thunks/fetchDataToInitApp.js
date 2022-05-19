import { makeRequest } from '../../api/makeRequest';
import { getDataToInitApp } from '../../api/query';
import { initApp } from '../actions/actions';

export const fetchDataToInitApp = (categoryName) => {
	const query = { query: getDataToInitApp, category: { title: categoryName } };

	return (dispatch) => {
		makeRequest(query)
			.then((response) => response.json())
			.then((parsedData) => {
				const { categories, currencies } = parsedData.data;
				dispatch(initApp({ categories, currencies }));
			});
	};
};
