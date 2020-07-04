
//Variables
const usersEl = document.querySelector('#users-element');
const searchInput = document.querySelector('#search-user');
const mainBody = document.querySelector('#main');
const filterBrns = Array.from(document.querySelectorAll('.user-btns'));
let usersData = getUsers();
//Helper viariables 
let activeHelper = false;
let inactiveHelper = false;
let counselorsHelper = false;
let patientHelper = false;

//render functions
function displayUserActivity(dataObject) {
  let helper = {};
  dataObject ? helper.isActive = '&#10004' : helper.isActive = '&#10006';
  dataObject ? helper.isChecked = 'checked' : null;
  return helper
};

function displayUserLname(dataObject) {
  let helper = '';
  dataObject ? helper = dataObject : helper = 'No records found';
  return helper
};

function renderUsers(data, el) {
  el.innerHTML = ``;
  el.innerHTML = `
    <table class="table">
            <thead class="thead-light">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name or Nickname</th>
                <th scope="col">Last Name</th>
                <th scope="col">E-mail</th>
                <th scope="col">Active</th>
                <th scope="col">Role</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody id='users-table-body'></tbody>
    </table>`;
  let tableBody = document.querySelector('#users-table-body');
  for (let user of data) {
    tableBody.innerHTML += `
        <tr>
            <th scope="row">${user.id}</th>
            <td>${user.name}</td>
            <td>${displayUserLname(user.lastName)}</td>
            <td>${user.email}</td>
            <td>${displayUserActivity(user.active).isActive}</td>
            <td>${user.role}</td>
            <td>
            <a class="btn btn-sm btn-success all-edit-btns" id="editU_${user.id}" onclick="editData(this)"><i class="fa fa-pencil all-edit-btns"></i></a> 
            </td>
        </tr>
        <tr >
            <td></td>
            <td></td>
            <td>
              <h6 class="users${user.id}" style="color: red;">
                Activate, deactivate or delete this account
              </h6>
            </td>
            <td>
            <input type="checkbox" id="editU_active_${user.id}" class="users${user.id}" ${displayUserActivity(user.active).isChecked} >
            <label for="editU_active_${user.id}" class="users${user.id}">Active</label>
            </td>
            <td></td>
            <td>
            <a class="btn btn-sm btn-success users${user.id}" id="saveU_${user.id}" onclick="saveEditedData(this)"><i class="fa fa-floppy-o"></i></a>
            <a class="btn btn-sm btn-danger users${user.id}" id="deleteU_${user.id}" onclick="deleteData(this)"><i class="fa fa-trash"></i></a>
            </td>
        </tr>
        `
    Array.from(document.querySelectorAll(`.users${user.id}`)).map(el => el.style.display = "none")
  };

};
renderUsers(usersData, usersEl);

//Filter buttons event handling
(function () {
  for (const btn of filterBrns) {
    btn.addEventListener('click', () => {
      switch (btn.id) {
        case 'activeBtn':
          activeHelper ? activeHelper = false : activeHelper = true;
          activeHelper ? btn.style.backgroundColor = "rgb(94, 86, 75)" : btn.style.backgroundColor = "rgb(102, 91, 75, 0.8)";
          filterData(usersData);
          break;

        case 'inactiveBtn':
          inactiveHelper ? inactiveHelper = false : inactiveHelper = true;
          inactiveHelper ? btn.style.backgroundColor = "rgb(89, 81, 70)" : btn.style.backgroundColor = "rgb(102, 91, 75, 0.8)";
          filterData(usersData);
          break;

        case 'counselorBtn':
          counselorsHelper ? counselorsHelper = false : counselorsHelper = true;
          counselorsHelper ? btn.style.backgroundColor = "rgb(89, 81, 70)" : btn.style.backgroundColor = "rgb(102, 91, 75, 0.8)";
          filterData(usersData);
          break;

        case 'patientBtn':
          patientHelper ? patientHelper = false : patientHelper = true;
          patientHelper ? btn.style.backgroundColor = "rgb(89, 81, 70)" : btn.style.backgroundColor = "rgb(102, 91, 75, 0.8)";
          filterData(usersData);
          break;

        default:
          break;
      }
    })
  };
})();

//Filter buttons
function filterData(unfilteredData) {
  let data = unfilteredData
    .filter(user =>
      (activeHelper && inactiveHelper) || (!activeHelper && !inactiveHelper) ? user.active === true || user.active === false
        : activeHelper ? user.active === true
          : user.active === false
    )
    .filter(user =>
      (counselorsHelper && patientHelper) || (!counselorsHelper && !patientHelper) ? user.role === 'counselor' || user.role === 'user'
        : counselorsHelper ? user.role === 'counselor'
          : user.role === 'user'
    );
  renderUsers(data, usersEl)
};

//Search user by name input
function searchUserByName(searchCriteria, data) {
  let filterData = [];
  if (searchCriteria !== '') {
    for (const user of data) {
      if (user.name.toLowerCase().includes(searchCriteria.toLowerCase())) {
        filterData.push(user);
      }
    }
    return filterData
  }
  return data
};

searchInput.addEventListener('input', (e) => {
  let filteredData = searchUserByName(e.target.value, usersData);
  renderUsers(filteredData, usersEl)
});


