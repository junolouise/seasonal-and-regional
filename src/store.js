export const store = {
	state: {
		recipe: [],
		ingredients: [],
		selectedIngredient: [],
		recipeIngredientsCarbon: [],
		totalSeasonalCo2: 0,
		totalUnseasonalCo2: 0,
	},
	addRecipe(newRecipe) {
		this.state.recipe = newRecipe;
	},
	storeIngredients(ingredients) {
		this.state.ingredients = ingredients;
	},
	storeSelectedIngredient(selected) {
		this.state.selectedIngredient = selected;
	},

	calculateCarbonEmissions() {
		// loops around each ingredient within a recipe
		console.log(this.state.ingredients);
		for (var x = 0; x < this.state.recipe.ingredients.length; x++) {
			var recipeIngredient = this.state.recipe.ingredients[x].text;
			var found = false;
			// if there was a selected ingredient from the ingredients screen
			if (this.state.selectedIngredient.length != 0) {
				found = checkContains(recipeIngredient, this.state.selectedIngredient.name);
			}
			if (found == true) {
				var seasonalCo2 = this.state.selectedIngredient.seasonal_co2;
				var unseasonalCo2 = this.state.selectedIngredient.unseasonal_co2;
				var foundString = this.state.selectedIngredient.name;
			} else {
				// loops around array of all ingredients from Firebase (stored in state)
				for (var i = 0; i < this.state.ingredients.length; i++) {
					found = checkContains(recipeIngredient, this.state.ingredients[i].name);

					if (found == true) {
						seasonalCo2 = this.state.ingredients[i].seasonal_co2;
						unseasonalCo2 = this.state.ingredients[i].unseasonal_co2;
						foundString = this.state.ingredients[i].name;
						console.log(foundString);
						break;
					}
				}
			}
			if (found == false) {
				seasonalCo2 = 0;
				unseasonalCo2 = 0;
				foundString = 'not found';
			}
			this.state.recipeIngredientsCarbon.push({
				text: recipeIngredient,
				weight: this.state.recipe.ingredients[x].weight,
				seasonalCo2: seasonalCo2,
				unseasonalCo2: unseasonalCo2,
				found: foundString,
			});
		}

		function checkContains(recipeIngredient, substring) {
			var rI = recipeIngredient.toLowerCase();
			var sStr = substring.toLowerCase();
			if (rI.includes(sStr)) {
				return true;
			} else {
				// not found
				return false;
			}
		}
	},
};
