/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    before(function() {
        cy.fixture('example').then(function(data) {
            //this.data = data;
            globalThis.data = data;         //Ovaj deo nekada nije potreban
        })
    })
    it("Should be able to submit a successful submission via contact us form", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');
        cy.get('[name="first_name"]').type(data.first_name);
        cy.get('[name="last_name"]').type(data.last_name);
        cy.get('[name="email"]').type(data.email)
        cy.get('textarea.feedback-input').type("How can I learn Cypress?")
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.get('[name="first_name"]').type(data.first_name);
        cy.get('[name="last_name"]').type(data.last_name);
        cy.get('textarea.feedback-input').type("How can I learn Cypress?")
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');
    });
})

                        //Primer 2
describe("Test Contact Us form via Automation Test Store", () => {
    before(function() {
        cy.fixture("userDetails").as("user")         //Dodavanje alias-a i uzimanje eksternog fajla
    })
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href$='contact']").click().then(function(linkText){
            cy.log("Clicked on link using text: " + linkText.text())
        })
     
        cy.get("@user").then((user) => {        //UserDetails je user
            cy.get('#ContactUsFrm_first_name').type(user.first_name);       //Poziva first name iz 'userDetails'
            cy.get('#ContactUsFrm_email').type(user.email);
        })
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?")
        cy.get("button[title='Submit']").click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        cy.log("Test has completed!");
    });
})