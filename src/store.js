export const store = {
	state: {
		recipe: [],
		ingredients: [],
		selectedIngredient: [],
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
};
