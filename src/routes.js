import Ingredients from './components/Ingredients.vue';
import Menus from './components/Menus.vue';

export default [
	{ path: '/', component: Ingredients },
	{ path: '/menus', component: Menus },
	{ path: '/menus/:name', component: Menus },
];
