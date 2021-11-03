class HomePage_PO {         //ime u klasi mora biti isto kao u delu EXPORT DEFAULT na kraju
    visitHompage() {
        cy.visit(Cypress.env("webdriveruni_homepage"));     //Moze i obican URL, bez varijabilne
    }

    clickOn_ContactUs_Button() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
    }
}
export default HomePage_PO;