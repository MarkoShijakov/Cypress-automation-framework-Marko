class AutoStore_HairCare_Po {
    addHairCareProductsToBasket() {
        globalThis.data.productName.forEach(function(element) {
            cy.addProductToBasket(element)
        })
        cy.get('.dropdown-toggle > .fa').click().debug();       //Debug ce raditi ako se otvori 'inspect element' kada se test pokrene
    }
}
export default AutoStore_HairCare_Po;