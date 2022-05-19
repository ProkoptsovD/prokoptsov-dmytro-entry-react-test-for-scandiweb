import { renderCategoryPage } from '../actions/actions';
import { makeRequest } from '../../api/makeRequest';
import { getCategoryByName } from '../../api/query';

export const fetchCategoryByName = (categoryName) => {
	return (dispatch) => {
		makeRequest({
			query: getCategoryByName,
			category: { title: categoryName },
		})
			.then((res) => res.json())
			.then((parsedData) => {
				const { products } = parsedData.data.category;
				dispatch(renderCategoryPage(products));
			})
			.catch(console.log);
	};
};
