class productDetails {
    get btnAddToCart () {
        return $('~Add To Cart button')
    }

    get iconCart () {
        return $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView')
    }
}

module.exports = new productDetails()