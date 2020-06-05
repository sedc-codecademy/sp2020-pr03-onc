const warningBtns = Array.from(document.querySelectorAll('.warning-btns'));
const warningYesBtn = document.querySelector('#yes-btn');
const warningNoBtn = document.querySelector('#no-btn');
const warningMsg = document.querySelector('#warning-msg');
const deleteWarning = document.querySelector('#delete-warning');
let dataUsers = getUsers();
let dataReviews = getTestemonials();
let dataQuestions = getQuestions();

//Delete user/question/review
function populateWarrnigMsg(dataType, data) {
    switch (dataType) {
        case 'user':
            let { fullName = `${data.name} ${data.lastName || ''}` } = data;
            warningMsg.innerHTML = `Are you sure you want to remove user <span style="font-weight: 800;">${fullName}</span>?`
            break;
        case 'question':
            let { question } = data;
            warningMsg.innerHTML = `Are you sure you want to remove question <span style="font-weight: 800;">${question}</span>`
            break;
        case 'review':
            let { user } = data;
            warningMsg.innerHTML = `Are you sure you want to remove review from user <span style="font-weight: 800;">${user}</span>?`
            break;
        default:
            break;
    }
};

function deleteAction(dataType, data) {
    switch (dataType) {
        case 'user':
            dataUsers = data;
            renderUsers(dataUsers, usersEl);
            break;
        case 'question':
            dataQuestions = data;
            renderQuestionnere(dataQuestions, questionnaireEl);
            break;
        case 'review':
            dataReviews = data;
            renderTestemonials(dataReviews, testemonialEl);
            break;
        default:
            break;
    }
};

function deleteReassurance(btns, elem, inputData, dataType) {
    let helper = '';
    let id = parseInt(elem.id.split('_')[1]);
    let filterData = inputData.filter(item => item.id !== id);
    let data = inputData.filter(item => item.id === id)[0];
    populateWarrnigMsg(dataType, data)
    for (const btn of btns) {
        btn.addEventListener('click', (e) => {
            helper = e.target.value
            if (helper === 'yes') {
                deleteWarning.style.display = 'none';
                //ToDo DELETE call to api for deleting this user and UPDATE DATA for the filter buttons
                //(should i do fetch then wait for answer and rerender new data without deleted user or should i render FE data and do the call in backround)
                deleteAction(dataType, filterData)
            } else {
                mainBody.classList.remove('body-disable');
                deleteWarning.style.display = 'none';
            }
        });
    }
};

function deleteData(elem) {
    mainBody.classList.add('body-disable');
    deleteWarning.style.display = 'flex';
    let id = elem.id.split('_')[0];
    switch (id) {
        case 'deleteU':
            deleteReassurance(warningBtns, elem, dataUsers, 'user');
            break;
        case 'deleteQ':
            deleteReassurance(warningBtns, elem, dataQuestions, 'question');
            break;
        case 'deleteT':
            deleteReassurance(warningBtns, elem, dataReviews, 'review');
            break;
        default:
            break;
    }
};