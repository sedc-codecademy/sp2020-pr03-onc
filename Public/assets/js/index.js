//Create initial data in local storage from landing page starter questions
function setFirstQuestion(input) {
    const firstQUestion = dataQandA[0].question;
    const answersFirstQuestion = dataQandA[0].answers;
    let userFirstQandA = {question:firstQUestion, answer: ''};
    userQandA = [];
   
    switch (input) {
        case 'individual-btn':
            userFirstQandA.answer = answersFirstQuestion[0]
            userQandA.push(userFirstQandA)
            localStorage.setItem('userQA', JSON.stringify(userQandA))
            break;
        case 'couples-btn':
            userFirstQandA.answer = answersFirstQuestion[1]
            userQandA.push(userFirstQandA)
            localStorage.setItem('userQA', JSON.stringify(userQandA))   
          break;
        case 'teen-btn':
            userFirstQandA.answer = answersFirstQuestion[2]
            userQandA.push(userFirstQandA)
            localStorage.setItem('userQA', JSON.stringify(userQandA))
            break;
        default:
            break;
    }
};

//Redirect ot question part and set and reset first question and array in local storrage regarding the questionerry
(function typeBtnsEvent() {
    const typeBtns = Array.from(document.querySelectorAll('.type-buttons'));
    typeBtns.forEach(element => {
        element.addEventListener('click', (e) => {
            localStorage.setItem('initCounter', '2');
            setFirstQuestion(e.target.id);
            window.location.href = './getStarted.html'
        });
    });
})();

//Redirect to Get Started and rewrite localStorage
(function getStartedButtons(){
    Array.from(document.querySelectorAll('.register')).forEach(element => {
        element.addEventListener('click', () => {
            localStorage.removeItem('initCounter');
            localStorage.setItem('userQA', JSON.stringify([]))
            window.location.href = './getStarted.html';
        });
    });
})();



