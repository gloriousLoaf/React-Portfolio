// Owl Carousel on page load
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
        575: {
            items: 3,
            slideBy: 3
        }
    }
})

// Window Listener to append or remove Swipe instructions for Mobile screens
// thanks to Cory Danielson & JT on Stack Overflow for guide:
// https://stackoverflow.com/questions/9828831/jquery-on-window-resize
// https://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed

// Underscore.js .debounce() to prevent multiple firings
$(window).resize(_.debounce(function () {
    let win = $(this);
    // var to hold html
    let $swipeMe = '<div class="row d-flex justify-content-center swipe-me"><div class="card"><div class="card-body">Swipe or Tap Arrows</div></div></div>';
    // conditional: if under 575 append html, if over remove
    if (win.width() <= 575) {
        $(".card-deck").append($swipeMe);
    }
    if (win.width() >= 575) {
        $(".swipe-me").remove();
    }
}, 500));