console.log('%c Hey there, welcome to my website!', 'font-family: montserrat; font-size: 15px;');
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

    console.log("%c Current section id and class:", "font-family: montserrat; font-size: 15px;");
    console.log("%c" + current, "color: white; background: #00c2ff; padding: 0 15px; font-family: montserrat; font-size: 15px;");
    console.log("%c Current distance from top is:", "font-family: montserrat; font-size: 15px;");
    console.log("%c" + pageYOffset, "color: white; background: #00cc80; padding: 0 15px; font-family: montserrat; font-size: 15px;");
    
    

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


//Get the button:
topButton = document.getElementById("topButton");
topButton.className = '';

// Change Button Color on Scroll
window.addEventListener('scroll', function () {
 topButton.classList.toggle('redMode', window.scrollY > 350);
 topButton.classList.toggle('blueMode', window.scrollY > 1100);
})


// When the user scrolls down 20px from the top of the document, show the button
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