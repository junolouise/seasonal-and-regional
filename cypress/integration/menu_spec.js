describe('Menus', function() {
  it('Menus page has restful url', function() {
    cy.visit('https://seasonal-regional.herokuapp.com/')

    cy.contains('Menus').click()

    cy.url().should('include', '/menus')
  })
})