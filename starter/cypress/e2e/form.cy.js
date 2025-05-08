describe('Form Tests', function() {
    it('should submit the Create Set form correctly', function() {
      cy.visit('/');
      cy.contains('Create Set').click();
      cy.get('input[name="setName"]').type('New Set');
      cy.get('form').submit();
      cy.contains('Set Created Successfully').should('be.visible');
    });
  
    it('should show error for empty input in Create Set form', function() {
      cy.visit('/');
      cy.contains('Create Set').click();
      cy.get('form').submit();
      cy.contains('Please enter a valid name').should('be.visible');
    });
  });
  