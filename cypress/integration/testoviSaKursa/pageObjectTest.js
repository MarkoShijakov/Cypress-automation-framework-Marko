import Homepage_PO from '../../support/pageObject/saKursa/Homepage_PO'       //Putanja
import Contact_Us_PO from '../../support/pageObject/saKursa/Contact_Us_PO'
        //Kod trazenja putanje, dve tacke '..' vracaju na folder iznad (iznad onoga u kom je test)
/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    const contact_Us_PO = new Contact_Us_PO();  //importuje se PageObject fajl
    const homepage_PO = new Homepage_PO();  //importuje se PageObject fajl
 
    before(function () {
      cy.viewport(550, 750)
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(function () { 
    homepage_PO.visitHompage();     //Ovim kodom se odlazi na HomePage preko PageObject-a
    homepage_PO.clickOn_ContactUs_Button();     //Klikne da ContactUs button preko PageObject-a
    cy.clearLocalStorage();
    cy.clearCookies();
    
  });

  it("Should be able to submit a successful submission via contact us form", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");    
    contact_Us_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, "How can I learn Cypress?", "h1", "Thank You for your Message!");
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {

    contact_Us_PO.contactForm_Submission(data.first_name, data.last_name," ", "How can I learn Cypress?", "body", "Error: Invalid email address")
    
  });
});
