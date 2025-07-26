'use strict';
function createUserInterface(form) {
    const inputs = Array.from(form.querySelectorAll('input, textarea'));
    return inputs.reduce((acc, {name, value}) => {
        acc[name] = value.trim();
        return acc;
    }, {});
}
function formValidation(form, submitBtn) {
    const inputs = Array.from(form.querySelectorAll('input, textarea'));
    submitBtn.removeAttribute('disabled');
    submitBtn.disabled = false;
    const disabledHandler = () => {
        let isInputFilled = true;
        for (let i = 0; i < inputs.length; i++) {
            if (!inputs[i].value.trim().length) {
                isInputFilled = false;
                break;
            }
        }
        if (isInputFilled) {
            submitBtn.removeAttribute('disabled')
            submitBtn.disabled = false;
        } else {
            submitBtn.setAttribute('disabled', 'disabled');
            submitBtn.disabled = true;
        }
    }
    form.addEventListener('input', disabledHandler);
    disabledHandler();
}
function showErrors(errors) {
    alert(errors.join('\n'));
}
function clearForm(form) {
    form.reset();
}
function renderTodoItem(todo) {
    const col = document.createElement('div');
    col.classList.add('col-4');
    col.dataset.id = todo.id;
    col.innerHTML = `
    <div class="taskWrapper border p-3 rounded shadow-sm">
      <div class="taskHeading fw-bold">${todo.title}</div>
      <div class="taskDescription mb-2 text-muted">${todo.description}</div>
      <hr>
      <label class="completed form-check">
        <input type="checkbox" class="form-check-input toggle-done" ${todo.done ? 'checked' : ''}>
        <span>Завершено?</span>
      </label>
      <hr>
      <button class="btn btn-danger btn-sm delete-btn">Удалить</button>
    </div>
  `;
    return col;
}
function renderAllTodos(todosArray) {
    const container = document.getElementById('todoItems');
    container.innerHTML = '';
    todosArray.forEach(todo => {
        const todoElement = renderTodoItem(todo);
        container.append(todoElement);
    });
}
function removeTodoFromList(id) {
    const element = document.querySelector(`[data-id="${id}"]`);
    if (element) {
        element.remove();
        }
}
function toggleTodoDOM(id, done) {
    const todoElement = document.querySelector(`[data-id="${id}"]`);
    if (!todoElement) return;
    const wrapper = todoElement.querySelector('.taskWrapper');
    const heading = todoElement.querySelector('.taskHeading');
    const description = todoElement.querySelector('.taskDescription');
    const checkbox = todoElement.querySelector('.toggle-done');
    checkbox.checked = done;
    if (done) {
        wrapper.classList.add('border-success', 'opacity-75');
        heading.classList.add('text-decoration-line-through');
        description.classList.add('text-muted');
} else {
        wrapper.classList.remove('border-success', 'opacity-75');
        heading.classList.remove('text-decoration-line-through');
        description.classList.remove('text-muted');
    }
}