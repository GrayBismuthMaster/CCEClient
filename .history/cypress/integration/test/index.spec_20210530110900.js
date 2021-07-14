describe('Index Page',()=>{
    it('frontpage can be opened', ()=>{
        cy.visit('http://localhost:3000/')
        cy.contains('Datos')
    })
}