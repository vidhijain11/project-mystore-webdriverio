

import env from '../testdata/environment'

export default class BasePage {
    
    open(url = env.getURL().baseURL) {     
        browser.maximizeWindow()
        browser.url(url)    
    }

    isValidInput(element) {
        return element.$("//parent::div[contains(@class,'form-ok')]").isDisplayed()
    }
}