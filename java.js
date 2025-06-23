let userName = document.getElementById('name')
let userEmail = document.getElementById('email')
let userContact = document.getElementById('contact')
let userForm = document.getElementById('form')

let data = JSON.parse(localStorage.getItem('userdata')) || []

let adminName = document.getElementById('')

userForm.addEventListener('submit', function(e){
    e.preventDefault()
    console.log(userName.value)

let user = {
    name: userName.value,
    email: userEmail.value,
    contact: userContact.value,
}
data.push(user);
localStorage.setItem('userdata', JSON.stringify(data))



})

