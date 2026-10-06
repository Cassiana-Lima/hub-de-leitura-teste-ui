///<reference types="cypress"/>
import { faker, Sex } from '@faker-js/faker'
import cadastroPages from '../support/pages/cadastro-pages';

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cadastroPages.visitarPaginaCadastro()
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer cadastro com sucesso - Usando funcao JS', () => {
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

    it('Deve fazer cadastro com sucesso - Usando Faker', () => {
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
        let nome = faker.person.fullName({ sex: 'female' })
        let telefone = faker.phone.number()
        cy.preencherCadastro(
            nome,
            email,
            telefone,
            'senha@123',
            'senha@123',
        )
        cy.url().should('include', 'dashboard')

    });

    it('Deve fazer cadastro com sucesso - Usando Pages Objects', () => {
        let email = `teste${Date.now()}@teste.com`
        cadastroPages.preencherCadastro('Cassiana Lima',email, '94836483', 'user123', 'user123',)
        cy.url().should('include', 'dashboard')
        })

    it('Deve validar mensagem ao tentar cadastrar sem preencher nome', () => {
        cadastroPages.preencherCadastro('','cassi@teste.com', '1122234', '123senha', '123senha')
        cy.get(':nth-child(1) > .invalid-feedback').should('contain', 'Nome deve ter pelo menos 2 caracteres')
        
    });
    });
