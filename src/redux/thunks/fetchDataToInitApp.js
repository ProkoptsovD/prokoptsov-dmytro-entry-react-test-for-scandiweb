import { makeRequest, serverURL } from '../../api/makeRequest';
import { getCategoryByName } from '../../api/query';
import { initApp } from '../actions/actions';

export const fetchDataToInitApp = (categoryName) => {
	const category = JSON.stringify({ category: { title: 'tech' } });
	const a = JSON.stringify({
		getCategoryByName,
		category: { title: 'tech' },
	});

	return (dispatch) => {
		makeRequest(serverURL, a)
			.then((response) => response.json())
			.then((parsedData) => {
				const { categories, currencies } = parsedData.data;
				dispatch(initApp({ categories, currencies }));
			});
	};
};
