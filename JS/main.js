const formFirstName = document.querySelector('#first-name');
const formLastName = document.querySelector('#last-name');
const formEmail = document.querySelector('#email');
const formPassword = document.querySelector('#password');
const formButton = document.querySelector('button');
const errorFirstName = document.querySelector('#name-error');
const errorLastName = document.querySelector('#last-name-error');
const errorEmail = document.querySelector('#invalid-email');
const errorPassword = document.querySelector('#password-error');

function validateFormInputs () {
    let textFirstNameError = 'First Name cannot be empty';
    let textLastNameError = 'Last Name cannot be empty';
    let textEmailError = 'Looks like this is not an email';
    let textPasswordError = 'Password cannot be empty';

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(formFirstName.value === '') {
        errorFirstName.innerHTML = textFirstNameError;
    }
    if (formLastName.value === '') {
        errorLastName.innerHTML = textLastNameError;
    }
    if (formPassword.value === '') {
        errorPassword.innerHTML = textPasswordError;
    }
    if (formEmail.value.match(validRegex)) {
        return true;
    } else {
        errorEmail.innerHTML = textEmailError;
        return false
    }
}

formButton.addEventListener('click', validateFormInputs);