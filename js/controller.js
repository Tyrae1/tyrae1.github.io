'use strict';
//DOM initialization:
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('[data-form]');
    const submitBtn = form.querySelector('[type="submit"]');
    formValidation(form, submitBtn);
        form.addEventListener('submit', (e) => {
        e.preventDefault();
        const product = createUserInterface(form);
        if (isNaN(product.prodPrice) || Number(product.prodPrice) <= 0) {
        showErrors(['Price lower then 0!']);
        return;
        }
        product.id = Date.now().toString();
        addProduct(product);
        clearForm(form);
        window.location.href = 'list.html';
        });
});