<template>
	<div>
		<div id="ingredients">
			<p>
				Displaying below are local ingredients, relative to to UK, that are currently in season. Select a
				different month to see future seasonality. Why eat locally sourced foods?
			</p>
			<ul class="text">
				<li>Locally sourced foods will naturally be in season</li>
				<li>
					Foods are full of flavour as they are picked at their peak of ripeness versus being harvested early
					to be shipped
				</li>
				<li>Foods contain more nutrients as the older foods are, the more the nutrients deplete</li>
				<li>Money spent with local farmers stays close to home and is reinvested into your local economy</li>
				<li>
					Foods avoid a hefty carbon footprint of being imported from abroad which can add 20% onto the carbon
					footprint
				</li>
			</ul>

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
			<button @click="clickOnMonth(12)" :id="12" :class="{ all: 'all', switchedOn: toggledMonth == 12 }">
				Show all
			</button>
			<ul>
				<div id="produce" v-for="food in selectedMonth()" :key="food.name" @click="selectedIngredient(food)">
					<router-link v-bind:to="'/recipes/' + food.name">
						<li
							class="box"
							:style="{
								backgroundImage: `url(${food.image})`,
								borderColor: carbonTrafficLight(food.seasonal_co2),
							}"
						>
							<h2>{{ food.name }}</h2>
							<h3 :style="{ color: carbonTrafficLight(food.seasonal_co2) }">
								CO2e: {{ food.seasonal_co2 }}
							</h3>
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
	computed: {},
	methods: {
		carbonTrafficLight: function(co2) {
			if (co2 > 200) {
				return 'red';
			} else if (co2 > 75) {
				return 'orange';
			} else {
				return 'green';
			}
		},
		clickOnMonth: function(number) {
			this.toggledMonth = number;
		},
		selectedMonth: function() {
			if (this.toggledMonth == 12) {
				// this line should return the original this.foods array but somehow it only works if there's some filtering going on.
				return this.foods.filter(food => food.months.length === 12);
			} else {
				return this.foods.filter(food => food.months[this.toggledMonth] === 1);
			}
		},

		selectedIngredient: function(food) {
			store.storeSelectedIngredient(food);
		},
		showAll: function() {
			return this.foods;
		},
		computedStr: function(image) {
			var str = 'background-image: url("' + image + '")';
			return str;
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
		//db.ref('foods').once('value', storedValue => (this.foods = storedValue.val()));
		db.ref('foods')
			.once('value', storedValue => (this.foods = storedValue.val()))
			.then(function(storedValue) {
				store.storeIngredients(storedValue.val());
			});
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
h2,
h3 {
	border-radius: 10px;
	background: white;
}
a {
	visibility: visible;
	text-decoration: none;
}
ul {
	display: flex;
	flex-wrap: wrap;
	list-style-type: none;
	padding: 0;
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

ul.text {
	list-style-type: circle;
}

.box {
	border-radius: 25px;
	flex-grow: 1;
	flex-basis: 300px;
	text-align: center;
	padding: 30px;
	border: 5px solid #222;
	margin: 10px;
	min-width: 100px;
	max-width: 200px;
	min-height: 80px;
	max-height: 100px;
	background-repeat: no-repeat;
	background-position: center;
}
</style>
