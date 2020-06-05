//RENDER QUETIONERRE
const questionnaireEl = document.querySelector('#questionnere-element');
let questionsData = getQuestions();

function displayAnswers(dataArray) {
    let helper = ''
    if (dataArray) {
        for (const answer of dataArray) {
            helper += `
                <li>${answer}</li>
                `
        }
    } else {
        helper = '&#10006'

    }
    return helper
};

function renderQuestionnere(data, el) {
    data.innerHTML = '';
    el.innerHTML = ``;
    el.innerHTML = `
    <table class="table">
        <thead class="thead-light">
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Question</th>
            <th scope="col">Response options</th>
            <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody id='questionnere-table-body'></tbody>
    </table>`;
    const tableBody = document.querySelector('#questionnere-table-body');
    for (const question of data) {
        tableBody.innerHTML += `
        <tr>
              <th scope="row">${question.id}</th>
              <td>${question.question}</td>
              <td>
                <ul>${displayAnswers(question.answers)}</ul>   
              </td>
              <td>
              <a class="btn btn-sm btn-success" id="editQ_${question.id}" onclick="editQUestion(this)"><i class="fa fa-pencil"></i></a> 
              <a class="btn btn-sm btn-danger" id="deleteQ_${question.id}" onclick="deleteData(this)"><i class="fa fa-trash"></i></a>
              </td>
        <tr>`
    };
};
renderQuestionnere(questionsData, questionnaireEl);
