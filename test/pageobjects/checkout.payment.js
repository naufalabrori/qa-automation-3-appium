class checkoutPayment {
    get paymentTittle () {
        return $('//android.widget.ScrollView[@content-desc="checkout payment screen"]/android.view.ViewGroup/android.widget.TextView[1]')
    }

    get inputFullname () {
        return $('~Full Name* input field')
    }

    get inputCardNumber () {
        return $('~Card Number* input field')
    }

    get inputExpirationDate () {
        return $('~Expiration Date* input field')
    }

    get inputSecurityCode () {
        return $('~Security Code* input field')
    }

    get btnReviewOrder () {
        return $('~Review Order button')
    }

    get errorFullname () {
        return $('//android.view.ViewGroup[@content-desc="Full Name*-error-message"]/android.widget.TextView')
    }

    get errorCardNumber () {
        return $('//android.view.ViewGroup[@content-desc="Card Number*-error-message"]/android.widget.TextView')
    }

    get errorExpirationDate () {
        return $('//android.view.ViewGroup[@content-desc="Expiration Date*-error-message"]/android.widget.TextView')
    }

    get errorSecurityCode () {
        return $('//android.view.ViewGroup[@content-desc="Security Code*-error-message"]/android.widget.TextView')
    }

    async inputData (fullname, cardNumber, expirationDate, securityCode) {
        await this.inputFullname.setValue(fullname)
        await this.inputCardNumber.setValue(cardNumber)
        await this.inputExpirationDate.setValue(expirationDate)
        await this.inputSecurityCode.setValue(securityCode)
        await this.btnReviewOrder.click()
    }
}

module.exports = new checkoutPayment()