/// <reference types="Cypress" />
"use strict"

describe('tc',()=>{

 it('cb',()=>{

    let name=['red','yellow','purple'];

       cy.visit('https://www.ironspider.ca/forms/checkradio.htm');

       name.forEach(($ele)=>{

        if($ele.attr('value')==='red')
           {
            cy.wrap($ele).uncheck();
           }

       })
     
     
           
      

        

      

    })

})