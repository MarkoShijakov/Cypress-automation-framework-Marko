describe("Test Contact Us form via WebdriverUni", () => {
   
it("Poseti stranicu uz pomoc dinamickog URL-a", () => {
    cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html")
   });
   
it("Poseti stranicu uz pomoc custom command-e", () => {
    cy.navigateTo_WebdriverUni_Homepage();
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
   });

it("Poseti stranicu uz pomoc custom command-e", () => {
    cy.navigateTo_WebdriverUni_Checkbox_Page();
   });

})