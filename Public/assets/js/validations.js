//Validate fo empty inputs
const validateEmptyInputs = (inputs, errEl) => {
    let helper = true
    for (const input of inputs) {
        if (input.value === '') {
            errEl.innerText = 'Please fill all input areas.'
            errEl.style.background = "#F5EBEB";
            return helper = false
        }
    }
    return helper
};

//Validate Email and confirm email
const validateMail = (mail, errEl) => {
    let helper = false
    const passCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    mail.value.match(passCheck) ? helper = true : helper = false;
    if (helper) {
        return helper
    } else {
        errEl.innerText = 'Invalid mail plaese check again.'
        errEl.style.background = "#F5EBEB";
        return helper
    }
};

//Validate password
const valiadatePassword = (input, confirmInput, errEl) => {
    let helper = false
    const passCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    input.value.match(passCheck) && input.value === confirmInput.value ? helper = true : helper = false;
    if (helper) {
        return helper
    } else {
        errEl.innerText = 'Invalid password, check for at least one numeric digit and a special character and 7-15 characters.'
        errEl.style.background = "#F5EBEB";
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
        errEl.innerText = 'Please make sure you check the terms and conditions before Sign in.'
        errEl.style.background = "#F5EBEB";
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
        errEl.innerText = 'Invalid Name or Last namem only letters allowed.'
        errEl.style.background = "#F5EBEB";
        return helper
    }
};


