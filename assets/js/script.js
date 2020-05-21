// Owl Carousel for Portfolio on page load
$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

// Owl Carousel properties
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    rewindNav: true,
    // some bigger, more noticeable arrows
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    // Mobile screens show 1 and slideBy 1 at a time, Big screens are 3 & 3
    responsive: {
        0: {
            items: 1,
            slideBy: 1
        },
        576: {
            items: 3,
            slideBy: 3
        }
    }
})

/* The stuff below is just a placeholder for now,
    eventually we're going to build something useful */

// listener on Submit button, Contact page, calls storeInfo()
// future edits will call a new function on click to verify forms
// are filled correctly, and that function will call storeInfo()
$("#submit-btn").on("click", storeInfo);

// maybe a useful global array in the future?
let $contactSubmit = [];

// storeInfo() puts all inputs in to array
function storeInfo() {
    // Bootstrap was doing something weird here
    event.preventDefault();
    // capture values in vars
    let $contactName = $("#contact-name").val();
    let $contactEmail = $("#contact-email").val();
    let $contactMsg = $("#contact-msg").val();
    // clear forms after submission, was handled by Bootstrap
    $("form")[0].reset();
    $contactSubmit.push($contactName, $contactEmail, $contactMsg);
    console.log($contactSubmit)
    localStorage.setItem("contact", JSON.stringify($contactSubmit));
}