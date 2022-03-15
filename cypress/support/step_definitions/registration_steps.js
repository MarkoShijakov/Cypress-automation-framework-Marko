import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";


Given('I access the Automationpractice page', () => {
    cy.visit("http://automationpractice.com")
})

When("I go to Sign in page, enter email and click Create an account {word}", (email) => {
    cy.get('.login').click()
    cy.get('#email_create').type(email);
    cy.get('#SubmitCreate').click()
})

And("I fill in all the required fields", () => {
    cy.get('#id_gender1').check()
    cy.get("#id_gender1").should('be.checked')

    cy.get('#customer_firstname').type('Marko')
    cy.get('#customer_lastname').type('Test')
    cy.get('#passwd').type('123456')

    cy.get('#firstname').type('Marko')
    cy.get('#lastname').type('Test')
    cy.get('#address1').type('Adresa')
    cy.get('#city').type('Grad')

    cy.get('#id_state').select('California').should('have.value', '5')
    cy.get('#postcode').type('05824')

    cy.get('#phone_mobile').type('123456789')
    cy.get('#alias').clear()
    cy.get('#alias').should('be.empty')
    cy.get('#alias').type('Alias Address')
})

And('I click on the register button', () => {
    cy.get('#submitAccount').click()
})

Then('User should be registered and can log in and log out of that account {word}', (email) => {
    cy.url().should('include', 'controller=my-account')
    cy.get('.logout').click()
    cy.get('#email').type(email)
    cy.get('#passwd').type('123456')
    cy.get('#SubmitLogin').click()
    cy.url().should('include', 'controller=my-account')
    cy.get('.logout').click()

})