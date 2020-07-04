//Validate fo empty inputs
const validateEmptyInputs = (inputs, errEl) => {
    let helper = true
    for (const input of inputs) {
        if (input.value === '') {
            errEl.innerText = 'Please fill all input fileds.';
            return helper = false
        }
    }
    return helper
};

//Validate Email 
const validateMail = (mail, errEl) => {
    let helper = false
    const mailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    mail.value.match(mailCheck) ? helper = true : helper = false;
    if (helper) {
        return helper
    } else {
        errEl.innerText = 'Invalid mail plaese check again.';
        return helper
    }
};

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

//Validate password adn confrim password(optional)
const valiadatePassword = (input, errEl, confirmInput = true) => {
    let helper = false
    const passCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    input.value.match(passCheck) && input.value === confirmInput.value || confirmInput.value === undefined ? helper = true : helper = false;
    if (helper) {
        return helper
    } else {
        errEl.innerText = 'Invalid password, check for at least one numeric digit and a special character and 7-15 characters.';
        return helper
    }
};

//Validate checked terms
const valiadateTerms = (checkInput, errEl) => {
    let helper = false
    checkInput.checked ? helper = true : helper = false
    if (helper) {
        return helper
    } else {
        errEl.innerText = 'Please make sure you check the terms and conditions before Sign in.';
        return helper
    }
};

//Validate letters only
const valiadateNameLname = (input, errEl) => {
    let helper = false
    const lettersCheck = /^[a-zA-Z]+$/;
    input.value.match(lettersCheck) ? helper = true : helper = false;
    if (helper) {
        return helper
    } else {
        errEl.innerText = 'Invalid Name or Last namem only letters allowed.';
        return helper
    }
};

////////////////////////////////////////////////////////////

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

// Form Error/Success Alerts
const successMsgStyle = (message) => {
    message.style.color = "#21a34a";
    message.style.borderColor = "#21a34a";
    message.style.backgroundColor = "#dbffe7";
}

const errorMsgStyle = (message) => {
    message.style.color = "red";
    message.style.borderColor = "red";
    message.style.backgroundColor = "#ffebeb;";
}


