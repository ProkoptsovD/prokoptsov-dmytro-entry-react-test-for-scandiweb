import { initNavbar } from '../actions/actions';
import { makeRequest, serverURL } from '../../api/makeRequest';
import { getAllCategories } from '../../api/query';

export const fetchAllCategories = () => {
	return (dispatch) => {
		try {
			makeRequest(serverURL, getAllCategories)
				.then((res) => res.json())
				.then((parsedResponse) => {
					const { categories } = parsedResponse.data;
					dispatch(initNavbar(categories));
				})
				.catch(console.log);
		} catch (e) {
			console.log(e);
		}
	};
};
