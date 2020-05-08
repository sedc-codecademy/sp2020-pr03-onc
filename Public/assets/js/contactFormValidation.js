const fullName = document.querySelector('.fullName');
const email = document.querySelector('.email');
const subject = document.querySelector('.subject');
const message = document.querySelector('.message');
const sendBtn = document.querySelector('.submitBtn');


const printError = (elemId, errorMsg) => {
    document.getElementById(elemId).innerHTML = errorMsg;
}