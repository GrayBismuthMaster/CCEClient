describe('Prueba E2E C',()=>{
    it('frontpage can be opened', ()=>{
        cy.visit('http://localhost:3000/')
        cy.contains('Datos')
    })
})