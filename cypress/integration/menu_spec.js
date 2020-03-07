describe('Recipes', function() {
	it('Recipes page has restful url', function() {
		cy.visit('https://seasonal-regional.herokuapp.com/');

		cy.contains('Recipes').click();

		cy.url().should('include', '/recipes');
	});

	it('Routes to correct url from selected ingredient', function() {
		cy.visit('https://seasonal-regional.herokuapp.com/');

		cy.contains('beef').click();

		cy.url().should('include', 'beef');
	});

	it('Displays recipes for the selected ingredient', function() {
		cy.visit('https://seasonal-regional.herokuapp.com/');

		cy.contains('beef').click();

		cy.contains('Beef');
	});

	it('Displays  the details of a recipe with weights for the selected recipe', function() {
		cy.visit('https://seasonal-regional.herokuapp.com/recipes/beef');
		cy.contains('Beef').click({ force: true });

		cy.contains('pepper');
	});
});
