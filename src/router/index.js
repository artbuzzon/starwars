import Vue from 'vue';
import VueRouter from 'vue-router';
import PersonsList from '@/views/PeopleList';


Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: 'people'
	},
	{
		path: '/people',
		name: 'people-list',
		component: PersonsList
	},
	{
		path: '/person/:index',
		name: 'person-details',
		component: () => import(/* webpackChunkName: "person" */ '../views/PersonDetails'),
		props: true,
	},
	{
		path: "*",
		name: 'page-not-found',
		component: () => import(/* webpackChunkName: "pageNotFound" */ '../components/PageNotFound'),
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
