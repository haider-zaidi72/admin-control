let userName = document.getElementById('name');
let userEmail = document.getElementById('email');
let userContact = document.getElementById('contact');
let userForm = document.getElementById('form');
//===============get admin data=============================
let adminEmail = document.getElementById('admin-email');
let adminPassword = document.getElementById('admin-password');
let adminForm = document.getElementById('admin-form');
// let show = document.getElementById('show')

//============== local data storage=====================
// let data = JSON.parse(localStorage.getItem('userdata')) || []
//==================user time=========================
let userTime = new Date().toLocaleTimeString();

// console.log(userTime)
//====================user From Data=====================
if (userForm) {
    userForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // console.log(userName.value)
        let user = {
            name: userName.value,
            email: userEmail.value,
            number: userContact.value,
            time: new Date ().toLocaleTimeString(),
        };
        let data = JSON.parse(localStorage.getItem('userdata')) || [];
        data.push(user);
        localStorage.setItem('userdata', JSON.stringify(data));
        userForm.reset();
        alert("Data saved sucessfully!");
    });
}
//==========================admin form========================
if (adminForm) {
    adminForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (adminEmail.value == "admin@gmail.com" && adminPassword.value == "123456") {
            window.location.href = "dashboard.html"
        } else {
            alert("admin Email or Password is not correct. Please enter correct credentials")
        }

    });
}

//==========================dashboard========================= 
let show = document.getElementById('show');

function render() {
    // Only run if we are on the dashboard page
    if (show) {
        let data = JSON.parse(localStorage.getItem('userdata')) || [];

        show.innerHTML = ""; // clear previous rows

        data.forEach((user, index) => {
            show.innerHTML += `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.number}</td>
                    <td><button onclick="editUser(${index})">Edit</button></td>
                </tr>
            `;
            function editUser(){
                 
            }
        });
    }
}

render(); // Call it on page load
