//HTML elements variables
const testemonialArea = document.getElementById('testemonial');

//Populating navibar of the testemonials and adding event listiners
const populateNavi = (data, testemonialCounter, element) => {
    let naviBar = element.lastElementChild;
    naviBar.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        naviBar.innerHTML += `<div class="navi-dots" id="${i}"></div>`   
    }
    let naviDots = document.getElementsByClassName('navi-dots');
    for (const dot of naviDots) {
        testemonialCounter - 1 === parseInt(dot.id) ? dot.style.backgroundColor = "rgb(255, 255, 240, .3)" : null;
    }
    //Adding event listiners to testemonial navi
    for (const dot of naviDots) {
        dot.addEventListener('click', (e) => {
            let elementID = parseInt(e.target.id) + 1
            populateTestemonial(data, elementID, element);
        })
    }
};

//Populating  testemonial body element (using populateNavi)
const populateTestemonial = (data, testemonialCounter, element) => {
    let avatar = 'avatar-default.jpg'
    // let currnetTestimony = data.filter(x => x.id === id)[0];
    let currnetTestimony = data[testemonialCounter - 1];
    element.innerHTML = `
    <div class="testemonials-person">
    <img src="./assets/images/${currnetTestimony.img || avatar }" alt="Avatar">
    <h5> <span>${currnetTestimony.user}</span><p>${currnetTestimony.occupation}</p></h5>
    </div>
    <p class="testemony">${currnetTestimony.testimonial}
    </p>
    </div>
    <div class="testemonials-navi" id="navi-testemonials"></div>
    `
    populateNavi(data, testemonialCounter, element)
};

//Main function which calls populateTestemonial 
const testemonialController = (data, element) => {
    let slideCounter = 1;
    const dataLength = data.length
    data.forEach(el => {
        element.lastElementChild.innerHTML += `<div class="navi-dots"></div>`
    });
    populateTestemonial(data, slideCounter, element);
    setInterval(() => {
        slideCounter === dataLength  ? slideCounter = 1 : slideCounter++
        populateTestemonial(data, slideCounter, element)
    }, 3500);
};

(function() {
    let data = getTestemonials()
    testemonialController(data, testemonialArea);
})();


