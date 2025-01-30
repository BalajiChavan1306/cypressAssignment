
import dynamicContentPage from "./pages/dynamicContentPage";

describe("Dynamic Content Test using POM", () => {
  it("should load new content when scrolling down", () => {
    cy.visit("https://example.com/dynamic-content"); // Adjust URL

    DynamicContentPage.scrollToBottom();
    DynamicContentPage.verifyNewContentLoaded();
  });
});
