'use strict';
const STORAGE_KEY_PRODUCTS = 'products';
const STORAGE_KEY_SELECTED_ID = 'selectedProductId';
function getProducts() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_PRODUCTS)) || [];
}
function saveProducts(products) {
    localStorage.setItem(STORAGE_KEY_PRODUCTS, JSON.stringify(products));
}
function addProduct(product) {
    const products = getProducts();
    products.unshift(product);
    saveProducts(products);
}
function deleteProduct(id) {
    const products = getProducts().filter(p=>p.id !== id);
    saveProducts(products);
}
function updateProduct(updatedProduct) {
    const products = getProducts().map(p=>p.id === updatedProduct.id ? updatedProduct : p);
    saveProducts(products);
}
function setSelectedProductID(id) {
    localStorage.setItem(STORAGE_KEY_PRODUCTS, id);
}
function getSelectedProductID() {
    return localStorage.getItem(STORAGE_KEY_SELECTED_ID);
}