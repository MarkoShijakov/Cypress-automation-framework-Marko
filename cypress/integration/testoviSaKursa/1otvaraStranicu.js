/// <reference types="cypress" />

describe('Our test', () => {

    describe('Our suite section', () => {
      
        it('some test', () => {
          
            cy.visit('https://npq-registration-sandbox.london.cloudapps.digital/registration/provider-check') 
        })
    })
})