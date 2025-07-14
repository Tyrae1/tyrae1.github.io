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