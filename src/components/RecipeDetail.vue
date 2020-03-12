<template>
	<div id="recipeDetail">
		<div id="title">
		<h3>Recipe: {{ storeState.recipe.label }}<br>Source: {{ storeState.recipe.source }}</h3>
		</div>
		<div class="image" :style="{ backgroundImage: `url(${storeState.recipe.image})` }">{{ storeState.image }}</div>
		
		<ul>
			<table>
			<li v-for="(ingredient, index) in storeState.recipeIngredientsCarbon" :key="index">
			<tr>	
				<td><p>{{ ingredient.text }}</p></td>
			</tr>
				<div id = 'ingredient_details'>
					<tr>
						<td class="weight"> - Weight: </td> <td>{{ Math.round(ingredient.weight) }} </td>
					</tr>
					<tr>
						<td> - Carbon footprint of local/seasonal {{ingredient.found}} (CO2e): </td><td>{{ Math.round(ingredient.seasonalCo2) }}</td>
					</tr>
					<tr>
						<td> - Carbon footprint of imported {{ingredient.found}} (CO2e): </td><td>{{ Math.round(ingredient.unseasonalCo2) }}</td>
					</tr>
				</div>
			</li>
			<br><br>
			</table>
			<table>
				<tr>
					<td :style="{ color: carbonTrafficLight }"> Total carbon footprint of local/seasonal produce (CO2e): {{ Math.round(storeState.totalSeasonalCo2) }} </td>
				</tr>
				<tr>
					<td :style="{ color: carbonTrafficLight }"> Total carbon footprint of imported produce (CO2e): {{ Math.round(storeState.totalUnseasonalCo2) }} </td>
				</tr>
				<tr>
					<td> Total weight of recipe (g): {{(Math.round(storeState.recipe.totalWeight))}}</td>
				</tr>
			</table>
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
	font-family: 'big caslon';
	font-size: 18px;
	
}
#title {
	text-align: center;
	font-family: 'big caslon';
	font-size: 25px;
	text-decoration: underline;

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
	border-radius: 25px;
	width: 40%;
	margin: 20px;
}

li {
	font-family: 'big caslon';
	font-size: 20px;
	font-weight: normal;
	line-height: 1em;
	color: black;
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

table {
	border-collapse: collapse;
	width: 100%;
}

tr:nth-child(even) {
	background-color: #d0edc5;
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
font-family: 'big caslon';
}

  
</style>
