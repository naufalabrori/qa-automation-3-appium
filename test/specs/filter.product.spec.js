const productsPage = require('../pageobjects/products.page');

describe("Filter Product", () => {
    describe("Filter product name descending", () => {
        it("Product Name filtered descending", async () => {
            await productsPage.btnFilter.click()
            await productsPage.btnNameDescending.click()
            
            const productNames = await $$('(//android.widget.TextView[@content-desc="store item text"])');
            
            const namesDescending = await Promise.all(productNames.map(async (productName) => {
                return await productName.getText();
            }));

            await expect(productsPage.checkArray(namesDescending)).toBe("Descending")
        })
    })
    
    describe("Filter product name Ascending", () => {
        it("Product Name filtered ascending", async () => {
            await productsPage.btnFilter.click()
            await productsPage.btnNameAscending.click()
            
            const productNames = await $$('(//android.widget.TextView[@content-desc="store item text"])');

            const namesAscending = await Promise.all(productNames.map(async (productName) => {
                return await productName.getText();
            }));

            await expect(productsPage.checkArray(namesAscending)).toBe("Ascending")
        })
    })

    describe("Filter product price Ascending", () => {
        it("Product Price filtered ascending", async () => {
            await productsPage.btnFilter.click()
            await productsPage.btnPriceAscending.click()

            const productPrices = await $$('(//android.widget.TextView[@content-desc="store item price"])');
            
            const pricesAscending = await Promise.all(productPrices.map(async (productPrice) => {
                const priceText = await productPrice.getText();
                return parseFloat(priceText.replace('$', ''));
            }));

            await expect(productsPage.checkArray(pricesAscending)).toBe("Ascending")
        })
    })

    describe("Filter product price Descending", () => {
        it("Product Price filtered descending", async () => {
            await productsPage.btnFilter.click()
            await productsPage.btnPriceDescending.click()
            await driver.pause(1000)

            const productPrices = await $$('(//android.widget.TextView[@content-desc="store item price"])');
            
            const pricesDescending = await Promise.all(productPrices.map(async (productPrice) => {
                const priceText = await productPrice.getText();
                return parseFloat(priceText.replace('$', ''));
            }));

            await expect(productsPage.checkArray(pricesDescending)).toBe("Descending")
        })
    })
})