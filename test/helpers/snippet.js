import contactUs from "../pages/contactUs.page"
import loginPage from "../pages/login.page"
import order from "../pages/order.page"
import landing from "../pages/landing.page"
import allureReporter from '@wdio/allure-reporter'

let path = require('path');

class Snippet {

    /**
     * Fills all information on contact us form and submit details.
     * @param {Object} contactInfo
     */

    fillAndSendContactDetails(contactInfo) {
        //let filePath = path.join(path.resolve('./test/testdata/files'), contactInfo.FileName)
        allureReporter.addStep(`Select subject - ${contactInfo.Subject}.`)
        contactUs.selectSubjectByText(contactInfo.Subject)
        expect(contactUs.getSelectedSubject()).toEqual(contactInfo.Subject)

        allureReporter.addStep(`Enter email id - ${contactInfo.Email}.`)
        contactUs.inputEmail.setValue(contactInfo.Email)
        expect(contactUs.inputEmail).toHaveElementProperty('value', contactInfo.Email)
        
        allureReporter.addStep(`Enter order reference number - ${contactInfo.OrderRef}.`)
        contactUs.inputOrderRef.setValue(contactInfo.OrderRef)
        expect(contactUs.inputOrderRef).toHaveElementProperty('value', contactInfo.OrderRef)

        allureReporter.addStep(`Upload file - ${contactInfo.FileName}.`)
        contactUs.inputAttachFile.setValue(path.join(path.resolve('./test/testdata/files'), contactInfo.FileName))
        expect(contactUs.inputAttachFile.getProperty('value')).toContain(contactInfo.FileName)
        
        allureReporter.addStep(`Enter message - ${contactInfo.Message}.`)
        contactUs.inputMessage.setValue(contactInfo.Message)
        expect(contactUs.inputMessage).toHaveElementProperty('value', contactInfo.Message)

        allureReporter.addStep('Click on Send button.')
        contactUs.btnSend.click()      
    }

    /**
     * Adds item to the cart.
     * @param {Object} item 
     */
    addItemToCart(item){

        allureReporter.addStep(`Validate item - ${item.Name} is displayed.`)
        expect(landing.item(item.Name)).toBeDisplayed();

        allureReporter.addStep(`Validate item price is - ${item.Price}.`)
        expect(landing.itemPrice(item.Name)).toHaveText(item.Price)

        allureReporter.addStep(`Validate item available in stock.`)
        expect(landing.itemInStock(item.Name)).toBeDisplayed()

        allureReporter.addStep(`Select item - ${item.Name}.`)
        landing.item(item.Name).click();

        allureReporter.addStep(`Add item to cart.`)
        landing.btnAddToCart.click();
        expect(landing.hdProdAdded).toBeDisplayed();
        expect(landing.lblItemInCart).toHaveText(item.Name);
        expect(landing.btnCheckOut).toBeClickable();
    }

    /**
     * Validate delivery address on Address tab.
     * @param {Object} user 
     */
    validateDeliveryAddress(user){
        expect(order.lbl03Address).toBeDisplayed()
        expect(order.lblAddressDelivery).toHaveText(`YOUR DELIVERY ADDRESS\n${user.FN} ${user.LN}\n${user.Address.L1}\n${user.City}, ${user.State} ${user.PostCode}\n${user.Country}\n${user.MobNo}\nUpdate`)
    }

    /**
     * Validate Invoice address on Address tab.
     * @param {Object} user 
     */
    validateInvoiceAddress(user){
        expect(order.lbl03Address).toBeDisplayed()
        expect(order.lblAddressInvoice).toHaveText(`YOUR BILLING ADDRESS\n${user.FN} ${user.LN}\n${user.Address.L1}\n${user.City}, ${user.State} ${user.PostCode}\n${user.Country}\n${user.MobNo}\nUpdate`)   
    }

    /**
     * Enters valid Email id, password and click on sign in button.
     * @param {Object} validUser
     */
    signInWithValidUser(validUser){

        allureReporter.addStep('Click button sign in on landing page.')
        landing.btnSignIn.click();

        allureReporter.addStep(`Login with email - ${validUser.Email} and password - ${validUser.Passwd}`)
        loginPage.txtEmailSignIn.setValue(validUser.Email);
        loginPage.txtPassword.setValue(validUser.Passwd);
        expect(loginPage.isValidInput(loginPage.txtEmailSignIn)).toBe(true)

        allureReporter.addStep('Click button sign in.')
        loginPage.btnSignIn.click();

        allureReporter.addStep(`Validate First name - ${validUser.FN} and last name - ${validUser.LN}`)
        expect(landing.lblUserName).toHaveText(validUser.FN + " " + validUser.LN);
    }

    /**
     * Search item using search bar.
     * @param {String} itemName 
     */
    searchItem(itemName){

        expect(landing.inputSearch).toBeClickable()

        landing.inputSearch.setValue(itemName)
        landing.btnSubmitSearch.click()
        expect(landing.item(itemName)).toBeDisplayed();
    }

    /**
     * Switch to list view.
     */
    switchToListView() {

        expect(landing.iconListView).toBeClickable()
        landing.iconListView.click()
    }



}

export default new Snippet()