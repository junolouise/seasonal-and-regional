<template>
	<div id="recipeDetail">
		<h3>Recipe: {{ storeState.recipe.label }}</h3>
		<h3>Source: {{ storeState.recipe.source }}</h3>
		<div class="image" :style="{ backgroundImage: `url(${storeState.recipe.image})` }">{{ storeState.image }}</div>
		
		<ul>
			<li v-for="(ingredient, index) in storeState.recipeIngredientsCarbon" :key="index">
				<p>{{ ingredient.text }}</p>
				<p class="weight">Weight: {{ Math.round(ingredient.weight) }} g</p>
				<p>
					Carbon footprint of local/seasonal {{ ingredient.found }} (CO2e):
					{{ Math.round(ingredient.seasonalCo2) }}
				</p>
				<p>
					Carbon footprint of imported {{ ingredient.found }} (CO2e):
					{{ Math.round(ingredient.unseasonalCo2) }}
				</p>
		
			</li>
			<br /><br />
			<li :style="{ color: carbonTrafficLight }">
				Total carbon footprint of local/seasonal produce (CO2e): {{ Math.round(storeState.totalSeasonalCo2) }}
			</li>
			<li :style="{ color: carbonTrafficLight }">
				Total carbon footprint of imported produce (CO2e): {{ Math.round(storeState.totalUnseasonalCo2) }}
			</li>
			<li>Total weight of recipe (g): {{ Math.round(storeState.recipe.totalWeight) }}</li>
		</ul>
		<div align="right">
		<button v-on:click="sourceRecipe(storeState.recipe.url)">View Recipe</button>
		</div>

	</div>
		
</template>
<script>
import { store } from '../store.js';
export default {
	data() {
		return {
			storeState: store.state,
		};
	},
	computed: {
		carbonTrafficLight() {
			if (this.storeState.totalSeasonalCo2 > 2000) {
				return 'red';
			} else if (this.storeState.totalSeasonalCo2 > 1000) {
				return 'orange';
			} else {
				return 'green';
			}
		},
	},
	methods: {
		sourceRecipe: function(url) {
			window.open(url);
		},
	},
};
</script>
<style scoped>
#recipeDetail {
	width: 100%;
	margin: 40px auto;
	padding: 0 30px;
	box-sizing: border-box;
}


h2 {
	border-radius: 10px;
	background: white;
	opacity: 70%;
}

ul {
	display: flex;
	flex-wrap: wrap;
	list-style-type: none;
	padding: 50px;
	border: 1px solid #222;
	border-radius: 25px;
	width: 40%;
	margin: 20px;
}

li {
	font-family: courier, monospace;
	font-size: 20px;
	font-weight: bold;
	line-height: 1em;
	color: purple;
	padding: 5px 15px;
	list-style-type: circle;
}

.image {
	height: 500px;
	width: 40%;
	border: 10px;
	overflow: hidden;
	border-radius: 25px;
	margin: 20px;
	background-size: cover;
	background-position: center;
	float: left;
	display: block;
}
.weight {
	float: right;
}

button {
display: inline-block;
background-color: #0d538c;
border-radius: 5px;
color: #eeeeee;
text-align: center;
font-size: 20px;
padding: 10px;
width: 150px;
-webkit-transition: all 0.5s;
-moz-transition: all 0.5s;
-o-transition: all 0.5s;
transition: all 0.5s;
cursor: pointer;
margin: 5px;
}

  
</style>
