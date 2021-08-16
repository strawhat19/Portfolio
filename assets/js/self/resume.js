// Resume JS File for New Code
console.log(`JS for Resume Section!`);

// Fading In Main Body
// More Animation Variables Below
const body = $(`body`);
body.attr(`style`,`display: none`);
body.fadeIn(1000);

// Declaring Variables
var copyrightYear = $(`.copyright-year`);
copyrightYear.html(moment().format(`YYYY`));

// Intersection Observer
// An API That Lets Us Detect When Elements Are In ViewPort
let options2 = {
    root: null,
    rootMargin: `-150px 0px`,
    threshhold: 0.05
};

// Declaring New Observer To Use for Observing All Elements with Class of .observe
var observedItems = $(`.observe`);
console.log(`Total Elements Being Observed: ${observedItems.length}`);

let observer2 = new IntersectionObserver(inView, options2);
observedItems.each((index,element) => {
    observer2.observe(element);
})

// If The Element Is In The View Port
function inView(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            $(entry.target).children().attr(`style,animation:none;`)
            $(entry.target).fadeIn(5000);
            $(entry.target).toggleClass(`inView`);
            $(entry.target).removeClass(`notInView`);
            $(entry.target).removeClass(`animationEnded`);
        } else {
            $(entry.target).toggleClass(`notInView`);
            $(entry.target).removeClass(`inView`);
        }
    })
}

// Initializing First Map Screen
// function initmap(){
//     var options = {
//         zoom: 1,
//         center: {lat:30,lng:0}
//     } // Map Options
//     var map = new google.maps.Map(document.getElementById('map'),options);
// } // Invoking Create Map Function using Google Maps API
// initmap();

// var testLink = $(``)

// Animations
var animation = bodymovin.loadAnimation({
    container: document.querySelector('#couchAnimation'),
    renderer: `svg`,
    loop: true,
    autoplay: true,
    path: `./assets/json/couchAnimation.json`
  })

