<template>
	<div id="ingredients">
		<!--	<input type="text" v-model="filterIngredients" placeholder="search ingredients" /> -->
		<ul>
			<router-link v-for="(food, key, index) in foods" :key="index" v-bind:to="'/recipes/' + food.name">
				<li>
					<h2>{{ food.name }}</h2>
				</li>
			</router-link>
		</ul>
	</div>
</template>
<script>
import { db } from '.././config/db';
export default {
	data() {
		return {
			filterIngredients: '',
			foods: [],
			ingredients: [
				{
					name: 'Apple',
					season: 'Jan, Feb,... Sep, Oct, Nov, Dec',
					show: false,
				},
				{ name: 'Asparagus', season: 'May, Jun, Jul, Aug, Sep', show: false },
				{
					name: 'Beef',
					season: 'Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec',
					show: false,
				},
				{
					name: 'Beetroot',
					season: 'Jan, ... Jul, Aug, Sep, Oct, Nov, Dec',
					show: false,
				},
				{
					name: 'Onion',
					season: 'Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec',
					show: false,
				},
				{
					name: 'Mussels',
					season: 'Jan, Feb, Mar, Oct, Nov, Dec',
					show: false,
				},
				{ name: 'Watercress', season: 'May, Jun, Jul, Aug, Sep', show: false },
			],
		};
	},
	// computed: {
	// 	filteredIngredients: function() {
	// 		return this.foods.filter(ingredient => {
	// 			return foods.name.match(this.filterIngredients);
	// 		});
	// 	},
	// },
	created() {
		db.ref('foods').once('value', storedValue => (this.foods = storedValue.val()));
	},
};
</script>
<style scoped>
#ingredients {
	width: 100%;
	max-width: 1200px;
	margin: 40px auto;
	padding: 0 20px;
	box-sizing: border-box;
}

ul {
	display: flex;
	flex-wrap: wrap;
	list-style-type: none;
	padding: 0;
}
li {
	flex-grow: 1;
	flex-basis: 300px;
	text-align: center;
	padding: 30px;
	border: 1px solid #222;
	margin: 10px;
	max-width: 300px;
}
</style>
