/// <reference types="Cypress" />
"use strict"

describe('tc',()=>{
    it('tc1',()=>{

        cy.visit('https://retail.onlinesbi.com/retail/login.htm');
        cy.get('#banner > .continue_btn > .login_button').click();
        cy.get('#username').type(Cypress.env("first name"));

    })
})