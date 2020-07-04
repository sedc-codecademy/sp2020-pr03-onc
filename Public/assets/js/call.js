//To do file
//To do post, get and put data with fetch
//Get data should be fired on init?
const getData = url => {
    fetch(url)
    then(response => response.json())
        .then(data => {
            console.log("Call ok", data)
        })
        .catch((err) => console.log(err))
};

const postUser = data => {
    let url = "randomUrl";
    fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => console.log(err))
};


function getTestemonials() {
    //ToDo suppost to do a fetch call to API estead of for-loop and getTestemonials might with callback or asyn func
    const data = testimonialsData.filter(testemonial => testemonial.status === true)
    return data
};

function getUsers() {
    let data = [];
    //ToDo suppost to do a fetch call to API estead of for-loop and getUsers might with callback or asyn func
    for (let item of users) {
        data.push(item)
    }

    return data
};

function getQuestions() {
    let data = [];
    //ToDo suppost to do a fetch call to API estead of for-loop and getUsers might with callback or asyn func
    for (let item of dataQandA) {
        data.push(item)
    }

    return data
};

function findUser(email, pass) {
    //ToDo suppost to do a fetch call to API estead of for-loop and getUsers might with callback or asyn func
    //Mocking call
    let response = users.filter(user => user.active)
        .filter(user => user.email === email && user.password === pass)
        .map(user => user.role);
   
        if ( ! response.length) {
            return response = {message: 'Your username and/or password do not match.' , role: ''}
            
        } else {
            return response = {message: '' , role: response[0]}  
        }
   
};