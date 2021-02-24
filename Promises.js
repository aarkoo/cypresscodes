// <reference types="Cypress" />
"use strict"

describe("tc",()=>{

    it('TC',()=>{

        cy.visit('https://www.google.com/');

        let textval=cy.get(':nth-child(1) > .gb_g');

 
                  
        return new Cypress.Promise((resolve,reject)=>{

            textval.then(($txt)=>{
                     
                
                var variable= $txt.text();
               if(variable==='Gmail')
               {
              textval.click();
                resolve("success");
               }

               else
               {
                   //cy.log("error not found");
                   reject('sorry');
               }
               

            });
                  }).then(()=>{
                      cy.log("success")
                  }).catch(()=>{
                      cy.log('very bad')
                  })


        
    })
})