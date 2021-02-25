// <reference types="Cypress" />
"use strict"

describe('tc',()=>{
    

    it('document',()=>{

        cy.visit('https://www.samplestore.com/account/login');
        cy.title().should('include','Account - Samplestore');

        cy.title().then((text)=>{

            const pagetitle=text;
            cy.log(pagetitle);
        })

        cy.url().then((url)=>{

            const pageurl=url;
            cy.log(pageurl);
        })

       // cy.document().should('have.property','charset').and('eq','ISO-8859-1');
    })
})