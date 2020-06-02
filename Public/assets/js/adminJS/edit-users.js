
//RENDER USERS
const usersEl = document.querySelector('#users-element');
const searchInput = document.querySelector('#search-user');
let activeHelper = true;
let inactiveHelper = true;
let counselorsHelper = false;
let patientHelper = false;


function displayUserActivity(dataObject) {
  let helper = ''
  dataObject ? helper = '&#10004' : helper = '&#10006'
  return helper
}

function displayUserLname(dataObject) {
  let helper = ''
  dataObject ? helper = dataObject : helper = '&#10006'
  return helper
}

function renderUsers(data, el) {
  el.innerHTML = ``;
  el.innerHTML = `
    <table class="table">
            <thead class="thead-light">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name or Nickname</th>
                <th scope="col">Last Name</th>
                <th scope="col">Role</th>
                <th scope="col">E-mail</th>
                <th scope="col">Active</th>
                <th scope="col">Settings</th>
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
            <td>${user.role}</td>
            <td>${user.email}</td>
            <td>${displayUserActivity(user.active)}</td>
            <td>
              <button>Edit</button>
              <button>Remove</button>
            </td>
        </tr>`
  };
};
renderUsers(users, usersEl)

function searchUserByName(searchCriteria, data) {
  let filterData = [];
  if (searchCriteria !== '') {
    for (const user of data) {
      if (user.name.toLowerCase().includes(searchCriteria.toLowerCase())) {
        filterData.push(user)
      }
    }
    return filterData
  }
  return data
}

//Search user by name input
searchInput.addEventListener('input', (e) => {
  let data = getUsers();
  let filteredData = searchUserByName(e.target.value, data);
  renderUsers(filteredData, usersEl)
});





//Da moze da pravi disable na user ova bi trebalo da bide edit na userot i da go smeni propertito active/inactive sto vo pozadina bi bilo true/false()

//da moze da brise megutoa samo od neaktivni useri

//active, inactive and all users users listi

//log out btn treba da go prebaci na landing page

//handlanje na revies content

//da gi prikaze site prasanja da moze da birse i da dodava prasanja od prasalnikot