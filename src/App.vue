<template>
	<div>
		<app-header v-bind:component="component" v-on:changeComponent="updateComponent($event)"></app-header>
		<keep-alive>
			<component v-bind:is="component"></component>
		</keep-alive>
		<app-footer></app-footer>
	</div>
</template>

<script>
// Imports
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Ingredients from './components/Ingredients.vue';
import Menus from './components/Menus.vue';
export default {
	components: {
		'app-header': Header,
		'app-footer': Footer,
		'app-ingredients': Ingredients,
		'app-menus': Menus,
	},
	data() {
		return {
			component: 'app-ingredients',
		};
	},
	methods: {
		updateComponent: function(updatedComponent) {
			this.component = updatedComponent;
			console.log('in App Vue updateComponent', this.component);
		},
	},
};
</script>

<style>
body {
	margin: 0;
	font-family: 'Nunito SemiBold';
}
</style>
