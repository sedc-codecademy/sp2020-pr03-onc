//SELECTORS
let formAlert = document.querySelector("#form-alert");
let nameInput = document.querySelector("#name-input");
let emailInput = document.querySelector("#email-input");
let cityInput = document.querySelector("#select-city");
let submitBtn = document.querySelector("#submit-btn");

//FUNCTIONS
function hideAlerts() {
    formAlert.style.display = "none";
}
hideAlerts();

function emptyFields() {
    nameInput.value === "";
    emailInput.value === "";
    cityInput.value === "";
}

function Counselor(name, email, city) {
    this.name = name;
    this.emal = email;
    this.city = city;
}

//EVENTS
submitBtn.addEventListener("click", function(){
    if ( !nameInput.value || !emailInput.value || !cityInput.value ) {
        emptyFields();
        formAlert.style.display = "block";   
    } else {
        let counselor = new Counselor(nameInput.value, emailInput.value, cityInput.value)
    }
});