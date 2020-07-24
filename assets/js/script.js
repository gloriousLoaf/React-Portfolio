/* Some day I might rewrite this whole things withough jQuery. */
/* Today is not that day. */

// Owl Carousel for Portfolio on page load
$(document).ready(() => {
    $(`.owl-carousel`).owlCarousel();
});

// Owl Carousel properties
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    rewindNav: true,
    // some bigger, more noticeable arrows than stock Owl
    navText: [`<i class="fa fa-chevron-left"></i>`, `<i class="fa fa-chevron-right"></i>`],
    // mobile screens show 1 and slideBy 1 at a time, big screens are 3 & 3
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
});

/* Nav & Home link scrolling, props to this guy for the good explainer:
    https://howchoo.com/g/yjfjmty1zjb/how-to-animate-scroll-in-jquery
    Maybe I should just use a library or npm to handle this? */

// vars to hold offset coordinates for scoller() - first, the navbar
const $portTop = $(`#portfolio`).offset().top;
const $aboutTop = $(`#aboutme`).offset().top;
const $contactTop = $(`#contact`).offset().top;
// next, the Section h3 headers kind of look like links? why not
const $goPort = $(`#goPort`).offset().top;
const $goAbout = $(`#goAbout`).offset().top;
const $goContact = $(`#goContact`).offset().top;

// click listeners that pass vars to scroller()
$(`#portTop`).click({ param: $portTop }, scroller);
$(`#aboutTop`).click({ param: $aboutTop }, scroller);
$(`#contactTop`).click({ param: $contactTop }, scroller);
// delegate listeners to the headers - this feels like overkill?
$(`body`).delegate(`#goPort`, `click`, { param: $goPort }, scroller);
$(`body`).delegate(`#goAbout`, `click`, { param: $goAbout }, scroller);
$(`body`).delegate(`#goContact`, `click`, { param: $goContact }, scroller);
// .scrollUp is on each tiny home link - scroll to top
$(`.scrollUp`).click({ param: 0 }, scroller);

// scroller() animates to the offset
function scroller(position) {
    $(`html, body`).animate({
        scrollTop: position.data.param
    }, 500);
};

/* The stuff below was a placeholder before starting back end class modules,
    maybe next rewrite I'll build out some real stuff here. */

// listener on Submit button, Contact page, calls storeInfo()
$(`#submit-btn`).on(`click`, storeInfo);

// useful global array in the future?
const submissions = [];

// email validator
function validator(email) {
    const valid = /\S+@\S+\.\S+/;
    return valid.test(email);
}

// storeInfo() grabs all form values, creates new Objs, push to submissions[]
function storeInfo() {
    // Bootstrap was doing something weird here
    event.preventDefault();
    // remove <small>&<span> msgs, in case of multiple clicks, see below
    $(`.try-again`).remove();
    // capture values in vars
    let $contactName = $(`#contact-name`).val();
    let $contactEmail = $(`#contact-email`).val();
    let $contactMsg = $(`#contact-msg`).val();
    // if anything is blank, add a msg to contact card
    if ($contactName === `` || $contactEmail === `` || $contactMsg === ``) {
        $(`#submit-btn`).after(`<small class="try-again">Please complete all fields.</small>`);
    }
    // if validator() doesn't pass, add msg
    else if (!validator($contactEmail)) {
        $(`#submit-btn`).after(`<small class="try-again">Please complete all fields.</small>`);
        $(`#email-help`).append(`<span class="try-again">Is this right?</span>`);
    }
    // once fields are verified
    else {
        // this attr triggers Modal
        $(`#submit-btn`).attr(`data-target`, `#thanks-modal`)
        // create Obj from input
        let Contact = { name: $contactName, email: $contactEmail, msg: $contactMsg };
        // clear forms after submission
        $(`form`)[0].reset();
        // push Obj in array, load in storage
        submissions.push(Contact);
        console.log(submissions)
        localStorage.setItem(`contact`, JSON.stringify(submissions));
        setTimeout(() => {
            // remove trigger attr in case of multiple clicks
            $(`#submit-btn`).removeAttr(`data-target`);
            // remove msgs
            $(`.try-again`).remove();
        }, 200)
    }
};