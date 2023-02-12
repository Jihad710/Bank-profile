// step one : add click event handler with the submit button 

document.getElementById('btn-submit').addEventListener('click',function(){
// console.log('submit button clicked');
// step two: get the email address inside the email input field
// always remember to use .value to get text from an input field
const emailField = document.getElementById('user-email');
const email = emailField.value;
console.log(email);

// step three: get password
// 1.set id on the html Element
// 2.get the Element
// 3.get the value from the Element

const passwordField = document.getElementById('user-password');
const password = passwordField.value;
console.log(password);
// Danger:  do not verify email and password on the clint site

// step four: verify email and password and check valid and invalid user


if (email === 'jihadmahmud71@gmail.com' && password === 'jihad'){
    console.log("Valid user")
    window.location.href = 'bank.html';
}
else{
    alert('Invalid Password.Please Enter Correct Password')
}

})


