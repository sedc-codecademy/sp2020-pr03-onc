//SELECTORS
const form = document.getElementsByTagName("form");
const errorMsg = document.querySelector("#error-message");
const nameInput = document.querySelector("#name-input");
const emailInput = document.querySelector("#email-input");
const cityInput = document.querySelector("#select-city");
const submitBtn = document.querySelector("#submit-btn");
const userInputs = [nameInput, emailInput, cityInput];

//Hide error alert message
function hideAlerts() {
    errorMsg.style.display = "none";
}
hideAlerts();

//Select city input, rendering all the options
const selectCity = (arrayCities) => {
    cityInput.innerHTML = "";
    cityInput.innerHTML += `<option value="">Select city</option>`;
    arrayCities.forEach(city => {
        cityInput.innerHTML += `<option value="${city}">${city}</option>`
    })
}
selectCity(cities);

const validateCity = city => {
    let helper = false;
    if (city.value !== "") {
        helper = true;
    } else {
        errorMsg.innerHTML = 'You must select a city.';
    }
    return helper
}

//Form object
function Counselor(name, email, city) {
    this.name = name;
    this.emal = email;
    this.city = city;
}

//EVENTS
// const submitReview = () => {
//     submitBtn.addEventListener("click", function(){
//         if (validateJobForm()) {
//             errorMsg.innerText = 'Thank you for your interests. You will hear from us soon.'
//             let counselor = new Counselor(nameInput, emailInput, cityInput)
//             // counselors.push(counselor);
//         } else {
            
//         }
//     });
// }
// submitReview();