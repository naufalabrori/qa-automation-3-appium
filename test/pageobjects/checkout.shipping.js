class shippingAddress {
    get shippingAddressTittle () {
        return $('//android.widget.ScrollView[@content-desc="checkout address screen"]/android.view.ViewGroup/android.widget.TextView[1]')
    }

    get inputFullname () {
        return $('~Full Name* input field')
    }
    
    get inputaddressLine1 () {
        return $('~Address Line 1* input field')
    }

    get inputAddressLine2 () { //tidak wajib jadi diskip aja
        return $('~Address Line 2 input field')
    }

    get inputCity () {
        return $('~City* input field')
    }

    get inputState () { //tidak wajib jadi diskip aja
        return $('~State/Region input field')
    }

    get inputZipCode () {
        return $('~Zip Code* input field')
    }

    get inputCountry () {
        return $('~Country* input field')
    }

    get btnToPayment () {
        return $('~To Payment button')
    }

    get errorFullname () {
        return $('//android.view.ViewGroup[@content-desc="Full Name*-error-message"]/android.widget.TextView')
    }
    
    get errorAddressLine1 () {
        return $('//android.view.ViewGroup[@content-desc="Address Line 1*-error-message"]/android.widget.TextView')
    }

    get errorCity () {
        return $('//android.view.ViewGroup[@content-desc="City*-error-message"]/android.widget.TextView')
    }

    get errorZip () {
        return $('//android.view.ViewGroup[@content-desc="Zip Code*-error-message"]/android.widget.TextView')
    }

    get errorCountry () {
        return $('//android.view.ViewGroup[@content-desc="Country*-error-message"]/android.widget.TextView')
    }

    async inputData (fullname, address, city, Zip, country) {
        await this.inputFullname.setValue(fullname)
        await this.inputaddressLine1.setValue(address)
        await this.inputCity.setValue(city)
        await this.inputZipCode.setValue(Zip)
        await this.inputCountry.setValue(country)
        await this.btnToPayment.click()
    }
}

module.exports = new shippingAddress()