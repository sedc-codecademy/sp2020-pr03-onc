// Input Variables
const form = document.getElementById('contactForm');
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
            errorMsg.innerHTML = 'Please fill out all input areas.'
            return helper = false
        }
    }
    return helper
};

const validateName = fullName => {
    let helper = false
    const nameRegex = /^[a-z ,.'-]+$/i;
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
    if (!validateEmptyInputs(userInputs) || !validateName(fullName) || !validateEmail(email) || !validateSubject(subject) || !validateMessage(message)) {
        return false
    } else {
        return true
    }
};

// Post Contact Form
const sendEmail = () => {
    sendBtn.addEventListener('click', () => {
        if (validateContactForm()) {
            errorMsg.style.background = "#8bc34a73";
            errorMsg.innerHTML = 'Your message was sent successfully!';
            form.reset();
        } else {
            errorMsg.style.background = "rgba(240, 128, 128, 0.705)";
        }
    })
}

sendEmail();