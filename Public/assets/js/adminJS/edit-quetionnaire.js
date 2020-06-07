//RENDER QUETIONERRE
const questionnaireEl = document.querySelector('#questionnere-element');
let questionsData = getQuestions();

function displayAnswers(dataArray, param = 0) {
    let helper = ''
    if (!dataArray) {
        helper = 'No records found'
    } else {
        if (param == 0) {
            for (const answer of dataArray) {
                helper += `
                        <li>${answer}</li>`
            }
        } else {
            for (const answer of dataArray) {
                helper += `
                        <li><input type="text" class="edit-answers${param} form-control questions${param}" id="answer_${param}"  value ="${answer}" ></li>`
            }
        }
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
                <ol>${displayAnswers(question.answers)}</ol>   
              </td>
              <td>
              <a class="btn btn-sm btn-success all-edit-btns" id="editQ_${question.id}" onclick="editData(this)"><i class="all-edit-btns fa fa-pencil"></i></a> 
              </td>
        </tr>
        <tr>
        <td>
            <h6 class="questions${question.id}" style="color: red;">
                Edit or delete question/answers
            </h6>
        </td>
        <td>
        <input type="text" class="form-control questions${question.id}" id="edit_question${question.id}"  value ="${question.question}" >
        </td>
        <td>
        <ol class = "questions${question.id}">${displayAnswers(question.answers, question.id)}</ol>
        </td>
        <td>
        <a class="btn btn-sm btn-success questions${question.id}" id="saveQ_${question.id}" onclick="saveEditedData(this)"><i class="fa fa-floppy-o"></i></a>
        <a class="btn btn-sm btn-danger questions${question.id}" id="deleteQ_${question.id}" onclick="deleteData(this)"><i class="fa fa-trash"></i></a>
        </td>
    </tr>`
        Array.from(document.querySelectorAll(`.questions${question.id}`)).map(el => el.style.display = "none")

    };
};
renderQuestionnere(questionsData, questionnaireEl);
