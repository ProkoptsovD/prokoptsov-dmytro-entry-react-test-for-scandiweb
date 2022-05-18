import serverURL from './serverURL';

/**
 * @param {String} url  // server url to fetch data from
 * @param {Object} requestConfig // object with request parametrs
 * @returns {Promise} not parsed promise with data from server
 */
const makeRequest = async (url, queryParam) => {
	const headers = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: queryParam,
	};
	console.log(queryParam);
	return fetch(url, headers);
};

export { makeRequest, serverURL };
