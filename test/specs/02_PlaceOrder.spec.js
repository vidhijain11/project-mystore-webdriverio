import landing from "../pages/landing.page"
import loginPage from "../pages/login.page"
import orderPage from "../pages/order.page"
import data from "../testdata/dataProvider"
import snippet from "../helpers/snippet"
import allureReporter from '@wdio/allure-reporter'

describe('Scenario - Add item to cart and checkout.', () => {

    before('Launch application', () => {
        loginPage.open()
    });

    it('TC01 :Should able to Sign in, add an item to the cart, checkout and proceed to payments page', () => {

        snippet.signInWithValidUser(data.prereqUser)
        expect(landing.lnkWomen).toBeClickable()

        allureReporter.addStep(`Select category Women.`)
        landing.lnkWomen.click();

        allureReporter.addStep(`Add item ${data.item[1]} to the cart.`)
        snippet.addItemToCart(data.item[1])

        allureReporter.addStep(`Click button proceed to checkout.`)
        landing.btnCheckOut.click();
        expect(orderPage.lbl01Summary).toBeDisplayed()
        
        allureReporter.addStep(`Click button proceed to checkout on Order tab.`)
        orderPage.btnCheckOut.click();

        allureReporter.addStep(`Validate Delivery address on Address tab`)        
        snippet.validateDeliveryAddress(data.prereqUser)

        allureReporter.addStep(`Validate Invoice address on Address tab`)        
        snippet.validateInvoiceAddress(data.prereqUser)

        allureReporter.addStep(`Click button proceed to checkout on Address tab.`) 
        orderPage.btnCheckOut.scrollIntoView()
        orderPage.btnCheckOut.click();
        expect(orderPage.lbl04Shipping).toBeDisplayed()
        
        allureReporter.addStep(`Accept terms of service on Shipping tab.`)
        orderPage.cbAgreeTOS.moveTo()
        orderPage.cbAgreeTOS.click()

        allureReporter.addStep(`Click button proceed to checkout on Shipping tab.`) 
        orderPage.btnCheckOut.click();
        expect(orderPage.lbl05Payment).toBeDisplayed()
        
        allureReporter.addStep(`Validate item name, size, color, price on Payments tab`) 
        expect(orderPage.lblItemName).toHaveText(data.item[1].Name)
        expect(orderPage.lblItemSize).toHaveText(data.item[1].SizeColor)
        expect(orderPage.lblItemPrice).toHaveText(data.item[1].Price)
    });

});