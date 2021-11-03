/// <reference types="cypress" />

//Pokusaj otvaranja dva glavna (super) domain-a u jednom testu 


describe("Cypress web security", () => {
    it("Validate visiting two different domains", () => {       //Prvi pada
        cy.visit('http://www.webdriveruniversity.com/');
        cy.visit('https://www.google.com');
    });

    it("Validate visiting two different domains via user actions", () => {      //Drugi ce proci
        cy.visit('http://www.webdriveruniversity.com/');        
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    });
})