// <reference types="Cypress" />
"use strict"


describe('tc',()=>{

    it('tc1',()=>{

        cy.visit('http://demo.automationtesting.in/Register.html');

        cy.contains('WebTable').click();
    })
})