// type definitions for Cypress object "cy"
// <reference types="cypress" />
import HomePage from 'F:\cypress\cypress\support\pageobject\HomePage.js';
 
describe('Automation Test Suite ', function() {
    
    //Mostly used for Setup Part
    before(function(){
    cy.fixture('example').then(function(data)
    {
        this.data=data ;
    })
    })
    
    it('Cypress Test Case', function() {
    //Object Creation for PageObject Page Class and assigning it to a constant variable
 
    const homePage=new HomePage();
    
    //Calling
    cy.visit('https://shop.demoqa.com/my-account/');
    homePage.getUserName().type(this.data.Username);
    homePage.getEmail().type(this.data.Email);
    homePage.getPassword().type(this.data.NewPassword);
    homePage.getRegisterButton().click();
 
    //Checking whether the Registration is successful and whether UserName is populated under login section
    homePage.getLoginUserName().should('have.value',this.data.Username);
 
    // For Loop for Accessing productName array from Features File
    
})

});
