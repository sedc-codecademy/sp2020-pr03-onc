let upcomingAppCard = document.querySelector(`.upcoming-app`);



let randomNumUser = Math.floor(Math.random() * 7) + 1;
console.log(randomNumUser)
let randomUser = users.filter(u => u.id === randomNumUser)
let firstName = randomUser.map(u => u.name);
let lastName = randomUser.map(u => u.lastName);




let countDownDate = new Date("Jul 5, 2020 13:30:00").getTime();





upcomingAppCard.innerHTML = `
                    <h3>Upcoming Appointment</h3>
                    <img src="assets/images/${randomImage}.png" alt="">
                    <h3>${firstName} ${lastName}</h3>
                    <p id="timeRemaining"></p>
                    <div>

                        <h3>General Notes: </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis totam
                            necessitatibus, sint cumque aut.</p>
                        <h3>Notes about last session: </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laboriosam deserunt et
                            officiis aliquid itaque est repudiandae id, distinctio ratione reiciendis, pariatur
                            magnam,
                            necessitatibus eligendi consectetur a voluptates provident. Corporis!</p>
                    </div>
                    <button id="appBtn"><a href="#patients-list"> Go To Appointment</a></button>
`;


var x = setInterval(function () {
    let now = new Date().getTime();
    let timeRemaining = countDownDate - now;

    let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    console.log(countDownDate)

    // Output the result in an element with id="demo"
    document.getElementById("timeRemaining").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (timeRemaining < 0) {
        clearInterval(x);
        let p = document.getElementById("timeRemaining");
        p.innerHTML = "Go to the appointment";
        p.style.color = "red"
    }
}, 1110);




// For the Appointment card BTN
let upcomingAppCardBtn = document.querySelector(`#appBtn`);
upcomingAppCardBtn.addEventListener('click', () => {
    clearChats();
    displayChat(randomNumUser)
})