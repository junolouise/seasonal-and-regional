<template>
	<div>
		<div id="ingredients">
			<!--	<input type="text" v-model="filterIngredients" placeholder="search ingredients" /> -->
			<button
				v-for="(month, index) in filterMonth"
				:key="index"
				@click="clickOnMonth(index)"
				:id="index"
				:class="{ button: 'button', switchedOn: toggledMonth == index }"
			>
				{{ month }}
			</button>
			<button 
				@click="clickOnMonth(12)"
				:id="12"
				:class="{ all: 'all', switchedOn: toggledMonth == 12 }"
			>
				Show all
				</button>
			<ul>
				<div v-for="food in selectedMonth()" :key="food.name" @click="selectedIngredient(food)">
					<router-link v-bind:to="'/recipes/' + food.name">
						<li>
							<h2>{{ food.name }}</h2>
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
			if (this.toggledMonth == 12) {
				return this.foods
			} else {
				return this.foods.filter(food => food.months[this.toggledMonth] === 1)
			}
		},
		selectedIngredient: function(food) {
			store.storeSelectedIngredient(food);
		},
		showAll: function() {
			return this.foods
		}
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
a {
	visibility: visible;
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
.switchedOn {
	color: white;
	z-index: 2;
	background-color: green;
	border-bottom-color: null;
}
.button {
	border-top-left-radius: 6px;
    border-top-right-radius: 6px;
	z-index: 0;
	border-bottom: 3px solid green;
}
.all {
	position: absolute;
	right: 70px;
}
</style>
