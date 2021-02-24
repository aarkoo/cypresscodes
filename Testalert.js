/// <reference types="Cypress" />
"use strict"

describe('tc',()=>{

 it('check',()=>{

         cy.visit('https://www.dropbox.com/login');

         cy.get('.signin-text').then(($ele)=>{

            if ($ele.text().includes('Sign n'))
             {
                // yup found it
                cy.get('.signin-text').click({force: true});
              } 

              else
              {
                  alert('oops no button found...sorry');
              }


         })

 })

})