const fakeUsers = [
    {
      id: 1,
      username: 'john_doe',
      email: 'john.doe@example.com',
      age: 30,
      city: 'New York',
      country: 'USA'
    },
    {
      id: 2,
      username: 'jane_smith',
      email: 'jane.smith@example.com',
      age: 25,
      city: 'Los Angeles',
      country: 'USA'
    },
    {
      id: 3,
      username: 'alex_wong',
      email: 'alex.wong@example.com',
      age: 28,
      city: 'Toronto',
      country: 'Canada'
    },
    {
      id: 4,
      username: 'emily_jones',
      email: 'emily.jones@example.com',
      age: 35,
      city: 'London',
      country: 'UK'
    },
    {
      id: 5,
      username: 'michael_smith',
      email: 'michael.smith@example.com',
      age: 40,
      city: 'Sydney',
      country: 'Australia'
    },
    {
      id: 6,
      username: 'maria_garcia',
      email: 'maria.garcia@example.com',
      age: 27,
      city: 'Madrid',
      country: 'Spain'
    },
    {
      id: 7,
      username: 'adam_williams',
      email: 'adam.williams@example.com',
      age: 33,
      city: 'Paris',
      country: 'France'
    },
    {
      id: 8,
      username: 'sophia_nguyen',
      email: 'sophia.nguyen@example.com',
      age: 22,
      city: 'Ho Chi Minh City',
      country: 'Vietnam'
    },
    {
      id: 9,
      username: 'maximilian_müller',
      email: 'maximilian.muller@example.com',
      age: 31,
      city: 'Berlin',
      country: 'Germany'
    },
    {
      id: 10,
      username: 'anna_kovács',
      email: 'anna.kovacs@example.com',
      age: 29,
      city: 'Budapest',
      country: 'Hungary'
    }
    // Add more fake user data as needed
  ];
  
  function renderTable(users) {
    const userData = document.getElementById('userData');
    userData.innerHTML = '';
  
    users.forEach(user => {
      const row = `<tr>
        <td>${user.id}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.age}</td>
        <td>${user.city}</td>
        <td>${user.country}</td>
      </tr>`;
      userData.innerHTML += row;
    });
  }
  
  function displayFilteredData(data) {
    const filteredDataBox = document.getElementById('filteredDataBox');
    filteredDataBox.innerHTML = '';

    data.forEach(item => {
        const paragraph = document.createElement('p');
        paragraph.textContent = item;
        filteredDataBox.appendChild(paragraph);
    });
}

  
  function filterData(criteria) {
    let sortedData = [];
  
    if (criteria === 'username') {
      sortedData = fakeUsers.map(user => user.username);
    } else if (criteria === 'city') {
      sortedData = fakeUsers.map(user => user.city);
    } else if (criteria === 'age') {
      sortedData = fakeUsers.map(user => user.age);
    } else if (criteria === 'country') {
      sortedData = fakeUsers.map(user => user.country);
    }
  
    displayFilteredData(sortedData);
    renderTable(fakeUsers); // Display the original table
   
  }
  

  document.getElementById('usernameBtn').addEventListener('click', function () {
    filterData('username');
});

document.getElementById('cityBtn').addEventListener('click', function () {
    filterData('city');
});

document.getElementById('ageBtn').addEventListener('click', function () {
    filterData('age');
});

document.getElementById('countryBtn').addEventListener('click', function () {
    filterData('country');
});
  // Initial rendering
  renderTable(fakeUsers);
  