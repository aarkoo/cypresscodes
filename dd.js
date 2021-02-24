// <reference types="Cypress" />
"use strict"

//fixtures are used to load data from a file to our test automation

describe('login',()=>{
 
    before(function(){

        cy.fixture('Datadriven').then(function(data){

           //this.data=data;
            globalThis.data=data;
           
        })
     })

     it('l1',()=>{
        cy.visit('http://demo.t3-framework.org/joomla30/index.php/en/joomla-pages/sample-page-2/login-page');
        cy.get('#username').type(data.email);
        cy.get('#password').type(data.password);
        cy.get('.col-sm-offset-3 > .btn').click();
        
     })

})