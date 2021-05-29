const products = [
    {id: 1, title: 'Notebook', price: 1000},
    {id: 2, title: 'Mouse', price: 100},
    {id: 3, title: 'Keyboard', price: 250},
    {id: 4, title: 'Gamepad', price: 150},
];

const renderProduct = (title, price, img="http://dummyimage.com/150x60/c0c0c0") => 
    `<div class="product-item">
    <br>
    <img src=${img}>
    <h3>${title}</h3>
    <p>${price}</p>
    <button class="by-btn">Добавить</button>
    </div>`;


const renderProducts = (list) => 
    document.querySelector('.products').innerHTML = list.map((product) => 
    renderProduct(product.title, product.price)).join("");

renderProducts(products);
