<template>
	<div>
		<div id="ingredients">
			<!--	<input type="text" v-model="filterIngredients" placeholder="search ingredients" /> -->

			<button
				v-for="(month, index) in filterMonth"
				:key="index"
				@click="filter = food"
				:class="{ active: food == filter }"
			>
				{{ month }}
			</button>
			<ul>
				<div v-for="food in filteredJanuary" :key="food.name" @click="selectedIngredient(food)">
					<router-link v-bind:to="'/recipes/' + food.name">
						<li>
							<h2>{{ food.name }}</h2>
							<!-- <h2>{{ filteredProduce }}</h2> -->
						</li>
					</router-link>
				</div>
			</ul>
		</div>
	</div>
</template>
<script>
import { db } from '.././config/db';
// used to store ingredients DB content for use in calculation in Recipe Detail Screen
import { store } from '../store.js';
export default {
	data() {
		return {
			fkey: 'mainMonth',
			filterMonth: [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December',
			],
			filter: 'All',
			foods: [],
		};
	},
	computed: {
		filteredJanuary: function() {
			return this.foods.filter(food => food.months[0] === 1);
		},
	},
	methods: {
		selectedIngredient: function(food) {
			store.storeSelectedIngredient(food);
			console.log(store.state.selectedIngredient);
		},
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
		store.storeIngredients(this.foods);
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
