<template>
	<div>
		<div id="ingredients">
			<p class="text">
				Displaying below are local UK ingredients, that are currently in season. Select a different month to see
				future seasonality.
			</p>
			<ul class="text">
				<li class="topText">Locally sourced foods will naturally be in season</li>
				<li class="topText">
					Foods are full of flavour as they are picked at their peak of ripeness versus being harvested early
					to be shipped 
				</li>
				<li class="topText">
					Foods contain more nutrients as the older foods are, the more the nutrients deplete
				</li>
				<li class="topText">
					Money spent with local farmers stays close to home and is reinvested into your local economy
				</li>
				<li class="topText">
					Foods avoid a hefty carbon footprint of being imported from abroad which can add 20% onto the carbon
					footprint
				</li>
			</ul>
			<!--	<input type="text" v-model="filterIngredients" placeholder="search ingredients" /> -->
			<div class="line">
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
			</div>
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
	created() {
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
	font-family: 'big caslon';
	width: 90%;
	max-width: 1800px;
	margin: 40px auto;
	padding: 0 20px;
	box-sizing: border-box;
}
h2 {
	border-radius: 10px;
	background: white;
}
h3 {
	border-radius: 10px;
	background: white;
	width: 50%;
	margin: auto;
}

a {
	visibility: visible;
	text-decoration: none;
}
a:visited {
	color: #00f;
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

	font-size: 20px;
}
.all {
	position: relative;
	float: right;

	font-size: 20px;
}
.line {
	width: 100%;
	border-bottom: 3px solid green;
}
.text {
	width: 60%;
	font-size: 20px;
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
	width: 240px;
	height: 240px;
	background-size: cover;
	background-repeat: no-repeat;
	background-size: cover;
  color:inherit;
  text-decoration: none;
}
.produce {
	width: 90%;
}
</style>
