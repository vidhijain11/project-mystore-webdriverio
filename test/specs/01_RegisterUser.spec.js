import landing from "../pages/landing.page"
import loginPage from "../pages/login.page"
import register from "../pages/register.page"
import data from "../testdata/dataProvider"
import allureReporter from '@wdio/allure-reporter'
import snippet from "../helpers/snippet"

describe('Scenario - Register a new user and validate login and logout', () => {

    before('Launch application', () => {
        loginPage.open()
    });

    it('TC01 : Should able to create new account and register successfully', () => {

        allureReporter.addStep(`click button Sign in`)
        landing.btnSignIn.click();
        expect(loginPage.txtEmailCreate).toBeDisplayed()

        allureReporter.addStep(`Enter Email id - ${data.validUser.Email} to create new account.`)
        loginPage.txtEmailCreate.setValue(data.validUser.Email);
        loginPage.lblEmailCreate.click();

        allureReporter.addStep(`Validate entered email id is a valid email id.`)
        expect(loginPage.isValidInput(loginPage.txtEmailCreate)).toBe(true)

        allureReporter.addStep(`Click on button create an account.`)
        loginPage.btnCreateAccount.click();
        expect(register.hdCreateAcc).toBeDisplayed();

        allureReporter.addStep(`Fill user details on registration form.`)
        register.registerNewUser(data.validUser)
        expect(loginPage.isValidInput(register.txtCustFirstName)).toBe(true)
        expect(loginPage.isValidInput(register.txtCustLastName)).toBe(true)
        expect(loginPage.isValidInput(register.txtPassword)).toBe(true)
        expect(register.txtEmail).toHaveAttribute('value', data.validUser.Email);
        expect(register.txtFirstName).toHaveElementProperty('value', data.validUser.FN);
        expect(register.txtLastName).toHaveElementProperty('value', data.validUser.LN);

        allureReporter.addStep(`Click on Register button.`)
        register.btnRegister.click();

        allureReporter.addStep(`Validate user first name and last name is displayed.`)
        expect(landing.lblUserName).toHaveText(data.validUser.FN + " " + data.validUser.LN);
    });

    it('TC02 : Should able to Logout and Login again with new registered user.', () => {

        allureReporter.addStep(`Click on button sign out.`)
        landing.btnSignOut.click();
        expect(landing.btnSignIn).toBeClickable()

        allureReporter.addStep(`Sign in with new user.`)
        snippet.signInWithValidUser(data.validUser)
        
    });

});