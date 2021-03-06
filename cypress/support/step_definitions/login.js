import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

let stub;       //ZA ALERT

Before(() => {      //Cucumber hook
    cy.log("Executing before step");
    stub = cy.stub();       //Inicijalizacija 'stub-a'
})


Given('I access Login Portal page', () => {
    cy.visit("http://www.webdriveruniversity.com/Login-Portal/index.html");
})

When("I enter a username {word}", (userName) =>{
    cy.get("#text").type(userName);
})

And("I enter a password {word}", (userName) =>{
    cy.get("#password").type(userName);
})

And('I click on the login button', () => {
    cy.get("#login-button").click();        //Izlazi alert pop-up
    cy.on('window:alert', stub);            //STUB hvata poruku koja izlazi
})

Then('I should be presented with the following message {word} {word}', (message, message2) => {
    const expectedMessage = message + " " + message2;   
    cy.log(expectedMessage);
    cy.log(stub.getCall(0));        //
    expect(stub.getCall(0)).to.be.calledWith(expectedMessage);  //Ocekuje da u 'stub-u' ima trazenu poruku
})