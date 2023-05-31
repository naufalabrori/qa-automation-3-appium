const menu = require('../pageobjects/menu');
const loginPage = require('../pageobjects/login.page');
const productsPage = require('../pageobjects/products.page');

describe("Login & Logout Feature", () => {
    describe("Login without username", () => {
        it("User input data without username", async () => {
            await menu.clickMenu()
            await menu.clickBtnLogin()

            await loginPage.login("", "10203040")

            await expect(loginPage.usernameError).toBeExisting()
            await expect(loginPage.usernameError).toHaveTextContaining("Username is required")
        })
    })

    describe("Login without password", () => {
        it("User input data without password", async () => {
            await loginPage.login("bob@example.com", "")

            await expect(loginPage.passwordError).toBeExisting()
            await expect(loginPage.passwordError).toHaveTextContaining("Password is required")
        })
    })

    describe("Login with valid data", () => {
        it("User input valid username and password", async () => {
            await loginPage.login("bob@example.com", "10203040")

            await expect(productsPage.productTittle).toBeExisting()
            await expect(productsPage.productTittle).toHaveTextContaining("Products")
        })
    })

    describe("User logout his account", () => {
        it("User logout his account from app", async () => {
            await menu.clickMenu()
            await menu.btnLogout.click()
            await menu.allertLogout.waitForDisplayed()
            await menu.confirmLogout.click()

            await expect(loginPage.logoutSuccess).toHaveTextContaining("You are successfully logged out.")
        })
    })
    
})