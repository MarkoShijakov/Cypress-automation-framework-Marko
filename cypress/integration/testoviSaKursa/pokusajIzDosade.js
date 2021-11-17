/// <reference types="cypress" />

describe("Malo igranja", () => {
    it("Dropdown", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })


        //Obicno selektovanje sa proverom vrednosti
        cy.get('#dropdowm-menu-1').select('Python').should('have.value', 'python')
        cy.get('#dropdowm-menu-2').select(2).should('have.value', 'testng')

        //Selektovanje sa alias proverom
        cy.get('#dropdowm-menu-2').select(1).as('tekst')
        cy.get("@tekst").should('have.value', 'maven')

        //Selektovanje kroz for petlju sa proverom preko array liste
        var i = 0
        var choise = ['eclipse', 'maven', 'testng', 'junit']
        for (i = 0; i < 4; i++) {
            cy.get('#dropdowm-menu-2').select(i).should('have.value', choise[i])
            cy.log(i)
        }



    });

    it("Checkbox", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })


        //Selektovanje preko check, uncheck i click komande

        cy.get("input[type='checkbox']").eq(0).check()
        // cy.wait(500)
        cy.get("input[type='checkbox']").eq(1).click()
        // cy.wait(500)
        cy.get("input[type='checkbox']").eq(1).uncheck()

        //Selektovanje putem 'first', 'last'

        cy.wait(100)
        cy.get("input[type='checkbox']").first().click()
        cy.get("input[type='checkbox']").first().check()
        cy.get("input[type='checkbox']").first().uncheck()
        cy.get("input[type='checkbox']").last().click()
        cy.get("input[type='checkbox']").last().check()
        cy.get("input[type='checkbox']").last().uncheck()

        //Selektovanje kroz for petlju uz check i uncheck
        var i = 0
        for (i = 0; i < 4; i++) {
            cy.get("input[type='checkbox']").eq(i).check()
            cy.get("input[type='checkbox']").eq(i).uncheck()
            cy.log(i)
        }

        //Selektovanje preko 'value' od checkbox-a
        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked')


        //Iterate kroz checkbox
        cy.get("input[type='checkbox']").each(($el, index, $list) => {
            cy.log("Checkbox broj: " + (index + 1))     //Povecava index za 1

        });

    });
})