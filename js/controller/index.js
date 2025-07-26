'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#todoForm');
    const submitBtn = form.querySelector('[type="submit"]');
    const todoContainer = document.getElementById('todoItems');
    formValidation(form, submitBtn);
    const todos = getTodos();
    renderAllTodos(todos);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const {title, description} = createUserInterface(form);
        const todo = new TodoItem(title, description);
        addTodo(todo);
        todoContainer.prepend(renderTodoItem(todo));
        clearForm(form);
    });
    todoContainer.addEventListener('click', (e) => {
        const target = e.target;
        const parent = target.closest('[data-id]');
        const id = parent?.dataset.id;
        if (target.classList.contains('delete-btn')) {
            deleteTodo(id);
            removeTodoFromList(id);
        }
        if (target.classList.contains('toggle-done')) {
            const todos = getTodos();
            const currentTodo = todos.find(todo => todo.id === id);
            const newDoneValue = !currentTodo.done;
            toggleTodo(id);
            toggleTodoDOM(id, newDoneValue);
        }
    });
    const removeAllBtn = document.querySelector('.remove-all');
    removeAllBtn.addEventListener('click', (e) => {
        saveTodos([]);
        renderAllTodos([]);
    });
});
