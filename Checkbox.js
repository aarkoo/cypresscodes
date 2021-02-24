/// <reference types="Cypress" />
"use strict"

describe('TC',()=>{

  it('tc',()=>{

    let name=['Java','PHP','ASP'];

    let n2=['.NET','JavaScript'];

    

       cy.visit('https://smartwebby.com/PHP/Phptips2.asp');


        name.forEach((e)=>{
            cy.get(`[value="${e}"]`).uncheck();  
        })
  
        n2.forEach((e)=>{
            cy.get(`[value="${e}"]`).check();  
        })

        var date=new Date();
        cy.log(date.getDate())


   


    

    
      
      

  })

})