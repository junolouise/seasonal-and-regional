describe('Recipes', function() {
	it('Recipes page has restful url', function() {
		cy.visit('https://seasonal-regional.herokuapp.com/');

		cy.contains('Recipes').click();

		cy.url().should('include', '/recipes');
	});

	it('Routes to correct url from selected ingredient', function() {
		cy.visit('https://seasonal-regional.herokuapp.com/');
        cy.get('button').contains('January').click();
		cy.get('h2').contains('apple').click();
		cy.url().should('include', '/apple');
	});

	it('Displays recipes for the selected ingredient', function() {
		cy.visit('https://seasonal-regional.herokuapp.com/');
        cy.contains('January').click();
		cy.get('h2').contains('apple').click();

		cy.contains('Apple');
	});

	it('Displays  the details of a recipe with weights for the selected recipe', function() {
		cy.visit('https://seasonal-regional.herokuapp.com/recipes/beef');
		cy.contains('Beef').click({ force: true });

		cy.contains('pepper');
	});
});
