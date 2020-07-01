const warningBtns = Array.from(document.querySelectorAll('.warning-btns'));
const warningMsg = document.querySelector('#warning-msg');
const deleteWarning = document.querySelector('#delete-warning');
//All data
let dataUsers = getUsers();
let dataReviews = getTestemonials();
let dataQuestions = getQuestions();
//Helper Variable
let editFlag = false;

//Delete users/questions/reviews
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
            warningMsg.innerHTML = `Are you sure you want to remove the review from user <span style="font-weight: 800;">${user}</span>?`
            break;
        default:
            break;
    }
};

function deleteAction(dataType, data) {
//ToDo make DELETE call to api for deleting this user and when response is ok make anothert call and GET updateed data from db
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
    let data = inputData.filter(item => item.id === id)[0];
    let editBtns = Array.from(document.querySelectorAll(`.all-edit-btns`));
    populateWarrnigMsg(dataType, data)
    for (const btn of btns) {
        btn.addEventListener('click', (e) => {
            helper = e.target.value
            if (helper === 'yes') {
                //ToDo DELETE call to be processed after the user press yes on the warning btn
                setTimeout(() => {
                    editBtns.map(el => el.style.pointerEvents = "unset")

                    let filterData = inputData.filter(item => item.id !== id);
                    deleteWarning.style.display = 'none';

                    deleteAction(dataType, filterData)
                }, 1100);
                ////////////////////////////////////////////////////////////////////////////////
                mainBody.classList.remove('body-disable');
                deleteWarning.style.display = 'none';
            } else {
                mainBody.classList.remove('body-disable');
                deleteWarning.style.display = 'none';
                editFlag ? editFlag = false : editFlag = true;
            }
        });
    };
};

function deleteData(elem) {
    mainBody.classList.add('body-disable');
    deleteWarning.style.display = 'flex';
    editFlag ? editFlag = false : editFlag = true;
    let id = elem.id.split('_')[0];
    id === 'deleteU' ? deleteReassurance(warningBtns, elem, dataUsers, 'user')
        : id === 'deleteQ' ? deleteReassurance(warningBtns, elem, dataQuestions, 'question')
            : deleteReassurance(warningBtns, elem, dataReviews, 'review');
};

//Edit users/questions/reviews
function editData(elementThis) {
    let id = elementThis.id.split('_')[1];
    let editType = elementThis.id.split('_')[0];
    let editBtns = Array.from(document.querySelectorAll(`.all-edit-btns`));
    let editRow = [];
    editType === "editU" ? editRow = Array.from(document.querySelectorAll(`.users${id}`)) : editType === "editT"
        ? editRow = Array.from(document.querySelectorAll(`.reviews${id}`))
        : editRow = Array.from(document.querySelectorAll(`.questions${id}`));
    editFlag ? editFlag = false : editFlag = true;

    editFlag ? editRow.map(el => el.style.display = "unset") : editRow.map(el => el.style.display = "none");

    editFlag ? editBtns.filter(el => el.id !== `${editType}_${id}`).map(el => el.style.pointerEvents = "none")
        : editBtns.map(el => el.style.pointerEvents = "unset")

    editFlag ? editBtns.filter(el => el.id !== `${editType}_${id}`).map(el => el.style.pointerEvents = "none")
        : editBtns.map(el => el.style.pointerEvents = "unset");
};

function saveEditedData(elementThis) {
    editFlag ? editFlag = false : editFlag = true;
    //ToDO Here should be PUT calls to api with edited data. (set timeout is just for simulation)
    setTimeout(() => {
        let id = parseInt(elementThis.id.split('_')[1]);
        let editType = elementThis.id.split('_')[0];
        let editBtns = Array.from(document.querySelectorAll(`.all-edit-btns`));
        let editActivity = false;
        let editObject = false;
        if (editType === 'saveU') {
            // ToDo
            editActivity = document.querySelector(`#editU_active_${id}`).checked;
            editObject = usersData.filter(item => item.id === id)[0];
            editObject.active = editActivity
            renderUsers(usersData, usersEl)
            editBtns.map(el => el.style.pointerEvents = "unset");
            return
        }
        if (editType === 'saveT') {
            // ToDo
            editActivity = document.querySelector(`#editT_active_${id}`).checked;
            editObject = dataReviews.filter(item => item.id === id)[0];
            editObject.status = editActivity
            renderTestemonials(dataReviews, testemonialEl);
            editBtns.map(el => el.style.pointerEvents = "unset");
            return
        }
        if (editType === 'saveQ') {
            // ToDo(if some filed is left empty might be sent as null)
            editObject = dataQuestions.filter(item => item.id === id)[0];
            let question = document.querySelector(`#edit_question${id}`).value
            let answers = Array.from(document.querySelectorAll(`.edit-answers${id}`)).filter(el => el.value !== '').map(el => el.value);
            let newObj = {question, answers}
            console.log(newObj)
            Object.assign(editObject, newObj)
            renderQuestionnere(dataQuestions, questionnaireEl);
            editBtns.map(el => el.style.pointerEvents = "unset")
            return
        }
    }, 1200);
};
