import AutoStore_Homepage_PO from '../../support/pageObject/saKursa/AutoStore_Homepage_PO'
import AutoStore_HairCare_PO from '../../support/pageObject/saKursa/AutoStore_HairCare_PO'

/// <reference types="cypress" />

describe("Add multiple items to basket", () => {
  const autoStore_Homepage_PO = new AutoStore_Homepage_PO();
  const autoStore_HairCare_PO = new AutoStore_HairCare_PO();

  before(function () {
    cy.fixture("products").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    autoStore_Homepage_PO.accessHomepage();
    autoStore_Homepage_PO.clickOn_HairCare_Link();
  });

  it("Add specific items to basket", () => {
    globalThis.data.productName.forEach(function(element) {
        cy.addProductToBasket(element)
    })
    cy.get('.dropdown-toggle > .fa').click();
});


  it("Add specific items to basket by Page Object", () => {
    autoStore_HairCare_PO.addHairCareProductsToBasket();
  });
});
