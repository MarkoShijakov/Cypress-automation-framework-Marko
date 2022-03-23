import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";


Given('I access the Webdriveruniversity page', () => {
    cy.visit("http://www.webdriveruniversity.com")
})

When("I'm on the Radio Buttons page", () => {
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
    cy.title().should('include', 'Radio Button');
    cy.url().should('include', 'RadioButtons');
})

And("I check the lettuce", () => {
    cy.get("[value='lettuce']").should('not.be.checked')
    cy.get("[value='pumpkin']").should('be.checked')
    cy.get("[value='lettuce']").check()

})

Then('Lettuce should be checked, Cabbage should be disabled and Pumpkin should not be checked', () => {
    cy.get("[value='lettuce']").should('be.checked')
    cy.get("[value='pumpkin']").should('not.be.checked')
    cy.get("[value='cabbage']").should('be.disabled')

})