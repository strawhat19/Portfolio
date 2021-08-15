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

