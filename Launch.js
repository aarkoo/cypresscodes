/// <reference types="Cypress" />
"use strict"




describe('TC',()=>{

    it('openbrowser',()=>{


        try{

       

        let browser='chrome';

        if(browser==='chrome' || browser==='CHROME')
        {
            cy.visit('https://www.google.com/');
        }

    }catch(e)
    {
        alert('error found'+e.message);
    }
    })
})