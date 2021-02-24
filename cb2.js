/// <reference types="Cypress" />
"use strict"

describe('tc',()=>{

 it('cb',()=>{
    cy.viewport(1280, 720);

       cy.visit('https://www.ironspider.ca/forms/checkradio.htm');
     
       cy.get('input[type="checkbox"]').check();
       cy.get('input[type="checkbox"]').each(($ele)=>{

           if($ele.attr('value')==='red')
           {
            cy.wrap($ele).uncheck();
           }

         

           

         

       })

       cy.get('input[type="checkbox"]').each(($ele)=>{

        if($ele.attr('value')==='yellow')
        {
         cy.wrap($ele).uncheck();
        }

      

        

      

    })

       
      



 })

})