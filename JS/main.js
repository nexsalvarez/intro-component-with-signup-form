const formFirstName = document.querySelector('#first-name');
const formLastName = document.querySelector('#last-name');
const formEmail = document.querySelector('#email');
const formPassword = document.querySelector('#password');
const formButton = document.querySelector('button');
const errorFirstName = document.querySelector('#name-error');
const errorLastName = document.querySelector('#last-name-error');
const errorEmail = document.querySelector('#invalid-email');
const errorPassword = document.querySelector('#password-error');

const containerFirstName = document.querySelector('#container-form-name');
const containerLastName = document.querySelector('#container-form-last-name');
const containerEmail = document.querySelector('#container-form-email');
const containerPassword = document.querySelector('#container-form-password');

function validateFormInputs () {
    let textFirstNameError = 'First Name cannot be empty';
    let textLastNameError = 'Last Name cannot be empty';
    let textEmailError = 'Looks like this is not an email';
    let textPasswordError = 'Password cannot be empty';

    let newImage1 = document.createElement('img');
    let newImage2 = document.createElement('img');
    let newImage3 = document.createElement('img');
    let newImage4 = document.createElement('img');
    newImage1.classList.add('icon-error');
    newImage2.classList.add('icon-error');
    newImage3.classList.add('icon-error');
    newImage4.classList.add('icon-error');
    newImage1.src = '../images/icon-error.svg';
    newImage2.src = '../images/icon-error.svg';
    newImage3.src = '../images/icon-error.svg';
    newImage4.src = '../images/icon-error.svg';

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(formFirstName.value === '') {
        errorFirstName.innerHTML = textFirstNameError;
        containerFirstName.appendChild(newImage1);
    }
    if (formLastName.value === '') {
        errorLastName.innerHTML = textLastNameError;
        containerLastName.appendChild(newImage2);
    }
    if (formPassword.value === '') {
        errorPassword.innerHTML = textPasswordError;
        containerEmail.appendChild(newImage3);
    }
    if (formEmail.value.match(validRegex)) {
        return true;
    } else {
        errorEmail.innerHTML = textEmailError;
        formEmail.classList.add('red-text');
        containerPassword.appendChild(newImage4);
        return false
    }
}

formButton.addEventListener('click', validateFormInputs);