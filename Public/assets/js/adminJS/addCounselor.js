//Add Counselor Variables
const counselorInputs = Array.from(document.querySelectorAll('.counselor-inputs'));
const counselorErrMsg = document.querySelector('#counselor-errMsg');
const addCounselorBtn = document.querySelector('#submit-new-counselor');
const nameInput = document.querySelector('#name');
const lNameInput = document.querySelector('#last-name');
const mailInput = document.querySelector('#email');

class GeneratePass {
    constructor() { }

    getRandomLower() {
        return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    }

    getRandomNumber() {
        return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    }

    getRandomSymbol() {
        const symbols = '!@#$%^&*_+<>?'
        return symbols[Math.floor(Math.random() * symbols.length)];
    }

    generateRandomPass() {
        return `${this.getRandomSymbol()}${this.getRandomLower()}${this.getRandomLower()}${this.getRandomNumber()}${this.getRandomLower()}${this.getRandomSymbol()}${this.getRandomNumber()}`
    }
};

class Counselor {
    constructor(name, lName, email) {
        this.name = name
        this.lastName = lName
        this.role = 'Counselor'
        this.email = email
        this.password = GeneratePass.prototype.generateRandomPass()
        this.active = true
        this.relation = null
    };
};

//Validate counselor inputs
function validateCounselorInputs() {
    let helper = false
    if (validateEmptyInputs(counselorInputs, counselorErrMsg) &&
        valiadateNameLname(nameInput, counselorErrMsg) &&
        valiadateNameLname(lNameInput, counselorErrMsg) &&
        validateMail(mailInput, counselorErrMsg)) {
        helper = true
    }
    return helper
}

//Event handling and submiting data
(function () {
    addCounselorBtn.addEventListener('click', () => {
        event.preventDefault();
        if (validateCounselorInputs()) {
            const newCounselor = new Counselor(nameInput.value, lNameInput.value, mailInput.value)
            console.log(newCounselor)
            //Here should be some call fn to API to submit the the new counselor or something else perhaps? 
            counselorErrMsg.innerText = 'You have succsefully added new Counselor.';
            counselorErrMsg.style.backgroundColor = '#bedaed';
        }
    });
})();



