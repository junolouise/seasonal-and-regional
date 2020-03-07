export const store = {
	state: {
		recipe: [],
	},
	addRecipe(newRecipe) {
		this.state.recipe = newRecipe;
		console.log('recipe string', this.state.recipe);
	},
};
