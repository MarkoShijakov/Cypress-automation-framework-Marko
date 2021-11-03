//Primer 1 TIMEOUT sa fajla PageObject   

class HomePage_PO {
    visitHompage() {
        cy.visit(Cypress.env("webdriveruni_homepage"), {timeout: 60000});           //TIMEOUT
    }

    clickOn_ContactUs_Button() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true }, {timeout: 8000})        //TIMEOUT

        cy.get($selector).contains(textToLocate, {timeout: 60000})          //TIMEOUT uz Assertion (ceka 60 sekundi pre nego sto uradi assertion)
    }
}
export default HomePage_PO;

// Primer 2    PAUSE    (zaustavice sve i cekari korisnikovu intervenciju)

beforeEach(function () {
    homepage_PO.visitHompage();
    homepage_PO.clickOn_ContactUs_Button();
    cy.pause();         //PAUSE (staje i ceka dalja uputstva)

    cy.get($selector).pause().contains(textToLocate, {timeout: 60000})  //PAUSE  (daje opciju da se izvrsi sledeci korak)
  });

// Primer 3  TIMEOUT konfiguracija   i   WAIT

describe("Test Contact Us form via WebdriverUni", () => {
    Cypress.config('defaultCommandTimeout', 20000)      //TIMEOUT
    const homepage_PO = new Homepage_PO();
    const contact_Us_PO = new Contact_Us_PO();
  
    beforeEach(function () {
      homepage_PO.visitHompage();
      cy.wait(3000);                //CEKANjE (3 sekunde)
      homepage_PO.clickOn_ContactUs_Button();
    })
})