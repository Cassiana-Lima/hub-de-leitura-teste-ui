///<reference types="cypress"/>
import { faker, Sex } from '@faker-js/faker'

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cy.visit('register.html')
    });

    it('Deve fazer cadastro com sucesso usando funcao JS', () => {
        let email = `teste${Date.now()}@teste.com`

        cy.get('#name').type('Cassiana Lima')
        cy.get('#email').type(email)
        cy.get('#phone').type('912938373')
        cy.get('#password').type('teste@123')
        cy.get('#confirm-password').type('teste@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        //resultado esperado   
        cy.url().should('include', 'dashboard')


    });



    it('Deve fazer cadastro com sucesso, usando Faker', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()

        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('912938373')
        cy.get('#password').type('teste@123')
        cy.get('#confirm-password').type('teste@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()

        cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('contain', nome)


    });

    it('Deve preencher Cadastro com sucesso - Usando comando customizado ', () => {
        let email = `teste${Date.now()}@teste.com`
        let nome =faker.person.fullName({sex:'female'})
        let telefone =faker.phone.number()
        cy.preencherCadastro(
            nome,
            email,
            telefone,
            'senha@123',
            'senha@123',
        )
        cy.url().should('include', 'dashboard')
             
    });
});