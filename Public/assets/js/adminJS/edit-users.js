
//RENDER USERS
const usersEl = document.querySelector('#users-element');
const searchInput = document.querySelector('#search-user');
const filterBrns = Array.from(document.querySelectorAll('.user-btns'));
const usersData = getUsers();
//Helper viariables for filter buttons
let activeHelper = false;
let inactiveHelper = false;
let counselorsHelper = false;
let patientHelper = false;

//Filter buttons event handling
(function () {
  for (const btn of filterBrns) {
    btn.addEventListener('click', () => {
      // btn.setAttribute("onmouseover", `style="background-color:rgb(180, 168, 152);"`)
      // btn.setAttribute("onmouseout", `style="background-color:black"`)
      switch (btn.id) {
        case 'activeBtn':
          activeHelper ? activeHelper = false : activeHelper = true;
          activeHelper ? btn.style.backgroundColor = "rgb(89, 81, 70)" : btn.style.backgroundColor = "rgb(89, 81, 70, .8)";
          filterData(usersData);
          break;

        case 'inactiveBtn':
          inactiveHelper ? inactiveHelper = false : inactiveHelper = true;
          inactiveHelper ? btn.style.backgroundColor = "rgb(89, 81, 70)" : btn.style.backgroundColor = "rgb(89, 81, 70, .8)";
          filterData(usersData);
          break;

        case 'counselorBtn':
          counselorsHelper ? counselorsHelper = false : counselorsHelper = true;
          counselorsHelper ? btn.style.backgroundColor = "rgb(89, 81, 70)" : btn.style.backgroundColor = "rgb(89, 81, 70, .8)";
          filterData(usersData);
          break;

        case 'patientBtn':
          patientHelper ? patientHelper = false : patientHelper = true;
          patientHelper ? btn.style.backgroundColor = "rgb(89, 81, 70)" : btn.style.backgroundColor = "rgb(89, 81, 70, .8)";
          filterData(usersData);
          break;

        default:
          break;
      }
    })
  };
})();


function filterData(data) {
  let filteredData = [];
  //all data 
  if (!activeHelper && !inactiveHelper && !counselorsHelper && !patientHelper) {
    renderUsers(data, usersEl)
    return true
  }

  if (activeHelper && inactiveHelper && counselorsHelper && patientHelper) {
    renderUsers(data, usersEl)
    return true
  }

  if (!activeHelper && !inactiveHelper && counselorsHelper && patientHelper) {
    renderUsers(data, usersEl)
    return true
  }

  if (activeHelper && inactiveHelper && !counselorsHelper && !patientHelper) {
    renderUsers(data, usersEl)
    return true
  }
  //Filter all active 
  if (activeHelper && !inactiveHelper && !counselorsHelper && !patientHelper) {
    filteredData = data.filter(user => user.active === true)
    renderUsers(filteredData, usersEl)
    return true
  }
  if (activeHelper && !inactiveHelper && counselorsHelper && patientHelper) {
    filteredData = data.filter(user => user.active === true)
    renderUsers(filteredData, usersEl)
    return true
  }
  //Filter all inactive 
  if (!activeHelper && inactiveHelper && !counselorsHelper && !patientHelper) {
    filteredData = data.filter(user => user.active === false)
    renderUsers(filteredData, usersEl)
    return true
  }
  if (!activeHelper && inactiveHelper && counselorsHelper && patientHelper) {
    filteredData = data.filter(user => user.active === false)
    renderUsers(filteredData, usersEl)
    return true
  }
  //Filter all counselors 
  if (!activeHelper && !inactiveHelper && counselorsHelper && !patientHelper) {
    filteredData = data.filter(user => user.role === 'counselor')
    renderUsers(filteredData, usersEl)
    return true
  }

  if (activeHelper && inactiveHelper && counselorsHelper && !patientHelper) {
    filteredData = data.filter(user => user.role === 'counselor')
    renderUsers(filteredData, usersEl)
    return true
  }

  //Filter active counselors 
  if (activeHelper && !inactiveHelper && counselorsHelper && !patientHelper) {
    filteredData = data.filter(user => user.role === 'counselor').filter(user => user.active === true)
    renderUsers(filteredData, usersEl)
    return true
  }

  //Filter inactive counselors 
  if (!activeHelper && inactiveHelper && counselorsHelper && !patientHelper) {
    filteredData = data.filter(user => user.role === 'counselor').filter(user => user.active === false)
    renderUsers(filteredData, usersEl)
    return true
  }

  //Filter all patiens 
  if (!activeHelper && !inactiveHelper && !counselorsHelper && patientHelper) {
    filteredData = data.filter(user => user.role === 'user')
    renderUsers(filteredData, usersEl)
    return true
  }

  if (activeHelper && inactiveHelper && !counselorsHelper && patientHelper) {
    filteredData = data.filter(user => user.role === 'user')
    renderUsers(filteredData, usersEl)
    return true
  }

  //Filter active patients 
  if (activeHelper && !inactiveHelper && !counselorsHelper && patientHelper) {
    filteredData = data.filter(user => user.role === 'user').filter(user => user.active === true)
    renderUsers(filteredData, usersEl)
    return true
  }

  //Filter inactive patients 
  if (!activeHelper && inactiveHelper && !counselorsHelper && patientHelper) {
    filteredData = data.filter(user => user.role === 'user').filter(user => user.active === false)
    renderUsers(filteredData, usersEl)
    return true
  }
};


function displayUserActivity(dataObject) {
  let helper = '';
  dataObject ? helper = '&#10004' : helper = '&#10006';
  return helper
};

function displayUserLname(dataObject) {
  let helper = '';
  dataObject ? helper = dataObject : helper = '&#10006';
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
renderUsers(usersData, usersEl);

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

//Search user by name input
searchInput.addEventListener('input', (e) => {
  let filteredData = searchUserByName(e.target.value, usersData);
  renderUsers(filteredData, usersEl)
});


