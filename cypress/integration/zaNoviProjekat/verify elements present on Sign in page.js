/// <reference types="cypress" />

describe("Test Sign in form", () => {
    it("Should verify that elements are present on the page", () => {
        cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account");


        cy.title().should('include', 'Login');
        cy.url().should('include', 'my-account');

        cy.get('[title="Women"]').should('exist');
        cy.get('[title="Women"]').should('be.visible')

        cy.get('[title="Dresses"]').should('exist');
        cy.get('[title="Dresses"]').should('be.visible')

        cy.get('[title="T-shirts"]').should('exist');
        cy.get('[title="T-shirts"]').should('be.visible')

        cy.get('[title="Contact Us"]').should('exist');
        cy.get('[title="Contact Us"]').should('be.visible')

        cy.get('[title="Log in to your customer account"]').should('exist');
        cy.get('[title="Log in to your customer account"]').should('be.visible')

        cy.get('[class="shop-phone"]').should('exist');
        cy.get('[class="shop-phone"]').should('be.visible')

        cy.get('#email_create').should('exist');
        cy.get('#email_create').should('be.visible')

        cy.get('#email').should('exist');
        cy.get('#email').should('be.visible')

        cy.get('#passwd').should('exist');
        cy.get('#passwd').should('be.visible')

        cy.get('[title="Recover your forgotten password"]').should('exist');
        cy.get('[title="Recover your forgotten password"]').should('be.visible')

        cy.get('#SubmitCreate').should('exist');
        cy.get('#SubmitCreate').should('be.visible')

        cy.get('#SubmitLogin').should('exist');
        cy.get('#SubmitLogin').should('be.visible')

        cy.get('[title="View my shopping cart"]').should('exist');
        cy.get('[title="View my shopping cart"]').should('be.visible')

        cy.get('[title="Return to Home"]').should('exist');
        cy.get('[title="Return to Home"]').should('be.visible')

        cy.get('#newsletter_block_left').should('exist');
        cy.get('#newsletter_block_left').should('be.visible')

    });
});