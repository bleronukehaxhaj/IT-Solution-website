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





const PROJECTS = 235;
const CLIENTS = 458;
const TEAM = 542;
const AWARDS = 167;

var currentClients = 0;
var currentProjects = 0;
var currentTeam = 0;
var currentAwards = 0;

const PROJECTS_COUNTER = setInterval(() => {
	document.getElementById("projects").innerHTML = currentProjects;
	currentProjects++;
	if (currentProjects === PROJECTS + 1) {
		clearInterval(PROJECTS_COUNTER);
	}
}, 20);

const CLIENTS_COUNTER = setInterval(() => {
	document.getElementById("clients").innerHTML = currentClients;
	currentClients++;
	if (currentClients === CLIENTS + 1) {
		clearInterval(CLIENTS_COUNTER);
	}
}, 20);

const TEAM_COUNTER = setInterval(() => {
	document.getElementById("team").innerHTML = currentTeam;
	currentTeam++;
	if (currentTeam === TEAM + 1) {
		clearInterval(TEAM_COUNTER);
	}
}, 20);

const AWARDS_COUNTER = setInterval(() => {
	document.getElementById("awards").innerHTML = currentAwards;
	currentAwards++;
	if (currentAwards === AWARDS + 1) {
		clearInterval(AWARDS_COUNTER);
	}
}, 20);




