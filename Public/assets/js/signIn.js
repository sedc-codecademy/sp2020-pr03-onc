// Input Variables
const name = document.getElementById('name');
const mail = document.getElementById('email');
const confirmMail = document.getElementById('confirm-email');
const password = document.getElementById('password');
const terms = document.getElementById('terms')
const userInputs = [name, mail, password];
const inputMsg = document.getElementById('input-msg');

//User class
class User {
    constructor(name, email, password, questionnarie) {
        this.role = 'user'
        this.name = name
        this.email = email
        this.password = password
        this.questionnarie = questionnarie
    };
};

//Validations
const validateEmptyInputs = inputs => {
    let helper = true
    for (const input of inputs) {
        if (input.value === '') {
            inputMsg.innerText = 'Please fill all input areas.'
            inputMsg.style.background = "#F5EBEB";
            return helper = false
        }
    }
    return helper
};

const validateMail = (mail, confirmation) => {
    let helper = false
    const passCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    mail.value.match(passCheck) && mail.value === confirmation.value ? helper = true : helper = false;
    if (helper) {
        return helper
    } else {
        inputMsg.innerText = 'Invalid mail plaese check again.'
        inputMsg.style.background = "#F5EBEB";
        return helper
    }
};

const valiadatePassword = pass => {
    let helper = false
    const passCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    pass.value.match(passCheck) ? helper = true : helper = false;
    if (helper) {
        return helper
    } else {
        inputMsg.innerText = 'Invalid password, check for at least one numeric digit and a special character and 7-15 characters.'
        inputMsg.style.background = "#F5EBEB";
        return helper
    }
    
};

const valiadateTerms = terms => {
    let helper = false
    terms.checked ? helper = true : helper = false
    if (helper) {
        return helper
    } else {
        inputMsg.innerText = 'Please make sure you check the terms and conditions before Sign in.'
        inputMsg.style.background = "#F5EBEB";
        return helper
    }
};

const masterValidate = () => {
    if (!validateEmptyInputs(userInputs) || !validateMail(mail, confirmMail) ||
        !valiadatePassword(password) || !valiadateTerms(terms)) {
        return false
    } else {
        return true
    };
};

//Post user data
const signIn = () => {
    document.getElementById('signIn-btn').addEventListener('click', () => {
        if (masterValidate()) {
            const user = new User(name.value, mail.value, password.value, JSON.parse(localStorage.getItem('userQA')));
            inputMsg.innerHTML = 'Welcome to Mindify.'
            console.log(user)
            // postUser(user);
            // localStorage.removeItem('userQA')
            // localStorage.removeItem('initCounter')
        }
        event.preventDefault()
    });
};
signIn();





