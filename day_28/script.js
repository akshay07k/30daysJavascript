const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutFormSection = document.getElementById('checkout-form');
const checkoutBtn = document.getElementById('checkout-btn');
const cancelCheckoutBtn = document.getElementById('cancel-checkout');
let products = [];
let cart = [];

// Importing data from products.json
(async function () {
    try {
        const res = await fetch('products.json');
        products = await res.json();
        console.log(products);

        displayProducts(products);
    } catch (error) {
        console.error('Error fetching the products:', error);
    }
})();

function displayProducts(products) {
    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
}

function addToCart(index) {
    const product = products[index];
    const cartItem = cart.find(item => item.name === product.name);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartDisplay();
}

function updateCartDisplay() {
    cartItems.innerHTML = cart.map((item, index) => `
        <li>
            ${item.name} - $${item.price.toFixed(2)} x ${item.quantity}
            <button onclick="removeFromCart(${index})">Remove</button>
        </li>
    `).join(''); // Fixed missing join('')
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotal.innerText = `Total: $${total.toFixed(2)}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}


checkoutBtn.addEventListener('click', () => {
    if (cart.length > 0) {
        checkoutFormSection.style.display = 'block';
    } else {
        alert('Your cart is empty. Add items to the cart before proceeding to checkout.');
    }
});


cancelCheckoutBtn.addEventListener('click', () => {
    checkoutFormSection.style.display = 'none';
});

const checkoutForm = document.getElementById('checkout');
checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
    cart = [];
    updateCartDisplay();
    checkoutFormSection.style.display = 'none';
});
