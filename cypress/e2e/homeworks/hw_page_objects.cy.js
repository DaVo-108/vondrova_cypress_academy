import { HomePage } from "../../page-objects/eshop/home_page";
import { RegistrationPage } from "../../page-objects/eshop/registration_page";

describe("HW Registration Form", () => {
  it("Home Page and Register Button", () => {
    const homePage = new HomePage();
    const registrationPage = new RegistrationPage();

    homePage.openHomePage();
    homePage.clickAccount();
    homePage.clickRegister();
    registrationPage.typeFirstname("Daniela");
    registrationPage.typeLastname("Vondrová");
    registrationPage.typeEmail("daniela.vondrova@danvon.cz");
    registrationPage.typePhone("735735735");
    registrationPage.typePassword("hesloheslo");
    registrationPage.typeConfirmPassword("hesloheslo");
    registrationPage.clickNewsletter();
    registrationPage.clickContinue();
  });
});
