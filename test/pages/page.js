import env from "../testdata/environment"

export default class BasePage {
    
    open(url = env.baseURL) {
        browser.maximizeWindow()
        browser.url(url)
    }

    /**
     * entered input is a valid input.
     * @param {webElement} element 
     * @returns boolean
     */
    isValidInput(element) {
        return element.$("//parent::div[contains(@class,'form-ok')]").isDisplayed()
    }

}