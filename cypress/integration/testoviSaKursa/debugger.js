//Debug primer na PageObject fajlu
//Da bi radio debug, mora se otvoriti 'inspect element' kada se pokrene test

//Original fajl bez debug komande
class AutoStore_HairCare_Po {
    addHairCareProductsToBasket() {
        globalThis.data.productName.forEach(function(element) {
            cy.addProductToBasket(element)
        })
        cy.get('.dropdown-toggle > .fa').click();
    }
}
export default AutoStore_HairCare_Po;



//PRIMER SA DEBUG:

class AutoStore_HairCare_Po {
    addHairCareProductsToBasket() {
        globalThis.data.productName.forEach(function(element) {
            cy.addProductToBasket(element).then(() => {         //Primer 1 za debug
                debugger
            })
        })
        cy.get('.dropdown-toggle > .fa').click().debug();       //Primer 2 za debug
    }
}
export default AutoStore_HairCare_Po;