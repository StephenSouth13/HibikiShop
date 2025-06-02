let cart = [];
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, idx) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} x${item.qty} <span>${item.price * item.qty}đ</span>
            <button onclick="removeCartItem(${idx})" style="color:red;background:none;border:none;cursor:pointer;">&times;</button>`;
        cartItems.appendChild(li);
        total += item.price * item.qty;
    });
    cartTotal.textContent = `Tổng: ${total.toLocaleString()}đ`;
}
function addToCart(name, price) {
    let found = cart.find(item => item.name === name);
    if (found) found.qty++;
    else cart.push({name, price, qty: 1});
    renderCart();
}
function removeCartItem(idx) {
    cart.splice(idx, 1);
    renderCart();
}
document.addEventListener('DOMContentLoaded', () => {
    renderCart();
    document.querySelectorAll('.add-cart-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.product-card');
            const name = card.querySelector('h3').textContent;
            const price = parseInt(card.querySelector('.price').textContent.replace(/\D/g, ''));
            addToCart(name, price);
        });
    });
    document.getElementById('checkout-btn').onclick = function() {
        alert('Chức năng thanh toán sẽ cập nhật sau!');
    };
});