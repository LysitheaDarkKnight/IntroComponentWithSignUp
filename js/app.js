const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('#sign-up__form');
const message = document.querySelector('.message');

form.addEventListener('submit', e => {
    e.preventDefault();

    if (validateInputs()){
        console.log(12) 

        form.reset()
    };

    });

function setError (element, msg) {
    const inputControl = element.nextElementSibling.nextElementSibling;
    inputControl.previousElementSibling.style.display = 'block';
    inputControl.previousElementSibling.previousElementSibling.style.borderColor = 'hsl(0, 100%, 74%)';
    inputControl.innerText = msg
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

function setSuccess (element) {
    const inputControl = element.nextElementSibling.nextElementSibling;
    inputControl.previousElementSibling.style.display = 'none';
    inputControl.previousElementSibling.previousElementSibling.style.borderColor = '#28a745'
    inputControl.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

function isValidFirstName (firstName) {
    const re = /^[A-Za-z]{2,10}$/;
    return re.test(String(firstName).toLowerCase());
}

function isValidLastName (lastName) {
    const re = /^[A-Za-z]{2,10}$/;
    return re.test(String(lastName).toLowerCase());
}

function isValidEmail (email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function isValidPassword (password) {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(String(password).toLowerCase());
}

function validateInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    let valid = true;

    if(firstNameValue === '') {
        setError(firstName, 'First name is required');

        valid = false;
    } else if (!isValidFirstName(firstNameValue)) {
        setError(firstName, 'First name should be between 2 and 10 characters');

        valid = false;
    } else {
        setSuccess(firstName);
    }
    if(lastNameValue === '') {
        setError(lastName, 'Last name is required');

        valid = false;
    } else if (!isValidLastName(lastNameValue)) {
        setError(lastName, 'Last name should be between 2 and 10 characters');

        valid = false;
    } else {
        setSuccess(lastName);
    }
    if(emailValue === '') {
        setError(email, 'Email is required');

        valid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');

        valid = false;
    } else {
        setSuccess(email);
    }
    if(passwordValue === '') {
        setError(password, 'Password is required');

        valid = false;
    } else if (!isValidPassword(passwordValue)) {
        setError(password, 'Minimum eight characters, at least one letter and one number');

        valid = false;
    } else {
        setSuccess(password);
    }

    return valid;
};


