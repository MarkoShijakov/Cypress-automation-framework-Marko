/// <reference types="Cypress" />
describe("Selector examples", () => {
    it("Examples of Selectors via WebdriverUni Contact Us Page", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");

        //By tag name
        cy.get("input")

        //By attribute name and value
        cy.get("input[name='first_name']")

        //By id
        cy.get("#contact_me")

        //By class
        cy.get(".feedback-input")

        //By multiple classes
        cy.get("[class='navbar navbar-inverse navbar-fixed-top']")

        //By two different attributes
        cy.get("[name='email'][placeholder='Email Address']")

        //By xpath
        cy.xpath("//input[@name='first_name']")
    })
})

describe("Inspect Automation Test Store items using chain of commands", () => {
    it("Click on the first item using item header", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
    });
    it("Click on the first item using item text", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
    });
    it("Click on the first item using index", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    });
})