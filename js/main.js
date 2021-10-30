class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render(); //вывод товаров на страницу
        this.sumGoods = 0;
        this.getSum();
    }
    _fetchProducts() {
        this.goods = [{
                id: 1,
                title: 'NoteBook',
                price: 2000,
                img: 'https://via.placeholder.com/200x150'
            },
            {
                id: 2,
                title: 'Mouse',
                price: 20,
                img: 'https://via.placeholder.com/200x150'
            },
            {
                id: 3,
                title: 'Keyboard',
                price: 200,
                img: 'https://via.placeholder.com/200x150'
            },
            {
                id: 4,
                title: 'Gamepad',
                price: 50,
                img: 'https://via.placeholder.com/200x150'
            },
        ]
    }
    getSum() {
        for (let i = 0; i < this.goods.length; i++) {
            this.sumGoods += this.goods[i].price;
        }
        console.log(`Общая стоимость всех товаров составляет ${this.sumGoods}`);
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }

}



class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = product.img;
    }
    render() {
        return `<div class="product-item">
                <img src="${this.img}" class="product-item__img" alt="${this.title}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="btn buy-btn">Купить</button>
            </div>`
    }

}

let list = new ProductList();


class AddedCart {
    constructor(container = '.buy-btn') {
        this.addProduct();
    }


}

class Cart {
    constructor(container = '.btn-cart') {
        this.removeProduct();
        this.updateCart();

    }
}