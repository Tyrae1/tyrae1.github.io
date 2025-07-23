'use strict';
const STORAGE_KEY_TODOS = 'todos';
function TodoItem(title, description) {
    this.id = Date.now().toString();
    this.title = title;
    this.description = description;
    this.done = false;
    this.createdAt = new Date().toISOString();
}
function getTodos() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_TODOS)) || [];
}
function saveTodos(todos) {
    localStorage.setItem(STORAGE_KEY_TODOS, JSON.stringify(todos));
}
function addTodo(todo) {
    const todos = getTodos();
    todos.unshift(todo);
    saveTodos(todos);
}
function deleteTodo(id) {
    const todos = getTodos().filter(p=>p.id !== id);
    saveTodos(todos);
}
function updateTodo(updatedTodo) {
    const todos = getTodos().map(p=>p.id === updatedTodo.id ? updatedTodo : p);
    saveTodos(todos);
}
function toggleTodo(id) {
    const todos = getTodos().map(todo =>
    todo.id === id ? {...todo, done: !todo.done} : todo);
    saveTodos(todos);
}
