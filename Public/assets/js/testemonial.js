//HTML elements variables
const testemonialArea = document.getElementById('testemonial');

//Populating navibar of the testemonials and adding event listiners
const populateNavi = (data, id, element) => {
    let naviBar = element.lastElementChild;
    naviBar.innerHTML = '';
    data.forEach(el => {
        naviBar.innerHTML += `<div class="navi-dots" id="${el.id}"></div>`
    });
    let naviDots = document.getElementsByClassName('navi-dots');
    for (const dot of naviDots) {
        id === parseInt(dot.id) ? dot.style.backgroundColor = "rgb(255, 255, 240, .3)" : null;
    }
    //Adding event listiners to testemonial navi
    for (const dot of naviDots) {
        dot.addEventListener('click', (e) => {
            let elementID = parseInt(e.target.id)
            populateTestemonial(data, elementID, element);
        })
    }
};

//Populating  testemonial body element (using populateNavi)
const populateTestemonial = (data, id, element) => {
    let avatar = 'avatar-default.jpg'
    let currnetTestimony = data.filter(x => x.id === id)[0];
    element.innerHTML = `
    <div class="testemonials-person">
    <img src="./assets/images/${currnetTestimony.img || avatar }" alt="Avatar">
    <h5> <span>${currnetTestimony.user}</span><br> ${currnetTestimony.occupation}</h5>
    </div>
    <p class="testemony">${currnetTestimony.testimonial}
    </p>
    </div>
    <div class="testemonials-navi" id="navi-testemonials"></div>
    `
    populateNavi(data, id, element)
};

//Main function which calls populateTestemonial 
const testemonialController = (data, element) => {
    let slideCounter = 1;
    const approvedData = data.filter(testemonial => testemonial.status === true)
    console.log(approvedData);
    const dataLength = approvedData.length
    approvedData.forEach(el => {
        element.lastElementChild.innerHTML += `<div class="navi-dots"></div>`
    });
    populateTestemonial(approvedData, slideCounter, element);
    setInterval(() => {
        populateTestemonial(approvedData, slideCounter, element)
        slideCounter === dataLength ? slideCounter = 1 : slideCounter++
    }, 4500);
};

testemonialController(testimonialsData, testemonialArea);
