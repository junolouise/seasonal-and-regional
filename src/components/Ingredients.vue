<template>
	<div>
		<div id="ingredients">
		<p>
			Displaying below are local ingredients, relative to to UK, that are currently in season. Select a different month to see future seasonality. Why eat locally sourced foods?</p>
			<ul class="text">
			<li>Locally sourced foods will naturally be in season </li>
			<li>Foods are full of flavour as they are picked at their peak of ripeness versus being harvested early to be shipped</li>
			<li>Foods contain more nutrients as the older foods are, the more the nutrients deplete</li>
			<li>Money spent with local farmers stays close to home and is reinvested into your local economy</li>
			<li>Foods avoid a hefty carbon footprint of being imported from abroad which can add 20% onto the carbon footprint</li>
			</ul>

			<!--	<input type="text" v-model="filterIngredients" placeholder="search ingredients" /> -->
			<button
				v-for="(month, index) in filterMonth"
				:key="index"
				@click="clickOnMonth(index)"
				:id="index"
				:class="{ switchedOn: toggledMonth == index }"
			>
				{{ month }}
			</button>
			<ul>
				<div v-for="food in selectedMonth()" :key="food.name" @click="selectedIngredient(food)">
					<router-link v-bind:to="'/recipes/' + food.name">
						<li class='box'>
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
			toggledMonth: 0,
		};
	},
	methods: {
		clickOnMonth: function(number) {
			this.toggledMonth = number;
		},
		selectedMonth: function() {
			return this.foods.filter(food => food.months[this.toggledMonth] === 1);
		},
		selectedIngredient: function(food) {
			store.storeSelectedIngredient(food);
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
		var date = new Date();
		this.toggledMonth = date.getMonth();
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
.box {
	flex-grow: 1;
	flex-basis: 300px;
	text-align: center;
	padding: 30px;
	border: 1px solid #222;
	margin: 10px;
	max-width: 300px;
}
.switchedOn {
	background-color: green;
}

ul.text {
	list-style-type: circle;
}
</style>
