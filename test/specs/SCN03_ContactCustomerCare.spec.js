import homePage from "../pages/landing.page"
import contactUs from "../pages/contactUs.page"
import data from "../testdata/dataProvider"
import snippet from "../helpers/snippet"
import allureReporter from '@wdio/allure-reporter'

describe('SCN03 - Contact customer care and send message', () => {

    before('Launch application', () => {
        contactUs.open()
    });

    it('TC01 : Should not be able to send message using invalid email id.', () => {

        allureReporter.addStep('Click button contactUs')
        expect(homePage.btnContactUs).toBeClickable()
        homePage.btnContactUs.click()

        allureReporter.addStep('Validate user navigated to contact us page.')
        expect(contactUs.hdContactUs).toHaveText(contactUs.text.contactUs)
        expect(contactUs.hdSendMessage).toHaveText(contactUs.text.sendMsg)

        allureReporter.addStep('Enter issue details.')
        snippet.fillAndSendContactDetails(data.contactInfo)

        allureReporter.addStep('Validate error message - "Invalid email address." is displayed.')
        expect(contactUs.txtErrorMsg).toHaveText(contactUs.text.errorMsg)

    });
    
});