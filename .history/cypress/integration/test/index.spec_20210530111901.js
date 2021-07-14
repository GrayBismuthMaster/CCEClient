describe('Prueba E2E CECE ',()=>{
    it('Index se renderiza', ()=>{
        cy.visit('http://localhost:3000/')
        cy.contains('Datos')
    })
    it('Rest Vs GraphQL se renderiza', ()=>{
        cy.visit('http://localhost:3000/restVsGraphQL')
        cy.contains('tiempo de respuesta')
    })
    it('Despliegue Estadístico se renderiza', ()=>{
        cy.visit('http://localhost:3000/despliegueEstadisticas')
        cy.contains('Antecedentes y situación del')
    })
    it('PLayground Api GraphQL se renderiza', ()=>{
        cy.visit('http://localhost:3000/api')
        cy.contains('PRETTIFY')
    })
    it('Playground Api Rest se renderiza', ()=>{
        cy.visit('http://localhost:3000/apiRest')
        cy.contains('Endpoints Api Rest')
    })
    it('Página contacto se renderiza', ()=>{
        cy.visit('http://localhost:3000/contacto')
        cy.contains('Endpoints')
    })
    
})