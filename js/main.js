const products = [{
        id: 1,
        title: 'NoteBook',
        price: 2000,
        image: 'images/pic.jpg'
    },
    {
        id: 2,
        title: 'Mouse',
        price: 20,
        image: 'images/pic.jpg'
    },
    {
        id: 3,
        title: 'Keyboard',
        price: 200,
        image: 'images/pic.jpg'
    },
    {
        id: 4,
        title: 'Gamepad',
        price: 50,
        image: 'images/pic.jpg'
    },

]
const renderProduct = (item) =>
    `<div class="product-item">
        <img src="${item.image}" class="product-item__img" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.price}</p>
        <button class="btn buy-btn">Купить</button>
    </div>`;

const renderPage = list => {
    const productList = list.map(item => renderProduct(item));
    console.log(productList.join(''));
    document.querySelector('.products').innerHTML = productList.join('');
}

console.log(products);

renderPage(products);