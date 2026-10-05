///<reference types="cypress"/>

describe('Funcionalidade: Contato', () => {
  
  beforeEach(() => {
    cy.visit('index.html')
    
  });

  it('Deve preencher formulario de contato com sucesso', () => {
    cy.get('[name="name"]').type('Cassiana Lima de Souza')
    cy.get('[name="email"]').type('cassiana@test.com')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('Mensagem de teste ')
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.contains('Contato enviado com sucesso!').should('exist')

  });

  it('Deve validar mensagem de erro ao enviar sem preencher o nome', () => {
    cy.get('[name="name"]').clear()
    cy.get('[name="email"]').type('cassiana@test.com')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('Mensagem de teste ')
    cy.get('#btn-submit').click()

    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome')

  });

  it('Deve validar mensagem de erro ao enviar sem preencher o email', () => {
    cy.get('[name="name"]').type('Cassiana Lima de Souza')
    cy.get('[name="email"]').clear()
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('Mensagem de teste ')
    cy.get('#btn-submit').click()

    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail')

  });

  it('Deve validar mensagem de erro ao enviar sem selecionar o assunto', () => {
    cy.get('[name="name"]').type('Cassiana Lima de Souza')
    cy.get('[name="email"]').type('cassiana@teste.com')
    //cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('Mensagem de teste ')
    cy.get('#btn-submit').click()

    cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto')

  });

  it('Deve validar mensagem de erro ao enviar sem preencher a mensagem', () => {
    cy.get('[name="name"]').type('Cassiana Lima de Souza')
    cy.get('[name="email"]').type('cassiana@test.com')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').clear()
    cy.get('#btn-submit').click()

    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem')
    
  });

});