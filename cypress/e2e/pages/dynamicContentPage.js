class DynamicContentPage {
    scrollToBottom() {
      cy.scrollTo("bottom");
    }
  
    verifyNewContentLoaded() {
      cy.get(".new-content").should("be.visible"); // Adjust selector
    }
  }
  
  export default new DynamicContentPage();
  