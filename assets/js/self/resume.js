// Resume JS File for New Code
console.log(`Resume!`);

// Declaring Variables
var copyright = $(`.copyright-info`);
console.log(copyright);

// Initializing First Map Screen
function initmap(){
    var options = {
        zoom: 1,
        center: {lat:30,lng:0}
    } // Map Options
    var map = new google.maps.Map(document.getElementById('map'),options);
} // Invoking Create Map Function using Google Maps API
initmap();

// var testLink = $(``)

// Animations
var animation = bodymovin.loadAnimation({
    container: document.querySelector('#couchAnimation'),
    renderer: `svg`,
    loop: true,
    autoplay: true,
    path: `./assets/json/couchAnimation.json`
  })

