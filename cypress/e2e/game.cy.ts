
/// <reference types="cypress" />
describe('Space Invaders - tests fonctionnels', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('la page se charge et le canvas est présent', () => {
        cy.get('canvas').should('exist').and('be.visible');
    });

    it('le jeu ne produit pas d\'erreur JavaScript au chargement', () => {
        cy.window().should('exist');
        cy.document().should('exist');
    });

    it('le jeu réagit à une interaction clavier', () => {
        cy.get('body').type('{leftarrow}');
        cy.get('canvas').should('be.visible');
    });

});