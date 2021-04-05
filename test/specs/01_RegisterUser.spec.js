import homePage from "../pages/home.page"
import loginPage from "../pages/login.page"
import registerPage from "../pages/register.page"
import data from "../testdata/account.data"

describe('Scenario - Register a user and validate login and logout', () => {

    before('Launch application', () => {
        loginPage.open()
    });


    it('Should able to Sign in and enter valid email id to create new account', () => {

        homePage.btnSignIn.click();
        expect(loginPage.txtEmailCreate).toBeDisplayed()

        loginPage.txtEmailCreate.setValue(data._validUser.Email);
        loginPage.lblEmailCreate.click();
        //validate format of email
        expect(loginPage.isValidInput(loginPage.txtEmailCreate)).toBe(true)

        loginPage.btnCreateAccount.click();
        //validate heading Create an account is displayed
        expect(registerPage.hdCreateAcc).toBeDisplayed();
    });

    it('Should able to fill registration form and register successfully', () => {

        registerPage.registerNewUser(data._validUser)
        //validate format of First name, last name and password
        expect(loginPage.isValidInput(registerPage.txtCustFirstName)).toBe(true)
        expect(loginPage.isValidInput(registerPage.txtCustLastName)).toBe(true)
        expect(loginPage.isValidInput(registerPage.txtPassword)).toBe(true)
        //validate email is auto populated in personal information section.
        expect(registerPage.txtEmail).toHaveAttribute('value', data._validUser.Email);
        //validate first name and last name should be auto populated in address section.
        expect(registerPage.txtFirstName).toHaveElementProperty('value', data._validUser.FN);
        expect(registerPage.txtLastName).toHaveElementProperty('value', data._validUser.LN);

        registerPage.btnRegister.click();
        //validate user first name and last name on landing page
        expect(homePage.lblUserName).toHaveText(data._validUser.FN + " " + data._validUser.LN);
    });

    it('Should able to Logout and Login again with new registered user ', () => {

        homePage.btnSignOut.click();
        expect(homePage.btnSignIn).toBeClickable()

        homePage.btnSignIn.click();
        loginPage.txtEmailSignIn.setValue(data._validUser.Email);
        loginPage.txtPassword.setValue(data._validUser.Passwd);
        //validate it is a valid email format
        expect(loginPage.isValidInput(loginPage.txtEmailSignIn)).toBe(true)

        loginPage.btnSignIn.click();
        //validate user first name and last name on landing page
        expect(homePage.lblUserName).toHaveText(data._validUser.FN + " " + data._validUser.LN);

    });

});