// Init for header button
let popUp = document.querySelector('.popUpLogin');
let loginBtn = document.querySelector('#logB');
let close = document.querySelector('.close');

// Init for validation
let inpText = document.querySelector('#emailV');
let inpPass = document.querySelector('#passV');
let signIn = document.querySelector('#logInB');
let signUp = document.querySelector('#regB');
let alertI = document.querySelector('#info');


// Open the modal
loginBtn.addEventListener('click', () => {
    popUp.style.display = 'flex';
    popUp.style.position = 'fixed';
    popUp.style.zIndex = '50';
});


// Close the modal
close.addEventListener('click', () => {
    popUp.style.display = 'none';
});

// Constructor
function AuthData(email, password) {
    this.email = email;
    this.password = password;
}


// Validations
let emptyInputs = (email, password) => {
    if (email === '' && password === '') {
        return true;
    }
    return false;
}

let dataV = (loginUser) => {
    for (let user of users) {
        if (user.email === loginUser.email && user.password === loginUser.password) {
            return true;
        }
        return false;
    }
};

let checkEmail = (loginUser) => {
    let emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (loginUser.email.value.match(emailCheck)) {
        return true;
    }
    return false;
}

// Event
signIn.addEventListener('click', () => {
    let email = inpText.value;
    let password = inpPass.value;

    let loginUser = new AuthData(email, password);

    if (emptyInputs(email, password)) {
        isLoginSelected = false;
        alertI.style.display = 'block';
        alertI.innerHTML = '<h4>Please enter the fields.</h4>';
    } else if (dataV(loginUser)) {
        alertI.style.display = 'none';
        window.location = 'userPage.html';
    } else {
        isLoginSelected = false;
        alertI.style.display = 'block';
        alertI.innerHTML = '<h4>You are not registered.</h4>';
    }
    inpText.value = '';
    inpPass.value = '';
});


// (function getStartedButton() {
//     signUp.addEventListener('click', () => {
//         localStorage.removeItem('initCounter');
//         localStorage.setItem('userQA', JSON.stringify([]))
//         window.location.href = './getStarted.html';
//     });
// })();


