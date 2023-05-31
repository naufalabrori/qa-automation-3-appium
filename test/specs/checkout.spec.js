const loginPage = require('../pageobjects/login.page');
const productsPage = require('../pageobjects/products.page');
const productDetails = require('../pageobjects/product.detail');
const cartPage = require('../pageobjects/cart.page');
const shippingAddress = require('../pageobjects/checkout.shipping');
const paymentMethod = require('../pageobjects/checkout.payment');
const checkoutReview = require('../pageobjects/checkout.review');
const checkoutComplete = require('../pageobjects/checkout.complete');

describe("Checkout product", () => {
    describe("Checkout product without login", () => {
        it("User checkout product without login to his account", async () => {
            await productsPage.productName.click()

            await productDetails.btnAddToCart.click()
            await productDetails.iconCart.click()

            await cartPage.btnProceedToCheckout.click()

            await expect(loginPage.loginTittle).toBeExisting()
        })
    })

    describe("User checkout product without input several shipping address data", () => {
        //Urutan input data (fullname, address, city, zip, country)
        it("user input data without Fullname ", async () => {
            await loginPage.login("bob@example.com", "10203040")

            await shippingAddress.inputData("", "Jl. Pondok", "Lamongan", "62264", "Indonesia") 

            await expect(shippingAddress.errorFullname).toBeExisting()
            await expect(shippingAddress.errorFullname).toHaveTextContaining("Please provide your full name.")         
        })

        it("user input data without Adress 1 ", async () => {
            await shippingAddress.inputData("Naufal Abrori", "", "Lamongan", "62264", "Indonesia")  

            await expect(shippingAddress.errorAddressLine1).toBeExisting()
            await expect(shippingAddress.errorAddressLine1).toHaveTextContaining("Please provide your address.")        
        })

        it("user input data without City ", async () => {
            await shippingAddress.inputData("Naufal Abrori", "Jl. Pondok", "", "62264", "Indonesia") 

            await expect(shippingAddress.errorCity).toBeExisting()
            await expect(shippingAddress.errorCity).toHaveTextContaining("Please provide your city.")
        })

        it("user input data without Zip Code ", async () => {
            await shippingAddress.inputData("Naufal Abrori", "Jl. Pondok", "Lamongan", "", "Indonesia")    
                 
            await expect(shippingAddress.errorZip).toBeExisting()
            await expect(shippingAddress.errorZip).toHaveTextContaining("Please provide your zip code.")
        })

        it("user input data without Country ", async () => {
            await shippingAddress.inputData("Naufal Abrori", "Jl. Pondok", "Lamongan", "62264", "")            

            await expect(shippingAddress.errorCountry).toBeExisting()
            await expect(shippingAddress.errorCountry).toHaveTextContaining("Please provide your country.")
        })

        it("user input data with complete data", async () => {
            await shippingAddress.inputData("Naufal Abrori", "Jl. Pondok", "Lamongan", "62264", "Indonesia")            

            await expect(paymentMethod.paymentTittle).toBeExisting()
            await expect(paymentMethod.paymentTittle).toHaveTextContaining("Enter a payment method")
        })
    })

    describe("User checkout product without input several payment method data", () => {
        // Urutan input data (fullname, card number, expiration date, security code)
        it("User input data without Fullname", async () => {
            await paymentMethod.inputData("", 123456789012345, "03/26", 123)

            await expect(paymentMethod.errorFullname).toBeExisting()
            await expect(paymentMethod.errorFullname).toHaveTextContaining("Value looks invalid.")
        })

        it("User input data without Card Number", async () => {
            await paymentMethod.inputData("Naufal Abrori", "", "03/26", 123)

            await expect(paymentMethod.errorCardNumber).toBeExisting()
            await expect(paymentMethod.errorCardNumber).toHaveTextContaining("Value looks invalid.")
        })

        it("User input data without Expiration Date", async () => {
            await paymentMethod.inputData("Naufal Abrori", 123456789012345, "", 123)

            await expect(paymentMethod.errorExpirationDate).toBeExisting()
            await expect(paymentMethod.errorExpirationDate).toHaveTextContaining("Value looks invalid.")
        })

        it("User input data without Security Code", async () => {
            await paymentMethod.inputData("Naufal Abrori", 123456789012345, "03/26", "")

            await expect(paymentMethod.errorSecurityCode).toBeExisting()
            await expect(paymentMethod.errorSecurityCode).toHaveTextContaining("Value looks invalid.")
        })

        it("User input data with Complete Data", async () => {
            await paymentMethod.inputData("Naufal Abrori", 123456789012345, "03/26", 123)

            await expect(checkoutReview.reviewOrderScreen).toBeExisting()
            await expect(checkoutReview.reviewTittle).toBeExisting()
            await expect(checkoutReview.reviewTittle).toHaveTextContaining("Review your order")
        })
    })

    describe("User review his checkout order", () => {
        it("User place order", async () => {
            await checkoutReview.btnPlaceOrder.click()

            await expect(checkoutComplete.checkoutCompleteScreen).toBeExisting()
            await expect(checkoutComplete.checkoutCompleteTittle).toHaveTextContaining("Checkout Complete")
        })
    })
})