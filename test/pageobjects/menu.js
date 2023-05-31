const Page = require('./page');

class menu extends Page {
    get openMenu () {
        return $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView')
    }

    get btnLogin () {
        return $('//android.view.ViewGroup[@content-desc="menu item log in"]/android.widget.TextView')
    }

    get btnLogout () {
        return $('//android.view.ViewGroup[@content-desc="menu item log out"]/android.widget.TextView')
    }

    get allertLogout () {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.TextView')
    }

    get confirmLogout () {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button[2]')
    }

    async clickMenu () {
        await this.openMenu.click()
    }

    async clickBtnLogin () {
        await this.btnLogin.click()
    }
}

module.exports = new menu()