describe('Prueba E2E CECE ',()=>{
    it('Index se renderiza', ()=>{
        cy.visit('http://localhost:3000/')
        cy.contains('Datos')
    })
    it('Rest Vs GraphQL se renderiza', ()=>{
        cy.visit('http://localhost:3000/restVsGraphQL')
        cy.contains('tiempo de respuesta')
    })
    it('Rest Vs GraphQL se renderiza', ()=>{
        cy.visit('http://localhost:3000/restVsGraphQL')
        cy.contains('tiempo de respuesta')
    })
})