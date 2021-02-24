// <reference types="Cypress" />
"use strict"

describe('tc',()=>
{

    it('log',()=>{

        cy.visit('http://demo.t3-framework.org/joomla30/index.php/en/joomla-pages/sample-page-2/login-page');
        cy.login('aakashh92@gmail.ccom','Abcdefgh1@')
    })
})