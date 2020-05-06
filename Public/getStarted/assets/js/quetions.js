//HTML elements variables
const questionArea = document.getElementById("question-area");
const question = document.getElementById('get-started-question');

//User Q&A data
let userQandA = [];

// Event handling(questions)
const eventInput = (elements, question) => {
    elements.forEach(el => {
        el.addEventListener('click', (e) => {
            renderQuestions(dataQandA, questionArea)
            userQandA.push({ question: question, answer: e.target.value });
            localStorage.setItem('userQA', JSON.stringify(userQandA));
        });
    });
};

//Render questions 
let counter = 1;
const renderQuestions = (data, element) => {
    if (data.length < counter) {
        element.lastElementChild.innerHTML = '';
        window.location.href = './signinForm.html';
    } else {
        let answers = data.filter(x => x.no === counter).map(x => x.answers)[0];
        let question = data.filter(x => x.no === counter).map(x => x.question)[0];
        element.firstElementChild.innerText = question
        element.lastElementChild.innerHTML = '';
        answers.forEach(ans => {
            element.lastElementChild.innerHTML += `
        <label for="${ans}"><input type="radio" name="init-questions" value="${ans}" id="${ans}">${ans}</label>`
        });
        let inputs = document.querySelectorAll('input');
        eventInput(inputs, question)
        counter++
    }
};
renderQuestions(dataQandA, questionArea)