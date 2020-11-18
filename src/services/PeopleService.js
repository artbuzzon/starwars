import axios from 'axios';
import router from '@/router';

const apiClient = axios.create({
	baseURL: 'https://swapi.dev/',
	withCredentials: false,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
});

apiClient.interceptors.response.use((res) => res, (err) => {
	if (err.response.status === 404) {
		router.push({name: 'page-not-found'});
	}
	return Promise.reject(err);
});

export default {
	getPeople(page) {
		return apiClient.get(`api/people${page ? '/?page=' + page : ''}`);
	},
	getPerson(index) {
		return apiClient.get(`api/people/${index}`);
	},
	getDetails(slug) {
		return apiClient.get(slug);
	}
};
