//Add Quenselor Variables
const addQuestionBtn = document.querySelector('#submit-new-question');
const questionErrMsg = document.querySelector('#question-errMsg');
const questionInputs = Array.from(document.querySelectorAll('.question-inputs'));
const questionInput = document.querySelector('#question');
const answerNumInput = document.querySelector('#num-answers');

//Validate question inputs
function validateQuestionInputs() {
    let helper = false
    if (validateEmptyInputs(questionInputs, questionErrMsg) &&
        validateGreaterNumThenZero(answerNumInput, questionErrMsg)) {
        helper = true
    }
    return helper
};

//Event handling and submiting data
(function () {
addQuestionBtn.addEventListener('click', () => {
    event.preventDefault();
    if(validateQuestionInputs()) {
        console.log(answerNumInput.value)
        questionErrMsg.innerText = 'You have succsefully added new Question.';
        questionErrMsg.style.backgroundColor = '#deebb9';
       //ToDo: render fn with posible answers according num input, validate them (no empty inputs)
    } else{
       console.log('not ok')

    }
});
})();