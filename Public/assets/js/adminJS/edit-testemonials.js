const testemonialEl = document.querySelector('#testemonilas-element');

function displayStatus(dataObject) {
    let helper = ''
    dataObject ? helper = '&#10004' : helper = '&#10006'
    return helper
}

function renderTestemonials(data, el) {
    data.innerHTML = '';
    el.innerHTML = ``;
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
renderTestemonials(testimonialsData, testemonialEl)
