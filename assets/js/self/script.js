// Open and Close Mobile Menu

const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

function openMobileMenu() {
	var mobileMenuOpen = document.getElementById("desktopMenu");
	var menuToggler = document.getElementById("openMenuToggler");
	mobileMenuOpen.classList.toggle("open-mobile-menu");
	menuToggler.classList.toggle("clicked");
}

// Open and Close Interests Menu

const openInterests = document.getElementById("interestsLink");
const interestsAccordion = document.getElementById("interestsAccordion");

function openInterestsList() {
	var interestsList = document.getElementById("interestsList");
	interestsAccordion.classList.toggle("open-interests-list");
	openInterests.classList.toggle("clicked");
	interestsList.classList.toggle("openList");
}

console.log('Hey there, welcome to my website.');
// console.log('%c Hey there, welcome to my website.', 'font-family: montserrat; font-size: 15px;'); // Styled Log

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li');
var currentSection = pageYOffset;

window.addEventListener('scroll', ()=> {

    let current = '';

    sections.forEach( section => {
        
const sectionTop = section.offsetTop;
const sectionHeight = section.clientHeight;


if(pageYOffset >= (sectionTop - sectionHeight / 4)) {
    current = section.getAttribute('id');
    
}
    })

    navLi.forEach( li => {
        li.classList.remove('active');
if(li.classList.contains(current)){
    li.classList.add('active');
}
    })
})

// Get the button:
topButton = document.getElementById("topButton");
topButton.className = '';

// Initialize section top calculations
projectsSection = document.getElementById("Projects");
projectsRectTop = projectsSection.getBoundingClientRect().top;
contactSection = document.getElementById("Contact");
contactRectTop = contactSection.getBoundingClientRect().top;

// Change Button Color on Scroll
window.addEventListener('scroll', function () {
  // topButton.classList.toggle('navyMode', window.scrollY > 
 topButton.classList.toggle('redMode', window.scrollY > projectsRectTop - 610 && window.scrollY < contactRectTop);
 topButton.classList.toggle('blueMode', window.scrollY > contactRectTop);
})

// When the user scrolls down 0px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  let nav = document.querySelector(`nav`);
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    nav.classList.add(`scrolled`);
    topButton.style.display = "block";
  } else {
    nav.classList.remove(`scrolled`);
    topButton.style.display = "none";
  }
  
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// When user clicks Border Button, prompt for username
function getUsername() {

var person = prompt("Please enter your name");

	// When user replace Footer Text with username entered from prompt function
  document.getElementById("demoButton").innerHTML = "CLICK TO CHANGE NAME AGAIN";
  document.getElementById("footer-text").innerHTML = "THANKS FOR VISITING " + '<a id="insertName" onclick="getUsername()"></a>';
  document.getElementById("insertName").innerHTML = person + "!";

}

// Trying Intersection Observer
const options = {
  root: null,
  threshold: 0,
  rootMargin: "0px"
};

const observer = new IntersectionObserver(function(entries,observer) {
  entries.forEach(entry => {
  //  console.log(entry);
  })
}, options);

sections.forEach(section => {
  observer.observe(section);
});