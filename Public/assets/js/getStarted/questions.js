//HTML elements variables
const questionArea = document.getElementById("question-area");
const question = document.getElementById('get-started-question');
let counter = parseInt(localStorage.getItem('initCounter')) || 1;

//User Q&A data
let userQandA = JSON.parse(localStorage.getItem('userQA')) || [];

// Event handling(questions)
const inputEvent = (elem, question, type) => {
    let event = '';
    type === 'radio'? event = 'click': event = 'change'
    elem.forEach(el => {
        el.addEventListener(event, (e) => {
            renderControler(dataQandA, questionArea)
            userQandA.push({ question: question, answer: e.target.value });
            localStorage.setItem('userQA', JSON.stringify(userQandA));
        });
    });
};

//Render question & answer, setting events
const renderQuestion = (ansData, queData, dataType, element) => {
    let minAge = 16;
    let maxAge = 99;
    element.firstElementChild.innerText = queData
    element.lastElementChild.innerHTML = '';
    switch (dataType) {
        case 'radio':
            ansData.forEach(ans => {
                element.lastElementChild.innerHTML += `
                <div class="ans-div">
                <input type="radio" name="init-questions" value="${ans}" id="${ans} class="radio-btns">
                <label for="${ans}" class="labels">${ans}</label>
                </div>`
            });
            inputEvent(document.querySelectorAll('input'), queData, dataType)
            break;

        case 'dropdown':
            element.lastElementChild.innerHTML += `
            <div id="age-div">
            <label for="age" style="padding-bottom:5%;" class="labels" id="age-label">Age</label>
            <select name="age" id="age" placeholder="Age" style="width:70%;"></select> 
            </div>`
            while (maxAge >= minAge) {
                document.getElementById('age').innerHTML += `<option value="${minAge}">${minAge}</option>`
                minAge++
            };
            inputEvent(document.querySelectorAll('select'), queData, dataType)
            break;

        default:
            break;
    };
};

//Render contrroler 
const renderControler = (data, element) => {
    if (data.length < counter) {
        element.lastElementChild.innerHTML = '';
        window.location.href = './signUpForm.html';
    } else {
        let answers = data.filter(x => x.id === counter).map(x => x.answers)[0];
        let question = data.filter(x => x.id === counter).map(x => x.question)[0];
        let type = data.filter(x => x.id === counter).map(x => x.type)[0];
        renderQuestion(answers, question, type, element)
        counter++
    }
};
renderControler(dataQandA, questionArea);
