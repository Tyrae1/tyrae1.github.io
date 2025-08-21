'use strict';
document.addEventListener('DOMContentLoaded', () => {
    let currentFilter = 'all';
    const form = document.querySelector('#todoForm');
    const submitBtn = form.querySelector('[type="submit"]');
    const todoContainer = document.getElementById('todoItems');
    formValidation(form, submitBtn);
    const todos = getTodos();
    renderAllTodos(todos);
    updateCounters();
    applyFilter(currentFilter);
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', ()=> {
            currentFilter = btn.dataset.filter;
            applyFilter(currentFilter);
        });
    });
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const {title, description} = createUserInterface(form);
        const todo = new TodoItem(title, description);
        addTodo(todo);
        const el = renderTodoItem(todo);
        todoContainer.prepend(el);
        applyFilterToItem(el, todo, currentFilter);
        clearForm(form);
        updateCounters();
    });
    todoContainer.addEventListener('click', (e) => {
        const target = e.target;
        const parent = target.closest('[data-id]');
        const id = parent?.dataset.id;
        if (target.classList.contains('delete-btn')) {
            deleteTodo(id);
            removeTodoFromList(id);
            updateCounters();
        }
        if (target.classList.contains('toggle-done')) {
            const todos = getTodos();
            const currentTodo = todos.find(todo => todo.id === id);
            const newDoneValue = !currentTodo.done;
            toggleTodo(id);
            toggleTodoDOM(id, newDoneValue);
            updateCounters();
            applyFilterToItem(parent, {...currentTodo, done: newDoneValue}, currentFilter);
        }
    });
    const removeAllBtn = document.querySelector('.remove-all');
    removeAllBtn.addEventListener('click', (e) => {
        saveTodos([]);
        renderAllTodos([]);
        applyFilter(currentFilter);
        updateCounters();
    });
});
