// Start of navbar
var hamburger = document.getElementsByClassName('toggle-button')[0];
var navLink = document.getElementsByClassName('nav-links')[0];
hamburger.addEventListener('click', () => {
	navLink.classList.toggle('active');

});
// End of navbar


// Start of login and signup validation

var form = document.getElementById('form');
form.addEventListener('submit', e => {
	e.preventDefault();

	checkEmail();
	checkPassword();
	checkName();
	checkConfirmPass();

});


function checkEmail() {
	var email = document.getElementById('email').value;

	if (email == "") {
		document.getElementById('emailError').innerHTML = "This field is required";
		document.getElementById('email').style.border = "2px solid red";

	} else {
		document.getElementById('emailError').innerHTML = "";
		document.getElementById('email').style.border = "none";
	}

	//     alert("Email: "+email+"\nPassword: "+password);
}

function checkPassword() {
	var password = document.getElementById('password').value;


	if (password == "") {
		document.getElementById('passError').innerHTML = "This field is required";
		document.getElementById('password').style.border = "2px solid red";
	} else if (password.length < 8) {
		document.getElementById('passError').innerHTML = "Password length must be atleast 8 characters";
		document.getElementById('password').style.border = "2px solid red";
	} else {
		document.getElementById('passError').innerHTML = "";
		document.getElementById('password').style.border = "none";
	}


}

function checkName() {

	var name = document.getElementById('name').value;
	if (name == "") {
		document.getElementById('nameError').innerHTML = "This field is required";
		document.getElementById('name').style.border = "2px solid red";

	} else {
		document.getElementById('nameError').innerHTML = "";
		document.getElementById('name').style.border = "none";
	}



}

function checkConfirmPass() {
	var password = document.getElementById('password').value;
	var confirmPass = document.getElementById('confirmPass').value;
	if (confirmPass == "") {
		document.getElementById('confirmError').innerHTML = "This field is required";
		document.getElementById('confirmPass').style.border = "2px solid red";
	} else if (confirmPass != password) {
		document.getElementById('confirmError').innerHTML = "Passwords do not match ";
		document.getElementById('confirmPass').style.border = "2px solid red";
	} else {
		document.getElementById('confirmError').innerHTML = "";
		document.getElementById('confirmPass').style.border = "none";
	}



}
// End of login and signup validation



