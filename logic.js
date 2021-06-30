console.log('Hey there, welcome to my website!');
console.log('This is a script written to log the users scrolling and simultaneously detect what section the user is on, and then using that data to trigger animations in the navigation. Feel free to scroll and see the changes. Thank you for visiting');

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li');

window.addEventListener('scroll', ()=> {
    let current = '';

    sections.forEach( section => {
const sectionTop = section.offsetTop;
const sectionHeight = section.clientHeight;
if(pageYOffset >= (sectionTop - sectionHeight / 3)) {
    current = section.getAttribute('id');
    console.log(current);
    
    console.log(pageYOffset);
}
    })

    

    navLi.forEach( li => {
        li.classList.remove('active');
if(li.classList.contains(current)){
    li.classList.add('active');
}
    })
})

