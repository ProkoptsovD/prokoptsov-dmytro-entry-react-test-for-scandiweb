import { query } from './query';

const requestParams = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
	body: JSON.stringify(query),
};

/**
 * @param {String} url  // server url to fetch data from
 * @param {Object} requestConfig // object with request parametrs
 * @returns {Promise} not parsed promise with data from server
 */
export const makeRequest = async (url, requestConfig = requestParams) =>
	fetch(url, requestConfig);
