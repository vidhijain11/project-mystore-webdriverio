import basePage from "./page"

class LandingPage extends basePage {
    
    get btnSignIn() { return $("[title='Log in to your customer account']")};
    get lblUserName() {return $(".account :nth-child(1)")};
    get btnSignOut() {return $(".logout")};
    get btnContactUs() {return $('[title="Contact Us"]')}

    get lnkWomen(){return $("//a[text()='Women']")};
    get btnAddToCart() {return $("//*[text()='Add to cart']")};
    get hdProdAdded() {return $("(//h2)[1]")};
    get btnCheckOut() {return $("//div[@id='layer_cart']//span[contains(text(),'Proceed to checkout')]")};
    get lblItemInCart() {return $("#layer_cart_product_title")};
    get inputSearch() {return $('#search_query_top')}
    get btnSubmitSearch() {return $('[name="submit_search"]')}
    get iconListView() {return $('#list > a > .icon-th-list')}
    get msgAddedToWishList() {return $('//p[text()="Added to your wishlist."]')}
    get btnCloseMsg() {return $('a[title="Close"]')} 
    get txtSearchResult() {return $('.heading-counter')}

    item(itemName){
        return $(`//*[contains(text(),'${itemName}') and @class='product-name']`);
    }

    itemDesc(itemName){
        return $(`//*[contains(text(),'${itemName}') and @class='product-name']/../../p[@itemprop='description']`);
    }

    itemPrice(itemName){
        return $(`//*[contains(text(),'${itemName}') and @class='product-name']/../../div[@itemprop='offers']/span`);
    }

    itemInStock(itemName){
        return $(`//*[contains(text(),'${itemName}') and @class='product-name']/../../span/span[@class='available-now']`);
    }

    iconAddToWishlist(itemName) {
        return $(`(//*[contains(text(),'${itemName}') and @class='product-name']//following::div[@class='wishlist']/a)[1]`)
    }

    /**
     * Get number of search result items.  
     * @returns number
     */
    getSearchResultCount(){
        let text = this.txtSearchResult.getText()
        return parseInt(text.split(" ")[0])
    }
   
}

export default new LandingPage();