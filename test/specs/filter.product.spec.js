const menu = require('../pageobjects/menu');
const loginPage = require('../pageobjects/login.page');
const productsPage = require('../pageobjects/products.page');

describe("Filter Product", () => {
    describe("Filter product name descending", () => {
        it("Product Name filtered descending", async () => {
            await menu.clickMenu()
            await menu.clickBtnLogin()
            await loginPage.login("bob@example.com", "10203040")

            await productsPage.btnFilter.click()
            await productsPage.btnNameDescending.click()
            
        })
    })
})