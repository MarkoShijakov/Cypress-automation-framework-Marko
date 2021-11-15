/// <reference types="cypress" />

describe("Retries", () => {
    it("Ponavljanje neuspelog testa direktno u kodu", {
        retries: {
        runMode: 2,     //U run modu
        openMode: 2     //U otvoreno modu sa npx cupress open
      }     //Ukoliko se ponavljanje postavi direktno u testu, gledace broj ponavljanja tu umesto u cypress.json fajlu
    }, () => {
        
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        cy.get("[value='lettuce']").should('not.be.checked')
        cy.get("[value='pumpkin']").should('be.checked')

        cy.get("[value='lettuce']").check()
        cy.get("[value='lettuce']").should('be.checked')
        cy.get("[value='pumpkin']").should('be.checked')        //  ==>>> Namerno greska napravljena (treba da bude = 'not.be.checked')

        cy.get("[value='cabbage']").should('be.disabled')
    });
    });
