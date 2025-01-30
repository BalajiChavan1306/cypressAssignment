class NavigationPage {
    clickHome() {
      cy.get('a[href="/home"]').click(); // Adjust selector
    }
  
    clickAbout() {
      cy.get('a[href="/about"]').click(); // Adjust selector
    }
  
    clickContact() {
      cy.get('a[href="/contact"]').click(); // Adjust selector
    }
  }
  
  export default new NavigationPage();
  