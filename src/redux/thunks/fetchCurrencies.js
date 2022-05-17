import { renderCurrencies } from '../actions/actions';
import { makeRequest, serverURL } from '../../server/makeRequest';
import { getCurrencies } from '../../server/query';

export const fetchCurrencies = () => {
	return (dispatch) => {
		makeRequest(serverURL, { getCurrencies })
			.then((res) => res.json())
			.then((currencies) => {
				dispatch(renderCurrencies(currencies));
			})
			.catch(console.log);
	};
};
