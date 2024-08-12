document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.querySelectorAll("tbody tr");
    const cartTotal = document.querySelector("#cart-bottom .total p:last-child");

    function updateCartTotal() {
        let total = 0;
        cartItems.forEach(item => {
            const quantityInput = item.querySelector('input[type="number"]');
            const price = parseFloat(item.querySelector('td:nth-child(4) h5').textContent.replace('$', ''));
            const totalElement = item.querySelector('td:nth-child(6) h5');

            const itemTotal = price * quantityInput.value;
            totalElement.textContent = `$${itemTotal.toFixed(2)}`;
            total += itemTotal;
        });
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    // Update cart total on quantity change
    cartItems.forEach(item => {
        const quantityInput = item.querySelector('input[type="number"]');
        quantityInput.addEventListener('input', function () {
            updateCartTotal();
        });
    });

    // Remove item from cart
    cartItems.forEach(item => {
        const removeBtn = item.querySelector('td:first-child a');
        removeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            item.remove();
            updateCartTotal();
        });
    });

    // Initial cart total calculation
    updateCartTotal();
});