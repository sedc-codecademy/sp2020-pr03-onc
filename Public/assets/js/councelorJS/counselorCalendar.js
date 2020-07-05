let chatSelection = document.querySelector('.chat-section');
let patientList = document.getElementById('patients-list');
let patientChats = document.getElementsByClassName('patients-chat');

// let chatDisplay = document.querySelector('.chat-display')


// let messageToSend = document.getElementById('messageToSend')
let sendMessageBtn = document.getElementById('sendMessage')

let randomImage = Math.floor(Math.random() * 6) + 1;


let currentTime = () => {
    return `${new Date().getUTCHours() + 2}h:${new Date().getMinutes()}m`
}


// Calendar
let p = MindFusion.Scheduling;
//create an new calendar instance
let calendar = new p.Calendar(document.getElementById('calendar'))
// visualise the calendar
calendar.render();



users.forEach(user => {
    let div = document.createElement('div');
    div.classList.add('listed-patient')
    div.setAttribute("id", `userId-${user.id}`)
    div.innerHTML = `
    <div class="patient-image"> <img
    src="assets/images/${randomImage}.png" alt=""></div>
    <div class="patient-name">
    <h5>${user.name}</h5>
    </div>
    `;
    patientList.appendChild(div)
    randomImage++
    if (randomImage === 6) {
        randomImage = 0
        randomImage++
    }
})

users.forEach(user => {
    let div = document.createElement('div')
    div.classList.add('patients-chat');
    div.setAttribute("id", `chat-user-${user.id}`)
    div.innerHTML = `
    <div class="chat-display " id="chat-display-user${user.id}">
        <div class="chat-pannel">
            <h4>${user.name} ${user.lastName}:</h4>
            <p>I need to talk to you...</p>
            <span>${currentTime()}</span>
        </div>
    </div>
    <div class="chat-input">
    <textarea name="" id="messageToSend-user${user.id}" cols="70" rows="2" placeholder="Type nessage"></textarea>
    <input type="button" value="Send" id="sendMessage" onclick="sendMessage(${user.id})">
    </div>
    `;
    if (user.id !== 1)
        div.style.display = 'none'

    chatSelection.appendChild(div)
})



function sendMessage(id) {
    let chatDisplay = document.querySelector(`#chat-display-user${id}`);
    let messageToSend = document.getElementById(`messageToSend-user${id}`)
    let data = messageToSend.value;
    let div = document.createElement('div')
    div.classList.add('chat-pannel');
    div.innerHTML = `
    <h4>You:</h4>
    <p>${data}</p>
    <span>${currentTime()}</span>
    `
    chatDisplay.appendChild(div)
    messageToSend.value = " ";
}

// sendMessageBtn.addEventListener('click', () => {
//     let data = messageToSend.value;
//     let div = document.createElement('div')
//     div.classList.add('chat-pannel');
//     div.innerHTML = `
//     <h4>You:</h4>
//     <p>${data}</p>
//     <span>${currentTime()}</span>
//     `
//     chatDisplay.appendChild(div)
// })


let chats = document.getElementsByClassName('listed-patient');
for (let i = 0; i < chats.length; i++) {
    chats[i].addEventListener('click', () => {
        clearChats();
        displayChat(i + 1);
    })
}



function clearChats() {
    Array.from(patientChats).forEach(el => {
        el.style.display = 'none'
    })
}
function displayChat(chatID) {
    Array.from(patientChats).forEach(el => {
        if (el.getAttribute("id") === `chat-user-${chatID}`)
            el.style.display = 'flex'
    })
}