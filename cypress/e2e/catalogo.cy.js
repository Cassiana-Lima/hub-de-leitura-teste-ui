///<reference types="cypress"/>

describe('Funcionalidade: Catalogo de Livros', () => {

    beforeEach(() => {
        cy.visit('catalog.html')
    });

    it.skip('Deve clicar no botao Adicionar à Cesta', () => {
        cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click()
        cy.get('#cart-count').should('contain', 1)    
    });

    it('Deve clicar em todos os botoes Adicionar à Cesta', () => {
        cy.get('.btn-primary').click({multiple: true})    
    });
    
    it('Deve clicar no primeiro botao Adicionar à Cesta', () => {
        cy.get('.btn-primary').first().click()
    });

    it('Deve clicar no ultimo botao Adicionar à Cesta', () => {
        cy.get('.btn-primary').last().click()
    });

    it('Deve clicar no terceiro botao Adicionar à Cesta', () => {
        cy.get('.btn-primary').eq(2).click()  
    });

    it('Deve clicar no quinto botao Adicionar à Cesta', () => {
        cy.get('.btn-primary').eq(4).click()
        cy.get('#global-alert-container').should('contain', 'A Metamorfose')
    });

    it('Deve clicar no nome do livro e direcionar para a tela do livro', () => {
        cy.contains('Dom Casmurro').click()
        cy.url().should('include', 'book-details')
        cy.get('#add-to-cart-btn').click()
        cy.get('#alert-container').should('contain', 'Livro adicionado à cesta com sucesso!')
    });
        
    });
       
        
    
        
    



