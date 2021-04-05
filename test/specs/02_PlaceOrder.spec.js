import homePage from "../pages//home.page"
import loginPage from "../pages/login.page"
import orderPage from "../pages/order.page"
import data from "../testdata/account.data"

describe('Scenario - Add an item to the cart, checkout and proceed to payments page', () => {

    before('Launch application', () => {
        loginPage.open()
    });

    it('Should able to sign in with valid user', () => {

        homePage.btnSignIn.click();
        loginPage.signIn(data._prereqUser.Email, data._prereqUser.Passwd);
        expect(homePage.lblUserName).toHaveText(data._prereqUser.FN + " " + data._prereqUser.LN);
        expect(homePage.lnkWomen).toBeClickable()
    });

    it('Should able to add item to the cart', () => {
        
        homePage.lnkWomen.click();
        homePage.getItem(data._item1.Name).scrollIntoView()
         //validate Item name, price and it should be in stock
        expect(homePage.getItem(data._item1.Name)).toBeDisplayed();
        expect(homePage.getItemPrice(data._item1.Name)).toHaveText(data._item1.Price)
        expect(homePage.getItemInStock(data._item1.Name)).toBeDisplayed()

        homePage.getItem(data._item1.Name).click();
        homePage.btnAddToCart.click();
        //validate item added in cart
        expect(homePage.hdProdAdded).toBeDisplayed();
        expect(homePage.lblItemInCart).toHaveText(data._item1.Name);
        expect(homePage.btnCheckOut).toBeClickable();
    });

    it('Should able to checkout and navigate to payment page ', () => {

        homePage.btnCheckOut.click();
        //validate current page is summary tab
        expect(orderPage.lbl01Summary).toBeDisplayed()
        
        orderPage.btnCheckOut.click();
        //validate current page is address page
        expect(orderPage.lbl03Address).toBeDisplayed()
        //validate delivery and invoice address is displayed on address tab
        expect(orderPage.lblAddressDelivery).toHaveText(`YOUR DELIVERY ADDRESS\n${data._prereqUser.FN} ${data._prereqUser.LN}\n${data._prereqUser.Address.L1}\n${data._prereqUser.City}, ${data._prereqUser.State} ${data._prereqUser.PostCode}\n${data._prereqUser.Country}\n${data._prereqUser.MobNo}\nUpdate`)
        expect(orderPage.lblAddressInvoice).toHaveText(`YOUR BILLING ADDRESS\n${data._prereqUser.FN} ${data._prereqUser.LN}\n${data._prereqUser.Address.L1}\n${data._prereqUser.City}, ${data._prereqUser.State} ${data._prereqUser.PostCode}\n${data._prereqUser.Country}\n${data._prereqUser.MobNo}\nUpdate`)
        
        orderPage.btnCheckOut.scrollIntoView()
        orderPage.btnCheckOut.click();
        //validate current page is shipping page
        expect(orderPage.lbl04Shipping).toBeDisplayed()
        
        orderPage.cbAgreeTOS.click();
        orderPage.btnCheckOut.click();
        //validate current page is payment page
        expect(orderPage.lbl05Payment).toBeDisplayed()
        //validate item name, size, color, price on payment page
        expect(orderPage.lblItemName).toHaveText(data._item1.Name)
        expect(orderPage.lblItemSize).toHaveText(data._item1.SizeColor)
        expect(orderPage.lblItemPrice).toHaveText(data._item1.Price)

    });

});