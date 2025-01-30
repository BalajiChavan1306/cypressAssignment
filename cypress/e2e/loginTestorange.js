
import loginpageorange from "./pages/loginpageorange";
describe("Login Test using POM", () => {
  it("should log in successfully", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    LoginPage.enterUsername("Admin");
    LoginPage.enterPassword("admin123");
    LoginPage.clickLogin();

    
    cy.url().should("include", "/dashboard");
  });
});
