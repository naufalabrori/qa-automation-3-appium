class productsPage {
    get productTittle () {
        return $('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView')
    }

    get productName () {
        return $('(//android.widget.TextView[@content-desc="store item text"])[1]')
    }

    get btnFilter () {
        return $('~sort button')
    }

    get btnNameAscending () {
        return $('~nameAsc')
    }

    get btnNameDescending () {
        return $('~nameDesc')
    }

    get btnPriceAscending () {
        return $('~priceAsc')
    }

    get btnPriceDescending () {
        return $('~priceDesc')
    }

    checkArray(array) {
        var aa = array.slice(1);
        if (aa.every((a, i) => array[i] <= a)) {
            return "Ascending";
        }
        if (aa.every((a, i) => array[i] >= a)) {
            return "Descending";
        }
        return "Unsorted";
    }
}

module.exports = new productsPage()