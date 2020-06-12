// Validate all empty inputs
const validateEmptyInputs = (inputs, errorMsg) => {
    let helper = true
    for (const input of inputs) {
        if (input.value === '') {
            errorMsg.innerHTML = 'Please fill out all input areas'
            return helper = false
        }
    }
    return helper
};

// Validate Full Name
const validateName = (fullName, errorMsg) => {
    let helper = false
    const nameRegex = /^[a-z ,.'-]+$/i;
    if (fullName.value.match(nameRegex) && fullName.value.length >= 5) {
        helper = true;
    } else {
        errorMsg.innerHTML = 'Please enter a valid name';
    }
    return helper
};

// Validate Email
const validateEmail = (email, errorMsg) => {
    let helper = false;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value.match(emailRegex)) {
        helper = true
    } else {
        errorMsg.innerHTML = 'Please enter a valid Email';
    }
    return helper
}

// Validate subject of message
const validateSubject = (subject, errorMsg) => {
    let helper = false;
    if (subject.value.length < 50) {
        helper = true;
    } else {
        errorMsg.innerHTML = 'Subject must be less than 50 characters';
    }
    return helper
}

const validateCity = (city, errorMsg) => {
    let helper = false;
    if (city.value !== "") {
        helper = true;
    } else {
        errorMsg.innerHTML = 'You must select a city.';
    }
    return helper
}

// Validate content of message
const validateMessage = (message, errorMsg) => {
    let helper = false;
    message.value.length > 50 ? helper = true : helper = false;
    errorMsg.innerHTML = 'Message must contain at least 50 characters.';
    console.log(errorMsg.innerText)

    if(message.value.length > 50) {
        helper = true;
    } else {
        errorMsg.innerHTML = 'Message must contain at least 50 characters';
    }
    return helper
}