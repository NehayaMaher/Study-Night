describe('Navigation Tests', function() {
    it('should navigate to the Card Set page', function() {
      cy.visit('/');
      cy.contains('Card Set').click();
      cy.url().should('include', '/card-set');
    });
  
    it('should navigate to the About page', function() {
      cy.visit('/');
      cy.contains('About').click();
      cy.url().should('include', '/about');
    });
  
    it('should navigate to the Home page', function() {
      cy.visit('/');
      cy.contains('Home').click();
      cy.url().should('include', '/home');
    });
  });
  