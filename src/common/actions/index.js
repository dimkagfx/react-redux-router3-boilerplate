import store from "../../common/store/store"

export function fetchAuthenticated(url, method, body) {

	const token = store.getState().auth.access_token;

	let data = {
		method: method,
		headers: {
			Authorization: `Bearer ${token}`,
		}
	};

	if (method === 'POST' || method === 'PUT') {
		data['body'] = JSON.stringify(body);
		data['headers']['Content-Type'] = 'application/json';
	}

	return fetch(url, data).then((response) => {
		if (response.status >= 400 && response.status < 600) {
			return response.json().then(error => {
				throw error
			});
		}
		return response.json();
	})
}