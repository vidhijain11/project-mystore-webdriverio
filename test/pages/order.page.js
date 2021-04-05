import basePage from "./base.page";

class OrderPage extends basePage {

    //shipping page - error message alert terms of service
    get msgTOS() { return $("//p[text()='You must agree to the terms of service before continuing.']") };
    //close error alert
    get lnkClose() { return $(".fancybox-item fancybox-close") };
    //check box Agree terms of service
    get cbAgreeTOS() { return $("#cgv") };
    get btnCheckOut() { return $("//p[contains(@class,'cart_navigation')]//span[contains(text(),'Proceed to checkout')]") };
    get lblItemName() { return $(".cart_description > .product-name > a") }
    get lblItemSize() { return $(".cart_description > small:nth-child(3) >a") }
    get lblItemPrice() { return $("[id^='product_price'] > .price") }
    get lbl01Summary() {return $("//li[@class='step_current  first']/span[text()=' Summary']/em[text()='01.']")}
    get lbl03Address() {return $("//li[@class='step_current third']/span[text()=' Address']/em[text()='03.']")}
    get lbl04Shipping() {return $("//li[@class='step_current four']/span[text()=' Shipping']/em[text()='04.']")}
    get lbl05Payment() { return $("//li[@class='step_current last']/span[text()=' Payment']/em[text()='05.']")}
    get lblAddressDelivery() { return $("#address_delivery")}
    get lblAddressInvoice()  { return $("#address_invoice")}
}
export default new OrderPage();