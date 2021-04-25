/// <reference types="cypress"/>


import { format, prepareLocalStorage } from '../support/utils'

context('dev Finances Agilizei', () => {
    beforeEach(() => {
        cy.visit('https://devfinance-agilizei.netlify.app/#', {
            onBeforeLoad: (win) => {
                prepareLocalStorage(win)
            }
        })
    

    });
it('remover entradas e saidas', () => {
    cy.log('estrategia1: voltar para o elemento pai, e avançar para um td img attr')
    cy.get('td.description')
    .contains('Mesada')
    .parent()
    .find('img[onclick*=remove]')

cy.log('estrategia 2: buscar todos os irmoes, e buscar o que tem img + attr')
cy.get('td.description')
.contains('Mesada')
.siblings()
.children('img[onclick*=remove]')

cy.log('estrategia 3: buscar todos os irmoes, e filtrar pelo o que tem img + attr')
cy.get('td.description')
.contains('Mesada')
.siblings()
.children()
.filter('img[onclick*=remove]')


cy.log('estrategia 4: buscar todos os irmoes mais novos, seleciona o caçula e busca o filho img')
cy.get('td.description')
.contains('Mesada')
.nextAll()
.last()
//.eq(1) //td
find('img')
//.first


















});














});


