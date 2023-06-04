const menu = require('../pageobjects/menu');
const loginPage = require('../pageobjects/login.page');
const productsPage = require('../pageobjects/products.page');
const productDetails = require('../pageobjects/product.detail');
const cartPage = require('../pageobjects/cart.page');

describe("Cart Feature", () => {
    describe("View cart without choose product", () => {
        it("User click cart button without choose product", async () => {
            await productsPage.iconCart.click()

            await expect(cartPage.noItem).toHaveTextContaining("No Items")
            await expect(cartPage.btnGoToShopping).toBeExisting()
        })
    })

    describe("Add product to cart", () => {
        it("User choose and add product to cart", async () => {
            await driver.back()

            await productsPage.productName.click()
            await productDetails.btnAddToCart.click()
            await productDetails.iconCart.click()

            await expect(productDetails.numberInCart).toBeExisting()
        })
    })

    describe("Manage quantity product in cart", () => {
        it("User add quantity", async () => {
            let productPrice = parseFloat((await $('~product price').getText()).slice(1))
            let totalPrice = parseFloat((await (await $('~total price')).getText()).slice(1))

            await cartPage.plusButton.click()
            await driver.pause(2000)
            
            totalPrice = totalPrice + productPrice

            await expect(cartPage.totalPrice).toHaveTextContaining("$" + totalPrice)
        })

        it("User reduce quantity", async () => {
            let productPrice = parseFloat((await $('~product price').getText()).slice(1))
            let totalPrice = parseFloat((await (await $('~total price')).getText()).slice(1))

            await cartPage.minusButton.click()
            await driver.pause(2000)
            
            totalPrice = totalPrice - productPrice

            await expect(cartPage.totalPrice).toHaveTextContaining("$" + totalPrice)
        })
    })

    describe("Remove product from cart", () => {
        it("User remove product from cart", async () => {
            await cartPage.btnRemove.click()

            await expect(cartPage.noItem).toHaveTextContaining("No Items")
            await expect(cartPage.btnGoToShopping).toBeExisting()
        })
    })
})