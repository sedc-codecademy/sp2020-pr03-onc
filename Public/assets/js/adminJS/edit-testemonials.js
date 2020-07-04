const testemonialEl = document.querySelector('#testemonilas-element');
const searchInputTwo = document.querySelector('#search-review');
const reviewBtns = Array.from(document.querySelectorAll('.review-btns'));
let reviewData = getTestemonials();
//Helper variables
let approvedHelper = false;
let disapprovedHelper = false;

//Filter reviews
function filterRewievs(unfilteredData) {
    let data = unfilteredData.filter(review =>
        !approvedHelper && !disapprovedHelper || approvedHelper && disapprovedHelper
            ? review.status === true || review.status === false
            : approvedHelper ? review.status === true : review.status === false
    );
    renderTestemonials(data, testemonialEl)
};

//Filter btns event
(function () {
    for (const btn of reviewBtns) {
        btn.addEventListener('click', (e) => {
            if (btn.id === 'approved') {
                approvedHelper ? approvedHelper = false : approvedHelper = true;
                approvedHelper ? btn.style.backgroundColor = "rgb(89, 81, 70)" : btn.style.backgroundColor = "rgb(102, 91, 75, 0.8)";
                filterRewievs(reviewData);
            } else {
                disapprovedHelper ? disapprovedHelper = false : disapprovedHelper = true;
                disapprovedHelper ? btn.style.backgroundColor = "rgb(89, 81, 70)" : btn.style.backgroundColor = "rgb(102, 91, 75, 0.8)";
                filterRewievs(reviewData);
            }
        });
    }
})();

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
    let helper = {};
    dataObject ? helper.isActive = '&#10004' : helper.isActive = '&#10006';
    dataObject ? helper.isChecked = 'checked' : null;
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
            <th scope="col">Actions</th>
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
              <td>${displayStatus(testemonial.status).isActive}</td>
              <td>${testemonial.testimonial}</td>
              <td>
              <a class="btn btn-sm btn-success all-edit-btns" id="editT_${testemonial.id}" onclick="editData(this)"><i class="fa fa-pencil all-edit-btns"></i></a> 
              </td>
        </tr>
        <tr>
           
            <td></td>
            <td></td>
            <td></td>
            <td>
                <h6 style="color: red;" class="reviews${testemonial.id}">
                    Approve, disapprove or delete this review
                </h6>
            </td>
            <td>
                <input type="checkbox" id="editT_active_${testemonial.id}" class="reviews${testemonial.id}" ${displayStatus(testemonial.status).isChecked}>
                <label for="editT_active_${testemonial.id}" class="reviews${testemonial.id}">Active</label>
            </td>
            <td>
            <a class="btn btn-sm btn-success reviews${testemonial.id}" id="saveT_${testemonial.id}" onclick="saveEditedData(this)"><i class="fa fa-floppy-o"></i></a>
            <a class="btn btn-sm btn-danger reviews${testemonial.id}" id="deleteT_${testemonial.id}" onclick="deleteData(this)"><i class="fa fa-trash"></i></a>
            </td>
        </tr>`
        Array.from(document.querySelectorAll(`.reviews${testemonial.id}`)).map(el => el.style.display = "none")
    };
};
renderTestemonials(reviewData, testemonialEl);


