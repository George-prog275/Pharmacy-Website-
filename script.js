const buyButtons = document.querySelectorAll('.buy-button');
const cartItems = document.getElementById('cart-items');

buyButtons.forEach(button => {
    button.addEventListener('click', function() {
        const product = this.getAttribute('data-product');
        const price = this.getAttribute('data-price');
        const cartItem = document.createElement('li');
        cartItem.textContent = `${product} - ${price}`;
        cartItems.appendChild(cartItem);
    });
});
