const container = document.getElementById('available-items');

const cart = [];
const hardCodedItems = [
    {
        name: 'T-shirt',
        price: 2000,
        quantity: 4
    },
    {
        name: 'Shoes',
        price: 5000,
        quantity: 2
    },
    {
        name: 'Pants',
        price: 3000,
        quantity: 3
    },
    {
        name: 'Jeans',
        price: 4000,
        quantity: 1
    },
    {
        name: 'Socks',
        price: 1000,
        quantity: 5
    }
]

const addToCart = (item_index) => {
    const item = hardCodedItems[item_index];
    cart.push(item);
    console.log(cart);
}  

hardCodedItems.forEach((item, index) => {
    const li = document.createElement('li');
    li.id = `${index}`;
    const h3 = document.createElement('h3');
    h3.textContent = item.name;
    li.appendChild(h3);

    const p = document.createElement('p');
    p.textContent = `Price: ${item.price}`;
    li.appendChild(p);

    const p2 = document.createElement('p');
    p2.textContent = `Quantity: ${item.quantity}`;
    li.appendChild(p2);

    const button = document.createElement('button');
    button.textContent = 'Add to cart';
    button.onclick = () => addToCart(index);
    li.appendChild(button);

    if (container) {
        container.appendChild(li);
    }
});

window.cart = cart;