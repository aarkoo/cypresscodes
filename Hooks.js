/// <reference types="Cypress" />
"use strict"

describe('hooks',()=>
{

 before(()=>{
     cy.log('before hooks')
 })

 after(()=>{
    cy.log('after hooks')
})

beforeEach(()=>{
    cy.log('before each hooks')
})

afterEach(()=>{
    cy.log('after each hooks')
})

it('tc',()=>{
    cy.log('logs test1')
})

it('tc',()=>{
    cy.log('logs test2')
})


})