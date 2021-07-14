describe('Prueba E2E CECE ',()=>{
    it('Index se abre', ()=>{
        cy.visit('http://localhost:3000/')
        cy.contains('Datos')
    })
})