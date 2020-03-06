describe('Menus', function() {
  it('Menus page has restful url', function() {
    cy.visit('https://seasonal-regional.herokuapp.com/')

    cy.contains('Menus').click()

    cy.url().should('include', '/menus')
  })

  it('Routes to correct url from selected ingredient', function() {
    cy.visit('https://seasonal-regional.herokuapp.com/')

    cy.contains('beef').click()

    cy.url().should('include', 'beef')
  })

  it('Displays recipes for the selected ingredient', function() {
    cy.visit('https://seasonal-regional.herokuapp.com/')

    cy.contains('beef').click()

    cy.contains('Beef')
  })


})