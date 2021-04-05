import basePage from "./base.page"

class HomePage extends basePage {
    
    get btnSignIn() { return $("//a[contains(text(),'Sign in') or @title='Log in to your customer account']")};
    get lblUserName() {return $(".account :nth-child(1)")};
    get btnSignOut() {return $(".logout")};

    get lnkWomen(){return $("//a[text()='Women']")};
    get lnkBlouses() {return $("//a[@title='Blouses']")};
    get lblItemName(){return "//*[contains(text(),'{0}') and @class='product-name']"}; 
    get lblItemDesc(){return "//*[contains(text(),'{0}') and @class='product-name']/../../p[@itemprop='description']"};
    get lblItemPrice() {return "//*[contains(text(),'{0}') and @class='product-name']/../../div[@itemprop='offers']/span"};
    get btnInStock() {return "//*[contains(text(),'{0}') and @class='product-name']/../../span/span[@class='available-now']"}
    get btnAddToCart() {return $("//*[text()='Add to cart']")};
    get hdProdAdded() {return $("(//h2)[1]")};
    get btnCheckOut() {return $("//div[@id='layer_cart']//span[contains(text(),'Proceed to checkout')]")};
    get lblItemInCart() {return $("#layer_cart_product_title")};

    /**
     * get selector - item name
     * @param {*} itemName 
     * @returns 
     */
    getItem(itemName){
        return $(this.lblItemName.replace('{0}', itemName));
    }

    /**
     * get selector - item description
     * @param {*} itemName 
     * @returns 
     */
    getItemDesc(itemName){
        return $(this.lblItemDesc.replace('{0}',itemName));
    }

    /**
     * get selector - item price
     * @param {*} itemName 
     * @returns 
     */
    getItemPrice(itemName){
        return $(this.lblItemPrice.replace('{0}', itemName));
    }

    /**
     * get selector - item in stock
     * @param {*} itemName 
     * @returns 
     */
    getItemInStock(itemName){
        return $(this.btnInStock.replace('{0}', itemName));
    }
   
}

export default new HomePage();