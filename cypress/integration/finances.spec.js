///<reference types="cypress" />

import { format, prepareLocalStorage } from '../support/utils'

// cy.viewport
// arquivos config
// passar as configs por linhas de comando
// npx cypress open --config viewportWidth=411,viewoportHeight=823

context('Dev Finances Agilizei', () => {
    // hooks
    // trechos que executam antes e depois do teste
    // before -> antes de todos os testes
    // beforeEach -> antes de cada teste
    // afterEach -> depois de cada teste

    beforeEach(() => {
        cy.visit('https://devfinance-agilizei.netlify.app/#', {
            onBeforeLoad: (win) => {
                prepareLocalStorage(win)
            }
        })
        //cy.get('#data-table tbody tr').should('have.length', 2)

    });
    it('Cadastrar entradas', () => {
        // -entender o fluxo manualmente
        // - mapear os elementos que vamos interagir
        // - descrever as interacoes com o cypress
        // - adicionar as asserçoes que vamos precisar

        cy.get('#transaction > .button').click() // id + classe
        cy.get('#description ').type('Mesada')        // id
        cy.get('[name=amount]').type(12)         //atributos
        cy.get('[type=date]').type('2021-03-21')          //atributos
        cy.get('button').contains('Salvar').click() //tipo de valor
        cy.get('#data-table tbody tr').should('have.length', 3)

    });


    it('Cadastrar saidas', () => {
        cy.visit('https://devfinance-agilizei.netlify.app/#')
        cy.get('#transaction .button').click() // id + classe
        cy.get('#description ').type('presente')        // id
        cy.get('[name=amount]').type(-12)         //atributos
        cy.get('[type=date]').type('2021-03-21')          //atributos
        cy.get('button').contains('Salvar').click() //tipo de valor
        cy.get('#data-table tbody tr').should('have.length', 3)

    });
    // remover entradas e saidas

    it('remover entradas e saidas', () => {

        
        // estrategia 1: voltar para elemento pai, e avançar para um td img attr
        cy.get('td.description')
            .contains("Mesada")
            .parent()
            .find('img[onclick*=remove]')
            .click()

        // estrategia 2: voltar para elemento pai, e avançar para um td img + attr
        cy.get('td.description')
            .contains("Suco Kapo")
            .parent()
            .find('img[onclick*=remove]')
            .click()
    });

    it('validar saldo com diversas transações', () => {
        // capturar as linhas que contem as transações e as colynas com valores
        // formatar esses valores das linhas
        //capturar o texto dessas colunas
        //somar valores
        // capturar o texto do total
        // comparar o somatorio de entradas e despesas com o total

        let incomes = 0
        let expenses = 0

        cy.get('#data-table tbody tr')
            .each(($el, index, $list) => {
                cy.get($el).find('td.income, td.expense').invoke('text').then(text => {
                        cy.log(text)
                        if(text.includes('-')){
                            expenses = expenses + format(text)   
                        }else{
                            incomes = incomes + format(text)
                        }
                        cy.log(`entrada`,incomes)
                        cy.log(`saida`,expenses)
                    })

            });

            cy.get('#totalDisplay').invoke('text').then(text => {
                cy.log(`valor total`, format(text) )

                let formattedTotalDisplay = format (text)
                let expectedTotal = incomes + expenses 

                expect(formattedTotalDisplay).to.eq(expectedTotal)

            })
    });


});