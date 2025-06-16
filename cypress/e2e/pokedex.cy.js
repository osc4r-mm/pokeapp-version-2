describe('PokéApp E2E', () => {
  it('puede navegar entre páginas y ver detalles', () => {
    cy.visit('http://localhost:3000/');

    // Comprueba que hay pokémons en la lista
    cy.get('.pokemon-list li').should('have.length.greaterThan', 0);

    // Haz clic en el primer Pokémon
    cy.get('.pokemon-list li a').first().click();

    // Comprueba que se muestra el detalle
    cy.get('.pokedex-detail').should('exist');
    cy.get('.pokedex-detail h1').should('not.be.empty');

    // Vuelve atrás
    cy.get('.pokedex-btn').contains('Tornar al llistat').click();

    // Comprueba que vuelve a la lista
    cy.get('.pokemon-list').should('exist');
  });
});