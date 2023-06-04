class cartPage {
    get btnProceedToCheckout () {
        return $('~Proceed To Checkout button')
    }

    get iconCart () {
        return $('//android.view.ViewGroup[@content-desc="cart badge"]')
    }

    get numberInCart () {
        return $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.TextView')
    }

    get productRow () {
        return $('~product row')
    }

    get noItem () {
        return $('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView')
    }

    get btnGoToShopping () {
        return $('~Go Shopping button')
    }

    get plusButton () {
        return $('~counter plus button')
    }

    get minusButton () {
        return $('~counter minus button')
    }

    get totalPrice () {
        return $('~total price')
    }

    get btnRemove () {
        return $('~remove item')
    }
}

module.exports = new cartPage()