// Input Variables
const name = document.getElementById('name');
const mail = document.getElementById('email');
const confirmPass = document.getElementById('confirm-pass');
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

//Validatation
const validateSignUp = () => {
    if (!validateEmptyInputs(userInputs, inputMsg) || !validateMail(mail, inputMsg) ||
        !valiadatePassword(password, confirmPass, inputMsg) || !valiadateTerms(terms, inputMsg)) {
        return false
    } else {
        return true
    };
};

//Post user data
const signIn = () => {
    document.getElementById('signIn-btn').addEventListener('click', () => {
        if (validateSignUp()) {
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





