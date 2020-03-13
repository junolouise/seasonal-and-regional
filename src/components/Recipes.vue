<template>
	<div id="recipes">
		<!-- <input type="text" v-model="filterrecipes" placeholder="search recipes" /> -->
		<ul>
			<div v-for="(recipe, index) in recipes" :key="index" @click="storeRecipe(recipe.recipe)">
				<router-link to="/recipeDetail" exact>
					<li :style="{ backgroundImage: `url(${recipe.recipe.image})` }">
						<h2>{{ recipe.recipe.label }}</h2>
					</li>
				</router-link>
			</div>
		</ul>
	</div>
</template>
<script>
import { store } from '../store.js';
export default {
	data() {
		return {
			// filterrecipes: this.$route.params.name,
			search: 'search',
			recipes: [],
		};
	},
	methods: {
		storeRecipe(recipe) {
			store.addRecipe(recipe);
			store.calculateCarbonEmissions();
		},
	},

	// computed: {
	// 	filteredrecipes: function() {
	// 		return this.recipes.filter(recipe => {
	// 			return recipe.name.match(this.filterrecipes);
	// 		});
	// 	},
	// },
	created() {
		this.$http
			.get(
				'https://api.edamam.com/search?q=' +
					this.$route.params.name +
					'&app_id=649a31c0&app_key=1cd135a5aa58498a06ad42aa6798aeeb'
			)
			.then(function(data) {
				this.recipes = data.body.hits;
			});
	},
};
</script>
<style scoped>
#recipes {
	width: 100%;
	margin: 40px auto;
	padding: 0 30px;
	box-sizing: border-box;
}
h2 {
	border-radius: 10px;
	background: white;
}
a {
	visibility: visible;
	text-decoration: none;
}
a:visited {
	color: #00f;
}
ul {
	display: flex;
	flex-wrap: wrap;
	list-style-type: none;
	padding: 0;
}
li {
	border-radius: 25px;
	flex-grow: 1;
	flex-basis: 300px;
	text-align: center;
	padding: 30px;
	border: 5px solid #222;
	margin: 10px;
	width: 240px;
	height: 240px;
}
</style>

// https://api.edamam.com/search?q=chicken&app_id=${649a31c0}&app_key=${1cd135a5aa58498a06ad42aa6798aeeb}
