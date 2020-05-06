//To do file
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
    let url= "randomUrl";
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
