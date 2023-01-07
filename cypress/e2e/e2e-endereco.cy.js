/// <reference types="cypress" />
import enderecoPage from '../support/page-objects/endereco.page';
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')


describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
beforeEach(() => {
    cy.visit('minha conta')
    cy.fixture('perfil').then(dados =>{
        cy.login(dados.usuario, dados.senha)
    })
    
});

    it('Deve fazer cadastro de faturamento com sucesso ', () => {
        
        EnderecoPage.editarEnderecoFaturamento('Maria', 'Souza', 'Avon', 'Brasil', 'Avenida Interlagos', '2000', 'São Paulo', 'São Paulo', '04750000','11999998888', 'maria@empresa.com')
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')
    });

    it('Deve fazer cadastro de faturamento com sucesso - usando arquivo de dados', () => {
        
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email,
             )
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')
    });

    
     it.only('Deve fazer cadastro de entrega com sucesso', () => {
        EnderecoPage.editarEnderecoEntrega('Lucia' , 'Souza' , 'Google' , 'Brasil' , 'Avenida Rio Bonito' , '2600' , 'São Paulo' , 'São Paulo' , '04788888')
        cy.get('.woocommerce-message').should('contain' ,'Endereço alterado com sucesso.')
        
     });

    
        
      
    
        
    
});
