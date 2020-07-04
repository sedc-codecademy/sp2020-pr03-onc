// Parent DIV of Login
let popUp = document.querySelector('.popUpLogin');

// Generate login content on start
(function () {
    popUp.innerHTML = `
        <div class="loginContent">
            <div class="close">+</div>
            <h2 class="loginTxt">Login</h2>
            <form action="index.html" method="GET">

                <label for="emailV" class="labelTxt">Email adress</label>
                <input type="email" id="emailV" class="login-inputs" required>

                <label for="passV" class="labelTxt">Password</label>
                <input type="password" id="passV" class="login-inputs" required>

                <a href=""><p class="forgot">Forgot your password?</p></a>
                <h3 id="login-error-msg"></h3> 
                <button type="button" class="log" id="logInB">Sign in</button>
                <p class="createAcc">Don't have account? <a href="./getStarted.html" class="signUpLink">&nbsp Sign Up</a></p>
            </form>
        </div>  
    `
})();

let loginInputFields = Array.from(document.querySelectorAll('.login-inputs'));
let loginInput = document.querySelector('#emailV');
let loginPassword = document.querySelector('#passV');
let loginBtn = document.querySelector('#logB');
let close = document.querySelector('.close');
let signIn = document.querySelector('#logInB');
let alertI = document.querySelector('#login-error-msg');

let clearLoginInputs = (inputs) => {
    inputs.map(input => input.value = '')
};


let redirectPage = (typeOfUser) => {
    switch (typeOfUser) {
        case 'counselor':
            window.location.href = './councelor.html';
            break;
        case 'user':
            window.location.href = './userPage.html';
            break;
        case 'admin':
            window.location.href = './adminPage.html';
            break;

        default:
            break;
    }
};

//EVENTS
// Open the modal
loginBtn.addEventListener('click', () => {
    event.preventDefault()
    popUp.style.display = 'flex';
    popUp.style.position = 'fixed';
    popUp.style.zIndex = '50';
});

// Close the modal
close.addEventListener('click', () => {
    event.preventDefault()
    popUp.style.display = 'none';
    clearLoginInputs(loginInputFields);
});

// Make call
signIn.addEventListener('click', () => {
    event.preventDefault()
    if (!validateEmptyInputs(loginInputFields, alertI) || !validateMail(loginInput, alertI) || !valiadatePassword(loginPassword, alertI)) {
        alertI.style.display = 'block';
        alertI.innerHTML = 'Please enter valid data.';
    } else {
        let response = findUser(loginInput.value, loginPassword.value);
        if (response.message) {
            alertI.style.display = 'block';
            alertI.innerHTML = response.message;

        } else {
            clearLoginInputs(loginInputFields);
            alertI.style.display = 'none';
            redirectPage(response.role);
        }
    }
});




