/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        // Cypress.currentTest.retries(1)
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#contact-us').click({force: true}) 
    });

    it("Should be able to submit a successful submission via contact us form", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#contact-us > .thumbnail').click() 
    });

    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get('#contact-us').click({force: true})
        cy.get('[name="first_name"]').type("Joe")
    });

    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        //cy.get('#contact-us').click({force: true})
        cy.get('[name="first_name"]').type("Joe");
        cy.get('[name="last_name"]').type("blogs");
        cy.get('[name="email"]').type("joe_blogs123@gmail.com")
        cy.get('textarea.feedback-input').type("How can I learn Cypress?")
        cy.get('[type="submit"]').click();
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').type("Tom");
        cy.get('[name="last_name"]').type("blogs");
        cy.get('textarea.feedback-input').type("How can I learn Cypress?")
        cy.get('[type="submit"]').click();
    });

    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('.info_links_footer > :nth-child(5) > a').click();
        cy.get('#ContactUsFrm_first_name').type("Joe");
        cy.get('#ContactUsFrm_email').type("joe_blogs123@gmail.com");
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?")
        cy.get('.col-md-6 > .btn').click();
    });
})