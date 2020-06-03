const testemonialEl = document.querySelector('#testemonilas-element');
const searchInputTwo = document.querySelector('#search-review');
const reviewBtns = Array.from(document.querySelectorAll('.review-btns'));
const reviewData = getTestemonials()
let approvedHelper = false;
let disapprovedHelper = false;

//Event handling
(function(){
    for (const btn of reviewBtns) {
        btn.addEventListener('click', (e) => {
            if (btn.id === 'approved') {
                approvedHelper ? approvedHelper = false : approvedHelper = true;
                approvedHelper ? btn.style.backgroundColor = "rgb(89, 81, 70)" : btn.style.backgroundColor = "rgb(89, 81, 70, .8)";
                filterRewievs(reviewData);   
            } else {
                disapprovedHelper ? disapprovedHelper = false : disapprovedHelper = true;
                disapprovedHelper ? btn.style.backgroundColor = "rgb(89, 81, 70)" : btn.style.backgroundColor = "rgb(89, 81, 70, .8)";
                filterRewievs(reviewData);    
            }  
        }); 
    }
})();

//Filter reviews
function filterRewievs(data) {
    let filteredData = [];
    if (!approvedHelper && !disapprovedHelper) {
        renderTestemonials(data, testemonialEl);
        return true
    }
    if (approvedHelper && disapprovedHelper) {
        renderTestemonials(data, testemonialEl);
        return true
    }
    if (approvedHelper && !disapprovedHelper) {
        filteredData = data.filter(review => review.status === true);
        renderTestemonials(filteredData, testemonialEl);
    } else {
        filteredData = data.filter(review => review.status === false);
        renderTestemonials(filteredData, testemonialEl);
    }
};

//Search testemonial by name input
function searchReviewByName(searchCriteria, data) {
    let filterData = [];
    if (searchCriteria !== '') {
        for (const item of data) {
            if (item.user.toLowerCase().includes(searchCriteria.toLowerCase())) {
                filterData.push(item)
            }
        }
        return filterData
    }
    return data
};

searchInputTwo.addEventListener('input', (e) => {
    let data = getTestemonials();
    let filteredData = searchReviewByName(e.target.value, data);
    renderTestemonials(filteredData, testemonialEl);
});


//Render functions
function displayStatus(dataObject) {
    let helper = '';
    dataObject ? helper = '&#10004' : helper = '&#10006';
    return helper
};

function renderTestemonials(data, el) {
    el.innerHTML = '';
    el.innerHTML = `
    <table class="table">
        <thead class="thead-light">
        <tr>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">From</th>
            <th scope="col">For</th>
            <th scope="col">Date</th>
            <th scope="col">Approval Status</th>
            <th scope="col">testemonial</th>
            <th scope="col">Settings</th>
         </tr>
        </tr>
        </thead>
        <tbody id='testemonilas-table-body'></tbody>
    </table>`;
    const tableBody = document.querySelector('#testemonilas-table-body');
    for (const testemonial of data) {
        tableBody.innerHTML += `
        <tr>
              <th scope="row">${testemonial.id}</th>
              <td>${testemonial.user}</td>
              <td>${testemonial.for}</td>
              <td>${testemonial.date}</td>
              <td>${displayStatus(testemonial.status)}</td>
              <td>${testemonial.testimonial}</td>
              <td>
                <button>Approve</button>
                <button>Remove</button>
              </td>
        <tr>`
    };
};
renderTestemonials(reviewData, testemonialEl);


