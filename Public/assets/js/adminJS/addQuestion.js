//Add Quenselor Variables
const submitQuestionBtn = document.querySelector('#submit-new-question');
const questionErrMsg = document.querySelector('#question-errMsg');
const questionInputs = Array.from(document.querySelectorAll('.question-inputs'));
const questionInput = document.querySelector('#question');
const resetBtn = document.querySelector('#reset-new-question');
const answerOpt = document.querySelector('#answer-option');
let newQandAarea = document.querySelector('#new-QandA-area');
let answers = [];

class NewQandA {
    constructor(question, answers) {
        this.type = "radio",
        this.question = question,
        this.answers = answers
    }
};

function renderCurrentQandA(question, answers, element) {
    element.innerHTML = '';
    element.innerHTML = `<p>Current question: ${question.value}</p> <ul class="list-group" id ='given-options';></ul>`;
    let listEL = document.querySelector('#given-options');
    for (const answer of answers) {
        listEL.innerHTML += `
        <li class="list-group-item">${answer}</li>
        `
    };
};

//Add new Question
(function () {
    answerOpt.addEventListener('change', (e) => {
        event.preventDefault();
        if (questionInput.value === '') {
            questionErrMsg.innerText = 'Please enter a question first.';
            questionErrMsg.style.backgroundColor = '#F5EBEB';

        } else {
            questionInput.disabled = true
            answers.push(e.target.value)
            renderCurrentQandA(questionInput, answers, newQandAarea)
            console.log(e.target.value)
            e.target.value = '';
            questionErrMsg.innerText = 'Please fill the following form';
            questionErrMsg.style.backgroundColor = 'inherit';
        }
    });
})();

//Reset inputs 
(function () {
    resetBtn.addEventListener('click', () => {
        event.preventDefault();
        for (const input of questionInputs) {
            input.value = ''
        };
        answers = [];
        newQandAarea.innerHTML = '';
        questionErrMsg.innerText = 'Please fill the following form';
        questionErrMsg.style.backgroundColor = 'inherit';
        questionInput.disabled = false
    });
})();

// Submit data
(function () {
    submitQuestionBtn.addEventListener('click', () => {
        event.preventDefault();
        if (answers.length !== 0 ) {
            let newQuestion = new NewQandA(questionInput.value, answers)
            console.log(newQuestion)
            //ToDo: Post call same as add counselor 
            answers = [];
            newQandAarea.innerHTML = '';
            questionErrMsg.innerText = 'You have succsefully added new Question.';
            questionErrMsg.style.backgroundColor = '#bedaed';
            questionInput.disabled = false;
            questionInput.value = '';
        } else {
            questionErrMsg.innerText = 'Please fill all input areas.'
            questionErrMsg.style.background = "#F5EBEB";
        }
    });
})();