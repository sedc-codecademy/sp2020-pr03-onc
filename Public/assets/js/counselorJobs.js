//SELECTORS
const form = document.getElementsByTagName("form");
const errorMsg = document.querySelector("#error-message");
const nameInput = document.querySelector("#name-input");
const emailInput = document.querySelector("#email-input");
const cityInput = document.querySelector("#select-city");
const submitBtn = document.querySelector("#submit-btn");
const userInputs = [nameInput, emailInput, cityInput];

//Hide error alert message
const hideAlerts = () => {
    errorMsg.style.display = "none";
}
// hideAlerts();

const alertMessage = () => {
    errorMsg.style.display = "block";
}

const successMsgStyle = () => {
    errorMsg.style.color = "#21a34a";
    errorMsg.style.borderColor = "#21a34a";
    errorMsg.style.backgroundColor = "#dbffe7";
}

const errorMsgStyle = () => {
    errorMsg.style.color = "red";
    errorMsg.style.borderColor = "red";
    errorMsg.style.backgroundColor = "#fff7f7;";
}

//Select city input, rendering all the options
const selectCity = (arrayCities) => {
    cityInput.innerHTML = "";
    cityInput.innerHTML += `<option value="">Select city</option>`;
    arrayCities.forEach(city => {
        cityInput.innerHTML += `<option value="${city}">${city}</option>`
    })
}
selectCity(cities);

const validateJobForm = () => {
    if (!validateEmptyInputs(userInputs, errorMsg) || !validateName(nameInput, errorMsg) || !validateEmail(emailInput, errorMsg) || !validateCity(cityInput, errorMsg)) {
        return false
    } else {
        return true
    }
};

//Form object
function Counselor(name, email, city) {
    this.name = name;
    this.emal = email;
    this.city = city;
}

//EVENTS
const submitReview = () => {
    submitBtn.addEventListener("click", function(){
        if (validateJobForm()) {
            alertMessage();
            successMsgStyle();
            errorMsg.innerHTML = 'Thank you for your interests. You will hear from us soon.'
            let counselor = new Counselor(nameInput, emailInput, cityInput)
            // counselors.push(counselor);
            form.reset();
        } else {
            alertMessage();
            errorMsgStyle();
        }
    });
}
submitReview();