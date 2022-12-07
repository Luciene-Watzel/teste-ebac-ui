/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

context('Funcionalidade login', () =>{

    beforeEach(() => {
        cy.visit('minha-conta')  
    });

    afterEach(() => {
        cy.screenshot()
    });
    
    
    it('Deve fazer login com sucesso', () =>{
        cy.get('#username').type('lu_alunaebac@teste.com')
        cy.get('#password').type('teste251207*')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain' , 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, lu_alunaebac')

    })

    it('Deve fazer login com sucesso - usando arquivo de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain' , 'Minha conta')
        
    });

    it('Deve fazer login com sucesso - Usando fixure', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()
    
            cy.get('.page-title').should('contain' , 'Minha conta')
        })
        
    });

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () =>{
        cy.get('#username').type('teste-ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido')

    })
    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () =>{
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain' , 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')

    })
})