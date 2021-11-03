describe("Test Contact Us form via WebdriverUni", () => {
    before(function() {
        cy.fixture('example').then(function(data) {
            //this.data = data;
            globalThis.data = data;         //globalThis.data  se kuca kada this.data nece da radi
        })
    })
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');
        cy.webdriverUni_ContactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, "How can I learn Cypress?", 'h1', 'Thank You for your Message!');
    })

    it("Check and validate checkbox", () => {
        cy.visit("/")       //Ide na cypress.json fajl i odande uzima url
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        cy.get('@option-1').check().should('be.checked')
   
    });

    it("Poseti stranicu uz pomoc dinamickog URL-a", () => {
        cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html")
       });
    

    it("Poseti stranicu uz pomoc custom command-e", () => {
        cy.navigateTo_WebdriverUni_Checkbox_Page();
       });
       
    it("Poseti stranicu uz pomoc custom command-e", () => {
        cy.navigateTo_WebdriverUni_Homepage();
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
       });

    
})