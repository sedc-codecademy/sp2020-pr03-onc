const fullName = document.querySelector('.fullName');
const email = document.querySelector('.email');
const subject = document.querySelector('.subject');
const message = document.querySelector('.message');
const sendBtn = document.querySelector('.submitBtn');
const errorMsg = document.querySelector('.error');
const userInputs = [fullName, email, subject, message];

// Validations

const validateEmptyInputs = inputs => {
    let helper = true
    for (const input of inputs) {
        if (input.value === '') {
            errorMsg.innerHTML = 'Please fill all input areas.'
            return helper = false
        }
    }
    return helper
};

const validateName = fullName => {
    let helper = false
    const nameRegex = /^[a-zA-Z'- ]+$/;
    fullName.value.match(nameRegex) ? helper = true : helper = false;
    errorMsg.innerHTML = 'Please enter a valid name.';
    return helper
};

const validateEmail = email => {
    let helper = false;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    email.value.match(emailRegex) ? helper = true : helper = false;
    errorMsg.innerHTML = 'Please enter a valid Email.';
    return helper
}

const validateSubject = subject => {
    let helper = false;
    subject.value.length < 50 ? helper = true : helper = false;
    errorMsg.innerHTML = 'Subject must be less than 50 characters.';
    return helper
}

const validateMessage = message => {
    let helper = false;
    message.value.length > 50 ? helper = true : helper = false;
    errorMsg.innerHTML = 'Message must contain at least 50 characters.';
    return helper
}

const validateContactForm = () => {
    if (!validateEmptyInputs(userInputs) || !validateName(fullName) || !validateEmail(email)) {

    }
}

