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
        600: {
            items: 3,
            slideBy: 3
        }
    }
})