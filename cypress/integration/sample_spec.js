/// <reference types="Cypress" />

context('google site navigation ', () => {
    it('go to the google.com', () => {
        cy.visit('https://google.com');
    })
});