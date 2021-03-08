const inputEl = document.querySelector('#validation-input');

const checkTextLength = (event) => {
    if (event.target.value === '') {
        inputEl.classList.remove('valid');
        inputEl.classList.remove('invalid');
    } else if (event.target.value.length === +inputEl.dataset.length) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    };
}

inputEl.addEventListener('blur', checkTextLength)

