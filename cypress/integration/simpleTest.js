Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })


describe('My First Tests', function() {
    it('Visits app', function() {
    cy.visit('http://localhost:3000/About')
    })   
})

it('My First Get', function() {
    cy.visit('http://localhost:3000/')
    cy.get('.navbar-brand')
    cy.visit('http://localhost:3000/about')
    cy.get('.navbar-brand')
  })

