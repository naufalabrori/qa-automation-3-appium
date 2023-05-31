class checkoutReview {
    get reviewTittle () {
        return $('//android.widget.ScrollView[@content-desc="checkout review order screen"]/android.view.ViewGroup/android.widget.TextView')
    }

    get reviewOrderScreen () {
        return $('~checkout review order screen')
    }

    get btnPlaceOrder () {
        return $('~Place Order button')
    }
}

module.exports = new checkoutReview()