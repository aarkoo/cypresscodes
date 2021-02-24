// <reference types="Cypress" />
"use strict"


describe('tc',()=>{

  it('alert',()=>{

     cy.visit('https://register.rediff.com/register/register.php?FormName=user_details');
     cy.get('#Register').click();

     cy.on('window:alert',(txt)=>{
        //Mocha assertions
        cy.log(`the alert text message is -
         ${txt}`);
     })


  })

})