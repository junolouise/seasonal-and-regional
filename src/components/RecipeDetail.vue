<template>
	<div id="recipeDetail">
		<h3>Recipe: {{ storeState.recipe.label }}</h3>
		<h3>Source: {{ storeState.recipe.source }}</h3>
		<button v-on:click="sourceRecipe(storeState.recipe.url)">View source Recipe</button>

		<div class="image" :style="{ backgroundImage: `url(${storeState.recipe.image})` }">{{ storeState.image }}</div>
		<ul>
			<table>
			<li v-for="(ingredient, index) in storeState.recipeIngredientsCarbon" :key="index">
			<tr>	
				<td><p>{{ ingredient.text }}</p></td>
			</tr>
				<tr>
					<td class="weight">Weight: </td> <td>{{ Math.round(ingredient.weight) }} </td>
				</tr>
				<tr>
					<td>Carbon footprint of local/seasonal {{ingredient.found}} (CO2e): </td><td>{{ Math.round(ingredient.seasonalCo2) }}</td>
				</tr>
				<tr>
					<td>Carbon footprint of imported {{ingredient.found}} (CO2e): </td><td>{{ Math.round(ingredient.unseasonalCo2) }}</td>
				</tr>
			</li>
			<br><br>
			<tr>
				<td :style="{ color: carbonTrafficLight }"> Total carbon footprint of local/seasonal produce (CO2e): {{ Math.round(storeState.totalSeasonalCo2) }} </td>
				<td :style="{ color: carbonTrafficLight }"> Total carbon footprint of imported produce (CO2e): {{ Math.round(storeState.totalUnseasonalCo2) }} </td>
				</tr><tr><td> Total weight of recipe (g): {{(Math.round(storeState.recipe.totalWeight))}}</td>
			</tr>
			</table>
		</ul>
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
				return "red"
			} else if(this.storeState.totalSeasonalCo2 > 1000) {
				return "amber"

			}
			else {return "green"}
			
		}
	
		
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
/* .weight {
	float: right;
} */
table {
	border-collapse: collapse;
	width: 100%;
}

/* th, td {
	border: 1px solid black;
} */

tr:nth-child(even) {
	background-color: #e0fff2;
}
</style>
