// Input Variables
const name = document.getElementById('name');
const mail = document.getElementById('email');
const confirmPass = document.getElementById('confirm-pass');
const password = document.getElementById('password');
const terms = document.getElementById('terms')
const userInputs = [name, mail, password];
const inputMsg = document.getElementById('input-msg');

// Alert error message
const alertMessage = () => {
    inputMsg.style.display = "block";
}

const errorMessageStyleChange = (errMsg) => {
    errMsg.style.backgroundColor = "#ffebeb";
    errMsg.style.border = "solid 1px red";
    errMsg.style.borderRadius = "0.3rem";
    errMsg.style.color = "red";
    errMsg.style.textAlign = "center";
}

//User class
class User {
    constructor(name, email, password, questionnarie) {
        this.name = name
        this.lastName = null
        this.role = 'user'
        this.email = email
        this.password = password
        this.active = true
        this.relation = null
        this.questionnarie = questionnarie
    };
};

//Validatation
const validateSignUp = () => {
    if (!validateEmptyInputs(userInputs, inputMsg) || !validateMail(mail, inputMsg) ||
        !valiadatePassword(password, inputMsg, confirmPass) || !valiadateTerms(terms, inputMsg)) {
        return false
    } else {
        return true
    };
};

//Post user data
const signIn = () => {
    document.getElementById('signin-btn').addEventListener('click', () => {
        event.preventDefault()
        if (validateSignUp()) {
            const user = new User(name.value, mail.value, password.value, JSON.parse(localStorage.getItem('userQA')));
            inputMsg.innerHTML = 'Welcome to Mindify.'
            console.log(user)
            // postUser(user);
            localStorage.removeItem('userQA')
            localStorage.removeItem('initCounter')
        }
        errorMessageStyleChange(inputMsg);
    });
};
signIn();



