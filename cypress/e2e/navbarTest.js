
import navbarpage from "./pages/navbarpage";

describe("Navigation Test using POM", () => {
  beforeEach(() => {
    cy.visit("https://example.com"); // Adjust URL
  });

  it("should navigate to Home", () => {
    NavigationPage.clickHome();
    cy.url().should("include", "/home");
  });

  it("should navigate to About", () => {
    NavigationPage.clickAbout();
    cy.url().should("include", "/about");
  });

  it("should navigate to Contact", () => {
    NavigationPage.clickContact();
    cy.url().should("include", "/contact");
  });
});
