/// <reference types="cypress" />
describe('focus', () => {
  it('should not scroll focused element into view when using preventScroll option', () => {
    cy.visit('https://example.cypress.io')

    cy.scrollTo("bottom");

    cy.get('.navbar-brand')
      .then((el) => {
        el.get(0).focus({ preventScroll: true });
      })
      .should("be.focused")
      .should("not.be.visible");
  })
})
