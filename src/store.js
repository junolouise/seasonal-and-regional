export const store = {
	state: {
		recipe: [],
	},
	addRecipe(newRecipe) {
		this.state.recipe = newRecipe;
	},
};
