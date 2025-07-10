'use strict';

function createUserInterface() {

    const form = document.querySelector('[data-form]');

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.setAttribute('disabled', 'disabled');
    submitBtn.disabled = true;

    const inputs = Array.from(form.querySelectorAll('input'));

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const {target} = e;

        // Get data from the form
        const data = inputs.reduce((acc, {name, value}) =>{
            acc[name] = value;
            return acc;
        }, {});

        target.reset();
        disabledHandler();
        dataBase.setData(data);
        contactRender();
        console.log(dataBase.getData());
    });

    const disabledHandler = (e) => {
        let isInputFilled = true;
        for(let i = 0; i < inputs.length; i++) {
            if(!inputs[i].value.trim().length) {
                isInputFilled = false;
                break;
            }
        }

        if(isInputFilled) {
            submitBtn.removeAttribute('disabled')
            submitBtn.disabled = false;
        } else {
            submitBtn.setAttribute('disabled', 'disabled');
            submitBtn.disabled = true;
        }
    }
    form.addEventListener('input', disabledHandler)
}

//Function that renders contact list
function contactRender() {
    const list = document.getElementById('contactList');
    list.innerHTML = '';
    const searchInput = document.getElementById('searchInput')?.value.trim().toLowerCase() || '';
    const contacts = dataBase.getData().filter(({firstName, lastName}) => {
        const fullName = `${firstName} ${lastName}`.toLowerCase();
        return fullName.includes(searchInput);
    });
    contacts.forEach(({firstName, lastName, id}) => {
        const li = document.createElement('li');
        li.className = `list-group-item d-flex align-items-center justify-content-between`;
        li.innerHTML = `
        <div class="text-black"><b>${firstName} ${lastName}</b></div>
            <button class="btn btn-danger btn-sm" data-id="${id}">Delete</button>
        `;
        list.appendChild(li);
    });
}
// Delete button
document.getElementById('contactList').addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON'){
        const id = +e.target.dataset.id;
        if(!isNaN(id)) {
            dataBase.deleteData({id});
            contactRender();
        }
    }
});
// Search listener
document.getElementById('searchInput').addEventListener('input', () => {
    contactRender();
});

createUserInterface()
contactRender();