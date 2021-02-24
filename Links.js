/// <reference types="Cypress" />
"use strict"

describe('Tc',()=>{

    it('links',()=>{

        cy.visit('https://www.google.com/');

        cy.get('a').then((a)=>{

            const count=a.length;
            cy.log(count);
        })

    })

})