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
    if (!validateEmptyInputs(userInputs, errorMsg) || !validateName(fullName, errorMsg) || !validateMail(email, errorMsg) || !validateSubject(subject, errorMsg) || !validateMessage(message, errorMsg)) {
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
            errorMsg.style.color = "#5faa41";
            errorMsg.style.border = "solid 1px";
            errorMsg.style.borderRadius = "5px";
            errorMsg.style.width = "70%";
            errorMsg.style.marginLeft = "15%";
            errorMsg.style.backgroundColor = "white";
            errorMsg.style.padding = "5px";
            errorMsg.innerHTML = 'Your message was sent successfully!';
            // Clear Input Areas
            form.reset();
        } else {
            errorMsg.style.color = "#bd2130";
            errorMsg.style.border = "solid 1px";
            errorMsg.style.borderRadius = "5px";
            errorMsg.style.width = "70%";
            errorMsg.style.marginLeft = "15%";
            errorMsg.style.backgroundColor = "white";
            errorMsg.style.padding = "5px";

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
