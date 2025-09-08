// cypress/e2e/firstTest.cy.js
describe('My First Cypress Test', () => {
  it('should visit a page and check title', () => {
    cy.visit('https://example.cypress.io')
    cy.title().should('include', 'Cypress')
  })
})




//locators
cy.get('#username')         // by ID
cy.get('.btn-primary')      // by class
cy.get('input[name="email"]') // by attribute
cy.contains('Submit')       // by visible text