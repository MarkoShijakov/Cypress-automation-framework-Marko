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

    it("Uzimanje teksta i provera i klik na vise dugmica 'odjedared'", () => {
        cy.visit("http://www.webdriveruniversity.com/Click-Buttons/index.html")

        //Lociranje dugmeta i provera teksta u dugmetu
        cy.get('#button1').should('have.text', 'CLICK ME!')

        //Lociranje dugmeta i provera teksta u dugmetu
        cy.get('#button1').should(($expectedText) => {
            const text = $expectedText.text()
            expect(text).to.include('CLICK');
        })

        //Lociranje dugmeta i klik na njega ako sadrzi odredjeni tekst
        cy.get('#button1').contains('CLICK ME').click()
        cy.get('#myModalClick > .modal-dialog > .modal-content > .modal-footer > .btn').click()

        //Lociranje dugmeta, dodaje mu se 'allias' i uz pomoc njega se klikne na dugme

        cy.get('#button2').as('dugme')
        cy.get('@dugme').click({ force: true })

        cy.get('#myModalJSClick > .modal-dialog > .modal-content > .modal-footer > .btn').as('dugme2')
        cy.get('@dugme2').click({ force: true })

        //Klik na sve dugmice koji pocinju sa istim id-em (moze biti samo deo ID-a)
        cy.get('[id^=butto]').click({ multiple: true, force: true })
        cy.get('#myModalMoveClick > .modal-dialog > .modal-content > .modal-footer > .btn').type('{enter}')
        cy.wait(500)
        cy.get('#myModalJSClick > .modal-dialog > .modal-content > .modal-footer > .btn').type('{enter}', { force: true })
        cy.wait(500)
        cy.get('#myModalJSClick > .modal-dialog > .modal-content > .modal-footer > .btn').type('{enter}', { force: true })


    });

    //ASSERT   Uzimanje teksta iz elementa i provera
    it("Uzimanje teksta i provera", () => {
        cy.visit("http://www.webdriveruniversity.com/Click-Buttons/index.html")

        cy.get('[class="modal-title"]')
            .invoke('text')  // for input or textarea, .invoke('val')
            .then(text => {
                // const someText = text;       //Moze i ovako da se doda 'const'
                cy.log(text);
                expect(text).to.have.lengthOf(115)


                expect(text).to.have.length.of.at.most(234)


                // expect(text).to.be.lessThan(1020)   //Koristi se za brojeve ili datume!!!

                // expect(text).to.be.greaterThan(5)        //Koristi se za brojeve ili datume!!!

                expect(text).to.exist

                expect(text).to.include('Click can become')
                expect(text).to.include('can', 'become')

                expect(text).to.be.a('string')

                expect(text).to.not.equal('NEKI TEKST')

                expect(text).to.have.ownProperty('length')

                expect(text).to.have.string('can ')

            });

    });

    it("To-Do lista", () => {
        cy.visit("http://www.webdriveruniversity.com/To-Do-List/index.html")

        cy.get('[placeholder="Add new todo"]').type('Zadatak').type('{enter}')

        cy.get('[placeholder="Add new todo"]').type('Proba').type('{enter}')

        cy.get('#container > ul').contains("Proba").click();

        cy.get('[class="fa fa-trash"]').click({ multiple: true })       //Brise sve

        let i = 0
        while (i < 4) {
            let random = (Math.random() + 1).toString(36).substring(7) + (Math.random() + 1).toString(36).substring(7)
            cy.get('[placeholder="Add new todo"]').type(random).type('{enter}')
            i++
        }

        // cy.get('#container > ul >').should('have.length', 4)        //Proverava duzinu


        cy.get('#container > ul >').click({ multiple: true })       //Radi isto sto i funkcija dole

        //Isto kao i gornja. Prolazi kroz svaki element u listi i klikne ga
        cy.get('#container > ul >').each(($el, index, $list) => {

            cy.wrap($el).click()
        });

        //Prolazi kroz svaki i ispisuje njegov index i text
        cy.get("#container > ul >").each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())
        });

        //Upisuje jedan i prolazi kroz svaki i brise ga kada ga pronadje
        cy.get('[placeholder="Add new todo"]').type('Proba').type('{enter}')



        //Brise odredjeni ako postoji
        cy.get('#container > ul >').each(($el, index, $list) => {

            cy.wait(100)
            //  Isti kod kad dole, samo bez const

            // if ($el.text() === ' Proba') {
            //     $el.trigger("click")
            //     cy.log("prosao123")
            // }
            // else {
            //     cy.log("Greska")
            // }


            const element = $el.text()
            const trazeni = " Proba"
            if (element === trazeni) {
                $el.trigger("click")
                cy.log("Ovo je prolaz broj " + (index + 1) + " i u njemu je pronadjen trazeni element")
            }
            else {
                cy.log("Ovo je prolaz broj " + (index + 1) + " i u njemu nema trazenog elementa")
            }
        });
    });
});

