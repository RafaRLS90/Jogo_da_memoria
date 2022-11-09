const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');

const validateInput = (event) => {
    if (EventTarget.value.length > 2) {
        button.removeAttribute('disable');
    }
} 

input.addEventListener('input', validateInput);