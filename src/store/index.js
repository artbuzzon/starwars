import Vue from 'vue';
import Vuex from 'vuex';
import PeopleService from '@/services/PeopleService';


Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		people: [],
		totalPersons: [],
	},
	getters: {
		getPersonByIndex: state => personIndex => {
			return state.people[parseInt(personIndex)];
		},
	},
	mutations: {
		SET_PEOPLE(state, payload) {
			state.people = payload.results;
			state.totalPersons = payload.count;
		},
	},
	actions: {
		fetchPeople(context, {page}) {
			return PeopleService.getPeople(page).then(response => {
				return response.data;
			}).catch(error => {
				throw new Error(error);
			});
		},
		fetchPerson(context, index) {
			return PeopleService.getPerson(index).then((response) => {
				return response.data;
			}).catch((e) => {
				console.error(e)
			});
		},
		fetchDetails(context, urls) {
			let paths = urls.map(url => new URL(url).pathname);
			let promises = paths.map(path => PeopleService.getDetails(path));
			return Promise.all(promises).then((items) => {
				return items;
			}).catch((e) => {
				throw new Error(e);
			});
		},
	},
});
