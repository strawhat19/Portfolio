// Open and Close Mobile Menu

const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

function openMobileMenu() {
	var mobileMenuOpen = document.getElementById("desktopMenu");
	var menuToggler = document.getElementById("openMenuToggler");
	mobileMenuOpen.classList.toggle("open-mobile-menu");
	menuToggler.classList.toggle("clicked");
}

console.log('%c Hey there, welcome to my website.', 'font-family: montserrat; font-size: 15px;');
console.log('%c This is a script written to log the users scrolling and simultaneously detect what section the user is on, and then using that data to trigger animations in the navigation.', 'font-family: montserrat; font-size: 15px;');


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


console.log('%c There is also a script to take the user back to the top of the page when they click the #topButton element.', 'font-family: montserrat;  font-size: 15px;');
console.log('%c Feel free to scroll and see the changes.', 'font-family: montserrat; font-size: 15px;');
console.log('%c Thank you for visiting', 'font-family: montserrat;  font-size: 15px;');


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
 topButton.classList.toggle('redMode', window.scrollY > projectsRectTop - 500 && window.scrollY < contactRectTop);
 topButton.classList.toggle('blueMode', window.scrollY > contactRectTop - 500);
})


// When the user scrolls down 0px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
  
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



function getUsername() {

var person = prompt("Please enter your name");

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
   console.log(entry.target);
  })
}, options);

sections.forEach(section => {
  observer.observe(section);
});

// // I just thought this code was cool
// // Code injected by live-server

// 	// <![CDATA[  <-- For SVG support
// 	if ('WebSocket' in window) {
// 		(function () {
// 			function refreshCSS() {
// 				var sheets = [].slice.call(document.getElementsByTagName("link"));
// 				var head = document.getElementsByTagName("head")[0];
// 				for (var i = 0; i < sheets.length; ++i) {
// 					var elem = sheets[i];
// 					var parent = elem.parentElement || head;
// 					parent.removeChild(elem);
// 					var rel = elem.rel;
// 					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
// 						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
// 						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
// 					}
// 					parent.appendChild(elem);
// 				}
// 			}
// 			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
// 			var address = protocol + window.location.host + window.location.pathname + '/ws';
// 			var socket = new WebSocket(address);
// 			socket.onmessage = function (msg) {
// 				if (msg.data == 'reload') window.location.reload();
// 				else if (msg.data == 'refreshcss') refreshCSS();
// 			};
// 			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
// 				console.log('Live reload enabled.');
// 				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
// 			}
// 		})();
// 	}
// 	else {
// 		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
// 	}
// 	// ]]>
