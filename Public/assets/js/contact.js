// Input Variables
const form = document.getElementById('contactForm');
const fullName = document.querySelector('.fullName');
const email = document.querySelector('.email');
const subject = document.querySelector('.subject');
const message = document.querySelector('.message');
const sendBtn = document.querySelector('.submitBtn');
const errorMsg = document.querySelector('.error');
const userInputs = [fullName, email, subject, message];

// Main validation funcion
const validateContactForm = () => {
    if (!validateEmptyInputs(userInputs, errorMsg) || !validateName(fullName, errorMsg) || !validateEmail(email, errorMsg) || !validateSubject(subject, errorMsg) || !validateMessage(message, errorMsg)) {
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
