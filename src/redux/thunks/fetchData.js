import { initProductPage } from '../actions/actions';
import { makeRequest, serverURL } from '../../server/makeRequest';

export const fetchData = () => {
	return (dispatch) => {
		makeRequest(serverURL)
			.then((res) => res.json())
			.then((data) => {
				dispatch(initProductPage(data));
			})
			.catch(console.log);
	};
};
