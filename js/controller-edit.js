'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('[data-form]');
    const submitBtn = form.querySelector('[type="submit"]');
    formValidation(form, submitBtn);
    const selectedId = getSelectedProductID();
    const products = getProducts();
    const productToEdit = products.find(p => p.id === selectedId);
    if (!productToEdit) {
        alert('Product not found!');
        window.location.href = 'list.html';
        return;
    }
    form.querySelector('[name="prodName"]').value = productToEdit.prodName;
    form.querySelector('[name="prodDescr"]').value = productToEdit.prodDescr;
    form.querySelector('[name="prodPrice"]').value = productToEdit.prodPrice;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const updateData = createUserInterface(form);
        updateData.id = selectedId;
        updateProduct(updateData);
        clearForm(form);
        window.location.href = 'list.html';
    });
});