<template>
	<div>
		<app-header></app-header>
		<router-view>
			<keep-alive>
				<component v-bind:is="component"></component>
			</keep-alive>
		</router-view>
		<app-footer></app-footer>
	</div>
</template>

<script>
// Imports
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Ingredients from './components/Ingredients.vue';
import Recipes from './components/Recipes.vue';
import RecipeDetail from './components/RecipeDetail.vue';
import Map from './components/Map.vue';

export default {
	components: {
		'app-header': Header,
		'app-footer': Footer,
		'app-ingredients': Ingredients,
		'app-recipes': Recipes,
		'app-recipeDetail': RecipeDetail,
		'app-map': Map,
	},
	data() {
		return {
			component: 'app-ingredients',
		};
	},
};
</script>

<style>
body {
	margin: 0;
	font-family: 'big caslon';
}
</style>
