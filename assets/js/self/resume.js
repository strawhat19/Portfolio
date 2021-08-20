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

// Slashes Styling
var slashes = $(`.slashes`);
slashes.parent().addClass(`slashContainer`);

// Image Hover Liquid Effect
// new hoverEffect({
//     parent: $(`.distortion`),
//     intensity: 0.2,
//     image1: `./assets/images/design/IphoneTransparentVersion.png`,
//     image2: `./assets/images/design/Portfolio-screenshotlarge.jpg`,
//     displacementImage: `./assets/images/displacement/heightMap.png`
// })

// When User Clicks the Change Text Button
// var modal = $(`.modal`);
// var changeTextArea = modal.find(`input`);
// changeTextArea.keypress(event => {
//     if (event.keyCode === 13) {
//         var textValue = changeTextArea.val();
//         if (!textValue) {
//             changeTextArea.attr(`placeholder`,`Please Enter Valid Word`);
//             return;
//         } else if (textValue.split(` `).length > 2) {
//             changeTextArea.val(``);
//             changeTextArea.attr(`placeholder`,`Please Enter Only One or Two Words`);
//             return;
//         } else {
//             modal.fadeOut(1000);
//             $(`.jquery-modal`).fadeOut(1000);
//             $(`.scaleText`).hide(10).show(10).html(textValue);
//         }
//     }
// })

// Intersection Observer
let options2 = {
    root: null,
    // rootMargin: `-150px 0px`,
    // threshhold: 0.05
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
            $(entry.target).find(`text`).hide(10);
            $(entry.target).find(`text`).show(10);
            if ($(entry.target).parent().hasClass(`Resume`)) {
                $(`a[href="#Resume"]`).addClass(`active`);
                $(`#topButton`).attr(`class`,`resumeMode`);
            }
        } else {
            $(entry.target).toggleClass(`notInView`);
            $(entry.target).removeClass(`inView`);
            if ($(entry.target).parent().hasClass(`newSec`)) {
                $(`a[href="#Resume"]`).removeClass(`active`);
                $(`#topButton`).removeClass(`resumeMode`);
            }
        }
    })
}

// Animations
// Wave Animation
var waveAnimation = $(`.waveAnimation`);
waveAnimation.not(`.waveBottom`).css(`top`,`0`);

// Couch Animation
var animation = bodymovin.loadAnimation({
    container: document.querySelector('#couchAnimation'),
    renderer: `svg`,
    loop: true,
    autoplay: true,
    path: `./assets/json/couchAnimation.json`
})