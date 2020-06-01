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
            errorMsg.innerHTML = 'Please fill out all input areas'
            return helper = false
        }
    }
    return helper
};

const validateName = fullName => {
    let helper = false
    const nameRegex = /^[a-z ,.'-]+$/i;
    if (fullName.value.match(nameRegex) && fullName.value.length >= 5) {
        helper = true;
    } else {
        errorMsg.innerHTML = 'Please enter a valid name';
    }
    return helper
};

const validateEmail = email => {
    let helper = false;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value.match(emailRegex)) {
        helper = true
    } else {
        errorMsg.innerHTML = 'Please enter a valid Email';
    }
    return helper
}

const validateSubject = subject => {
    let helper = false;
    if (subject.value.length < 50) {
        helper = true;
    } else {
        errorMsg.innerHTML = 'Subject must be less than 50 characters';
    }
    return helper
}

const validateMessage = message => {
    let helper = false;
    if(message.value.length > 50) {
        helper = true;
    } else {
        errorMsg.innerHTML = 'Message must contain at least 50 characters';
    }
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
            // Save Information In Object
            const formInfo = {};
            formInfo.fullName = fullName.value;
            formInfo.email = email.value;
            formInfo.subject = subject.value;
            formInfo.message = message.value;
            console.log(formInfo);
            // Send Succesfull Message
            errorMsg.style.color = "#0000009c";
            errorMsg.innerHTML = 'Your message was sent successfully!';
            // Clear Input Areas
            form.reset();
        } else {
            errorMsg.style.color = "#bb0012";
        }
    })
}

sendEmail();

//Adding event listiener on all get started buttons
(function getStartedButtons(){
    Array.from(document.querySelectorAll('.register')).forEach(element => {
        element.addEventListener('click', () => {
            localStorage.removeItem('initCounter');
            localStorage.setItem('userQA', JSON.stringify([]))
            window.location.href = './getStarted.html';
        });
    });
})();
