import { renderCategoryPage } from '../actions/actions';
import { appAPI } from '../../api/appAPI';

export const setProductsToPageThunk = (categoryName) => {
	return (dispatch) => {
		appAPI.getProductsByCategoryName(categoryName).then((products) => {
				dispatch(renderCategoryPage(products));
			})
			.catch(console.log);
	};
};
