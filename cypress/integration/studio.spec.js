context('Cypress Studio', () => {
 it('Acessar o site devfinance', () => {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://devfinance-agilizei.netlify.app/');
  /* ==== End Cypress Studio ==== */

  /* ==== Generated with Cypress Studio ==== */
  cy.get('#transaction > .button').click();
  cy.get('#description').clear();
  cy.get('#description').type('Mesada');
  cy.get('#amount').clear();
  cy.get('#amount').type('15.00');
  cy.get('#date').clear();
  cy.get('#date').type('2020-12-12');
  cy.get('button').click();
  /* ==== End Cypress Studio ==== */
 });

 /* === Test Created with Cypress Studio === */

 /* === Test Created with Cypress Studio === */
 it('clicar no salvar e cancelar', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://devfinance-agilizei.netlify.app/');
  cy.get('#transaction > .button').click();
  cy.get('.actions > .button').click();
  /* ==== End Cypress Studio ==== */
 });

});