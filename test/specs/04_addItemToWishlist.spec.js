import landing from "../pages/landing.page"
import data from "../testdata/dataProvider"
import snippet from "../helpers/snippet"
import allureReporter from '@wdio/allure-reporter'

describe('Scenario - Add item to wishlist', () => {

    before('Launch application', () => {
        landing.open()
        snippet.signInWithValidUser(data.prereqUser)
    });

    it('TC01 : Should able to search an item and add it to wishlist.', () => {

        allureReporter.addStep(`Search item ${data.item[2].Name}`)
        snippet.searchItem(data.item[2].Name)

        allureReporter.addStep('Validate number of search results greater than 0')
        expect(landing.getSearchResultCount()).toBeGreaterThan(0)

        allureReporter.addStep('Switch to list view')
        snippet.switchToListView()

        allureReporter.addStep(`Add item to wishlist`)
        landing.iconAddToWishlist(data.item[2].Name).click()

        allureReporter.addStep('Validate message - "Added to your wishlist" is displayed')
        expect(landing.msgAddedToWishList).toBeDisplayed()

        allureReporter.addStep('Close message box')
        landing.btnCloseMsg.click()

        allureReporter.addStep('Validate add to wishlist icon is checked')
        expect(landing.iconAddToWishlist(data.item[2].Name)).toHaveElementClassContaining('checked')
    })
    
});