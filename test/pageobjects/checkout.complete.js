class checkoutComplete {
    get checkoutCompleteScreen () {
        return $('//android.view.ViewGroup[@content-desc="checkout complete screen"]/android.widget.ScrollView/android.view.ViewGroup')
    }

    get checkoutCompleteTittle () {
        return $('//android.view.ViewGroup[@content-desc="checkout complete screen"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[1]')
    }
}

module.exports = new checkoutComplete()