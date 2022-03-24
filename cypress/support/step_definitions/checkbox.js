import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";


Given('I access the Webdriveruniversity page', () => {
    cy.visit("http://www.webdriveruniversity.com")
})

When("I'm on the Checkbox page", () => {
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
    cy.title().should('include', 'Checkbox');
    cy.url().should('include', 'Checkbox');
})

And("I check the first checkbox", () => {
    cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
    cy.get('@option-1').check().should('be.checked')

})

And("I uncheck all the checkboxes", () => {
    cy.get("input[type='checkbox']").uncheck(["option-1", "option-2", "option-3", "option-4"]).should('not.be.checked')

})

Then('I check all the checkboxes and confirm that they are all checked', () => {
    cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked')

})