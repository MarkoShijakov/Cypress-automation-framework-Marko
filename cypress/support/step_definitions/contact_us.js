import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";


Given('I access contact us page', () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
})

When("I enter a first name {word}", (firstName) => {
    cy.get('[name="first_name"]').type(firstName);
})

And("I enter a last name {word}", (lastName) => {
    cy.get('[name="last_name"]').type(lastName);
})

And("I enter a email {word}", (email) => {
    cy.get('[name="email"]').type(email);
})

And("I add comment {word}", (comment) => {
    cy.get('[name="message"]').type(comment);
})

And('I click on the submit button', () => {
    cy.get('input[class="contact_button"][type="submit"]').click();

})

Then('I should be presented with the following message {word}', (message) => {
    cy.get('body').contains(message)

})
