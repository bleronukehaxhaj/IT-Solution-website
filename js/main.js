// Start of navbar
var hamburger = document.getElementsByClassName('toggle-button')[0];
var navLink = document.getElementsByClassName('nav-links')[0];
hamburger.addEventListener('click', () => {
	navLink.classList.toggle('active');

});
// End of navbar

// Start of to top button
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

mybutton.addEventListener('click', () => {
	topFunction();

});
// End of to top button