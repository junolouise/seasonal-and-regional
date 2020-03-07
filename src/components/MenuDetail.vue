<template>
	<div id="menuDetail">
		<ul>
			<li v-for="(ingredient, index) in storeState.recipe.ingredients" :key="index">
				<p>{{ ingredient.text }} Weight: {{ ingredient.weight }}</p>
			</li>
		</ul>
		{{ storeState.recipe }}
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
#menuDetail {
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
	padding: 0;
}
li {
	border-radius: 25px;
	flex-grow: 1;
	flex-basis: 300px;
	text-align: center;
	padding: 30px;
	border: 1px solid #222;
	margin: 10px;
	max-width: 240px;
	min-height: 240px;
}
</style>
