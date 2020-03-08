import Ingredients from './components/Ingredients.vue';
import Recipes from './components/Recipes.vue';
import RecipeDetail from './components/RecipeDetail.vue';
import Map from './components/Map.vue';

export default [
	{ path: '/', component: Ingredients },
	{ path: '/Recipes', component: Recipes },
	{ path: '/Recipes/:name', component: Recipes },
	{ path: '/RecipeDetail', component: RecipeDetail },
	{ path: '/Map', component: Map },
];
