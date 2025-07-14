'use strict';
function renderProductList(){
    const products = getProducts('products');
    const tbody = document.querySelector('#productTable tbody');
    tbody.innerHTML = '';
    products.forEach(product => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
    <td>${product.id}</td>
    <td>${product.prodName}</td>
    <td>${product.prodDescr}</td>
    <td>$${product.prodPrice}</td>
    <td>
    <button class="btn btn-sm btn-warning edit-btn"><i class="bi bi-pencil" aria-hidden="true"></i></button>
    <button class="btn btn-sm btn-danger delete-btn"><i class="bi bi-trash" aria-hidden="true"></i></button>
</td>
    `;
        tr.querySelector('.edit-btn').addEventListener('click', (e) => {
            setSelectedProductID(product.id);
            window.location.href = 'edit.html';
        });
        tr.querySelector('.delete-btn').addEventListener('click', (e) => {
            deleteProduct(product.id);
            renderProductList();
        });
        tbody.appendChild(tr);
    });
}
document.addEventListener('DOMContentLoaded', () =>{
    renderProductList();
});