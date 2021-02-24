// <reference types="Cypress" />
"use strict"


describe('tc',()=>{

    it('TC',()=>{

        cy.visit('https://support.casio.in/register');

        cy.get('#customer_name').type('akash');

        cy.get('#customeremail').type('aakashh92@gmail.com');

        cy.get('#customer_mobile').type('8961806701');

        cy.get('.select2-selection__arrow').click();

        cy.get('.select2-search__field').type('Kolkata');

        cy.wait(3500);

        cy.get('.select2-search__field').type('{enter}');

        cy.get(':nth-child(1) > #store_type').click();

    
        cy.get('#check_serial_number').click();






    })
})