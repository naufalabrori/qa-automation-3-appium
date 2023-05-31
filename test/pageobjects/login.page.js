class login {
    get loginTittle () {
        return $('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView')
    }

    get usernameField () {
        return $('~Username input field')
    }

    get passwordField () {
        return $('~Password input field')
    }

    get btnLogin () {
        return $('//android.view.ViewGroup[@content-desc="Login button"]/android.widget.TextView')
    }

    get usernameError () {
        return $('//android.view.ViewGroup[@content-desc="Username-error-message"]/android.widget.TextView')
    }

    get passwordError () {
        return $('//android.view.ViewGroup[@content-desc="Password-error-message"]/android.widget.TextView')
    }

    get logoutSuccess () {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.TextView')
    }

    async login (username, password) {
        await this.usernameField.setValue(username)
        await this.passwordField.setValue(password)
        await this.btnLogin.click()
    }
}

module.exports = new login()