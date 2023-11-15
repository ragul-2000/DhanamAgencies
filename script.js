document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const price = parseFloat(product.getAttribute('data-price'));
        const quantityInput = product.querySelector('.quantity-input');
        const calculatedPriceSpan = product.querySelector('.calculated-price');

        quantityInput.addEventListener('input', function() {
            const quantity = parseInt(quantityInput.value) || 0;
            const totalPrice = price * quantity;
            calculatedPriceSpan.textContent = totalPrice.toFixed(2);
        });
    });
});
