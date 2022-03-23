import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";


Given('I access the Automationpractice Sign in page', () => {
    cy.visit("http://automationpractice.com")
})


When("I'm on the Sign in page", () => {
    cy.get('.login').click()
    cy.title().should('include', 'Login');
    cy.url().should('include', 'my-account');
})

Then("all elements should be present and visible", () => {

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

})