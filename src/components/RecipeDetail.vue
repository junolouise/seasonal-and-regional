<template>
	<div id="recipeDetail">
		<div class='image' 		:style="{ backgroundImage: `url(${storeState.recipe.image})` }" >{{storeState.image}}</div> 
		<ul>
			<li v-for="(ingredient, index) in storeState.recipe.ingredients" :key="index">
				<p>{{ ingredient.text }} </p>
				<p>Weight: {{ Math.round(ingredient.weight) }} g </p>
			</li>
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
	width: 50%;
	overflow: hidden;
  background-size: cover;
  background-position: center;
	float:right;
	display: inline-block;
}
</style>
