<template>
<div>
	<div id="ingredients">
		<!--	<input type="text" v-model="filterIngredients" placeholder="search ingredients" /> -->
		<button	v-for='(month, index) in filterMonth' :key="index" @click='clickOnMonth(index)' :id="index" :class="{switchedOn: toggledMonth == index}">
		{{ month }} </button>
		<ul>
			<router-link v-for="(food) in selectedMonth" :key="food.name" v-bind:to="'/recipes/' + food.name">
				<li>
					
					<h2> {{ food.name }} </h2>
					<!-- <h2>{{ filteredProduce }}</h2> -->
				</li>
			</router-link>
		</ul>
	</div>
	</div>
</template>
<script>
import { db } from '.././config/db';
export default {
	data() {
		return {
			fkey: 'mainMonth',
			filterMonth: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			filter: 'All',
			foods: [],
			toggledMonth: 0,
		};
	},
	methods: {
        clickOnMonth: function(number) {
			this.toggledMonth = number
		}
	},
	computed: {
		selectedMonth: function() {
			return this.foods.filter(food =>
				(food.months[this.toggledMonth] === 1))
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